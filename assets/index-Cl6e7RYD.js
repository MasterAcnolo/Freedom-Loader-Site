(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function m(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(d){if(d.ep)return;d.ep=!0;const h=m(d);fetch(d.href,h)}})();function ng(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Rr={exports:{}},Hn={};var Id;function ig(){if(Id)return Hn;Id=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function m(c,d,h){var v=null;if(h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),"key"in d){h={};for(var E in d)E!=="key"&&(h[E]=d[E])}else h=d;return d=h.ref,{$$typeof:u,type:c,key:v,ref:d!==void 0?d:null,props:h}}return Hn.Fragment=f,Hn.jsx=m,Hn.jsxs=m,Hn}var Pd;function ug(){return Pd||(Pd=1,Rr.exports=ig()),Rr.exports}var r=ug(),Mr={exports:{}},Ln={},Dr={exports:{}},Cr={};var em;function og(){return em||(em=1,(function(u){function f(O,B){var F=O.length;O.push(B);e:for(;0<F;){var me=F-1>>>1,je=O[me];if(0<d(je,B))O[me]=B,O[F]=je,F=me;else break e}}function m(O){return O.length===0?null:O[0]}function c(O){if(O.length===0)return null;var B=O[0],F=O.pop();if(F!==B){O[0]=F;e:for(var me=0,je=O.length,x=je>>>1;me<x;){var D=2*(me+1)-1,L=O[D],Q=D+1,I=O[Q];if(0>d(L,F))Q<je&&0>d(I,L)?(O[me]=I,O[Q]=F,me=Q):(O[me]=L,O[D]=F,me=D);else if(Q<je&&0>d(I,F))O[me]=I,O[Q]=F,me=Q;else break e}}return B}function d(O,B){var F=O.sortIndex-B.sortIndex;return F!==0?F:O.id-B.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var v=Date,E=v.now();u.unstable_now=function(){return v.now()-E}}var S=[],p=[],N=1,y=null,U=3,H=!1,Y=!1,X=!1,q=!1,K=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function Se(O){for(var B=m(p);B!==null;){if(B.callback===null)c(p);else if(B.startTime<=O)c(p),B.sortIndex=B.expirationTime,f(S,B);else break;B=m(p)}}function xe(O){if(X=!1,Se(O),!Y)if(m(S)!==null)Y=!0,ce||(ce=!0,G());else{var B=m(p);B!==null&&se(xe,B.startTime-O)}}var ce=!1,P=-1,ne=5,Ne=-1;function Ke(){return q?!0:!(u.unstable_now()-Ne<ne)}function Z(){if(q=!1,ce){var O=u.unstable_now();Ne=O;var B=!0;try{e:{Y=!1,X&&(X=!1,te(P),P=-1),H=!0;var F=U;try{t:{for(Se(O),y=m(S);y!==null&&!(y.expirationTime>O&&Ke());){var me=y.callback;if(typeof me=="function"){y.callback=null,U=y.priorityLevel;var je=me(y.expirationTime<=O);if(O=u.unstable_now(),typeof je=="function"){y.callback=je,Se(O),B=!0;break t}y===m(S)&&c(S),Se(O)}else c(S);y=m(S)}if(y!==null)B=!0;else{var x=m(p);x!==null&&se(xe,x.startTime-O),B=!1}}break e}finally{y=null,U=F,H=!1}B=void 0}}finally{B?G():ce=!1}}}var G;if(typeof W=="function")G=function(){W(Z)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,J=oe.port2;oe.port1.onmessage=Z,G=function(){J.postMessage(null)}}else G=function(){K(Z,0)};function se(O,B){P=K(function(){O(u.unstable_now())},B)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(O){O.callback=null},u.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<O?Math.floor(1e3/O):5},u.unstable_getCurrentPriorityLevel=function(){return U},u.unstable_next=function(O){switch(U){case 1:case 2:case 3:var B=3;break;default:B=U}var F=U;U=B;try{return O()}finally{U=F}},u.unstable_requestPaint=function(){q=!0},u.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var F=U;U=O;try{return B()}finally{U=F}},u.unstable_scheduleCallback=function(O,B,F){var me=u.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?me+F:me):F=me,O){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=F+je,O={id:N++,callback:B,priorityLevel:O,startTime:F,expirationTime:je,sortIndex:-1},F>me?(O.sortIndex=F,f(p,O),m(S)===null&&O===m(p)&&(X?(te(P),P=-1):X=!0,se(xe,F-me))):(O.sortIndex=je,f(S,O),Y||H||(Y=!0,ce||(ce=!0,G()))),O},u.unstable_shouldYield=Ke,u.unstable_wrapCallback=function(O){var B=U;return function(){var F=U;U=B;try{return O.apply(this,arguments)}finally{U=F}}}})(Cr)),Cr}var tm;function rg(){return tm||(tm=1,Dr.exports=og()),Dr.exports}var Ur={exports:{}},ie={};var am;function cg(){if(am)return ie;am=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),v=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),U=Symbol.iterator;function H(x){return x===null||typeof x!="object"?null:(x=U&&x[U]||x["@@iterator"],typeof x=="function"?x:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,q={};function K(x,D,L){this.props=x,this.context=D,this.refs=q,this.updater=L||Y}K.prototype.isReactComponent={},K.prototype.setState=function(x,D){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,D,"setState")},K.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function te(){}te.prototype=K.prototype;function W(x,D,L){this.props=x,this.context=D,this.refs=q,this.updater=L||Y}var Se=W.prototype=new te;Se.constructor=W,X(Se,K.prototype),Se.isPureReactComponent=!0;var xe=Array.isArray;function ce(){}var P={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function Ne(x,D,L){var Q=L.ref;return{$$typeof:u,type:x,key:D,ref:Q!==void 0?Q:null,props:L}}function Ke(x,D){return Ne(x.type,D,x.props)}function Z(x){return typeof x=="object"&&x!==null&&x.$$typeof===u}function G(x){var D={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(L){return D[L]})}var oe=/\/+/g;function J(x,D){return typeof x=="object"&&x!==null&&x.key!=null?G(""+x.key):D.toString(36)}function se(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ce,ce):(x.status="pending",x.then(function(D){x.status==="pending"&&(x.status="fulfilled",x.value=D)},function(D){x.status==="pending"&&(x.status="rejected",x.reason=D)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function O(x,D,L,Q,I){var ae=typeof x;(ae==="undefined"||ae==="boolean")&&(x=null);var le=!1;if(x===null)le=!0;else switch(ae){case"bigint":case"string":case"number":le=!0;break;case"object":switch(x.$$typeof){case u:case f:le=!0;break;case N:return le=x._init,O(le(x._payload),D,L,Q,I)}}if(le)return I=I(x),le=Q===""?"."+J(x,0):Q,xe(I)?(L="",le!=null&&(L=le.replace(oe,"$&/")+"/"),O(I,D,L,"",function(it){return it})):I!=null&&(Z(I)&&(I=Ke(I,L+(I.key==null||x&&x.key===I.key?"":(""+I.key).replace(oe,"$&/")+"/")+le)),D.push(I)),1;le=0;var ve=Q===""?".":Q+":";if(xe(x))for(var ye=0;ye<x.length;ye++)Q=x[ye],ae=ve+J(Q,ye),le+=O(Q,D,L,ae,I);else if(ye=H(x),typeof ye=="function")for(x=ye.call(x),ye=0;!(Q=x.next()).done;)Q=Q.value,ae=ve+J(Q,ye++),le+=O(Q,D,L,ae,I);else if(ae==="object"){if(typeof x.then=="function")return O(se(x),D,L,Q,I);throw D=String(x),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return le}function B(x,D,L){if(x==null)return x;var Q=[],I=0;return O(x,Q,"","",function(ae){return D.call(L,ae,I++)}),Q}function F(x){if(x._status===-1){var D=x._result;D=D(),D.then(function(L){(x._status===0||x._status===-1)&&(x._status=1,x._result=L)},function(L){(x._status===0||x._status===-1)&&(x._status=2,x._result=L)}),x._status===-1&&(x._status=0,x._result=D)}if(x._status===1)return x._result.default;throw x._result}var me=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},je={map:B,forEach:function(x,D,L){B(x,function(){D.apply(this,arguments)},L)},count:function(x){var D=0;return B(x,function(){D++}),D},toArray:function(x){return B(x,function(D){return D})||[]},only:function(x){if(!Z(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ie.Activity=y,ie.Children=je,ie.Component=K,ie.Fragment=m,ie.Profiler=d,ie.PureComponent=W,ie.StrictMode=c,ie.Suspense=S,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ie.__COMPILER_RUNTIME={__proto__:null,c:function(x){return P.H.useMemoCache(x)}},ie.cache=function(x){return function(){return x.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(x,D,L){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var Q=X({},x.props),I=x.key;if(D!=null)for(ae in D.key!==void 0&&(I=""+D.key),D)!ne.call(D,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&D.ref===void 0||(Q[ae]=D[ae]);var ae=arguments.length-2;if(ae===1)Q.children=L;else if(1<ae){for(var le=Array(ae),ve=0;ve<ae;ve++)le[ve]=arguments[ve+2];Q.children=le}return Ne(x.type,I,Q)},ie.createContext=function(x){return x={$$typeof:v,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:h,_context:x},x},ie.createElement=function(x,D,L){var Q,I={},ae=null;if(D!=null)for(Q in D.key!==void 0&&(ae=""+D.key),D)ne.call(D,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(I[Q]=D[Q]);var le=arguments.length-2;if(le===1)I.children=L;else if(1<le){for(var ve=Array(le),ye=0;ye<le;ye++)ve[ye]=arguments[ye+2];I.children=ve}if(x&&x.defaultProps)for(Q in le=x.defaultProps,le)I[Q]===void 0&&(I[Q]=le[Q]);return Ne(x,ae,I)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(x){return{$$typeof:E,render:x}},ie.isValidElement=Z,ie.lazy=function(x){return{$$typeof:N,_payload:{_status:-1,_result:x},_init:F}},ie.memo=function(x,D){return{$$typeof:p,type:x,compare:D===void 0?null:D}},ie.startTransition=function(x){var D=P.T,L={};P.T=L;try{var Q=x(),I=P.S;I!==null&&I(L,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ce,me)}catch(ae){me(ae)}finally{D!==null&&L.types!==null&&(D.types=L.types),P.T=D}},ie.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ie.use=function(x){return P.H.use(x)},ie.useActionState=function(x,D,L){return P.H.useActionState(x,D,L)},ie.useCallback=function(x,D){return P.H.useCallback(x,D)},ie.useContext=function(x){return P.H.useContext(x)},ie.useDebugValue=function(){},ie.useDeferredValue=function(x,D){return P.H.useDeferredValue(x,D)},ie.useEffect=function(x,D){return P.H.useEffect(x,D)},ie.useEffectEvent=function(x){return P.H.useEffectEvent(x)},ie.useId=function(){return P.H.useId()},ie.useImperativeHandle=function(x,D,L){return P.H.useImperativeHandle(x,D,L)},ie.useInsertionEffect=function(x,D){return P.H.useInsertionEffect(x,D)},ie.useLayoutEffect=function(x,D){return P.H.useLayoutEffect(x,D)},ie.useMemo=function(x,D){return P.H.useMemo(x,D)},ie.useOptimistic=function(x,D){return P.H.useOptimistic(x,D)},ie.useReducer=function(x,D,L){return P.H.useReducer(x,D,L)},ie.useRef=function(x){return P.H.useRef(x)},ie.useState=function(x){return P.H.useState(x)},ie.useSyncExternalStore=function(x,D,L){return P.H.useSyncExternalStore(x,D,L)},ie.useTransition=function(){return P.H.useTransition()},ie.version="19.2.5",ie}var lm;function Xr(){return lm||(lm=1,Ur.exports=cg()),Ur.exports}var qr={exports:{}},lt={};var nm;function sg(){if(nm)return lt;nm=1;var u=Xr();function f(S){var p="https://react.dev/errors/"+S;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)p+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+S+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(){}var c={d:{f:m,r:function(){throw Error(f(522))},D:m,C:m,L:m,m,X:m,S:m,M:m},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(S,p,N){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:y==null?null:""+y,children:S,containerInfo:p,implementation:N}}var v=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(S,p){if(S==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,lt.createPortal=function(S,p){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(f(299));return h(S,p,null,N)},lt.flushSync=function(S){var p=v.T,N=c.p;try{if(v.T=null,c.p=2,S)return S()}finally{v.T=p,c.p=N,c.d.f()}},lt.preconnect=function(S,p){typeof S=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(S,p))},lt.prefetchDNS=function(S){typeof S=="string"&&c.d.D(S)},lt.preinit=function(S,p){if(typeof S=="string"&&p&&typeof p.as=="string"){var N=p.as,y=E(N,p.crossOrigin),U=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;N==="style"?c.d.S(S,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:U,fetchPriority:H}):N==="script"&&c.d.X(S,{crossOrigin:y,integrity:U,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},lt.preinitModule=function(S,p){if(typeof S=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var N=E(p.as,p.crossOrigin);c.d.M(S,{crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(S)},lt.preload=function(S,p){if(typeof S=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var N=p.as,y=E(N,p.crossOrigin);c.d.L(S,N,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},lt.preloadModule=function(S,p){if(typeof S=="string")if(p){var N=E(p.as,p.crossOrigin);c.d.m(S,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(S)},lt.requestFormReset=function(S){c.d.r(S)},lt.unstable_batchedUpdates=function(S,p){return S(p)},lt.useFormState=function(S,p,N){return v.H.useFormState(S,p,N)},lt.useFormStatus=function(){return v.H.useHostTransitionStatus()},lt.version="19.2.5",lt}var im;function fg(){if(im)return qr.exports;im=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),qr.exports=sg(),qr.exports}var um;function dg(){if(um)return Ln;um=1;var u=rg(),f=Xr(),m=fg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(h(e)!==e)throw Error(c(188))}function p(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return S(n),e;if(i===l)return S(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var o=!1,s=n.child;s;){if(s===a){o=!0,a=n,l=i;break}if(s===l){o=!0,l=n,a=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===a){o=!0,a=i,l=n;break}if(s===l){o=!0,l=i,a=n;break}s=s.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,U=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),te=Symbol.for("react.consumer"),W=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),Ne=Symbol.for("react.activity"),Ke=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case K:return"Profiler";case q:return"StrictMode";case xe:return"Suspense";case ce:return"SuspenseList";case Ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case W:return e.displayName||"Context";case te:return(e._context.displayName||"Context")+".Consumer";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}var se=Array.isArray,O=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},me=[],je=-1;function x(e){return{current:e}}function D(e){0>je||(e.current=me[je],me[je]=null,je--)}function L(e,t){je++,me[je]=e.current,e.current=t}var Q=x(null),I=x(null),ae=x(null),le=x(null);function ve(e,t){switch(L(ae,t),L(I,e),L(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Sd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Sd(t),e=jd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(Q),L(Q,e)}function ye(){D(Q),D(I),D(ae)}function it(e){e.memoizedState!==null&&L(le,e);var t=Q.current,a=jd(t,e.type);t!==a&&(L(I,e),L(Q,a))}function mt(e){I.current===e&&(D(Q),D(I)),le.current===e&&(D(le),Dn._currentValue=F)}var ht,De;function he(e){if(ht===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ht=t&&t[1]||"",De=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+De}var Fe=!1;function Tt(e,t){if(!e||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(_){var T=_}Reflect.construct(e,[],C)}else{try{C.call()}catch(_){T=_}e.call(C.prototype)}}else{try{throw Error()}catch(_){T=_}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(_){if(_&&T&&typeof _.stack=="string")return[_.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],s=i[1];if(o&&s){var g=o.split(`
`),w=s.split(`
`);for(n=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;if(l===g.length||n===w.length)for(l=g.length-1,n=w.length-1;1<=l&&0<=n&&g[l]!==w[n];)n--;for(;1<=l&&0<=n;l--,n--)if(g[l]!==w[n]){if(l!==1||n!==1)do if(l--,n--,0>n||g[l]!==w[n]){var R=`
`+g[l].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=l&&0<=n);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?he(a):""}function Qn(e,t){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he("Lazy");case 13:return e.child!==t&&t!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return Tt(e.type,!1);case 11:return Tt(e.type.render,!1);case 1:return Tt(e.type,!0);case 31:return he("Activity");default:return""}}function Wr(e){try{var t="",a=null;do t+=Qn(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var pu=Object.prototype.hasOwnProperty,gu=u.unstable_scheduleCallback,vu=u.unstable_cancelCallback,qm=u.unstable_shouldYield,Hm=u.unstable_requestPaint,pt=u.unstable_now,Lm=u.unstable_getCurrentPriorityLevel,Ir=u.unstable_ImmediatePriority,Pr=u.unstable_UserBlockingPriority,kn=u.unstable_NormalPriority,Bm=u.unstable_LowPriority,ec=u.unstable_IdlePriority,Ym=u.log,Gm=u.unstable_setDisableYieldValue,kl=null,gt=null;function ha(e){if(typeof Ym=="function"&&Gm(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(kl,e)}catch{}}var vt=Math.clz32?Math.clz32:km,Xm=Math.log,Qm=Math.LN2;function km(e){return e>>>=0,e===0?32:31-(Xm(e)/Qm|0)|0}var Zn=256,Vn=262144,Kn=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Ba(l):(o&=s,o!==0?n=Ba(o):a||(a=s&~e,a!==0&&(n=Ba(a))))):(s=l&~i,s!==0?n=Ba(s):o!==0?n=Ba(o):a||(a=l&~e,a!==0&&(n=Ba(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Zl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tc(){var e=Kn;return Kn<<=1,(Kn&62914560)===0&&(Kn=4194304),e}function yu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Vl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vm(e,t,a,l,n,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,g=e.expirationTimes,w=e.hiddenUpdates;for(a=o&~a;0<a;){var R=31-vt(a),C=1<<R;s[R]=0,g[R]=-1;var T=w[R];if(T!==null)for(w[R]=null,R=0;R<T.length;R++){var _=T[R];_!==null&&(_.lane&=-536870913)}a&=~C}l!==0&&ac(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function ac(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-vt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function lc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-vt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function nc(e,t){var a=t&-t;return a=(a&42)!==0?1:bu(a),(a&(e.suspendedLanes|t))!==0?0:a}function bu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ic(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Zd(e.type))}function uc(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var pa=Math.random().toString(36).slice(2),Ie="__reactFiber$"+pa,ut="__reactProps$"+pa,nl="__reactContainer$"+pa,Su="__reactEvents$"+pa,Km="__reactListeners$"+pa,Jm="__reactHandles$"+pa,oc="__reactResources$"+pa,Kl="__reactMarker$"+pa;function ju(e){delete e[Ie],delete e[ut],delete e[Su],delete e[Km],delete e[Jm]}function il(e){var t=e[Ie];if(t)return t;for(var a=e.parentNode;a;){if(t=a[nl]||a[Ie]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=_d(e);e!==null;){if(a=e[Ie])return a;e=_d(e)}return t}e=a,a=e.parentNode}return null}function ul(e){if(e=e[Ie]||e[nl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Jl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ol(e){var t=e[oc];return t||(t=e[oc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[Kl]=!0}var rc=new Set,cc={};function Ya(e,t){rl(e,t),rl(e+"Capture",t)}function rl(e,t){for(cc[e]=t,e=0;e<t.length;e++)rc.add(t[e])}var Fm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sc={},fc={};function $m(e){return pu.call(fc,e)?!0:pu.call(sc,e)?!1:Fm.test(e)?fc[e]=!0:(sc[e]=!0,!1)}function Fn(e,t,a){if($m(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function $n(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ft(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function At(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eu(e){if(!e._valueTracker){var t=dc(e)?"checked":"value";e._valueTracker=Wm(e,t,""+e[t])}}function mc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=dc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Im=/[\n"\\]/g;function Nt(e){return e.replace(Im,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zu(e,t,a,l,n,i,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+At(t)):e.value!==""+At(t)&&(e.value=""+At(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?wu(e,o,At(t)):a!=null?wu(e,o,At(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+At(s):e.removeAttribute("name")}function hc(e,t,a,l,n,i,o,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Eu(e);return}a=a!=null?""+At(a):"",t=t!=null?""+At(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Eu(e)}function wu(e,t,a){t==="number"&&Wn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+At(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function pc(e,t,a){if(t!=null&&(t=""+At(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+At(a):""}function gc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(se(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=At(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Eu(e)}function sl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Pm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Pm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&vc(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&vc(e,i,t[i])}function Tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),th=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function In(e){return th.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $t(){}var Au=null;function Nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fl=null,dl=null;function bc(e){var t=ul(e);if(t&&(e=t.stateNode)){var a=e[ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(zu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[ut]||null;if(!n)throw Error(c(90));zu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&mc(l)}break e;case"textarea":pc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cl(e,!!a.multiple,t,!1)}}}var _u=!1;function xc(e,t,a){if(_u)return e(t,a);_u=!0;try{var l=e(t);return l}finally{if(_u=!1,(fl!==null||dl!==null)&&(Bi(),fl&&(t=fl,e=dl,dl=fl=null,bc(t),e)))for(t=0;t<e.length;t++)bc(e[t])}}function Fl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[ut]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if(Wt)try{var $l={};Object.defineProperty($l,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",$l,$l),window.removeEventListener("test",$l,$l)}catch{Ou=!1}var ga=null,Ru=null,Pn=null;function Sc(){if(Pn)return Pn;var e,t=Ru,a=t.length,l,n="value"in ga?ga.value:ga.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[i-l];l++);return Pn=n.slice(e,1<l?1-l:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function jc(){return!1}function ot(e){function t(a,l,n,i,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ti:jc,this.isPropagationStopped=jc,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ai=ot(Ga),Wl=y({},Ga,{view:0,detail:0}),ah=ot(Wl),Mu,Du,Il,li=y({},Wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Il&&(Il&&e.type==="mousemove"?(Mu=e.screenX-Il.screenX,Du=e.screenY-Il.screenY):Du=Mu=0,Il=e),Mu)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),Ec=ot(li),lh=y({},li,{dataTransfer:0}),nh=ot(lh),ih=y({},Wl,{relatedTarget:0}),Cu=ot(ih),uh=y({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),oh=ot(uh),rh=y({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ch=ot(rh),sh=y({},Ga,{data:0}),zc=ot(sh),fh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mh[e])?!!t[e]:!1}function Uu(){return hh}var ph=y({},Wl,{key:function(e){if(e.key){var t=fh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gh=ot(ph),vh=y({},li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=ot(vh),yh=y({},Wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),bh=ot(yh),xh=y({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sh=ot(xh),jh=y({},li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eh=ot(jh),zh=y({},Ga,{newState:0,oldState:0}),wh=ot(zh),Th=[9,13,27,32],qu=Wt&&"CompositionEvent"in window,Pl=null;Wt&&"documentMode"in document&&(Pl=document.documentMode);var Ah=Wt&&"TextEvent"in window&&!Pl,Tc=Wt&&(!qu||Pl&&8<Pl&&11>=Pl),Ac=" ",Nc=!1;function _c(e,t){switch(e){case"keyup":return Th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ml=!1;function Nh(e,t){switch(e){case"compositionend":return Oc(t);case"keypress":return t.which!==32?null:(Nc=!0,Ac);case"textInput":return e=t.data,e===Ac&&Nc?null:e;default:return null}}function _h(e,t){if(ml)return e==="compositionend"||!qu&&_c(e,t)?(e=Sc(),Pn=Ru=ga=null,ml=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tc&&t.locale!=="ko"?null:t.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Oh[e.type]:t==="textarea"}function Mc(e,t,a,l){fl?dl?dl.push(l):dl=[l]:fl=l,t=Vi(t,"onChange"),0<t.length&&(a=new ai("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var en=null,tn=null;function Rh(e){pd(e,0)}function ni(e){var t=Jl(e);if(mc(t))return e}function Dc(e,t){if(e==="change")return t}var Cc=!1;if(Wt){var Hu;if(Wt){var Lu="oninput"in document;if(!Lu){var Uc=document.createElement("div");Uc.setAttribute("oninput","return;"),Lu=typeof Uc.oninput=="function"}Hu=Lu}else Hu=!1;Cc=Hu&&(!document.documentMode||9<document.documentMode)}function qc(){en&&(en.detachEvent("onpropertychange",Hc),tn=en=null)}function Hc(e){if(e.propertyName==="value"&&ni(tn)){var t=[];Mc(t,tn,e,Nu(e)),xc(Rh,t)}}function Mh(e,t,a){e==="focusin"?(qc(),en=t,tn=a,en.attachEvent("onpropertychange",Hc)):e==="focusout"&&qc()}function Dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(tn)}function Ch(e,t){if(e==="click")return ni(t)}function Uh(e,t){if(e==="input"||e==="change")return ni(t)}function qh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:qh;function an(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!pu.call(t,n)||!yt(e[n],t[n]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bc(e,t){var a=Lc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lc(a)}}function Yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wn(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Hh=Wt&&"documentMode"in document&&11>=document.documentMode,hl=null,Yu=null,ln=null,Gu=!1;function Xc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gu||hl==null||hl!==Wn(l)||(l=hl,"selectionStart"in l&&Bu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ln&&an(ln,l)||(ln=l,l=Vi(Yu,"onSelect"),0<l.length&&(t=new ai("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=hl)))}function Xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pl={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},Xu={},Qc={};Wt&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function Qa(e){if(Xu[e])return Xu[e];if(!pl[e])return e;var t=pl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Qc)return Xu[e]=t[a];return e}var kc=Qa("animationend"),Zc=Qa("animationiteration"),Vc=Qa("animationstart"),Lh=Qa("transitionrun"),Bh=Qa("transitionstart"),Yh=Qa("transitioncancel"),Kc=Qa("transitionend"),Jc=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Bt(e,t){Jc.set(e,t),Ya(t,[e])}var ii=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],gl=0,ku=0;function ui(){for(var e=gl,t=ku=gl=0;t<e;){var a=_t[t];_t[t++]=null;var l=_t[t];_t[t++]=null;var n=_t[t];_t[t++]=null;var i=_t[t];if(_t[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&Fc(a,n,i)}}function oi(e,t,a,l){_t[gl++]=e,_t[gl++]=t,_t[gl++]=a,_t[gl++]=l,ku|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Zu(e,t,a,l){return oi(e,t,a,l),ri(e)}function ka(e,t){return oi(e,null,null,t),ri(e)}function Fc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-vt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ri(e){if(50<Tn)throw Tn=0,tr=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var vl={};function Gh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,a,l){return new Gh(e,t,a,l)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function It(e,t){var a=e.alternate;return a===null?(a=bt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $c(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,a,l,n,i){var o=0;if(l=e,typeof e=="function")Vu(e)&&(o=1);else if(typeof e=="string")o=Vp(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ne:return e=bt(31,a,t,n),e.elementType=Ne,e.lanes=i,e;case X:return Za(a.children,n,i,t);case q:o=8,n|=24;break;case K:return e=bt(12,a,t,n|2),e.elementType=K,e.lanes=i,e;case xe:return e=bt(13,a,t,n),e.elementType=xe,e.lanes=i,e;case ce:return e=bt(19,a,t,n),e.elementType=ce,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:o=10;break e;case te:o=9;break e;case Se:o=11;break e;case P:o=14;break e;case ne:o=16,l=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=bt(o,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Za(e,t,a,l){return e=bt(7,e,l,t),e.lanes=a,e}function Ku(e,t,a){return e=bt(6,e,null,t),e.lanes=a,e}function Wc(e){var t=bt(18,null,null,0);return t.stateNode=e,t}function Ju(e,t,a){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ic=new WeakMap;function Ot(e,t){if(typeof e=="object"&&e!==null){var a=Ic.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Wr(t)},Ic.set(e,t),t)}return{value:e,source:t,stack:Wr(t)}}var yl=[],bl=0,si=null,nn=0,Rt=[],Mt=0,va=null,Qt=1,kt="";function Pt(e,t){yl[bl++]=nn,yl[bl++]=si,si=e,nn=t}function Pc(e,t,a){Rt[Mt++]=Qt,Rt[Mt++]=kt,Rt[Mt++]=va,va=e;var l=Qt;e=kt;var n=32-vt(l)-1;l&=~(1<<n),a+=1;var i=32-vt(t)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,Qt=1<<32-vt(t)+n|a<<n|l,kt=i+e}else Qt=1<<i|a<<n|l,kt=e}function Fu(e){e.return!==null&&(Pt(e,1),Pc(e,1,0))}function $u(e){for(;e===si;)si=yl[--bl],yl[bl]=null,nn=yl[--bl],yl[bl]=null;for(;e===va;)va=Rt[--Mt],Rt[Mt]=null,kt=Rt[--Mt],Rt[Mt]=null,Qt=Rt[--Mt],Rt[Mt]=null}function es(e,t){Rt[Mt++]=Qt,Rt[Mt++]=kt,Rt[Mt++]=va,Qt=t.id,kt=t.overflow,va=e}var Pe=null,Ue=null,be=!1,ya=null,Dt=!1,Wu=Error(c(519));function ba(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw un(Ot(t,e)),Wu}function ts(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ie]=e,t[ut]=l,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<Nn.length;a++)de(Nn[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),hc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),gc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||bd(t.textContent,a)?(l.popover!=null&&(de("beforetoggle",t),de("toggle",t)),l.onScroll!=null&&de("scroll",t),l.onScrollEnd!=null&&de("scrollend",t),l.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||ba(e,!0)}function as(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:Pe=Pe.return}}function xl(e){if(e!==Pe)return!1;if(!be)return as(e),be=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gr(e.type,e.memoizedProps)),a=!a),a&&Ue&&ba(e),as(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ue=Nd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ue=Nd(e)}else t===27?(t=Ue,Da(e.type)?(e=Sr,Sr=null,Ue=e):Ue=t):Ue=Pe?Ut(e.stateNode.nextSibling):null;return!0}function Va(){Ue=Pe=null,be=!1}function Iu(){var e=ya;return e!==null&&(ft===null?ft=e:ft.push.apply(ft,e),ya=null),e}function un(e){ya===null?ya=[e]:ya.push(e)}var Pu=x(null),Ka=null,ea=null;function xa(e,t,a){L(Pu,t._currentValue),t._currentValue=a}function ta(e){e._currentValue=Pu.current,D(Pu)}function eo(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function to(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var g=0;g<t.length;g++)if(s.context===t[g]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),eo(i.return,a,e),l||(o=null);break e}i=s.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(c(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),eo(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function Sl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var s=n.type;yt(n.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(n===le.current){if(o=n.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Dn):e=[Dn])}n=n.return}e!==null&&to(t,e,a,l),t.flags|=262144}function fi(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Ka=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return ls(Ka,e)}function di(e,t){return Ka===null&&Ja(e),ls(e,t)}function ls(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(c(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return a}var Xh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Qh=u.unstable_scheduleCallback,kh=u.unstable_NormalPriority,Qe={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ao(){return{controller:new Xh,data:new Map,refCount:0}}function on(e){e.refCount--,e.refCount===0&&Qh(kh,function(){e.controller.abort()})}var rn=null,lo=0,jl=0,El=null;function Zh(e,t){if(rn===null){var a=rn=[];lo=0,jl=or(),El={status:"pending",value:void 0,then:function(l){a.push(l)}}}return lo++,t.then(ns,ns),t}function ns(){if(--lo===0&&rn!==null){El!==null&&(El.status="fulfilled");var e=rn;rn=null,jl=0,El=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Vh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var is=O.S;O.S=function(e,t){Qf=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zh(e,t),is!==null&&is(e,t)};var Fa=x(null);function no(){var e=Fa.current;return e!==null?e:Me.pooledCache}function mi(e,t){t===null?L(Fa,Fa.current):L(Fa,t.pool)}function us(){var e=no();return e===null?null:{parent:Qe._currentValue,pool:e}}var zl=Error(c(460)),io=Error(c(474)),hi=Error(c(542)),pi={then:function(){}};function os(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then($t,$t),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ss(e),e;default:if(typeof t.status=="string")t.then($t,$t);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ss(e),e}throw Wa=t,zl}}function $a(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wa=a,zl):a}}var Wa=null;function cs(){if(Wa===null)throw Error(c(459));var e=Wa;return Wa=null,e}function ss(e){if(e===zl||e===hi)throw Error(c(483))}var wl=null,cn=0;function gi(e){var t=cn;return cn+=1,wl===null&&(wl=[]),rs(wl,e,t)}function sn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vi(e,t){throw t.$$typeof===U?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fs(e){function t(j,b){if(e){var z=j.deletions;z===null?(j.deletions=[b],j.flags|=16):z.push(b)}}function a(j,b){if(!e)return null;for(;b!==null;)t(j,b),b=b.sibling;return null}function l(j){for(var b=new Map;j!==null;)j.key!==null?b.set(j.key,j):b.set(j.index,j),j=j.sibling;return b}function n(j,b){return j=It(j,b),j.index=0,j.sibling=null,j}function i(j,b,z){return j.index=z,e?(z=j.alternate,z!==null?(z=z.index,z<b?(j.flags|=67108866,b):z):(j.flags|=67108866,b)):(j.flags|=1048576,b)}function o(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function s(j,b,z,M){return b===null||b.tag!==6?(b=Ku(z,j.mode,M),b.return=j,b):(b=n(b,z),b.return=j,b)}function g(j,b,z,M){var $=z.type;return $===X?R(j,b,z.props.children,M,z.key):b!==null&&(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ne&&$a($)===b.type)?(b=n(b,z.props),sn(b,z),b.return=j,b):(b=ci(z.type,z.key,z.props,null,j.mode,M),sn(b,z),b.return=j,b)}function w(j,b,z,M){return b===null||b.tag!==4||b.stateNode.containerInfo!==z.containerInfo||b.stateNode.implementation!==z.implementation?(b=Ju(z,j.mode,M),b.return=j,b):(b=n(b,z.children||[]),b.return=j,b)}function R(j,b,z,M,$){return b===null||b.tag!==7?(b=Za(z,j.mode,M,$),b.return=j,b):(b=n(b,z),b.return=j,b)}function C(j,b,z){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Ku(""+b,j.mode,z),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case H:return z=ci(b.type,b.key,b.props,null,j.mode,z),sn(z,b),z.return=j,z;case Y:return b=Ju(b,j.mode,z),b.return=j,b;case ne:return b=$a(b),C(j,b,z)}if(se(b)||G(b))return b=Za(b,j.mode,z,null),b.return=j,b;if(typeof b.then=="function")return C(j,gi(b),z);if(b.$$typeof===W)return C(j,di(j,b),z);vi(j,b)}return null}function T(j,b,z,M){var $=b!==null?b.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return $!==null?null:s(j,b,""+z,M);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case H:return z.key===$?g(j,b,z,M):null;case Y:return z.key===$?w(j,b,z,M):null;case ne:return z=$a(z),T(j,b,z,M)}if(se(z)||G(z))return $!==null?null:R(j,b,z,M,null);if(typeof z.then=="function")return T(j,b,gi(z),M);if(z.$$typeof===W)return T(j,b,di(j,z),M);vi(j,z)}return null}function _(j,b,z,M,$){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return j=j.get(z)||null,s(b,j,""+M,$);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case H:return j=j.get(M.key===null?z:M.key)||null,g(b,j,M,$);case Y:return j=j.get(M.key===null?z:M.key)||null,w(b,j,M,$);case ne:return M=$a(M),_(j,b,z,M,$)}if(se(M)||G(M))return j=j.get(z)||null,R(b,j,M,$,null);if(typeof M.then=="function")return _(j,b,z,gi(M),$);if(M.$$typeof===W)return _(j,b,z,di(b,M),$);vi(b,M)}return null}function k(j,b,z,M){for(var $=null,Ee=null,V=b,re=b=0,ge=null;V!==null&&re<z.length;re++){V.index>re?(ge=V,V=null):ge=V.sibling;var ze=T(j,V,z[re],M);if(ze===null){V===null&&(V=ge);break}e&&V&&ze.alternate===null&&t(j,V),b=i(ze,b,re),Ee===null?$=ze:Ee.sibling=ze,Ee=ze,V=ge}if(re===z.length)return a(j,V),be&&Pt(j,re),$;if(V===null){for(;re<z.length;re++)V=C(j,z[re],M),V!==null&&(b=i(V,b,re),Ee===null?$=V:Ee.sibling=V,Ee=V);return be&&Pt(j,re),$}for(V=l(V);re<z.length;re++)ge=_(V,j,re,z[re],M),ge!==null&&(e&&ge.alternate!==null&&V.delete(ge.key===null?re:ge.key),b=i(ge,b,re),Ee===null?$=ge:Ee.sibling=ge,Ee=ge);return e&&V.forEach(function(La){return t(j,La)}),be&&Pt(j,re),$}function ee(j,b,z,M){if(z==null)throw Error(c(151));for(var $=null,Ee=null,V=b,re=b=0,ge=null,ze=z.next();V!==null&&!ze.done;re++,ze=z.next()){V.index>re?(ge=V,V=null):ge=V.sibling;var La=T(j,V,ze.value,M);if(La===null){V===null&&(V=ge);break}e&&V&&La.alternate===null&&t(j,V),b=i(La,b,re),Ee===null?$=La:Ee.sibling=La,Ee=La,V=ge}if(ze.done)return a(j,V),be&&Pt(j,re),$;if(V===null){for(;!ze.done;re++,ze=z.next())ze=C(j,ze.value,M),ze!==null&&(b=i(ze,b,re),Ee===null?$=ze:Ee.sibling=ze,Ee=ze);return be&&Pt(j,re),$}for(V=l(V);!ze.done;re++,ze=z.next())ze=_(V,j,re,ze.value,M),ze!==null&&(e&&ze.alternate!==null&&V.delete(ze.key===null?re:ze.key),b=i(ze,b,re),Ee===null?$=ze:Ee.sibling=ze,Ee=ze);return e&&V.forEach(function(lg){return t(j,lg)}),be&&Pt(j,re),$}function Re(j,b,z,M){if(typeof z=="object"&&z!==null&&z.type===X&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case H:e:{for(var $=z.key;b!==null;){if(b.key===$){if($=z.type,$===X){if(b.tag===7){a(j,b.sibling),M=n(b,z.props.children),M.return=j,j=M;break e}}else if(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ne&&$a($)===b.type){a(j,b.sibling),M=n(b,z.props),sn(M,z),M.return=j,j=M;break e}a(j,b);break}else t(j,b);b=b.sibling}z.type===X?(M=Za(z.props.children,j.mode,M,z.key),M.return=j,j=M):(M=ci(z.type,z.key,z.props,null,j.mode,M),sn(M,z),M.return=j,j=M)}return o(j);case Y:e:{for($=z.key;b!==null;){if(b.key===$)if(b.tag===4&&b.stateNode.containerInfo===z.containerInfo&&b.stateNode.implementation===z.implementation){a(j,b.sibling),M=n(b,z.children||[]),M.return=j,j=M;break e}else{a(j,b);break}else t(j,b);b=b.sibling}M=Ju(z,j.mode,M),M.return=j,j=M}return o(j);case ne:return z=$a(z),Re(j,b,z,M)}if(se(z))return k(j,b,z,M);if(G(z)){if($=G(z),typeof $!="function")throw Error(c(150));return z=$.call(z),ee(j,b,z,M)}if(typeof z.then=="function")return Re(j,b,gi(z),M);if(z.$$typeof===W)return Re(j,b,di(j,z),M);vi(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,b!==null&&b.tag===6?(a(j,b.sibling),M=n(b,z),M.return=j,j=M):(a(j,b),M=Ku(z,j.mode,M),M.return=j,j=M),o(j)):a(j,b)}return function(j,b,z,M){try{cn=0;var $=Re(j,b,z,M);return wl=null,$}catch(V){if(V===zl||V===hi)throw V;var Ee=bt(29,V,null,j.mode);return Ee.lanes=M,Ee.return=j,Ee}}}var Ia=fs(!0),ds=fs(!1),Sa=!1;function uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ri(e),Fc(e,null,a),t}return oi(e,l,t,a),ri(e)}function fn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,lc(e,a)}}function ro(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var co=!1;function dn(){if(co){var e=El;if(e!==null)throw e}}function mn(e,t,a,l){co=!1;var n=e.updateQueue;Sa=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var g=s,w=g.next;g.next=null,o===null?i=w:o.next=w,o=g;var R=e.alternate;R!==null&&(R=R.updateQueue,s=R.lastBaseUpdate,s!==o&&(s===null?R.firstBaseUpdate=w:s.next=w,R.lastBaseUpdate=g))}if(i!==null){var C=n.baseState;o=0,R=w=g=null,s=i;do{var T=s.lane&-536870913,_=T!==s.lane;if(_?(pe&T)===T:(l&T)===T){T!==0&&T===jl&&(co=!0),R!==null&&(R=R.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var k=e,ee=s;T=t;var Re=a;switch(ee.tag){case 1:if(k=ee.payload,typeof k=="function"){C=k.call(Re,C,T);break e}C=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=ee.payload,T=typeof k=="function"?k.call(Re,C,T):k,T==null)break e;C=y({},C,T);break e;case 2:Sa=!0}}T=s.callback,T!==null&&(e.flags|=64,_&&(e.flags|=8192),_=n.callbacks,_===null?n.callbacks=[T]:_.push(T))}else _={lane:T,tag:s.tag,payload:s.payload,callback:s.callback,next:null},R===null?(w=R=_,g=C):R=R.next=_,o|=T;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;_=s,s=_.next,_.next=null,n.lastBaseUpdate=_,n.shared.pending=null}}while(!0);R===null&&(g=C),n.baseState=g,n.firstBaseUpdate=w,n.lastBaseUpdate=R,i===null&&(n.shared.lanes=0),Na|=o,e.lanes=o,e.memoizedState=C}}function ms(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function hs(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ms(a[e],t)}var Tl=x(null),yi=x(0);function ps(e,t){e=sa,L(yi,e),L(Tl,t),sa=e|t.baseLanes}function so(){L(yi,sa),L(Tl,Tl.current)}function fo(){sa=yi.current,D(Tl),D(yi)}var xt=x(null),Ct=null;function za(e){var t=e.alternate;L(Ge,Ge.current&1),L(xt,e),Ct===null&&(t===null||Tl.current!==null||t.memoizedState!==null)&&(Ct=e)}function mo(e){L(Ge,Ge.current),L(xt,e),Ct===null&&(Ct=e)}function gs(e){e.tag===22?(L(Ge,Ge.current),L(xt,e),Ct===null&&(Ct=e)):wa()}function wa(){L(Ge,Ge.current),L(xt,xt.current)}function St(e){D(xt),Ct===e&&(Ct=null),D(Ge)}var Ge=x(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||br(a)||xr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=0,ue=null,_e=null,ke=null,xi=!1,Al=!1,Pa=!1,Si=0,hn=0,Nl=null,Kh=0;function Be(){throw Error(c(321))}function ho(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function po(e,t,a,l,n,i){return aa=i,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Ps:Oo,Pa=!1,i=a(l,n),Pa=!1,Al&&(i=ys(t,a,l,n)),vs(e),i}function vs(e){O.H=vn;var t=_e!==null&&_e.next!==null;if(aa=0,ke=_e=ue=null,xi=!1,hn=0,Nl=null,t)throw Error(c(300));e===null||Ze||(e=e.dependencies,e!==null&&fi(e)&&(Ze=!0))}function ys(e,t,a,l){ue=e;var n=0;do{if(Al&&(Nl=null),hn=0,Al=!1,25<=n)throw Error(c(301));if(n+=1,ke=_e=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}O.H=ef,i=t(a,l)}while(Al);return i}function Jh(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?pn(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(ue.flags|=1024),t}function go(){var e=Si!==0;return Si=0,e}function vo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function yo(e){if(xi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xi=!1}aa=0,ke=_e=ue=null,Al=!1,hn=Si=0,Nl=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ue.memoizedState=ke=e:ke=ke.next=e,ke}function Xe(){if(_e===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=ke===null?ue.memoizedState:ke.next;if(t!==null)ke=t,_e=e;else{if(e===null)throw ue.alternate===null?Error(c(467)):Error(c(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},ke===null?ue.memoizedState=ke=e:ke=ke.next=e}return ke}function ji(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pn(e){var t=hn;return hn+=1,Nl===null&&(Nl=[]),e=rs(Nl,e,t),t=ue,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Ps:Oo),e}function Ei(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pn(e);if(e.$$typeof===W)return et(e)}throw Error(c(438,String(e)))}function bo(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ji(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ke;return t.index++,a}function la(e,t){return typeof t=="function"?t(e):t}function zi(e){var t=Xe();return xo(t,_e,e)}function xo(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=o=null,g=null,w=t,R=!1;do{var C=w.lane&-536870913;if(C!==w.lane?(pe&C)===C:(aa&C)===C){var T=w.revertLane;if(T===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),C===jl&&(R=!0);else if((aa&T)===T){w=w.next,T===jl&&(R=!0);continue}else C={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},g===null?(s=g=C,o=i):g=g.next=C,ue.lanes|=T,Na|=T;C=w.action,Pa&&a(i,C),i=w.hasEagerState?w.eagerState:a(i,C)}else T={lane:C,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},g===null?(s=g=T,o=i):g=g.next=T,ue.lanes|=C,Na|=C;w=w.next}while(w!==null&&w!==t);if(g===null?o=i:g.next=s,!yt(i,e.memoizedState)&&(Ze=!0,R&&(a=El,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=g,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function So(e){var t=Xe(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);yt(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function bs(e,t,a){var l=ue,n=Xe(),i=be;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!yt((_e||n).memoizedState,a);if(o&&(n.memoizedState=a,Ze=!0),n=n.queue,zo(js.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(l.flags|=2048,_l(9,{destroy:void 0},Ss.bind(null,l,n,a,t),null),Me===null)throw Error(c(349));i||(aa&127)!==0||xs(l,t,a)}return a}function xs(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=ji(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ss(e,t,a,l){t.value=a,t.getSnapshot=l,Es(t)&&zs(e)}function js(e,t,a){return a(function(){Es(t)&&zs(e)})}function Es(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch{return!0}}function zs(e){var t=ka(e,2);t!==null&&dt(t,e,2)}function jo(e){var t=nt();if(typeof e=="function"){var a=e;if(e=a(),Pa){ha(!0);try{a()}finally{ha(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},t}function ws(e,t,a,l){return e.baseState=a,xo(e,_e,typeof l=="function"?l:la)}function Fh(e,t,a,l,n){if(Ai(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};O.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Ts(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ts(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=O.T,o={};O.T=o;try{var s=a(n,l),g=O.S;g!==null&&g(o,s),As(e,t,s)}catch(w){Eo(e,t,w)}finally{i!==null&&o.types!==null&&(i.types=o.types),O.T=i}}else try{i=a(n,l),As(e,t,i)}catch(w){Eo(e,t,w)}}function As(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ns(e,t,l)},function(l){return Eo(e,t,l)}):Ns(e,t,a)}function Ns(e,t,a){t.status="fulfilled",t.value=a,_s(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ts(e,a)))}function Eo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,_s(t),t=t.next;while(t!==l)}e.action=null}function _s(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Os(e,t){return t}function Rs(e,t){if(be){var a=Me.formState;if(a!==null){e:{var l=ue;if(be){if(Ue){t:{for(var n=Ue,i=Dt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Ut(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ue=Ut(n.nextSibling),l=n.data==="F!";break e}}ba(l)}l=!1}l&&(t=a[0])}}return a=nt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:t},a.queue=l,a=$s.bind(null,ue,l),l.dispatch=a,l=jo(!1),i=_o.bind(null,ue,!1,l.queue),l=nt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Fh.bind(null,ue,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Ms(e){var t=Xe();return Ds(t,_e,e)}function Ds(e,t,a){if(t=xo(e,t,Os)[0],e=zi(la)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=pn(t)}catch(o){throw o===zl?hi:o}else l=t;t=Xe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,_l(9,{destroy:void 0},$h.bind(null,n,a),null)),[l,i,e]}function $h(e,t){e.action=t}function Cs(e){var t=Xe(),a=_e;if(a!==null)return Ds(t,a,e);Xe(),t=t.memoizedState,a=Xe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function _l(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ue.updateQueue,t===null&&(t=ji(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Us(){return Xe().memoizedState}function wi(e,t,a,l){var n=nt();ue.flags|=e,n.memoizedState=_l(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ti(e,t,a,l){var n=Xe();l=l===void 0?null:l;var i=n.memoizedState.inst;_e!==null&&l!==null&&ho(l,_e.memoizedState.deps)?n.memoizedState=_l(t,i,a,l):(ue.flags|=e,n.memoizedState=_l(1|t,i,a,l))}function qs(e,t){wi(8390656,8,e,t)}function zo(e,t){Ti(2048,8,e,t)}function Wh(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=ji(),ue.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Hs(e){var t=Xe().memoizedState;return Wh({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Ls(e,t){return Ti(4,2,e,t)}function Bs(e,t){return Ti(4,4,e,t)}function Ys(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gs(e,t,a){a=a!=null?a.concat([e]):null,Ti(4,4,Ys.bind(null,t,e),a)}function wo(){}function Xs(e,t){var a=Xe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ho(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Qs(e,t){var a=Xe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ho(t,l[1]))return l[0];if(l=e(),Pa){ha(!0);try{e()}finally{ha(!1)}}return a.memoizedState=[l,t],l}function To(e,t,a){return a===void 0||(aa&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Zf(),ue.lanes|=e,Na|=e,a)}function ks(e,t,a,l){return yt(a,t)?a:Tl.current!==null?(e=To(e,a,l),yt(e,t)||(Ze=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(pe&261930)===0?(Ze=!0,e.memoizedState=a):(e=Zf(),ue.lanes|=e,Na|=e,t)}function Zs(e,t,a,l,n){var i=B.p;B.p=i!==0&&8>i?i:8;var o=O.T,s={};O.T=s,_o(e,!1,t,a);try{var g=n(),w=O.S;if(w!==null&&w(s,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var R=Vh(g,l);gn(e,t,R,zt(e))}else gn(e,t,l,zt(e))}catch(C){gn(e,t,{then:function(){},status:"rejected",reason:C},zt())}finally{B.p=i,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Ih(){}function Ao(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=Vs(e).queue;Zs(e,n,t,F,a===null?Ih:function(){return Ks(e),a(l)})}function Vs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ks(e){var t=Vs(e);t.next===null&&(t=e.alternate.memoizedState),gn(e,t.next.queue,{},zt())}function No(){return et(Dn)}function Js(){return Xe().memoizedState}function Fs(){return Xe().memoizedState}function Ph(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=zt();e=ja(a);var l=Ea(t,e,a);l!==null&&(dt(l,t,a),fn(l,t,a)),t={cache:ao()},e.payload=t;return}t=t.return}}function ep(e,t,a){var l=zt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ai(e)?Ws(t,a):(a=Zu(e,t,a,l),a!==null&&(dt(a,e,l),Is(a,t,l)))}function $s(e,t,a){var l=zt();gn(e,t,a,l)}function gn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ai(e))Ws(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,a);if(n.hasEagerState=!0,n.eagerState=s,yt(s,o))return oi(e,t,n,0),Me===null&&ui(),!1}catch{}if(a=Zu(e,t,n,l),a!==null)return dt(a,e,l),Is(a,t,l),!0}return!1}function _o(e,t,a,l){if(l={lane:2,revertLane:or(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ai(e)){if(t)throw Error(c(479))}else t=Zu(e,a,l,2),t!==null&&dt(t,e,2)}function Ai(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Ws(e,t){Al=xi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Is(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,lc(e,a)}}var vn={readContext:et,use:Ei,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be};vn.useEffectEvent=Be;var Ps={readContext:et,use:Ei,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:qs,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,wi(4194308,4,Ys.bind(null,t,e),a)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){wi(4,2,e,t)},useMemo:function(e,t){var a=nt();t=t===void 0?null:t;var l=e();if(Pa){ha(!0);try{e()}finally{ha(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=nt();if(a!==void 0){var n=a(t);if(Pa){ha(!0);try{a(t)}finally{ha(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=ep.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=jo(e);var t=e.queue,a=$s.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:wo,useDeferredValue:function(e,t){var a=nt();return To(a,e,t)},useTransition:function(){var e=jo(!1);return e=Zs.bind(null,ue,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ue,n=nt();if(be){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Me===null)throw Error(c(349));(pe&127)!==0||xs(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,qs(js.bind(null,l,i,e),[e]),l.flags|=2048,_l(9,{destroy:void 0},Ss.bind(null,l,i,a,t),null),a},useId:function(){var e=nt(),t=Me.identifierPrefix;if(be){var a=kt,l=Qt;a=(l&~(1<<32-vt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Si++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Kh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:No,useFormState:Rs,useActionState:Rs,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=_o.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:bo,useCacheRefresh:function(){return nt().memoizedState=Ph.bind(null,ue)},useEffectEvent:function(e){var t=nt(),a={impl:e};return t.memoizedState=a,function(){if((we&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Oo={readContext:et,use:Ei,useCallback:Xs,useContext:et,useEffect:zo,useImperativeHandle:Gs,useInsertionEffect:Ls,useLayoutEffect:Bs,useMemo:Qs,useReducer:zi,useRef:Us,useState:function(){return zi(la)},useDebugValue:wo,useDeferredValue:function(e,t){var a=Xe();return ks(a,_e.memoizedState,e,t)},useTransition:function(){var e=zi(la)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:pn(e),t]},useSyncExternalStore:bs,useId:Js,useHostTransitionStatus:No,useFormState:Ms,useActionState:Ms,useOptimistic:function(e,t){var a=Xe();return ws(a,_e,e,t)},useMemoCache:bo,useCacheRefresh:Fs};Oo.useEffectEvent=Hs;var ef={readContext:et,use:Ei,useCallback:Xs,useContext:et,useEffect:zo,useImperativeHandle:Gs,useInsertionEffect:Ls,useLayoutEffect:Bs,useMemo:Qs,useReducer:So,useRef:Us,useState:function(){return So(la)},useDebugValue:wo,useDeferredValue:function(e,t){var a=Xe();return _e===null?To(a,e,t):ks(a,_e.memoizedState,e,t)},useTransition:function(){var e=So(la)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:pn(e),t]},useSyncExternalStore:bs,useId:Js,useHostTransitionStatus:No,useFormState:Cs,useActionState:Cs,useOptimistic:function(e,t){var a=Xe();return _e!==null?ws(a,_e,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:bo,useCacheRefresh:Fs};ef.useEffectEvent=Hs;function Ro(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=zt(),n=ja(l);n.payload=t,a!=null&&(n.callback=a),t=Ea(e,n,l),t!==null&&(dt(t,e,l),fn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=zt(),n=ja(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Ea(e,n,l),t!==null&&(dt(t,e,l),fn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=zt(),l=ja(a);l.tag=2,t!=null&&(l.callback=t),t=Ea(e,l,a),t!==null&&(dt(t,e,a),fn(t,e,a))}};function tf(e,t,a,l,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!an(a,l)||!an(n,i):!0}function af(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function el(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function lf(e){ii(e)}function nf(e){console.error(e)}function uf(e){ii(e)}function Ni(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function of(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Do(e,t,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Ni(e,t)},a}function rf(e){return e=ja(e),e.tag=3,e}function cf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){of(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){of(t,a,l),typeof n!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function tp(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Sl(t,a,n,!0),a=xt.current,a!==null){switch(a.tag){case 31:case 13:return Ct===null?Yi():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===pi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),nr(e,l,n)),!1;case 22:return a.flags|=65536,l===pi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),nr(e,l,n)),!1}throw Error(c(435,a.tag))}return nr(e,l,n),Yi(),!1}if(be)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Wu&&(e=Error(c(422),{cause:l}),un(Ot(e,a)))):(l!==Wu&&(t=Error(c(423),{cause:l}),un(Ot(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Ot(l,a),n=Do(e.stateNode,l,n),ro(e,n),Ye!==4&&(Ye=2)),!1;var i=Error(c(520),{cause:l});if(i=Ot(i,a),wn===null?wn=[i]:wn.push(i),Ye!==4&&(Ye=2),t===null)return!0;l=Ot(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Do(a.stateNode,l,e),ro(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(_a===null||!_a.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=rf(n),cf(n,e,a,l),ro(a,n),!1}a=a.return}while(a!==null);return!1}var Co=Error(c(461)),Ze=!1;function tt(e,t,a,l){t.child=e===null?ds(t,null,a,l):Ia(t,e.child,a,l)}function sf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var o={};for(var s in l)s!=="ref"&&(o[s]=l[s])}else o=l;return Ja(t),l=po(e,t,a,o,i,n),s=go(),e!==null&&!Ze?(vo(e,t,n),na(e,t,n)):(be&&s&&Fu(t),t.flags|=1,tt(e,t,l,n),t.child)}function ff(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Vu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,df(e,t,i,l,n)):(e=ci(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Xo(e,n)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:an,a(o,l)&&e.ref===t.ref)return na(e,t,n)}return t.flags|=1,e=It(i,l),e.ref=t.ref,e.return=t,t.child=e}function df(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(an(i,l)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=l=i,Xo(e,n))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,na(e,t,n)}return Uo(e,t,a,l,n)}function mf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return hf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&mi(t,i!==null?i.cachePool:null),i!==null?ps(t,i):so(),gs(t);else return l=t.lanes=536870912,hf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(mi(t,i.cachePool),ps(t,i),wa(),t.memoizedState=null):(e!==null&&mi(t,null),so(),wa());return tt(e,t,n,a),t.child}function yn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hf(e,t,a,l,n){var i=no();return i=i===null?null:{parent:Qe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&mi(t,null),so(),gs(t),e!==null&&Sl(e,t,l,!0),t.childLanes=n,null}function _i(e,t){return t=Ri({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pf(e,t,a){return Ia(t,e.child,null,a),e=_i(t,t.pendingProps),e.flags|=2,St(t),t.memoizedState=null,e}function ap(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(be){if(l.mode==="hidden")return e=_i(t,l),t.lanes=536870912,yn(null,e);if(mo(t),(e=Ue)?(e=Ad(e,Dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:va!==null?{id:Qt,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},a=Wc(e),a.return=t,t.child=a,Pe=t,Ue=null)):e=null,e===null)throw ba(t);return t.lanes=536870912,null}return _i(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(mo(t),n)if(t.flags&256)t.flags&=-257,t=pf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ze||Sl(e,t,a,!1),n=(a&e.childLanes)!==0,Ze||n){if(l=Me,l!==null&&(o=nc(l,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,ka(e,o),dt(l,e,o),Co;Yi(),t=pf(e,t,a)}else e=i.treeContext,Ue=Ut(o.nextSibling),Pe=t,be=!0,ya=null,Dt=!1,e!==null&&es(t,e),t=_i(t,l),t.flags|=4096;return t}return e=It(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Oi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Uo(e,t,a,l,n){return Ja(t),a=po(e,t,a,l,void 0,n),l=go(),e!==null&&!Ze?(vo(e,t,n),na(e,t,n)):(be&&l&&Fu(t),t.flags|=1,tt(e,t,a,n),t.child)}function gf(e,t,a,l,n,i){return Ja(t),t.updateQueue=null,a=ys(t,l,a,n),vs(e),l=go(),e!==null&&!Ze?(vo(e,t,i),na(e,t,i)):(be&&l&&Fu(t),t.flags|=1,tt(e,t,a,i),t.child)}function vf(e,t,a,l,n){if(Ja(t),t.stateNode===null){var i=vl,o=a.contextType;typeof o=="object"&&o!==null&&(i=et(o)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Mo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},uo(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?et(o):vl,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Ro(t,a,o,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Mo.enqueueReplaceState(i,i.state,null),mn(t,l,i,n),dn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,g=el(a,s);i.props=g;var w=i.context,R=a.contextType;o=vl,typeof R=="object"&&R!==null&&(o=et(R));var C=a.getDerivedStateFromProps;R=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||w!==o)&&af(t,i,l,o),Sa=!1;var T=t.memoizedState;i.state=T,mn(t,l,i,n),dn(),w=t.memoizedState,s||T!==w||Sa?(typeof C=="function"&&(Ro(t,a,C,l),w=t.memoizedState),(g=Sa||tf(t,a,g,l,T,w,o))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=o,l=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,oo(e,t),o=t.memoizedProps,R=el(a,o),i.props=R,C=t.pendingProps,T=i.context,w=a.contextType,g=vl,typeof w=="object"&&w!==null&&(g=et(w)),s=a.getDerivedStateFromProps,(w=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==C||T!==g)&&af(t,i,l,g),Sa=!1,T=t.memoizedState,i.state=T,mn(t,l,i,n),dn();var _=t.memoizedState;o!==C||T!==_||Sa||e!==null&&e.dependencies!==null&&fi(e.dependencies)?(typeof s=="function"&&(Ro(t,a,s,l),_=t.memoizedState),(R=Sa||tf(t,a,R,l,T,_,g)||e!==null&&e.dependencies!==null&&fi(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,_,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,_,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=_),i.props=l,i.state=_,i.context=g,l=R):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Oi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ia(t,e.child,null,n),t.child=Ia(t,null,a,n)):tt(e,t,a,n),t.memoizedState=i.state,e=t.child):e=na(e,t,n),e}function yf(e,t,a,l){return Va(),t.flags|=256,tt(e,t,a,l),t.child}var qo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ho(e){return{baseLanes:e,cachePool:us()}}function Lo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Et),e}function bf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(be){if(n?za(t):wa(),(e=Ue)?(e=Ad(e,Dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:va!==null?{id:Qt,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},a=Wc(e),a.return=t,t.child=a,Pe=t,Ue=null)):e=null,e===null)throw ba(t);return xr(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(wa(),n=t.mode,s=Ri({mode:"hidden",children:s},n),l=Za(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=Ho(a),l.childLanes=Lo(e,o,a),t.memoizedState=qo,yn(null,l)):(za(t),Bo(t,s))}var g=e.memoizedState;if(g!==null&&(s=g.dehydrated,s!==null)){if(i)t.flags&256?(za(t),t.flags&=-257,t=Yo(e,t,a)):t.memoizedState!==null?(wa(),t.child=e.child,t.flags|=128,t=null):(wa(),s=l.fallback,n=t.mode,l=Ri({mode:"visible",children:l.children},n),s=Za(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Ia(t,e.child,null,a),l=t.child,l.memoizedState=Ho(a),l.childLanes=Lo(e,o,a),t.memoizedState=qo,t=yn(null,l));else if(za(t),xr(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var w=o.dgst;o=w,l=Error(c(419)),l.stack="",l.digest=o,un({value:l,source:null,stack:null}),t=Yo(e,t,a)}else if(Ze||Sl(e,t,a,!1),o=(a&e.childLanes)!==0,Ze||o){if(o=Me,o!==null&&(l=nc(o,a),l!==0&&l!==g.retryLane))throw g.retryLane=l,ka(e,l),dt(o,e,l),Co;br(s)||Yi(),t=Yo(e,t,a)}else br(s)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Ue=Ut(s.nextSibling),Pe=t,be=!0,ya=null,Dt=!1,e!==null&&es(t,e),t=Bo(t,l.children),t.flags|=4096);return t}return n?(wa(),s=l.fallback,n=t.mode,g=e.child,w=g.sibling,l=It(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,w!==null?s=It(w,s):(s=Za(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,yn(null,l),l=t.child,s=e.child.memoizedState,s===null?s=Ho(a):(n=s.cachePool,n!==null?(g=Qe._currentValue,n=n.parent!==g?{parent:g,pool:g}:n):n=us(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=Lo(e,o,a),t.memoizedState=qo,yn(e.child,l)):(za(t),a=e.child,e=a.sibling,a=It(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Bo(e,t){return t=Ri({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ri(e,t){return e=bt(22,e,null,t),e.lanes=0,e}function Yo(e,t,a){return Ia(t,e.child,null,a),e=Bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),eo(e.return,t,a)}function Go(e,t,a,l,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=i)}function Sf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var o=Ge.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,L(Ge,o),tt(e,t,l,a),l=be?nn:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xf(e,a,t);else if(e.tag===19)xf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&bi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Go(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&bi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Go(t,!0,a,null,i,l);break;case"together":Go(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function na(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Na|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Sl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=It(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=It(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Xo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fi(e)))}function lp(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),xa(t,Qe,e.memoizedState.cache),Va();break;case 27:case 5:it(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(za(t),t.flags|=128,null):(a&t.child.childLanes)!==0?bf(e,t,a):(za(t),e=na(e,t,a),e!==null?e.sibling:null);za(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Sl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Sf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),L(Ge,Ge.current),l)break;return null;case 22:return t.lanes=0,mf(e,t,a,t.pendingProps);case 24:xa(t,Qe,e.memoizedState.cache)}return na(e,t,a)}function jf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Xo(e,a)&&(t.flags&128)===0)return Ze=!1,lp(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,be&&(t.flags&1048576)!==0&&Pc(t,nn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=$a(t.elementType),t.type=e,typeof e=="function")Vu(e)?(l=el(e,l),t.tag=1,t=vf(null,t,e,l,a)):(t.tag=0,t=Uo(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Se){t.tag=11,t=sf(null,t,e,l,a);break e}else if(n===P){t.tag=14,t=ff(null,t,e,l,a);break e}}throw t=J(e)||e,Error(c(306,t,""))}}return t;case 0:return Uo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=el(l,t.pendingProps),vf(e,t,l,n,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,oo(e,t),mn(t,l,null,a);var o=t.memoizedState;if(l=o.cache,xa(t,Qe,l),l!==i.cache&&to(t,[Qe],a,!0),dn(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=yf(e,t,l,a);break e}else if(l!==n){n=Ot(Error(c(424)),t),un(n),t=yf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ue=Ut(e.firstChild),Pe=t,be=!0,ya=null,Dt=!0,a=ds(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Va(),l===n){t=na(e,t,a);break e}tt(e,t,l,a)}t=t.child}return t;case 26:return Oi(e,t),e===null?(a=Dd(t.type,null,t.pendingProps,null))?t.memoizedState=a:be||(a=t.type,e=t.pendingProps,l=Ki(ae.current).createElement(a),l[Ie]=t,l[ut]=e,at(l,a,e),$e(l),t.stateNode=l):t.memoizedState=Dd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return it(t),e===null&&be&&(l=t.stateNode=Od(t.type,t.pendingProps,ae.current),Pe=t,Dt=!0,n=Ue,Da(t.type)?(Sr=n,Ue=Ut(l.firstChild)):Ue=n),tt(e,t,t.pendingProps.children,a),Oi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&be&&((n=l=Ue)&&(l=Dp(l,t.type,t.pendingProps,Dt),l!==null?(t.stateNode=l,Pe=t,Ue=Ut(l.firstChild),Dt=!1,n=!0):n=!1),n||ba(t)),it(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,gr(n,i)?l=null:o!==null&&gr(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=po(e,t,Jh,null,null,a),Dn._currentValue=n),Oi(e,t),tt(e,t,l,a),t.child;case 6:return e===null&&be&&((e=a=Ue)&&(a=Cp(a,t.pendingProps,Dt),a!==null?(t.stateNode=a,Pe=t,Ue=null,e=!0):e=!1),e||ba(t)),null;case 13:return bf(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ia(t,null,l,a):tt(e,t,l,a),t.child;case 11:return sf(e,t,t.type,t.pendingProps,a);case 7:return tt(e,t,t.pendingProps,a),t.child;case 8:return tt(e,t,t.pendingProps.children,a),t.child;case 12:return tt(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,xa(t,t.type,l.value),tt(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ja(t),n=et(n),l=l(n),t.flags|=1,tt(e,t,l,a),t.child;case 14:return ff(e,t,t.type,t.pendingProps,a);case 15:return df(e,t,t.type,t.pendingProps,a);case 19:return Sf(e,t,a);case 31:return ap(e,t,a);case 22:return mf(e,t,a,t.pendingProps);case 24:return Ja(t),l=et(Qe),e===null?(n=no(),n===null&&(n=Me,i=ao(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},uo(t),xa(t,Qe,n)):((e.lanes&a)!==0&&(oo(e,t),mn(t,null,null,a),dn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),xa(t,Qe,l)):(l=i.cache,xa(t,Qe,l),l!==n.cache&&to(t,[Qe],a,!0))),tt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ia(e){e.flags|=4}function Qo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Ff())e.flags|=8192;else throw Wa=pi,io}else e.flags&=-16777217}function Ef(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ld(t))if(Ff())e.flags|=8192;else throw Wa=pi,io}function Mi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?tc():536870912,e.lanes|=t,Dl|=t)}function bn(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function np(e,t,a){var l=t.pendingProps;switch($u(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ta(Qe),ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xl(t)?ia(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Iu())),qe(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ia(t),i!==null?(qe(t),Ef(t,i)):(qe(t),Qo(t,n,null,l,a))):i?i!==e.memoizedState?(ia(t),qe(t),Ef(t,i)):(qe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ia(t),qe(t),Qo(t,n,e,l,a)),null;case 27:if(mt(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ia(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return qe(t),null}e=Q.current,xl(t)?ts(t):(e=Od(n,l,a),t.stateNode=e,ia(t))}return qe(t),null;case 5:if(mt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ia(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return qe(t),null}if(i=Q.current,xl(t))ts(t);else{var o=Ki(ae.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}i[Ie]=t,i[ut]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(at(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ia(t)}}return qe(t),Qo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ia(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,xl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Pe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||bd(e.nodeValue,a)),e||ba(t,!0)}else e=Ki(e).createTextNode(l),e[Ie]=t,t.stateNode=e}return qe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=xl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Ie]=t}else Va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),e=!1}else a=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(St(t),t):(St(t),null);if((t.flags&128)!==0)throw Error(c(558))}return qe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=xl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[Ie]=t}else Va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),n=!1}else n=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(St(t),t):(St(t),null)}return St(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Mi(t,t.updateQueue),qe(t),null);case 4:return ye(),e===null&&fr(t.stateNode.containerInfo),qe(t),null;case 10:return ta(t.type),qe(t),null;case 19:if(D(Ge),l=t.memoizedState,l===null)return qe(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)bn(l,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=bi(e),i!==null){for(t.flags|=128,bn(l,!1),e=i.updateQueue,t.updateQueue=e,Mi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$c(a,e),a=a.sibling;return L(Ge,Ge.current&1|2),be&&Pt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&pt()>Hi&&(t.flags|=128,n=!0,bn(l,!1),t.lanes=4194304)}else{if(!n)if(e=bi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Mi(t,e),bn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!be)return qe(t),null}else 2*pt()-l.renderingStartTime>Hi&&a!==536870912&&(t.flags|=128,n=!0,bn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=pt(),e.sibling=null,a=Ge.current,L(Ge,n?a&1|2:a&1),be&&Pt(t,l.treeForkCount),e):(qe(t),null);case 22:case 23:return St(t),fo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),a=t.updateQueue,a!==null&&Mi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&D(Fa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ta(Qe),qe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function ip(e,t){switch($u(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(Qe),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return mt(t),null;case 31:if(t.memoizedState!==null){if(St(t),t.alternate===null)throw Error(c(340));Va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(St(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Ge),null;case 4:return ye(),null;case 10:return ta(t.type),null;case 22:case 23:return St(t),fo(),e!==null&&D(Fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(Qe),null;case 25:return null;default:return null}}function zf(e,t){switch($u(t),t.tag){case 3:ta(Qe),ye();break;case 26:case 27:case 5:mt(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&St(t);break;case 13:St(t);break;case 19:D(Ge);break;case 10:ta(t.type);break;case 22:case 23:St(t),fo(),e!==null&&D(Fa);break;case 24:ta(Qe)}}function xn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,o=a.inst;l=i(),o.destroy=l}a=a.next}while(a!==n)}}catch(s){Ae(t,t.return,s)}}function Ta(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var o=l.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,n=t;var g=a,w=s;try{w()}catch(R){Ae(n,g,R)}}}l=l.next}while(l!==i)}}catch(R){Ae(t,t.return,R)}}function wf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{hs(t,a)}catch(l){Ae(e,e.return,l)}}}function Tf(e,t,a){a.props=el(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ae(e,t,l)}}function Sn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Ae(e,t,n)}}function Zt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Ae(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ae(e,t,n)}else a.current=null}function Af(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Ae(e,e.return,n)}}function ko(e,t,a){try{var l=e.stateNode;Ap(l,e.type,a,t),l[ut]=t}catch(n){Ae(e,e.return,n)}}function Nf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function Zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=$t));else if(l!==4&&(l===27&&Da(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Vo(e,t,a),e=e.sibling;e!==null;)Vo(e,t,a),e=e.sibling}function Di(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Di(e,t,a),e=e.sibling;e!==null;)Di(e,t,a),e=e.sibling}function _f(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);at(t,l,a),t[Ie]=e,t[ut]=a}catch(i){Ae(e,e.return,i)}}var ua=!1,Ve=!1,Ko=!1,Of=typeof WeakSet=="function"?WeakSet:Set,We=null;function up(e,t){if(e=e.containerInfo,hr=eu,e=Gc(e),Bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,s=-1,g=-1,w=0,R=0,C=e,T=null;t:for(;;){for(var _;C!==a||n!==0&&C.nodeType!==3||(s=o+n),C!==i||l!==0&&C.nodeType!==3||(g=o+l),C.nodeType===3&&(o+=C.nodeValue.length),(_=C.firstChild)!==null;)T=C,C=_;for(;;){if(C===e)break t;if(T===a&&++w===n&&(s=o),T===i&&++R===l&&(g=o),(_=C.nextSibling)!==null)break;C=T,T=C.parentNode}C=_}a=s===-1||g===-1?null:{start:s,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(pr={focusedElem:e,selectionRange:a},eu=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var k=el(a.type,n);e=l.getSnapshotBeforeUpdate(k,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ae(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)yr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function Rf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),l&4&&xn(5,a);break;case 1:if(ra(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Ae(a,a.return,o)}else{var n=el(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ae(a,a.return,o)}}l&64&&wf(a),l&512&&Sn(a,a.return);break;case 3:if(ra(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{hs(e,t)}catch(o){Ae(a,a.return,o)}}break;case 27:t===null&&l&4&&_f(a);case 26:case 5:ra(e,a),t===null&&l&4&&Af(a),l&512&&Sn(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),l&4&&Cf(e,a);break;case 13:ra(e,a),l&4&&Uf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=pp.bind(null,a),Up(e,a))));break;case 22:if(l=a.memoizedState!==null||ua,!l){t=t!==null&&t.memoizedState!==null||Ve,n=ua;var i=Ve;ua=l,(Ve=t)&&!i?ca(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),ua=n,Ve=i}break;case 30:break;default:ra(e,a)}}function Mf(e){var t=e.alternate;t!==null&&(e.alternate=null,Mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ju(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,rt=!1;function oa(e,t,a){for(a=a.child;a!==null;)Df(e,t,a),a=a.sibling}function Df(e,t,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(kl,a)}catch{}switch(a.tag){case 26:Ve||Zt(a,t),oa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ve||Zt(a,t);var l=He,n=rt;Da(a.type)&&(He=a.stateNode,rt=!1),oa(e,t,a),On(a.stateNode),He=l,rt=n;break;case 5:Ve||Zt(a,t);case 6:if(l=He,n=rt,He=null,oa(e,t,a),He=l,rt=n,He!==null)if(rt)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(a.stateNode)}catch(i){Ae(a,t,i)}else try{He.removeChild(a.stateNode)}catch(i){Ae(a,t,i)}break;case 18:He!==null&&(rt?(e=He,wd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Gl(e)):wd(He,a.stateNode));break;case 4:l=He,n=rt,He=a.stateNode.containerInfo,rt=!0,oa(e,t,a),He=l,rt=n;break;case 0:case 11:case 14:case 15:Ta(2,a,t),Ve||Ta(4,a,t),oa(e,t,a);break;case 1:Ve||(Zt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Tf(a,t,l)),oa(e,t,a);break;case 21:oa(e,t,a);break;case 22:Ve=(l=Ve)||a.memoizedState!==null,oa(e,t,a),Ve=l;break;default:oa(e,t,a)}}function Cf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gl(e)}catch(a){Ae(t,t.return,a)}}}function Uf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gl(e)}catch(a){Ae(t,t.return,a)}}function op(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Of),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Of),t;default:throw Error(c(435,e.tag))}}function Ci(e,t){var a=op(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=gp.bind(null,e,l);l.then(n,n)}})}function ct(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(Da(s.type)){He=s.stateNode,rt=!1;break e}break;case 5:He=s.stateNode,rt=!1;break e;case 3:case 4:He=s.stateNode.containerInfo,rt=!0;break e}s=s.return}if(He===null)throw Error(c(160));Df(i,o,n),He=null,rt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qf(t,e),t=t.sibling}var Yt=null;function qf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),st(e),l&4&&(Ta(3,e,e.return),xn(3,e),Ta(5,e,e.return));break;case 1:ct(t,e),st(e),l&512&&(Ve||a===null||Zt(a,a.return)),l&64&&ua&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Yt;if(ct(t,e),st(e),l&512&&(Ve||a===null||Zt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Kl]||i[Ie]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),at(i,l,a),i[Ie]=e,$e(i),l=i;break e;case"link":var o=qd("link","href",n).get(l+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(i=o[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break t}}i=n.createElement(l),at(i,l,a),n.head.appendChild(i);break;case"meta":if(o=qd("meta","content",n).get(l+(a.content||""))){for(s=0;s<o.length;s++)if(i=o[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break t}}i=n.createElement(l),at(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[Ie]=e,$e(i),l=i}e.stateNode=l}else Hd(n,e.type,e.stateNode);else e.stateNode=Ud(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Hd(n,e.type,e.stateNode):Ud(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ko(e,e.memoizedProps,a.memoizedProps)}break;case 27:ct(t,e),st(e),l&512&&(Ve||a===null||Zt(a,a.return)),a!==null&&l&4&&ko(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,e),st(e),l&512&&(Ve||a===null||Zt(a,a.return)),e.flags&32){n=e.stateNode;try{sl(n,"")}catch(k){Ae(e,e.return,k)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,ko(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Ko=!0);break;case 6:if(ct(t,e),st(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(k){Ae(e,e.return,k)}}break;case 3:if($i=null,n=Yt,Yt=Ji(t.containerInfo),ct(t,e),Yt=n,st(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Gl(t.containerInfo)}catch(k){Ae(e,e.return,k)}Ko&&(Ko=!1,Hf(e));break;case 4:l=Yt,Yt=Ji(e.stateNode.containerInfo),ct(t,e),st(e),Yt=l;break;case 12:ct(t,e),st(e);break;case 31:ct(t,e),st(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ci(e,l)));break;case 13:ct(t,e),st(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qi=pt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ci(e,l)));break;case 22:n=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,w=ua,R=Ve;if(ua=w||n,Ve=R||g,ct(t,e),Ve=R,ua=w,st(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||g||ua||Ve||tl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(i=g.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=g.stateNode;var C=g.memoizedProps.style,T=C!=null&&C.hasOwnProperty("display")?C.display:null;s.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(k){Ae(g,g.return,k)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(k){Ae(g,g.return,k)}}}else if(t.tag===18){if(a===null){g=t;try{var _=g.stateNode;n?Td(_,!0):Td(g.stateNode,!1)}catch(k){Ae(g,g.return,k)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ci(e,a))));break;case 19:ct(t,e),st(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ci(e,l)));break;case 30:break;case 21:break;default:ct(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Nf(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=Zo(e);Di(e,i,n);break;case 5:var o=a.stateNode;a.flags&32&&(sl(o,""),a.flags&=-33);var s=Zo(e);Di(e,s,o);break;case 3:case 4:var g=a.stateNode.containerInfo,w=Zo(e);Vo(e,w,g);break;default:throw Error(c(161))}}catch(R){Ae(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Hf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ra(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rf(e,t.alternate,t),t=t.sibling}function tl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ta(4,t,t.return),tl(t);break;case 1:Zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Tf(t,t.return,a),tl(t);break;case 27:On(t.stateNode);case 26:case 5:Zt(t,t.return),tl(t);break;case 22:t.memoizedState===null&&tl(t);break;case 30:tl(t);break;default:tl(t)}e=e.sibling}}function ca(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:ca(n,i,a),xn(4,i);break;case 1:if(ca(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){Ae(l,l.return,w)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)ms(g[n],s)}catch(w){Ae(l,l.return,w)}}a&&o&64&&wf(i),Sn(i,i.return);break;case 27:_f(i);case 26:case 5:ca(n,i,a),a&&l===null&&o&4&&Af(i),Sn(i,i.return);break;case 12:ca(n,i,a);break;case 31:ca(n,i,a),a&&o&4&&Cf(n,i);break;case 13:ca(n,i,a),a&&o&4&&Uf(n,i);break;case 22:i.memoizedState===null&&ca(n,i,a),Sn(i,i.return);break;case 30:break;default:ca(n,i,a)}t=t.sibling}}function Jo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&on(a))}function Fo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&on(e))}function Gt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lf(e,t,a,l),t=t.sibling}function Lf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Gt(e,t,a,l),n&2048&&xn(9,t);break;case 1:Gt(e,t,a,l);break;case 3:Gt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&on(e)));break;case 12:if(n&2048){Gt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,s=i.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Ae(t,t.return,g)}}else Gt(e,t,a,l);break;case 31:Gt(e,t,a,l);break;case 13:Gt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Gt(e,t,a,l):jn(e,t):i._visibility&2?Gt(e,t,a,l):(i._visibility|=2,Ol(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Jo(o,t);break;case 24:Gt(e,t,a,l),n&2048&&Fo(t.alternate,t);break;default:Gt(e,t,a,l)}}function Ol(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,s=a,g=l,w=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(i,o,s,g,n),xn(8,o);break;case 23:break;case 22:var R=o.stateNode;o.memoizedState!==null?R._visibility&2?Ol(i,o,s,g,n):jn(i,o):(R._visibility|=2,Ol(i,o,s,g,n)),n&&w&2048&&Jo(o.alternate,o);break;case 24:Ol(i,o,s,g,n),n&&w&2048&&Fo(o.alternate,o);break;default:Ol(i,o,s,g,n)}t=t.sibling}}function jn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:jn(a,l),n&2048&&Jo(l.alternate,l);break;case 24:jn(a,l),n&2048&&Fo(l.alternate,l);break;default:jn(a,l)}t=t.sibling}}var En=8192;function Rl(e,t,a){if(e.subtreeFlags&En)for(e=e.child;e!==null;)Bf(e,t,a),e=e.sibling}function Bf(e,t,a){switch(e.tag){case 26:Rl(e,t,a),e.flags&En&&e.memoizedState!==null&&Kp(a,Yt,e.memoizedState,e.memoizedProps);break;case 5:Rl(e,t,a);break;case 3:case 4:var l=Yt;Yt=Ji(e.stateNode.containerInfo),Rl(e,t,a),Yt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=En,En=16777216,Rl(e,t,a),En=l):Rl(e,t,a));break;default:Rl(e,t,a)}}function Yf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];We=l,Xf(l,e)}Yf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gf(e),e=e.sibling}function Gf(e){switch(e.tag){case 0:case 11:case 15:zn(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:zn(e);break;case 12:zn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ui(e)):zn(e);break;default:zn(e)}}function Ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];We=l,Xf(l,e)}Yf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ta(8,t,t.return),Ui(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ui(t));break;default:Ui(t)}e=e.sibling}}function Xf(e,t){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:Ta(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:on(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,We=l;else e:for(a=e;We!==null;){l=We;var n=l.sibling,i=l.return;if(Mf(l),l===a){We=null;break e}if(n!==null){n.return=i,We=n;break e}We=i}}}var rp={getCacheForType:function(e){var t=et(Qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return et(Qe).controller.signal}},cp=typeof WeakMap=="function"?WeakMap:Map,we=0,Me=null,fe=null,pe=0,Te=0,jt=null,Aa=!1,Ml=!1,$o=!1,sa=0,Ye=0,Na=0,al=0,Wo=0,Et=0,Dl=0,wn=null,ft=null,Io=!1,qi=0,Qf=0,Hi=1/0,Li=null,_a=null,Je=0,Oa=null,Cl=null,fa=0,Po=0,er=null,kf=null,Tn=0,tr=null;function zt(){return(we&2)!==0&&pe!==0?pe&-pe:O.T!==null?or():ic()}function Zf(){if(Et===0)if((pe&536870912)===0||be){var e=Vn;Vn<<=1,(Vn&3932160)===0&&(Vn=262144),Et=e}else Et=536870912;return e=xt.current,e!==null&&(e.flags|=32),Et}function dt(e,t,a){(e===Me&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Ul(e,0),Ra(e,pe,Et,!1)),Vl(e,a),((we&2)===0||e!==Me)&&(e===Me&&((we&2)===0&&(al|=a),Ye===4&&Ra(e,pe,Et,!1)),Vt(e))}function Vf(e,t,a){if((we&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Zl(e,t),n=l?dp(e,t):lr(e,t,!0),i=l;do{if(n===0){Ml&&!l&&Ra(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!sp(a)){n=lr(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;n=wn;var g=s.current.memoizedState.isDehydrated;if(g&&(Ul(s,o).flags|=256),o=lr(s,o,!1),o!==2){if($o&&!g){s.errorRecoveryDisabledLanes|=i,al|=i,n=4;break e}i=ft,ft=n,i!==null&&(ft===null?ft=i:ft.push.apply(ft,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){Ul(e,0),Ra(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ra(l,t,Et,!Aa);break e;case 2:ft=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=qi+300-pt(),10<n)){if(Ra(l,t,Et,!Aa),Jn(l,0,!0)!==0)break e;fa=t,l.timeoutHandle=Ed(Kf.bind(null,l,a,ft,Li,Io,t,Et,al,Dl,Aa,i,"Throttled",-0,0),n);break e}Kf(l,a,ft,Li,Io,t,Et,al,Dl,Aa,i,null,-0,0)}}break}while(!0);Vt(e)}function Kf(e,t,a,l,n,i,o,s,g,w,R,C,T,_){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Bf(t,i,C);var k=(i&62914560)===i?qi-pt():(i&4194048)===i?Qf-pt():0;if(k=Jp(C,k),k!==null){fa=i,e.cancelPendingCommit=k(td.bind(null,e,t,i,a,l,n,o,s,g,R,C,null,T,_)),Ra(e,i,o,!w);return}}td(e,t,i,a,l,n,o,s,g)}function sp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!yt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ra(e,t,a,l){t&=~Wo,t&=~al,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-vt(n),o=1<<i;l[i]=-1,n&=~o}a!==0&&ac(e,a,t)}function Bi(){return(we&6)===0?(An(0),!1):!0}function ar(){if(fe!==null){if(Te===0)var e=fe.return;else e=fe,ea=Ka=null,yo(e),wl=null,cn=0,e=fe;for(;e!==null;)zf(e.alternate,e),e=e.return;fe=null}}function Ul(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Op(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,ar(),Me=e,fe=a=It(e.current,null),pe=t,Te=0,jt=null,Aa=!1,Ml=Zl(e,t),$o=!1,Dl=Et=Wo=al=Na=Ye=0,ft=wn=null,Io=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-vt(l),i=1<<n;t|=e[n],l&=~i}return sa=t,ui(),a}function Jf(e,t){ue=null,O.H=vn,t===zl||t===hi?(t=cs(),Te=3):t===io?(t=cs(),Te=4):Te=t===Co?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,fe===null&&(Ye=1,Ni(e,Ot(t,e.current)))}function Ff(){var e=xt.current;return e===null?!0:(pe&4194048)===pe?Ct===null:(pe&62914560)===pe||(pe&536870912)!==0?e===Ct:!1}function $f(){var e=O.H;return O.H=vn,e===null?vn:e}function Wf(){var e=O.A;return O.A=rp,e}function Yi(){Ye=4,Aa||(pe&4194048)!==pe&&xt.current!==null||(Ml=!0),(Na&134217727)===0&&(al&134217727)===0||Me===null||Ra(Me,pe,Et,!1)}function lr(e,t,a){var l=we;we|=2;var n=$f(),i=Wf();(Me!==e||pe!==t)&&(Li=null,Ul(e,t)),t=!1;var o=Ye;e:do try{if(Te!==0&&fe!==null){var s=fe,g=jt;switch(Te){case 8:ar(),o=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var w=Te;if(Te=0,jt=null,ql(e,s,g,w),a&&Ml){o=0;break e}break;default:w=Te,Te=0,jt=null,ql(e,s,g,w)}}fp(),o=Ye;break}catch(R){Jf(e,R)}while(!0);return t&&e.shellSuspendCounter++,ea=Ka=null,we=l,O.H=n,O.A=i,fe===null&&(Me=null,pe=0,ui()),o}function fp(){for(;fe!==null;)If(fe)}function dp(e,t){var a=we;we|=2;var l=$f(),n=Wf();Me!==e||pe!==t?(Li=null,Hi=pt()+500,Ul(e,t)):Ml=Zl(e,t);e:do try{if(Te!==0&&fe!==null){t=fe;var i=jt;t:switch(Te){case 1:Te=0,jt=null,ql(e,t,i,1);break;case 2:case 9:if(os(i)){Te=0,jt=null,Pf(t);break}t=function(){Te!==2&&Te!==9||Me!==e||(Te=7),Vt(e)},i.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:os(i)?(Te=0,jt=null,Pf(t)):(Te=0,jt=null,ql(e,t,i,7));break;case 5:var o=null;switch(fe.tag){case 26:o=fe.memoizedState;case 5:case 27:var s=fe;if(o?Ld(o):s.stateNode.complete){Te=0,jt=null;var g=s.sibling;if(g!==null)fe=g;else{var w=s.return;w!==null?(fe=w,Gi(w)):fe=null}break t}}Te=0,jt=null,ql(e,t,i,5);break;case 6:Te=0,jt=null,ql(e,t,i,6);break;case 8:ar(),Ye=6;break e;default:throw Error(c(462))}}mp();break}catch(R){Jf(e,R)}while(!0);return ea=Ka=null,O.H=l,O.A=n,we=a,fe!==null?0:(Me=null,pe=0,ui(),Ye)}function mp(){for(;fe!==null&&!qm();)If(fe)}function If(e){var t=jf(e.alternate,e,sa);e.memoizedProps=e.pendingProps,t===null?Gi(e):fe=t}function Pf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=gf(a,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=gf(a,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:yo(t);default:zf(a,t),t=fe=$c(t,sa),t=jf(a,t,sa)}e.memoizedProps=e.pendingProps,t===null?Gi(e):fe=t}function ql(e,t,a,l){ea=Ka=null,yo(t),wl=null,cn=0;var n=t.return;try{if(tp(e,n,t,a,pe)){Ye=1,Ni(e,Ot(a,e.current)),fe=null;return}}catch(i){if(n!==null)throw fe=n,i;Ye=1,Ni(e,Ot(a,e.current)),fe=null;return}t.flags&32768?(be||l===1?e=!0:Ml||(pe&536870912)!==0?e=!1:(Aa=e=!0,(l===2||l===9||l===3||l===6)&&(l=xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),ed(t,e)):Gi(t)}function Gi(e){var t=e;do{if((t.flags&32768)!==0){ed(t,Aa);return}e=t.return;var a=np(t.alternate,t,sa);if(a!==null){fe=a;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ye===0&&(Ye=5)}function ed(e,t){do{var a=ip(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);Ye=6,fe=null}function td(e,t,a,l,n,i,o,s,g){e.cancelPendingCommit=null;do Xi();while(Je!==0);if((we&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=ku,Vm(e,a,i,o,s,g),e===Me&&(fe=Me=null,pe=0),Cl=t,Oa=e,fa=a,Po=i,er=n,kf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vp(kn,function(){return ud(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,n=B.p,B.p=2,o=we,we|=4;try{up(e,t,a)}finally{we=o,B.p=n,O.T=l}}Je=1,ad(),ld(),nd()}}function ad(){if(Je===1){Je=0;var e=Oa,t=Cl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var l=B.p;B.p=2;var n=we;we|=4;try{qf(t,e);var i=pr,o=Gc(e.containerInfo),s=i.focusedElem,g=i.selectionRange;if(o!==s&&s&&s.ownerDocument&&Yc(s.ownerDocument.documentElement,s)){if(g!==null&&Bu(s)){var w=g.start,R=g.end;if(R===void 0&&(R=w),"selectionStart"in s)s.selectionStart=w,s.selectionEnd=Math.min(R,s.value.length);else{var C=s.ownerDocument||document,T=C&&C.defaultView||window;if(T.getSelection){var _=T.getSelection(),k=s.textContent.length,ee=Math.min(g.start,k),Re=g.end===void 0?ee:Math.min(g.end,k);!_.extend&&ee>Re&&(o=Re,Re=ee,ee=o);var j=Bc(s,ee),b=Bc(s,Re);if(j&&b&&(_.rangeCount!==1||_.anchorNode!==j.node||_.anchorOffset!==j.offset||_.focusNode!==b.node||_.focusOffset!==b.offset)){var z=C.createRange();z.setStart(j.node,j.offset),_.removeAllRanges(),ee>Re?(_.addRange(z),_.extend(b.node,b.offset)):(z.setEnd(b.node,b.offset),_.addRange(z))}}}}for(C=[],_=s;_=_.parentNode;)_.nodeType===1&&C.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<C.length;s++){var M=C[s];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}eu=!!hr,pr=hr=null}finally{we=n,B.p=l,O.T=a}}e.current=t,Je=2}}function ld(){if(Je===2){Je=0;var e=Oa,t=Cl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var l=B.p;B.p=2;var n=we;we|=4;try{Rf(e,t.alternate,t)}finally{we=n,B.p=l,O.T=a}}Je=3}}function nd(){if(Je===4||Je===3){Je=0,Hm();var e=Oa,t=Cl,a=fa,l=kf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,Cl=Oa=null,id(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(_a=null),xu(a),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=O.T,n=B.p,B.p=2,O.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var s=l[o];i(s.value,{componentStack:s.stack})}}finally{O.T=t,B.p=n}}(fa&3)!==0&&Xi(),Vt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===tr?Tn++:(Tn=0,tr=e):Tn=0,An(0)}}function id(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,on(t)))}function Xi(){return ad(),ld(),nd(),ud()}function ud(){if(Je!==5)return!1;var e=Oa,t=Po;Po=0;var a=xu(fa),l=O.T,n=B.p;try{B.p=32>a?32:a,O.T=null,a=er,er=null;var i=Oa,o=fa;if(Je=0,Cl=Oa=null,fa=0,(we&6)!==0)throw Error(c(331));var s=we;if(we|=4,Gf(i.current),Lf(i,i.current,o,a),we=s,An(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(kl,i)}catch{}return!0}finally{B.p=n,O.T=l,id(e,t)}}function od(e,t,a){t=Ot(a,t),t=Do(e.stateNode,t,2),e=Ea(e,t,2),e!==null&&(Vl(e,2),Vt(e))}function Ae(e,t,a){if(e.tag===3)od(e,e,a);else for(;t!==null;){if(t.tag===3){od(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_a===null||!_a.has(l))){e=Ot(a,e),a=rf(2),l=Ea(t,a,2),l!==null&&(cf(a,l,t,e),Vl(l,2),Vt(l));break}}t=t.return}}function nr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new cp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||($o=!0,n.add(a),e=hp.bind(null,e,t,a),t.then(e,e))}function hp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Me===e&&(pe&a)===a&&(Ye===4||Ye===3&&(pe&62914560)===pe&&300>pt()-qi?(we&2)===0&&Ul(e,0):Wo|=a,Dl===pe&&(Dl=0)),Vt(e)}function rd(e,t){t===0&&(t=tc()),e=ka(e,t),e!==null&&(Vl(e,t),Vt(e))}function pp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),rd(e,a)}function gp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),rd(e,a)}function vp(e,t){return gu(e,t)}var Qi=null,Hl=null,ir=!1,ki=!1,ur=!1,Ma=0;function Vt(e){e!==Hl&&e.next===null&&(Hl===null?Qi=Hl=e:Hl=Hl.next=e),ki=!0,ir||(ir=!0,bp())}function An(e,t){if(!ur&&ki){ur=!0;do for(var a=!1,l=Qi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-vt(42|e)+1)-1,i&=n&~(o&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,dd(l,i))}else i=pe,i=Jn(l,l===Me?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Zl(l,i)||(a=!0,dd(l,i));l=l.next}while(a);ur=!1}}function yp(){cd()}function cd(){ki=ir=!1;var e=0;Ma!==0&&_p()&&(e=Ma);for(var t=pt(),a=null,l=Qi;l!==null;){var n=l.next,i=sd(l,t);i===0?(l.next=null,a===null?Qi=n:a.next=n,n===null&&(Hl=a)):(a=l,(e!==0||(i&3)!==0)&&(ki=!0)),l=n}Je!==0&&Je!==5||An(e),Ma!==0&&(Ma=0)}function sd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-vt(i),s=1<<o,g=n[o];g===-1?((s&a)===0||(s&l)!==0)&&(n[o]=Zm(s,t)):g<=t&&(e.expiredLanes|=s),i&=~s}if(t=Me,a=pe,a=Jn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&vu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Zl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&vu(l),xu(a)){case 2:case 8:a=Pr;break;case 32:a=kn;break;case 268435456:a=ec;break;default:a=kn}return l=fd.bind(null,e),a=gu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&vu(l),e.callbackPriority=2,e.callbackNode=null,2}function fd(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xi()&&e.callbackNode!==a)return null;var l=pe;return l=Jn(e,e===Me?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vf(e,l,t),sd(e,pt()),e.callbackNode!=null&&e.callbackNode===a?fd.bind(null,e):null)}function dd(e,t){if(Xi())return null;Vf(e,t,!0)}function bp(){Rp(function(){(we&6)!==0?gu(Ir,yp):cd()})}function or(){if(Ma===0){var e=jl;e===0&&(e=Zn,Zn<<=1,(Zn&261888)===0&&(Zn=256)),Ma=e}return Ma}function md(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:In(""+e)}function hd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function xp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=md((n[ut]||null).action),o=l.submitter;o&&(t=(t=o[ut]||null)?md(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var s=new ai("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ma!==0){var g=o?hd(n,o):new FormData(n);Ao(a,{pending:!0,data:g,method:n.method,action:i},null,g)}}else typeof i=="function"&&(s.preventDefault(),g=o?hd(n,o):new FormData(n),Ao(a,{pending:!0,data:g,method:n.method,action:i},i,g))},currentTarget:n}]})}}for(var rr=0;rr<Qu.length;rr++){var cr=Qu[rr],Sp=cr.toLowerCase(),jp=cr[0].toUpperCase()+cr.slice(1);Bt(Sp,"on"+jp)}Bt(kc,"onAnimationEnd"),Bt(Zc,"onAnimationIteration"),Bt(Vc,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Lh,"onTransitionRun"),Bt(Bh,"onTransitionStart"),Bt(Yh,"onTransitionCancel"),Bt(Kc,"onTransitionEnd"),rl("onMouseEnter",["mouseout","mouseover"]),rl("onMouseLeave",["mouseout","mouseover"]),rl("onPointerEnter",["pointerout","pointerover"]),rl("onPointerLeave",["pointerout","pointerover"]),Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ep=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nn));function pd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var s=l[o],g=s.instance,w=s.currentTarget;if(s=s.listener,g!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=w;try{i(n)}catch(R){ii(R)}n.currentTarget=null,i=g}else for(o=0;o<l.length;o++){if(s=l[o],g=s.instance,w=s.currentTarget,s=s.listener,g!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=w;try{i(n)}catch(R){ii(R)}n.currentTarget=null,i=g}}}}function de(e,t){var a=t[Su];a===void 0&&(a=t[Su]=new Set);var l=e+"__bubble";a.has(l)||(gd(t,e,2,!1),a.add(l))}function sr(e,t,a){var l=0;t&&(l|=4),gd(a,e,l,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[Zi]){e[Zi]=!0,rc.forEach(function(a){a!=="selectionchange"&&(Ep.has(a)||sr(a,!1,e),sr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,sr("selectionchange",!1,t))}}function gd(e,t,a,l){switch(Zd(t)){case 2:var n=Wp;break;case 8:n=Ip;break;default:n=Tr}a=n.bind(null,t,a,e),n=void 0,!Ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function dr(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var s=l.stateNode.containerInfo;if(s===n)break;if(o===4)for(o=l.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;s!==null;){if(o=il(s),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){l=i=o;continue e}s=s.parentNode}}l=l.return}xc(function(){var w=i,R=Nu(a),C=[];e:{var T=Jc.get(e);if(T!==void 0){var _=ai,k=e;switch(e){case"keypress":if(ei(a)===0)break e;case"keydown":case"keyup":_=gh;break;case"focusin":k="focus",_=Cu;break;case"focusout":k="blur",_=Cu;break;case"beforeblur":case"afterblur":_=Cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=bh;break;case kc:case Zc:case Vc:_=oh;break;case Kc:_=Sh;break;case"scroll":case"scrollend":_=ah;break;case"wheel":_=Eh;break;case"copy":case"cut":case"paste":_=ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=wc;break;case"toggle":case"beforetoggle":_=wh}var ee=(t&4)!==0,Re=!ee&&(e==="scroll"||e==="scrollend"),j=ee?T!==null?T+"Capture":null:T;ee=[];for(var b=w,z;b!==null;){var M=b;if(z=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||z===null||j===null||(M=Fl(b,j),M!=null&&ee.push(_n(b,M,z))),Re)break;b=b.return}0<ee.length&&(T=new _(T,k,null,a,R),C.push({event:T,listeners:ee}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",T&&a!==Au&&(k=a.relatedTarget||a.fromElement)&&(il(k)||k[nl]))break e;if((_||T)&&(T=R.window===R?R:(T=R.ownerDocument)?T.defaultView||T.parentWindow:window,_?(k=a.relatedTarget||a.toElement,_=w,k=k?il(k):null,k!==null&&(Re=h(k),ee=k.tag,k!==Re||ee!==5&&ee!==27&&ee!==6)&&(k=null)):(_=null,k=w),_!==k)){if(ee=Ec,M="onMouseLeave",j="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(ee=wc,M="onPointerLeave",j="onPointerEnter",b="pointer"),Re=_==null?T:Jl(_),z=k==null?T:Jl(k),T=new ee(M,b+"leave",_,a,R),T.target=Re,T.relatedTarget=z,M=null,il(R)===w&&(ee=new ee(j,b+"enter",k,a,R),ee.target=z,ee.relatedTarget=Re,M=ee),Re=M,_&&k)t:{for(ee=zp,j=_,b=k,z=0,M=j;M;M=ee(M))z++;M=0;for(var $=b;$;$=ee($))M++;for(;0<z-M;)j=ee(j),z--;for(;0<M-z;)b=ee(b),M--;for(;z--;){if(j===b||b!==null&&j===b.alternate){ee=j;break t}j=ee(j),b=ee(b)}ee=null}else ee=null;_!==null&&vd(C,T,_,ee,!1),k!==null&&Re!==null&&vd(C,Re,k,ee,!0)}}e:{if(T=w?Jl(w):window,_=T.nodeName&&T.nodeName.toLowerCase(),_==="select"||_==="input"&&T.type==="file")var Ee=Dc;else if(Rc(T))if(Cc)Ee=Uh;else{Ee=Dh;var V=Mh}else _=T.nodeName,!_||_.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?w&&Tu(w.elementType)&&(Ee=Dc):Ee=Ch;if(Ee&&(Ee=Ee(e,w))){Mc(C,Ee,a,R);break e}V&&V(e,T,w),e==="focusout"&&w&&T.type==="number"&&w.memoizedProps.value!=null&&wu(T,"number",T.value)}switch(V=w?Jl(w):window,e){case"focusin":(Rc(V)||V.contentEditable==="true")&&(hl=V,Yu=w,ln=null);break;case"focusout":ln=Yu=hl=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,Xc(C,a,R);break;case"selectionchange":if(Hh)break;case"keydown":case"keyup":Xc(C,a,R)}var re;if(qu)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else ml?_c(e,a)&&(ge="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Tc&&a.locale!=="ko"&&(ml||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&ml&&(re=Sc()):(ga=R,Ru="value"in ga?ga.value:ga.textContent,ml=!0)),V=Vi(w,ge),0<V.length&&(ge=new zc(ge,e,null,a,R),C.push({event:ge,listeners:V}),re?ge.data=re:(re=Oc(a),re!==null&&(ge.data=re)))),(re=Ah?Nh(e,a):_h(e,a))&&(ge=Vi(w,"onBeforeInput"),0<ge.length&&(V=new zc("onBeforeInput","beforeinput",null,a,R),C.push({event:V,listeners:ge}),V.data=re)),xp(C,e,w,a,R)}pd(C,t)})}function _n(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Vi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Fl(e,a),n!=null&&l.unshift(_n(e,n,i)),n=Fl(e,t),n!=null&&l.push(_n(e,n,i))),e.tag===3)return l;e=e.return}return[]}function zp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vd(e,t,a,l,n){for(var i=t._reactName,o=[];a!==null&&a!==l;){var s=a,g=s.alternate,w=s.stateNode;if(s=s.tag,g!==null&&g===l)break;s!==5&&s!==26&&s!==27||w===null||(g=w,n?(w=Fl(a,i),w!=null&&o.unshift(_n(a,w,g))):n||(w=Fl(a,i),w!=null&&o.push(_n(a,w,g)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var wp=/\r\n?/g,Tp=/\u0000|\uFFFD/g;function yd(e){return(typeof e=="string"?e:""+e).replace(wp,`
`).replace(Tp,"")}function bd(e,t){return t=yd(t),yd(e)===t}function Oe(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||sl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&sl(e,""+l);break;case"className":$n(e,"class",l);break;case"tabIndex":$n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,l);break;case"style":yc(e,l,i);break;case"data":if(t!=="object"){$n(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=In(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Oe(e,t,"name",n.name,n,null),Oe(e,t,"formEncType",n.formEncType,n,null),Oe(e,t,"formMethod",n.formMethod,n,null),Oe(e,t,"formTarget",n.formTarget,n,null)):(Oe(e,t,"encType",n.encType,n,null),Oe(e,t,"method",n.method,n,null),Oe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=In(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=$t);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=In(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":de("beforetoggle",e),de("toggle",e),Fn(e,"popover",l);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Fn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=eh.get(a)||a,Fn(e,a,l))}}function mr(e,t,a,l,n,i){switch(a){case"style":yc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?sl(e,l):(typeof l=="number"||typeof l=="bigint")&&sl(e,""+l);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"onClick":l!=null&&(e.onclick=$t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[ut]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Fn(e,a,l)}}}function at(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Oe(e,t,i,o,a,null)}}n&&Oe(e,t,"srcSet",a.srcSet,a,null),l&&Oe(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var s=i=o=n=null,g=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var R=a[l];if(R!=null)switch(l){case"name":n=R;break;case"type":o=R;break;case"checked":g=R;break;case"defaultChecked":w=R;break;case"value":i=R;break;case"defaultValue":s=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Oe(e,t,l,R,a,null)}}hc(e,i,s,g,w,o,n,!1);return;case"select":de("invalid",e),l=o=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":o=s;break;case"multiple":l=s;default:Oe(e,t,n,s,a,null)}t=i,a=o,e.multiple=!!l,t!=null?cl(e,!!l,t,!1):a!=null&&cl(e,!!l,a,!0);return;case"textarea":de("invalid",e),i=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:Oe(e,t,o,s,a,null)}gc(e,l,n,i);return;case"option":for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!=null)&&(g==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Oe(e,t,g,l,a,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(l=0;l<Nn.length;l++)de(Nn[l],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Oe(e,t,w,l,a,null)}return;default:if(Tu(t)){for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!==void 0&&mr(e,t,R,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&Oe(e,t,s,l,a,null))}function Ap(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,s=null,g=null,w=null,R=null;for(_ in a){var C=a[_];if(a.hasOwnProperty(_)&&C!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":g=C;default:l.hasOwnProperty(_)||Oe(e,t,_,null,l,C)}}for(var T in l){var _=l[T];if(C=a[T],l.hasOwnProperty(T)&&(_!=null||C!=null))switch(T){case"type":i=_;break;case"name":n=_;break;case"checked":w=_;break;case"defaultChecked":R=_;break;case"value":o=_;break;case"defaultValue":s=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:_!==C&&Oe(e,t,T,_,l,C)}}zu(e,o,s,g,w,R,i,n);return;case"select":_=o=s=T=null;for(i in a)if(g=a[i],a.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":_=g;default:l.hasOwnProperty(i)||Oe(e,t,i,null,l,g)}for(n in l)if(i=l[n],g=a[n],l.hasOwnProperty(n)&&(i!=null||g!=null))switch(n){case"value":T=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:i!==g&&Oe(e,t,n,i,l,g)}t=s,a=o,l=_,T!=null?cl(e,!!a,T,!1):!!l!=!!a&&(t!=null?cl(e,!!a,t,!0):cl(e,!!a,a?[]:"",!1));return;case"textarea":_=T=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Oe(e,t,s,null,l,n)}for(o in l)if(n=l[o],i=a[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":T=n;break;case"defaultValue":_=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&Oe(e,t,o,n,l,i)}pc(e,T,_);return;case"option":for(var k in a)T=a[k],a.hasOwnProperty(k)&&T!=null&&!l.hasOwnProperty(k)&&(k==="selected"?e.selected=!1:Oe(e,t,k,null,l,T));for(g in l)T=l[g],_=a[g],l.hasOwnProperty(g)&&T!==_&&(T!=null||_!=null)&&(g==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":Oe(e,t,g,T,l,_));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)T=a[ee],a.hasOwnProperty(ee)&&T!=null&&!l.hasOwnProperty(ee)&&Oe(e,t,ee,null,l,T);for(w in l)if(T=l[w],_=a[w],l.hasOwnProperty(w)&&T!==_&&(T!=null||_!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:Oe(e,t,w,T,l,_)}return;default:if(Tu(t)){for(var Re in a)T=a[Re],a.hasOwnProperty(Re)&&T!==void 0&&!l.hasOwnProperty(Re)&&mr(e,t,Re,void 0,l,T);for(R in l)T=l[R],_=a[R],!l.hasOwnProperty(R)||T===_||T===void 0&&_===void 0||mr(e,t,R,T,l,_);return}}for(var j in a)T=a[j],a.hasOwnProperty(j)&&T!=null&&!l.hasOwnProperty(j)&&Oe(e,t,j,null,l,T);for(C in l)T=l[C],_=a[C],!l.hasOwnProperty(C)||T===_||T==null&&_==null||Oe(e,t,C,T,l,_)}function xd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Np(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,o=n.initiatorType,s=n.duration;if(i&&s&&xd(o)){for(o=0,s=n.responseEnd,l+=1;l<a.length;l++){var g=a[l],w=g.startTime;if(w>s)break;var R=g.transferSize,C=g.initiatorType;R&&xd(C)&&(g=g.responseEnd,o+=R*(g<s?1:(s-w)/(g-w)))}if(--l,t+=8*(i+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hr=null,pr=null;function Ki(e){return e.nodeType===9?e:e.ownerDocument}function Sd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vr=null;function _p(){var e=window.event;return e&&e.type==="popstate"?e===vr?!1:(vr=e,!0):(vr=null,!1)}var Ed=typeof setTimeout=="function"?setTimeout:void 0,Op=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,Rp=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(e){return zd.resolve(null).then(e).catch(Mp)}:Ed;function Mp(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function wd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Gl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")On(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,On(a);for(var i=a.firstChild;i;){var o=i.nextSibling,s=i.nodeName;i[Kl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&On(e.ownerDocument.body);a=n}while(a);Gl(t)}function Td(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function yr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yr(a),ju(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Dp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Kl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function Cp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ut(e.nextSibling),e===null))return null;return e}function Ad(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ut(e.nextSibling),e===null))return null;return e}function br(e){return e.data==="$?"||e.data==="$~"}function xr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Up(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Sr=null;function Nd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ut(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function _d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Od(e,t,a){switch(t=Ki(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function On(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ju(e)}var qt=new Map,Rd=new Set;function Ji(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=B.d;B.d={f:qp,r:Hp,D:Lp,C:Bp,L:Yp,m:Gp,X:Qp,S:Xp,M:kp};function qp(){var e=da.f(),t=Bi();return e||t}function Hp(e){var t=ul(e);t!==null&&t.tag===5&&t.type==="form"?Ks(t):da.r(e)}var Ll=typeof document>"u"?null:document;function Md(e,t,a){var l=Ll;if(l&&typeof t=="string"&&t){var n=Nt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Rd.has(n)||(Rd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),at(t,"link",e),$e(t),l.head.appendChild(t)))}}function Lp(e){da.D(e),Md("dns-prefetch",e,null)}function Bp(e,t){da.C(e,t),Md("preconnect",e,t)}function Yp(e,t,a){da.L(e,t,a);var l=Ll;if(l&&e&&t){var n='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Nt(a.imageSizes)+'"]')):n+='[href="'+Nt(e)+'"]';var i=n;switch(t){case"style":i=Bl(e);break;case"script":i=Yl(e)}qt.has(i)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),qt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Rn(i))||t==="script"&&l.querySelector(Mn(i))||(t=l.createElement("link"),at(t,"link",e),$e(t),l.head.appendChild(t)))}}function Gp(e,t){da.m(e,t);var a=Ll;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Nt(l)+'"][href="'+Nt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Yl(e)}if(!qt.has(i)&&(e=y({rel:"modulepreload",href:e},t),qt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mn(i)))return}l=a.createElement("link"),at(l,"link",e),$e(l),a.head.appendChild(l)}}}function Xp(e,t,a){da.S(e,t,a);var l=Ll;if(l&&e){var n=ol(l).hoistableStyles,i=Bl(e);t=t||"default";var o=n.get(i);if(!o){var s={loading:0,preload:null};if(o=l.querySelector(Rn(i)))s.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=qt.get(i))&&jr(e,a);var g=o=l.createElement("link");$e(g),at(g,"link",e),g._p=new Promise(function(w,R){g.onload=w,g.onerror=R}),g.addEventListener("load",function(){s.loading|=1}),g.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Fi(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:s},n.set(i,o)}}}function Qp(e,t){da.X(e,t);var a=Ll;if(a&&e){var l=ol(a).hoistableScripts,n=Yl(e),i=l.get(n);i||(i=a.querySelector(Mn(n)),i||(e=y({src:e,async:!0},t),(t=qt.get(n))&&Er(e,t),i=a.createElement("script"),$e(i),at(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function kp(e,t){da.M(e,t);var a=Ll;if(a&&e){var l=ol(a).hoistableScripts,n=Yl(e),i=l.get(n);i||(i=a.querySelector(Mn(n)),i||(e=y({src:e,async:!0,type:"module"},t),(t=qt.get(n))&&Er(e,t),i=a.createElement("script"),$e(i),at(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Dd(e,t,a,l){var n=(n=ae.current)?Ji(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Bl(a.href),a=ol(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Bl(a.href);var i=ol(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(Rn(e)))&&!i._p&&(o.instance=i,o.state.loading=5),qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qt.set(e,a),i||Zp(n,e,a,o.state))),t&&l===null)throw Error(c(528,""));return o}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Yl(a),a=ol(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Bl(e){return'href="'+Nt(e)+'"'}function Rn(e){return'link[rel="stylesheet"]['+e+"]"}function Cd(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Zp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),at(t,"link",a),$e(t),e.head.appendChild(t))}function Yl(e){return'[src="'+Nt(e)+'"]'}function Mn(e){return"script[async]"+e}function Ud(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(l)return t.instance=l,$e(l),l;var n=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$e(l),at(l,"style",n),Fi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Bl(a.href);var i=e.querySelector(Rn(n));if(i)return t.state.loading|=4,t.instance=i,$e(i),i;l=Cd(a),(n=qt.get(n))&&jr(l,n),i=(e.ownerDocument||e).createElement("link"),$e(i);var o=i;return o._p=new Promise(function(s,g){o.onload=s,o.onerror=g}),at(i,"link",l),t.state.loading|=4,Fi(i,a.precedence,e),t.instance=i;case"script":return i=Yl(a.src),(n=e.querySelector(Mn(i)))?(t.instance=n,$e(n),n):(l=a,(n=qt.get(i))&&(l=y({},a),Er(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),$e(n),at(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Fi(l,a.precedence,e));return t.instance}function Fi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var s=l[o];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function jr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Er(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $i=null;function qd(e,t,a){if($i===null){var l=new Map,n=$i=new Map;n.set(a,l)}else n=$i,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Kl]||i[Ie]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var s=l.get(o);s?s.push(i):l.set(o,[i])}}return l}function Hd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Vp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ld(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Bl(l.href),i=t.querySelector(Rn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,$e(i);return}i=t.ownerDocument||t,l=Cd(l),(n=qt.get(n))&&jr(l,n),i=i.createElement("link"),$e(i);var o=i;o._p=new Promise(function(s,g){o.onload=s,o.onerror=g}),at(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var zr=0;function Jp(e,t){return e.stylesheets&&e.count===0&&Pi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Pi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&zr===0&&(zr=62500*Np());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Pi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>zr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Wi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ii=null;function Pi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ii=new Map,t.forEach(Fp,e),Ii=null,Wi.call(e))}function Fp(e,t){if(!(t.state.loading&4)){var a=Ii.get(e);if(a)var l=a.get(null);else{a=new Map,Ii.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),i=a.get(o)||l,i===l&&a.set(null,n),a.set(o,n),this.count++,l=Wi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Dn={$$typeof:W,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function $p(e,t,a,l,n,i,o,s,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.hiddenUpdates=yu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Bd(e,t,a,l,n,i,o,s,g,w,R,C){return e=new $p(e,t,a,o,g,w,R,C,s),t=1,i===!0&&(t|=24),i=bt(3,null,null,t),e.current=i,i.stateNode=e,t=ao(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},uo(i),e}function Yd(e){return e?(e=vl,e):vl}function Gd(e,t,a,l,n,i){n=Yd(n),l.context===null?l.context=n:l.pendingContext=n,l=ja(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Ea(e,l,t),a!==null&&(dt(a,e,t),fn(a,e,t))}function Xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function wr(e,t){Xd(e,t),(e=e.alternate)&&Xd(e,t)}function Qd(e){if(e.tag===13||e.tag===31){var t=ka(e,67108864);t!==null&&dt(t,e,67108864),wr(e,67108864)}}function kd(e){if(e.tag===13||e.tag===31){var t=zt();t=bu(t);var a=ka(e,t);a!==null&&dt(a,e,t),wr(e,t)}}var eu=!0;function Wp(e,t,a,l){var n=O.T;O.T=null;var i=B.p;try{B.p=2,Tr(e,t,a,l)}finally{B.p=i,O.T=n}}function Ip(e,t,a,l){var n=O.T;O.T=null;var i=B.p;try{B.p=8,Tr(e,t,a,l)}finally{B.p=i,O.T=n}}function Tr(e,t,a,l){if(eu){var n=Ar(l);if(n===null)dr(e,t,l,tu,a),Vd(e,l);else if(eg(n,e,t,a,l))l.stopPropagation();else if(Vd(e,l),t&4&&-1<Pp.indexOf(e)){for(;n!==null;){var i=ul(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ba(i.pendingLanes);if(o!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var g=1<<31-vt(o);s.entanglements[1]|=g,o&=~g}Vt(i),(we&6)===0&&(Hi=pt()+500,An(0))}}break;case 31:case 13:s=ka(i,2),s!==null&&dt(s,i,2),Bi(),wr(i,2)}if(i=Ar(l),i===null&&dr(e,t,l,tu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else dr(e,t,l,null,a)}}function Ar(e){return e=Nu(e),Nr(e)}var tu=null;function Nr(e){if(tu=null,e=il(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tu=e,null}function Zd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lm()){case Ir:return 2;case Pr:return 8;case kn:case Bm:return 32;case ec:return 268435456;default:return 32}default:return 32}}var _r=!1,Ca=null,Ua=null,qa=null,Cn=new Map,Un=new Map,Ha=[],Pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vd(e,t){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function qn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ul(t),t!==null&&Qd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function eg(e,t,a,l,n){switch(t){case"focusin":return Ca=qn(Ca,e,t,a,l,n),!0;case"dragenter":return Ua=qn(Ua,e,t,a,l,n),!0;case"mouseover":return qa=qn(qa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Cn.set(i,qn(Cn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Un.set(i,qn(Un.get(i)||null,e,t,a,l,n)),!0}return!1}function Kd(e){var t=il(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,uc(e.priority,function(){kd(a)});return}}else if(t===31){if(t=E(a),t!==null){e.blockedOn=t,uc(e.priority,function(){kd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function au(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ar(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Au=l,a.target.dispatchEvent(l),Au=null}else return t=ul(a),t!==null&&Qd(t),e.blockedOn=a,!1;t.shift()}return!0}function Jd(e,t,a){au(e)&&a.delete(t)}function tg(){_r=!1,Ca!==null&&au(Ca)&&(Ca=null),Ua!==null&&au(Ua)&&(Ua=null),qa!==null&&au(qa)&&(qa=null),Cn.forEach(Jd),Un.forEach(Jd)}function lu(e,t){e.blockedOn===t&&(e.blockedOn=null,_r||(_r=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,tg)))}var nu=null;function Fd(e){nu!==e&&(nu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){nu===e&&(nu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Nr(l||a)===null)continue;break}var i=ul(a);i!==null&&(e.splice(t,3),t-=3,Ao(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Gl(e){function t(g){return lu(g,e)}Ca!==null&&lu(Ca,e),Ua!==null&&lu(Ua,e),qa!==null&&lu(qa,e),Cn.forEach(t),Un.forEach(t);for(var a=0;a<Ha.length;a++){var l=Ha[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)Kd(a),a.blockedOn===null&&Ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],o=n[ut]||null;if(typeof i=="function")o||Fd(a);else if(o){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[ut]||null)s=o.formAction;else if(Nr(n)!==null)continue}else s=o.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Fd(a)}}}function $d(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Or(e){this._internalRoot=e}iu.prototype.render=Or.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=zt();Gd(a,l,e,t,null,null)},iu.prototype.unmount=Or.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gd(e.current,2,null,e,null,null),Bi(),t[nl]=null}};function iu(e){this._internalRoot=e}iu.prototype.unstable_scheduleHydration=function(e){if(e){var t=ic();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ha.length&&t!==0&&t<Ha[a].priority;a++);Ha.splice(a,0,e),a===0&&Kd(e)}};var Wd=f.version;if(Wd!=="19.2.5")throw Error(c(527,Wd,"19.2.5"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var ag={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{kl=uu.inject(ag),gt=uu}catch{}}return Ln.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,l="",n=lf,i=nf,o=uf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Bd(e,1,!1,null,null,a,l,null,n,i,o,$d),e[nl]=t.current,fr(e),new Or(t)},Ln.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var l=!1,n="",i=lf,o=nf,s=uf,g=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),t=Bd(e,1,!0,t,a??null,l,n,g,i,o,s,$d),t.context=Yd(null),a=t.current,l=zt(),l=bu(l),n=ja(l),n.callback=null,Ea(a,n,l),a=l,t.current.lanes=a,Vl(t,a),Vt(t),e[nl]=t.current,fr(e),new iu(t)},Ln.version="19.2.5",Ln}var om;function mg(){if(om)return Mr.exports;om=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Mr.exports=dg(),Mr.exports}var hg=mg(),A=Xr();var rm="popstate";function cm(u){return typeof u=="object"&&u!=null&&"pathname"in u&&"search"in u&&"hash"in u&&"state"in u&&"key"in u}function pg(u={}){function f(d,h){let{pathname:v="/",search:E="",hash:S=""}=ll(d.location.hash.substring(1));return!v.startsWith("/")&&!v.startsWith(".")&&(v="/"+v),Yr("",{pathname:v,search:E,hash:S},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function m(d,h){let v=d.document.querySelector("base"),E="";if(v&&v.getAttribute("href")){let S=d.location.href,p=S.indexOf("#");E=p===-1?S:S.slice(0,p)}return E+"#"+(typeof h=="string"?h:Yn(h))}function c(d,h){Lt(d.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return vg(f,m,c,u)}function Le(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function Lt(u,f){if(!u){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function gg(){return Math.random().toString(36).substring(2,10)}function sm(u,f){return{usr:u.state,key:u.key,idx:f,masked:u.unstable_mask?{pathname:u.pathname,search:u.search,hash:u.hash}:void 0}}function Yr(u,f,m=null,c,d){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof f=="string"?ll(f):f,state:m,key:f&&f.key||c||gg(),unstable_mask:d}}function Yn({pathname:u="/",search:f="",hash:m=""}){return f&&f!=="?"&&(u+=f.charAt(0)==="?"?f:"?"+f),m&&m!=="#"&&(u+=m.charAt(0)==="#"?m:"#"+m),u}function ll(u){let f={};if(u){let m=u.indexOf("#");m>=0&&(f.hash=u.substring(m),u=u.substring(0,m));let c=u.indexOf("?");c>=0&&(f.search=u.substring(c),u=u.substring(0,c)),u&&(f.pathname=u)}return f}function vg(u,f,m,c={}){let{window:d=document.defaultView,v5Compat:h=!1}=c,v=d.history,E="POP",S=null,p=N();p==null&&(p=0,v.replaceState({...v.state,idx:p},""));function N(){return(v.state||{idx:null}).idx}function y(){E="POP";let q=N(),K=q==null?null:q-p;p=q,S&&S({action:E,location:X.location,delta:K})}function U(q,K){E="PUSH";let te=cm(q)?q:Yr(X.location,q,K);m&&m(te,q),p=N()+1;let W=sm(te,p),Se=X.createHref(te.unstable_mask||te);try{v.pushState(W,"",Se)}catch(xe){if(xe instanceof DOMException&&xe.name==="DataCloneError")throw xe;d.location.assign(Se)}h&&S&&S({action:E,location:X.location,delta:1})}function H(q,K){E="REPLACE";let te=cm(q)?q:Yr(X.location,q,K);m&&m(te,q),p=N();let W=sm(te,p),Se=X.createHref(te.unstable_mask||te);v.replaceState(W,"",Se),h&&S&&S({action:E,location:X.location,delta:0})}function Y(q){return yg(q)}let X={get action(){return E},get location(){return u(d,v)},listen(q){if(S)throw new Error("A history only accepts one active listener");return d.addEventListener(rm,y),S=q,()=>{d.removeEventListener(rm,y),S=null}},createHref(q){return f(d,q)},createURL:Y,encodeLocation(q){let K=Y(q);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:U,replace:H,go(q){return v.go(q)}};return X}function yg(u,f=!1){let m="http://localhost";typeof window<"u"&&(m=window.location.origin!=="null"?window.location.origin:window.location.href),Le(m,"No window.location.(origin|href) available to create URL");let c=typeof u=="string"?u:Yn(u);return c=c.replace(/ $/,"%20"),!f&&c.startsWith("//")&&(c=m+c),new URL(c,m)}function vm(u,f,m="/"){return bg(u,f,m,!1)}function bg(u,f,m,c){let d=typeof f=="string"?ll(f):f,h=ma(d.pathname||"/",m);if(h==null)return null;let v=ym(u);xg(v);let E=null;for(let S=0;E==null&&S<v.length;++S){let p=Rg(h);E=_g(v[S],p,c)}return E}function ym(u,f=[],m=[],c="",d=!1){let h=(v,E,S=d,p)=>{let N={relativePath:p===void 0?v.path||"":p,caseSensitive:v.caseSensitive===!0,childrenIndex:E,route:v};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(c)&&S)return;Le(N.relativePath.startsWith(c),`Absolute route path "${N.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(c.length)}let y=Kt([c,N.relativePath]),U=m.concat(N);v.children&&v.children.length>0&&(Le(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),ym(v.children,f,U,y,S)),!(v.path==null&&!v.index)&&f.push({path:y,score:Ag(y,v.index),routesMeta:U})};return u.forEach((v,E)=>{if(v.path===""||!v.path?.includes("?"))h(v,E);else for(let S of bm(v.path))h(v,E,!0,S)}),f}function bm(u){let f=u.split("/");if(f.length===0)return[];let[m,...c]=f,d=m.endsWith("?"),h=m.replace(/\?$/,"");if(c.length===0)return d?[h,""]:[h];let v=bm(c.join("/")),E=[];return E.push(...v.map(S=>S===""?h:[h,S].join("/"))),d&&E.push(...v),E.map(S=>u.startsWith("/")&&S===""?"/":S)}function xg(u){u.sort((f,m)=>f.score!==m.score?m.score-f.score:Ng(f.routesMeta.map(c=>c.childrenIndex),m.routesMeta.map(c=>c.childrenIndex)))}var Sg=/^:[\w-]+$/,jg=3,Eg=2,zg=1,wg=10,Tg=-2,fm=u=>u==="*";function Ag(u,f){let m=u.split("/"),c=m.length;return m.some(fm)&&(c+=Tg),f&&(c+=Eg),m.filter(d=>!fm(d)).reduce((d,h)=>d+(Sg.test(h)?jg:h===""?zg:wg),c)}function Ng(u,f){return u.length===f.length&&u.slice(0,-1).every((c,d)=>c===f[d])?u[u.length-1]-f[f.length-1]:0}function _g(u,f,m=!1){let{routesMeta:c}=u,d={},h="/",v=[];for(let E=0;E<c.length;++E){let S=c[E],p=E===c.length-1,N=h==="/"?f:f.slice(h.length)||"/",y=fu({path:S.relativePath,caseSensitive:S.caseSensitive,end:p},N),U=S.route;if(!y&&p&&m&&!c[c.length-1].route.index&&(y=fu({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},N)),!y)return null;Object.assign(d,y.params),v.push({params:d,pathname:Kt([h,y.pathname]),pathnameBase:Ug(Kt([h,y.pathnameBase])),route:U}),y.pathnameBase!=="/"&&(h=Kt([h,y.pathnameBase]))}return v}function fu(u,f){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[m,c]=Og(u.path,u.caseSensitive,u.end),d=f.match(m);if(!d)return null;let h=d[0],v=h.replace(/(.)\/+$/,"$1"),E=d.slice(1);return{params:c.reduce((p,{paramName:N,isOptional:y},U)=>{if(N==="*"){let Y=E[U]||"";v=h.slice(0,h.length-Y.length).replace(/(.)\/+$/,"$1")}const H=E[U];return y&&!H?p[N]=void 0:p[N]=(H||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:v,pattern:u}}function Og(u,f=!1,m=!0){Lt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let c=[],d="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,E,S,p,N)=>{if(c.push({paramName:E,isOptional:S!=null}),S){let y=N.charAt(p+v.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(c.push({paramName:"*"}),d+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):m?d+="\\/*$":u!==""&&u!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,f?void 0:"i"),c]}function Rg(u){try{return u.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Lt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),u}}function ma(u,f){if(f==="/")return u;if(!u.toLowerCase().startsWith(f.toLowerCase()))return null;let m=f.endsWith("/")?f.length-1:f.length,c=u.charAt(m);return c&&c!=="/"?null:u.slice(m)||"/"}var Mg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Dg(u,f="/"){let{pathname:m,search:c="",hash:d=""}=typeof u=="string"?ll(u):u,h;return m?(m=m.replace(/\/\/+/g,"/"),m.startsWith("/")?h=dm(m.substring(1),"/"):h=dm(m,f)):h=f,{pathname:h,search:qg(c),hash:Hg(d)}}function dm(u,f){let m=f.replace(/\/+$/,"").split("/");return u.split("/").forEach(d=>{d===".."?m.length>1&&m.pop():d!=="."&&m.push(d)}),m.length>1?m.join("/"):"/"}function Hr(u,f,m,c){return`Cannot include a '${u}' character in a manually specified \`to.${f}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${m}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cg(u){return u.filter((f,m)=>m===0||f.route.path&&f.route.path.length>0)}function Qr(u){let f=Cg(u);return f.map((m,c)=>c===f.length-1?m.pathname:m.pathnameBase)}function du(u,f,m,c=!1){let d;typeof u=="string"?d=ll(u):(d={...u},Le(!d.pathname||!d.pathname.includes("?"),Hr("?","pathname","search",d)),Le(!d.pathname||!d.pathname.includes("#"),Hr("#","pathname","hash",d)),Le(!d.search||!d.search.includes("#"),Hr("#","search","hash",d)));let h=u===""||d.pathname==="",v=h?"/":d.pathname,E;if(v==null)E=m;else{let y=f.length-1;if(!c&&v.startsWith("..")){let U=v.split("/");for(;U[0]==="..";)U.shift(),y-=1;d.pathname=U.join("/")}E=y>=0?f[y]:"/"}let S=Dg(d,E),p=v&&v!=="/"&&v.endsWith("/"),N=(h||v===".")&&m.endsWith("/");return!S.pathname.endsWith("/")&&(p||N)&&(S.pathname+="/"),S}var Kt=u=>u.join("/").replace(/\/\/+/g,"/"),Ug=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),qg=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,Hg=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,Lg=class{constructor(u,f,m,c=!1){this.status=u,this.statusText=f||"",this.internal=c,m instanceof Error?(this.data=m.toString(),this.error=m):this.data=m}};function Bg(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function Yg(u){return u.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var xm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Sm(u,f){let m=u;if(typeof m!="string"||!Mg.test(m))return{absoluteURL:void 0,isExternal:!1,to:m};let c=m,d=!1;if(xm)try{let h=new URL(window.location.href),v=m.startsWith("//")?new URL(h.protocol+m):new URL(m),E=ma(v.pathname,f);v.origin===h.origin&&E!=null?m=E+v.search+v.hash:d=!0}catch{Lt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:d,to:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jm=["POST","PUT","PATCH","DELETE"];new Set(jm);var Gg=["GET",...jm];new Set(Gg);var Xl=A.createContext(null);Xl.displayName="DataRouter";var mu=A.createContext(null);mu.displayName="DataRouterState";var Em=A.createContext(!1);function Xg(){return A.useContext(Em)}var zm=A.createContext({isTransitioning:!1});zm.displayName="ViewTransition";var Qg=A.createContext(new Map);Qg.displayName="Fetchers";var kg=A.createContext(null);kg.displayName="Await";var wt=A.createContext(null);wt.displayName="Navigation";var Gn=A.createContext(null);Gn.displayName="Location";var Jt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Jt.displayName="Route";var kr=A.createContext(null);kr.displayName="RouteError";var wm="REACT_ROUTER_ERROR",Zg="REDIRECT",Vg="ROUTE_ERROR_RESPONSE";function Kg(u){if(u.startsWith(`${wm}:${Zg}:{`))try{let f=JSON.parse(u.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function Jg(u){if(u.startsWith(`${wm}:${Vg}:{`))try{let f=JSON.parse(u.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new Lg(f.status,f.statusText,f.data)}catch{}}function Fg(u,{relative:f}={}){Le(Ql(),"useHref() may be used only in the context of a <Router> component.");let{basename:m,navigator:c}=A.useContext(wt),{hash:d,pathname:h,search:v}=Xn(u,{relative:f}),E=h;return m!=="/"&&(E=h==="/"?m:Kt([m,h])),c.createHref({pathname:E,search:v,hash:d})}function Ql(){return A.useContext(Gn)!=null}function Xt(){return Le(Ql(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Gn).location}var Tm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Am(u){A.useContext(wt).static||A.useLayoutEffect(u)}function Nm(){let{isDataRoute:u}=A.useContext(Jt);return u?r0():$g()}function $g(){Le(Ql(),"useNavigate() may be used only in the context of a <Router> component.");let u=A.useContext(Xl),{basename:f,navigator:m}=A.useContext(wt),{matches:c}=A.useContext(Jt),{pathname:d}=Xt(),h=JSON.stringify(Qr(c)),v=A.useRef(!1);return Am(()=>{v.current=!0}),A.useCallback((S,p={})=>{if(Lt(v.current,Tm),!v.current)return;if(typeof S=="number"){m.go(S);return}let N=du(S,JSON.parse(h),d,p.relative==="path");u==null&&f!=="/"&&(N.pathname=N.pathname==="/"?f:Kt([f,N.pathname])),(p.replace?m.replace:m.push)(N,p.state,p)},[f,m,h,d,u])}A.createContext(null);function Xn(u,{relative:f}={}){let{matches:m}=A.useContext(Jt),{pathname:c}=Xt(),d=JSON.stringify(Qr(m));return A.useMemo(()=>du(u,JSON.parse(d),c,f==="path"),[u,d,c,f])}function Wg(u,f){return _m(u,f)}function _m(u,f,m){Le(Ql(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=A.useContext(wt),{matches:d}=A.useContext(Jt),h=d[d.length-1],v=h?h.params:{},E=h?h.pathname:"/",S=h?h.pathnameBase:"/",p=h&&h.route;{let q=p&&p.path||"";Rm(E,!p||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${E}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let N=Xt(),y;if(f){let q=typeof f=="string"?ll(f):f;Le(S==="/"||q.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${q.pathname}" was given in the \`location\` prop.`),y=q}else y=N;let U=y.pathname||"/",H=U;if(S!=="/"){let q=S.replace(/^\//,"").split("/");H="/"+U.replace(/^\//,"").split("/").slice(q.length).join("/")}let Y=vm(u,{pathname:H});Lt(p||Y!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Lt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=a0(Y&&Y.map(q=>Object.assign({},q,{params:Object.assign({},v,q.params),pathname:Kt([S,c.encodeLocation?c.encodeLocation(q.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?S:Kt([S,c.encodeLocation?c.encodeLocation(q.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),d,m);return f&&X?A.createElement(Gn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},X):X}function Ig(){let u=o0(),f=Bg(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),m=u instanceof Error?u.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},v=null;return console.error("Error handled by React Router default ErrorBoundary:",u),v=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:h},"ErrorBoundary")," or"," ",A.createElement("code",{style:h},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},f),m?A.createElement("pre",{style:d},m):null,v)}var Pg=A.createElement(Ig,null),Om=class extends A.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,f){return f.location!==u.location||f.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:f.error,location:f.location,revalidation:u.revalidation||f.revalidation}}componentDidCatch(u,f){this.props.onError?this.props.onError(u,f):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const m=Jg(u.digest);m&&(u=m)}let f=u!==void 0?A.createElement(Jt.Provider,{value:this.props.routeContext},A.createElement(kr.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?A.createElement(e0,{error:u},f):f}};Om.contextType=Em;var Lr=new WeakMap;function e0({children:u,error:f}){let{basename:m}=A.useContext(wt);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let c=Kg(f.digest);if(c){let d=Lr.get(f);if(d)throw d;let h=Sm(c.location,m);if(xm&&!Lr.get(f))if(h.isExternal||c.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:c.replace}));throw Lr.set(f,v),v}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return u}function t0({routeContext:u,match:f,children:m}){let c=A.useContext(Xl);return c&&c.static&&c.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=f.route.id),A.createElement(Jt.Provider,{value:u},m)}function a0(u,f=[],m){let c=m?.state;if(u==null){if(!c)return null;if(c.errors)u=c.matches;else if(f.length===0&&!c.initialized&&c.matches.length>0)u=c.matches;else return null}let d=u,h=c?.errors;if(h!=null){let N=d.findIndex(y=>y.route.id&&h?.[y.route.id]!==void 0);Le(N>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,N+1))}let v=!1,E=-1;if(m&&c){v=c.renderFallback;for(let N=0;N<d.length;N++){let y=d[N];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(E=N),y.route.id){let{loaderData:U,errors:H}=c,Y=y.route.loader&&!U.hasOwnProperty(y.route.id)&&(!H||H[y.route.id]===void 0);if(y.route.lazy||Y){m.isStatic&&(v=!0),E>=0?d=d.slice(0,E+1):d=[d[0]];break}}}}let S=m?.onError,p=c&&S?(N,y)=>{S(N,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:Yg(c.matches),errorInfo:y})}:void 0;return d.reduceRight((N,y,U)=>{let H,Y=!1,X=null,q=null;c&&(H=h&&y.route.id?h[y.route.id]:void 0,X=y.route.errorElement||Pg,v&&(E<0&&U===0?(Rm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,q=null):E===U&&(Y=!0,q=y.route.hydrateFallbackElement||null)));let K=f.concat(d.slice(0,U+1)),te=()=>{let W;return H?W=X:Y?W=q:y.route.Component?W=A.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=N,A.createElement(t0,{match:y,routeContext:{outlet:N,matches:K,isDataRoute:c!=null},children:W})};return c&&(y.route.ErrorBoundary||y.route.errorElement||U===0)?A.createElement(Om,{location:c.location,revalidation:c.revalidation,component:X,error:H,children:te(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:p}):te()},null)}function Zr(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l0(u){let f=A.useContext(Xl);return Le(f,Zr(u)),f}function n0(u){let f=A.useContext(mu);return Le(f,Zr(u)),f}function i0(u){let f=A.useContext(Jt);return Le(f,Zr(u)),f}function Vr(u){let f=i0(u),m=f.matches[f.matches.length-1];return Le(m.route.id,`${u} can only be used on routes that contain a unique "id"`),m.route.id}function u0(){return Vr("useRouteId")}function o0(){let u=A.useContext(kr),f=n0("useRouteError"),m=Vr("useRouteError");return u!==void 0?u:f.errors?.[m]}function r0(){let{router:u}=l0("useNavigate"),f=Vr("useNavigate"),m=A.useRef(!1);return Am(()=>{m.current=!0}),A.useCallback(async(d,h={})=>{Lt(m.current,Tm),m.current&&(typeof d=="number"?await u.navigate(d):await u.navigate(d,{fromRouteId:f,...h}))},[u,f])}var mm={};function Rm(u,f,m){!f&&!mm[u]&&(mm[u]=!0,Lt(!1,m))}A.memo(c0);function c0({routes:u,future:f,state:m,isStatic:c,onError:d}){return _m(u,void 0,{state:m,isStatic:c,onError:d})}function hm({to:u,replace:f,state:m,relative:c}){Le(Ql(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=A.useContext(wt);Lt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=A.useContext(Jt),{pathname:v}=Xt(),E=Nm(),S=du(u,Qr(h),v,c==="path"),p=JSON.stringify(S);return A.useEffect(()=>{E(JSON.parse(p),{replace:f,state:m,relative:c})},[E,p,c,f,m]),null}function Ht(u){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function s0({basename:u="/",children:f=null,location:m,navigationType:c="POP",navigator:d,static:h=!1,unstable_useTransitions:v}){Le(!Ql(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=u.replace(/^\/*/,"/"),S=A.useMemo(()=>({basename:E,navigator:d,static:h,unstable_useTransitions:v,future:{}}),[E,d,h,v]);typeof m=="string"&&(m=ll(m));let{pathname:p="/",search:N="",hash:y="",state:U=null,key:H="default",unstable_mask:Y}=m,X=A.useMemo(()=>{let q=ma(p,E);return q==null?null:{location:{pathname:q,search:N,hash:y,state:U,key:H,unstable_mask:Y},navigationType:c}},[E,p,N,y,U,H,c,Y]);return Lt(X!=null,`<Router basename="${E}"> is not able to match the URL "${p}${N}${y}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:A.createElement(wt.Provider,{value:S},A.createElement(Gn.Provider,{children:f,value:X}))}function f0({children:u,location:f}){return Wg(Gr(u),f)}function Gr(u,f=[]){let m=[];return A.Children.forEach(u,(c,d)=>{if(!A.isValidElement(c))return;let h=[...f,d];if(c.type===A.Fragment){m.push.apply(m,Gr(c.props.children,h));return}Le(c.type===Ht,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!c.props.index||!c.props.children,"An index route cannot have child routes.");let v={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(v.children=Gr(c.props.children,h)),m.push(v)}),m}var ru="get",cu="application/x-www-form-urlencoded";function hu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function d0(u){return hu(u)&&u.tagName.toLowerCase()==="button"}function m0(u){return hu(u)&&u.tagName.toLowerCase()==="form"}function h0(u){return hu(u)&&u.tagName.toLowerCase()==="input"}function p0(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function g0(u,f){return u.button===0&&(!f||f==="_self")&&!p0(u)}var ou=null;function v0(){if(ou===null)try{new FormData(document.createElement("form"),0),ou=!1}catch{ou=!0}return ou}var y0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Br(u){return u!=null&&!y0.has(u)?(Lt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cu}"`),null):u}function b0(u,f){let m,c,d,h,v;if(m0(u)){let E=u.getAttribute("action");c=E?ma(E,f):null,m=u.getAttribute("method")||ru,d=Br(u.getAttribute("enctype"))||cu,h=new FormData(u)}else if(d0(u)||h0(u)&&(u.type==="submit"||u.type==="image")){let E=u.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=u.getAttribute("formaction")||E.getAttribute("action");if(c=S?ma(S,f):null,m=u.getAttribute("formmethod")||E.getAttribute("method")||ru,d=Br(u.getAttribute("formenctype"))||Br(E.getAttribute("enctype"))||cu,h=new FormData(E,u),!v0()){let{name:p,type:N,value:y}=u;if(N==="image"){let U=p?`${p}.`:"";h.append(`${U}x`,"0"),h.append(`${U}y`,"0")}else p&&h.append(p,y)}}else{if(hu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');m=ru,c=null,d=cu,v=u}return h&&d==="text/plain"&&(v=h,h=void 0),{action:c,method:m.toLowerCase(),encType:d,formData:h,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kr(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function Mm(u,f,m,c){let d=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return m?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${c}`:d.pathname=`${d.pathname}.${c}`:d.pathname==="/"?d.pathname=`_root.${c}`:f&&ma(d.pathname,f)==="/"?d.pathname=`${f.replace(/\/$/,"")}/_root.${c}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${c}`,d}async function x0(u,f){if(u.id in f)return f[u.id];try{let m=await import(u.module);return f[u.id]=m,m}catch(m){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(m),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function S0(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function j0(u,f,m){let c=await Promise.all(u.map(async d=>{let h=f.routes[d.route.id];if(h){let v=await x0(h,m);return v.links?v.links():[]}return[]}));return T0(c.flat(1).filter(S0).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function pm(u,f,m,c,d,h){let v=(S,p)=>m[p]?S.route.id!==m[p].route.id:!0,E=(S,p)=>m[p].pathname!==S.pathname||m[p].route.path?.endsWith("*")&&m[p].params["*"]!==S.params["*"];return h==="assets"?f.filter((S,p)=>v(S,p)||E(S,p)):h==="data"?f.filter((S,p)=>{let N=c.routes[S.route.id];if(!N||!N.hasLoader)return!1;if(v(S,p)||E(S,p))return!0;if(S.route.shouldRevalidate){let y=S.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:m[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function E0(u,f,{includeHydrateFallback:m}={}){return z0(u.map(c=>{let d=f.routes[c.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),m&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function z0(u){return[...new Set(u)]}function w0(u){let f={},m=Object.keys(u).sort();for(let c of m)f[c]=u[c];return f}function T0(u,f){let m=new Set;return new Set(f),u.reduce((c,d)=>{let h=JSON.stringify(w0(d));return m.has(h)||(m.add(h),c.push({key:h,link:d})),c},[])}function Jr(){let u=A.useContext(Xl);return Kr(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function A0(){let u=A.useContext(mu);return Kr(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Fr=A.createContext(void 0);Fr.displayName="FrameworkContext";function $r(){let u=A.useContext(Fr);return Kr(u,"You must render this element inside a <HydratedRouter> element"),u}function N0(u,f){let m=A.useContext(Fr),[c,d]=A.useState(!1),[h,v]=A.useState(!1),{onFocus:E,onBlur:S,onMouseEnter:p,onMouseLeave:N,onTouchStart:y}=f,U=A.useRef(null);A.useEffect(()=>{if(u==="render"&&v(!0),u==="viewport"){let X=K=>{K.forEach(te=>{v(te.isIntersecting)})},q=new IntersectionObserver(X,{threshold:.5});return U.current&&q.observe(U.current),()=>{q.disconnect()}}},[u]),A.useEffect(()=>{if(c){let X=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(X)}}},[c]);let H=()=>{d(!0)},Y=()=>{d(!1),v(!1)};return m?u!=="intent"?[h,U,{}]:[h,U,{onFocus:Bn(E,H),onBlur:Bn(S,Y),onMouseEnter:Bn(p,H),onMouseLeave:Bn(N,Y),onTouchStart:Bn(y,H)}]:[!1,U,{}]}function Bn(u,f){return m=>{u&&u(m),m.defaultPrevented||f(m)}}function _0({page:u,...f}){let m=Xg(),{router:c}=Jr(),d=A.useMemo(()=>vm(c.routes,u,c.basename),[c.routes,u,c.basename]);return d?m?A.createElement(R0,{page:u,matches:d,...f}):A.createElement(M0,{page:u,matches:d,...f}):null}function O0(u){let{manifest:f,routeModules:m}=$r(),[c,d]=A.useState([]);return A.useEffect(()=>{let h=!1;return j0(u,f,m).then(v=>{h||d(v)}),()=>{h=!0}},[u,f,m]),c}function R0({page:u,matches:f,...m}){let c=Xt(),{future:d}=$r(),{basename:h}=Jr(),v=A.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let E=Mm(u,h,d.unstable_trailingSlashAwareDataRequests,"rsc"),S=!1,p=[];for(let N of f)typeof N.route.shouldRevalidate=="function"?S=!0:p.push(N.route.id);return S&&p.length>0&&E.searchParams.set("_routes",p.join(",")),[E.pathname+E.search]},[h,d.unstable_trailingSlashAwareDataRequests,u,c,f]);return A.createElement(A.Fragment,null,v.map(E=>A.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...m})))}function M0({page:u,matches:f,...m}){let c=Xt(),{future:d,manifest:h,routeModules:v}=$r(),{basename:E}=Jr(),{loaderData:S,matches:p}=A0(),N=A.useMemo(()=>pm(u,f,p,h,c,"data"),[u,f,p,h,c]),y=A.useMemo(()=>pm(u,f,p,h,c,"assets"),[u,f,p,h,c]),U=A.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let X=new Set,q=!1;if(f.forEach(te=>{let W=h.routes[te.route.id];!W||!W.hasLoader||(!N.some(Se=>Se.route.id===te.route.id)&&te.route.id in S&&v[te.route.id]?.shouldRevalidate||W.hasClientLoader?q=!0:X.add(te.route.id))}),X.size===0)return[];let K=Mm(u,E,d.unstable_trailingSlashAwareDataRequests,"data");return q&&X.size>0&&K.searchParams.set("_routes",f.filter(te=>X.has(te.route.id)).map(te=>te.route.id).join(",")),[K.pathname+K.search]},[E,d.unstable_trailingSlashAwareDataRequests,S,c,h,N,f,u,v]),H=A.useMemo(()=>E0(y,h),[y,h]),Y=O0(y);return A.createElement(A.Fragment,null,U.map(X=>A.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...m})),H.map(X=>A.createElement("link",{key:X,rel:"modulepreload",href:X,...m})),Y.map(({key:X,link:q})=>A.createElement("link",{key:X,nonce:m.nonce,...q,crossOrigin:q.crossOrigin??m.crossOrigin})))}function D0(...u){return f=>{u.forEach(m=>{typeof m=="function"?m(f):m!=null&&(m.current=f)})}}var C0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{C0&&(window.__reactRouterVersion="7.14.0")}catch{}function U0({basename:u,children:f,unstable_useTransitions:m,window:c}){let d=A.useRef();d.current==null&&(d.current=pg({window:c,v5Compat:!0}));let h=d.current,[v,E]=A.useState({action:h.action,location:h.location}),S=A.useCallback(p=>{m===!1?E(p):A.startTransition(()=>E(p))},[m]);return A.useLayoutEffect(()=>h.listen(S),[h,S]),A.createElement(s0,{basename:u,children:f,location:v.location,navigationType:v.action,navigator:h,unstable_useTransitions:m})}var Dm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=A.forwardRef(function({onClick:f,discover:m="render",prefetch:c="none",relative:d,reloadDocument:h,replace:v,unstable_mask:E,state:S,target:p,to:N,preventScrollReset:y,viewTransition:U,unstable_defaultShouldRevalidate:H,...Y},X){let{basename:q,navigator:K,unstable_useTransitions:te}=A.useContext(wt),W=typeof N=="string"&&Dm.test(N),Se=Sm(N,q);N=Se.to;let xe=Fg(N,{relative:d}),ce=Xt(),P=null;if(E){let se=du(E,[],ce.unstable_mask?ce.unstable_mask.pathname:"/",!0);q!=="/"&&(se.pathname=se.pathname==="/"?q:Kt([q,se.pathname])),P=K.createHref(se)}let[ne,Ne,Ke]=N0(c,Y),Z=B0(N,{replace:v,unstable_mask:E,state:S,target:p,preventScrollReset:y,relative:d,viewTransition:U,unstable_defaultShouldRevalidate:H,unstable_useTransitions:te});function G(se){f&&f(se),se.defaultPrevented||Z(se)}let oe=!(Se.isExternal||h),J=A.createElement("a",{...Y,...Ke,href:(oe?P:void 0)||Se.absoluteURL||xe,onClick:oe?G:f,ref:D0(X,Ne),target:p,"data-discover":!W&&m==="render"?"true":void 0});return ne&&!W?A.createElement(A.Fragment,null,J,A.createElement(_0,{page:xe})):J});Ce.displayName="Link";var q0=A.forwardRef(function({"aria-current":f="page",caseSensitive:m=!1,className:c="",end:d=!1,style:h,to:v,viewTransition:E,children:S,...p},N){let y=Xn(v,{relative:p.relative}),U=Xt(),H=A.useContext(mu),{navigator:Y,basename:X}=A.useContext(wt),q=H!=null&&k0(y)&&E===!0,K=Y.encodeLocation?Y.encodeLocation(y).pathname:y.pathname,te=U.pathname,W=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;m||(te=te.toLowerCase(),W=W?W.toLowerCase():null,K=K.toLowerCase()),W&&X&&(W=ma(W,X)||W);const Se=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let xe=te===K||!d&&te.startsWith(K)&&te.charAt(Se)==="/",ce=W!=null&&(W===K||!d&&W.startsWith(K)&&W.charAt(K.length)==="/"),P={isActive:xe,isPending:ce,isTransitioning:q},ne=xe?f:void 0,Ne;typeof c=="function"?Ne=c(P):Ne=[c,xe?"active":null,ce?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let Ke=typeof h=="function"?h(P):h;return A.createElement(Ce,{...p,"aria-current":ne,className:Ne,ref:N,style:Ke,to:v,viewTransition:E},typeof S=="function"?S(P):S)});q0.displayName="NavLink";var H0=A.forwardRef(({discover:u="render",fetcherKey:f,navigate:m,reloadDocument:c,replace:d,state:h,method:v=ru,action:E,onSubmit:S,relative:p,preventScrollReset:N,viewTransition:y,unstable_defaultShouldRevalidate:U,...H},Y)=>{let{unstable_useTransitions:X}=A.useContext(wt),q=X0(),K=Q0(E,{relative:p}),te=v.toLowerCase()==="get"?"get":"post",W=typeof E=="string"&&Dm.test(E),Se=xe=>{if(S&&S(xe),xe.defaultPrevented)return;xe.preventDefault();let ce=xe.nativeEvent.submitter,P=ce?.getAttribute("formmethod")||v,ne=()=>q(ce||xe.currentTarget,{fetcherKey:f,method:P,navigate:m,replace:d,state:h,relative:p,preventScrollReset:N,viewTransition:y,unstable_defaultShouldRevalidate:U});X&&m!==!1?A.startTransition(()=>ne()):ne()};return A.createElement("form",{ref:Y,method:te,action:K,onSubmit:c?S:Se,...H,"data-discover":!W&&u==="render"?"true":void 0})});H0.displayName="Form";function L0(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cm(u){let f=A.useContext(Xl);return Le(f,L0(u)),f}function B0(u,{target:f,replace:m,unstable_mask:c,state:d,preventScrollReset:h,relative:v,viewTransition:E,unstable_defaultShouldRevalidate:S,unstable_useTransitions:p}={}){let N=Nm(),y=Xt(),U=Xn(u,{relative:v});return A.useCallback(H=>{if(g0(H,f)){H.preventDefault();let Y=m!==void 0?m:Yn(y)===Yn(U),X=()=>N(u,{replace:Y,unstable_mask:c,state:d,preventScrollReset:h,relative:v,viewTransition:E,unstable_defaultShouldRevalidate:S});p?A.startTransition(()=>X()):X()}},[y,N,U,m,c,d,f,u,h,v,E,S,p])}var Y0=0,G0=()=>`__${String(++Y0)}__`;function X0(){let{router:u}=Cm("useSubmit"),{basename:f}=A.useContext(wt),m=u0(),c=u.fetch,d=u.navigate;return A.useCallback(async(h,v={})=>{let{action:E,method:S,encType:p,formData:N,body:y}=b0(h,f);if(v.navigate===!1){let U=v.fetcherKey||G0();await c(U,m,v.action||E,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:N,body:y,formMethod:v.method||S,formEncType:v.encType||p,flushSync:v.flushSync})}else await d(v.action||E,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:N,body:y,formMethod:v.method||S,formEncType:v.encType||p,replace:v.replace,state:v.state,fromRouteId:m,flushSync:v.flushSync,viewTransition:v.viewTransition})},[c,d,f,m])}function Q0(u,{relative:f}={}){let{basename:m}=A.useContext(wt),c=A.useContext(Jt);Le(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),h={...Xn(u||".",{relative:f})},v=Xt();if(u==null){h.search=v.search;let E=new URLSearchParams(h.search),S=E.getAll("index");if(S.some(N=>N==="")){E.delete("index"),S.filter(y=>y).forEach(y=>E.append("index",y));let N=E.toString();h.search=N?`?${N}`:""}}return(!u||u===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),m!=="/"&&(h.pathname=h.pathname==="/"?m:Kt([m,h.pathname])),Yn(h)}function k0(u,{relative:f}={}){let m=A.useContext(zm);Le(m!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Cm("useViewTransitionState"),d=Xn(u,{relative:f});if(!m.isTransitioning)return!1;let h=ma(m.currentLocation.pathname,c)||m.currentLocation.pathname,v=ma(m.nextLocation.pathname,c)||m.nextLocation.pathname;return fu(d.pathname,v)!=null||fu(d.pathname,h)!=null}function Z0(){const[u,f]=A.useState(!0);return A.useEffect(()=>{const m=setTimeout(()=>{f(!1)},500);return()=>clearTimeout(m)},[]),r.jsxs("div",{id:"loader",style:{opacity:u?1:0,transition:"opacity 0.5s ease",pointerEvents:u?"auto":"none"},children:[r.jsx("div",{className:"spinner"}),r.jsx("p",{className:"loader-text",children:"Loading..."})]})}function Um(){const[u,f]=A.useState(null);A.useEffect(()=>{const d=localStorage.getItem("theme");if(d)f(d==="dark"),m(d);else{const h=window.matchMedia("(prefers-color-scheme: dark)").matches;f(h),m(h?"dark":"light")}},[]);const m=d=>{document.documentElement.classList.remove("light-theme","dark-theme"),d==="light"?document.documentElement.classList.add("light-theme"):document.documentElement.classList.add("dark-theme"),localStorage.setItem("theme",d)},c=()=>{const d=u?"light":"dark";f(!u),m(d)};return u===null?null:r.jsx("button",{onClick:c,title:u?"Switch to Light Mode":"Switch to Dark Mode",style:{background:"transparent",border:"none",color:"inherit",cursor:"pointer",fontSize:"1.2rem",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",width:"36px",height:"36px",transition:"all 0.2s ease"},onMouseEnter:d=>d.target.style.opacity="0.7",onMouseLeave:d=>d.target.style.opacity="1",children:u?r.jsx("i",{className:"fas fa-sun"}):r.jsx("i",{className:"fas fa-moon"})})}function V0({open:u,onClose:f}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
            .overlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.6);
                opacity: 0;
                pointer-events: none;
                transition: 0.2s;
                z-index: 10;
            }

            .overlay.show {
                opacity: 1;
                pointer-events: auto;
            }

            .menu {
                position: fixed;
                top: 0;
                right: 0;
                height: 100dvh;
                width: min(55vw, 320px);

                background: var(--bg-secondary);
                border-left: 1px solid var(--border-color);

                padding: 20px;
                padding-top: 120px;

                transform: translateX(100%);
                transition: 0.25s ease;
                z-index: 101;

                display: flex;
                flex-direction: column;
                gap: 15px;
                overflow-y: auto;
            }

            .menu.open {
                transform: translateX(0);
            }

            .section {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .title {
                font-size: 11px;
                color: var(--text-tertiary);
                letter-spacing: 1px;
                text-transform: uppercase;
            }

            .link {
                font-size: 15px;
                color: var(--text-secondary);
                text-decoration: none;
                padding: 4px 0;
                transition: all 0.2s ease;
            }

            .link:hover {
                color: var(--text-primary);
            }

            .divider {
                height: 1px;
                background: var(--border-color);
                margin: 5px 0;
            }

            .header-btn {
                background: var(--accent-primary);
                color: white;
                padding: 10px;
                text-align: center;
                border-radius: 8px;
                font-weight: 600;
                font-size: 13px;
                text-decoration: none;
                transition: all 0.2s ease;
            }

            .header-btn:hover {
                background: var(--accent-hover);
            }

            .theme-toggle-wrapper {
                position: fixed;
                top: 100px;
                right: 30px;
                z-index: 1002;
                display: none;
                opacity: 0;
                pointer-events: none;
                transition: all 0.25s ease;
                transform: translateX(100%);
            }

            .theme-toggle-wrapper.show {
                opacity: 1;
                pointer-events: auto;
                transform: translateX(0);
            }

            @media (max-width: 990px) {
                .theme-toggle-wrapper {
                    display: block;
                }
            }

        `}),r.jsx("div",{className:`overlay ${u?"show":""}`,onClick:f}),r.jsx("div",{className:`theme-toggle-wrapper ${u?"show":""}`,children:r.jsx(Um,{})}),r.jsxs("div",{className:`menu ${u?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Project"}),r.jsx(Ce,{className:"link",to:"/about",onClick:f,children:"About"}),r.jsx("a",{className:"link",href:"https://docs.freedomloader.acnolo.fr/",onClick:f,children:"Documentation"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Explore"}),r.jsx(Ce,{className:"link",to:"/faq",onClick:f,children:"FAQ"}),r.jsx(Ce,{className:"link",to:"/contact",onClick:f,children:"Contact"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Workshop"}),r.jsx("a",{className:"link",href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{className:"link",href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Contribute"}),r.jsx("a",{className:"link",href:"https://github.com/MasterAcnolo/Freedom-Loader",children:"GitHub"}),r.jsx(Ce,{className:"link",to:"/contributing",onClick:f,children:"Guide"})]}),r.jsx(Ce,{to:"/download",className:"header-btn",onClick:f,children:"Download"})]})]})}function K0(){const[u,f]=A.useState(null),[m,c]=A.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
            .header {
                display: flex;
                align-items: center;
                padding: 12px 40px;
                background: var(--header-bg);
                border-bottom: 1px solid var(--header-border);
                transition: all 0.3s ease;
                position: sticky;
                top: 0;
                z-index: 200;
            }

            .logo img {
                height: 65px;
                transition: transform 0.3s ease, filter 0.3s ease;
                cursor: pointer;
                filter: invert(0);
            }

            :root.light-theme .logo img {
                filter: invert(1);
            }

            .logo img:hover {
                transform: scale(1.03);
                filter: brightness(0.8) invert(var(--logo-invert, 0));
            }

            .logo img.active {
                transform: scale(0.85);
                filter: brightness(1.2);
            }

            .nav {
                display: flex;
                align-items: center;
                gap: 40px;
                margin-left: auto;
            }

            .nav a, .trigger {
                text-decoration: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 18px;
                font-weight: 500;
            }

            .item {
                position: relative;
                padding: 10px 0;
            }

            .item::before {
                content: "";
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 18px;
            }

            .arrow {
                font-size: 20px;
                transition: transform 0.2s;
            }

            .item.open .arrow {
                transform: rotate(180deg);
            }

            .dropdown {
                position: absolute;
                top: calc(100% + 12px);
                left: 0;

                background: var(--bg-secondary);
                border: 1px solid var(--border-color);
                border-radius: 10px;

                padding: 10px;
                display: flex;
                flex-direction: column;
                min-width: 220px;

                opacity: 0;
                transform: translateY(8px);
                pointer-events: none;
                transition: 0.2s ease;
                z-index: 200;

            }

            .item.open .dropdown {
                opacity: 1;
                transform: translateY(0);
                pointer-events: auto;
            }

            .dropdown a {
                padding: 9px 10px;
                border-radius: 6px;
                color: var(--text-secondary);
                font-size: 14px;
                z-index: 200;
                text-decoration: none;

            }

            .dropdown a:hover {
                background: var(--card-bg);
                color: var(--text-primary);
                z-index: 200;

            }

            .header-btn {
                background: white;
                color: black;
                padding: 10px 20px;
                border-radius: 6px;
                font-weight: 600;
                font-size: 14px;
                text-decoration: none;
                transition: all 0.2s ease;
            }

            .header-btn:hover {
                background: rgba(255, 255, 255, 0.9);
                transform: translateY(-1px);
            }

            .header-btn:active {
                transform: translateY(0);
            }

           .hamburger {
                display: none; 
                width: 30px;
                height: 22px;
                position: fixed;
                top: 36px;
                right: 40px;
                cursor: pointer;
                z-index: 1000;
                margin-left: auto;
            }

            .hamburger span {
                position: absolute;
                left: 0;
                width: 100%;
                height: 2px;
                background: var(--text-primary);
                border-radius: 2px;
                transition: 0.25s ease;
            }

            /* position initiale */
            .hamburger span:nth-child(1) {
                top: 0;
            }

            .hamburger span:nth-child(2) {
                top: 10px;
            }

            .hamburger span:nth-child(3) {
                top: 20px;
            }

            /* état OPEN → morph X */
            .hamburger.open span:nth-child(1) {
                top: 10px;
                transform: rotate(45deg);
            }

            .hamburger.open span:nth-child(2) {
                opacity: 0;
                transform: translateX(-10px);
            }

            .hamburger.open span:nth-child(3) {
                top: 10px;
                transform: rotate(-45deg);
            }

            @media (max-width: 990px) {
                .nav {
                    display: none;
                }

                .hamburger {
                    display: block;
                }
            }
        `}),r.jsxs("header",{className:"header",children:[r.jsx(Ce,{to:"/",className:"logo",children:r.jsx("img",{src:"./assets/icon/Freedom_Loader.png",alt:"logo"})}),r.jsxs("nav",{className:"nav",children:[r.jsxs("div",{className:`item ${u==="project"?"open":""}`,onMouseEnter:()=>f("project"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Project ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx(Ce,{to:"/about",children:"About"}),r.jsx("a",{href:"https://docs.freedomloader.acnolo.fr/",children:"Documentation"})]})]}),r.jsxs("div",{className:`item ${u==="explore"?"open":""}`,onMouseEnter:()=>f("explore"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Explore ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx(Ce,{to:"/faq",children:"FAQ"}),r.jsx(Ce,{to:"/contact",children:"Contact"})]})]}),r.jsxs("div",{className:`item ${u==="workshop"?"open":""}`,onMouseEnter:()=>f("workshop"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Workshop ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx("a",{href:"https://workshop.freedomloader.acnolo.fr/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{href:"https://workshop.freedomloader.acnolo.fr/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create Theme"})]})]}),r.jsxs("div",{className:`item ${u==="contribute"?"open":""}`,onMouseEnter:()=>f("contribute"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Contribute ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",children:"GitHub"}),r.jsx(Ce,{to:"/contributing",children:"Guide"})]})]}),r.jsx(Ce,{to:"/download",className:"header-btn",children:"Download"}),r.jsx(Um,{})]}),r.jsxs("div",{className:`hamburger ${m?"open":""}`,onClick:()=>c(!m),children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]}),r.jsx(V0,{open:m,onClose:()=>c(!1)})]})}function J0(){const u=new Date().getFullYear();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                footer {
                    background: var(--bg-tertiary);
                    color: var(--text-primary);
                    padding: 50px 10% 20px;
                    font-family: Poppins;
                    margin-top: 60px;
                    border-top: 1px solid var(--border-color);
                    transition: all 0.3s ease;
                }

                .footer-container {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 40px;
                    margin-bottom: 30px;
                    max-width: 1400px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .footer-brand {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    min-width: 200px;
                }

                .footer-brand img {
                    height: 60px;
                    width: auto;
                    transition: transform 0.3s ease, filter 0.3s ease;
                    filter: invert(0);
                }

                :root.light-theme .footer-brand img {
                    filter: invert(1);
                }

                .footer-brand p {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    margin: 0;
                }

                .footer-column {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .footer-column h4 {
                    margin: 0 0 10px 0;
                    font-size: 1rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: var(--text-secondary);
                }

                .footer-column a {
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: all 0.2s ease;
                    font-size: 0.9rem;
                }

                .footer-column a:hover {
                    color: var(--text-primary);
                }

                .footer-socials {
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                }

                .footer-socials a {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 6px;
                    color: var(--text-secondary);
                    transition: all 0.3s ease;
                    font-size: 1.2rem;
                }

                .footer-socials svg {
                    width: 20px;
                    height: 20px;
                    stroke: currentColor;
                    fill: none;
                }

                .footer-socials img {
                    width: 20px;
                    height: 20px;
                    filter: invert(0);
                    transition: all 0.3s ease;
                }

                :root.dark-theme .footer-socials img {
                    filter: invert(1);
                }

                @media (prefers-color-scheme: dark) {
                    :root:not(.light-theme) .footer-socials img {
                        filter: invert(1);
                    }
                }

                .footer-socials svg {
                    width: 20px;
                    height: 20px;
                    stroke: currentColor;
                    fill: none;
                }

                .footer-socials a:hover {
                    opacity: 1;
                    background: var(--accent-primary);
                    color: white;
                    transform: translateY(-3px);
                }

                .footer-socials a:hover img {
                    filter: brightness(0) invert(1);
                }

                .footer-socials a:hover svg {
                    stroke: white;
                    fill: white;
                }

                .footer-bottom {
                    border-top: 1px solid var(--border-color);
                    padding-top: 20px;
                    text-align: center;
                    font-size: 0.85rem;
                    opacity: 0.7;
                    max-width: 1400px;
                    margin-left: auto;
                    margin-right: auto;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .footer-container {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        gap: 30px;
                    }

                    .footer-brand {
                        align-items: center;
                    }

                    .footer-column {
                        align-items: center;
                    }

                    .footer-column a {
                        transition: all 0.2s ease;
                    }

                    .footer-column a:hover {
                        transform: none;
                        opacity: 1;
                    }

                    .footer-socials {
                        justify-content: center;
                    }
                }

                @media (max-width: 500px) {
                    footer {
                        padding: 30px 5% 15px;
                    }

                    .footer-container {
                        gap: 20px;
                    }

                    .footer-column h4 {
                        font-size: 0.9rem;
                    }

                    .footer-column a {
                        font-size: 0.85rem;
                    }

                    .footer-bottom {
                        font-size: 0.75rem;
                    }
                }
            `}),r.jsxs("footer",{children:[r.jsxs("div",{className:"footer-container",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx(Ce,{to:"/",children:r.jsx("img",{src:"./assets/icon/Freedom_Loader.png",alt:"Freedom Loader"})}),r.jsx("p",{children:"Put Freedom in your Downloads."})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Site"}),r.jsx(Ce,{to:"/",children:"Home"}),r.jsx(Ce,{to:"/about",children:"About"}),r.jsx(Ce,{to:"/download",children:"Download"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Workshop"}),r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create Theme"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Legal"}),r.jsx(Ce,{to:"/contact",children:"Contact"}),r.jsx(Ce,{to:"/privacy",children:"Privacy"}),r.jsx(Ce,{to:"/terms",children:"Terms"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Community"}),r.jsx(Ce,{to:"/faq",children:"FAQ"}),r.jsx("a",{href:"https://docs.freedomloader.acnolo.fr/",children:"Documentation"}),r.jsx(Ce,{to:"/contributing",children:"Contributing"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",rel:"noopener noreferrer",children:"Discussions"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Follow Us"}),r.jsxs("div",{className:"footer-socials",children:[r.jsx("a",{href:"https://acnolo.fr/",target:"_blank",rel:"noopener noreferrer",title:"Website",children:r.jsx("img",{src:"./assets/icon/globe-solid-full.svg",alt:"Website"})}),r.jsx("a",{href:"https://github.com/MasterAcnolo",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:r.jsx("img",{src:"./assets/icon/github-brands-solid-full.svg",alt:"GitHub"})})]})]})]}),r.jsx("div",{className:"footer-bottom",children:r.jsxs("p",{children:["© ",u," Freedom Loader — All rights reserved."]})})]})]})}function F0(){const{pathname:u}=Xt();return A.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[u]),null}var su={exports:{}},$0=su.exports,gm;function W0(){return gm||(gm=1,(function(u,f){(function(m,c){u.exports=c()})($0,function(){return(function(m){function c(h){if(d[h])return d[h].exports;var v=d[h]={exports:{},id:h,loaded:!1};return m[h].call(v.exports,v,v.exports,c),v.loaded=!0,v.exports}var d={};return c.m=m,c.c=d,c.p="dist/",c(0)})([function(m,c,d){function h(J){return J&&J.__esModule?J:{default:J}}var v=Object.assign||function(J){for(var se=1;se<arguments.length;se++){var O=arguments[se];for(var B in O)Object.prototype.hasOwnProperty.call(O,B)&&(J[B]=O[B])}return J},E=d(1),S=(h(E),d(6)),p=h(S),N=d(7),y=h(N),U=d(8),H=h(U),Y=d(9),X=h(Y),q=d(10),K=h(q),te=d(11),W=h(te),Se=d(14),xe=h(Se),ce=[],P=!1,ne={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},Ne=function(){var J=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(J&&(P=!0),P)return ce=(0,W.default)(ce,ne),(0,K.default)(ce,ne.once),ce},Ke=function(){ce=(0,xe.default)(),Ne()},Z=function(){ce.forEach(function(J,se){J.node.removeAttribute("data-aos"),J.node.removeAttribute("data-aos-easing"),J.node.removeAttribute("data-aos-duration"),J.node.removeAttribute("data-aos-delay")})},G=function(J){return J===!0||J==="mobile"&&X.default.mobile()||J==="phone"&&X.default.phone()||J==="tablet"&&X.default.tablet()||typeof J=="function"&&J()===!0},oe=function(J){ne=v(ne,J),ce=(0,xe.default)();var se=document.all&&!window.atob;return G(ne.disable)||se?Z():(ne.disableMutationObserver||H.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),ne.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",ne.easing),document.querySelector("body").setAttribute("data-aos-duration",ne.duration),document.querySelector("body").setAttribute("data-aos-delay",ne.delay),ne.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?Ne(!0):ne.startEvent==="load"?window.addEventListener(ne.startEvent,function(){Ne(!0)}):document.addEventListener(ne.startEvent,function(){Ne(!0)}),window.addEventListener("resize",(0,y.default)(Ne,ne.debounceDelay,!0)),window.addEventListener("orientationchange",(0,y.default)(Ne,ne.debounceDelay,!0)),window.addEventListener("scroll",(0,p.default)(function(){(0,K.default)(ce,ne.once)},ne.throttleDelay)),ne.disableMutationObserver||H.default.ready("[data-aos]",Ke),ce)};m.exports={init:oe,refresh:Ne,refreshHard:Ke}},function(m,c){},,,,,function(m,c){(function(d){function h(G,oe,J){function se(he){var Fe=Q,Tt=I;return Q=I=void 0,it=he,le=G.apply(Tt,Fe)}function O(he){return it=he,ve=setTimeout(me,oe),mt?se(he):le}function B(he){var Fe=he-ye,Tt=he-it,Qn=oe-Fe;return ht?Ke(Qn,ae-Tt):Qn}function F(he){var Fe=he-ye,Tt=he-it;return ye===void 0||Fe>=oe||Fe<0||ht&&Tt>=ae}function me(){var he=Z();return F(he)?je(he):void(ve=setTimeout(me,B(he)))}function je(he){return ve=void 0,De&&Q?se(he):(Q=I=void 0,le)}function x(){ve!==void 0&&clearTimeout(ve),it=0,Q=ye=I=ve=void 0}function D(){return ve===void 0?le:je(Z())}function L(){var he=Z(),Fe=F(he);if(Q=arguments,I=this,ye=he,Fe){if(ve===void 0)return O(ye);if(ht)return ve=setTimeout(me,oe),se(ye)}return ve===void 0&&(ve=setTimeout(me,oe)),le}var Q,I,ae,le,ve,ye,it=0,mt=!1,ht=!1,De=!0;if(typeof G!="function")throw new TypeError(U);return oe=N(oe)||0,E(J)&&(mt=!!J.leading,ht="maxWait"in J,ae=ht?Ne(N(J.maxWait)||0,oe):ae,De="trailing"in J?!!J.trailing:De),L.cancel=x,L.flush=D,L}function v(G,oe,J){var se=!0,O=!0;if(typeof G!="function")throw new TypeError(U);return E(J)&&(se="leading"in J?!!J.leading:se,O="trailing"in J?!!J.trailing:O),h(G,oe,{leading:se,maxWait:oe,trailing:O})}function E(G){var oe=typeof G>"u"?"undefined":y(G);return!!G&&(oe=="object"||oe=="function")}function S(G){return!!G&&(typeof G>"u"?"undefined":y(G))=="object"}function p(G){return(typeof G>"u"?"undefined":y(G))=="symbol"||S(G)&&ne.call(G)==Y}function N(G){if(typeof G=="number")return G;if(p(G))return H;if(E(G)){var oe=typeof G.valueOf=="function"?G.valueOf():G;G=E(oe)?oe+"":oe}if(typeof G!="string")return G===0?G:+G;G=G.replace(X,"");var J=K.test(G);return J||te.test(G)?W(G.slice(2),J?2:8):q.test(G)?H:+G}var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(G){return typeof G}:function(G){return G&&typeof Symbol=="function"&&G.constructor===Symbol&&G!==Symbol.prototype?"symbol":typeof G},U="Expected a function",H=NaN,Y="[object Symbol]",X=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,te=/^0o[0-7]+$/i,W=parseInt,Se=(typeof d>"u"?"undefined":y(d))=="object"&&d&&d.Object===Object&&d,xe=(typeof self>"u"?"undefined":y(self))=="object"&&self&&self.Object===Object&&self,ce=Se||xe||Function("return this")(),P=Object.prototype,ne=P.toString,Ne=Math.max,Ke=Math.min,Z=function(){return ce.Date.now()};m.exports=v}).call(c,(function(){return this})())},function(m,c){(function(d){function h(Z,G,oe){function J(De){var he=L,Fe=Q;return L=Q=void 0,ye=De,ae=Z.apply(Fe,he)}function se(De){return ye=De,le=setTimeout(F,G),it?J(De):ae}function O(De){var he=De-ve,Fe=De-ye,Tt=G-he;return mt?Ne(Tt,I-Fe):Tt}function B(De){var he=De-ve,Fe=De-ye;return ve===void 0||he>=G||he<0||mt&&Fe>=I}function F(){var De=Ke();return B(De)?me(De):void(le=setTimeout(F,O(De)))}function me(De){return le=void 0,ht&&L?J(De):(L=Q=void 0,ae)}function je(){le!==void 0&&clearTimeout(le),ye=0,L=ve=Q=le=void 0}function x(){return le===void 0?ae:me(Ke())}function D(){var De=Ke(),he=B(De);if(L=arguments,Q=this,ve=De,he){if(le===void 0)return se(ve);if(mt)return le=setTimeout(F,G),J(ve)}return le===void 0&&(le=setTimeout(F,G)),ae}var L,Q,I,ae,le,ve,ye=0,it=!1,mt=!1,ht=!0;if(typeof Z!="function")throw new TypeError(y);return G=p(G)||0,v(oe)&&(it=!!oe.leading,mt="maxWait"in oe,I=mt?ne(p(oe.maxWait)||0,G):I,ht="trailing"in oe?!!oe.trailing:ht),D.cancel=je,D.flush=x,D}function v(Z){var G=typeof Z>"u"?"undefined":N(Z);return!!Z&&(G=="object"||G=="function")}function E(Z){return!!Z&&(typeof Z>"u"?"undefined":N(Z))=="object"}function S(Z){return(typeof Z>"u"?"undefined":N(Z))=="symbol"||E(Z)&&P.call(Z)==H}function p(Z){if(typeof Z=="number")return Z;if(S(Z))return U;if(v(Z)){var G=typeof Z.valueOf=="function"?Z.valueOf():Z;Z=v(G)?G+"":G}if(typeof Z!="string")return Z===0?Z:+Z;Z=Z.replace(Y,"");var oe=q.test(Z);return oe||K.test(Z)?te(Z.slice(2),oe?2:8):X.test(Z)?U:+Z}var N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Z){return typeof Z}:function(Z){return Z&&typeof Symbol=="function"&&Z.constructor===Symbol&&Z!==Symbol.prototype?"symbol":typeof Z},y="Expected a function",U=NaN,H="[object Symbol]",Y=/^\s+|\s+$/g,X=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,K=/^0o[0-7]+$/i,te=parseInt,W=(typeof d>"u"?"undefined":N(d))=="object"&&d&&d.Object===Object&&d,Se=(typeof self>"u"?"undefined":N(self))=="object"&&self&&self.Object===Object&&self,xe=W||Se||Function("return this")(),ce=Object.prototype,P=ce.toString,ne=Math.max,Ne=Math.min,Ke=function(){return xe.Date.now()};m.exports=h}).call(c,(function(){return this})())},function(m,c){function d(N){var y=void 0,U=void 0;for(y=0;y<N.length;y+=1)if(U=N[y],U.dataset&&U.dataset.aos||U.children&&d(U.children))return!0;return!1}function h(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function v(){return!!h()}function E(N,y){var U=window.document,H=h(),Y=new H(S);p=y,Y.observe(U.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function S(N){N&&N.forEach(function(y){var U=Array.prototype.slice.call(y.addedNodes),H=Array.prototype.slice.call(y.removedNodes),Y=U.concat(H);if(d(Y))return p()})}Object.defineProperty(c,"__esModule",{value:!0});var p=function(){};c.default={isSupported:v,ready:E}},function(m,c){function d(U,H){if(!(U instanceof H))throw new TypeError("Cannot call a class as a function")}function h(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(c,"__esModule",{value:!0});var v=(function(){function U(H,Y){for(var X=0;X<Y.length;X++){var q=Y[X];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(H,q.key,q)}}return function(H,Y,X){return Y&&U(H.prototype,Y),X&&U(H,X),H}})(),E=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,S=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,p=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,N=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,y=(function(){function U(){d(this,U)}return v(U,[{key:"phone",value:function(){var H=h();return!(!E.test(H)&&!S.test(H.substr(0,4)))}},{key:"mobile",value:function(){var H=h();return!(!p.test(H)&&!N.test(H.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),U})();c.default=new y},function(m,c){Object.defineProperty(c,"__esModule",{value:!0});var d=function(v,E,S){var p=v.node.getAttribute("data-aos-once");E>v.position?v.node.classList.add("aos-animate"):typeof p<"u"&&(p==="false"||!S&&p!=="true")&&v.node.classList.remove("aos-animate")},h=function(v,E){var S=window.pageYOffset,p=window.innerHeight;v.forEach(function(N,y){d(N,p+S,E)})};c.default=h},function(m,c,d){function h(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(c,"__esModule",{value:!0});var v=d(12),E=h(v),S=function(p,N){return p.forEach(function(y,U){y.node.classList.add("aos-init"),y.position=(0,E.default)(y.node,N.offset)}),p};c.default=S},function(m,c,d){function h(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(c,"__esModule",{value:!0});var v=d(13),E=h(v),S=function(p,N){var y=0,U=0,H=window.innerHeight,Y={offset:p.getAttribute("data-aos-offset"),anchor:p.getAttribute("data-aos-anchor"),anchorPlacement:p.getAttribute("data-aos-anchor-placement")};switch(Y.offset&&!isNaN(Y.offset)&&(U=parseInt(Y.offset)),Y.anchor&&document.querySelectorAll(Y.anchor)&&(p=document.querySelectorAll(Y.anchor)[0]),y=(0,E.default)(p).top,Y.anchorPlacement){case"top-bottom":break;case"center-bottom":y+=p.offsetHeight/2;break;case"bottom-bottom":y+=p.offsetHeight;break;case"top-center":y+=H/2;break;case"bottom-center":y+=H/2+p.offsetHeight;break;case"center-center":y+=H/2+p.offsetHeight/2;break;case"top-top":y+=H;break;case"bottom-top":y+=p.offsetHeight+H;break;case"center-top":y+=p.offsetHeight/2+H}return Y.anchorPlacement||Y.offset||isNaN(N)||(U=N),y+U};c.default=S},function(m,c){Object.defineProperty(c,"__esModule",{value:!0});var d=function(h){for(var v=0,E=0;h&&!isNaN(h.offsetLeft)&&!isNaN(h.offsetTop);)v+=h.offsetLeft-(h.tagName!="BODY"?h.scrollLeft:0),E+=h.offsetTop-(h.tagName!="BODY"?h.scrollTop:0),h=h.offsetParent;return{top:E,left:v}};c.default=d},function(m,c){Object.defineProperty(c,"__esModule",{value:!0});var d=function(h){return h=h||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(h,function(v){return{node:v}})};c.default=d}])})})(su)),su.exports}var I0=W0();const P0=ng(I0),ev=[{icon:"fa-sliders",title:"Choose what works for you",description:"Pick the format and quality you want before you download."},{icon:"fa-folder-open",title:"Save files where you want",description:"Set your download location and keep your media organized."},{icon:"fa-palette",title:"Make the app your own",description:"Adjust the look with themes from the app and the community workshop."}];function tv(){return A.useEffect(()=>{document.title="Freedom Loader"},[]),A.useEffect(()=>{P0.init({duration:650,easing:"ease-out-cubic",offset:70,once:!0,disable:()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches})},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                .home-page {
                    color: var(--text-primary);
                    background: var(--bg-primary);
                }

                .home-container {
                    width: min(1120px, calc(100% - 48px));
                    margin: 0 auto;
                }

                .home-hero {
                    padding: clamp(56px, 8vw, 100px) 0 84px;
                    background: var(--bg-primary);
                }

                .home-hero-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.8fr);
                    align-items: center;
                    gap: clamp(36px, 7vw, 84px);
                }

                @keyframes home-enter {
                    from {
                        opacity: 0;
                        transform: translateX(-28px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes home-preview-enter {
                    from {
                        opacity: 0;
                        transform: translateX(28px) scale(0.97);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }

                .home-hero-copy {
                    animation: home-enter 700ms ease-out both;
                }

                .home-hero-copy h1 {
                    max-width: 640px;
                    margin: 0;
                    font-size: clamp(2.6rem, 5.4vw, 4.5rem);
                    font-weight: 700;
                    letter-spacing: 0;
                    line-height: 1.12;
                }

                .home-hero-copy h1 span {
                    color: var(--accent-primary);
                }

                .home-lead {
                    max-width: 570px;
                    margin: 22px 0 0;
                    color: var(--text-secondary);
                    font-size: 1.1rem;
                    line-height: 1.75;
                }

                .home-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    margin-top: 30px;
                }

                .home-button {
                    display: inline-flex;
                    min-height: 46px;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;
                    padding: 0 20px;
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.95rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
                }

                .home-button:hover {
                    transform: translateY(-2px);
                }

                .home-button-primary {
                    border-color: var(--accent-primary);
                    background: var(--accent-primary);
                    color: #fff;
                }

                .home-button-primary:hover {
                    border-color: var(--accent-hover);
                    background: var(--accent-hover);
                }

                .home-button-secondary {
                    background: var(--card-bg);
                }

                .home-button-secondary:hover {
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                }

                .home-platforms {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 18px;
                    margin-top: 24px;
                    color: var(--text-tertiary);
                    font-size: 0.86rem;
                }

                .home-platforms span {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                }

                .home-platforms i {
                    color: var(--text-secondary);
                }

                .home-preview {
                    width: fit-content;
                    max-width: 100%;
                    margin: 0 auto;
                    padding: 6px;
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    background: var(--bg-secondary);
                    box-shadow: var(--shadow);
                    animation: home-preview-enter 750ms 120ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
                }

                .home-preview img {
                    display: block;
                    width: auto;
                    max-width: 100%;
                    max-height: 490px;
                    border-radius: 6px;
                    object-fit: contain;
                }

                .home-highlights {
                    padding: 64px 0 78px;
                    border-top: 1px solid var(--border-color);
                    background: var(--bg-secondary);
                }

                .home-section-heading {
                    margin-bottom: 30px;
                }

                .home-section-heading h2,
                .home-about h2 {
                    margin: 0;
                    font-size: clamp(1.8rem, 3.5vw, 2.5rem);
                    font-weight: 600;
                    letter-spacing: 0;
                    line-height: 1.25;
                }

                .home-section-heading p,
                .home-about p {
                    max-width: 640px;
                    margin: 12px 0 0;
                    color: var(--text-secondary);
                    line-height: 1.75;
                }

                .home-highlight-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 16px;
                }

                .home-highlight {
                    padding: 22px;
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    background: var(--card-bg);
                }

                .home-highlight-icon {
                    color: var(--accent-primary);
                    font-size: 1.25rem;
                }

                .home-highlight h3 {
                    margin: 16px 0 8px;
                    font-size: 1.05rem;
                    font-weight: 600;
                }

                .home-highlight p {
                    margin: 0;
                    color: var(--text-secondary);
                    font-size: 0.92rem;
                    line-height: 1.7;
                }

                .home-about {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 32px;
                    padding: 64px 0 76px;
                }

                .home-about-copy {
                    max-width: 700px;
                }

                .home-about .home-button {
                    flex: 0 0 auto;
                }

                @media (max-width: 780px) {
                    .home-hero-grid {
                        grid-template-columns: 1fr;
                    }

                    .home-hero-copy {
                        text-align: center;
                    }

                    .home-lead {
                        margin-right: auto;
                        margin-left: auto;
                    }

                    .home-actions,
                    .home-platforms {
                        justify-content: center;
                    }

                    .home-preview img {
                        max-height: 420px;
                    }

                    .home-highlight-grid {
                        grid-template-columns: 1fr;
                    }

                    .home-about {
                        align-items: flex-start;
                        flex-direction: column;
                    }
                }

                @media (max-width: 520px) {
                    .home-container {
                        width: min(100% - 32px, 480px);
                    }

                    .home-hero {
                        padding: 52px 0 64px;
                    }

                    .home-hero-copy h1 {
                        font-size: clamp(2.35rem, 11vw, 3.4rem);
                    }

                    .home-lead {
                        font-size: 1rem;
                    }

                    .home-actions {
                        flex-direction: column;
                    }

                    .home-preview {
                        padding: 7px;
                    }

                    .home-preview img {
                        max-height: 360px;
                    }

                    .home-highlights {
                        padding: 52px 0 60px;
                    }

                    .home-about {
                        padding: 52px 0 60px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .home-page *,
                    .home-page *::before,
                    .home-page *::after {
                        animation-duration: 0.01ms !important;
                        animation-delay: 0ms !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}),r.jsxs("main",{className:"home-page",children:[r.jsx("section",{className:"home-hero",children:r.jsxs("div",{className:"home-container home-hero-grid",children:[r.jsxs("div",{className:"home-hero-copy",children:[r.jsxs("h1",{children:["Download video and audio. ",r.jsx("span",{children:"Keep it simple."})]}),r.jsx("p",{className:"home-lead",children:"Freedom Loader is a free desktop app for Windows and Linux. Paste a link, choose your format, and download."}),r.jsxs("div",{className:"home-actions",children:[r.jsxs(Ce,{to:"/download",className:"home-button home-button-primary",children:[r.jsx("i",{className:"fas fa-download","aria-hidden":"true"})," Download Freedom Loader"]}),r.jsx(Ce,{to:"/about",className:"home-button home-button-secondary",children:"About the project"})]}),r.jsxs("div",{className:"home-platforms","aria-label":"Available platforms",children:[r.jsxs("span",{children:[r.jsx("i",{className:"fab fa-windows","aria-hidden":"true"})," Windows"]}),r.jsxs("span",{children:[r.jsx("i",{className:"fab fa-linux","aria-hidden":"true"})," Linux"]}),r.jsxs("span",{children:[r.jsx("i",{className:"fas fa-code-branch","aria-hidden":"true"})," Open source"]})]})]}),r.jsx("div",{className:"home-preview",children:r.jsx("img",{src:"./assets/pictures/FreedomLoaderPreview.png",alt:"Freedom Loader showing a media download and its details"})})]})}),r.jsx("section",{className:"home-highlights",children:r.jsxs("div",{className:"home-container",children:[r.jsxs("div",{className:"home-section-heading","data-aos":"fade-up",children:[r.jsx("h2",{children:"The essentials, without the clutter."}),r.jsx("p",{children:"Set up a download the way you want, then let Freedom Loader handle the rest."})]}),r.jsx("div",{className:"home-highlight-grid",children:ev.map((u,f)=>r.jsxs("article",{className:"home-highlight","data-aos":"fade-up","data-aos-delay":f*100,children:[r.jsx("i",{className:`fas ${u.icon} home-highlight-icon`,"aria-hidden":"true"}),r.jsx("h3",{children:u.title}),r.jsx("p",{children:u.description})]},u.title))})]})}),r.jsxs("section",{className:"home-container home-about","data-aos":"fade-up",children:[r.jsxs("div",{className:"home-about-copy",children:[r.jsx("h2",{children:"Made to be useful — and open source."}),r.jsx("p",{children:"Freedom Loader is built as an independent project. Find out why it started, what it is made with, or take a look at the source code."})]}),r.jsxs(Ce,{to:"/about",className:"home-button home-button-secondary",children:["More about Freedom Loader ",r.jsx("i",{className:"fas fa-arrow-right","aria-hidden":"true"})]})]})]})]})}function av(){const u=navigator.userAgent;return/Windows/i.test(u)?"windows":/Linux/i.test(u)?"linux":"other"}const lv=[{id:"copr",label:"Fedora — via COPR",tag:"Recommended",tagColor:"#4CAF50",description:"Install via DNF — updates are handled automatically by your package manager.",type:"code",externalUrl:"https://copr.fedorainfracloud.org/coprs/masteracnolo/freedom-loader/",code:"sudo dnf copr enable masteracnolo/freedom-loader && sudo dnf install freedom-loader"},{id:"snap",label:"Snap",tag:"Any distro with snapd",tagColor:"#82BEA0",description:"Install via Snap Store — managed by snapd, updates automatically.",type:"code",code:"sudo snap install freedom-loader",externalUrl:"https://snapcraft.io/freedom-loader",externalLabel:"View on Snap Store"},{id:"rpm",label:"RPM",tag:"Fedora · RHEL · openSUSE",tagColor:"#294172",description:"Standard RPM package for Fedora-based distributions.",type:"download",assetSuffix:".x86_64.rpm",assetPattern:u=>`freedom-loader-${u.replace("v","")}.x86_64.rpm`},{id:"deb",label:"DEB",tag:"Debian · Ubuntu",tagColor:"#A81D33",description:"Standard DEB package for Debian-based distributions.",type:"download",assetSuffix:".deb",assetPattern:u=>`freedom-loader_${u.replace("v","")}_amd64.deb`},{id:"appimage",label:"AppImage",tag:"Universal",tagColor:"#1E88E5",description:"No installation needed. Download, chmod +x, and run.",type:"download",assetSuffix:".AppImage",assetPattern:u=>`Freedom-Loader-${u}.AppImage`}];function nv(){A.useEffect(()=>{document.title="Download - Freedom Loader"},[]);const[u,f]=A.useState(""),[m,c]=A.useState([]),[d,h]=A.useState(!0),[v,E]=A.useState("other"),[S,p]=A.useState("auto");A.useEffect(()=>{const y=av();E(y),p(y==="windows"?"windows":y==="linux"?"linux":"windows")},[]),A.useEffect(()=>{(async()=>{try{const U=await fetch("https://api.github.com/repos/MasterAcnolo/Freedom-Loader/releases/latest");if(!U.ok)throw new Error(`Status: ${U.status}`);const H=await U.json();f(H.tag_name),c(H.assets||[])}catch(U){console.error("Failed to fetch release:",U.message)}finally{h(!1)}})()},[]);function N(y){if(!u)return null;const U=y(u),H=m.find(Y=>Y.name===U);return H?H.browser_download_url:"https://github.com/MasterAcnolo/Freedom-Loader/releases/latest"}return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                .dl-page {
                    color: var(--text-primary);
                    background: var(--bg-primary);
                    padding: 80px 20%;
                    min-height: 80vh;
                }
                .dl-page .container {
                    max-width: 860px;
                    margin: 0 auto;
                }
                .dl-page h2 {
                    font-size: 2.5rem;
                    margin-bottom: 8px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }
                .dl-detected {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin-bottom: 40px;
                }
                .dl-detected strong {
                    color: var(--accent-primary);
                }

                /* Tabs */
                .dl-tabs {
                    display: flex;
                    gap: 8px;
                    margin-bottom: 40px;
                    border-bottom: 1px solid var(--border-color);
                    padding-bottom: 0;
                }
                .dl-tab {
                    padding: 10px 24px;
                    border: none;
                    background: transparent;
                    color: var(--text-secondary);
                    font-size: 1rem;
                    font-family: "Poppins", sans-serif;
                    cursor: pointer;
                    border-bottom: 2px solid transparent;
                    margin-bottom: -1px;
                    transition: all 0.15s ease;
                }
                .dl-tab.active {
                    color: var(--accent-primary);
                    border-bottom-color: var(--accent-primary);
                    font-weight: 600;
                }
                .dl-tab:hover:not(.active) {
                    color: var(--text-primary);
                }

                /* Windows block */
                .dl-block {
                    margin-bottom: 50px;
                    padding-bottom: 40px;
                    border-bottom: 1px solid var(--border-color);
                }
                .dl-block:last-child { border-bottom: none; }
                .dl-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 10px;
                }
                .dl-header h3 {
                    font-size: 1.8rem;
                    margin: 0;
                    color: var(--text-primary);
                    font-family: "Poppins", sans-serif;
                }
                .dl-block p {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--text-secondary);
                    margin: 0;
                }
                .dl-version {
                    color: var(--text-primary);
                    font-weight: bold;
                }
                .dl-loading {
                    color: var(--text-secondary);
                    font-style: italic;
                }

                /* Buttons */
                .btn {
                    padding: 10px 25px;
                    border-radius: 15px;
                    font-weight: bold;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    text-align: center;
                    border: none;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 1rem;
                    white-space: nowrap;
                }
                .btn:disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }
                .btn.primary { background-color: var(--accent-primary); color: white; }
                .btn.primary:hover:not(:disabled) { background-color: var(--accent-hover); transform: scale(1.03); }
                .btn.secondary { border: 2px solid var(--accent-primary); color: var(--text-primary); background-color: transparent; }
                .btn.secondary:hover:not(:disabled) { background-color: var(--card-bg); color: var(--accent-hover); border-color: var(--accent-hover); transform: scale(1.03); }

                /* Linux options */
                .linux-options {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                .linux-option {
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 20px 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 20px;
                    transition: border-color 0.15s;
                }
                .linux-option:hover { border-color: var(--accent-primary); }
                .linux-option-left { flex: 1; min-width: 0; }
                .linux-option-title {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 6px;
                }
                .linux-option-title h4 {
                    font-size: 1.2rem;
                    margin: 0;
                    color: var(--text-primary);
                    font-family: "Poppins", sans-serif;
                }
                .linux-tag {
                    font-size: 0.72rem;
                    font-weight: 700;
                    padding: 3px 8px;
                    border-radius: 20px;
                    color: white;
                    letter-spacing: 0.03em;
                    white-space: nowrap;
                }
                .linux-option p {
                    font-size: 0.92rem;
                    color: var(--text-secondary);
                    margin: 0 0 12px 0;
                    line-height: 1.5;
                }
                .linux-code {
                    background: var(--card-bg, #1a1a2e);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    padding: 12px 16px;
                    font-family: "Courier New", monospace;
                    font-size: 0.88rem;
                    color: var(--text-primary);
                    overflow-x: auto;
                }
                .linux-option-right {
                    display: flex;
                    align-items: center;
                    flex-shrink: 0;
                    margin-top: 4px;
                }
                .linux-option-right .btn {
                    min-width: 130px;
                    font-size: 0.9rem;
                    padding: 9px 18px;
                }

                /* Other links at bottom */
                .dl-secondary-links {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    margin-top: 50px;
                }
                .dl-link-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                }
                .dl-link-row h3 {
                    font-size: 1.4rem;
                    margin: 0 0 4px 0;
                    color: var(--text-primary);
                    font-family: "Poppins", sans-serif;
                }
                .dl-link-row p {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    margin: 0;
                }
                .dl-link-left { flex: 1; }

                /* Responsive */
                @media (max-width: 900px) {
                    .dl-page { padding: 60px 5%; }
                    .dl-page h2 { font-size: 2rem; margin-bottom: 6px; }
                    .dl-header { flex-direction: column; align-items: flex-start; }
                    .linux-option { flex-direction: column; }
                    .linux-option-right { margin-top: 0; }
                    .linux-option-right .btn { width: 100%; }
                    .dl-link-row { flex-direction: column; align-items: flex-start; }
                }
                @media (max-width: 500px) {
                    .dl-tabs { gap: 0; }
                    .dl-tab { padding: 10px 14px; font-size: 0.9rem; }
                }
            `}),r.jsx("main",{children:r.jsx("section",{className:"dl-page",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Download"}),r.jsxs("div",{className:"dl-tabs",children:[r.jsx("button",{className:`dl-tab${S==="windows"?" active":""}`,onClick:()=>p("windows"),children:"Windows"}),r.jsx("button",{className:`dl-tab${S==="linux"?" active":""}`,onClick:()=>p("linux"),children:"Linux"})]}),S==="windows"&&r.jsxs("div",{className:"dl-block",children:[r.jsxs("div",{className:"dl-header",children:[r.jsx("h3",{children:"Windows Installer"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/releases/latest",className:"btn primary",target:"_blank",rel:"noopener noreferrer",children:"Download on GitHub"})]}),r.jsxs("p",{children:["Installer (.exe), latest stable version from the official GitHub Releases page.",r.jsx("br",{}),'If Windows Defender shows a warning, click "More info" > "Run anyway".']})]}),S==="linux"&&r.jsx("div",{className:"linux-options",children:lv.map(y=>r.jsxs("div",{className:"linux-option",children:[r.jsxs("div",{className:"linux-option-left",children:[r.jsxs("div",{className:"linux-option-title",children:[r.jsx("h4",{children:y.label}),r.jsx("span",{className:"linux-tag",style:{backgroundColor:y.tagColor},children:y.tag})]}),r.jsx("p",{children:y.description}),y.type==="code"&&r.jsx("div",{className:"linux-code",children:y.code})]}),r.jsxs("div",{className:"linux-option-right",children:[y.type==="download"&&r.jsx("a",{href:N(y.assetPattern)||"#",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:d?"Loading...":`Download ${y.label}`}),y.type==="external"&&r.jsx("a",{href:y.url,className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:y.btnLabel}),y.type==="code"&&r.jsxs("a",{href:y.externalUrl,className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:["View on ",y.label]})]})]},y.id))}),r.jsxs("div",{className:"dl-secondary-links",children:[r.jsxs("div",{className:"dl-link-row",children:[r.jsxs("div",{className:"dl-link-left",children:[r.jsx("h3",{children:"Latest Changelog"}),r.jsx("p",{children:"Release notes for the latest updates, fixes and new features."})]}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/releases/latest",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"View Changelog"})]}),r.jsxs("div",{className:"dl-link-row",children:[r.jsxs("div",{className:"dl-link-left",children:[r.jsx("h3",{children:"GitHub Repository"}),r.jsx("p",{children:"Source code, experimental builds, issues and contributions."})]}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"Open Repository"})]}),r.jsxs("div",{className:"dl-link-row",children:[r.jsxs("div",{className:"dl-link-left",children:[r.jsx("h3",{children:"Old Releases"}),r.jsx("p",{children:"Browse older versions and archived builds."})]}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/releases",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"View Old Releases"})]})]})]})})})]})}const iv=[{name:"Electron",img:"./assets/languages/electron.png",desc:"Desktop app foundation"},{name:"Node.js",img:"./assets/languages/nodejs.png",desc:"Background services"},{name:"yt-dlp",img:"./assets/languages/ytDlp.png",desc:"Media extraction"},{name:"FFmpeg",img:"./assets/languages/ffmpeg.png",desc:"Media processing"},{name:"JavaScript",img:"./assets/languages/js.png",desc:"Application logic"},{name:"Express",img:"./assets/languages/express.svg",desc:"Internal API",invert:!0}],uv=[{number:"01",title:"Respect the person using it",description:"A downloader should help you get things done — not distract you with ads, upsells, or unnecessary friction."},{number:"02",title:"Keep things transparent",description:"Freedom Loader is open source, so anyone can inspect how it works, suggest improvements, and contribute."},{number:"03",title:"Put you in control",description:"Choose your formats and destination, and keep your media on your own device."}];function ov(){return A.useEffect(()=>{document.title="About — Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                .about-page {
                    --about-accent: var(--accent-primary);
                    color: var(--text-primary);
                    background: var(--bg-primary);
                }

                .about-container {
                    width: min(1080px, calc(100% - 48px));
                    margin: 0 auto;
                }

                .about-hero {
                    padding: clamp(72px, 10vw, 118px) 0 78px;
                    background: var(--bg-primary);
                    text-align: center;
                }

                .about-eyebrow {
                    margin: 0 0 16px;
                    color: var(--about-accent);
                    font-size: 0.98rem;
                    font-weight: 700;
                    letter-spacing: 0;
                }

                .about-hero h1 {
                    max-width: 800px;
                    margin: 0 auto;
                    font-size: clamp(2.8rem, 7vw, 5.4rem);
                    letter-spacing: 0;
                    line-height: 1.12;
                }

                .about-hero h1 span {
                    color: var(--about-accent);
                }

                .about-hero > .about-container > p:last-child {
                    max-width: 650px;
                    margin: 24px auto 0;
                    color: var(--text-secondary);
                    font-size: clamp(1.05rem, 2vw, 1.2rem);
                    line-height: 1.8;
                }

                .about-story {
                    padding: 76px 0 92px;
                    border-top: 1px solid var(--border-color);
                }

                .about-story-grid {
                    display: grid;
                    grid-template-columns: 0.8fr 1.2fr;
                    gap: clamp(36px, 8vw, 100px);
                }

                .about-story h2,
                .about-values h2,
                .about-tech h2,
                .about-support h2 {
                    margin: 0;
                    font-size: clamp(2rem, 4vw, 3.2rem);
                    letter-spacing: 0;
                    line-height: 1.2;
                }

                .about-story-copy p {
                    margin: 0 0 18px;
                    color: var(--text-secondary);
                    line-height: 1.85;
                }

                .about-story-copy p:last-child {
                    margin-bottom: 0;
                }

                .about-inline-link {
                    color: var(--about-accent);
                    font-weight: 600;
                    text-decoration: none;
                }

                .about-inline-link:hover {
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }

                .about-values {
                    padding: 84px 0 96px;
                    border-top: 1px solid var(--border-color);
                    background: var(--bg-secondary);
                }

                .about-section-heading {
                    max-width: 650px;
                    margin-bottom: 40px;
                }

                .about-section-heading .about-eyebrow {
                    margin-bottom: 14px;
                }

                .about-section-heading > p:last-child {
                    margin: 15px 0 0;
                    color: var(--text-secondary);
                    line-height: 1.8;
                }

                .about-value-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 16px;
                }

                .about-value-card {
                    padding: 26px;
                    border: 1px solid var(--border-color);
                    border-radius: 18px;
                    background: var(--card-bg);
                }

                .about-value-number {
                    color: var(--about-accent);
                    font-size: 0.82rem;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                }

                .about-value-card h3 {
                    margin: 28px 0 10px;
                    font-size: 1.12rem;
                }

                .about-value-card p {
                    margin: 0;
                    color: var(--text-secondary);
                    font-size: 0.92rem;
                    line-height: 1.75;
                }

                .about-tech {
                    padding: 84px 0 96px;
                    border-top: 1px solid var(--border-color);
                }

                .about-tech-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 12px;
                }

                .about-tech-card {
                    display: flex;
                    min-height: 88px;
                    align-items: center;
                    gap: 16px;
                    padding: 16px 18px;
                    border: 1px solid var(--border-color);
                    border-radius: 15px;
                    background: var(--card-bg);
                }

                .about-tech-card img {
                    width: 42px;
                    height: 42px;
                    flex: 0 0 42px;
                    object-fit: contain;
                }

                .about-tech-card img.invert-dark {
                    filter: invert(1);
                }

                :root.light-theme .about-tech-card img.invert-dark {
                    filter: none;
                }

                .about-tech-card strong,
                .about-tech-card span {
                    display: block;
                }

                .about-tech-card strong {
                    font-size: 0.95rem;
                }

                .about-tech-card span {
                    margin-top: 4px;
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                }

                .about-support {
                    padding: 76px 0;
                    border-top: 1px solid var(--border-color);
                    background: var(--bg-secondary);
                }

                .about-support-inner {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) auto;
                    align-items: center;
                    gap: 40px;
                    padding: clamp(28px, 5vw, 52px);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    background: var(--bg-primary);
                    box-shadow: var(--shadow);
                }

                .about-support-copy {
                    max-width: 650px;
                }

                .about-support-copy .about-eyebrow {
                    margin-bottom: 12px;
                }

                .about-support h2 {
                    font-size: clamp(2rem, 3.8vw, 2.8rem);
                }

                .about-support-copy > p:last-child {
                    margin: 12px 0 0;
                    color: var(--text-secondary);
                    line-height: 1.75;
                }

                .about-support-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    flex-shrink: 0;
                }

                .about-button {
                    display: inline-flex;
                    min-height: 48px;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;
                    padding: 0 20px;
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.92rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
                }

                .about-button:hover {
                    transform: translateY(-2px);
                    border-color: var(--about-accent);
                }

                .about-button.primary {
                    border-color: var(--about-accent);
                    background: var(--about-accent);
                    color: #fff;
                }

                .about-button.primary:hover {
                    border-color: var(--accent-hover);
                    background: var(--accent-hover);
                }

                @media (max-width: 760px) {
                    .about-story-grid {
                        grid-template-columns: 1fr;
                        gap: 28px;
                    }

                    .about-value-grid,
                    .about-tech-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .about-support-inner {
                        align-items: flex-start;
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .about-support-actions {
                        width: 100%;
                        flex-direction: row;
                    }
                }

                @media (max-width: 520px) {
                    .about-container {
                        width: min(100% - 32px, 480px);
                    }

                    .about-hero {
                        padding: 64px 0;
                    }

                    .about-story,
                    .about-values,
                    .about-tech,
                    .about-support {
                        padding: 62px 0;
                    }

                    .about-value-grid,
                    .about-tech-grid {
                        grid-template-columns: 1fr;
                    }

                    .about-support-actions {
                        width: 100%;
                        flex-direction: column;
                    }

                    .about-button {
                        width: 100%;
                    }
                }
            `}),r.jsxs("main",{className:"about-page",children:[r.jsx("section",{className:"about-hero",children:r.jsxs("div",{className:"about-container",children:[r.jsx("p",{className:"about-eyebrow",children:"The project behind the app"}),r.jsxs("h1",{children:["Freedom should be part of ",r.jsx("span",{children:"the experience."})]}),r.jsx("p",{children:"Freedom Loader is a free, open-source desktop app that makes downloading online video and audio straightforward, while keeping privacy and user choice at its core."})]})}),r.jsx("section",{className:"about-story",children:r.jsxs("div",{className:"about-container about-story-grid",children:[r.jsxs("div",{children:[r.jsx("p",{className:"about-eyebrow",children:"A small idea, built with purpose"}),r.jsx("h2",{children:"Why Freedom Loader exists"})]}),r.jsxs("div",{className:"about-story-copy",children:[r.jsx("p",{children:"Freedom Loader started with a simple frustration: many downloaders felt cluttered, restrictive, or difficult to trust. I wanted something that felt clear and useful — a tool that helps you get the job done without getting between you and your media."}),r.jsxs("p",{children:["The project has grown over time, but the idea remains the same: keep it approachable, keep it transparent, and give people more control over how they use their devices. Read the ",r.jsx("a",{className:"about-inline-link",href:"https://masteracnolo.github.io/Blog/pourquoi-freedom-loader/",target:"_blank",rel:"noopener noreferrer",children:"full story"}),"."]})]})]})}),r.jsx("section",{className:"about-values",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"about-section-heading",children:[r.jsx("p",{className:"about-eyebrow",children:"What guides the project"}),r.jsx("h2",{children:"Built around your choices."}),r.jsx("p",{children:"These principles shape the product, from the interface to the way the project is shared."})]}),r.jsx("div",{className:"about-value-grid",children:uv.map(u=>r.jsxs("article",{className:"about-value-card",children:[r.jsx("span",{className:"about-value-number",children:u.number}),r.jsx("h3",{children:u.title}),r.jsx("p",{children:u.description})]},u.number))})]})}),r.jsx("section",{className:"about-tech",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"about-section-heading",children:[r.jsx("p",{className:"about-eyebrow",children:"The tools behind it"}),r.jsx("h2",{children:"Made with proven technology."}),r.jsx("p",{children:"Freedom Loader brings together a focused set of open-source tools for its desktop app and media workflow."})]}),r.jsx("div",{className:"about-tech-grid",children:iv.map(u=>r.jsxs("div",{className:"about-tech-card",children:[r.jsx("img",{src:u.img,alt:"","aria-hidden":"true",className:u.invert?"invert-dark":""}),r.jsxs("div",{children:[r.jsx("strong",{children:u.name}),r.jsx("span",{children:u.desc})]})]},u.name))})]})}),r.jsx("section",{className:"about-support",children:r.jsxs("div",{className:"about-container about-support-inner",children:[r.jsxs("div",{className:"about-support-copy",children:[r.jsx("p",{className:"about-eyebrow",children:"Your feedback matters"}),r.jsx("h2",{children:"Found a bug or have an idea?"}),r.jsx("p",{children:"Open an issue or join the discussion on GitHub. Pull requests are welcome too."})]}),r.jsxs("div",{className:"about-support-actions",children:[r.jsxs("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/issues/new/choose",className:"about-button primary",target:"_blank",rel:"noopener noreferrer",children:["Open an issue ",r.jsx("i",{className:"fas fa-arrow-up-right-from-square","aria-hidden":"true"})]}),r.jsxs("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",className:"about-button",target:"_blank",rel:"noopener noreferrer",children:["Join the discussion ",r.jsx("i",{className:"fab fa-github","aria-hidden":"true"})]})]})]})})]})]})}const rv={"Installation & updates":[{q:"How do I install Freedom Loader?",a:"Download the Windows installer or choose a Linux package from the Download page. Installation notes and troubleshooting are available in the online documentation."},{q:"Which operating systems are supported?",a:"Freedom Loader currently provides builds for Windows 10/11 and Linux. Linux downloads include AppImage, DEB, RPM, Snap, and Fedora COPR options. There is no official macOS build at this time."},{q:"How do I update the application?",a:"Windows and AppImage builds can update through the app. Snap and Fedora COPR installations are updated by their package managers. For other Linux packages, check the Download page for the latest release."}],"Downloads & settings":[{q:"Where are my downloaded files saved?",a:"Downloads are saved to the location selected in the app. You can change the output folder in the app settings."},{q:"What can I download with Freedom Loader?",a:"Freedom Loader uses yt-dlp to retrieve online video and audio. Supported sites and available formats depend on yt-dlp and the source website, and can change over time."},{q:"Do I need Firefox to use the app?",a:"No. Firefox is only used for the optional local-cookie feature, which can help access content that requires an existing browser session. You can use the app without Firefox."},{q:"Can I customize downloads and the app?",a:"Yes. Options include output location, playlist handling, media format and codec choices, metadata, and custom themes. Some options depend on the source media."}],"Privacy & security":[{q:"Does Freedom Loader collect my personal data?",a:"The app does not include ads, analytics, or tracking. Download history, logs, settings, and media are stored locally. Network requests are still needed to retrieve media and check for releases; optional features such as Discord Rich Presence may share information when enabled."},{q:"Is Freedom Loader safe to use?",a:"Freedom Loader is open source and designed to process downloads on your device. As with any software, download it from the official site or GitHub releases, and only download media you have the right to access."},{q:"How do I report a security issue?",a:"Please follow the private reporting instructions in the Security policy on the Freedom Loader GitHub repository."}],"Help & community":[{q:"How do I report a bug or suggest an improvement?",a:"Report bugs through GitHub Issues, or share ideas and questions in GitHub Discussions."},{q:"Can I contribute to Freedom Loader?",a:"Yes. You can contribute code, documentation, bug reports, or ideas through the project repository on GitHub."},{q:"Where can I find more help?",a:"Visit the online documentation for setup and usage information, or use the Contact page to get in touch."}]};function cv(){const[u,f]=A.useState(null);A.useEffect(()=>{document.title="FAQ - Freedom Loader"},[]);const m=(c,d)=>{const h=`${c}-${d}`;f(v=>v===h?null:h)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                .faq-page {
                    min-height: 70vh;
                    padding: clamp(56px, 8vw, 88px) 24px;
                    color: var(--text-primary);
                    background: var(--bg-primary);
                }

                .faq-header {
                    max-width: 760px;
                    margin: 0 auto 52px;
                    text-align: center;
                }

                .faq-header h1 {
                    margin: 0;
                    font-size: clamp(2.2rem, 5vw, 3.5rem);
                    font-weight: 700;
                    letter-spacing: 0;
                    line-height: 1.15;
                }

                .faq-header p {
                    max-width: 600px;
                    margin: 16px auto 0;
                    color: var(--text-secondary);
                    font-size: 1.05rem;
                    line-height: 1.7;
                }

                .faq-container {
                    max-width: 860px;
                    margin: 0 auto;
                }

                .faq-category {
                    margin-bottom: 38px;
                }

                .faq-category:last-child {
                    margin-bottom: 0;
                }

                .faq-category-title {
                    margin: 0 0 14px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid var(--border-color);
                    font-size: 1.35rem;
                    font-weight: 600;
                }

                .faq-item {
                    margin-bottom: 10px;
                    overflow: hidden;
                    border: 1px solid var(--border-color);
                    border-radius: 9px;
                    background: var(--card-bg);
                    transition: border-color 0.2s ease, background-color 0.2s ease;
                }

                .faq-item:hover,
                .faq-item.expanded {
                    border-color: var(--accent-primary);
                    background: var(--card-hover-bg);
                }

                .faq-question-btn {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: space-between;
                    gap: 18px;
                    padding: 18px 20px;
                    border: 0;
                    background: transparent;
                    color: var(--text-primary);
                    font: inherit;
                    font-size: 1rem;
                    font-weight: 600;
                    text-align: left;
                    cursor: pointer;
                }

                .faq-question-btn:hover,
                .faq-item.expanded .faq-question-btn {
                    color: var(--accent-primary);
                }

                .faq-question-btn:focus-visible {
                    outline: 2px solid var(--accent-primary);
                    outline-offset: -3px;
                }

                .faq-icon {
                    flex: 0 0 auto;
                    color: var(--text-tertiary);
                    font-size: 0.9rem;
                    transition: transform 0.2s ease, color 0.2s ease;
                }

                .faq-item.expanded .faq-icon {
                    transform: rotate(180deg);
                    color: var(--accent-primary);
                }

                .faq-answer {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.25s ease;
                }

                .faq-item.expanded .faq-answer {
                    grid-template-rows: 1fr;
                }

                .faq-answer-inner {
                    overflow: hidden;
                }

                .faq-answer-content {
                    margin: 0;
                    padding: 0 20px 20px;
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    line-height: 1.75;
                }

                @media (max-width: 600px) {
                    .faq-page {
                        padding: 48px 16px;
                    }

                    .faq-header {
                        margin-bottom: 40px;
                    }

                    .faq-category-title {
                        font-size: 1.2rem;
                    }

                    .faq-question-btn {
                        padding: 16px;
                        font-size: 0.95rem;
                    }

                    .faq-answer-content {
                        padding: 0 16px 16px;
                        font-size: 0.9rem;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .faq-page *,
                    .faq-page *::before,
                    .faq-page *::after {
                        transition-duration: 0.01ms !important;
                    }
                }
            `}),r.jsx("main",{children:r.jsxs("section",{className:"faq-page",children:[r.jsxs("header",{className:"faq-header",children:[r.jsx("h1",{children:"Frequently asked questions"}),r.jsx("p",{children:"Answers about installing, using, and getting help with Freedom Loader."})]}),r.jsx("div",{className:"faq-container",children:Object.entries(rv).map(([c,d],h)=>r.jsxs("section",{className:"faq-category","aria-labelledby":`faq-category-${h}`,children:[r.jsx("h2",{id:`faq-category-${h}`,className:"faq-category-title",children:c}),d.map((v,E)=>{const S=`${c}-${E}`,p=u===S,N=`faq-answer-${h}-${E}`;return r.jsxs("div",{className:`faq-item ${p?"expanded":""}`,children:[r.jsxs("button",{className:"faq-question-btn",id:`${N}-question`,type:"button","aria-expanded":p,"aria-controls":N,onClick:()=>m(c,E),children:[r.jsx("span",{children:v.q}),r.jsx("i",{className:"fas fa-chevron-down faq-icon","aria-hidden":"true"})]}),r.jsx("div",{className:"faq-answer",id:N,role:"region","aria-labelledby":`${N}-question`,"aria-hidden":!p,children:r.jsx("div",{className:"faq-answer-inner",children:r.jsx("p",{className:"faq-answer-content",children:v.a})})})]},v.q)})]},c))})]})})]})}function sv(){return A.useEffect(()=>{document.title="Terms - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                .terms {
                    color: var(--text-primary);
                    padding: 80px 20%;
                    margin-top: 30px;
                    background: var(--bg-primary);
                }

                .terms .container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .terms h1 {
                    font-size: 2.5rem;
                    margin-bottom: 40px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .terms h2 {
                    font-size: 1.5rem;
                    margin-top: 40px;
                    margin-bottom: 15px;
                    font-weight: 600;
                    color: var(--text-primary);
                }

                .terms p {
                    font-size: 1rem;
                    line-height: 1.8;
                    opacity: 0.85;
                    margin-bottom: 15px;
                    color: var(--text-secondary);
                }

                .terms ul {
                    margin-left: 20px;
                    margin-bottom: 15px;
                }

                .terms li {
                    font-size: 1rem;
                    line-height: 1.8;
                    opacity: 0.85;
                    margin-bottom: 10px;
                    color: var(--text-secondary);
                }

                .terms strong {
                    color: var(--text-primary);
                }

                .last-updated {
                    font-size: 0.9rem;
                    opacity: 0.6;
                    margin-bottom: 30px;
                    font-style: italic;
                    color: var(--text-secondary);
                }

                @media (max-width: 900px) {
                    .terms {
                        padding: 60px 5%;
                    }

                    .terms h1 {
                        font-size: 2.2rem;
                    }

                    .terms h2 {
                        font-size: 1.3rem;
                    }
                }

                @media (max-width: 500px) {
                    .terms h1 {
                        font-size: 2rem;
                    }

                    .terms h2 {
                        font-size: 1.2rem;
                    }

                    .terms p,
                    .terms li {
                        font-size: 0.95rem;
                    }
                }

                .terms a {
                    color: var(--accent-primary);
                    text-decoration: none;
                    border-bottom: 2px solid transparent;
                    transition: all 0.2s ease;
                }

                .terms a:hover {
                    border-bottom: 2px solid var(--accent-primary);
                    color: var(--accent-secondary);
                }
            `}),r.jsx("main",{children:r.jsx("section",{className:"terms",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Terms of Use"}),r.jsx("p",{className:"last-updated",children:"Last updated: May 1, 2026"}),r.jsx("p",{children:"These terms govern your use of the Freedom Loader desktop application. By installing or using the app, you agree to these terms."}),r.jsx("h2",{children:"1. Purpose of the Application"}),r.jsxs("p",{children:["Freedom Loader is a ",r.jsx("strong",{children:"personal, offline media management tool"}),". It provides a graphical interface around"," ",r.jsx("a",{href:"https://github.com/yt-dlp/yt-dlp",target:"_blank",children:"yt-dlp"}),", allowing users to download publicly accessible media for",r.jsx("strong",{children:" strictly personal and offline use"}),"."]}),r.jsx("p",{children:"It is not a streaming platform, not a distribution service, and generates no revenue."}),r.jsx("h2",{children:"2. License & Open Source"}),r.jsxs("p",{children:["Freedom Loader is licensed under the"," ",r.jsx("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html",target:"_blank",children:"GNU GPL v3"}),"."]}),r.jsx("p",{children:"You are allowed to:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Use the application for any purpose"}),r.jsx("li",{children:"Study and modify the code"}),r.jsx("li",{children:"Redistribute original or modified versions"})]}),r.jsx("p",{children:"Under these conditions:"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("strong",{children:"Credit the original author (MasterAcnolo / Axel NICOLAS)"})}),r.jsx("li",{children:"Keep the GPLv3 license"}),r.jsx("li",{children:"Provide source code for modifications"})]}),r.jsx("h2",{children:"3. Acceptable Use"}),r.jsxs("p",{children:["Freedom Loader is intended for ",r.jsx("strong",{children:"personal, non-commercial use"}),"."]}),r.jsx("p",{children:"Allowed:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Downloading publicly accessible content for personal use"}),r.jsx("li",{children:"Archiving content you legitimately access"})]}),r.jsx("p",{children:"Forbidden:"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("strong",{children:"Redistributing downloaded content"})}),r.jsx("li",{children:r.jsx("strong",{children:"Commercial use without rights"})}),r.jsx("li",{children:r.jsx("strong",{children:"Bypassing DRM or paywalls"})}),r.jsx("li",{children:r.jsx("strong",{children:"Downloading pirated content"})})]}),r.jsx("p",{children:"You are solely responsible for how you use the application."}),r.jsx("h2",{children:"4. Legal Framework"}),r.jsx("p",{children:"Freedom Loader does not grant rights over content. Downloaded media remains subject to copyright laws."}),r.jsx("p",{children:"Under French law (Article L122-5), private copies from a lawful source for personal use are permitted."}),r.jsx("p",{children:"Some platforms may forbid downloading in their Terms of Service. This is contractual (account risk), not criminal — but it's on you."}),r.jsx("h2",{children:"5. Privacy"}),r.jsx("p",{children:r.jsx("strong",{children:"No personal data is collected."})}),r.jsxs("ul",{children:[r.jsx("li",{children:"No tracking, no analytics"}),r.jsx("li",{children:"No account required"}),r.jsx("li",{children:"All data stays local"})]}),r.jsx("p",{children:"Network requests are only made to fetch media via yt-dlp."}),r.jsx("h2",{children:"6. Disclaimer"}),r.jsxs("p",{children:["Freedom Loader is provided ",r.jsx("strong",{children:"as-is"}),", without warranty."]}),r.jsxs("ul",{children:[r.jsx("li",{children:"No liability for data loss or system damage"}),r.jsx("li",{children:"No liability for legal misuse"}),r.jsx("li",{children:"No guarantee of functionality"})]}),r.jsx("h2",{children:"7. Third-Party Tools"}),r.jsx("p",{children:"Freedom Loader depends on:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"yt-dlp"})," (media extraction)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"FFmpeg"})," (processing)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Electron"})," (runtime)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Deno"})," (scripting)"]})]}),r.jsx("p",{children:"Not affiliated with YouTube, Google, Twitch, or others."}),r.jsx("h2",{children:"8. Updates"}),r.jsx("p",{children:"The app may change at any time. Features can break depending on external platforms."}),r.jsx("p",{children:"Continued use means you accept updated terms."}),r.jsx("h2",{children:"9. Contact"}),r.jsx("p",{children:"Questions or legal concerns:"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",children:"GitHub Discussions"})}),r.jsx("li",{children:r.jsx("a",{href:"https://www.linkedin.com/in/axelnicolas25",target:"_blank",children:"LinkedIn"})})]})]})})})]})}function fv(){return A.useEffect(()=>{document.title="Privacy - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                .privacy {
                    color: var(--text-primary);
                    padding: 80px 20%;
                    margin-top: 30px;
                    background: var(--bg-primary);
                }

                .privacy .container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .privacy h1 {
                    font-size: 2.5rem;
                    margin-bottom: 40px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .privacy h2 {
                    font-size: 1.5rem;
                    margin-top: 40px;
                    margin-bottom: 15px;
                    font-weight: 600;
                    color: var(--text-primary);
                }

                .privacy p {
                    font-size: 1rem;
                    line-height: 1.8;
                    opacity: 0.85;
                    margin-bottom: 15px;
                    color: var(--text-secondary);
                }

                .privacy ul {
                    margin-left: 20px;
                    margin-bottom: 15px;
                }

                .privacy li {
                    font-size: 1rem;
                    line-height: 1.8;
                    opacity: 0.85;
                    margin-bottom: 10px;
                    color: var(--text-secondary);
                }

                .privacy strong {
                    color: var(--text-primary);
                }

                .last-updated {
                    font-size: 0.9rem;
                    opacity: 0.6;
                    margin-bottom: 30px;
                    font-style: italic;
                    color: var(--text-secondary);
                }

                @media (max-width: 900px) {
                    .privacy {
                        padding: 60px 5%;
                    }

                    .privacy h1 {
                        font-size: 2.2rem;
                    }

                    .privacy h2 {
                        font-size: 1.3rem;
                    }
                }

                @media (max-width: 500px) {
                    .privacy h1 {
                        font-size: 2rem;
                    }

                    .privacy h2 {
                        font-size: 1.2rem;
                    }

                    .privacy p,
                    .privacy li {
                        font-size: 0.95rem;
                    }
                }

                .privacy a {
                    color: var(--accent-primary);
                    text-decoration: none;
                    border-bottom: 2px solid transparent;
                    transition: all 0.2s ease;
                }

                .privacy a:hover {
                    border-bottom: 2px solid var(--accent-primary);
                    color: var(--accent-secondary);
                }
            `}),r.jsx("main",{children:r.jsx("section",{className:"privacy",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Privacy Policy"}),r.jsxs("p",{className:"last-updated",children:[r.jsx("strong",{children:"Last updated:"})," November 13, 2025"]}),r.jsx("p",{children:"Freedom Loader respects your privacy. This Privacy Policy explains how we handle any data you might use with the app and how we protect your privacy."}),r.jsx("h2",{children:"1. Information We Collect"}),r.jsxs("p",{children:["Freedom Loader is a desktop application. We do ",r.jsx("strong",{children:"not"})," collect personal information such as names, emails, or browsing history. The only data handled by the app is:"]}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Usage Data:"})," Logs or error reports generated locally on your machine to help the app function correctly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Optional metadata:"})," Information from downloaded media (titles, authors, duration) stored locally."]})]}),r.jsx("p",{children:"No data is sent to any server unless you explicitly choose to share it (for example, using Discord Rich Presence)."}),r.jsx("h2",{children:"2. Cookies & Tracking"}),r.jsx("p",{children:"Freedom Loader is a desktop app and does not use cookies or any web tracking technologies."}),r.jsx("h2",{children:"3. Use of Your Data"}),r.jsx("p",{children:"Any data processed by the app is used solely to ensure proper functionality, improve performance, and provide features like download logging and Rich Presence. No personal data is shared with third parties."}),r.jsx("h2",{children:"4. Retention"}),r.jsx("p",{children:"All usage data and metadata are stored locally on your device and remain there until you delete them. Freedom Loader does not store data remotely."}),r.jsx("h2",{children:"5. Security"}),r.jsx("p",{children:"We take reasonable measures to protect your data on your device, but no system is 100% secure. Please use your own discretion when handling downloaded media."}),r.jsx("h2",{children:"6. Children's Privacy"}),r.jsx("p",{children:"Freedom Loader is not intended for children under 13, and we do not knowingly collect any personal information from children."}),r.jsx("h2",{children:"7. Links to Other Websites"}),r.jsx("p",{children:"Any links to external websites in the app are for convenience. We are not responsible for the privacy practices of other sites."}),r.jsx("h2",{children:"8. Changes to This Privacy Policy"}),r.jsx("p",{children:'We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated "Last updated" date.'}),r.jsx("h2",{children:"Contact"}),r.jsxs("p",{children:["For questions regarding this Privacy Policy, visit our ",r.jsx(Ce,{to:"/contact",children:"contact page "}),"."]})]})})})]})}function dv(){return A.useEffect(()=>{document.title="Contact - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                .contact {
                    color: var(--text-primary);
                    padding: 50px 20px;
                    margin-top: 30px;
                    display: flex;
                    flex-direction: column;
                    background: var(--bg-primary);
                }

                .contact .container {
                    max-width: 900px;
                    margin: 0 auto;
                    width: 100%;
                }

                .contact h1 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                    text-align: center;
                    font-weight: 700;
                    color: var(--text-primary);
                }

                .contact > p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    opacity: 0.8;
                    margin-bottom: 40px;
                    text-align: center;
                    color: var(--text-secondary);
                }

                .contact-methods {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                    margin-bottom: 50px;
                }

                .contact-card {
                    background-color: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 25px 20px;
                    width: 250px;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .contact-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px var(--shadow-hover);
                    background: var(--card-hover-bg);
                }

                .contact-card i {
                    font-size: 40px;
                    color: var(--accent-primary);
                    margin-bottom: 15px;
                }

                .contact-card h3 {
                    font-size: 1.2rem;
                    margin-bottom: 10px;
                    color: var(--text-primary);
                }

                .contact-card p {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    margin-bottom: 15px;
                }

                .contact-card a {
                    color: var(--accent-primary);
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }

                .contact-card a:hover {
                    text-decoration: underline;
                    color: var(--accent-secondary);
                }

                .contact-form {
                    background-color: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 30px 25px;
                    max-width: 600px;
                    margin: 0 auto 50px auto;
                    display: flex;
                    flex-direction: column;
                }

                .contact-form label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 500;
                    color: var(--text-primary);
                }

                .contact-form input,
                .contact-form textarea {
                    width: 100%;
                    padding: 12px 15px;
                    margin-bottom: 20px;
                    border-radius: 8px;
                    border: 1px solid var(--border-light);
                    background-color: var(--card-bg);
                    color: var(--text-primary);
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.3s ease;
                    font-family: inherit;
                    box-sizing: border-box;
                }

                .contact-form input:focus,
                .contact-form textarea:focus {
                    border-color: var(--accent-primary);
                    box-shadow: 0 0 8px var(--accent-primary);
                    background-color: var(--card-hover-bg);
                }

                .contact-form textarea {
                    min-height: 120px;
                    resize: vertical;
                }

                .contact-form button {
                    display: inline-block;
                    padding: 12px 25px;
                    background-color: var(--accent-primary);
                    color: white;
                    font-weight: 600;
                    font-size: 1rem;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    align-self: center;
                    min-width: 150px;
                }

                .contact-form button:hover {
                    background-color: var(--accent-hover);
                    box-shadow: 0 5px 15px var(--shadow-hover);
                }

                @media (max-width: 768px) {
                    .contact-methods {
                        flex-direction: column;
                        align-items: center;
                    }

                    .contact-card {
                        width: 80%;
                    }

                    .contact-form {
                        width: 90%;
                        padding: 25px 15px;
                    }
                }

                @media (max-width: 500px) {
                    .contact h1 {
                        font-size: 2rem;
                    }

                    .contact > p {
                        font-size: 1rem;
                    }

                    .contact-card {
                        width: 100%;
                    }
                }

                .contact a:not(.contact-card a) {
                    color: var(--accent-primary);
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .contact a:not(.contact-card a):hover {
                    text-decoration: underline;
                    color: var(--accent-secondary);
                }
            `}),r.jsx("main",{children:r.jsx("section",{className:"contact",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Contact Me"}),r.jsx("p",{children:"If you have any questions, suggestions, or need support, reach out using the methods below or fill out the form."}),r.jsxs("div",{className:"contact-methods",children:[r.jsxs("div",{className:"contact-card",children:[r.jsx("i",{className:"fab fa-github"}),r.jsx("h3",{children:"GitHub"}),r.jsx("p",{children:"Join the discussions, report bugs, and contribute to the project:"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",rel:"noopener noreferrer",children:"GitHub Discussions"})]}),r.jsxs("div",{className:"contact-card",children:[r.jsx("i",{className:"fab fa-linkedin-in"}),r.jsx("h3",{children:"LinkedIn"}),r.jsx("p",{children:"Connect for updates, networking, and professional inquiries:"}),r.jsx("a",{href:"https://www.linkedin.com/in/axelnicolas25",target:"_blank",rel:"noopener noreferrer",children:"@axelnicolas25"})]})]}),r.jsxs("form",{className:"contact-form",action:"https://api.web3forms.com/submit",method:"POST",children:[r.jsx("input",{type:"hidden",name:"apikey",value:"cd8edfb2-7b53-4db9-a545-8a055f04612c"}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"name",children:"Name"}),r.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your name",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",children:"Email"}),r.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Your email",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"message",children:"Message"}),r.jsx("textarea",{id:"message",name:"message",placeholder:"Your message...",required:!0})]}),r.jsx("button",{type:"submit",children:"Send Message"})]})]})})})]})}function mv(){return A.useEffect(()=>{window.location.replace("https://docs.freedomloader.acnolo.fr/")},[]),r.jsxs("p",{children:["Documentation moved to ",r.jsx("a",{href:"https://docs.freedomloader.acnolo.fr/",children:"docs.freedomloader.acnolo.fr"}),"."]})}function hv(){A.useEffect(()=>{window.location.replace("https://docs.freedomloader.acnolo.fr/contributing/")},[])}function pv(){return r.jsxs(r.Fragment,{children:[r.jsx(F0,{}),r.jsx(K0,{}),r.jsxs(f0,{children:[r.jsx(Ht,{path:"/",element:r.jsx(tv,{})}),r.jsx(Ht,{path:"/about",element:r.jsx(ov,{})}),r.jsx(Ht,{path:"/faq",element:r.jsx(cv,{})}),r.jsx(Ht,{path:"/features",element:r.jsx(hm,{to:"/about",replace:!0})}),r.jsx(Ht,{path:"/wiki",element:r.jsx(mv,{})}),r.jsx(Ht,{path:"/contributing",element:r.jsx(hv,{})}),r.jsx(Ht,{path:"/roadmap",element:r.jsx(hm,{to:"/about",replace:!0})}),r.jsx(Ht,{path:"/download",element:r.jsx(nv,{})}),r.jsx(Ht,{path:"/terms",element:r.jsx(sv,{})}),r.jsx(Ht,{path:"/privacy",element:r.jsx(fv,{})}),r.jsx(Ht,{path:"/contact",element:r.jsx(dv,{})})]}),r.jsx(J0,{})]})}function gv(){const{pathname:u,hash:f}=window.location;if(f){sessionStorage.removeItem("redirect");return}const m="/",c=sessionStorage.getItem("redirect"),d=c||u.replace(m,"");c&&(sessionStorage.removeItem("redirect"),sessionStorage.removeItem("redirected")),d&&d!=="/"&&window.location.replace(`${m}/#${d}`)}gv();hg.createRoot(document.getElementById("root")).render(r.jsxs(U0,{children:[r.jsx(Z0,{}),r.jsx(pv,{})]}));
