(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function d(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(m){if(m.ep)return;m.ep=!0;const p=d(m);fetch(m.href,p)}})();var Nu={exports:{}},Dn={};var Fd;function tg(){if(Fd)return Dn;Fd=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(c,m,p){var v=null;if(p!==void 0&&(v=""+p),m.key!==void 0&&(v=""+m.key),"key"in m){p={};for(var T in m)T!=="key"&&(p[T]=m[T])}else p=m;return m=p.ref,{$$typeof:u,type:c,key:v,ref:m!==void 0?m:null,props:p}}return Dn.Fragment=f,Dn.jsx=d,Dn.jsxs=d,Dn}var Wd;function ag(){return Wd||(Wd=1,Nu.exports=tg()),Nu.exports}var r=ag(),Au={exports:{}},Mn={},Cu={exports:{}},Ru={};var $d;function lg(){return $d||($d=1,(function(u){function f(R,H){var F=R.length;R.push(H);e:for(;0<F;){var pe=F-1>>>1,Se=R[pe];if(0<m(Se,H))R[pe]=H,R[F]=Se,F=pe;else break e}}function d(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var H=R[0],F=R.pop();if(F!==H){R[0]=F;e:for(var pe=0,Se=R.length,x=Se>>>1;pe<x;){var O=2*(pe+1)-1,q=R[O],k=O+1,I=R[k];if(0>m(q,F))k<Se&&0>m(I,q)?(R[pe]=I,R[k]=F,pe=k):(R[pe]=q,R[O]=F,pe=O);else if(k<Se&&0>m(I,F))R[pe]=I,R[k]=F,pe=k;else break e}}return H}function m(R,H){var F=R.sortIndex-H.sortIndex;return F!==0?F:R.id-H.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;u.unstable_now=function(){return p.now()}}else{var v=Date,T=v.now();u.unstable_now=function(){return v.now()-T}}var S=[],y=[],M=1,N=null,L=3,Z=!1,Q=!1,Y=!1,U=!1,K=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function xe(R){for(var H=d(y);H!==null;){if(H.callback===null)c(y);else if(H.startTime<=R)c(y),H.sortIndex=H.expirationTime,f(S,H);else break;H=d(y)}}function be(R){if(Y=!1,xe(R),!Q)if(d(S)!==null)Q=!0,Te||(Te=!0,Je());else{var H=d(y);H!==null&&Oe(be,H.startTime-R)}}var Te=!1,W=-1,Re=5,Ke=-1;function Mt(){return U?!0:!(u.unstable_now()-Ke<Re)}function pt(){if(U=!1,Te){var R=u.unstable_now();Ke=R;var H=!0;try{e:{Q=!1,Y&&(Y=!1,ee(W),W=-1),Z=!0;var F=L;try{t:{for(xe(R),N=d(S);N!==null&&!(N.expirationTime>R&&Mt());){var pe=N.callback;if(typeof pe=="function"){N.callback=null,L=N.priorityLevel;var Se=pe(N.expirationTime<=R);if(R=u.unstable_now(),typeof Se=="function"){N.callback=Se,xe(R),H=!0;break t}N===d(S)&&c(S),xe(R)}else c(S);N=d(S)}if(N!==null)H=!0;else{var x=d(y);x!==null&&Oe(be,x.startTime-R),H=!1}}break e}finally{N=null,L=F,Z=!1}H=void 0}}finally{H?Je():Te=!1}}}var Je;if(typeof J=="function")Je=function(){J(pt)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,gt=_t.port2;_t.port1.onmessage=pt,Je=function(){gt.postMessage(null)}}else Je=function(){K(pt,0)};function Oe(R,H){W=K(function(){R(u.unstable_now())},H)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(R){R.callback=null},u.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<R?Math.floor(1e3/R):5},u.unstable_getCurrentPriorityLevel=function(){return L},u.unstable_next=function(R){switch(L){case 1:case 2:case 3:var H=3;break;default:H=L}var F=L;L=H;try{return R()}finally{L=F}},u.unstable_requestPaint=function(){U=!0},u.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=L;L=R;try{return H()}finally{L=F}},u.unstable_scheduleCallback=function(R,H,F){var pe=u.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,R){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=F+Se,R={id:M++,callback:H,priorityLevel:R,startTime:F,expirationTime:Se,sortIndex:-1},F>pe?(R.sortIndex=F,f(y,R),d(S)===null&&R===d(y)&&(Y?(ee(W),W=-1):Y=!0,Oe(be,F-pe))):(R.sortIndex=Se,f(S,R),Q||Z||(Q=!0,Te||(Te=!0,Je()))),R},u.unstable_shouldYield=Mt,u.unstable_wrapCallback=function(R){var H=L;return function(){var F=L;L=H;try{return R.apply(this,arguments)}finally{L=F}}}})(Ru)),Ru}var Id;function ng(){return Id||(Id=1,Cu.exports=lg()),Cu.exports}var Du={exports:{}},$={};var Pd;function ig(){if(Pd)return $;Pd=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),v=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),L=Symbol.iterator;function Z(x){return x===null||typeof x!="object"?null:(x=L&&x[L]||x["@@iterator"],typeof x=="function"?x:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,U={};function K(x,O,q){this.props=x,this.context=O,this.refs=U,this.updater=q||Q}K.prototype.isReactComponent={},K.prototype.setState=function(x,O){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,O,"setState")},K.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ee(){}ee.prototype=K.prototype;function J(x,O,q){this.props=x,this.context=O,this.refs=U,this.updater=q||Q}var xe=J.prototype=new ee;xe.constructor=J,Y(xe,K.prototype),xe.isPureReactComponent=!0;var be=Array.isArray;function Te(){}var W={H:null,A:null,T:null,S:null},Re=Object.prototype.hasOwnProperty;function Ke(x,O,q){var k=q.ref;return{$$typeof:u,type:x,key:O,ref:k!==void 0?k:null,props:q}}function Mt(x,O){return Ke(x.type,O,x.props)}function pt(x){return typeof x=="object"&&x!==null&&x.$$typeof===u}function Je(x){var O={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(q){return O[q]})}var _t=/\/+/g;function gt(x,O){return typeof x=="object"&&x!==null&&x.key!=null?Je(""+x.key):O.toString(36)}function Oe(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Te,Te):(x.status="pending",x.then(function(O){x.status==="pending"&&(x.status="fulfilled",x.value=O)},function(O){x.status==="pending"&&(x.status="rejected",x.reason=O)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function R(x,O,q,k,I){var ae=typeof x;(ae==="undefined"||ae==="boolean")&&(x=null);var de=!1;if(x===null)de=!0;else switch(ae){case"bigint":case"string":case"number":de=!0;break;case"object":switch(x.$$typeof){case u:case f:de=!0;break;case M:return de=x._init,R(de(x._payload),O,q,k,I)}}if(de)return I=I(x),de=k===""?"."+gt(x,0):k,be(I)?(q="",de!=null&&(q=de.replace(_t,"$&/")+"/"),R(I,O,q,"",function(Hl){return Hl})):I!=null&&(pt(I)&&(I=Mt(I,q+(I.key==null||x&&x.key===I.key?"":(""+I.key).replace(_t,"$&/")+"/")+de)),O.push(I)),1;de=0;var We=k===""?".":k+":";if(be(x))for(var De=0;De<x.length;De++)k=x[De],ae=We+gt(k,De),de+=R(k,O,q,ae,I);else if(De=Z(x),typeof De=="function")for(x=De.call(x),De=0;!(k=x.next()).done;)k=k.value,ae=We+gt(k,De++),de+=R(k,O,q,ae,I);else if(ae==="object"){if(typeof x.then=="function")return R(Oe(x),O,q,k,I);throw O=String(x),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return de}function H(x,O,q){if(x==null)return x;var k=[],I=0;return R(x,k,"","",function(ae){return O.call(q,ae,I++)}),k}function F(x){if(x._status===-1){var O=x._result;O=O(),O.then(function(q){(x._status===0||x._status===-1)&&(x._status=1,x._result=q)},function(q){(x._status===0||x._status===-1)&&(x._status=2,x._result=q)}),x._status===-1&&(x._status=0,x._result=O)}if(x._status===1)return x._result.default;throw x._result}var pe=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},Se={map:H,forEach:function(x,O,q){H(x,function(){O.apply(this,arguments)},q)},count:function(x){var O=0;return H(x,function(){O++}),O},toArray:function(x){return H(x,function(O){return O})||[]},only:function(x){if(!pt(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return $.Activity=N,$.Children=Se,$.Component=K,$.Fragment=d,$.Profiler=m,$.PureComponent=J,$.StrictMode=c,$.Suspense=S,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,$.__COMPILER_RUNTIME={__proto__:null,c:function(x){return W.H.useMemoCache(x)}},$.cache=function(x){return function(){return x.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(x,O,q){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var k=Y({},x.props),I=x.key;if(O!=null)for(ae in O.key!==void 0&&(I=""+O.key),O)!Re.call(O,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&O.ref===void 0||(k[ae]=O[ae]);var ae=arguments.length-2;if(ae===1)k.children=q;else if(1<ae){for(var de=Array(ae),We=0;We<ae;We++)de[We]=arguments[We+2];k.children=de}return Ke(x.type,I,k)},$.createContext=function(x){return x={$$typeof:v,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:p,_context:x},x},$.createElement=function(x,O,q){var k,I={},ae=null;if(O!=null)for(k in O.key!==void 0&&(ae=""+O.key),O)Re.call(O,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(I[k]=O[k]);var de=arguments.length-2;if(de===1)I.children=q;else if(1<de){for(var We=Array(de),De=0;De<de;De++)We[De]=arguments[De+2];I.children=We}if(x&&x.defaultProps)for(k in de=x.defaultProps,de)I[k]===void 0&&(I[k]=de[k]);return Ke(x,ae,I)},$.createRef=function(){return{current:null}},$.forwardRef=function(x){return{$$typeof:T,render:x}},$.isValidElement=pt,$.lazy=function(x){return{$$typeof:M,_payload:{_status:-1,_result:x},_init:F}},$.memo=function(x,O){return{$$typeof:y,type:x,compare:O===void 0?null:O}},$.startTransition=function(x){var O=W.T,q={};W.T=q;try{var k=x(),I=W.S;I!==null&&I(q,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(Te,pe)}catch(ae){pe(ae)}finally{O!==null&&q.types!==null&&(O.types=q.types),W.T=O}},$.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},$.use=function(x){return W.H.use(x)},$.useActionState=function(x,O,q){return W.H.useActionState(x,O,q)},$.useCallback=function(x,O){return W.H.useCallback(x,O)},$.useContext=function(x){return W.H.useContext(x)},$.useDebugValue=function(){},$.useDeferredValue=function(x,O){return W.H.useDeferredValue(x,O)},$.useEffect=function(x,O){return W.H.useEffect(x,O)},$.useEffectEvent=function(x){return W.H.useEffectEvent(x)},$.useId=function(){return W.H.useId()},$.useImperativeHandle=function(x,O,q){return W.H.useImperativeHandle(x,O,q)},$.useInsertionEffect=function(x,O){return W.H.useInsertionEffect(x,O)},$.useLayoutEffect=function(x,O){return W.H.useLayoutEffect(x,O)},$.useMemo=function(x,O){return W.H.useMemo(x,O)},$.useOptimistic=function(x,O){return W.H.useOptimistic(x,O)},$.useReducer=function(x,O,q){return W.H.useReducer(x,O,q)},$.useRef=function(x){return W.H.useRef(x)},$.useState=function(x){return W.H.useState(x)},$.useSyncExternalStore=function(x,O,q){return W.H.useSyncExternalStore(x,O,q)},$.useTransition=function(){return W.H.useTransition()},$.version="19.2.5",$}var em;function qu(){return em||(em=1,Du.exports=ig()),Du.exports}var Mu={exports:{}},Fe={};var tm;function rg(){if(tm)return Fe;tm=1;var u=qu();function f(S){var y="https://react.dev/errors/"+S;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)y+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+S+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(S,y,M){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:N==null?null:""+N,children:S,containerInfo:y,implementation:M}}var v=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(S,y){if(S==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Fe.createPortal=function(S,y){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(f(299));return p(S,y,null,M)},Fe.flushSync=function(S){var y=v.T,M=c.p;try{if(v.T=null,c.p=2,S)return S()}finally{v.T=y,c.p=M,c.d.f()}},Fe.preconnect=function(S,y){typeof S=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,c.d.C(S,y))},Fe.prefetchDNS=function(S){typeof S=="string"&&c.d.D(S)},Fe.preinit=function(S,y){if(typeof S=="string"&&y&&typeof y.as=="string"){var M=y.as,N=T(M,y.crossOrigin),L=typeof y.integrity=="string"?y.integrity:void 0,Z=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;M==="style"?c.d.S(S,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:N,integrity:L,fetchPriority:Z}):M==="script"&&c.d.X(S,{crossOrigin:N,integrity:L,fetchPriority:Z,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Fe.preinitModule=function(S,y){if(typeof S=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var M=T(y.as,y.crossOrigin);c.d.M(S,{crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&c.d.M(S)},Fe.preload=function(S,y){if(typeof S=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var M=y.as,N=T(M,y.crossOrigin);c.d.L(S,M,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Fe.preloadModule=function(S,y){if(typeof S=="string")if(y){var M=T(y.as,y.crossOrigin);c.d.m(S,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else c.d.m(S)},Fe.requestFormReset=function(S){c.d.r(S)},Fe.unstable_batchedUpdates=function(S,y){return S(y)},Fe.useFormState=function(S,y,M){return v.H.useFormState(S,y,M)},Fe.useFormStatus=function(){return v.H.useHostTransitionStatus()},Fe.version="19.2.5",Fe}var am;function og(){if(am)return Mu.exports;am=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Mu.exports=rg(),Mu.exports}var lm;function ug(){if(lm)return Mn;lm=1;var u=ng(),f=qu(),d=og();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(p(e)!==e)throw Error(c(188))}function y(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return S(n),e;if(i===l)return S(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var o=!1,s=n.child;s;){if(s===a){o=!0,a=n,l=i;break}if(s===l){o=!0,l=n,a=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===a){o=!0,a=i,l=n;break}if(s===l){o=!0,l=i,a=n;break}s=s.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function M(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=M(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,L=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ee=Symbol.for("react.consumer"),J=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Ke=Symbol.for("react.activity"),Mt=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=pt&&e[pt]||e["@@iterator"],typeof e=="function"?e:null)}var _t=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_t?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case K:return"Profiler";case U:return"StrictMode";case be:return"Suspense";case Te:return"SuspenseList";case Ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case J:return e.displayName||"Context";case ee:return(e._context.displayName||"Context")+".Consumer";case xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:gt(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return gt(e(t))}catch{}}return null}var Oe=Array.isArray,R=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],Se=-1;function x(e){return{current:e}}function O(e){0>Se||(e.current=pe[Se],pe[Se]=null,Se--)}function q(e,t){Se++,pe[Se]=e.current,e.current=t}var k=x(null),I=x(null),ae=x(null),de=x(null);function We(e,t){switch(q(ae,t),q(I,e),q(k,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yd(t),e=xd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(k),q(k,e)}function De(){O(k),O(I),O(ae)}function Hl(e){e.memoizedState!==null&&q(de,e);var t=k.current,a=xd(t,e.type);t!==a&&(q(I,e),q(k,a))}function qn(e){I.current===e&&(O(k),O(I)),de.current===e&&(O(de),Nn._currentValue=F)}var ur,Ku;function Ma(e){if(ur===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ur=t&&t[1]||"",Ku=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ur+e+Ku}var cr=!1;function sr(e,t){if(!e||cr)return"";cr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(A){var z=A}Reflect.construct(e,[],_)}else{try{_.call()}catch(A){z=A}e.call(_.prototype)}}else{try{throw Error()}catch(A){z=A}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(A){if(A&&z&&typeof A.stack=="string")return[A.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],s=i[1];if(o&&s){var h=o.split(`
`),w=s.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===w.length)for(l=h.length-1,n=w.length-1;1<=l&&0<=n&&h[l]!==w[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==w[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==w[n]){var C=`
`+h[l].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=l&&0<=n);break}}}finally{cr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ma(a):""}function Mm(e,t){switch(e.tag){case 26:case 27:case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return e.child!==t&&t!==null?Ma("Suspense Fallback"):Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return sr(e.type,!1);case 11:return sr(e.type.render,!1);case 1:return sr(e.type,!0);case 31:return Ma("Activity");default:return""}}function Ju(e){try{var t="",a=null;do t+=Mm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fr=Object.prototype.hasOwnProperty,dr=u.unstable_scheduleCallback,mr=u.unstable_cancelCallback,_m=u.unstable_shouldYield,Om=u.unstable_requestPaint,it=u.unstable_now,Um=u.unstable_getCurrentPriorityLevel,Fu=u.unstable_ImmediatePriority,Wu=u.unstable_UserBlockingPriority,Bn=u.unstable_NormalPriority,Lm=u.unstable_LowPriority,$u=u.unstable_IdlePriority,Hm=u.log,qm=u.unstable_setDisableYieldValue,ql=null,rt=null;function oa(e){if(typeof Hm=="function"&&qm(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(ql,e)}catch{}}var ot=Math.clz32?Math.clz32:km,Bm=Math.log,Ym=Math.LN2;function km(e){return e>>>=0,e===0?32:31-(Bm(e)/Ym|0)|0}var Yn=256,kn=262144,Gn=4194304;function _a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=_a(l):(o&=s,o!==0?n=_a(o):a||(a=s&~e,a!==0&&(n=_a(a))))):(s=l&~i,s!==0?n=_a(s):o!==0?n=_a(o):a||(a=l&~e,a!==0&&(n=_a(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iu(){var e=Gn;return Gn<<=1,(Gn&62914560)===0&&(Gn=4194304),e}function hr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xm(e,t,a,l,n,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,h=e.expirationTimes,w=e.hiddenUpdates;for(a=o&~a;0<a;){var C=31-ot(a),_=1<<C;s[C]=0,h[C]=-1;var z=w[C];if(z!==null)for(w[C]=null,C=0;C<z.length;C++){var A=z[C];A!==null&&(A.lane&=-536870913)}a&=~_}l!==0&&Pu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Pu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ec(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ot(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function tc(e,t){var a=t&-t;return a=(a&42)!==0?1:pr(a),(a&(e.suspendedLanes|t))!==0?0:a}function pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ac(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Gd(e.type))}function lc(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var ua=Math.random().toString(36).slice(2),Ge="__reactFiber$"+ua,Ie="__reactProps$"+ua,$a="__reactContainer$"+ua,vr="__reactEvents$"+ua,Qm="__reactListeners$"+ua,Vm="__reactHandles$"+ua,nc="__reactResources$"+ua,kl="__reactMarker$"+ua;function yr(e){delete e[Ge],delete e[Ie],delete e[vr],delete e[Qm],delete e[Vm]}function Ia(e){var t=e[Ge];if(t)return t;for(var a=e.parentNode;a;){if(t=a[$a]||a[Ge]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Td(e);e!==null;){if(a=e[Ge])return a;e=Td(e)}return t}e=a,a=e.parentNode}return null}function Pa(e){if(e=e[Ge]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Gl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function el(e){var t=e[nc];return t||(t=e[nc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[kl]=!0}var ic=new Set,rc={};function Oa(e,t){tl(e,t),tl(e+"Capture",t)}function tl(e,t){for(rc[e]=t,e=0;e<t.length;e++)ic.add(t[e])}var Zm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oc={},uc={};function Km(e){return fr.call(uc,e)?!0:fr.call(oc,e)?!1:Zm.test(e)?uc[e]=!0:(oc[e]=!0,!1)}function Qn(e,t,a){if(Km(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Vn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function kt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){if(!e._valueTracker){var t=cc(e)?"checked":"value";e._valueTracker=Jm(e,t,""+e[t])}}function sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=cc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fm=/[\n"\\]/g;function yt(e){return e.replace(Fm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function br(e,t,a,l,n,i,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Sr(e,o,vt(t)):a!=null?Sr(e,o,vt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+vt(s):e.removeAttribute("name")}function fc(e,t,a,l,n,i,o,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){xr(e);return}a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),xr(e)}function Sr(e,t,a){t==="number"&&Zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function al(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function dc(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function mc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Oe(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),xr(e)}function ll(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Wm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function pc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&hc(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&hc(e,i,t[i])}function jr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $m=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return Im.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var wr=null;function zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,il=null;function gc(e){var t=Pa(e);if(t&&(e=t.stateNode)){var a=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(br(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ie]||null;if(!n)throw Error(c(90));br(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&sc(l)}break e;case"textarea":dc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&al(e,!!a.multiple,t,!1)}}}var Er=!1;function vc(e,t,a){if(Er)return e(t,a);Er=!0;try{var l=e(t);return l}finally{if(Er=!1,(nl!==null||il!==null)&&(Oi(),nl&&(t=nl,e=il,il=nl=null,gc(t),e)))for(t=0;t<e.length;t++)gc(e[t])}}function Xl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ie]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tr=!1;if(Xt)try{var Ql={};Object.defineProperty(Ql,"passive",{get:function(){Tr=!0}}),window.addEventListener("test",Ql,Ql),window.removeEventListener("test",Ql,Ql)}catch{Tr=!1}var ca=null,Nr=null,Jn=null;function yc(){if(Jn)return Jn;var e,t=Nr,a=t.length,l,n="value"in ca?ca.value:ca.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[i-l];l++);return Jn=n.slice(e,1<l?1-l:void 0)}function Fn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function xc(){return!1}function Pe(e){function t(a,l,n,i,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wn:xc,this.isPropagationStopped=xc,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=Pe(Ua),Vl=N({},Ua,{view:0,detail:0}),Pm=Pe(Vl),Ar,Cr,Zl,In=N({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zl&&(Zl&&e.type==="mousemove"?(Ar=e.screenX-Zl.screenX,Cr=e.screenY-Zl.screenY):Cr=Ar=0,Zl=e),Ar)},movementY:function(e){return"movementY"in e?e.movementY:Cr}}),bc=Pe(In),eh=N({},In,{dataTransfer:0}),th=Pe(eh),ah=N({},Vl,{relatedTarget:0}),Rr=Pe(ah),lh=N({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=Pe(lh),ih=N({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rh=Pe(ih),oh=N({},Ua,{data:0}),Sc=Pe(oh),uh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sh[e])?!!t[e]:!1}function Dr(){return fh}var dh=N({},Vl,{key:function(e){if(e.key){var t=uh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ch[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dr,charCode:function(e){return e.type==="keypress"?Fn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mh=Pe(dh),hh=N({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=Pe(hh),ph=N({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dr}),gh=Pe(ph),vh=N({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),yh=Pe(vh),xh=N({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bh=Pe(xh),Sh=N({},Ua,{newState:0,oldState:0}),jh=Pe(Sh),wh=[9,13,27,32],Mr=Xt&&"CompositionEvent"in window,Kl=null;Xt&&"documentMode"in document&&(Kl=document.documentMode);var zh=Xt&&"TextEvent"in window&&!Kl,wc=Xt&&(!Mr||Kl&&8<Kl&&11>=Kl),zc=" ",Ec=!1;function Tc(e,t){switch(e){case"keyup":return wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rl=!1;function Eh(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Ec=!0,zc);case"textInput":return e=t.data,e===zc&&Ec?null:e;default:return null}}function Th(e,t){if(rl)return e==="compositionend"||!Mr&&Tc(e,t)?(e=yc(),Jn=Nr=ca=null,rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wc&&t.locale!=="ko"?null:t.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nh[e.type]:t==="textarea"}function Cc(e,t,a,l){nl?il?il.push(l):il=[l]:nl=l,t=ki(t,"onChange"),0<t.length&&(a=new $n("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Jl=null,Fl=null;function Ah(e){dd(e,0)}function Pn(e){var t=Gl(e);if(sc(t))return e}function Rc(e,t){if(e==="change")return t}var Dc=!1;if(Xt){var _r;if(Xt){var Or="oninput"in document;if(!Or){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),Or=typeof Mc.oninput=="function"}_r=Or}else _r=!1;Dc=_r&&(!document.documentMode||9<document.documentMode)}function _c(){Jl&&(Jl.detachEvent("onpropertychange",Oc),Fl=Jl=null)}function Oc(e){if(e.propertyName==="value"&&Pn(Fl)){var t=[];Cc(t,Fl,e,zr(e)),vc(Ah,t)}}function Ch(e,t,a){e==="focusin"?(_c(),Jl=t,Fl=a,Jl.attachEvent("onpropertychange",Oc)):e==="focusout"&&_c()}function Rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(Fl)}function Dh(e,t){if(e==="click")return Pn(t)}function Mh(e,t){if(e==="input"||e==="change")return Pn(t)}function _h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:_h;function Wl(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!fr.call(t,n)||!ut(e[n],t[n]))return!1}return!0}function Uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lc(e,t){var a=Uc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Uc(a)}}function Hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zn(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Oh=Xt&&"documentMode"in document&&11>=document.documentMode,ol=null,Lr=null,$l=null,Hr=!1;function Bc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hr||ol==null||ol!==Zn(l)||(l=ol,"selectionStart"in l&&Ur(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$l&&Wl($l,l)||($l=l,l=ki(Lr,"onSelect"),0<l.length&&(t=new $n("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ol)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ul={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},qr={},Yc={};Xt&&(Yc=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function Ha(e){if(qr[e])return qr[e];if(!ul[e])return e;var t=ul[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Yc)return qr[e]=t[a];return e}var kc=Ha("animationend"),Gc=Ha("animationiteration"),Xc=Ha("animationstart"),Uh=Ha("transitionrun"),Lh=Ha("transitionstart"),Hh=Ha("transitioncancel"),Qc=Ha("transitionend"),Vc=new Map,Br="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Br.push("scrollEnd");function Ct(e,t){Vc.set(e,t),Oa(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xt=[],cl=0,Yr=0;function ti(){for(var e=cl,t=Yr=cl=0;t<e;){var a=xt[t];xt[t++]=null;var l=xt[t];xt[t++]=null;var n=xt[t];xt[t++]=null;var i=xt[t];if(xt[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&Zc(a,n,i)}}function ai(e,t,a,l){xt[cl++]=e,xt[cl++]=t,xt[cl++]=a,xt[cl++]=l,Yr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function kr(e,t,a,l){return ai(e,t,a,l),li(e)}function qa(e,t){return ai(e,null,null,t),li(e)}function Zc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ot(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function li(e){if(50<bn)throw bn=0,$o=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sl={};function qh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,a,l){return new qh(e,t,a,l)}function Gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var a=e.alternate;return a===null?(a=ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,a,l,n,i){var o=0;if(l=e,typeof e=="function")Gr(e)&&(o=1);else if(typeof e=="string")o=Xp(e,a,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ke:return e=ct(31,a,t,n),e.elementType=Ke,e.lanes=i,e;case Y:return Ba(a.children,n,i,t);case U:o=8,n|=24;break;case K:return e=ct(12,a,t,n|2),e.elementType=K,e.lanes=i,e;case be:return e=ct(13,a,t,n),e.elementType=be,e.lanes=i,e;case Te:return e=ct(19,a,t,n),e.elementType=Te,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:o=10;break e;case ee:o=9;break e;case xe:o=11;break e;case W:o=14;break e;case Re:o=16,l=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=ct(o,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ba(e,t,a,l){return e=ct(7,e,l,t),e.lanes=a,e}function Xr(e,t,a){return e=ct(6,e,null,t),e.lanes=a,e}function Jc(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function Qr(e,t,a){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fc=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=Fc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ju(t)},Fc.set(e,t),t)}return{value:e,source:t,stack:Ju(t)}}var fl=[],dl=0,ii=null,Il=0,St=[],jt=0,sa=null,Ot=1,Ut="";function Vt(e,t){fl[dl++]=Il,fl[dl++]=ii,ii=e,Il=t}function Wc(e,t,a){St[jt++]=Ot,St[jt++]=Ut,St[jt++]=sa,sa=e;var l=Ot;e=Ut;var n=32-ot(l)-1;l&=~(1<<n),a+=1;var i=32-ot(t)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,Ot=1<<32-ot(t)+n|a<<n|l,Ut=i+e}else Ot=1<<i|a<<n|l,Ut=e}function Vr(e){e.return!==null&&(Vt(e,1),Wc(e,1,0))}function Zr(e){for(;e===ii;)ii=fl[--dl],fl[dl]=null,Il=fl[--dl],fl[dl]=null;for(;e===sa;)sa=St[--jt],St[jt]=null,Ut=St[--jt],St[jt]=null,Ot=St[--jt],St[jt]=null}function $c(e,t){St[jt++]=Ot,St[jt++]=Ut,St[jt++]=sa,Ot=t.id,Ut=t.overflow,sa=e}var Xe=null,we=null,oe=!1,fa=null,wt=!1,Kr=Error(c(519));function da(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(bt(t,e)),Kr}function Ic(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ge]=e,t[Ie]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<jn.length;a++)ne(jn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),fc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),mc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||gd(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||da(e,!0)}function Pc(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:Xe=Xe.return}}function ml(e){if(e!==Xe)return!1;if(!oe)return Pc(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||du(e.type,e.memoizedProps)),a=!a),a&&we&&da(e),Pc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));we=Ed(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));we=Ed(e)}else t===27?(t=we,Ta(e.type)?(e=vu,vu=null,we=e):we=t):we=Xe?Et(e.stateNode.nextSibling):null;return!0}function Ya(){we=Xe=null,oe=!1}function Jr(){var e=fa;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),fa=null),e}function Pl(e){fa===null?fa=[e]:fa.push(e)}var Fr=x(null),ka=null,Zt=null;function ma(e,t,a){q(Fr,t._currentValue),t._currentValue=a}function Kt(e){e._currentValue=Fr.current,O(Fr)}function Wr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function $r(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var h=0;h<t.length;h++)if(s.context===t[h]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Wr(i.return,a,e),l||(o=null);break e}i=s.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(c(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),Wr(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function hl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var s=n.type;ut(n.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(n===de.current){if(o=n.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Nn):e=[Nn])}n=n.return}e!==null&&$r(t,e,a,l),t.flags|=262144}function ri(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){ka=e,Zt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return es(ka,e)}function oi(e,t){return ka===null&&Ga(e),es(e,t)}function es(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Zt===null){if(e===null)throw Error(c(308));Zt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zt=Zt.next=t;return a}var Bh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Yh=u.unstable_scheduleCallback,kh=u.unstable_NormalPriority,Ue={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ir(){return{controller:new Bh,data:new Map,refCount:0}}function en(e){e.refCount--,e.refCount===0&&Yh(kh,function(){e.controller.abort()})}var tn=null,Pr=0,pl=0,gl=null;function Gh(e,t){if(tn===null){var a=tn=[];Pr=0,pl=lu(),gl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Pr++,t.then(ts,ts),t}function ts(){if(--Pr===0&&tn!==null){gl!==null&&(gl.status="fulfilled");var e=tn;tn=null,pl=0,gl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var as=R.S;R.S=function(e,t){Yf=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gh(e,t),as!==null&&as(e,t)};var Xa=x(null);function eo(){var e=Xa.current;return e!==null?e:je.pooledCache}function ui(e,t){t===null?q(Xa,Xa.current):q(Xa,t.pool)}function ls(){var e=eo();return e===null?null:{parent:Ue._currentValue,pool:e}}var vl=Error(c(460)),to=Error(c(474)),ci=Error(c(542)),si={then:function(){}};function ns(e){return e=e.status,e==="fulfilled"||e==="rejected"}function is(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,os(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,os(e),e}throw Va=t,vl}}function Qa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Va=a,vl):a}}var Va=null;function rs(){if(Va===null)throw Error(c(459));var e=Va;return Va=null,e}function os(e){if(e===vl||e===ci)throw Error(c(483))}var yl=null,an=0;function fi(e){var t=an;return an+=1,yl===null&&(yl=[]),is(yl,e,t)}function ln(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function di(e,t){throw t.$$typeof===L?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function us(e){function t(b,g){if(e){var j=b.deletions;j===null?(b.deletions=[g],b.flags|=16):j.push(g)}}function a(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function l(b){for(var g=new Map;b!==null;)b.key!==null?g.set(b.key,b):g.set(b.index,b),b=b.sibling;return g}function n(b,g){return b=Qt(b,g),b.index=0,b.sibling=null,b}function i(b,g,j){return b.index=j,e?(j=b.alternate,j!==null?(j=j.index,j<g?(b.flags|=67108866,g):j):(b.flags|=67108866,g)):(b.flags|=1048576,g)}function o(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function s(b,g,j,D){return g===null||g.tag!==6?(g=Xr(j,b.mode,D),g.return=b,g):(g=n(g,j),g.return=b,g)}function h(b,g,j,D){var X=j.type;return X===Y?C(b,g,j.props.children,D,j.key):g!==null&&(g.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Re&&Qa(X)===g.type)?(g=n(g,j.props),ln(g,j),g.return=b,g):(g=ni(j.type,j.key,j.props,null,b.mode,D),ln(g,j),g.return=b,g)}function w(b,g,j,D){return g===null||g.tag!==4||g.stateNode.containerInfo!==j.containerInfo||g.stateNode.implementation!==j.implementation?(g=Qr(j,b.mode,D),g.return=b,g):(g=n(g,j.children||[]),g.return=b,g)}function C(b,g,j,D,X){return g===null||g.tag!==7?(g=Ba(j,b.mode,D,X),g.return=b,g):(g=n(g,j),g.return=b,g)}function _(b,g,j){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Xr(""+g,b.mode,j),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Z:return j=ni(g.type,g.key,g.props,null,b.mode,j),ln(j,g),j.return=b,j;case Q:return g=Qr(g,b.mode,j),g.return=b,g;case Re:return g=Qa(g),_(b,g,j)}if(Oe(g)||Je(g))return g=Ba(g,b.mode,j,null),g.return=b,g;if(typeof g.then=="function")return _(b,fi(g),j);if(g.$$typeof===J)return _(b,oi(b,g),j);di(b,g)}return null}function z(b,g,j,D){var X=g!==null?g.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return X!==null?null:s(b,g,""+j,D);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:return j.key===X?h(b,g,j,D):null;case Q:return j.key===X?w(b,g,j,D):null;case Re:return j=Qa(j),z(b,g,j,D)}if(Oe(j)||Je(j))return X!==null?null:C(b,g,j,D,null);if(typeof j.then=="function")return z(b,g,fi(j),D);if(j.$$typeof===J)return z(b,g,oi(b,j),D);di(b,j)}return null}function A(b,g,j,D,X){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return b=b.get(j)||null,s(g,b,""+D,X);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Z:return b=b.get(D.key===null?j:D.key)||null,h(g,b,D,X);case Q:return b=b.get(D.key===null?j:D.key)||null,w(g,b,D,X);case Re:return D=Qa(D),A(b,g,j,D,X)}if(Oe(D)||Je(D))return b=b.get(j)||null,C(g,b,D,X,null);if(typeof D.then=="function")return A(b,g,j,fi(D),X);if(D.$$typeof===J)return A(b,g,j,oi(g,D),X);di(g,D)}return null}function B(b,g,j,D){for(var X=null,ue=null,G=g,te=g=0,re=null;G!==null&&te<j.length;te++){G.index>te?(re=G,G=null):re=G.sibling;var ce=z(b,G,j[te],D);if(ce===null){G===null&&(G=re);break}e&&G&&ce.alternate===null&&t(b,G),g=i(ce,g,te),ue===null?X=ce:ue.sibling=ce,ue=ce,G=re}if(te===j.length)return a(b,G),oe&&Vt(b,te),X;if(G===null){for(;te<j.length;te++)G=_(b,j[te],D),G!==null&&(g=i(G,g,te),ue===null?X=G:ue.sibling=G,ue=G);return oe&&Vt(b,te),X}for(G=l(G);te<j.length;te++)re=A(G,b,te,j[te],D),re!==null&&(e&&re.alternate!==null&&G.delete(re.key===null?te:re.key),g=i(re,g,te),ue===null?X=re:ue.sibling=re,ue=re);return e&&G.forEach(function(Da){return t(b,Da)}),oe&&Vt(b,te),X}function V(b,g,j,D){if(j==null)throw Error(c(151));for(var X=null,ue=null,G=g,te=g=0,re=null,ce=j.next();G!==null&&!ce.done;te++,ce=j.next()){G.index>te?(re=G,G=null):re=G.sibling;var Da=z(b,G,ce.value,D);if(Da===null){G===null&&(G=re);break}e&&G&&Da.alternate===null&&t(b,G),g=i(Da,g,te),ue===null?X=Da:ue.sibling=Da,ue=Da,G=re}if(ce.done)return a(b,G),oe&&Vt(b,te),X;if(G===null){for(;!ce.done;te++,ce=j.next())ce=_(b,ce.value,D),ce!==null&&(g=i(ce,g,te),ue===null?X=ce:ue.sibling=ce,ue=ce);return oe&&Vt(b,te),X}for(G=l(G);!ce.done;te++,ce=j.next())ce=A(G,b,te,ce.value,D),ce!==null&&(e&&ce.alternate!==null&&G.delete(ce.key===null?te:ce.key),g=i(ce,g,te),ue===null?X=ce:ue.sibling=ce,ue=ce);return e&&G.forEach(function(eg){return t(b,eg)}),oe&&Vt(b,te),X}function ye(b,g,j,D){if(typeof j=="object"&&j!==null&&j.type===Y&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:e:{for(var X=j.key;g!==null;){if(g.key===X){if(X=j.type,X===Y){if(g.tag===7){a(b,g.sibling),D=n(g,j.props.children),D.return=b,b=D;break e}}else if(g.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Re&&Qa(X)===g.type){a(b,g.sibling),D=n(g,j.props),ln(D,j),D.return=b,b=D;break e}a(b,g);break}else t(b,g);g=g.sibling}j.type===Y?(D=Ba(j.props.children,b.mode,D,j.key),D.return=b,b=D):(D=ni(j.type,j.key,j.props,null,b.mode,D),ln(D,j),D.return=b,b=D)}return o(b);case Q:e:{for(X=j.key;g!==null;){if(g.key===X)if(g.tag===4&&g.stateNode.containerInfo===j.containerInfo&&g.stateNode.implementation===j.implementation){a(b,g.sibling),D=n(g,j.children||[]),D.return=b,b=D;break e}else{a(b,g);break}else t(b,g);g=g.sibling}D=Qr(j,b.mode,D),D.return=b,b=D}return o(b);case Re:return j=Qa(j),ye(b,g,j,D)}if(Oe(j))return B(b,g,j,D);if(Je(j)){if(X=Je(j),typeof X!="function")throw Error(c(150));return j=X.call(j),V(b,g,j,D)}if(typeof j.then=="function")return ye(b,g,fi(j),D);if(j.$$typeof===J)return ye(b,g,oi(b,j),D);di(b,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,g!==null&&g.tag===6?(a(b,g.sibling),D=n(g,j),D.return=b,b=D):(a(b,g),D=Xr(j,b.mode,D),D.return=b,b=D),o(b)):a(b,g)}return function(b,g,j,D){try{an=0;var X=ye(b,g,j,D);return yl=null,X}catch(G){if(G===vl||G===ci)throw G;var ue=ct(29,G,null,b.mode);return ue.lanes=D,ue.return=b,ue}}}var Za=us(!0),cs=us(!1),ha=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(fe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=li(e),Zc(e,null,a),t}return ai(e,l,t,a),li(e)}function nn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ec(e,a)}}function no(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var io=!1;function rn(){if(io){var e=gl;if(e!==null)throw e}}function on(e,t,a,l){io=!1;var n=e.updateQueue;ha=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var h=s,w=h.next;h.next=null,o===null?i=w:o.next=w,o=h;var C=e.alternate;C!==null&&(C=C.updateQueue,s=C.lastBaseUpdate,s!==o&&(s===null?C.firstBaseUpdate=w:s.next=w,C.lastBaseUpdate=h))}if(i!==null){var _=n.baseState;o=0,C=w=h=null,s=i;do{var z=s.lane&-536870913,A=z!==s.lane;if(A?(ie&z)===z:(l&z)===z){z!==0&&z===pl&&(io=!0),C!==null&&(C=C.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var B=e,V=s;z=t;var ye=a;switch(V.tag){case 1:if(B=V.payload,typeof B=="function"){_=B.call(ye,_,z);break e}_=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=V.payload,z=typeof B=="function"?B.call(ye,_,z):B,z==null)break e;_=N({},_,z);break e;case 2:ha=!0}}z=s.callback,z!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[z]:A.push(z))}else A={lane:z,tag:s.tag,payload:s.payload,callback:s.callback,next:null},C===null?(w=C=A,h=_):C=C.next=A,o|=z;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;A=s,s=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);C===null&&(h=_),n.baseState=h,n.firstBaseUpdate=w,n.lastBaseUpdate=C,i===null&&(n.shared.lanes=0),Sa|=o,e.lanes=o,e.memoizedState=_}}function ss(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function fs(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ss(a[e],t)}var xl=x(null),mi=x(0);function ds(e,t){e=aa,q(mi,e),q(xl,t),aa=e|t.baseLanes}function ro(){q(mi,aa),q(xl,xl.current)}function oo(){aa=mi.current,O(xl),O(mi)}var st=x(null),zt=null;function va(e){var t=e.alternate;q(Me,Me.current&1),q(st,e),zt===null&&(t===null||xl.current!==null||t.memoizedState!==null)&&(zt=e)}function uo(e){q(Me,Me.current),q(st,e),zt===null&&(zt=e)}function ms(e){e.tag===22?(q(Me,Me.current),q(st,e),zt===null&&(zt=e)):ya()}function ya(){q(Me,Me.current),q(st,st.current)}function ft(e){O(st),zt===e&&(zt=null),O(Me)}var Me=x(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pu(a)||gu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,P=null,ge=null,Le=null,pi=!1,bl=!1,Ka=!1,gi=0,un=0,Sl=null,Qh=0;function Ae(){throw Error(c(321))}function co(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ut(e[a],t[a]))return!1;return!0}function so(e,t,a,l,n,i){return Jt=i,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Ws:To,Ka=!1,i=a(l,n),Ka=!1,bl&&(i=ps(t,a,l,n)),hs(e),i}function hs(e){R.H=fn;var t=ge!==null&&ge.next!==null;if(Jt=0,Le=ge=P=null,pi=!1,un=0,Sl=null,t)throw Error(c(300));e===null||He||(e=e.dependencies,e!==null&&ri(e)&&(He=!0))}function ps(e,t,a,l){P=e;var n=0;do{if(bl&&(Sl=null),un=0,bl=!1,25<=n)throw Error(c(301));if(n+=1,Le=ge=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=$s,i=t(a,l)}while(bl);return i}function Vh(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?cn(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(P.flags|=1024),t}function fo(){var e=gi!==0;return gi=0,e}function mo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ho(e){if(pi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}pi=!1}Jt=0,Le=ge=P=null,bl=!1,un=gi=0,Sl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?P.memoizedState=Le=e:Le=Le.next=e,Le}function _e(){if(ge===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=Le===null?P.memoizedState:Le.next;if(t!==null)Le=t,ge=e;else{if(e===null)throw P.alternate===null?Error(c(467)):Error(c(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Le===null?P.memoizedState=Le=e:Le=Le.next=e}return Le}function vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cn(e){var t=un;return un+=1,Sl===null&&(Sl=[]),e=is(Sl,e,t),t=P,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Ws:To),e}function yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cn(e);if(e.$$typeof===J)return Qe(e)}throw Error(c(438,String(e)))}function po(e){var t=null,a=P.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=P.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=vi(),P.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Mt;return t.index++,a}function Ft(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=_e();return go(t,ge,e)}function go(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=o=null,h=null,w=t,C=!1;do{var _=w.lane&-536870913;if(_!==w.lane?(ie&_)===_:(Jt&_)===_){var z=w.revertLane;if(z===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),_===pl&&(C=!0);else if((Jt&z)===z){w=w.next,z===pl&&(C=!0);continue}else _={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},h===null?(s=h=_,o=i):h=h.next=_,P.lanes|=z,Sa|=z;_=w.action,Ka&&a(i,_),i=w.hasEagerState?w.eagerState:a(i,_)}else z={lane:_,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},h===null?(s=h=z,o=i):h=h.next=z,P.lanes|=_,Sa|=_;w=w.next}while(w!==null&&w!==t);if(h===null?o=i:h.next=s,!ut(i,e.memoizedState)&&(He=!0,C&&(a=gl,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function vo(e){var t=_e(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);ut(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function gs(e,t,a){var l=P,n=_e(),i=oe;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!ut((ge||n).memoizedState,a);if(o&&(n.memoizedState=a,He=!0),n=n.queue,bo(xs.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,jl(9,{destroy:void 0},ys.bind(null,l,n,a,t),null),je===null)throw Error(c(349));i||(Jt&127)!==0||vs(l,t,a)}return a}function vs(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=P.updateQueue,t===null?(t=vi(),P.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ys(e,t,a,l){t.value=a,t.getSnapshot=l,bs(t)&&Ss(e)}function xs(e,t,a){return a(function(){bs(t)&&Ss(e)})}function bs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ut(e,a)}catch{return!0}}function Ss(e){var t=qa(e,2);t!==null&&nt(t,e,2)}function yo(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Ka){oa(!0);try{a()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function js(e,t,a,l){return e.baseState=a,go(e,ge,typeof l=="function"?l:Ft)}function Zh(e,t,a,l,n){if(ji(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,ws(t,i)):(i.next=a.next,t.pending=a.next=i)}}function ws(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,o={};R.T=o;try{var s=a(n,l),h=R.S;h!==null&&h(o,s),zs(e,t,s)}catch(w){xo(e,t,w)}finally{i!==null&&o.types!==null&&(i.types=o.types),R.T=i}}else try{i=a(n,l),zs(e,t,i)}catch(w){xo(e,t,w)}}function zs(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Es(e,t,l)},function(l){return xo(e,t,l)}):Es(e,t,a)}function Es(e,t,a){t.status="fulfilled",t.value=a,Ts(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ws(e,a)))}function xo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ts(t),t=t.next;while(t!==l)}e.action=null}function Ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ns(e,t){return t}function As(e,t){if(oe){var a=je.formState;if(a!==null){e:{var l=P;if(oe){if(we){t:{for(var n=we,i=wt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Et(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){we=Et(n.nextSibling),l=n.data==="F!";break e}}da(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:t},a.queue=l,a=Ks.bind(null,P,l),l.dispatch=a,l=yo(!1),i=Eo.bind(null,P,!1,l.queue),l=$e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Zh.bind(null,P,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Cs(e){var t=_e();return Rs(t,ge,e)}function Rs(e,t,a){if(t=go(e,t,Ns)[0],e=xi(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=cn(t)}catch(o){throw o===vl?ci:o}else l=t;t=_e();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(P.flags|=2048,jl(9,{destroy:void 0},Kh.bind(null,n,a),null)),[l,i,e]}function Kh(e,t){e.action=t}function Ds(e){var t=_e(),a=ge;if(a!==null)return Rs(t,a,e);_e(),t=t.memoizedState,a=_e();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function jl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=P.updateQueue,t===null&&(t=vi(),P.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ms(){return _e().memoizedState}function bi(e,t,a,l){var n=$e();P.flags|=e,n.memoizedState=jl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Si(e,t,a,l){var n=_e();l=l===void 0?null:l;var i=n.memoizedState.inst;ge!==null&&l!==null&&co(l,ge.memoizedState.deps)?n.memoizedState=jl(t,i,a,l):(P.flags|=e,n.memoizedState=jl(1|t,i,a,l))}function _s(e,t){bi(8390656,8,e,t)}function bo(e,t){Si(2048,8,e,t)}function Jh(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=vi(),P.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Os(e){var t=_e().memoizedState;return Jh({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Us(e,t){return Si(4,2,e,t)}function Ls(e,t){return Si(4,4,e,t)}function Hs(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qs(e,t,a){a=a!=null?a.concat([e]):null,Si(4,4,Hs.bind(null,t,e),a)}function So(){}function Bs(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&co(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Ys(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&co(t,l[1]))return l[0];if(l=e(),Ka){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l}function jo(e,t,a){return a===void 0||(Jt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Gf(),P.lanes|=e,Sa|=e,a)}function ks(e,t,a,l){return ut(a,t)?a:xl.current!==null?(e=jo(e,a,l),ut(e,t)||(He=!0),e):(Jt&42)===0||(Jt&1073741824)!==0&&(ie&261930)===0?(He=!0,e.memoizedState=a):(e=Gf(),P.lanes|=e,Sa|=e,t)}function Gs(e,t,a,l,n){var i=H.p;H.p=i!==0&&8>i?i:8;var o=R.T,s={};R.T=s,Eo(e,!1,t,a);try{var h=n(),w=R.S;if(w!==null&&w(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var C=Xh(h,l);sn(e,t,C,ht(e))}else sn(e,t,l,ht(e))}catch(_){sn(e,t,{then:function(){},status:"rejected",reason:_},ht())}finally{H.p=i,o!==null&&s.types!==null&&(o.types=s.types),R.T=o}}function Fh(){}function wo(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=Xs(e).queue;Gs(e,n,t,F,a===null?Fh:function(){return Qs(e),a(l)})}function Xs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qs(e){var t=Xs(e);t.next===null&&(t=e.alternate.memoizedState),sn(e,t.next.queue,{},ht())}function zo(){return Qe(Nn)}function Vs(){return _e().memoizedState}function Zs(){return _e().memoizedState}function Wh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ht();e=pa(a);var l=ga(t,e,a);l!==null&&(nt(l,t,a),nn(l,t,a)),t={cache:Ir()},e.payload=t;return}t=t.return}}function $h(e,t,a){var l=ht();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ji(e)?Js(t,a):(a=kr(e,t,a,l),a!==null&&(nt(a,e,l),Fs(a,t,l)))}function Ks(e,t,a){var l=ht();sn(e,t,a,l)}function sn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ji(e))Js(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,a);if(n.hasEagerState=!0,n.eagerState=s,ut(s,o))return ai(e,t,n,0),je===null&&ti(),!1}catch{}if(a=kr(e,t,n,l),a!==null)return nt(a,e,l),Fs(a,t,l),!0}return!1}function Eo(e,t,a,l){if(l={lane:2,revertLane:lu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ji(e)){if(t)throw Error(c(479))}else t=kr(e,a,l,2),t!==null&&nt(t,e,2)}function ji(e){var t=e.alternate;return e===P||t!==null&&t===P}function Js(e,t){bl=pi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Fs(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ec(e,a)}}var fn={readContext:Qe,use:yi,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};fn.useEffectEvent=Ae;var Ws={readContext:Qe,use:yi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:_s,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,bi(4194308,4,Hs.bind(null,t,e),a)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){bi(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Ka){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var n=a(t);if(Ka){oa(!0);try{a(t)}finally{oa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=$h.bind(null,P,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=yo(e);var t=e.queue,a=Ks.bind(null,P,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:So,useDeferredValue:function(e,t){var a=$e();return jo(a,e,t)},useTransition:function(){var e=yo(!1);return e=Gs.bind(null,P,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=P,n=$e();if(oe){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),je===null)throw Error(c(349));(ie&127)!==0||vs(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,_s(xs.bind(null,l,i,e),[e]),l.flags|=2048,jl(9,{destroy:void 0},ys.bind(null,l,i,a,t),null),a},useId:function(){var e=$e(),t=je.identifierPrefix;if(oe){var a=Ut,l=Ot;a=(l&~(1<<32-ot(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=gi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Qh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zo,useFormState:As,useActionState:As,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Eo.bind(null,P,!0,a),a.dispatch=t,[e,t]},useMemoCache:po,useCacheRefresh:function(){return $e().memoizedState=Wh.bind(null,P)},useEffectEvent:function(e){var t=$e(),a={impl:e};return t.memoizedState=a,function(){if((fe&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},To={readContext:Qe,use:yi,useCallback:Bs,useContext:Qe,useEffect:bo,useImperativeHandle:qs,useInsertionEffect:Us,useLayoutEffect:Ls,useMemo:Ys,useReducer:xi,useRef:Ms,useState:function(){return xi(Ft)},useDebugValue:So,useDeferredValue:function(e,t){var a=_e();return ks(a,ge.memoizedState,e,t)},useTransition:function(){var e=xi(Ft)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:cn(e),t]},useSyncExternalStore:gs,useId:Vs,useHostTransitionStatus:zo,useFormState:Cs,useActionState:Cs,useOptimistic:function(e,t){var a=_e();return js(a,ge,e,t)},useMemoCache:po,useCacheRefresh:Zs};To.useEffectEvent=Os;var $s={readContext:Qe,use:yi,useCallback:Bs,useContext:Qe,useEffect:bo,useImperativeHandle:qs,useInsertionEffect:Us,useLayoutEffect:Ls,useMemo:Ys,useReducer:vo,useRef:Ms,useState:function(){return vo(Ft)},useDebugValue:So,useDeferredValue:function(e,t){var a=_e();return ge===null?jo(a,e,t):ks(a,ge.memoizedState,e,t)},useTransition:function(){var e=vo(Ft)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:cn(e),t]},useSyncExternalStore:gs,useId:Vs,useHostTransitionStatus:zo,useFormState:Ds,useActionState:Ds,useOptimistic:function(e,t){var a=_e();return ge!==null?js(a,ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:po,useCacheRefresh:Zs};$s.useEffectEvent=Os;function No(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ao={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ht(),n=pa(l);n.payload=t,a!=null&&(n.callback=a),t=ga(e,n,l),t!==null&&(nt(t,e,l),nn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ht(),n=pa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ga(e,n,l),t!==null&&(nt(t,e,l),nn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ht(),l=pa(a);l.tag=2,t!=null&&(l.callback=t),t=ga(e,l,a),t!==null&&(nt(t,e,a),nn(t,e,a))}};function Is(e,t,a,l,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!Wl(a,l)||!Wl(n,i):!0}function Ps(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ef(e){ei(e)}function tf(e){console.error(e)}function af(e){ei(e)}function wi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function lf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Co(e,t,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){wi(e,t)},a}function nf(e){return e=pa(e),e.tag=3,e}function rf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){lf(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){lf(t,a,l),typeof n!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Ih(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&hl(t,a,n,!0),a=st.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?Ui():a.alternate===null&&Ce===0&&(Ce=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===si?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),eu(e,l,n)),!1;case 22:return a.flags|=65536,l===si?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),eu(e,l,n)),!1}throw Error(c(435,a.tag))}return eu(e,l,n),Ui(),!1}if(oe)return t=st.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Kr&&(e=Error(c(422),{cause:l}),Pl(bt(e,a)))):(l!==Kr&&(t=Error(c(423),{cause:l}),Pl(bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=bt(l,a),n=Co(e.stateNode,l,n),no(e,n),Ce!==4&&(Ce=2)),!1;var i=Error(c(520),{cause:l});if(i=bt(i,a),xn===null?xn=[i]:xn.push(i),Ce!==4&&(Ce=2),t===null)return!0;l=bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Co(a.stateNode,l,e),no(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ja===null||!ja.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=nf(n),rf(n,e,a,l),no(a,n),!1}a=a.return}while(a!==null);return!1}var Ro=Error(c(461)),He=!1;function Ve(e,t,a,l){t.child=e===null?cs(t,null,a,l):Za(t,e.child,a,l)}function of(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var o={};for(var s in l)s!=="ref"&&(o[s]=l[s])}else o=l;return Ga(t),l=so(e,t,a,o,i,n),s=fo(),e!==null&&!He?(mo(e,t,n),Wt(e,t,n)):(oe&&s&&Vr(t),t.flags|=1,Ve(e,t,l,n),t.child)}function uf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Gr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,cf(e,t,i,l,n)):(e=ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!qo(e,n)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Wl,a(o,l)&&e.ref===t.ref)return Wt(e,t,n)}return t.flags|=1,e=Qt(i,l),e.ref=t.ref,e.return=t,t.child=e}function cf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Wl(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,qo(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Wt(e,t,n)}return Do(e,t,a,l,n)}function sf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return ff(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ui(t,i!==null?i.cachePool:null),i!==null?ds(t,i):ro(),ms(t);else return l=t.lanes=536870912,ff(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ui(t,i.cachePool),ds(t,i),ya(),t.memoizedState=null):(e!==null&&ui(t,null),ro(),ya());return Ve(e,t,n,a),t.child}function dn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ff(e,t,a,l,n){var i=eo();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ui(t,null),ro(),ms(t),e!==null&&hl(e,t,l,!0),t.childLanes=n,null}function zi(e,t){return t=Ti({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function df(e,t,a){return Za(t,e.child,null,a),e=zi(t,t.pendingProps),e.flags|=2,ft(t),t.memoizedState=null,e}function Ph(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(l.mode==="hidden")return e=zi(t,l),t.lanes=536870912,dn(null,e);if(uo(t),(e=we)?(e=zd(e,wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:Ot,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=Jc(e),a.return=t,t.child=a,Xe=t,we=null)):e=null,e===null)throw da(t);return t.lanes=536870912,null}return zi(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(uo(t),n)if(t.flags&256)t.flags&=-257,t=df(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(He||hl(e,t,a,!1),n=(a&e.childLanes)!==0,He||n){if(l=je,l!==null&&(o=tc(l,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,qa(e,o),nt(l,e,o),Ro;Ui(),t=df(e,t,a)}else e=i.treeContext,we=Et(o.nextSibling),Xe=t,oe=!0,fa=null,wt=!1,e!==null&&$c(t,e),t=zi(t,l),t.flags|=4096;return t}return e=Qt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ei(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Do(e,t,a,l,n){return Ga(t),a=so(e,t,a,l,void 0,n),l=fo(),e!==null&&!He?(mo(e,t,n),Wt(e,t,n)):(oe&&l&&Vr(t),t.flags|=1,Ve(e,t,a,n),t.child)}function mf(e,t,a,l,n,i){return Ga(t),t.updateQueue=null,a=ps(t,l,a,n),hs(e),l=fo(),e!==null&&!He?(mo(e,t,i),Wt(e,t,i)):(oe&&l&&Vr(t),t.flags|=1,Ve(e,t,a,i),t.child)}function hf(e,t,a,l,n){if(Ga(t),t.stateNode===null){var i=sl,o=a.contextType;typeof o=="object"&&o!==null&&(i=Qe(o)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ao,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ao(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?Qe(o):sl,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(No(t,a,o,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Ao.enqueueReplaceState(i,i.state,null),on(t,l,i,n),rn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,h=Ja(a,s);i.props=h;var w=i.context,C=a.contextType;o=sl,typeof C=="object"&&C!==null&&(o=Qe(C));var _=a.getDerivedStateFromProps;C=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,C||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||w!==o)&&Ps(t,i,l,o),ha=!1;var z=t.memoizedState;i.state=z,on(t,l,i,n),rn(),w=t.memoizedState,s||z!==w||ha?(typeof _=="function"&&(No(t,a,_,l),w=t.memoizedState),(h=ha||Is(t,a,h,l,z,w,o))?(C||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=o,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,lo(e,t),o=t.memoizedProps,C=Ja(a,o),i.props=C,_=t.pendingProps,z=i.context,w=a.contextType,h=sl,typeof w=="object"&&w!==null&&(h=Qe(w)),s=a.getDerivedStateFromProps,(w=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==_||z!==h)&&Ps(t,i,l,h),ha=!1,z=t.memoizedState,i.state=z,on(t,l,i,n),rn();var A=t.memoizedState;o!==_||z!==A||ha||e!==null&&e.dependencies!==null&&ri(e.dependencies)?(typeof s=="function"&&(No(t,a,s,l),A=t.memoizedState),(C=ha||Is(t,a,C,l,z,A,h)||e!==null&&e.dependencies!==null&&ri(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=h,l=C):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ei(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Za(t,e.child,null,n),t.child=Za(t,null,a,n)):Ve(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Wt(e,t,n),e}function pf(e,t,a,l){return Ya(),t.flags|=256,Ve(e,t,a,l),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _o(e){return{baseLanes:e,cachePool:ls()}}function Oo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=mt),e}function gf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?va(t):ya(),(e=we)?(e=zd(e,wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:Ot,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=Jc(e),a.return=t,t.child=a,Xe=t,we=null)):e=null,e===null)throw da(t);return gu(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(ya(),n=t.mode,s=Ti({mode:"hidden",children:s},n),l=Ba(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=_o(a),l.childLanes=Oo(e,o,a),t.memoizedState=Mo,dn(null,l)):(va(t),Uo(t,s))}var h=e.memoizedState;if(h!==null&&(s=h.dehydrated,s!==null)){if(i)t.flags&256?(va(t),t.flags&=-257,t=Lo(e,t,a)):t.memoizedState!==null?(ya(),t.child=e.child,t.flags|=128,t=null):(ya(),s=l.fallback,n=t.mode,l=Ti({mode:"visible",children:l.children},n),s=Ba(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Za(t,e.child,null,a),l=t.child,l.memoizedState=_o(a),l.childLanes=Oo(e,o,a),t.memoizedState=Mo,t=dn(null,l));else if(va(t),gu(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var w=o.dgst;o=w,l=Error(c(419)),l.stack="",l.digest=o,Pl({value:l,source:null,stack:null}),t=Lo(e,t,a)}else if(He||hl(e,t,a,!1),o=(a&e.childLanes)!==0,He||o){if(o=je,o!==null&&(l=tc(o,a),l!==0&&l!==h.retryLane))throw h.retryLane=l,qa(e,l),nt(o,e,l),Ro;pu(s)||Ui(),t=Lo(e,t,a)}else pu(s)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,we=Et(s.nextSibling),Xe=t,oe=!0,fa=null,wt=!1,e!==null&&$c(t,e),t=Uo(t,l.children),t.flags|=4096);return t}return n?(ya(),s=l.fallback,n=t.mode,h=e.child,w=h.sibling,l=Qt(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,w!==null?s=Qt(w,s):(s=Ba(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,dn(null,l),l=t.child,s=e.child.memoizedState,s===null?s=_o(a):(n=s.cachePool,n!==null?(h=Ue._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=ls(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=Oo(e,o,a),t.memoizedState=Mo,dn(e.child,l)):(va(t),a=e.child,e=a.sibling,a=Qt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Uo(e,t){return t=Ti({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ti(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function Lo(e,t,a){return Za(t,e.child,null,a),e=Uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Wr(e.return,t,a)}function Ho(e,t,a,l,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=i)}function yf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var o=Me.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,q(Me,o),Ve(e,t,l,a),l=oe?Il:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vf(e,a,t);else if(e.tag===19)vf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&hi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Ho(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&hi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Ho(t,!0,a,null,i,l);break;case"together":Ho(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(hl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function qo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ri(e)))}function ep(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),ma(t,Ue,e.memoizedState.cache),Ya();break;case 27:case 5:Hl(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(va(t),t.flags|=128,null):(a&t.child.childLanes)!==0?gf(e,t,a):(va(t),e=Wt(e,t,a),e!==null?e.sibling:null);va(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(hl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return yf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(Me,Me.current),l)break;return null;case 22:return t.lanes=0,sf(e,t,a,t.pendingProps);case 24:ma(t,Ue,e.memoizedState.cache)}return Wt(e,t,a)}function xf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!qo(e,a)&&(t.flags&128)===0)return He=!1,ep(e,t,a);He=(e.flags&131072)!==0}else He=!1,oe&&(t.flags&1048576)!==0&&Wc(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Qa(t.elementType),t.type=e,typeof e=="function")Gr(e)?(l=Ja(e,l),t.tag=1,t=hf(null,t,e,l,a)):(t.tag=0,t=Do(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===xe){t.tag=11,t=of(null,t,e,l,a);break e}else if(n===W){t.tag=14,t=uf(null,t,e,l,a);break e}}throw t=gt(e)||e,Error(c(306,t,""))}}return t;case 0:return Do(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ja(l,t.pendingProps),hf(e,t,l,n,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,lo(e,t),on(t,l,null,a);var o=t.memoizedState;if(l=o.cache,ma(t,Ue,l),l!==i.cache&&$r(t,[Ue],a,!0),rn(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=pf(e,t,l,a);break e}else if(l!==n){n=bt(Error(c(424)),t),Pl(n),t=pf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=Et(e.firstChild),Xe=t,oe=!0,fa=null,wt=!0,a=cs(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ya(),l===n){t=Wt(e,t,a);break e}Ve(e,t,l,a)}t=t.child}return t;case 26:return Ei(e,t),e===null?(a=Rd(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=Gi(ae.current).createElement(a),l[Ge]=t,l[Ie]=e,Ze(l,a,e),Ye(l),t.stateNode=l):t.memoizedState=Rd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Hl(t),e===null&&oe&&(l=t.stateNode=Nd(t.type,t.pendingProps,ae.current),Xe=t,wt=!0,n=we,Ta(t.type)?(vu=n,we=Et(l.firstChild)):we=n),Ve(e,t,t.pendingProps.children,a),Ei(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=we)&&(l=Rp(l,t.type,t.pendingProps,wt),l!==null?(t.stateNode=l,Xe=t,we=Et(l.firstChild),wt=!1,n=!0):n=!1),n||da(t)),Hl(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,du(n,i)?l=null:o!==null&&du(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=so(e,t,Vh,null,null,a),Nn._currentValue=n),Ei(e,t),Ve(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=we)&&(a=Dp(a,t.pendingProps,wt),a!==null?(t.stateNode=a,Xe=t,we=null,e=!0):e=!1),e||da(t)),null;case 13:return gf(e,t,a);case 4:return We(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Za(t,null,l,a):Ve(e,t,l,a),t.child;case 11:return of(e,t,t.type,t.pendingProps,a);case 7:return Ve(e,t,t.pendingProps,a),t.child;case 8:return Ve(e,t,t.pendingProps.children,a),t.child;case 12:return Ve(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ma(t,t.type,l.value),Ve(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ga(t),n=Qe(n),l=l(n),t.flags|=1,Ve(e,t,l,a),t.child;case 14:return uf(e,t,t.type,t.pendingProps,a);case 15:return cf(e,t,t.type,t.pendingProps,a);case 19:return yf(e,t,a);case 31:return Ph(e,t,a);case 22:return sf(e,t,a,t.pendingProps);case 24:return Ga(t),l=Qe(Ue),e===null?(n=eo(),n===null&&(n=je,i=Ir(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ao(t),ma(t,Ue,n)):((e.lanes&a)!==0&&(lo(e,t),on(t,null,null,a),rn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ma(t,Ue,l)):(l=i.cache,ma(t,Ue,l),l!==n.cache&&$r(t,[Ue],a,!0))),Ve(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function $t(e){e.flags|=4}function Bo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Zf())e.flags|=8192;else throw Va=si,to}else e.flags&=-16777217}function bf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ud(t))if(Zf())e.flags|=8192;else throw Va=si,to}function Ni(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Iu():536870912,e.lanes|=t,Tl|=t)}function mn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function tp(e,t,a){var l=t.pendingProps;switch(Zr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Kt(Ue),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ml(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jr())),ze(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?($t(t),i!==null?(ze(t),bf(t,i)):(ze(t),Bo(t,n,null,l,a))):i?i!==e.memoizedState?($t(t),ze(t),bf(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&$t(t),ze(t),Bo(t,n,e,l,a)),null;case 27:if(qn(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return ze(t),null}e=k.current,ml(t)?Ic(t):(e=Nd(n,l,a),t.stateNode=e,$t(t))}return ze(t),null;case 5:if(qn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return ze(t),null}if(i=k.current,ml(t))Ic(t);else{var o=Gi(ae.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}i[Ge]=t,i[Ie]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Ze(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&$t(t)}}return ze(t),Bo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,ml(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Xe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||gd(e.nodeValue,a)),e||da(t,!0)}else e=Gi(e).createTextNode(l),e[Ge]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ml(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Ge]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=Jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ft(t),t):(ft(t),null);if((t.flags&128)!==0)throw Error(c(558))}return ze(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ml(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[Ge]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ft(t),t):(ft(t),null)}return ft(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ni(t,t.updateQueue),ze(t),null);case 4:return De(),e===null&&ou(t.stateNode.containerInfo),ze(t),null;case 10:return Kt(t.type),ze(t),null;case 19:if(O(Me),l=t.memoizedState,l===null)return ze(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)mn(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=hi(e),i!==null){for(t.flags|=128,mn(l,!1),e=i.updateQueue,t.updateQueue=e,Ni(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Kc(a,e),a=a.sibling;return q(Me,Me.current&1|2),oe&&Vt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&it()>Mi&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304)}else{if(!n)if(e=hi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ni(t,e),mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!oe)return ze(t),null}else 2*it()-l.renderingStartTime>Mi&&a!==536870912&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=it(),e.sibling=null,a=Me.current,q(Me,n?a&1|2:a&1),oe&&Vt(t,l.treeForkCount),e):(ze(t),null);case 22:case 23:return ft(t),oo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Ni(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&O(Xa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(Ue),ze(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function ap(e,t){switch(Zr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(Ue),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qn(t),null;case 31:if(t.memoizedState!==null){if(ft(t),t.alternate===null)throw Error(c(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Me),null;case 4:return De(),null;case 10:return Kt(t.type),null;case 22:case 23:return ft(t),oo(),e!==null&&O(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(Ue),null;case 25:return null;default:return null}}function Sf(e,t){switch(Zr(t),t.tag){case 3:Kt(Ue),De();break;case 26:case 27:case 5:qn(t);break;case 4:De();break;case 31:t.memoizedState!==null&&ft(t);break;case 13:ft(t);break;case 19:O(Me);break;case 10:Kt(t.type);break;case 22:case 23:ft(t),oo(),e!==null&&O(Xa);break;case 24:Kt(Ue)}}function hn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,o=a.inst;l=i(),o.destroy=l}a=a.next}while(a!==n)}}catch(s){he(t,t.return,s)}}function xa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var o=l.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,n=t;var h=a,w=s;try{w()}catch(C){he(n,h,C)}}}l=l.next}while(l!==i)}}catch(C){he(t,t.return,C)}}function jf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{fs(t,a)}catch(l){he(e,e.return,l)}}}function wf(e,t,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function pn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){he(e,t,n)}}function Lt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){he(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){he(e,t,n)}else a.current=null}function zf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){he(e,e.return,n)}}function Yo(e,t,a){try{var l=e.stateNode;zp(l,e.type,a,t),l[Ie]=t}catch(n){he(e,e.return,n)}}function Ef(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function ko(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Go(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Go(e,t,a),e=e.sibling;e!==null;)Go(e,t,a),e=e.sibling}function Ai(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ai(e,t,a),e=e.sibling;e!==null;)Ai(e,t,a),e=e.sibling}function Tf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ze(t,l,a),t[Ge]=e,t[Ie]=a}catch(i){he(e,e.return,i)}}var It=!1,qe=!1,Xo=!1,Nf=typeof WeakSet=="function"?WeakSet:Set,ke=null;function lp(e,t){if(e=e.containerInfo,su=Fi,e=qc(e),Ur(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,s=-1,h=-1,w=0,C=0,_=e,z=null;t:for(;;){for(var A;_!==a||n!==0&&_.nodeType!==3||(s=o+n),_!==i||l!==0&&_.nodeType!==3||(h=o+l),_.nodeType===3&&(o+=_.nodeValue.length),(A=_.firstChild)!==null;)z=_,_=A;for(;;){if(_===e)break t;if(z===a&&++w===n&&(s=o),z===i&&++C===l&&(h=o),(A=_.nextSibling)!==null)break;_=z,z=_.parentNode}_=A}a=s===-1||h===-1?null:{start:s,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(fu={focusedElem:e,selectionRange:a},Fi=!1,ke=t;ke!==null;)if(t=ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ke=e;else for(;ke!==null;){switch(t=ke,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var B=Ja(a.type,n);e=l.getSnapshotBeforeUpdate(B,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(V){he(a,a.return,V)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)hu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,ke=e;break}ke=t.return}}function Af(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),l&4&&hn(5,a);break;case 1:if(ea(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){he(a,a.return,o)}else{var n=Ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){he(a,a.return,o)}}l&64&&jf(a),l&512&&pn(a,a.return);break;case 3:if(ea(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{fs(e,t)}catch(o){he(a,a.return,o)}}break;case 27:t===null&&l&4&&Tf(a);case 26:case 5:ea(e,a),t===null&&l&4&&zf(a),l&512&&pn(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),l&4&&Df(e,a);break;case 13:ea(e,a),l&4&&Mf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=dp.bind(null,a),Mp(e,a))));break;case 22:if(l=a.memoizedState!==null||It,!l){t=t!==null&&t.memoizedState!==null||qe,n=It;var i=qe;It=l,(qe=t)&&!i?ta(e,a,(a.subtreeFlags&8772)!==0):ea(e,a),It=n,qe=i}break;case 30:break;default:ea(e,a)}}function Cf(e){var t=e.alternate;t!==null&&(e.alternate=null,Cf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,et=!1;function Pt(e,t,a){for(a=a.child;a!==null;)Rf(e,t,a),a=a.sibling}function Rf(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(ql,a)}catch{}switch(a.tag){case 26:qe||Lt(a,t),Pt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Lt(a,t);var l=Ee,n=et;Ta(a.type)&&(Ee=a.stateNode,et=!1),Pt(e,t,a),zn(a.stateNode),Ee=l,et=n;break;case 5:qe||Lt(a,t);case 6:if(l=Ee,n=et,Ee=null,Pt(e,t,a),Ee=l,et=n,Ee!==null)if(et)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(a.stateNode)}catch(i){he(a,t,i)}else try{Ee.removeChild(a.stateNode)}catch(i){he(a,t,i)}break;case 18:Ee!==null&&(et?(e=Ee,jd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ol(e)):jd(Ee,a.stateNode));break;case 4:l=Ee,n=et,Ee=a.stateNode.containerInfo,et=!0,Pt(e,t,a),Ee=l,et=n;break;case 0:case 11:case 14:case 15:xa(2,a,t),qe||xa(4,a,t),Pt(e,t,a);break;case 1:qe||(Lt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&wf(a,t,l)),Pt(e,t,a);break;case 21:Pt(e,t,a);break;case 22:qe=(l=qe)||a.memoizedState!==null,Pt(e,t,a),qe=l;break;default:Pt(e,t,a)}}function Df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ol(e)}catch(a){he(t,t.return,a)}}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ol(e)}catch(a){he(t,t.return,a)}}function np(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Nf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Nf),t;default:throw Error(c(435,e.tag))}}function Ci(e,t){var a=np(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=mp.bind(null,e,l);l.then(n,n)}})}function tt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(Ta(s.type)){Ee=s.stateNode,et=!1;break e}break;case 5:Ee=s.stateNode,et=!1;break e;case 3:case 4:Ee=s.stateNode.containerInfo,et=!0;break e}s=s.return}if(Ee===null)throw Error(c(160));Rf(i,o,n),Ee=null,et=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}var Rt=null;function _f(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),at(e),l&4&&(xa(3,e,e.return),hn(3,e),xa(5,e,e.return));break;case 1:tt(t,e),at(e),l&512&&(qe||a===null||Lt(a,a.return)),l&64&&It&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Rt;if(tt(t,e),at(e),l&512&&(qe||a===null||Lt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[kl]||i[Ge]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ze(i,l,a),i[Ge]=e,Ye(i),l=i;break e;case"link":var o=_d("link","href",n).get(l+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(i=o[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;case"meta":if(o=_d("meta","content",n).get(l+(a.content||""))){for(s=0;s<o.length;s++)if(i=o[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[Ge]=e,Ye(i),l=i}e.stateNode=l}else Od(n,e.type,e.stateNode);else e.stateNode=Md(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Od(n,e.type,e.stateNode):Md(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:tt(t,e),at(e),l&512&&(qe||a===null||Lt(a,a.return)),a!==null&&l&4&&Yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(tt(t,e),at(e),l&512&&(qe||a===null||Lt(a,a.return)),e.flags&32){n=e.stateNode;try{ll(n,"")}catch(B){he(e,e.return,B)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Yo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Xo=!0);break;case 6:if(tt(t,e),at(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(B){he(e,e.return,B)}}break;case 3:if(Vi=null,n=Rt,Rt=Xi(t.containerInfo),tt(t,e),Rt=n,at(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ol(t.containerInfo)}catch(B){he(e,e.return,B)}Xo&&(Xo=!1,Of(e));break;case 4:l=Rt,Rt=Xi(e.stateNode.containerInfo),tt(t,e),at(e),Rt=l;break;case 12:tt(t,e),at(e);break;case 31:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ci(e,l)));break;case 13:tt(t,e),at(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Di=it()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ci(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,w=It,C=qe;if(It=w||n,qe=C||h,tt(t,e),qe=C,It=w,at(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||It||qe||Fa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=h.stateNode;var _=h.memoizedProps.style,z=_!=null&&_.hasOwnProperty("display")?_.display:null;s.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){he(h,h.return,B)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(B){he(h,h.return,B)}}}else if(t.tag===18){if(a===null){h=t;try{var A=h.stateNode;n?wd(A,!0):wd(h.stateNode,!1)}catch(B){he(h,h.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ci(e,a))));break;case 19:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ci(e,l)));break;case 30:break;case 21:break;default:tt(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ef(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=ko(e);Ai(e,i,n);break;case 5:var o=a.stateNode;a.flags&32&&(ll(o,""),a.flags&=-33);var s=ko(e);Ai(e,s,o);break;case 3:case 4:var h=a.stateNode.containerInfo,w=ko(e);Go(e,w,h);break;default:throw Error(c(161))}}catch(C){he(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Of(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Of(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Af(e,t.alternate,t),t=t.sibling}function Fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xa(4,t,t.return),Fa(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&wf(t,t.return,a),Fa(t);break;case 27:zn(t.stateNode);case 26:case 5:Lt(t,t.return),Fa(t);break;case 22:t.memoizedState===null&&Fa(t);break;case 30:Fa(t);break;default:Fa(t)}e=e.sibling}}function ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:ta(n,i,a),hn(4,i);break;case 1:if(ta(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){he(l,l.return,w)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)ss(h[n],s)}catch(w){he(l,l.return,w)}}a&&o&64&&jf(i),pn(i,i.return);break;case 27:Tf(i);case 26:case 5:ta(n,i,a),a&&l===null&&o&4&&zf(i),pn(i,i.return);break;case 12:ta(n,i,a);break;case 31:ta(n,i,a),a&&o&4&&Df(n,i);break;case 13:ta(n,i,a),a&&o&4&&Mf(n,i);break;case 22:i.memoizedState===null&&ta(n,i,a),pn(i,i.return);break;case 30:break;default:ta(n,i,a)}t=t.sibling}}function Qo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&en(a))}function Vo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uf(e,t,a,l),t=t.sibling}function Uf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),n&2048&&hn(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e)));break;case 12:if(n&2048){Dt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,s=i.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){he(t,t.return,h)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Dt(e,t,a,l):gn(e,t):i._visibility&2?Dt(e,t,a,l):(i._visibility|=2,wl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Qo(o,t);break;case 24:Dt(e,t,a,l),n&2048&&Vo(t.alternate,t);break;default:Dt(e,t,a,l)}}function wl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,s=a,h=l,w=o.flags;switch(o.tag){case 0:case 11:case 15:wl(i,o,s,h,n),hn(8,o);break;case 23:break;case 22:var C=o.stateNode;o.memoizedState!==null?C._visibility&2?wl(i,o,s,h,n):gn(i,o):(C._visibility|=2,wl(i,o,s,h,n)),n&&w&2048&&Qo(o.alternate,o);break;case 24:wl(i,o,s,h,n),n&&w&2048&&Vo(o.alternate,o);break;default:wl(i,o,s,h,n)}t=t.sibling}}function gn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:gn(a,l),n&2048&&Qo(l.alternate,l);break;case 24:gn(a,l),n&2048&&Vo(l.alternate,l);break;default:gn(a,l)}t=t.sibling}}var vn=8192;function zl(e,t,a){if(e.subtreeFlags&vn)for(e=e.child;e!==null;)Lf(e,t,a),e=e.sibling}function Lf(e,t,a){switch(e.tag){case 26:zl(e,t,a),e.flags&vn&&e.memoizedState!==null&&Qp(a,Rt,e.memoizedState,e.memoizedProps);break;case 5:zl(e,t,a);break;case 3:case 4:var l=Rt;Rt=Xi(e.stateNode.containerInfo),zl(e,t,a),Rt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=vn,vn=16777216,zl(e,t,a),vn=l):zl(e,t,a));break;default:zl(e,t,a)}}function Hf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ke=l,Bf(l,e)}Hf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qf(e),e=e.sibling}function qf(e){switch(e.tag){case 0:case 11:case 15:yn(e),e.flags&2048&&xa(9,e,e.return);break;case 3:yn(e);break;case 12:yn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ri(e)):yn(e);break;default:yn(e)}}function Ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ke=l,Bf(l,e)}Hf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xa(8,t,t.return),Ri(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ri(t));break;default:Ri(t)}e=e.sibling}}function Bf(e,t){for(;ke!==null;){var a=ke;switch(a.tag){case 0:case 11:case 15:xa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:en(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ke=l;else e:for(a=e;ke!==null;){l=ke;var n=l.sibling,i=l.return;if(Cf(l),l===a){ke=null;break e}if(n!==null){n.return=i,ke=n;break e}ke=i}}}var ip={getCacheForType:function(e){var t=Qe(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Qe(Ue).controller.signal}},rp=typeof WeakMap=="function"?WeakMap:Map,fe=0,je=null,le=null,ie=0,me=0,dt=null,ba=!1,El=!1,Zo=!1,aa=0,Ce=0,Sa=0,Wa=0,Ko=0,mt=0,Tl=0,xn=null,lt=null,Jo=!1,Di=0,Yf=0,Mi=1/0,_i=null,ja=null,Be=0,wa=null,Nl=null,la=0,Fo=0,Wo=null,kf=null,bn=0,$o=null;function ht(){return(fe&2)!==0&&ie!==0?ie&-ie:R.T!==null?lu():ac()}function Gf(){if(mt===0)if((ie&536870912)===0||oe){var e=kn;kn<<=1,(kn&3932160)===0&&(kn=262144),mt=e}else mt=536870912;return e=st.current,e!==null&&(e.flags|=32),mt}function nt(e,t,a){(e===je&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Al(e,0),za(e,ie,mt,!1)),Yl(e,a),((fe&2)===0||e!==je)&&(e===je&&((fe&2)===0&&(Wa|=a),Ce===4&&za(e,ie,mt,!1)),Ht(e))}function Xf(e,t,a){if((fe&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Bl(e,t),n=l?cp(e,t):Po(e,t,!0),i=l;do{if(n===0){El&&!l&&za(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!op(a)){n=Po(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;n=xn;var h=s.current.memoizedState.isDehydrated;if(h&&(Al(s,o).flags|=256),o=Po(s,o,!1),o!==2){if(Zo&&!h){s.errorRecoveryDisabledLanes|=i,Wa|=i,n=4;break e}i=lt,lt=n,i!==null&&(lt===null?lt=i:lt.push.apply(lt,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){Al(e,0),za(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:za(l,t,mt,!ba);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Di+300-it(),10<n)){if(za(l,t,mt,!ba),Xn(l,0,!0)!==0)break e;la=t,l.timeoutHandle=bd(Qf.bind(null,l,a,lt,_i,Jo,t,mt,Wa,Tl,ba,i,"Throttled",-0,0),n);break e}Qf(l,a,lt,_i,Jo,t,mt,Wa,Tl,ba,i,null,-0,0)}}break}while(!0);Ht(e)}function Qf(e,t,a,l,n,i,o,s,h,w,C,_,z,A){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Lf(t,i,_);var B=(i&62914560)===i?Di-it():(i&4194048)===i?Yf-it():0;if(B=Vp(_,B),B!==null){la=i,e.cancelPendingCommit=B(If.bind(null,e,t,i,a,l,n,o,s,h,C,_,null,z,A)),za(e,i,o,!w);return}}If(e,t,i,a,l,n,o,s,h)}function op(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ut(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function za(e,t,a,l){t&=~Ko,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ot(n),o=1<<i;l[i]=-1,n&=~o}a!==0&&Pu(e,a,t)}function Oi(){return(fe&6)===0?(Sn(0),!1):!0}function Io(){if(le!==null){if(me===0)var e=le.return;else e=le,Zt=ka=null,ho(e),yl=null,an=0,e=le;for(;e!==null;)Sf(e.alternate,e),e=e.return;le=null}}function Al(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Np(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,Io(),je=e,le=a=Qt(e.current,null),ie=t,me=0,dt=null,ba=!1,El=Bl(e,t),Zo=!1,Tl=mt=Ko=Wa=Sa=Ce=0,lt=xn=null,Jo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ot(l),i=1<<n;t|=e[n],l&=~i}return aa=t,ti(),a}function Vf(e,t){P=null,R.H=fn,t===vl||t===ci?(t=rs(),me=3):t===to?(t=rs(),me=4):me=t===Ro?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,dt=t,le===null&&(Ce=1,wi(e,bt(t,e.current)))}function Zf(){var e=st.current;return e===null?!0:(ie&4194048)===ie?zt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===zt:!1}function Kf(){var e=R.H;return R.H=fn,e===null?fn:e}function Jf(){var e=R.A;return R.A=ip,e}function Ui(){Ce=4,ba||(ie&4194048)!==ie&&st.current!==null||(El=!0),(Sa&134217727)===0&&(Wa&134217727)===0||je===null||za(je,ie,mt,!1)}function Po(e,t,a){var l=fe;fe|=2;var n=Kf(),i=Jf();(je!==e||ie!==t)&&(_i=null,Al(e,t)),t=!1;var o=Ce;e:do try{if(me!==0&&le!==null){var s=le,h=dt;switch(me){case 8:Io(),o=6;break e;case 3:case 2:case 9:case 6:st.current===null&&(t=!0);var w=me;if(me=0,dt=null,Cl(e,s,h,w),a&&El){o=0;break e}break;default:w=me,me=0,dt=null,Cl(e,s,h,w)}}up(),o=Ce;break}catch(C){Vf(e,C)}while(!0);return t&&e.shellSuspendCounter++,Zt=ka=null,fe=l,R.H=n,R.A=i,le===null&&(je=null,ie=0,ti()),o}function up(){for(;le!==null;)Ff(le)}function cp(e,t){var a=fe;fe|=2;var l=Kf(),n=Jf();je!==e||ie!==t?(_i=null,Mi=it()+500,Al(e,t)):El=Bl(e,t);e:do try{if(me!==0&&le!==null){t=le;var i=dt;t:switch(me){case 1:me=0,dt=null,Cl(e,t,i,1);break;case 2:case 9:if(ns(i)){me=0,dt=null,Wf(t);break}t=function(){me!==2&&me!==9||je!==e||(me=7),Ht(e)},i.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:ns(i)?(me=0,dt=null,Wf(t)):(me=0,dt=null,Cl(e,t,i,7));break;case 5:var o=null;switch(le.tag){case 26:o=le.memoizedState;case 5:case 27:var s=le;if(o?Ud(o):s.stateNode.complete){me=0,dt=null;var h=s.sibling;if(h!==null)le=h;else{var w=s.return;w!==null?(le=w,Li(w)):le=null}break t}}me=0,dt=null,Cl(e,t,i,5);break;case 6:me=0,dt=null,Cl(e,t,i,6);break;case 8:Io(),Ce=6;break e;default:throw Error(c(462))}}sp();break}catch(C){Vf(e,C)}while(!0);return Zt=ka=null,R.H=l,R.A=n,fe=a,le!==null?0:(je=null,ie=0,ti(),Ce)}function sp(){for(;le!==null&&!_m();)Ff(le)}function Ff(e){var t=xf(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?Li(e):le=t}function Wf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=mf(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=mf(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:ho(t);default:Sf(a,t),t=le=Kc(t,aa),t=xf(a,t,aa)}e.memoizedProps=e.pendingProps,t===null?Li(e):le=t}function Cl(e,t,a,l){Zt=ka=null,ho(t),yl=null,an=0;var n=t.return;try{if(Ih(e,n,t,a,ie)){Ce=1,wi(e,bt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;Ce=1,wi(e,bt(a,e.current)),le=null;return}t.flags&32768?(oe||l===1?e=!0:El||(ie&536870912)!==0?e=!1:(ba=e=!0,(l===2||l===9||l===3||l===6)&&(l=st.current,l!==null&&l.tag===13&&(l.flags|=16384))),$f(t,e)):Li(t)}function Li(e){var t=e;do{if((t.flags&32768)!==0){$f(t,ba);return}e=t.return;var a=tp(t.alternate,t,aa);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Ce===0&&(Ce=5)}function $f(e,t){do{var a=ap(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Ce=6,le=null}function If(e,t,a,l,n,i,o,s,h){e.cancelPendingCommit=null;do Hi();while(Be!==0);if((fe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=Yr,Xm(e,a,i,o,s,h),e===je&&(le=je=null,ie=0),Nl=t,wa=e,la=a,Fo=i,Wo=n,kf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hp(Bn,function(){return ld(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=H.p,H.p=2,o=fe,fe|=4;try{lp(e,t,a)}finally{fe=o,H.p=n,R.T=l}}Be=1,Pf(),ed(),td()}}function Pf(){if(Be===1){Be=0;var e=wa,t=Nl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=H.p;H.p=2;var n=fe;fe|=4;try{_f(t,e);var i=fu,o=qc(e.containerInfo),s=i.focusedElem,h=i.selectionRange;if(o!==s&&s&&s.ownerDocument&&Hc(s.ownerDocument.documentElement,s)){if(h!==null&&Ur(s)){var w=h.start,C=h.end;if(C===void 0&&(C=w),"selectionStart"in s)s.selectionStart=w,s.selectionEnd=Math.min(C,s.value.length);else{var _=s.ownerDocument||document,z=_&&_.defaultView||window;if(z.getSelection){var A=z.getSelection(),B=s.textContent.length,V=Math.min(h.start,B),ye=h.end===void 0?V:Math.min(h.end,B);!A.extend&&V>ye&&(o=ye,ye=V,V=o);var b=Lc(s,V),g=Lc(s,ye);if(b&&g&&(A.rangeCount!==1||A.anchorNode!==b.node||A.anchorOffset!==b.offset||A.focusNode!==g.node||A.focusOffset!==g.offset)){var j=_.createRange();j.setStart(b.node,b.offset),A.removeAllRanges(),V>ye?(A.addRange(j),A.extend(g.node,g.offset)):(j.setEnd(g.node,g.offset),A.addRange(j))}}}}for(_=[],A=s;A=A.parentNode;)A.nodeType===1&&_.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<_.length;s++){var D=_[s];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Fi=!!su,fu=su=null}finally{fe=n,H.p=l,R.T=a}}e.current=t,Be=2}}function ed(){if(Be===2){Be=0;var e=wa,t=Nl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=H.p;H.p=2;var n=fe;fe|=4;try{Af(e,t.alternate,t)}finally{fe=n,H.p=l,R.T=a}}Be=3}}function td(){if(Be===4||Be===3){Be=0,Om();var e=wa,t=Nl,a=la,l=kf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Be=5:(Be=0,Nl=wa=null,ad(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ja=null),gr(a),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=H.p,H.p=2,R.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var s=l[o];i(s.value,{componentStack:s.stack})}}finally{R.T=t,H.p=n}}(la&3)!==0&&Hi(),Ht(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===$o?bn++:(bn=0,$o=e):bn=0,Sn(0)}}function ad(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,en(t)))}function Hi(){return Pf(),ed(),td(),ld()}function ld(){if(Be!==5)return!1;var e=wa,t=Fo;Fo=0;var a=gr(la),l=R.T,n=H.p;try{H.p=32>a?32:a,R.T=null,a=Wo,Wo=null;var i=wa,o=la;if(Be=0,Nl=wa=null,la=0,(fe&6)!==0)throw Error(c(331));var s=fe;if(fe|=4,qf(i.current),Uf(i,i.current,o,a),fe=s,Sn(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(ql,i)}catch{}return!0}finally{H.p=n,R.T=l,ad(e,t)}}function nd(e,t,a){t=bt(a,t),t=Co(e.stateNode,t,2),e=ga(e,t,2),e!==null&&(Yl(e,2),Ht(e))}function he(e,t,a){if(e.tag===3)nd(e,e,a);else for(;t!==null;){if(t.tag===3){nd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ja===null||!ja.has(l))){e=bt(a,e),a=nf(2),l=ga(t,a,2),l!==null&&(rf(a,l,t,e),Yl(l,2),Ht(l));break}}t=t.return}}function eu(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new rp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Zo=!0,n.add(a),e=fp.bind(null,e,t,a),t.then(e,e))}function fp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(ie&a)===a&&(Ce===4||Ce===3&&(ie&62914560)===ie&&300>it()-Di?(fe&2)===0&&Al(e,0):Ko|=a,Tl===ie&&(Tl=0)),Ht(e)}function id(e,t){t===0&&(t=Iu()),e=qa(e,t),e!==null&&(Yl(e,t),Ht(e))}function dp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),id(e,a)}function mp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),id(e,a)}function hp(e,t){return dr(e,t)}var qi=null,Rl=null,tu=!1,Bi=!1,au=!1,Ea=0;function Ht(e){e!==Rl&&e.next===null&&(Rl===null?qi=Rl=e:Rl=Rl.next=e),Bi=!0,tu||(tu=!0,gp())}function Sn(e,t){if(!au&&Bi){au=!0;do for(var a=!1,l=qi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-ot(42|e)+1)-1,i&=n&~(o&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,cd(l,i))}else i=ie,i=Xn(l,l===je?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Bl(l,i)||(a=!0,cd(l,i));l=l.next}while(a);au=!1}}function pp(){rd()}function rd(){Bi=tu=!1;var e=0;Ea!==0&&Tp()&&(e=Ea);for(var t=it(),a=null,l=qi;l!==null;){var n=l.next,i=od(l,t);i===0?(l.next=null,a===null?qi=n:a.next=n,n===null&&(Rl=a)):(a=l,(e!==0||(i&3)!==0)&&(Bi=!0)),l=n}Be!==0&&Be!==5||Sn(e),Ea!==0&&(Ea=0)}function od(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-ot(i),s=1<<o,h=n[o];h===-1?((s&a)===0||(s&l)!==0)&&(n[o]=Gm(s,t)):h<=t&&(e.expiredLanes|=s),i&=~s}if(t=je,a=ie,a=Xn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&mr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&mr(l),gr(a)){case 2:case 8:a=Wu;break;case 32:a=Bn;break;case 268435456:a=$u;break;default:a=Bn}return l=ud.bind(null,e),a=dr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&mr(l),e.callbackPriority=2,e.callbackNode=null,2}function ud(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hi()&&e.callbackNode!==a)return null;var l=ie;return l=Xn(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Xf(e,l,t),od(e,it()),e.callbackNode!=null&&e.callbackNode===a?ud.bind(null,e):null)}function cd(e,t){if(Hi())return null;Xf(e,t,!0)}function gp(){Ap(function(){(fe&6)!==0?dr(Fu,pp):rd()})}function lu(){if(Ea===0){var e=pl;e===0&&(e=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),Ea=e}return Ea}function sd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function fd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function vp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=sd((n[Ie]||null).action),o=l.submitter;o&&(t=(t=o[Ie]||null)?sd(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var s=new $n("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ea!==0){var h=o?fd(n,o):new FormData(n);wo(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=o?fd(n,o):new FormData(n),wo(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var nu=0;nu<Br.length;nu++){var iu=Br[nu],yp=iu.toLowerCase(),xp=iu[0].toUpperCase()+iu.slice(1);Ct(yp,"on"+xp)}Ct(kc,"onAnimationEnd"),Ct(Gc,"onAnimationIteration"),Ct(Xc,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(Uh,"onTransitionRun"),Ct(Lh,"onTransitionStart"),Ct(Hh,"onTransitionCancel"),Ct(Qc,"onTransitionEnd"),tl("onMouseEnter",["mouseout","mouseover"]),tl("onMouseLeave",["mouseout","mouseover"]),tl("onPointerEnter",["pointerout","pointerover"]),tl("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jn));function dd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var s=l[o],h=s.instance,w=s.currentTarget;if(s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=w;try{i(n)}catch(C){ei(C)}n.currentTarget=null,i=h}else for(o=0;o<l.length;o++){if(s=l[o],h=s.instance,w=s.currentTarget,s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=w;try{i(n)}catch(C){ei(C)}n.currentTarget=null,i=h}}}}function ne(e,t){var a=t[vr];a===void 0&&(a=t[vr]=new Set);var l=e+"__bubble";a.has(l)||(md(t,e,2,!1),a.add(l))}function ru(e,t,a){var l=0;t&&(l|=4),md(a,e,l,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function ou(e){if(!e[Yi]){e[Yi]=!0,ic.forEach(function(a){a!=="selectionchange"&&(bp.has(a)||ru(a,!1,e),ru(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,ru("selectionchange",!1,t))}}function md(e,t,a,l){switch(Gd(t)){case 2:var n=Jp;break;case 8:n=Fp;break;default:n=ju}a=n.bind(null,t,a,e),n=void 0,!Tr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function uu(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var s=l.stateNode.containerInfo;if(s===n)break;if(o===4)for(o=l.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;s!==null;){if(o=Ia(s),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){l=i=o;continue e}s=s.parentNode}}l=l.return}vc(function(){var w=i,C=zr(a),_=[];e:{var z=Vc.get(e);if(z!==void 0){var A=$n,B=e;switch(e){case"keypress":if(Fn(a)===0)break e;case"keydown":case"keyup":A=mh;break;case"focusin":B="focus",A=Rr;break;case"focusout":B="blur",A=Rr;break;case"beforeblur":case"afterblur":A=Rr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=gh;break;case kc:case Gc:case Xc:A=nh;break;case Qc:A=yh;break;case"scroll":case"scrollend":A=Pm;break;case"wheel":A=bh;break;case"copy":case"cut":case"paste":A=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=jc;break;case"toggle":case"beforetoggle":A=jh}var V=(t&4)!==0,ye=!V&&(e==="scroll"||e==="scrollend"),b=V?z!==null?z+"Capture":null:z;V=[];for(var g=w,j;g!==null;){var D=g;if(j=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||j===null||b===null||(D=Xl(g,b),D!=null&&V.push(wn(g,D,j))),ye)break;g=g.return}0<V.length&&(z=new A(z,B,null,a,C),_.push({event:z,listeners:V}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",z&&a!==wr&&(B=a.relatedTarget||a.fromElement)&&(Ia(B)||B[$a]))break e;if((A||z)&&(z=C.window===C?C:(z=C.ownerDocument)?z.defaultView||z.parentWindow:window,A?(B=a.relatedTarget||a.toElement,A=w,B=B?Ia(B):null,B!==null&&(ye=p(B),V=B.tag,B!==ye||V!==5&&V!==27&&V!==6)&&(B=null)):(A=null,B=w),A!==B)){if(V=bc,D="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(V=jc,D="onPointerLeave",b="onPointerEnter",g="pointer"),ye=A==null?z:Gl(A),j=B==null?z:Gl(B),z=new V(D,g+"leave",A,a,C),z.target=ye,z.relatedTarget=j,D=null,Ia(C)===w&&(V=new V(b,g+"enter",B,a,C),V.target=j,V.relatedTarget=ye,D=V),ye=D,A&&B)t:{for(V=Sp,b=A,g=B,j=0,D=b;D;D=V(D))j++;D=0;for(var X=g;X;X=V(X))D++;for(;0<j-D;)b=V(b),j--;for(;0<D-j;)g=V(g),D--;for(;j--;){if(b===g||g!==null&&b===g.alternate){V=b;break t}b=V(b),g=V(g)}V=null}else V=null;A!==null&&hd(_,z,A,V,!1),B!==null&&ye!==null&&hd(_,ye,B,V,!0)}}e:{if(z=w?Gl(w):window,A=z.nodeName&&z.nodeName.toLowerCase(),A==="select"||A==="input"&&z.type==="file")var ue=Rc;else if(Ac(z))if(Dc)ue=Mh;else{ue=Rh;var G=Ch}else A=z.nodeName,!A||A.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?w&&jr(w.elementType)&&(ue=Rc):ue=Dh;if(ue&&(ue=ue(e,w))){Cc(_,ue,a,C);break e}G&&G(e,z,w),e==="focusout"&&w&&z.type==="number"&&w.memoizedProps.value!=null&&Sr(z,"number",z.value)}switch(G=w?Gl(w):window,e){case"focusin":(Ac(G)||G.contentEditable==="true")&&(ol=G,Lr=w,$l=null);break;case"focusout":$l=Lr=ol=null;break;case"mousedown":Hr=!0;break;case"contextmenu":case"mouseup":case"dragend":Hr=!1,Bc(_,a,C);break;case"selectionchange":if(Oh)break;case"keydown":case"keyup":Bc(_,a,C)}var te;if(Mr)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else rl?Tc(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(wc&&a.locale!=="ko"&&(rl||re!=="onCompositionStart"?re==="onCompositionEnd"&&rl&&(te=yc()):(ca=C,Nr="value"in ca?ca.value:ca.textContent,rl=!0)),G=ki(w,re),0<G.length&&(re=new Sc(re,e,null,a,C),_.push({event:re,listeners:G}),te?re.data=te:(te=Nc(a),te!==null&&(re.data=te)))),(te=zh?Eh(e,a):Th(e,a))&&(re=ki(w,"onBeforeInput"),0<re.length&&(G=new Sc("onBeforeInput","beforeinput",null,a,C),_.push({event:G,listeners:re}),G.data=te)),vp(_,e,w,a,C)}dd(_,t)})}function wn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ki(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Xl(e,a),n!=null&&l.unshift(wn(e,n,i)),n=Xl(e,t),n!=null&&l.push(wn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Sp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hd(e,t,a,l,n){for(var i=t._reactName,o=[];a!==null&&a!==l;){var s=a,h=s.alternate,w=s.stateNode;if(s=s.tag,h!==null&&h===l)break;s!==5&&s!==26&&s!==27||w===null||(h=w,n?(w=Xl(a,i),w!=null&&o.unshift(wn(a,w,h))):n||(w=Xl(a,i),w!=null&&o.push(wn(a,w,h)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var jp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function pd(e){return(typeof e=="string"?e:""+e).replace(jp,`
`).replace(wp,"")}function gd(e,t){return t=pd(t),pd(e)===t}function ve(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ll(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ll(e,""+l);break;case"className":Vn(e,"class",l);break;case"tabIndex":Vn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Vn(e,a,l);break;case"style":pc(e,l,i);break;case"data":if(t!=="object"){Vn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ve(e,t,"name",n.name,n,null),ve(e,t,"formEncType",n.formEncType,n,null),ve(e,t,"formMethod",n.formMethod,n,null),ve(e,t,"formTarget",n.formTarget,n,null)):(ve(e,t,"encType",n.encType,n,null),ve(e,t,"method",n.method,n,null),ve(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Qn(e,"popover",l);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Qn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$m.get(a)||a,Qn(e,a,l))}}function cu(e,t,a,l,n,i){switch(a){case"style":pc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ll(e,l):(typeof l=="number"||typeof l=="bigint")&&ll(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ie]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Qn(e,a,l)}}}function Ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ve(e,t,i,o,a,null)}}n&&ve(e,t,"srcSet",a.srcSet,a,null),l&&ve(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var s=i=o=n=null,h=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var C=a[l];if(C!=null)switch(l){case"name":n=C;break;case"type":o=C;break;case"checked":h=C;break;case"defaultChecked":w=C;break;case"value":i=C;break;case"defaultValue":s=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:ve(e,t,l,C,a,null)}}fc(e,i,s,h,w,o,n,!1);return;case"select":ne("invalid",e),l=o=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":o=s;break;case"multiple":l=s;default:ve(e,t,n,s,a,null)}t=i,a=o,e.multiple=!!l,t!=null?al(e,!!l,t,!1):a!=null&&al(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:ve(e,t,o,s,a,null)}mc(e,l,n,i);return;case"option":for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null)&&(h==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ve(e,t,h,l,a,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<jn.length;l++)ne(jn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ve(e,t,w,l,a,null)}return;default:if(jr(t)){for(C in a)a.hasOwnProperty(C)&&(l=a[C],l!==void 0&&cu(e,t,C,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&ve(e,t,s,l,a,null))}function zp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,s=null,h=null,w=null,C=null;for(A in a){var _=a[A];if(a.hasOwnProperty(A)&&_!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":h=_;default:l.hasOwnProperty(A)||ve(e,t,A,null,l,_)}}for(var z in l){var A=l[z];if(_=a[z],l.hasOwnProperty(z)&&(A!=null||_!=null))switch(z){case"type":i=A;break;case"name":n=A;break;case"checked":w=A;break;case"defaultChecked":C=A;break;case"value":o=A;break;case"defaultValue":s=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:A!==_&&ve(e,t,z,A,l,_)}}br(e,o,s,h,w,C,i,n);return;case"select":A=o=s=z=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":A=h;default:l.hasOwnProperty(i)||ve(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":z=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:i!==h&&ve(e,t,n,i,l,h)}t=s,a=o,l=A,z!=null?al(e,!!a,z,!1):!!l!=!!a&&(t!=null?al(e,!!a,t,!0):al(e,!!a,a?[]:"",!1));return;case"textarea":A=z=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ve(e,t,s,null,l,n)}for(o in l)if(n=l[o],i=a[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":z=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&ve(e,t,o,n,l,i)}dc(e,z,A);return;case"option":for(var B in a)z=a[B],a.hasOwnProperty(B)&&z!=null&&!l.hasOwnProperty(B)&&(B==="selected"?e.selected=!1:ve(e,t,B,null,l,z));for(h in l)z=l[h],A=a[h],l.hasOwnProperty(h)&&z!==A&&(z!=null||A!=null)&&(h==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":ve(e,t,h,z,l,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in a)z=a[V],a.hasOwnProperty(V)&&z!=null&&!l.hasOwnProperty(V)&&ve(e,t,V,null,l,z);for(w in l)if(z=l[w],A=a[w],l.hasOwnProperty(w)&&z!==A&&(z!=null||A!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:ve(e,t,w,z,l,A)}return;default:if(jr(t)){for(var ye in a)z=a[ye],a.hasOwnProperty(ye)&&z!==void 0&&!l.hasOwnProperty(ye)&&cu(e,t,ye,void 0,l,z);for(C in l)z=l[C],A=a[C],!l.hasOwnProperty(C)||z===A||z===void 0&&A===void 0||cu(e,t,C,z,l,A);return}}for(var b in a)z=a[b],a.hasOwnProperty(b)&&z!=null&&!l.hasOwnProperty(b)&&ve(e,t,b,null,l,z);for(_ in l)z=l[_],A=a[_],!l.hasOwnProperty(_)||z===A||z==null&&A==null||ve(e,t,_,z,l,A)}function vd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ep(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,o=n.initiatorType,s=n.duration;if(i&&s&&vd(o)){for(o=0,s=n.responseEnd,l+=1;l<a.length;l++){var h=a[l],w=h.startTime;if(w>s)break;var C=h.transferSize,_=h.initiatorType;C&&vd(_)&&(h=h.responseEnd,o+=C*(h<s?1:(s-w)/(h-w)))}if(--l,t+=8*(i+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var su=null,fu=null;function Gi(e){return e.nodeType===9?e:e.ownerDocument}function yd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function du(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=null;function Tp(){var e=window.event;return e&&e.type==="popstate"?e===mu?!1:(mu=e,!0):(mu=null,!1)}var bd=typeof setTimeout=="function"?setTimeout:void 0,Np=typeof clearTimeout=="function"?clearTimeout:void 0,Sd=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof Sd<"u"?function(e){return Sd.resolve(null).then(e).catch(Cp)}:bd;function Cp(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function jd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ol(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")zn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zn(a);for(var i=a.firstChild;i;){var o=i.nextSibling,s=i.nodeName;i[kl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&zn(e.ownerDocument.body);a=n}while(a);Ol(t)}function wd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function hu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hu(a),yr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Rp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[kl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function Dp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Et(e.nextSibling),e===null))return null;return e}function zd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Et(e.nextSibling),e===null))return null;return e}function pu(e){return e.data==="$?"||e.data==="$~"}function gu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vu=null;function Ed(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Et(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Nd(e,t,a){switch(t=Gi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function zn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yr(e)}var Tt=new Map,Ad=new Set;function Xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=H.d;H.d={f:_p,r:Op,D:Up,C:Lp,L:Hp,m:qp,X:Yp,S:Bp,M:kp};function _p(){var e=na.f(),t=Oi();return e||t}function Op(e){var t=Pa(e);t!==null&&t.tag===5&&t.type==="form"?Qs(t):na.r(e)}var Dl=typeof document>"u"?null:document;function Cd(e,t,a){var l=Dl;if(l&&typeof t=="string"&&t){var n=yt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Ad.has(n)||(Ad.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ze(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Up(e){na.D(e),Cd("dns-prefetch",e,null)}function Lp(e,t){na.C(e,t),Cd("preconnect",e,t)}function Hp(e,t,a){na.L(e,t,a);var l=Dl;if(l&&e&&t){var n='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+yt(a.imageSizes)+'"]')):n+='[href="'+yt(e)+'"]';var i=n;switch(t){case"style":i=Ml(e);break;case"script":i=_l(e)}Tt.has(i)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(En(i))||t==="script"&&l.querySelector(Tn(i))||(t=l.createElement("link"),Ze(t,"link",e),Ye(t),l.head.appendChild(t)))}}function qp(e,t){na.m(e,t);var a=Dl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=_l(e)}if(!Tt.has(i)&&(e=N({rel:"modulepreload",href:e},t),Tt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tn(i)))return}l=a.createElement("link"),Ze(l,"link",e),Ye(l),a.head.appendChild(l)}}}function Bp(e,t,a){na.S(e,t,a);var l=Dl;if(l&&e){var n=el(l).hoistableStyles,i=Ml(e);t=t||"default";var o=n.get(i);if(!o){var s={loading:0,preload:null};if(o=l.querySelector(En(i)))s.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(i))&&yu(e,a);var h=o=l.createElement("link");Ye(h),Ze(h,"link",e),h._p=new Promise(function(w,C){h.onload=w,h.onerror=C}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Qi(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:s},n.set(i,o)}}}function Yp(e,t){na.X(e,t);var a=Dl;if(a&&e){var l=el(a).hoistableScripts,n=_l(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=N({src:e,async:!0},t),(t=Tt.get(n))&&xu(e,t),i=a.createElement("script"),Ye(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function kp(e,t){na.M(e,t);var a=Dl;if(a&&e){var l=el(a).hoistableScripts,n=_l(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=N({src:e,async:!0,type:"module"},t),(t=Tt.get(n))&&xu(e,t),i=a.createElement("script"),Ye(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Rd(e,t,a,l){var n=(n=ae.current)?Xi(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ml(a.href),a=el(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ml(a.href);var i=el(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(En(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),i||Gp(n,e,a,o.state))),t&&l===null)throw Error(c(528,""));return o}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_l(a),a=el(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ml(e){return'href="'+yt(e)+'"'}function En(e){return'link[rel="stylesheet"]['+e+"]"}function Dd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Gp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ze(t,"link",a),Ye(t),e.head.appendChild(t))}function _l(e){return'[src="'+yt(e)+'"]'}function Tn(e){return"script[async]"+e}function Md(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+yt(a.href)+'"]');if(l)return t.instance=l,Ye(l),l;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ye(l),Ze(l,"style",n),Qi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ml(a.href);var i=e.querySelector(En(n));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;l=Dd(a),(n=Tt.get(n))&&yu(l,n),i=(e.ownerDocument||e).createElement("link"),Ye(i);var o=i;return o._p=new Promise(function(s,h){o.onload=s,o.onerror=h}),Ze(i,"link",l),t.state.loading|=4,Qi(i,a.precedence,e),t.instance=i;case"script":return i=_l(a.src),(n=e.querySelector(Tn(i)))?(t.instance=n,Ye(n),n):(l=a,(n=Tt.get(i))&&(l=N({},a),xu(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ye(n),Ze(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Qi(l,a.precedence,e));return t.instance}function Qi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var s=l[o];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function yu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vi=null;function _d(e,t,a){if(Vi===null){var l=new Map,n=Vi=new Map;n.set(a,l)}else n=Vi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[kl]||i[Ge]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var s=l.get(o);s?s.push(i):l.set(o,[i])}}return l}function Od(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Xp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ud(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ml(l.href),i=t.querySelector(En(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ye(i);return}i=t.ownerDocument||t,l=Dd(l),(n=Tt.get(n))&&yu(l,n),i=i.createElement("link"),Ye(i);var o=i;o._p=new Promise(function(s,h){o.onload=s,o.onerror=h}),Ze(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var bu=0;function Vp(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&bu===0&&(bu=62500*Ep());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>bu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Zi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(Zp,e),Ki=null,Zi.call(e))}function Zp(e,t){if(!(t.state.loading&4)){var a=Ki.get(e);if(a)var l=a.get(null);else{a=new Map,Ki.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),i=a.get(o)||l,i===l&&a.set(null,n),a.set(o,n),this.count++,l=Zi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Nn={$$typeof:J,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Kp(e,t,a,l,n,i,o,s,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hr(0),this.hiddenUpdates=hr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Ld(e,t,a,l,n,i,o,s,h,w,C,_){return e=new Kp(e,t,a,o,h,w,C,_,s),t=1,i===!0&&(t|=24),i=ct(3,null,null,t),e.current=i,i.stateNode=e,t=Ir(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ao(i),e}function Hd(e){return e?(e=sl,e):sl}function qd(e,t,a,l,n,i){n=Hd(n),l.context===null?l.context=n:l.pendingContext=n,l=pa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ga(e,l,t),a!==null&&(nt(a,e,t),nn(a,e,t))}function Bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Su(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function Yd(e){if(e.tag===13||e.tag===31){var t=qa(e,67108864);t!==null&&nt(t,e,67108864),Su(e,67108864)}}function kd(e){if(e.tag===13||e.tag===31){var t=ht();t=pr(t);var a=qa(e,t);a!==null&&nt(a,e,t),Su(e,t)}}var Fi=!0;function Jp(e,t,a,l){var n=R.T;R.T=null;var i=H.p;try{H.p=2,ju(e,t,a,l)}finally{H.p=i,R.T=n}}function Fp(e,t,a,l){var n=R.T;R.T=null;var i=H.p;try{H.p=8,ju(e,t,a,l)}finally{H.p=i,R.T=n}}function ju(e,t,a,l){if(Fi){var n=wu(l);if(n===null)uu(e,t,l,Wi,a),Xd(e,l);else if($p(n,e,t,a,l))l.stopPropagation();else if(Xd(e,l),t&4&&-1<Wp.indexOf(e)){for(;n!==null;){var i=Pa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=_a(i.pendingLanes);if(o!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var h=1<<31-ot(o);s.entanglements[1]|=h,o&=~h}Ht(i),(fe&6)===0&&(Mi=it()+500,Sn(0))}}break;case 31:case 13:s=qa(i,2),s!==null&&nt(s,i,2),Oi(),Su(i,2)}if(i=wu(l),i===null&&uu(e,t,l,Wi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else uu(e,t,l,null,a)}}function wu(e){return e=zr(e),zu(e)}var Wi=null;function zu(e){if(Wi=null,e=Ia(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wi=e,null}function Gd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Um()){case Fu:return 2;case Wu:return 8;case Bn:case Lm:return 32;case $u:return 268435456;default:return 32}default:return 32}}var Eu=!1,Na=null,Aa=null,Ca=null,An=new Map,Cn=new Map,Ra=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xd(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function Rn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Pa(t),t!==null&&Yd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function $p(e,t,a,l,n){switch(t){case"focusin":return Na=Rn(Na,e,t,a,l,n),!0;case"dragenter":return Aa=Rn(Aa,e,t,a,l,n),!0;case"mouseover":return Ca=Rn(Ca,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return An.set(i,Rn(An.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Cn.set(i,Rn(Cn.get(i)||null,e,t,a,l,n)),!0}return!1}function Qd(e){var t=Ia(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,lc(e.priority,function(){kd(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,lc(e.priority,function(){kd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=wu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);wr=l,a.target.dispatchEvent(l),wr=null}else return t=Pa(a),t!==null&&Yd(t),e.blockedOn=a,!1;t.shift()}return!0}function Vd(e,t,a){$i(e)&&a.delete(t)}function Ip(){Eu=!1,Na!==null&&$i(Na)&&(Na=null),Aa!==null&&$i(Aa)&&(Aa=null),Ca!==null&&$i(Ca)&&(Ca=null),An.forEach(Vd),Cn.forEach(Vd)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Eu||(Eu=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Ip)))}var Pi=null;function Zd(e){Pi!==e&&(Pi=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(zu(l||a)===null)continue;break}var i=Pa(a);i!==null&&(e.splice(t,3),t-=3,wo(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ol(e){function t(h){return Ii(h,e)}Na!==null&&Ii(Na,e),Aa!==null&&Ii(Aa,e),Ca!==null&&Ii(Ca,e),An.forEach(t),Cn.forEach(t);for(var a=0;a<Ra.length;a++){var l=Ra[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Qd(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],o=n[Ie]||null;if(typeof i=="function")o||Zd(a);else if(o){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[Ie]||null)s=o.formAction;else if(zu(n)!==null)continue}else s=o.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Zd(a)}}}function Kd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Tu(e){this._internalRoot=e}er.prototype.render=Tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=ht();qd(a,l,e,t,null,null)},er.prototype.unmount=Tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qd(e.current,2,null,e,null,null),Oi(),t[$a]=null}};function er(e){this._internalRoot=e}er.prototype.unstable_scheduleHydration=function(e){if(e){var t=ac();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ra.length&&t!==0&&t<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&Qd(e)}};var Jd=f.version;if(Jd!=="19.2.5")throw Error(c(527,Jd,"19.2.5"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=y(t),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var Pp={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tr.isDisabled&&tr.supportsFiber)try{ql=tr.inject(Pp),rt=tr}catch{}}return Mn.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,l="",n=ef,i=tf,o=af;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ld(e,1,!1,null,null,a,l,null,n,i,o,Kd),e[$a]=t.current,ou(e),new Tu(t)},Mn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var l=!1,n="",i=ef,o=tf,s=af,h=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(h=a.formState)),t=Ld(e,1,!0,t,a??null,l,n,h,i,o,s,Kd),t.context=Hd(null),a=t.current,l=ht(),l=pr(l),n=pa(l),n.callback=null,ga(a,n,l),a=l,t.current.lanes=a,Yl(t,a),Ht(t),e[$a]=t.current,ou(e),new er(t)},Mn.version="19.2.5",Mn}var nm;function cg(){if(nm)return Au.exports;nm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Au.exports=ug(),Au.exports}var sg=cg(),E=qu();var im="popstate";function rm(u){return typeof u=="object"&&u!=null&&"pathname"in u&&"search"in u&&"hash"in u&&"state"in u&&"key"in u}function fg(u={}){function f(c,m){let p=m.state?.masked,{pathname:v,search:T,hash:S}=p||c.location;return Lu("",{pathname:v,search:T,hash:S},m.state&&m.state.usr||null,m.state&&m.state.key||"default",p?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function d(c,m){return typeof m=="string"?m:On(m)}return mg(f,d,null,u)}function Ne(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function Bt(u,f){if(!u){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function dg(){return Math.random().toString(36).substring(2,10)}function om(u,f){return{usr:u.state,key:u.key,idx:f,masked:u.unstable_mask?{pathname:u.pathname,search:u.search,hash:u.hash}:void 0}}function Lu(u,f,d=null,c,m){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof f=="string"?Ul(f):f,state:d,key:f&&f.key||c||dg(),unstable_mask:m}}function On({pathname:u="/",search:f="",hash:d=""}){return f&&f!=="?"&&(u+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(u+=d.charAt(0)==="#"?d:"#"+d),u}function Ul(u){let f={};if(u){let d=u.indexOf("#");d>=0&&(f.hash=u.substring(d),u=u.substring(0,d));let c=u.indexOf("?");c>=0&&(f.search=u.substring(c),u=u.substring(0,c)),u&&(f.pathname=u)}return f}function mg(u,f,d,c={}){let{window:m=document.defaultView,v5Compat:p=!1}=c,v=m.history,T="POP",S=null,y=M();y==null&&(y=0,v.replaceState({...v.state,idx:y},""));function M(){return(v.state||{idx:null}).idx}function N(){T="POP";let U=M(),K=U==null?null:U-y;y=U,S&&S({action:T,location:Y.location,delta:K})}function L(U,K){T="PUSH";let ee=rm(U)?U:Lu(Y.location,U,K);y=M()+1;let J=om(ee,y),xe=Y.createHref(ee.unstable_mask||ee);try{v.pushState(J,"",xe)}catch(be){if(be instanceof DOMException&&be.name==="DataCloneError")throw be;m.location.assign(xe)}p&&S&&S({action:T,location:Y.location,delta:1})}function Z(U,K){T="REPLACE";let ee=rm(U)?U:Lu(Y.location,U,K);y=M();let J=om(ee,y),xe=Y.createHref(ee.unstable_mask||ee);v.replaceState(J,"",xe),p&&S&&S({action:T,location:Y.location,delta:0})}function Q(U){return hg(U)}let Y={get action(){return T},get location(){return u(m,v)},listen(U){if(S)throw new Error("A history only accepts one active listener");return m.addEventListener(im,N),S=U,()=>{m.removeEventListener(im,N),S=null}},createHref(U){return f(m,U)},createURL:Q,encodeLocation(U){let K=Q(U);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:L,replace:Z,go(U){return v.go(U)}};return Y}function hg(u,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(d,"No window.location.(origin|href) available to create URL");let c=typeof u=="string"?u:On(u);return c=c.replace(/ $/,"%20"),!f&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function mm(u,f,d="/"){return pg(u,f,d,!1)}function pg(u,f,d,c){let m=typeof f=="string"?Ul(f):f,p=ia(m.pathname||"/",d);if(p==null)return null;let v=hm(u);gg(v);let T=null;for(let S=0;T==null&&S<v.length;++S){let y=Ng(p);T=Eg(v[S],y,c)}return T}function hm(u,f=[],d=[],c="",m=!1){let p=(v,T,S=m,y)=>{let M={relativePath:y===void 0?v.path||"":y,caseSensitive:v.caseSensitive===!0,childrenIndex:T,route:v};if(M.relativePath.startsWith("/")){if(!M.relativePath.startsWith(c)&&S)return;Ne(M.relativePath.startsWith(c),`Absolute route path "${M.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),M.relativePath=M.relativePath.slice(c.length)}let N=qt([c,M.relativePath]),L=d.concat(M);v.children&&v.children.length>0&&(Ne(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),hm(v.children,f,L,N,S)),!(v.path==null&&!v.index)&&f.push({path:N,score:wg(N,v.index),routesMeta:L})};return u.forEach((v,T)=>{if(v.path===""||!v.path?.includes("?"))p(v,T);else for(let S of pm(v.path))p(v,T,!0,S)}),f}function pm(u){let f=u.split("/");if(f.length===0)return[];let[d,...c]=f,m=d.endsWith("?"),p=d.replace(/\?$/,"");if(c.length===0)return m?[p,""]:[p];let v=pm(c.join("/")),T=[];return T.push(...v.map(S=>S===""?p:[p,S].join("/"))),m&&T.push(...v),T.map(S=>u.startsWith("/")&&S===""?"/":S)}function gg(u){u.sort((f,d)=>f.score!==d.score?d.score-f.score:zg(f.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var vg=/^:[\w-]+$/,yg=3,xg=2,bg=1,Sg=10,jg=-2,um=u=>u==="*";function wg(u,f){let d=u.split("/"),c=d.length;return d.some(um)&&(c+=jg),f&&(c+=xg),d.filter(m=>!um(m)).reduce((m,p)=>m+(vg.test(p)?yg:p===""?bg:Sg),c)}function zg(u,f){return u.length===f.length&&u.slice(0,-1).every((c,m)=>c===f[m])?u[u.length-1]-f[f.length-1]:0}function Eg(u,f,d=!1){let{routesMeta:c}=u,m={},p="/",v=[];for(let T=0;T<c.length;++T){let S=c[T],y=T===c.length-1,M=p==="/"?f:f.slice(p.length)||"/",N=ir({path:S.relativePath,caseSensitive:S.caseSensitive,end:y},M),L=S.route;if(!N&&y&&d&&!c[c.length-1].route.index&&(N=ir({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},M)),!N)return null;Object.assign(m,N.params),v.push({params:m,pathname:qt([p,N.pathname]),pathnameBase:Dg(qt([p,N.pathnameBase])),route:L}),N.pathnameBase!=="/"&&(p=qt([p,N.pathnameBase]))}return v}function ir(u,f){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[d,c]=Tg(u.path,u.caseSensitive,u.end),m=f.match(d);if(!m)return null;let p=m[0],v=p.replace(/(.)\/+$/,"$1"),T=m.slice(1);return{params:c.reduce((y,{paramName:M,isOptional:N},L)=>{if(M==="*"){let Q=T[L]||"";v=p.slice(0,p.length-Q.length).replace(/(.)\/+$/,"$1")}const Z=T[L];return N&&!Z?y[M]=void 0:y[M]=(Z||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:v,pattern:u}}function Tg(u,f=!1,d=!0){Bt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let c=[],m="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,T,S,y,M)=>{if(c.push({paramName:T,isOptional:S!=null}),S){let N=M.charAt(y+v.length);return N&&N!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(c.push({paramName:"*"}),m+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":u!==""&&u!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),c]}function Ng(u){try{return u.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Bt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),u}}function ia(u,f){if(f==="/")return u;if(!u.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,c=u.charAt(d);return c&&c!=="/"?null:u.slice(d)||"/"}var Ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Cg(u,f="/"){let{pathname:d,search:c="",hash:m=""}=typeof u=="string"?Ul(u):u,p;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?p=cm(d.substring(1),"/"):p=cm(d,f)):p=f,{pathname:p,search:Mg(c),hash:_g(m)}}function cm(u,f){let d=f.replace(/\/+$/,"").split("/");return u.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function _u(u,f,d,c){return`Cannot include a '${u}' character in a manually specified \`to.${f}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Rg(u){return u.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function gm(u){let f=Rg(u);return f.map((d,c)=>c===f.length-1?d.pathname:d.pathnameBase)}function Bu(u,f,d,c=!1){let m;typeof u=="string"?m=Ul(u):(m={...u},Ne(!m.pathname||!m.pathname.includes("?"),_u("?","pathname","search",m)),Ne(!m.pathname||!m.pathname.includes("#"),_u("#","pathname","hash",m)),Ne(!m.search||!m.search.includes("#"),_u("#","search","hash",m)));let p=u===""||m.pathname==="",v=p?"/":m.pathname,T;if(v==null)T=d;else{let N=f.length-1;if(!c&&v.startsWith("..")){let L=v.split("/");for(;L[0]==="..";)L.shift(),N-=1;m.pathname=L.join("/")}T=N>=0?f[N]:"/"}let S=Cg(m,T),y=v&&v!=="/"&&v.endsWith("/"),M=(p||v===".")&&d.endsWith("/");return!S.pathname.endsWith("/")&&(y||M)&&(S.pathname+="/"),S}var qt=u=>u.join("/").replace(/\/\/+/g,"/"),Dg=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),Mg=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,_g=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,Og=class{constructor(u,f,d,c=!1){this.status=u,this.statusText=f||"",this.internal=c,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function Ug(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function Lg(u){return u.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ym(u,f){let d=u;if(typeof d!="string"||!Ag.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let c=d,m=!1;if(vm)try{let p=new URL(window.location.href),v=d.startsWith("//")?new URL(p.protocol+d):new URL(d),T=ia(v.pathname,f);v.origin===p.origin&&T!=null?d=T+v.search+v.hash:m=!0}catch{Bt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:m,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var xm=["POST","PUT","PATCH","DELETE"];new Set(xm);var Hg=["GET",...xm];new Set(Hg);var Ll=E.createContext(null);Ll.displayName="DataRouter";var rr=E.createContext(null);rr.displayName="DataRouterState";var bm=E.createContext(!1);function qg(){return E.useContext(bm)}var Sm=E.createContext({isTransitioning:!1});Sm.displayName="ViewTransition";var Bg=E.createContext(new Map);Bg.displayName="Fetchers";var Yg=E.createContext(null);Yg.displayName="Await";var At=E.createContext(null);At.displayName="Navigation";var Un=E.createContext(null);Un.displayName="Location";var ra=E.createContext({outlet:null,matches:[],isDataRoute:!1});ra.displayName="Route";var Yu=E.createContext(null);Yu.displayName="RouteError";var jm="REACT_ROUTER_ERROR",kg="REDIRECT",Gg="ROUTE_ERROR_RESPONSE";function Xg(u){if(u.startsWith(`${jm}:${kg}:{`))try{let f=JSON.parse(u.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function Qg(u){if(u.startsWith(`${jm}:${Gg}:{`))try{let f=JSON.parse(u.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new Og(f.status,f.statusText,f.data)}catch{}}function Vg(u,{relative:f}={}){Ne(Ln(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=E.useContext(At),{hash:m,pathname:p,search:v}=Hn(u,{relative:f}),T=p;return d!=="/"&&(T=p==="/"?d:qt([d,p])),c.createHref({pathname:T,search:v,hash:m})}function Ln(){return E.useContext(Un)!=null}function Yt(){return Ne(Ln(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Un).location}var wm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zm(u){E.useContext(At).static||E.useLayoutEffect(u)}function Zg(){let{isDataRoute:u}=E.useContext(ra);return u?i0():Kg()}function Kg(){Ne(Ln(),"useNavigate() may be used only in the context of a <Router> component.");let u=E.useContext(Ll),{basename:f,navigator:d}=E.useContext(At),{matches:c}=E.useContext(ra),{pathname:m}=Yt(),p=JSON.stringify(gm(c)),v=E.useRef(!1);return zm(()=>{v.current=!0}),E.useCallback((S,y={})=>{if(Bt(v.current,wm),!v.current)return;if(typeof S=="number"){d.go(S);return}let M=Bu(S,JSON.parse(p),m,y.relative==="path");u==null&&f!=="/"&&(M.pathname=M.pathname==="/"?f:qt([f,M.pathname])),(y.replace?d.replace:d.push)(M,y.state,y)},[f,d,p,m,u])}E.createContext(null);function Hn(u,{relative:f}={}){let{matches:d}=E.useContext(ra),{pathname:c}=Yt(),m=JSON.stringify(gm(d));return E.useMemo(()=>Bu(u,JSON.parse(m),c,f==="path"),[u,m,c,f])}function Jg(u,f){return Em(u,f)}function Em(u,f,d){Ne(Ln(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=E.useContext(At),{matches:m}=E.useContext(ra),p=m[m.length-1],v=p?p.params:{},T=p?p.pathname:"/",S=p?p.pathnameBase:"/",y=p&&p.route;{let U=y&&y.path||"";Nm(T,!y||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${T}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let M=Yt(),N;if(f){let U=typeof f=="string"?Ul(f):f;Ne(S==="/"||U.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${U.pathname}" was given in the \`location\` prop.`),N=U}else N=M;let L=N.pathname||"/",Z=L;if(S!=="/"){let U=S.replace(/^\//,"").split("/");Z="/"+L.replace(/^\//,"").split("/").slice(U.length).join("/")}let Q=mm(u,{pathname:Z});Bt(y||Q!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Bt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=Pg(Q&&Q.map(U=>Object.assign({},U,{params:Object.assign({},v,U.params),pathname:qt([S,c.encodeLocation?c.encodeLocation(U.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?S:qt([S,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),m,d);return f&&Y?E.createElement(Un.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...N},navigationType:"POP"}},Y):Y}function Fg(){let u=n0(),f=Ug(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),d=u instanceof Error?u.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},v=null;return console.error("Error handled by React Router default ErrorBoundary:",u),v=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:p},"ErrorBoundary")," or"," ",E.createElement("code",{style:p},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},f),d?E.createElement("pre",{style:m},d):null,v)}var Wg=E.createElement(Fg,null),Tm=class extends E.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,f){return f.location!==u.location||f.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:f.error,location:f.location,revalidation:u.revalidation||f.revalidation}}componentDidCatch(u,f){this.props.onError?this.props.onError(u,f):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const d=Qg(u.digest);d&&(u=d)}let f=u!==void 0?E.createElement(ra.Provider,{value:this.props.routeContext},E.createElement(Yu.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?E.createElement($g,{error:u},f):f}};Tm.contextType=bm;var Ou=new WeakMap;function $g({children:u,error:f}){let{basename:d}=E.useContext(At);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let c=Xg(f.digest);if(c){let m=Ou.get(f);if(m)throw m;let p=ym(c.location,d);if(vm&&!Ou.get(f))if(p.isExternal||c.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Ou.set(f,v),v}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return u}function Ig({routeContext:u,match:f,children:d}){let c=E.useContext(Ll);return c&&c.static&&c.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=f.route.id),E.createElement(ra.Provider,{value:u},d)}function Pg(u,f=[],d){let c=d?.state;if(u==null){if(!c)return null;if(c.errors)u=c.matches;else if(f.length===0&&!c.initialized&&c.matches.length>0)u=c.matches;else return null}let m=u,p=c?.errors;if(p!=null){let M=m.findIndex(N=>N.route.id&&p?.[N.route.id]!==void 0);Ne(M>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,M+1))}let v=!1,T=-1;if(d&&c){v=c.renderFallback;for(let M=0;M<m.length;M++){let N=m[M];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(T=M),N.route.id){let{loaderData:L,errors:Z}=c,Q=N.route.loader&&!L.hasOwnProperty(N.route.id)&&(!Z||Z[N.route.id]===void 0);if(N.route.lazy||Q){d.isStatic&&(v=!0),T>=0?m=m.slice(0,T+1):m=[m[0]];break}}}}let S=d?.onError,y=c&&S?(M,N)=>{S(M,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:Lg(c.matches),errorInfo:N})}:void 0;return m.reduceRight((M,N,L)=>{let Z,Q=!1,Y=null,U=null;c&&(Z=p&&N.route.id?p[N.route.id]:void 0,Y=N.route.errorElement||Wg,v&&(T<0&&L===0?(Nm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,U=null):T===L&&(Q=!0,U=N.route.hydrateFallbackElement||null)));let K=f.concat(m.slice(0,L+1)),ee=()=>{let J;return Z?J=Y:Q?J=U:N.route.Component?J=E.createElement(N.route.Component,null):N.route.element?J=N.route.element:J=M,E.createElement(Ig,{match:N,routeContext:{outlet:M,matches:K,isDataRoute:c!=null},children:J})};return c&&(N.route.ErrorBoundary||N.route.errorElement||L===0)?E.createElement(Tm,{location:c.location,revalidation:c.revalidation,component:Y,error:Z,children:ee(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:y}):ee()},null)}function ku(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e0(u){let f=E.useContext(Ll);return Ne(f,ku(u)),f}function t0(u){let f=E.useContext(rr);return Ne(f,ku(u)),f}function a0(u){let f=E.useContext(ra);return Ne(f,ku(u)),f}function Gu(u){let f=a0(u),d=f.matches[f.matches.length-1];return Ne(d.route.id,`${u} can only be used on routes that contain a unique "id"`),d.route.id}function l0(){return Gu("useRouteId")}function n0(){let u=E.useContext(Yu),f=t0("useRouteError"),d=Gu("useRouteError");return u!==void 0?u:f.errors?.[d]}function i0(){let{router:u}=e0("useNavigate"),f=Gu("useNavigate"),d=E.useRef(!1);return zm(()=>{d.current=!0}),E.useCallback(async(m,p={})=>{Bt(d.current,wm),d.current&&(typeof m=="number"?await u.navigate(m):await u.navigate(m,{fromRouteId:f,...p}))},[u,f])}var sm={};function Nm(u,f,d){!f&&!sm[u]&&(sm[u]=!0,Bt(!1,d))}E.memo(r0);function r0({routes:u,future:f,state:d,isStatic:c,onError:m}){return Em(u,void 0,{state:d,isStatic:c,onError:m})}function Nt(u){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function o0({basename:u="/",children:f=null,location:d,navigationType:c="POP",navigator:m,static:p=!1,unstable_useTransitions:v}){Ne(!Ln(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=u.replace(/^\/*/,"/"),S=E.useMemo(()=>({basename:T,navigator:m,static:p,unstable_useTransitions:v,future:{}}),[T,m,p,v]);typeof d=="string"&&(d=Ul(d));let{pathname:y="/",search:M="",hash:N="",state:L=null,key:Z="default",unstable_mask:Q}=d,Y=E.useMemo(()=>{let U=ia(y,T);return U==null?null:{location:{pathname:U,search:M,hash:N,state:L,key:Z,unstable_mask:Q},navigationType:c}},[T,y,M,N,L,Z,c,Q]);return Bt(Y!=null,`<Router basename="${T}"> is not able to match the URL "${y}${M}${N}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:E.createElement(At.Provider,{value:S},E.createElement(Un.Provider,{children:f,value:Y}))}function u0({children:u,location:f}){return Jg(Hu(u),f)}function Hu(u,f=[]){let d=[];return E.Children.forEach(u,(c,m)=>{if(!E.isValidElement(c))return;let p=[...f,m];if(c.type===E.Fragment){d.push.apply(d,Hu(c.props.children,p));return}Ne(c.type===Nt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!c.props.index||!c.props.children,"An index route cannot have child routes.");let v={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(v.children=Hu(c.props.children,p)),d.push(v)}),d}var lr="get",nr="application/x-www-form-urlencoded";function or(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function c0(u){return or(u)&&u.tagName.toLowerCase()==="button"}function s0(u){return or(u)&&u.tagName.toLowerCase()==="form"}function f0(u){return or(u)&&u.tagName.toLowerCase()==="input"}function d0(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function m0(u,f){return u.button===0&&(!f||f==="_self")&&!d0(u)}var ar=null;function h0(){if(ar===null)try{new FormData(document.createElement("form"),0),ar=!1}catch{ar=!0}return ar}var p0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uu(u){return u!=null&&!p0.has(u)?(Bt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nr}"`),null):u}function g0(u,f){let d,c,m,p,v;if(s0(u)){let T=u.getAttribute("action");c=T?ia(T,f):null,d=u.getAttribute("method")||lr,m=Uu(u.getAttribute("enctype"))||nr,p=new FormData(u)}else if(c0(u)||f0(u)&&(u.type==="submit"||u.type==="image")){let T=u.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=u.getAttribute("formaction")||T.getAttribute("action");if(c=S?ia(S,f):null,d=u.getAttribute("formmethod")||T.getAttribute("method")||lr,m=Uu(u.getAttribute("formenctype"))||Uu(T.getAttribute("enctype"))||nr,p=new FormData(T,u),!h0()){let{name:y,type:M,value:N}=u;if(M==="image"){let L=y?`${y}.`:"";p.append(`${L}x`,"0"),p.append(`${L}y`,"0")}else y&&p.append(y,N)}}else{if(or(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=lr,c=null,m=nr,v=u}return p&&m==="text/plain"&&(v=p,p=void 0),{action:c,method:d.toLowerCase(),encType:m,formData:p,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xu(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function Am(u,f,d,c){let m=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return d?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${c}`:m.pathname=`${m.pathname}.${c}`:m.pathname==="/"?m.pathname=`_root.${c}`:f&&ia(m.pathname,f)==="/"?m.pathname=`${f.replace(/\/$/,"")}/_root.${c}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${c}`,m}async function v0(u,f){if(u.id in f)return f[u.id];try{let d=await import(u.module);return f[u.id]=d,d}catch(d){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function y0(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function x0(u,f,d){let c=await Promise.all(u.map(async m=>{let p=f.routes[m.route.id];if(p){let v=await v0(p,d);return v.links?v.links():[]}return[]}));return w0(c.flat(1).filter(y0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function fm(u,f,d,c,m,p){let v=(S,y)=>d[y]?S.route.id!==d[y].route.id:!0,T=(S,y)=>d[y].pathname!==S.pathname||d[y].route.path?.endsWith("*")&&d[y].params["*"]!==S.params["*"];return p==="assets"?f.filter((S,y)=>v(S,y)||T(S,y)):p==="data"?f.filter((S,y)=>{let M=c.routes[S.route.id];if(!M||!M.hasLoader)return!1;if(v(S,y)||T(S,y))return!0;if(S.route.shouldRevalidate){let N=S.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function b0(u,f,{includeHydrateFallback:d}={}){return S0(u.map(c=>{let m=f.routes[c.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function S0(u){return[...new Set(u)]}function j0(u){let f={},d=Object.keys(u).sort();for(let c of d)f[c]=u[c];return f}function w0(u,f){let d=new Set;return new Set(f),u.reduce((c,m)=>{let p=JSON.stringify(j0(m));return d.has(p)||(d.add(p),c.push({key:p,link:m})),c},[])}function Qu(){let u=E.useContext(Ll);return Xu(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function z0(){let u=E.useContext(rr);return Xu(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Vu=E.createContext(void 0);Vu.displayName="FrameworkContext";function Zu(){let u=E.useContext(Vu);return Xu(u,"You must render this element inside a <HydratedRouter> element"),u}function E0(u,f){let d=E.useContext(Vu),[c,m]=E.useState(!1),[p,v]=E.useState(!1),{onFocus:T,onBlur:S,onMouseEnter:y,onMouseLeave:M,onTouchStart:N}=f,L=E.useRef(null);E.useEffect(()=>{if(u==="render"&&v(!0),u==="viewport"){let Y=K=>{K.forEach(ee=>{v(ee.isIntersecting)})},U=new IntersectionObserver(Y,{threshold:.5});return L.current&&U.observe(L.current),()=>{U.disconnect()}}},[u]),E.useEffect(()=>{if(c){let Y=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(Y)}}},[c]);let Z=()=>{m(!0)},Q=()=>{m(!1),v(!1)};return d?u!=="intent"?[p,L,{}]:[p,L,{onFocus:_n(T,Z),onBlur:_n(S,Q),onMouseEnter:_n(y,Z),onMouseLeave:_n(M,Q),onTouchStart:_n(N,Z)}]:[!1,L,{}]}function _n(u,f){return d=>{u&&u(d),d.defaultPrevented||f(d)}}function T0({page:u,...f}){let d=qg(),{router:c}=Qu(),m=E.useMemo(()=>mm(c.routes,u,c.basename),[c.routes,u,c.basename]);return m?d?E.createElement(A0,{page:u,matches:m,...f}):E.createElement(C0,{page:u,matches:m,...f}):null}function N0(u){let{manifest:f,routeModules:d}=Zu(),[c,m]=E.useState([]);return E.useEffect(()=>{let p=!1;return x0(u,f,d).then(v=>{p||m(v)}),()=>{p=!0}},[u,f,d]),c}function A0({page:u,matches:f,...d}){let c=Yt(),{future:m}=Zu(),{basename:p}=Qu(),v=E.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let T=Am(u,p,m.unstable_trailingSlashAwareDataRequests,"rsc"),S=!1,y=[];for(let M of f)typeof M.route.shouldRevalidate=="function"?S=!0:y.push(M.route.id);return S&&y.length>0&&T.searchParams.set("_routes",y.join(",")),[T.pathname+T.search]},[p,m.unstable_trailingSlashAwareDataRequests,u,c,f]);return E.createElement(E.Fragment,null,v.map(T=>E.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...d})))}function C0({page:u,matches:f,...d}){let c=Yt(),{future:m,manifest:p,routeModules:v}=Zu(),{basename:T}=Qu(),{loaderData:S,matches:y}=z0(),M=E.useMemo(()=>fm(u,f,y,p,c,"data"),[u,f,y,p,c]),N=E.useMemo(()=>fm(u,f,y,p,c,"assets"),[u,f,y,p,c]),L=E.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let Y=new Set,U=!1;if(f.forEach(ee=>{let J=p.routes[ee.route.id];!J||!J.hasLoader||(!M.some(xe=>xe.route.id===ee.route.id)&&ee.route.id in S&&v[ee.route.id]?.shouldRevalidate||J.hasClientLoader?U=!0:Y.add(ee.route.id))}),Y.size===0)return[];let K=Am(u,T,m.unstable_trailingSlashAwareDataRequests,"data");return U&&Y.size>0&&K.searchParams.set("_routes",f.filter(ee=>Y.has(ee.route.id)).map(ee=>ee.route.id).join(",")),[K.pathname+K.search]},[T,m.unstable_trailingSlashAwareDataRequests,S,c,p,M,f,u,v]),Z=E.useMemo(()=>b0(N,p),[N,p]),Q=N0(N);return E.createElement(E.Fragment,null,L.map(Y=>E.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...d})),Z.map(Y=>E.createElement("link",{key:Y,rel:"modulepreload",href:Y,...d})),Q.map(({key:Y,link:U})=>E.createElement("link",{key:Y,nonce:d.nonce,...U,crossOrigin:U.crossOrigin??d.crossOrigin})))}function R0(...u){return f=>{u.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var D0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{D0&&(window.__reactRouterVersion="7.14.0")}catch{}function M0({basename:u,children:f,unstable_useTransitions:d,window:c}){let m=E.useRef();m.current==null&&(m.current=fg({window:c,v5Compat:!0}));let p=m.current,[v,T]=E.useState({action:p.action,location:p.location}),S=E.useCallback(y=>{d===!1?T(y):E.startTransition(()=>T(y))},[d]);return E.useLayoutEffect(()=>p.listen(S),[p,S]),E.createElement(o0,{basename:u,children:f,location:v.location,navigationType:v.action,navigator:p,unstable_useTransitions:d})}var Cm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,se=E.forwardRef(function({onClick:f,discover:d="render",prefetch:c="none",relative:m,reloadDocument:p,replace:v,unstable_mask:T,state:S,target:y,to:M,preventScrollReset:N,viewTransition:L,unstable_defaultShouldRevalidate:Z,...Q},Y){let{basename:U,navigator:K,unstable_useTransitions:ee}=E.useContext(At),J=typeof M=="string"&&Cm.test(M),xe=ym(M,U);M=xe.to;let be=Vg(M,{relative:m}),Te=Yt(),W=null;if(T){let Oe=Bu(T,[],Te.unstable_mask?Te.unstable_mask.pathname:"/",!0);U!=="/"&&(Oe.pathname=Oe.pathname==="/"?U:qt([U,Oe.pathname])),W=K.createHref(Oe)}let[Re,Ke,Mt]=E0(c,Q),pt=L0(M,{replace:v,unstable_mask:T,state:S,target:y,preventScrollReset:N,relative:m,viewTransition:L,unstable_defaultShouldRevalidate:Z,unstable_useTransitions:ee});function Je(Oe){f&&f(Oe),Oe.defaultPrevented||pt(Oe)}let _t=!(xe.isExternal||p),gt=E.createElement("a",{...Q,...Mt,href:(_t?W:void 0)||xe.absoluteURL||be,onClick:_t?Je:f,ref:R0(Y,Ke),target:y,"data-discover":!J&&d==="render"?"true":void 0});return Re&&!J?E.createElement(E.Fragment,null,gt,E.createElement(T0,{page:be})):gt});se.displayName="Link";var _0=E.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:c="",end:m=!1,style:p,to:v,viewTransition:T,children:S,...y},M){let N=Hn(v,{relative:y.relative}),L=Yt(),Z=E.useContext(rr),{navigator:Q,basename:Y}=E.useContext(At),U=Z!=null&&k0(N)&&T===!0,K=Q.encodeLocation?Q.encodeLocation(N).pathname:N.pathname,ee=L.pathname,J=Z&&Z.navigation&&Z.navigation.location?Z.navigation.location.pathname:null;d||(ee=ee.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&Y&&(J=ia(J,Y)||J);const xe=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let be=ee===K||!m&&ee.startsWith(K)&&ee.charAt(xe)==="/",Te=J!=null&&(J===K||!m&&J.startsWith(K)&&J.charAt(K.length)==="/"),W={isActive:be,isPending:Te,isTransitioning:U},Re=be?f:void 0,Ke;typeof c=="function"?Ke=c(W):Ke=[c,be?"active":null,Te?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let Mt=typeof p=="function"?p(W):p;return E.createElement(se,{...y,"aria-current":Re,className:Ke,ref:M,style:Mt,to:v,viewTransition:T},typeof S=="function"?S(W):S)});_0.displayName="NavLink";var O0=E.forwardRef(({discover:u="render",fetcherKey:f,navigate:d,reloadDocument:c,replace:m,state:p,method:v=lr,action:T,onSubmit:S,relative:y,preventScrollReset:M,viewTransition:N,unstable_defaultShouldRevalidate:L,...Z},Q)=>{let{unstable_useTransitions:Y}=E.useContext(At),U=B0(),K=Y0(T,{relative:y}),ee=v.toLowerCase()==="get"?"get":"post",J=typeof T=="string"&&Cm.test(T),xe=be=>{if(S&&S(be),be.defaultPrevented)return;be.preventDefault();let Te=be.nativeEvent.submitter,W=Te?.getAttribute("formmethod")||v,Re=()=>U(Te||be.currentTarget,{fetcherKey:f,method:W,navigate:d,replace:m,state:p,relative:y,preventScrollReset:M,viewTransition:N,unstable_defaultShouldRevalidate:L});Y&&d!==!1?E.startTransition(()=>Re()):Re()};return E.createElement("form",{ref:Q,method:ee,action:K,onSubmit:c?S:xe,...Z,"data-discover":!J&&u==="render"?"true":void 0})});O0.displayName="Form";function U0(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rm(u){let f=E.useContext(Ll);return Ne(f,U0(u)),f}function L0(u,{target:f,replace:d,unstable_mask:c,state:m,preventScrollReset:p,relative:v,viewTransition:T,unstable_defaultShouldRevalidate:S,unstable_useTransitions:y}={}){let M=Zg(),N=Yt(),L=Hn(u,{relative:v});return E.useCallback(Z=>{if(m0(Z,f)){Z.preventDefault();let Q=d!==void 0?d:On(N)===On(L),Y=()=>M(u,{replace:Q,unstable_mask:c,state:m,preventScrollReset:p,relative:v,viewTransition:T,unstable_defaultShouldRevalidate:S});y?E.startTransition(()=>Y()):Y()}},[N,M,L,d,c,m,f,u,p,v,T,S,y])}var H0=0,q0=()=>`__${String(++H0)}__`;function B0(){let{router:u}=Rm("useSubmit"),{basename:f}=E.useContext(At),d=l0(),c=u.fetch,m=u.navigate;return E.useCallback(async(p,v={})=>{let{action:T,method:S,encType:y,formData:M,body:N}=g0(p,f);if(v.navigate===!1){let L=v.fetcherKey||q0();await c(L,d,v.action||T,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:M,body:N,formMethod:v.method||S,formEncType:v.encType||y,flushSync:v.flushSync})}else await m(v.action||T,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:M,body:N,formMethod:v.method||S,formEncType:v.encType||y,replace:v.replace,state:v.state,fromRouteId:d,flushSync:v.flushSync,viewTransition:v.viewTransition})},[c,m,f,d])}function Y0(u,{relative:f}={}){let{basename:d}=E.useContext(At),c=E.useContext(ra);Ne(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),p={...Hn(u||".",{relative:f})},v=Yt();if(u==null){p.search=v.search;let T=new URLSearchParams(p.search),S=T.getAll("index");if(S.some(M=>M==="")){T.delete("index"),S.filter(N=>N).forEach(N=>T.append("index",N));let M=T.toString();p.search=M?`?${M}`:""}}return(!u||u===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:qt([d,p.pathname])),On(p)}function k0(u,{relative:f}={}){let d=E.useContext(Sm);Ne(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Rm("useViewTransitionState"),m=Hn(u,{relative:f});if(!d.isTransitioning)return!1;let p=ia(d.currentLocation.pathname,c)||d.currentLocation.pathname,v=ia(d.nextLocation.pathname,c)||d.nextLocation.pathname;return ir(m.pathname,v)!=null||ir(m.pathname,p)!=null}function G0(){const[u,f]=E.useState(!0);return E.useEffect(()=>{const d=setTimeout(()=>{f(!1)},500);return()=>clearTimeout(d)},[]),r.jsxs("div",{id:"loader",style:{opacity:u?1:0,transition:"opacity 0.5s ease",pointerEvents:u?"auto":"none"},children:[r.jsx("div",{className:"spinner"}),r.jsx("p",{className:"loader-text",children:"Loading..."})]})}function Dm(){const[u,f]=E.useState(null);E.useEffect(()=>{const m=localStorage.getItem("theme");if(m)f(m==="dark"),d(m);else{const p=window.matchMedia("(prefers-color-scheme: dark)").matches;f(p),d(p?"dark":"light")}},[]);const d=m=>{document.documentElement.classList.remove("light-theme","dark-theme"),m==="light"?document.documentElement.classList.add("light-theme"):document.documentElement.classList.add("dark-theme"),localStorage.setItem("theme",m)},c=()=>{const m=u?"light":"dark";f(!u),d(m)};return u===null?null:r.jsx("button",{onClick:c,title:u?"Switch to Light Mode":"Switch to Dark Mode",style:{background:"transparent",border:"none",color:"inherit",cursor:"pointer",fontSize:"1.2rem",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",width:"36px",height:"36px",transition:"all 0.2s ease"},onMouseEnter:m=>m.target.style.opacity="0.7",onMouseLeave:m=>m.target.style.opacity="1",children:u?r.jsx("i",{className:"fas fa-sun"}):r.jsx("i",{className:"fas fa-moon"})})}function X0({open:u,onClose:f}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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

        `}),r.jsx("div",{className:`overlay ${u?"show":""}`,onClick:f}),r.jsx("div",{className:`theme-toggle-wrapper ${u?"show":""}`,children:r.jsx(Dm,{})}),r.jsxs("div",{className:`menu ${u?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Project"}),r.jsx(se,{className:"link",to:"/about",onClick:f,children:"About"}),r.jsx(se,{className:"link",to:"/features",onClick:f,children:"Features"}),r.jsx(se,{className:"link",to:"/roadmap",onClick:f,children:"Roadmap"}),r.jsx(se,{className:"link",to:"/wiki",onClick:f,children:"Wiki"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Explore"}),r.jsx(se,{className:"link",to:"/faq",onClick:f,children:"FAQ"}),r.jsx(se,{className:"link",to:"/contact",onClick:f,children:"Contact"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Workshop"}),r.jsx("a",{className:"link",href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{className:"link",href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Contribute"}),r.jsx("a",{className:"link",href:"https://github.com/MasterAcnolo/Freedom-Loader",children:"GitHub"}),r.jsx(se,{className:"link",to:"/contributing",onClick:f,children:"Guide"})]}),r.jsx(se,{to:"/download",className:"header-btn",onClick:f,children:"Download"})]})]})}function Q0(){const[u,f]=E.useState(null),[d,c]=E.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
        `}),r.jsxs("header",{className:"header",children:[r.jsx(se,{to:"/",className:"logo",children:r.jsx("img",{src:"./assets/icon/Freedom_Loader.png",alt:"logo"})}),r.jsxs("nav",{className:"nav",children:[r.jsxs("div",{className:`item ${u==="project"?"open":""}`,onMouseEnter:()=>f("project"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Project ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx(se,{to:"/about",children:"About"}),r.jsx(se,{to:"/features",children:"Features"}),r.jsx(se,{to:"/roadmap",children:"Roadmap"}),r.jsx(se,{to:"/wiki",children:"Wiki"})]})]}),r.jsxs("div",{className:`item ${u==="explore"?"open":""}`,onMouseEnter:()=>f("explore"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Explore ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx(se,{to:"/faq",children:"FAQ"}),r.jsx(se,{to:"/contact",children:"Contact"})]})]}),r.jsxs("div",{className:`item ${u==="workshop"?"open":""}`,onMouseEnter:()=>f("workshop"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Workshop ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create Theme"})]})]}),r.jsxs("div",{className:`item ${u==="contribute"?"open":""}`,onMouseEnter:()=>f("contribute"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Contribute ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",children:"GitHub"}),r.jsx(se,{to:"/contributing",children:"Guide"})]})]}),r.jsx(se,{to:"/download",className:"header-btn",children:"Download"}),r.jsx(Dm,{})]}),r.jsxs("div",{className:`hamburger ${d?"open":""}`,onClick:()=>c(!d),children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]}),r.jsx(X0,{open:d,onClose:()=>c(!1)})]})}function V0(){const u=new Date().getFullYear();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsxs("footer",{children:[r.jsxs("div",{className:"footer-container",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx(se,{to:"/",children:r.jsx("img",{src:"./assets/icon/Freedom_Loader.png",alt:"Freedom Loader"})}),r.jsx("p",{children:"Put Freedom in your Downloads."})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Site"}),r.jsx(se,{to:"/",children:"Home"}),r.jsx(se,{to:"/about",children:"About"}),r.jsx(se,{to:"/features",children:"Features"}),r.jsx(se,{to:"/roadmap",children:"Roadmap"}),r.jsx(se,{to:"/download",children:"Download"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Workshop"}),r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create Theme"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Legal"}),r.jsx(se,{to:"/contact",children:"Contact"}),r.jsx(se,{to:"/privacy",children:"Privacy"}),r.jsx(se,{to:"/terms",children:"Terms"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Community"}),r.jsx(se,{to:"/faq",children:"FAQ"}),r.jsx(se,{to:"/wiki",children:"Wiki"}),r.jsx(se,{to:"/contributing",children:"Contributing"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",rel:"noopener noreferrer",children:"Discussions"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Follow Us"}),r.jsxs("div",{className:"footer-socials",children:[r.jsx("a",{href:"https://masteracnolo.github.io/No-Sense",target:"_blank",rel:"noopener noreferrer",title:"Website",children:r.jsx("img",{src:"./assets/icon/globe-solid-full.svg",alt:"Website"})}),r.jsx("a",{href:"https://x.com/MasterAcnolo",target:"_blank",rel:"noopener noreferrer",title:"Twitter/X",children:r.jsx("img",{src:"./assets/icon/x-twitter-brands-solid-full.svg",alt:"Twitter/X"})}),r.jsx("a",{href:"https://github.com/MasterAcnolo",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:r.jsx("img",{src:"./assets/icon/github-brands-solid-full.svg",alt:"GitHub"})}),r.jsx("a",{href:"https://www.youtube.com/channel/UCS55e2-ZslXqGzznB_7N4Sg",target:"_blank",rel:"noopener noreferrer",title:"YouTube",children:r.jsx("img",{src:"./assets/icon/youtube-brands-solid-full.svg",alt:"YouTube"})})]})]})]}),r.jsx("div",{className:"footer-bottom",children:r.jsxs("p",{children:["© ",u," Freedom Loader — All rights reserved."]})})]})]})}function Z0(){const{pathname:u}=Yt();return E.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[u]),null}const K0=u=>1-Math.pow(1-u,2),dm=(u,f,d,c)=>{const[m,p]=E.useState(u);return E.useEffect(()=>{if(!c)return;let v=null;const T=S=>{v||(v=S);const y=S-v,M=Math.min(y/(d*1e3),1),N=K0(M),L=Math.round(u+(f-u)*N);p(L),M<1&&requestAnimationFrame(T)};requestAnimationFrame(T)},[c,u,f,d]),m};function J0(){const[u,f]=E.useState(!1),d=E.useRef(null),c=dm(0,100,2,u),m=dm(100,0,2,u);return E.useEffect(()=>{const p=new IntersectionObserver(([v])=>{v.isIntersecting&&(f(!0),p.unobserve(d.current))},{threshold:.5});return d.current&&p.observe(d.current),()=>{d.current&&p.unobserve(d.current)}},[]),E.useEffect(()=>{document.title="Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                .home {
                    color: var(--text-primary);
                }

                /* ===== HERO SECTION ===== */
                .hero {
                    background: var(--bg-primary);
                    padding: 100px 20px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    z-index: 0;
                }

                .hero-content {
                    position: relative;
                    z-index: 1;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .hero h1 {
                    font-size: 4rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    font-family: "Poppins", sans-serif;
                    background: var(--text-primary);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    line-height: 1.2;
                }

                .hero p {
                    font-size: 1.3rem;
                    color: var(--text-secondary);
                    margin-bottom: 15px;
                    line-height: 1.6;
                }

                .hero .tagline {
                    font-size: 1.1rem;
                    color: var(--text-primary);
                    font-weight: 600;
                    margin-bottom: 50px;
                    letter-spacing: 0.5px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 25px;
                }

                .tagline-item {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }

                .tagline-item i {
                    font-size: 1.2rem;
                    color: var(--text-primary);
                }

                .tagline-item span {
                    font-weight: 600;
                }

                .hero-buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 60px;
                }

                .btn-primary, .btn-secondary {
                    padding: 12px 35px;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 1rem;
                    text-decoration: none;
                    cursor: pointer;
                    border: none;
                    transition: all 0.2s ease;
                    display: inline-block;
                }

                .btn-primary {
                    background: var(--text-primary);
                    color: var(--bg-primary);
                }

                .btn-primary:hover {
                    background: var(--text-secondary);
                    transform: translateY(-1px);
                }

                .btn-secondary {
                    background: transparent;
                    color: var(--text-primary);
                    border: 2px solid var(--border-color);
                }

                .btn-secondary:hover {
                    background: var(--card-bg);
                    border-color: var(--text-primary);
                    transform: translateY(-1px);
                }

                .stats {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                    margin-top: 80px;
                }

                .stat {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    padding: 25px;
                    transition: all 0.3s ease;
                }

                .stat:hover {
                    transform: translateY(-3px);
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                }

                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 10px;
                }

                .stat-label {
                    font-size: 1rem;
                    color: var(--text-secondary);
                }

                /* ===== FEATURES SECTION ===== */
                .features {
                    padding: 100px 20px;
                    background: var(--bg-secondary);
                    border-top: 1px solid var(--border-color);
                }

                .section-title {
                    font-size: 3rem;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 70px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .feature-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    padding: 30px;
                    transition: all 0.3s ease;
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                }

                .feature-icon {
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                    color: var(--text-primary);
                }

                .feature-card h3 {
                    font-size: 1.2rem;
                    margin-bottom: 15px;
                    color: var(--text-primary);
                    font-weight: 700;
                }

                .feature-card p {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                }

                /* ===== COMMUNITY SECTION ===== */
                .community {
                    padding: 100px 20px;
                    background: var(--bg-primary);
                    border-top: 1px solid var(--border-color);
                }

                .community-content {
                    max-width: 1000px;
                    margin: 0 auto;
                    text-align: center;
                }

                .community-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .community-text {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    margin-bottom: 40px;
                    line-height: 1.8;
                }

                .community-links {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .community-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 25px;
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    color: var(--text-primary);
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                .community-link:hover {
                    background: var(--card-hover-bg);
                    border-color: var(--text-secondary);
                    transform: translateY(-2px);
                }

                .community-link i {
                    font-size: 1.2rem;
                }

                /* ===== CTA SECTION ===== */
                .cta {
                    background: var(--bg-secondary);
                    padding: 80px 20px;
                    text-align: center;
                    color: var(--text-primary);
                    border-top: 1px solid var(--border-color);
                    margin-bottom: -60px;
                }

                .cta h2 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                }

                .cta p {
                    font-size: 1.1rem;
                    margin-bottom: 40px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                    color: var(--text-secondary);
                    line-height: 1.6;
                }

                .cta a {
                    background: var(--text-primary);
                    color: var(--bg-primary);
                    padding: 12px 40px;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1rem;
                    display: inline-block;
                    transition: all 0.2s ease;
                    border: none;
                    cursor: pointer;
                }

                .cta a:hover {
                    background: var(--text-secondary);
                    transform: translateY(-1px);
                }

                /* ===== RESPONSIVE ===== */
                @media (max-width: 1024px) {
                    .hero h1 {
                        font-size: 3rem;
                    }

                    .stats {
                        grid-template-columns: 1fr;
                    }

                    .section-title {
                        font-size: 2.2rem;
                    }
                }

                @media (max-width: 768px) {
                    .hero {
                        padding: 60px 20px;
                    }

                    .hero h1 {
                        font-size: 2.5rem;
                    }

                    .hero p {
                        font-size: 1.1rem;
                    }

                    .hero-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .btn-primary, .btn-secondary {
                        max-width: 300px;
                    }

                    .features {
                        padding: 60px 20px;
                    }

                    .community {
                        padding: 60px 20px;
                    }

                    .gallery {
                        padding: 60px 20px;
                    }

                    .cta {
                        padding: 60px 20px;
                    }

                    .cta h2 {
                        font-size: 2rem;
                    }

                    .community-links {
                        flex-direction: column;
                    }


                    .gallery-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 500px) {
                    .hero h1 {
                        font-size: 2rem;
                    }

                    .hero p {
                        font-size: 1rem;
                    }

                    .stat-number {
                        font-size: 2rem;
                    }

                    .section-title {
                        font-size: 1.8rem;
                    }

                    .feature-card {
                        padding: 20px;
                    }

                    .feature-icon {
                        font-size: 2.5rem;
                    }
                }
            `}),r.jsxs("main",{className:"home",children:[r.jsx("section",{className:"hero",children:r.jsxs("div",{className:"hero-content",children:[r.jsx("h1",{children:"Put Freedom in Your Downloads"}),r.jsxs("p",{children:["Fast, simple, powerful media downloads. ",r.jsx("br",{})," Not the best in the world - just the safest."]}),r.jsxs("div",{className:"tagline",children:[r.jsxs("div",{className:"tagline-item",children:[r.jsx("i",{className:"fas fa-bolt"}),r.jsx("span",{children:"Free"})]}),r.jsxs("div",{className:"tagline-item",children:[r.jsx("i",{className:"fas fa-lock"}),r.jsx("span",{children:"Privacy First"})]}),r.jsxs("div",{className:"tagline-item",children:[r.jsx("i",{className:"fas fa-bullseye"}),r.jsx("span",{children:" Simple"})]})]}),r.jsxs("div",{className:"hero-buttons",children:[r.jsx("a",{href:"/download",className:"btn-primary",children:"Download Now"}),r.jsx("a",{href:"#features",className:"btn-secondary",children:"Learn More"})]}),r.jsxs("div",{className:"stats",ref:d,children:[r.jsxs("div",{className:"stat",children:[r.jsxs("div",{className:"stat-number",children:[c,"%"]}),r.jsx("div",{className:"stat-label",children:"Open Source"})]}),r.jsxs("div",{className:"stat",children:[r.jsxs("div",{className:"stat-number",children:[m,"%"]}),r.jsx("div",{className:"stat-label",children:"Data Collection"})]})]})]})}),r.jsxs("section",{className:"features",id:"features",children:[r.jsx("h2",{className:"section-title",children:"Why You'll Love It"}),r.jsxs("div",{className:"features-grid",children:[r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-sliders-h feature-icon"}),r.jsx("h3",{children:"Configurable"}),r.jsx("p",{children:"Customize every aspect to your needs. Advanced settings for power users, simple defaults for everyone else. Your choice."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-lock feature-icon"}),r.jsx("h3",{children:"100% Private"}),r.jsx("p",{children:"No tracking, no analytics, no data collection. Everything stays on YOUR machine."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-music feature-icon"}),r.jsx("h3",{children:"Any Format"}),r.jsx("p",{children:"Videos, audio, playlists, streams. If it's online, Freedom Loader can grab it."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-heart feature-icon"}),r.jsx("h3",{children:"User First"}),r.jsx("p",{children:"Built with exceptional UX in mind. Intuitive design, smooth workflows, and a pleasure to use every single day."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-feather feature-icon"}),r.jsx("h3",{children:"Zero Bloat"}),r.jsx("p",{children:"Lightweight, fast, efficient. No ads, no spyware, just pure functionality."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-download feature-icon"}),r.jsx("h3",{children:"Super Simple"}),r.jsx("p",{children:"Click, download, done. No complex settings, no confusing menus. Just simplicity."})]})]})]}),r.jsx("section",{className:"community",children:r.jsxs("div",{className:"community-content",children:[r.jsx("h2",{className:"community-title",children:"Join Our Community"}),r.jsx("p",{className:"community-text",children:"Freedom Loader thrives because of its vibrant community. Share your experience, contribute ideas, report bugs, or just stay connected with others like-minded users."}),r.jsxs("div",{className:"community-links",children:[r.jsxs("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",rel:"noopener noreferrer",className:"community-link",children:[r.jsx("i",{className:"fas fa-comments"}),"GitHub Discussions"]}),r.jsxs("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",target:"_blank",rel:"noopener noreferrer",className:"community-link",children:[r.jsx("i",{className:"fab fa-github"}),"Star on GitHub"]}),r.jsxs("a",{href:"/contributing",className:"community-link",children:[r.jsx("i",{className:"fas fa-code-branch"}),"Contribute"]})]})]})}),r.jsxs("section",{className:"cta",children:[r.jsx("h2",{children:"Completely Free. Forever Free."}),r.jsx("p",{children:"No premium tier, no subscription, no hidden costs. Freedom Loader is free and will always be free. Download now and join all of the happy users."}),r.jsx("a",{href:"/download",children:"Get Started Free"})]})]})]})}function F0(){E.useEffect(()=>{document.title="Download - Freedom Loader"},[]);const[u,f]=E.useState(""),[d,c]=E.useState(""),[m,p]=E.useState(!0);return E.useEffect(()=>{(async()=>{try{const S=await fetch("https://api.github.com/repos/MasterAcnolo/Freedom-Loader/releases/latest");if(!S.ok)throw new Error(`Response status: ${S.status}`);const y=await S.json();f(y.tag_name),c(`https://github.com/MasterAcnolo/Freedom-Loader/releases/download/${y.tag_name}/Freedom-Loader-Setup-${y.tag_name}.exe`)}catch(T){console.error("Error fetching latest release:",T.message)}finally{p(!1)}})()},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`

                .download {
                    color: var(--text-primary);
                    padding: 80px 20%;
                    margin-top: 30px;
                    background: var(--bg-primary);
                }

                .download .container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .download h2 {
                    font-size: 2.5rem;
                    margin-bottom: 50px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .download-block {
                    margin-bottom: 50px;
                    border-bottom: 1px solid var(--border-color);
                    padding-bottom: 30px;
                }

                .download-block:last-child {
                    border-bottom: none;
                }

                .download .download-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                    gap: 15px;
                }

                .download .download-header h3 {
                    font-size: 1.8rem;
                    margin: 0;
                    color: var(--text-primary);
                }

                .download .btn {
                    padding: 10px 25px;
                    border-radius: 15px;
                    font-weight: bold;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    text-align: center;
                    border: none;
                    cursor: pointer;
                    display: inline-block;
                }

                .download .btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    pointer-events: none;
                }

                .download-block p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    opacity: 0.85;
                    margin: 0;
                    color: var(--text-secondary);
                }

                .download .version-text {
                    color: var(--text-primary);
                    font-weight: bold;
                }

                .download .loading {
                    color: var(--text-secondary);
                    font-style: italic;
                }

                .download .btn.primary {
                    background-color: var(--accent-primary);
                    color: white;
                }

                .download .btn.primary:hover:not(:disabled) {
                    background-color: var(--accent-hover);
                    transform: scale(1.03);
                }

                .download .btn.secondary {
                    border: 2px solid var(--accent-primary);
                    color: var(--text-primary);
                    background-color: transparent;
                }

                .download .btn.secondary:hover:not(:disabled) {
                    background-color: var(--card-bg);
                    color: var(--accent-hover);
                    border-color: var(--accent-hover);
                    transform: scale(1.03);
                }

                /* Bloc principal plus gros */
                .download-block.main-download .download-header h3 {
                    font-size: 2.5rem;
                }

                .download-block.main-download p {
                    font-size: 1.3rem;
                }

                .download-block.main-download .btn {
                    padding: 10px 30px;
                    font-size: 1.1rem;
                }

                /* Blocs secondaires uniformes */
                .download-block:not(.main-download) .download-header h3 {
                    font-size: 1.6rem;
                }

                .download-block:not(.main-download) p {
                    font-size: 1rem;
                }

                .download-block:not(.main-download) .btn {
                    padding: 10px 25px;
                    font-size: 1rem;
                    width: 180px;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .download {
                        padding: 60px 5%;
                    }

                    .download h2 {
                        font-size: 2.2rem;
                        margin-bottom: 40px;
                    }

                    .download .download-header h3 {
                        font-size: 1.5rem;
                    }

                    .download-block p {
                        font-size: 1rem;
                    }

                    .download .download-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 10px;
                    }
                }

                @media (max-width: 500px) {
                    .download h2 {
                        font-size: 2rem;
                    }

                    .download-block.main-download .download-header h3 {
                        font-size: 2rem;
                    }

                    .download-block:not(.main-download) .download-header h3 {
                        font-size: 1.4rem;
                    }

                    .download-block.main-download p {
                        font-size: 1.2rem;
                    }

                    .download-block:not(.main-download) p {
                        font-size: 0.95rem;
                    }
                }
            `}),r.jsx("main",{children:r.jsx("section",{className:"download",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"download-block main-download",children:[r.jsxs("div",{className:"download-header",children:[r.jsx("h3",{children:"Download for Windows"}),d?r.jsx("a",{href:d,className:"btn primary",target:"_blank",rel:"noopener noreferrer",children:"Download Installer"}):r.jsx("button",{className:"btn primary",disabled:!0,children:"Download Installer"})]}),r.jsxs("p",{children:["Installer (.exe), latest stable version: ",r.jsx("span",{className:"version-text",children:m?r.jsx("span",{className:"loading",children:"Loading..."}):u||"N/A"})]})]}),r.jsxs("div",{className:"download-block",children:[r.jsxs("div",{className:"download-header",children:[r.jsx("h3",{children:"GitHub Repository"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"Open Repository"})]}),r.jsx("p",{children:"Source code, experimental builds, issues, contributions"})]}),r.jsxs("div",{className:"download-block",children:[r.jsxs("div",{className:"download-header",children:[r.jsx("h3",{children:"Latest Changelog"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/releases/latest",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"View Changelog"})]}),r.jsx("p",{children:"Check out the release notes for the latest updates, fixes, and new features added to Freedom Loader."})]}),r.jsxs("div",{className:"download-block",children:[r.jsxs("div",{className:"download-header",children:[r.jsx("h3",{children:"Old Releases"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/releases",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"View Old Releases"})]}),r.jsx("p",{children:"Browse older versions and archived builds if you need a previous release or want to test older features."})]})]})})})]})}function W0(){E.useEffect(()=>{document.title="About - Freedom Loader"},[]);const u=[{name:"Electron",img:"./assets/languages/electron.png",desc:"Desktop app framework using Chromium and Node.js."},{name:"Node.js",img:"./assets/languages/nodejs.png",desc:"Powering all background processes and filesystem tasks."},{name:"Express",img:"./assets/languages/express.svg",desc:"Powering the internal API",invert:!0},{name:"yt-dlp",img:"./assets/languages/ytDlp.png",desc:"Handles all video and audio extraction operations."},{name:"Deno",img:"./assets/languages/deno.png",desc:"Powering yt-dlp verification.",invert:!0},{name:"Winston",img:"./assets/languages/winston.png",desc:"Powering the Logger System"},{name:"JavaScript",img:"./assets/languages/js.png",desc:"Core logic and user interaction within the app."}],f=[{title:"Download Media",desc:"Video & audio with metadata support"},{title:"Audio-Only Mode",desc:"Extract audio tracks separately"},{title:"Playlist Support",desc:"Download entire playlists easily"},{title:"Comprehensive Logs",desc:"Detailed logging system for diagnostics"},{title:"Multiple Themes",desc:"Choose from various UI themes or create yours"},{title:"Custom Output",desc:"Flexible download folder settings"},{title:"Discord Integration",desc:"Rich Presence for Discord"},{title:"Auto Updates",desc:"Automatic app version management"},{title:"Safe Boot",desc:"Reliable startup system"},{title:"Cookie Detection",desc:"Auto-detect yt-dlp cookies"},{title:"Configuration",desc:"Extensive settings panel"},{title:"Clean Startup",desc:"Optimized initial launch"},{title:"Custom Themes",desc:"Create & personalize your themes"},{title:"User Workshop",desc:"Community theme & extension hub"},{title:"More Coming...",desc:"Continuous development & improvements"}];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                main {
                    width: 100%;
                }

                .about {
                    padding: 80px 20%;
                    color: var(--text-primary);
                    margin-top: 30px;
                    background: var(--bg-primary);
                }

                .about-container, .history-container, .support-container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .about h1 {
                    font-size: 3rem;
                    margin-bottom: 30px;
                    font-family: "Poppins", sans-serif;
                    text-align: center;
                    color: var(--text-primary);
                }

                .about p {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    opacity: 0.9;
                    margin-bottom: 20px;
                    text-align: justify;
                    color: var(--text-secondary);
                }

                .about strong {
                    color: var(--text-primary);
                    font-weight: 600;
                }

                .story-link {
                    color: var(--accent-primary);
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .story-link:hover {
                    color: var(--accent-secondary);
                    text-decoration: underline;
                }

                .history {
                    padding: 60px 20%;
                    background: var(--bg-secondary);
                }

                .history h2 {
                    font-size: 2.5rem;
                    margin-bottom: 30px;
                    text-align: center;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .history p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    opacity: 0.9;
                    margin-bottom: 20px;
                    text-align: justify;
                    color: var(--text-secondary);
                }

                .features {
                    padding: 60px 20%;
                    background: var(--bg-primary);
                    border-top: 1px solid var(--border-color);
                }

                .features h2 {
                    font-size: 2.5rem;
                    margin-bottom: 40px;
                    text-align: center;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 20px;
                    margin-bottom: 60px;
                }

                .feature-card {
                    padding: 25px;
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    text-align: left;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .feature-card:hover {
                    background: var(--card-hover-bg);
                    border-color: var(--text-secondary);
                    transform: translateY(-4px);
                }

                .feature-card h3 {
                    font-size: 1.1rem;
                    margin: 0;
                    color: var(--text-primary);
                    font-weight: 600;
                }

                .feature-card p {
                    font-size: 0.95rem;
                    margin: 0;
                    color: var(--text-secondary);
                    opacity: 0.8;
                }

                .technos {
                    padding: 60px 20%;
                    background: var(--bg-secondary);
                    border-top: 1px solid var(--border-color);
                }

                .technos h2 {
                    font-size: 2.5rem;
                    margin-bottom: 40px;
                    text-align: center;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 30px;
                }

                .tech-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    padding: 25px;
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .tech-card:hover {
                    background: var(--card-hover-bg);
                    border-color: var(--text-secondary);
                    transform: translateY(-5px);
                }

                .tech-card img {
                    height: 60px;
                    max-width: 100%;
                    object-fit: contain;
                }

                .tech-card h3 {
                    font-size: 1.3rem;
                    margin: 0;
                    color: var(--text-primary);
                }

                .tech-card p {
                    font-size: 0.95rem;
                    opacity: 0.8;
                    margin: 0;
                    color: var(--text-secondary);
                }

                .support {
                    padding: 60px 20%;
                    background: var(--bg-primary);
                    border-top: 1px solid var(--border-color);
                }

                .support h2 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    text-align: center;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .support > p {
                    font-size: 1.1rem;
                    text-align: center;
                    margin-bottom: 40px;
                    opacity: 0.9;
                    color: var(--text-secondary);
                }

                .support-actions {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 30px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                    cursor: pointer;
                }

                .btn.primary {
                    background-color: var(--accent-primary);
                    color: white;
                }

                .btn.primary:hover {
                    background-color: var(--accent-hover);
                    transform: scale(1.05);
                }

                .btn.secondary {
                    border: 2px solid var(--accent-primary);
                    color: var(--text-primary);
                    background-color: transparent;
                }

                .btn.secondary:hover {
                    background-color: var(--card-bg);
                    border-color: var(--accent-hover);
                    transform: scale(1.05);
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .about, .history, .features, .technos, .support {
                        padding: 50px 5%;
                    }

                    .about h1 {
                        font-size: 2.3rem;
                    }

                    .history h2, .features h2, .technos h2, .support h2 {
                        font-size: 2rem;
                    }

                    .features-grid {
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    }

                    .tech-grid {
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                        gap: 20px;
                    }

                    .support-actions {
                        flex-direction: column;
                    }

                    .btn {
                        justify-content: center;
                    }
                }

                @media (max-width: 500px) {
                    .about, .history, .features, .technos, .support {
                        padding: 30px 3%;
                    }

                    .about h1 {
                        font-size: 1.8rem;
                    }

                    .history h2, .features h2, .technos h2, .support h2 {
                        font-size: 1.5rem;
                        margin-bottom: 25px;
                    }

                    .about p, .history p {
                        font-size: 1rem;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }

                    .tech-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}),r.jsxs("main",{children:[r.jsx("section",{className:"about",children:r.jsxs("div",{className:"about-container",children:[r.jsx("h1",{children:"About Freedom Loader"}),r.jsxs("p",{children:["Freedom Loader is a lightweight desktop app built with ",r.jsx("strong",{children:"Electron"})," that uses",r.jsx("strong",{children:" yt-dlp"})," to download videos and audio from the web easily and privately. It's made for people who just want control over their media - without ads, limits, or paywalls."]}),r.jsxs("p",{children:["I started this project out of frustration with the state of most downloaders. Too many were filled with ads, shady code, or unnecessary restrictions. Freedom Loader exists to put ",r.jsx("strong",{children:"freedom back into your downloads"}),"."]})]})}),r.jsx("section",{className:"history",children:r.jsxs("div",{className:"history-container",children:[r.jsx("h2",{children:"The Story Behind It"}),r.jsx("p",{children:'Freedom Loader was born from a simple need: downloading media without hassle. I wanted a tool that respected privacy, looked clean, and worked - period. No trackers, no "Pro" version, no weird popups. Just a reliable, open-source downloader for everyone.'}),r.jsxs("p",{children:["Over time, it became more than a tool - it's a statement against overcomplication. Built during late nights, Freedom Loader is the kind of app I wish existed when I was younger: fast, transparent, and free. Full story available ",r.jsx("a",{href:"https://masteracnolo.github.io/Blog/pourquoi-freedom-loader/",target:"_blank",rel:"noopener noreferrer",className:"story-link",children:"Here"})]})]})}),r.jsxs("section",{className:"features",children:[r.jsx("h2",{children:"Main Features"}),r.jsx("div",{className:"features-grid",children:f.map((d,c)=>r.jsxs("div",{className:"feature-card",children:[r.jsx("h3",{children:d.title}),r.jsx("p",{children:d.desc})]},c))})]}),r.jsxs("section",{className:"technos",children:[r.jsx("h2",{children:"Technologies Used"}),r.jsx("div",{className:"tech-grid",children:u.map((d,c)=>r.jsxs("div",{className:"tech-card",children:[r.jsx("img",{src:d.img,alt:d.name,style:d.invert?{filter:"invert()"}:{}}),r.jsx("h3",{children:d.name}),r.jsx("p",{children:d.desc})]},c))})]}),r.jsxs("section",{className:"support",children:[r.jsx("h2",{children:"Support the Project"}),r.jsx("p",{children:"If you want to help Freedom Loader grow, you can contribute or support it directly."}),r.jsx("div",{className:"support-actions",children:r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",target:"_blank",rel:"noopener noreferrer",className:"btn secondary",children:"Contribute on GitHub"})})]})]})]})}function $0(){E.useEffect(()=>{document.title="Features - Freedom Loader"},[]);const[u,f]=E.useState(null),d=[{title:"Multi-Format Downloads",desc:"Download videos in MP4 or audio in MP3 with automatic conversion",icon:"fa-download",v:"1.0.0",cat:"Download"},{title:"Video Quality Selection",desc:"Choose from 6 quality options: Best, Medium, Worst, 1080p, 720p, 480p",icon:"fa-bars",v:"1.0.0",cat:"Download"},{title:"Playlist Support",desc:"Detect and download complete playlists",icon:"fa-list",v:"1.1.0",cat:"Download"},{title:"Video Information Preview",desc:"Preview metadata before download",icon:"fa-eye",v:"1.0.0",cat:"Download"},{title:"Auto Check Info",desc:"Automatically fetch video info when pasting URLs",icon:"fa-wand-magic-sparkles",v:"1.0.0",cat:"Download"},{title:"Metadata Embedding",desc:"Automatically embed title, artist, duration and thumbnail",icon:"fa-tag",v:"1.1.0",cat:"Download"},{title:"Thumbnail Embedding",desc:"Optional thumbnail addition to MP3 files",icon:"fa-image",v:"1.1.0",cat:"Download"},{title:"Custom Video Codecs",desc:"Support for 8 video codecs: H.264, H.265, AV1, VP9, VP9.2, VP8, H.263, Theora",icon:"fa-cog",v:"1.4.0",cat:"Download"},{title:"Custom Output Directory",desc:"Custom download folder selection",icon:"fa-folder-open",v:"1.1.0",cat:"Download"},{title:"Firefox Cookie Integration",desc:"Support Firefox cookies for restricted content",icon:"fa-firefox",v:"1.3.0",cat:"Download"},{title:"Real-Time Progress Tracking",desc:"Live progress bar with percentage and speed",icon:" fa-solid fa-hourglass",v:"1.3.0",cat:"Download"},{title:"Network Speed Indicator",desc:"Display download speed in real-time",icon:"fa-tachometer-alt",v:"1.3.0",cat:"Download"},{title:"Download Cancellation",desc:"Stop current download and clear queue",icon:"fa-ban",v:"1.5.0",cat:"Download"},{title:"Playlist Auto-Download Mode",desc:"Automatic playlist downloading without confirmation",icon:"fa-forward",v:"1.4.0",cat:"Download"},{title:"Playlist Folder Creation",desc:"Auto-create folders named after playlists",icon:"fa-folder-plus",v:"1.5.0",cat:"Download"},{title:"Playlist Info Streaming",desc:"Server-Sent Events streaming for live playlist info",icon:"fa-stream",v:"1.3.0",cat:"Download"},{title:"Audio-Only MP3 Conversion",desc:"Audio extraction and optimized MP3 conversion",icon:"fa-music",v:"1.1.0",cat:"Download"},{title:"Concurrent Fragment Downloads",desc:"8 fragments downloaded in parallel for acceleration",icon:"fa-network-wired",v:"1.1.0",cat:"Download"},{title:"Download Retry Logic",desc:"Automatic retry attempts (10 global retries)",icon:"fa-redo",v:"1.5.0",cat:"Download"},{title:"No File Overwrite",desc:"Protection against accidental file overwriting",icon:"fa-shield",v:"1.0.0",cat:"Download"},{title:"Dynamic Theme System",desc:"Pre-built theme system with dynamic switching",icon:"fa-palette",v:"1.1.0",cat:"Customization"},{title:"Custom Theme Support",desc:"Support for custom themes in .theme.json and ZIP formats",icon:"fa-expand",v:"1.5.0",cat:"Customization"},{title:"Custom Top Bar",desc:"Custom title bar and frameless (toggleable)",icon:"fa-window-maximize",v:"1.3.1",cat:"Customization"},{title:"Settings Panel",desc:"GUI for live configuration",icon:"fa-sliders",v:"1.4.0",cat:"Customization"},{title:"Theme Refresh Button",desc:"Dynamic theme reloading without restart",icon:"fa-sync",v:"1.5.0",cat:"Customization"},{title:"Automatic App Updates",desc:"Automatic update checking and installation",icon:"fa-repeat",v:"1.3.0",cat:"System"},{title:"YT-DLP Auto-Update",desc:"Auto-update yt-dlp engine on startup",icon:"fa-arrow-up",v:"1.2.4",cat:"System"},{title:"Single Instance Lock",desc:"Prevent multiple app instances",icon:"fa-lock",v:"1.3.0",cat:"System"},{title:"Native Dependency Validation",desc:"Startup validation of yt-dlp, FFmpeg, FFprobe and Deno",icon:"fa-check-circle",v:"1.3.1",cat:"System"},{title:"Structured Logging",desc:"Formatted logs with Winston and daily rotation",icon:"fa-file-alt",v:"1.1.2",cat:"System"},{title:"Verbose Logging",desc:"Detailed logs mode for advanced debugging",icon:"fa-terminal",v:"1.4.0",cat:"System"},{title:"Path Validation",desc:"Download path validation for security",icon:"fa-shield-alt",v:"1.4.0",cat:"System"},{title:"FFmpeg Integration",desc:"Full FFmpeg integration for media conversion",icon:"fa-video",v:"1.0.0",cat:"System"},{title:"Deno Runtime Integration",desc:"Deno runtime support for youtube challenge",icon:"fa-server",v:"1.3.0",cat:"System"},{title:"Firefox Browser Requirement",desc:"Built-in Firefox cookie extraction support",icon:"fa-brands fa-firefox-browser",v:"1.3.0",cat:"System"},{title:"Context Isolation",desc:"Electron context isolation for maximum security",icon:"fa-shield",v:"1.5.0",cat:"System"},{title:"Splash Screen",desc:"Startup splash screen with progress bar",icon:"fa-spinner",v:"1.5.0",cat:"System"},{title:"System Notifications",desc:"Native Windows notifications when download completes",icon:"fa-bell",v:"1.1.1",cat:"Tools"},{title:"Logs Folder Access",desc:"Quick button to open logs folder",icon:"fa-folder",v:"1.1.2",cat:"Tools"},{title:"Configuration File Editor",desc:"Direct access to config.json from settings",icon:"fa-edit",v:"1.4.0",cat:"Tools"},{title:"Theme Folder Access",desc:"Quick access to themes folder for creation",icon:"fa-folder-open",v:"1.5.0",cat:"Tools"},{title:"Version Information",desc:"Display current version in interface",icon:"fa-info-circle",v:"1.4.0",cat:"Tools"},{title:"Download Stage Tracking",desc:"Real-time download stage tracking",icon:"fa-tasks",v:"1.3.0",cat:"Tools"},{title:"Server-Sent Events (SSE)",desc:"Non-blocking progress updates via streaming",icon:"fa-broadcast-tower",v:"1.3.0",cat:"Tools"},{title:"Progress Bar Display",desc:"Visual progress interface with percentage",icon:"fa-bars",v:"1.3.0",cat:"Tools"},{title:"IPC Communication",desc:"Secure Electron-Renderer IPC communication",icon:"fa-exchange-alt",v:"1.0.0",cat:"Tools"},{title:"Toast Notifications",desc:"Temporary UI notifications for user feedback",icon:"fa-comment",v:"1.5.0",cat:"Tools"},{title:"Discord Rich Presence",desc:"Discord integration showing download activity",icon:"fa-brands fa-discord",v:"1.2.0",cat:"Integration"},{title:"Official Website Link",desc:"Quick access to official website from app",icon:"fa-globe",v:"1.0.0",cat:"Integration"},{title:"Wiki Access",desc:"Link to official documentation/wiki",icon:"fa-book",v:"1.0.0",cat:"Integration"},{title:"Theme Workshop",desc:"Access to Freedom Loader Theme Workshop",icon:"fa-tools",v:"1.2.0",cat:"Integration"},{title:"GitHub Releases Integration",desc:"GitHub releases integration for updates",icon:"fa-brands fa-github",v:"1.0.0",cat:"Integration"},{title:"YT-DLP Backend",desc:"Using yt-dlp as download engine",icon:"fa-download",v:"1.0.0",cat:"Integration"}],c=["All",...new Set(d.map(v=>v.cat))],m={Download:"#ff6b6b",Customization:"#4ecdc4",System:"#45b7d1",Tools:"#f9ca24",Integration:"#6c5ce7"},p=u&&u!=="All"?d.filter(v=>v.cat===u):d;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                main {
                    width: 100%;
                }

                .features-page {
                    padding: 80px 5%;
                    color: var(--text-primary);
                    background: var(--bg-primary);
                    min-height: 100vh;
                }

                .features-header {
                    max-width: 1200px;
                    margin: 0 auto 60px;
                    text-align: center;
                }

                .features-header h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .features-header p {
                    font-size: 1.2rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                /* Filter Buttons */
                .category-filter {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 60px;
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .filter-btn {
                    padding: 10px 24px;
                    border-radius: 20px;
                    border: 2px solid var(--border-color);
                    background: transparent;
                    color: var(--text-primary);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: 600;
                    font-size: 0.95rem;
                }

                .filter-btn:hover {
                    border-color: var(--accent-primary);
                    color: var(--accent-primary);
                }

                .filter-btn.active {
                    background: var(--accent-primary);
                    color: white;
                    border-color: var(--accent-primary);
                }

                .features-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .category-section {
                    margin-bottom: 60px;
                }

                .category-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    padding-bottom: 15px;
                    border-bottom: 3px solid;
                    display: inline-block;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 25px;
                    margin-bottom: 40px;
                }

                .feature-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 30px;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    position: relative;
                    overflow: hidden;
                }

                .feature-card::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .feature-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                    box-shadow: var(--shadow-hover);
                }

                .feature-card:hover::before {
                    opacity: 1;
                }

                .feature-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                }

                .feature-icon {
                    font-size: 1.8rem;
                    width: 45px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--bg-secondary);
                    border-radius: 8px;
                    flex-shrink: 0;
                }

                .feature-meta {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    flex: 1;
                }

                .feature-title-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    justify-content: space-between;
                }

                .feature-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0;
                }

                .feature-badge {
                    display: inline-block;
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    whitespace: nowrap;
                    color: white;
                }

                .feature-version {
                    font-size: 0.80rem;
                    color: var(--text-tertiary);
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }

                .feature-desc {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.5;
                    margin: 0;
                }

                .features-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 20px;
                    margin-top: 40px;
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .stat-box {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    padding: 25px;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .stat-box:hover {
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                }

                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--accent-primary);
                    margin-bottom: 10px;
                }

                .stat-label {
                    font-size: 0.90rem;
                    color: var(--text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 600;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .features-page {
                        padding: 60px 5%;
                    }

                    .features-header h1 {
                        font-size: 2.5rem;
                    }

                    .features-grid {
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 20px;
                    }

                    .feature-card {
                        padding: 25px;
                    }

                    .category-filter {
                        gap: 8px;
                    }

                    .filter-btn {
                        padding: 8px 18px;
                        font-size: 0.85rem;
                    }
                }

                @media (max-width: 600px) {
                    .features-page {
                        padding: 50px 5%;
                    }

                    .features-header h1 {
                        font-size: 2rem;
                    }

                    .features-header p {
                        font-size: 1rem;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                    }

                    .features-stats {
                        grid-template-columns: 1fr;
                    }

                    .feature-card {
                        padding: 20px;
                    }

                    .feature-title {
                        font-size: 1.1rem;
                    }

                    .category-filter {
                        flex-direction: column;
                    }

                    .filter-btn {
                        width: 100%;
                    }
                }

                /* Coming Soon Section */
                .coming-soon-section {
                    margin-top: 60px;
                    padding: 40px 30px;
                    background: linear-gradient(135deg, var(--card-bg), var(--card-hover-bg));
                    border: 2px solid var(--border-color);
                    border-radius: 12px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    left: 50%;
                    transform: translate(-50%);
                    width: 70%;
                }

                .coming-soon-section::before {
                    content: "";
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200px;
                    height: 200px;
                    background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
                    opacity: 0.08;
                    pointer-events: none;
                }

                .coming-soon-content {
                    position: relative;
                    z-index: 1;
                }

                .coming-soon-icon {
                    font-size: 2.5rem;
                    margin-bottom: 12px;
                    color: var(--accent-primary);
                }

                .coming-soon-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: var(--text-primary);
                }

                .coming-soon-desc {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin-bottom: 20px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .roadmap-btn {
                    display: inline-block;
                    padding: 12px 28px;
                    background: var(--accent-primary);
                    color: white;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                    border: 2px solid var(--accent-primary);
                }

                .roadmap-btn:hover {
                    background: transparent;
                    color: var(--accent-primary);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(77, 166, 255, 0.2);
                }

                @media (max-width: 600px) {
                    .coming-soon-section {
                        padding: 30px 20px;
                        margin-top: 50px;
                    }

                    .coming-soon-icon {
                        font-size: 2rem;
                    }

                    .coming-soon-title {
                        font-size: 1.5rem;
                    }

                    .coming-soon-desc {
                        font-size: 0.9rem;
                    }

                    .roadmap-btn {
                        padding: 10px 24px;
                        font-size: 0.9rem;
                    }
                }
            `}),r.jsx("main",{children:r.jsxs("section",{className:"features-page",children:[r.jsxs("div",{className:"features-header",children:[r.jsx("h1",{children:"Features"}),r.jsx("p",{children:"Discover everything Freedom Loader can do. All fully organized by category for easy browsing."})]}),r.jsx("div",{className:"category-filter",children:c.map(v=>r.jsx("button",{className:`filter-btn ${u===v||u===null&&v==="All"?"active":""}`,onClick:()=>f(v==="All"?null:v),children:v},v))}),r.jsxs("div",{className:"features-stats",children:[r.jsxs("div",{className:"stat-box",children:[r.jsx("div",{className:"stat-number",children:p.length}),r.jsx("div",{className:"stat-label",children:u&&u!=="All"?u:"Total Features"})]}),r.jsxs("div",{className:"stat-box",children:[r.jsx("div",{className:"stat-number",children:r.jsx("i",{class:"fa-solid fa-infinity"})}),r.jsx("div",{className:"stat-label",children:"Possibilities"})]})]}),r.jsx("div",{className:"features-container",children:u===null?c.slice(1).map(v=>r.jsxs("div",{className:"category-section",children:[r.jsx("h2",{className:"category-title",style:{borderColor:m[v]||"#1e90ff"},children:v}),r.jsx("div",{className:"features-grid",children:d.filter(T=>T.cat===v).map((T,S)=>r.jsxs("div",{className:"feature-card",children:[r.jsxs("div",{className:"feature-header",children:[r.jsx("div",{className:"feature-icon",style:{color:m[T.cat]},children:r.jsx("i",{className:`fas ${T.icon}`})}),r.jsxs("div",{className:"feature-meta",children:[r.jsx("div",{className:"feature-title-row",children:r.jsx("h3",{className:"feature-title",children:T.title})}),r.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[r.jsx("span",{className:"feature-badge",style:{backgroundColor:m[T.cat]},children:T.cat}),r.jsxs("span",{className:"feature-version",children:["v",T.v]})]})]})]}),r.jsx("p",{className:"feature-desc",children:T.desc})]},S))})]},v)):r.jsxs("div",{className:"category-section",children:[r.jsx("h2",{className:"category-title",style:{borderColor:m[u]},children:u}),r.jsx("div",{className:"features-grid",children:p.map((v,T)=>r.jsxs("div",{className:"feature-card",children:[r.jsxs("div",{className:"feature-header",children:[r.jsx("div",{className:"feature-icon",style:{color:m[v.cat]},children:r.jsx("i",{className:`fas ${v.icon}`})}),r.jsxs("div",{className:"feature-meta",children:[r.jsx("div",{className:"feature-title-row",children:r.jsx("h3",{className:"feature-title",children:v.title})}),r.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[r.jsx("span",{className:"feature-badge",style:{backgroundColor:m[v.cat]},children:v.cat}),r.jsxs("span",{className:"feature-version",children:["v",v.v]})]})]})]}),r.jsx("p",{className:"feature-desc",children:v.desc})]},T))})]})}),r.jsx("div",{className:"coming-soon-section",children:r.jsxs("div",{className:"coming-soon-content",children:[r.jsx("div",{className:"coming-soon-icon",children:r.jsx("i",{className:"fas fa-rocket"})}),r.jsx("h2",{className:"coming-soon-title",children:"And more to come..."}),r.jsx("p",{className:"coming-soon-desc",children:"These are just the current features. We're constantly working on new features and improvements. Check out our roadmap to see what's coming next!"}),r.jsxs(se,{to:"/roadmap",className:"roadmap-btn",children:[r.jsx("i",{className:"fas fa-map"})," See our Roadmap"]})]})})]})})]})}function I0(){E.useEffect(()=>{document.title="FAQ - Freedom Loader"},[]);const[u,f]=E.useState(null),d={"Installation & Usage":[{q:"How do I install Freedom Loader?",a:"Check the download instructions on the Wiki page to get started quickly and easily."},{q:"Which operating systems are supported?",a:"Freedom Loader currently supports Windows 10 and above. Linux support is planned for future releases."},{q:"Where are my downloaded files stored?",a:"Files are stored locally in the folder you select during download. The default folder is your Downloads directory."},{q:"How do I update the application?",a:"Updates are automatically downloaded and applied on launch. You can also manually download the latest version from the Download page."}],"Features & Limitations":[{q:"What exactly does Freedom Loader do?",a:"Freedom Loader allows you to quickly download video and audio content from the internet with various quality options and formats."},{q:"Can I use Freedom Loader with YouTube or other platforms?",a:"Currently, YouTube is fully supported. More platform compatibility will be added in future releases. The user remains responsible for content usage."},{q:"Are there advanced options or settings?",a:"Yes! You can change the download quality, choose between video or audio-only formats, select output paths, and customize themes."},{q:"Is my personal data collected?",a:"No, all data remains local on your device and is never sent to any server. Your privacy is protected."}],"Contributions & Open Source":[{q:"Can I contribute to the project?",a:"Absolutely! All contributors are welcome. You can open issues, submit pull requests, or discuss ideas on GitHub."},{q:"How do I report a bug or propose a feature?",a:"Use GitHub Discussions or open an issue on the repository to suggest ideas or report problems."},{q:"What license does Freedom Loader use?",a:"Freedom Loader is open source under the GNU GPL v3 license. You can copy and redistribute the code while crediting the original author."},{q:"Can I use the code in my own projects?",a:"Yes, freely! However, you must keep original credits and respect the GNU GPL v3 license."}],"Support & Community":[{q:"How can I contact the developer?",a:"You can use the contact form on the Contact page or reach out via GitHub or social media."},{q:"Where can I discuss with the community?",a:"Join the GitHub Discussions community or connect via social media platforms to engage with other users."},{q:"Is there documentation available?",a:"Yes, comprehensive documentation is available on the Wiki page with guides for installation, usage, and troubleshooting."}],"Security & Privacy":[{q:"Is Freedom Loader safe?",a:"Yes, the app is designed to run locally and does not transmit any personal data. Your downloads remain private."},{q:"How are my files and data protected?",a:"All files remain on your device. Keep your system secure and up-to-date for optimal safety and performance."},{q:"What should I do if I encounter a security issue?",a:"Contact the developer immediately via GitHub or the contact form to report security concerns."}]},c=(m,p)=>{const v=`${m}-${p}`;f(u===v?null:v)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                main {
                    width: 100%;
                }

                .faq-page {
                    padding: 80px 5%;
                    color: var(--text-primary);
                    margin-top: 30px;
                    background: var(--bg-primary);
                    min-height: 100vh;
                }

                .faq-header {
                    max-width: 1000px;
                    margin: 0 auto 60px;
                    text-align: center;
                }

                .faq-header h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .faq-header p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .faq-container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .faq-category {
                    margin-bottom: 50px;
                }

                .category-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 25px;
                    padding-bottom: 15px;
                    border-bottom: 3px solid var(--accent-primary);
                    color: var(--text-primary);
                }

                .faq-item {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    margin-bottom: 12px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .faq-item:hover {
                    border-color: var(--text-secondary);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .faq-question-btn {
                    width: 100%;
                    padding: 20px;
                    background: transparent;
                    border: none;
                    color: var(--text-primary);
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    transition: all 0.3s ease;
                    text-align: left;
                }

                .faq-question-btn:hover {
                    color: var(--accent-primary);
                }

                .faq-item.expanded .faq-question-btn {
                    color: var(--accent-primary);
                }

                .faq-icon {
                    font-size: 1.3rem;
                    transition: transform 0.3s ease;
                    flex-shrink: 0;
                }

                .faq-item.expanded .faq-icon {
                    transform: rotate(180deg);
                }

                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                }

                .faq-item.expanded .faq-answer {
                    max-height: 500px;
                }

                .faq-answer-content {
                    padding: 0 20px 20px;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin: 0;
                }

                .faq-answer-content a {
                    color: var(--accent-primary);
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .faq-answer-content a:hover {
                    text-decoration: underline;
                    opacity: 0.8;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .faq-page {
                        padding: 60px 5%;
                    }

                    .faq-header h1 {
                        font-size: 2.5rem;
                    }

                    .category-title {
                        font-size: 1.5rem;
                    }

                    .faq-question-btn {
                        font-size: 1rem;
                        padding: 18px;
                    }
                }

                @media (max-width: 600px) {
                    .faq-page {
                        padding: 50px 5%;
                    }

                    .faq-header h1 {
                        font-size: 2rem;
                    }

                    .faq-header p {
                        font-size: 1rem;
                    }

                    .category-title {
                        font-size: 1.3rem;
                    }

                    .faq-question-btn {
                        font-size: 0.95rem;
                        padding: 15px;
                    }

                    .faq-answer-content {
                        padding: 0 15px 15px;
                        font-size: 0.9rem;
                    }

                    .faq-container {
                        margin-bottom: 40px;
                    }
                }
            `}),r.jsx("main",{children:r.jsxs("section",{className:"faq-page",children:[r.jsxs("div",{className:"faq-header",children:[r.jsx("h1",{children:"Frequently Asked Questions"}),r.jsx("p",{children:"Find answers to all your questions about Freedom Loader. Click any question to reveal the answer."})]}),r.jsx("div",{className:"faq-container",children:Object.entries(d).map(([m,p])=>r.jsxs("div",{className:"faq-category",children:[r.jsx("h2",{className:"category-title",children:m}),p.map((v,T)=>r.jsxs("div",{className:`faq-item ${u===`${m}-${T}`?"expanded":""}`,children:[r.jsxs("button",{className:"faq-question-btn",onClick:()=>c(m,T),children:[r.jsx("span",{children:v.q}),r.jsx("i",{className:"fas fa-chevron-down faq-icon"})]}),r.jsx("div",{className:"faq-answer",children:r.jsx("p",{className:"faq-answer-content",children:v.a})})]},T))]},m))})]})})]})}function P0(){E.useEffect(()=>{document.title="Wiki - Freedom Loader"},[]);const[u,f]=E.useState("Installation"),d={Installation:{icon:"fa-download",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Installation"}),r.jsx("h3",{children:"System Requirements"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Windows 10 or above"}),r.jsx("li",{children:"Firefox Browser with YouTube login"}),r.jsx("li",{children:"Basic computer performance"})]}),r.jsx("h3",{children:"Installation Steps"}),r.jsxs("ol",{children:[r.jsx("li",{children:"Download the latest version from the Download page"}),r.jsx("li",{children:"Run the installer and follow the setup wizard"}),r.jsx("li",{children:"Launch Freedom Loader from the Start menu or desktop shortcut"}),r.jsx("li",{children:"Open Firefox and log in to YouTube"}),r.jsx("li",{children:"Play a video on YouTube to verify the session"}),r.jsx("li",{children:"Launch Freedom Loader and start downloading!"})]}),r.jsx("h3",{children:"Troubleshooting"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Antivirus blocking:"})," Temporarily disable your antivirus during installation"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Update fails:"})," Try restarting the app or running as Administrator"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Cookies not found:"})," Make sure Firefox is properly installed and you're logged into YouTube"]})]})]})},Usage:{icon:"fa-play",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Usage Guide"}),r.jsx("h3",{children:"First Launch"}),r.jsx("p",{children:"At your first launch, your antivirus might flag the app. This is normal—temporarily disable it to proceed. You may also see a warning about accessing Firefox cookies. This is in line with yt-dlp security."}),r.jsx("h3",{children:"Requirements"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Be logged into YouTube on Firefox"}),r.jsx("li",{children:"Have a valid Google account"}),r.jsx("li",{children:"Have played at least one video on YouTube to establish a session"})]}),r.jsx("h3",{children:"Basic Workflow"}),r.jsxs("ol",{children:[r.jsx("li",{children:"Paste a YouTube URL into the app"}),r.jsx("li",{children:"Select quality (Best, Medium, Worst) or specific resolution"}),r.jsx("li",{children:"Choose format (Video MP4 or Audio MP3)"}),r.jsx("li",{children:"Select output folder"}),r.jsx("li",{children:"Click Download and wait for completion"})]}),r.jsx("h3",{children:"Advanced Options available in the settings panel"})]})},Firefox:{icon:"fa-brands fa-firefox-browser",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Setting Up Firefox"}),r.jsx("p",{children:"Freedom Loader requires Firefox to access YouTube cookies for bypassing age restrictions and authentication."}),r.jsx("h3",{children:"Installation Steps"}),r.jsxs("ol",{children:[r.jsxs("li",{children:["Download Firefox from ",r.jsx("a",{href:"https://www.mozilla.org/firefox",target:"_blank",rel:"noopener noreferrer",children:"mozilla.org"})]}),r.jsx("li",{children:"Install Firefox on your computer"}),r.jsx("li",{children:"Open Firefox and log in to your YouTube account"}),r.jsx("li",{children:"Play a video on YouTube to establish the session"}),r.jsx("li",{children:"Close Firefox completely"}),r.jsx("li",{children:"Launch Freedom Loader"})]}),r.jsx("h3",{children:"Important Notes"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Firefox must be closed when downloading with Freedom Loader"}),r.jsx("li",{children:"Your YouTube session should be active for cookies to work"}),r.jsx("li",{children:"Age-restricted videos require valid YouTube authentication"}),r.jsx("li",{children:"Chrome support is planned for future versions"})]}),r.jsx("h3",{children:"Troubleshooting"}),r.jsx("p",{children:"If cookies aren't found, try logging out and back into YouTube, then repeat the steps above."})]})},Contributing:{icon:"fa-code-branch",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Contributing to Freedom Loader"}),r.jsx("p",{children:"Thanks for your interest in contributing! All contributions are welcome and appreciated."}),r.jsx("h3",{children:"Ways to Contribute"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Report bugs:"})," Open an issue with clear description"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Feature requests:"})," Suggest improvements and new features"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Code contributions:"})," Submit pull requests with improvements"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Documentation:"})," Help improve documentation and guides"]})]}),r.jsx("h3",{children:"Pull Request Process"}),r.jsxs("ol",{children:[r.jsx("li",{children:"Fork the repository on GitHub"}),r.jsxs("li",{children:["Create a feature branch: ",r.jsx("code",{children:"git checkout -b feature/my-feature"})]}),r.jsx("li",{children:"Make your changes"}),r.jsx("li",{children:"Add tests or verification steps"}),r.jsx("li",{children:"Submit a PR to the main branch"})]}),r.jsx("h3",{children:"Guidelines"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Keep PR titles clear and descriptive"}),r.jsx("li",{children:"Document what you changed and why"}),r.jsx("li",{children:"Follow existing code style"}),r.jsx("li",{children:"Be respectful and constructive"})]}),r.jsx("p",{children:"Thanks for making Freedom Loader better! 💪"})]})},"Common Issues":{icon:"fa-circle-exclamation",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Common Issues & Solutions"}),r.jsx("h3",{children:"1. Not logged into YouTube"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Problem:"})," Cookies not retrieved or access denied",r.jsx("br",{}),r.jsx("strong",{children:"Solution:"})," Log into YouTube on Firefox, play a video, then close and restart Freedom Loader"]}),r.jsx("h3",{children:"2. Antivirus Blocking"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Problem:"})," App won't launch or triggers warnings",r.jsx("br",{}),r.jsx("strong",{children:"Solution:"})," Temporarily disable antivirus or add Freedom Loader to whitelist"]}),r.jsx("h3",{children:"3. Outdated Cookies"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Problem:"})," Downloads fail after working before",r.jsx("br",{}),r.jsx("strong",{children:"Solution:"})," Log out and back into YouTube to refresh cookies"]}),r.jsx("h3",{children:"4. Incomplete Video Information"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Problem:"})," Some videos fail to load properly",r.jsx("br",{}),r.jsx("strong",{children:"Solution:"})," This may be a YouTube or yt-dlp limitation. Try updating the app"]}),r.jsx("h3",{children:"5. Download Speed Issues"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Problem:"})," Downloads are very slow",r.jsx("br",{}),r.jsx("strong",{children:"Solution:"})," Check your internet connection and try again. Some videos may be throttled by YouTube"]}),r.jsxs("p",{children:["For other issues, check the logs or ",r.jsx("a",{href:"/contact",children:"contact support"})]})]})},"Report Bug":{icon:"fa-bug",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"How to Report Issues"}),r.jsx("p",{children:"Found a bug or issue? Help us fix it by providing detailed information."}),r.jsx("h3",{children:"What to Include in Your Report"}),r.jsxs("ol",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Clear title:"})," Describe the problem in one sentence"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Steps to reproduce:"})," List exactly what you did"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Expected result:"})," What should have happened"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Actual result:"})," What actually happened"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Screenshots/Logs:"})," Attach logs from ",r.jsx("code",{children:"C:\\Users\\[USERNAME]\\AppData\\Local\\FreedomLoader\\logs\\"})]})]}),r.jsx("h3",{children:"System Information"}),r.jsx("p",{children:"Include:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Freedom Loader version (shown in window title)"}),r.jsx("li",{children:"Windows version"}),r.jsx("li",{children:"Antivirus software being used"}),r.jsx("li",{children:"Any other relevant details"})]}),r.jsx("h3",{children:"Issue Types"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Bug:"})," App crash or unexpected behavior"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Feature request:"})," Idea for new functionality"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Question:"})," Need help or clarification"]})]}),r.jsx("h3",{children:"Where to Report"}),r.jsxs("p",{children:["Report issues on ",r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/issues",target:"_blank",rel:"noopener noreferrer",children:"GitHub Issues"})," or use the ",r.jsx("a",{href:"/contact",children:"contact form"})]}),r.jsx("p",{children:"Thanks for helping improve Freedom Loader! 📈"})]})}},c=Object.keys(d);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                main {
                    width: 100%;
                }

                .wiki-page {
                    padding: 80px 5%;
                    color: var(--text-primary);
                    background: var(--bg-primary);
                    min-height: 100vh;
                }

                .wiki-header {
                    max-width: 1000px;
                    margin: 0 auto 50px;
                    text-align: center;
                }

                .wiki-header h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                }

                .wiki-header p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                }

                .wiki-container {
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .wiki-tabs {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 12px;
                    margin-bottom: 40px;
                }

                .wiki-tab {
                    padding: 14px 16px;
                    background: var(--card-bg);
                    border: 2px solid var(--border-color);
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                    font-weight: 600;
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }

                .wiki-tab:hover {
                    border-color: var(--accent-primary);
                    color: var(--accent-primary);
                }

                .wiki-tab.active {
                    background: var(--accent-primary);
                    border-color: var(--accent-primary);
                    color: white;
                }

                .wiki-content {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 40px;
                    animation: fadeIn 0.3s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .wiki-content h2 {
                    font-size: 2.2rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    color: var(--text-primary);
                    padding-bottom: 15px;
                    border-bottom: 3px solid var(--accent-primary);
                }

                .wiki-content h3 {
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-top: 25px;
                    margin-bottom: 15px;
                    color: var(--text-primary);
                }

                .wiki-content p {
                    font-size: 1rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: 15px;
                }

                .wiki-content ol, .wiki-content ul {
                    margin: 15px 0 20px 25px;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.8;
                }

                .wiki-content li {
                    margin-bottom: 10px;
                }

                .wiki-content strong {
                    color: var(--text-primary);
                    font-weight: 600;
                }

                .wiki-content code {
                    background: var(--bg-secondary);
                    color: var(--accent-primary);
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-family: monospace;
                    font-size: 0.9rem;
                    word-wrap: break-word;
                }

                .wiki-content a {
                    color: var(--accent-primary);
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .wiki-content a:hover {
                    text-decoration: underline;
                    opacity: 0.8;
                }

                @media (max-width: 900px) {
                    .wiki-page {
                        padding: 60px 5%;
                    }

                    .wiki-header h1 {
                        font-size: 2.5rem;
                    }

                    .wiki-tabs {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .wiki-content {
                        padding: 25px;
                    }

                    .wiki-content h2 {
                        font-size: 1.8rem;
                    }
                }

                @media (max-width: 600px) {
                    .wiki-page {
                        padding: 50px 5%;
                    }

                    .wiki-header h1 {
                        font-size: 2rem;
                    }

                    .wiki-tabs {
                        grid-template-columns: 1fr;
                    }

                    .wiki-content {
                        padding: 20px;
                    }

                    .wiki-content h2 {
                        font-size: 1.5rem;
                    }

                    .wiki-content h3 {
                        font-size: 1.1rem;
                    }

                    .wiki-content p, .wiki-content ol, .wiki-content ul {
                        font-size: 0.95rem;
                    }
                }
            `}),r.jsx("main",{children:r.jsxs("section",{className:"wiki-page",children:[r.jsxs("div",{className:"wiki-header",children:[r.jsx("h1",{children:"Wiki"}),r.jsx("p",{children:"Complete documentation and guides for Freedom Loader"})]}),r.jsxs("div",{className:"wiki-container",children:[r.jsx("div",{className:"wiki-tabs",children:c.map(m=>r.jsxs("button",{className:`wiki-tab ${u===m?"active":""}`,onClick:()=>f(m),children:[r.jsx("i",{className:`fas ${d[m].icon}`}),m]},m))}),r.jsx("div",{className:"wiki-content",children:d[u].content})]})]})})]})}function ev(){return E.useEffect(()=>{document.title="Contributing - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                .contributing {
                    background: var(--bg-secondary);
                    color: var(--text-primary);
                    padding: 80px 20px;
                    min-height: 100vh;
                }

                .container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                h1 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 15px;
                    text-align: center;
                }

                .subtitle {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    text-align: center;
                    margin-bottom: 60px;
                }

                .section h2 {
                    font-size: 1.6rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: var(--text-primary);
                }

                .section h3 {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-top: 25px;
                    margin-bottom: 12px;
                    color: var(--text-primary);
                }

                .section h3:first-of-type {
                    margin-top: 0;
                }

                .section p {
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 12px;
                }

                .section ul {
                    list-style: none;
                    padding: 0;
                    margin: 15px 0;
                }

                .section li {
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 8px;
                    padding-left: 20px;
                    position: relative;
                }

                .section li:before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--accent-primary);
                    font-weight: 700;
                }

                .code-block {
                    background: var(--bg-primary);
                    border: 1px solid var(--border-color);
                    border-radius: 6px;
                    padding: 12px;
                    font-family: "Monaco", "Courier New", monospace;
                    font-size: 0.85rem;
                    overflow-x: auto;
                    margin: 12px 0;
                    color: var(--accent-primary);
                }

                .code-inline {
                    background: var(--bg-primary);
                    padding: 2px 5px;
                    border-radius: 3px;
                    font-family: "Monaco", "Courier New", monospace;
                    font-size: 0.9em;
                    color: var(--accent-primary);
                }

                .cta {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    padding: 35px;
                    text-align: center;
                    margin-top: 60px;
                }

                .cta h3 {
                    margin: 0 0 10px 0;
                }

                .cta p {
                    margin: 0 0 20px 0;
                }

                .cta-links {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .cta-link {
                    padding: 10px 24px;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    display: inline-block;
                }

                .cta-primary {
                    background: var(--accent-primary);
                    color: white;
                }

                .cta-primary:hover {
                    background: var(--accent-hover);
                    transform: translateY(-1px);
                }

                .cta-secondary {
                    background: var(--card-bg);
                    color: var(--text-primary);
                    border: 1px solid var(--border-color);
                }

                .cta-secondary:hover {
                    background: var(--bg-primary);
                    border-color: var(--text-secondary);
                }

                @media (max-width: 768px) {
                    .contributing {
                        padding: 60px 20px;
                    }

                    h1 {
                        font-size: 2rem;
                    }

                    .section h2 {
                        font-size: 1.3rem;
                    }

                    .cta-links {
                        flex-direction: column;
                    }

                }
            `}),r.jsx("main",{className:"contributing",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Contributing to Freedom Loader"}),r.jsx("p",{className:"subtitle",children:"Help make Freedom Loader better. We welcome all contributions."}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"How to Contribute"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Report bugs with clear steps to reproduce"}),r.jsx("li",{children:"Suggest features or improvements"}),r.jsx("li",{children:"Write code fixes and new features"}),r.jsx("li",{children:"Improve documentation"}),r.jsx("li",{children:"Help others in discussions"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"Getting Started"}),r.jsx("h3",{children:"Setup"}),r.jsxs("div",{className:"code-block",children:["git clone https://github.com/MasterAcnolo/Freedom-Loader.git",r.jsx("br",{}),"cd Freedom-Loader",r.jsx("br",{}),"npm install",r.jsx("br",{}),"npm run dev"]}),r.jsx("h3",{children:"Quick Tips"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Fork the repository on GitHub"}),r.jsxs("li",{children:["Create a feature branch: ",r.jsx("span",{className:"code-inline",children:"git checkout -b feature/your-feature"})]}),r.jsx("li",{children:"Make your changes and test"}),r.jsx("li",{children:"Commit with clear messages"}),r.jsx("li",{children:"Push and open a Pull Request"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"Reporting Issues"}),r.jsx("p",{children:"When reporting bugs, include:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Clear description of the problem"}),r.jsx("li",{children:"Steps to reproduce"}),r.jsx("li",{children:"Expected vs actual behavior"}),r.jsx("li",{children:"Browser/OS information"}),r.jsx("li",{children:"Screenshots if relevant"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"Code of Conduct"}),r.jsx("p",{children:"Be respectful, constructive, and inclusive. Discrimination or harassment will not be tolerated."})]}),r.jsxs("div",{className:"cta",children:[r.jsx("h3",{children:"Ready to Contribute?"}),r.jsx("p",{children:"Check out the issues or start with something small."}),r.jsxs("div",{className:"cta-links",children:[r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/issues",target:"_blank",rel:"noopener noreferrer",className:"cta-link cta-primary",children:"View Issues"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",target:"_blank",rel:"noopener noreferrer",className:"cta-link cta-secondary",children:"GitHub Repository"})]})]})]})})]})}function tv(){E.useEffect(()=>{document.title="Roadmap - Freedom Loader"},[]);const[u,f]=E.useState(null),d={"Coming Soon":[{title:"Batch Processing",desc:"Download multiple videos in parallel with queue management"},{title:"Head Less Version",desc:"Expose a Full Api to use Freedom Loader in other Apps"},{title:"History & Stats",desc:"Track download history and view detailed statistics (Locally)"},{title:"Multi-Language Support",desc:"Full internationalization with multiple language support"}],"Working On":[{title:"Spotify Support",desc:"Supporting Spotify medias"},{title:"Automatic Update Launch",desc:"Add CI/CD Pipeline for faster version"},{title:"Chrome Cookie Support",desc:"Support All Browser Cookies"},{title:"Custom Commands Injection",desc:"Add other arguments in download process"}],"Future Ideas":[{title:"Mobile App",desc:"Native mobile application for iOS and Android platforms"},{title:"Linux Version",desc:"Support Ubuntu or other Linux Distro (Because Linus)"},{title:"Browser Extension",desc:"Direct integration with web browsers for one-click downloading"},{title:"Better Workshop",desc:"Community marketplace for themes, plugins, and tools"},{title:"Web Version",desc:"Web-based interface accessible from anywhere"}]},c={"Coming Soon":"#ff3300","Working On":"#4da6ff","Future Ideas":"#0dd606"};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                main {
                    width: 100%;
                }

                .roadmap-page {
                    padding: 80px 5%;
                    color: var(--text-primary);
                    margin-top: 30px;
                    background: var(--bg-primary);
                    min-height: 100vh;
                }

                .roadmap-header {
                    max-width: 1200px;
                    margin: 0 auto 80px;
                    text-align: center;
                }

                .roadmap-header h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .roadmap-header p {
                    font-size: 1.2rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .roadmap-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 30px;
                }

                .roadmap-section {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    position: relative;
                }

                .roadmap-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 42px;
                    border-radius: 2px;
                }

                .roadmap-section.coming-soon::before {
                    background: #ff3300;
                }

                .roadmap-section.in-dev::before {
                    background: #4da6ff;
                }

                .roadmap-section.future::before {
                    background: #0dd606;
                }

                .section-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 10px;
                    padding-left: 15px;
                }

                .section-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    font-family: "Poppins", sans-serif;
                    margin: 0;
                }

                .section-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    flex-shrink: 0;
                }

                .roadmap-item {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    padding: 18px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .roadmap-item::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 3px;
                    width: 0%;
                    border-radius: 10px 0 0 0;
                    transition: width 0.3s ease;
                }

                .roadmap-item.coming-soon::before {
                    background: #ff3300;
                }

                .roadmap-item.in-dev::before {
                    background: #4da6ff;
                }

                .roadmap-item.future::before {
                    background: #0dd606;
                }

                .roadmap-item:hover {
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                    transform: translateY(-4px);
                }

                .roadmap-item:hover::before {
                    width: 100%;
                }

                .item-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                }

                .item-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin: 0;
                }

                .item-icon {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    transition: transform 0.3s ease;
                }

                .roadmap-item.expanded .item-icon {
                    transform: rotate(180deg);
                }

                .item-desc {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    margin: 0;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    margin-top: 0;
                    line-height: 1.5;
                }

                .roadmap-item.expanded .item-desc {
                    max-height: 300px;
                    margin-top: 12px;
                }

                .timdisplay: noner-gradient(180deg, var(--border-color) 0%, transparent 100%);
                    margin: 20px auto;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .roadmap-page {
                        padding: 60px 5%;
                    }1100px) {
                    .roadmap-container {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media (max-width: 900px) {
                    .roadmap-page {
                        padding: 60px 5%;
                    }

                    .roadmap-header h1 {
                        font-size: 2.5rem;
                    }

                    .section-title {
                        font-size: 1.3rem;
                    }

                    .roadmap-container {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 600px) {
                    .roadmap-page {
                        padding: 50px 5%;
                    }

                    .roadmap-header h1 {
                        font-size: 2rem;
                    }

                    .roadmap-header p {
                        font-size: 1rem;
                    }

                    .section-title {
                        font-size: 1.3rem;
                    }

                    .roadmap-header {
                        margin-bottom: 50px;
                    }

                    .roadmap-container {
                        gap: 20px;
                    }

                    .roadmap-item {
                        padding: 15px;
                    }

                    .item-title {
                        font-size: 1rem;
                    }

                    .section-header {
                        margin-bottom: 15px;
                        padding-left: 12px;
                    }
                }
            `}),r.jsx("main",{children:r.jsxs("section",{className:"roadmap-page",children:[r.jsxs("div",{className:"roadmap-header",children:[r.jsx("h1",{children:"Roadmap"}),r.jsx("p",{children:"See what's coming next for Freedom Loader. We're constantly innovating and improving."})]}),r.jsx("div",{className:"roadmap-container",children:Object.entries(d).map(([m,p],v)=>r.jsxs("div",{className:`roadmap-section ${m==="Coming Soon"?"coming-soon":m==="Working On"?"in-dev":"future"}`,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"section-dot",style:{backgroundColor:c[m]}}),r.jsx("h2",{className:"section-title",children:m})]}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:p.map((T,S)=>r.jsxs("div",{className:`roadmap-item ${u===`${m}-${S}`?"expanded":""} ${m==="Coming Soon"?"coming-soon":m==="Working On"?"in-dev":"future"}`,onClick:()=>f(u===`${m}-${S}`?null:`${m}-${S}`),children:[r.jsxs("div",{className:"item-header",children:[r.jsx("h3",{className:"item-title",children:T.title}),r.jsx("i",{className:"fas fa-chevron-down item-icon"})]}),r.jsx("p",{className:"item-desc",children:T.desc})]},S))})]},m))})]})})]})}function av(){return E.useEffect(()=>{document.title="Terms - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsx("section",{className:"terms",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Terms & Conditions"}),r.jsx("p",{className:"last-updated",children:"Last updated: November 13, 2025"}),r.jsx("p",{children:"These terms govern your use of the Freedom Loader desktop application. By using the app, you agree to these terms. If you don't agree, don't use the app—simple as that."}),r.jsx("h2",{children:"1. Using Freedom Loader"}),r.jsx("p",{children:"Freedom Loader is meant for personal use to download and manage media files. You are responsible for your own actions when using the app. Don't misuse it or distribute illegal content."}),r.jsx("h2",{children:"2. No Personal Data Collection"}),r.jsxs("p",{children:["We do ",r.jsx("strong",{children:"not"})," collect your personal data. All logs, errors, and metadata are stored locally on your device. Any sharing is done manually and explicitly by you (for example via Discord Rich Presence)."]}),r.jsx("h2",{children:"3. Intellectual Property & Open Source"}),r.jsxs("p",{children:["Freedom Loader is Open Source and licensed under the ",r.jsx("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html",target:"_blank",children:"GNU General Public License v3"}),". You are free to copy, modify, and redistribute the app under these terms, ",r.jsx("strong",{children:"but you must always credit the original author (MasterAcnolo)."})]}),r.jsxs("p",{children:["All assets, code, and design elements are part of the project. Use them responsibly and respect the license. While Freedom Loader is designed for media management, ",r.jsx("strong",{children:"we do not condone nor directly provide access to any copyrighted platform content"})," (like YouTube). Users are solely responsible for how they use the app—so play fair, and keep it legal!"]}),r.jsx("h2",{children:"4. Updates and Features"}),r.jsx("p",{children:"We may release updates or remove features at any time. We aim to improve your experience, but we don't guarantee anything will always work perfectly. Use at your own risk."}),r.jsx("h2",{children:"5. Liability"}),r.jsx("p",{children:"Freedom Loader is provided as-is. We are not liable for any damages, data loss, or issues caused by the app. Backup your files and use common sense."}),r.jsx("h2",{children:"6. Third-Party Links"}),r.jsx("p",{children:"The app may include links to other websites or services. We are not responsible for their content, privacy policies, or practices."}),r.jsx("h2",{children:"7. Changes to These Terms"}),r.jsx("p",{children:'We may update these terms occasionally. Changes will be posted on this page with a new "Last updated" date. Keep an eye out if you want to stay in the loop.'}),r.jsx("h2",{children:"Contact"}),r.jsxs("p",{children:["For questions about these terms, reach out via ",r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",children:"GitHub Discussions"})," or ",r.jsx("a",{href:"https://www.linkedin.com/in/axelnicolas25",target:"_blank",children:"LinkedIn"}),"."]})]})})})]})}function lv(){return E.useEffect(()=>{document.title="Privacy - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsx("section",{className:"privacy",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Privacy Policy"}),r.jsxs("p",{className:"last-updated",children:[r.jsx("strong",{children:"Last updated:"})," November 13, 2025"]}),r.jsx("p",{children:"Freedom Loader respects your privacy. This Privacy Policy explains how we handle any data you might use with the app and how we protect your privacy."}),r.jsx("h2",{children:"1. Information We Collect"}),r.jsxs("p",{children:["Freedom Loader is a desktop application. We do ",r.jsx("strong",{children:"not"})," collect personal information such as names, emails, or browsing history. The only data handled by the app is:"]}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Usage Data:"})," Logs or error reports generated locally on your machine to help the app function correctly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Optional metadata:"})," Information from downloaded media (titles, authors, duration) stored locally."]})]}),r.jsx("p",{children:"No data is sent to any server unless you explicitly choose to share it (for example, using Discord Rich Presence)."}),r.jsx("h2",{children:"2. Cookies & Tracking"}),r.jsx("p",{children:"Freedom Loader is a desktop app and does not use cookies or any web tracking technologies."}),r.jsx("h2",{children:"3. Use of Your Data"}),r.jsx("p",{children:"Any data processed by the app is used solely to ensure proper functionality, improve performance, and provide features like download logging and Rich Presence. No personal data is shared with third parties."}),r.jsx("h2",{children:"4. Retention"}),r.jsx("p",{children:"All usage data and metadata are stored locally on your device and remain there until you delete them. Freedom Loader does not store data remotely."}),r.jsx("h2",{children:"5. Security"}),r.jsx("p",{children:"We take reasonable measures to protect your data on your device, but no system is 100% secure. Please use your own discretion when handling downloaded media."}),r.jsx("h2",{children:"6. Children's Privacy"}),r.jsx("p",{children:"Freedom Loader is not intended for children under 13, and we do not knowingly collect any personal information from children."}),r.jsx("h2",{children:"7. Links to Other Websites"}),r.jsx("p",{children:"Any links to external websites in the app are for convenience. We are not responsible for the privacy practices of other sites."}),r.jsx("h2",{children:"8. Changes to This Privacy Policy"}),r.jsx("p",{children:'We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated "Last updated" date.'}),r.jsx("h2",{children:"Contact"}),r.jsxs("p",{children:["For questions regarding this Privacy Policy, visit our ",r.jsx("a",{href:"/contact",children:"contact page"}),"."]})]})})})]})}function nv(){return E.useEffect(()=>{document.title="Contact - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsx("section",{className:"contact",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Contact Me"}),r.jsx("p",{children:"If you have any questions, suggestions, or need support, reach out using the methods below or fill out the form."}),r.jsxs("div",{className:"contact-methods",children:[r.jsxs("div",{className:"contact-card",children:[r.jsx("i",{className:"fab fa-github"}),r.jsx("h3",{children:"GitHub"}),r.jsx("p",{children:"Join the discussions, report bugs, and contribute to the project:"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",rel:"noopener noreferrer",children:"GitHub Discussions"})]}),r.jsxs("div",{className:"contact-card",children:[r.jsx("i",{className:"fab fa-linkedin-in"}),r.jsx("h3",{children:"LinkedIn"}),r.jsx("p",{children:"Connect for updates, networking, and professional inquiries:"}),r.jsx("a",{href:"https://www.linkedin.com/in/axelnicolas25",target:"_blank",rel:"noopener noreferrer",children:"@axelnicolas25"})]})]}),r.jsxs("form",{className:"contact-form",action:"https://api.web3forms.com/submit",method:"POST",children:[r.jsx("input",{type:"hidden",name:"apikey",value:"cd8edfb2-7b53-4db9-a545-8a055f04612c"}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"name",children:"Name"}),r.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your name",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",children:"Email"}),r.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Your email",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"message",children:"Message"}),r.jsx("textarea",{id:"message",name:"message",placeholder:"Your message...",required:!0})]}),r.jsx("button",{type:"submit",children:"Send Message"})]})]})})})]})}function iv(){return r.jsxs(r.Fragment,{children:[r.jsx(Z0,{}),r.jsx(Q0,{}),r.jsxs(u0,{children:[r.jsx(Nt,{path:"/",element:r.jsx(J0,{})}),r.jsx(Nt,{path:"/about",element:r.jsx(W0,{})}),r.jsx(Nt,{path:"/faq",element:r.jsx(I0,{})}),r.jsx(Nt,{path:"/features",element:r.jsx($0,{})}),r.jsx(Nt,{path:"/wiki",element:r.jsx(P0,{})}),r.jsx(Nt,{path:"/contributing",element:r.jsx(ev,{})}),r.jsx(Nt,{path:"/roadmap",element:r.jsx(tv,{})}),r.jsx(Nt,{path:"/download",element:r.jsx(F0,{})}),r.jsx(Nt,{path:"/terms",element:r.jsx(av,{})}),r.jsx(Nt,{path:"/privacy",element:r.jsx(lv,{})}),r.jsx(Nt,{path:"/contact",element:r.jsx(nv,{})})]}),r.jsx(V0,{})]})}sg.createRoot(document.getElementById("root")).render(r.jsxs(r.Fragment,{children:[r.jsx(G0,{}),r.jsx(M0,{basename:"/Freedom-Loader-Site/",children:r.jsx(iv,{})})]}));
