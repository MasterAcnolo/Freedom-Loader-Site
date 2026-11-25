(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function d(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(m){if(m.ep)return;m.ep=!0;const p=d(m);fetch(m.href,p)}})();var Tu={exports:{}},Cn={};var Fd;function tg(){if(Fd)return Cn;Fd=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(c,m,p){var g=null;if(p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),"key"in m){p={};for(var T in m)T!=="key"&&(p[T]=m[T])}else p=m;return m=p.ref,{$$typeof:o,type:c,key:g,ref:m!==void 0?m:null,props:p}}return Cn.Fragment=f,Cn.jsx=d,Cn.jsxs=d,Cn}var Wd;function ag(){return Wd||(Wd=1,Tu.exports=tg()),Tu.exports}var r=ag(),Au={exports:{}},Mn={},Ru={exports:{}},Du={};var $d;function lg(){return $d||($d=1,(function(o){function f(D,L){var F=D.length;D.push(L);e:for(;0<F;){var pe=F-1>>>1,Se=D[pe];if(0<m(Se,L))D[pe]=L,D[F]=Se,F=pe;else break e}}function d(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var L=D[0],F=D.pop();if(F!==L){D[0]=F;e:for(var pe=0,Se=D.length,x=Se>>>1;pe<x;){var O=2*(pe+1)-1,q=D[O],G=O+1,P=D[G];if(0>m(q,F))G<Se&&0>m(P,q)?(D[pe]=P,D[G]=F,pe=G):(D[pe]=q,D[O]=F,pe=O);else if(G<Se&&0>m(P,F))D[pe]=P,D[G]=F,pe=G;else break e}}return L}function m(D,L){var F=D.sortIndex-L.sortIndex;return F!==0?F:D.id-L.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;o.unstable_now=function(){return p.now()}}else{var g=Date,T=g.now();o.unstable_now=function(){return g.now()-T}}var b=[],v=[],C=1,j=null,U=3,X=!1,Q=!1,Y=!1,H=!1,K=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function xe(D){for(var L=d(v);L!==null;){if(L.callback===null)c(v);else if(L.startTime<=D)c(v),L.sortIndex=L.expirationTime,f(b,L);else break;L=d(v)}}function be(D){if(Y=!1,xe(D),!Q)if(d(b)!==null)Q=!0,Ne||(Ne=!0,Je());else{var L=d(v);L!==null&&Oe(be,L.startTime-D)}}var Ne=!1,W=-1,De=5,Ke=-1;function _t(){return H?!0:!(o.unstable_now()-Ke<De)}function pt(){if(H=!1,Ne){var D=o.unstable_now();Ke=D;var L=!0;try{e:{Q=!1,Y&&(Y=!1,I(W),W=-1),X=!0;var F=U;try{t:{for(xe(D),j=d(b);j!==null&&!(j.expirationTime>D&&_t());){var pe=j.callback;if(typeof pe=="function"){j.callback=null,U=j.priorityLevel;var Se=pe(j.expirationTime<=D);if(D=o.unstable_now(),typeof Se=="function"){j.callback=Se,xe(D),L=!0;break t}j===d(b)&&c(b),xe(D)}else c(b);j=d(b)}if(j!==null)L=!0;else{var x=d(v);x!==null&&Oe(be,x.startTime-D),L=!1}}break e}finally{j=null,U=F,X=!1}L=void 0}}finally{L?Je():Ne=!1}}}var Je;if(typeof J=="function")Je=function(){J(pt)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,gt=Ot.port2;Ot.port1.onmessage=pt,Je=function(){gt.postMessage(null)}}else Je=function(){K(pt,0)};function Oe(D,L){W=K(function(){D(o.unstable_now())},L)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(D){D.callback=null},o.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):De=0<D?Math.floor(1e3/D):5},o.unstable_getCurrentPriorityLevel=function(){return U},o.unstable_next=function(D){switch(U){case 1:case 2:case 3:var L=3;break;default:L=U}var F=U;U=L;try{return D()}finally{U=F}},o.unstable_requestPaint=function(){H=!0},o.unstable_runWithPriority=function(D,L){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=U;U=D;try{return L()}finally{U=F}},o.unstable_scheduleCallback=function(D,L,F){var pe=o.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=F+Se,D={id:C++,callback:L,priorityLevel:D,startTime:F,expirationTime:Se,sortIndex:-1},F>pe?(D.sortIndex=F,f(v,D),d(b)===null&&D===d(v)&&(Y?(I(W),W=-1):Y=!0,Oe(be,F-pe))):(D.sortIndex=Se,f(b,D),Q||X||(Q=!0,Ne||(Ne=!0,Je()))),D},o.unstable_shouldYield=_t,o.unstable_wrapCallback=function(D){var L=U;return function(){var F=U;U=L;try{return D.apply(this,arguments)}finally{U=F}}}})(Du)),Du}var Id;function ng(){return Id||(Id=1,Ru.exports=lg()),Ru.exports}var Cu={exports:{}},$={};var Pd;function ig(){if(Pd)return $;Pd=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),U=Symbol.iterator;function X(x){return x===null||typeof x!="object"?null:(x=U&&x[U]||x["@@iterator"],typeof x=="function"?x:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,H={};function K(x,O,q){this.props=x,this.context=O,this.refs=H,this.updater=q||Q}K.prototype.isReactComponent={},K.prototype.setState=function(x,O){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,O,"setState")},K.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function I(){}I.prototype=K.prototype;function J(x,O,q){this.props=x,this.context=O,this.refs=H,this.updater=q||Q}var xe=J.prototype=new I;xe.constructor=J,Y(xe,K.prototype),xe.isPureReactComponent=!0;var be=Array.isArray;function Ne(){}var W={H:null,A:null,T:null,S:null},De=Object.prototype.hasOwnProperty;function Ke(x,O,q){var G=q.ref;return{$$typeof:o,type:x,key:O,ref:G!==void 0?G:null,props:q}}function _t(x,O){return Ke(x.type,O,x.props)}function pt(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function Je(x){var O={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(q){return O[q]})}var Ot=/\/+/g;function gt(x,O){return typeof x=="object"&&x!==null&&x.key!=null?Je(""+x.key):O.toString(36)}function Oe(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Ne,Ne):(x.status="pending",x.then(function(O){x.status==="pending"&&(x.status="fulfilled",x.value=O)},function(O){x.status==="pending"&&(x.status="rejected",x.reason=O)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function D(x,O,q,G,P){var ae=typeof x;(ae==="undefined"||ae==="boolean")&&(x=null);var de=!1;if(x===null)de=!0;else switch(ae){case"bigint":case"string":case"number":de=!0;break;case"object":switch(x.$$typeof){case o:case f:de=!0;break;case C:return de=x._init,D(de(x._payload),O,q,G,P)}}if(de)return P=P(x),de=G===""?"."+gt(x,0):G,be(P)?(q="",de!=null&&(q=de.replace(Ot,"$&/")+"/"),D(P,O,q,"",function(Ll){return Ll})):P!=null&&(pt(P)&&(P=_t(P,q+(P.key==null||x&&x.key===P.key?"":(""+P.key).replace(Ot,"$&/")+"/")+de)),O.push(P)),1;de=0;var We=G===""?".":G+":";if(be(x))for(var Ce=0;Ce<x.length;Ce++)G=x[Ce],ae=We+gt(G,Ce),de+=D(G,O,q,ae,P);else if(Ce=X(x),typeof Ce=="function")for(x=Ce.call(x),Ce=0;!(G=x.next()).done;)G=G.value,ae=We+gt(G,Ce++),de+=D(G,O,q,ae,P);else if(ae==="object"){if(typeof x.then=="function")return D(Oe(x),O,q,G,P);throw O=String(x),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return de}function L(x,O,q){if(x==null)return x;var G=[],P=0;return D(x,G,"","",function(ae){return O.call(q,ae,P++)}),G}function F(x){if(x._status===-1){var O=x._result;O=O(),O.then(function(q){(x._status===0||x._status===-1)&&(x._status=1,x._result=q)},function(q){(x._status===0||x._status===-1)&&(x._status=2,x._result=q)}),x._status===-1&&(x._status=0,x._result=O)}if(x._status===1)return x._result.default;throw x._result}var pe=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},Se={map:L,forEach:function(x,O,q){L(x,function(){O.apply(this,arguments)},q)},count:function(x){var O=0;return L(x,function(){O++}),O},toArray:function(x){return L(x,function(O){return O})||[]},only:function(x){if(!pt(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return $.Activity=j,$.Children=Se,$.Component=K,$.Fragment=d,$.Profiler=m,$.PureComponent=J,$.StrictMode=c,$.Suspense=b,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,$.__COMPILER_RUNTIME={__proto__:null,c:function(x){return W.H.useMemoCache(x)}},$.cache=function(x){return function(){return x.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(x,O,q){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var G=Y({},x.props),P=x.key;if(O!=null)for(ae in O.key!==void 0&&(P=""+O.key),O)!De.call(O,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&O.ref===void 0||(G[ae]=O[ae]);var ae=arguments.length-2;if(ae===1)G.children=q;else if(1<ae){for(var de=Array(ae),We=0;We<ae;We++)de[We]=arguments[We+2];G.children=de}return Ke(x.type,P,G)},$.createContext=function(x){return x={$$typeof:g,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:p,_context:x},x},$.createElement=function(x,O,q){var G,P={},ae=null;if(O!=null)for(G in O.key!==void 0&&(ae=""+O.key),O)De.call(O,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(P[G]=O[G]);var de=arguments.length-2;if(de===1)P.children=q;else if(1<de){for(var We=Array(de),Ce=0;Ce<de;Ce++)We[Ce]=arguments[Ce+2];P.children=We}if(x&&x.defaultProps)for(G in de=x.defaultProps,de)P[G]===void 0&&(P[G]=de[G]);return Ke(x,ae,P)},$.createRef=function(){return{current:null}},$.forwardRef=function(x){return{$$typeof:T,render:x}},$.isValidElement=pt,$.lazy=function(x){return{$$typeof:C,_payload:{_status:-1,_result:x},_init:F}},$.memo=function(x,O){return{$$typeof:v,type:x,compare:O===void 0?null:O}},$.startTransition=function(x){var O=W.T,q={};W.T=q;try{var G=x(),P=W.S;P!==null&&P(q,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Ne,pe)}catch(ae){pe(ae)}finally{O!==null&&q.types!==null&&(O.types=q.types),W.T=O}},$.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},$.use=function(x){return W.H.use(x)},$.useActionState=function(x,O,q){return W.H.useActionState(x,O,q)},$.useCallback=function(x,O){return W.H.useCallback(x,O)},$.useContext=function(x){return W.H.useContext(x)},$.useDebugValue=function(){},$.useDeferredValue=function(x,O){return W.H.useDeferredValue(x,O)},$.useEffect=function(x,O){return W.H.useEffect(x,O)},$.useEffectEvent=function(x){return W.H.useEffectEvent(x)},$.useId=function(){return W.H.useId()},$.useImperativeHandle=function(x,O,q){return W.H.useImperativeHandle(x,O,q)},$.useInsertionEffect=function(x,O){return W.H.useInsertionEffect(x,O)},$.useLayoutEffect=function(x,O){return W.H.useLayoutEffect(x,O)},$.useMemo=function(x,O){return W.H.useMemo(x,O)},$.useOptimistic=function(x,O){return W.H.useOptimistic(x,O)},$.useReducer=function(x,O,q){return W.H.useReducer(x,O,q)},$.useRef=function(x){return W.H.useRef(x)},$.useState=function(x){return W.H.useState(x)},$.useSyncExternalStore=function(x,O,q){return W.H.useSyncExternalStore(x,O,q)},$.useTransition=function(){return W.H.useTransition()},$.version="19.2.5",$}var em;function qu(){return em||(em=1,Cu.exports=ig()),Cu.exports}var Mu={exports:{}},Fe={};var tm;function rg(){if(tm)return Fe;tm=1;var o=qu();function f(b){var v="https://react.dev/errors/"+b;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)v+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+b+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(b,v,C){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:j==null?null:""+j,children:b,containerInfo:v,implementation:C}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(b,v){if(b==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Fe.createPortal=function(b,v){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(f(299));return p(b,v,null,C)},Fe.flushSync=function(b){var v=g.T,C=c.p;try{if(g.T=null,c.p=2,b)return b()}finally{g.T=v,c.p=C,c.d.f()}},Fe.preconnect=function(b,v){typeof b=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(b,v))},Fe.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},Fe.preinit=function(b,v){if(typeof b=="string"&&v&&typeof v.as=="string"){var C=v.as,j=T(C,v.crossOrigin),U=typeof v.integrity=="string"?v.integrity:void 0,X=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;C==="style"?c.d.S(b,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:j,integrity:U,fetchPriority:X}):C==="script"&&c.d.X(b,{crossOrigin:j,integrity:U,fetchPriority:X,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Fe.preinitModule=function(b,v){if(typeof b=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var C=T(v.as,v.crossOrigin);c.d.M(b,{crossOrigin:C,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(b)},Fe.preload=function(b,v){if(typeof b=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var C=v.as,j=T(C,v.crossOrigin);c.d.L(b,C,{crossOrigin:j,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Fe.preloadModule=function(b,v){if(typeof b=="string")if(v){var C=T(v.as,v.crossOrigin);c.d.m(b,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:C,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(b)},Fe.requestFormReset=function(b){c.d.r(b)},Fe.unstable_batchedUpdates=function(b,v){return b(v)},Fe.useFormState=function(b,v,C){return g.H.useFormState(b,v,C)},Fe.useFormStatus=function(){return g.H.useHostTransitionStatus()},Fe.version="19.2.5",Fe}var am;function og(){if(am)return Mu.exports;am=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),Mu.exports=rg(),Mu.exports}var lm;function ug(){if(lm)return Mn;lm=1;var o=ng(),f=qu(),d=og();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(p(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return b(n),e;if(i===l)return b(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,U=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),J=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),Ke=Symbol.for("react.activity"),_t=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=pt&&e[pt]||e["@@iterator"],typeof e=="function"?e:null)}var Ot=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case K:return"Profiler";case H:return"StrictMode";case be:return"Suspense";case Ne:return"SuspenseList";case Ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case J:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:gt(e.type)||"Memo";case De:t=e._payload,e=e._init;try{return gt(e(t))}catch{}}return null}var Oe=Array.isArray,D=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],Se=-1;function x(e){return{current:e}}function O(e){0>Se||(e.current=pe[Se],pe[Se]=null,Se--)}function q(e,t){Se++,pe[Se]=e.current,e.current=t}var G=x(null),P=x(null),ae=x(null),de=x(null);function We(e,t){switch(q(ae,t),q(P,e),q(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vd(t),e=xd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(G),q(G,e)}function Ce(){O(G),O(P),O(ae)}function Ll(e){e.memoizedState!==null&&q(de,e);var t=G.current,a=xd(t,e.type);t!==a&&(q(P,e),q(G,a))}function qn(e){P.current===e&&(O(G),O(P)),de.current===e&&(O(de),Tn._currentValue=F)}var ur,Ku;function Ma(e){if(ur===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ur=t&&t[1]||"",Ku=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ur+e+Ku}var cr=!1;function sr(e,t){if(!e||cr)return"";cr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(A){var N=A}Reflect.construct(e,[],_)}else{try{_.call()}catch(A){N=A}e.call(_.prototype)}}else{try{throw Error()}catch(A){N=A}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(A){if(A&&N&&typeof A.stack=="string")return[A.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var h=u.split(`
`),z=s.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===z.length)for(l=h.length-1,n=z.length-1;1<=l&&0<=n&&h[l]!==z[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==z[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==z[n]){var R=`
`+h[l].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=l&&0<=n);break}}}finally{cr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ma(a):""}function Mm(e,t){switch(e.tag){case 26:case 27:case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return e.child!==t&&t!==null?Ma("Suspense Fallback"):Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return sr(e.type,!1);case 11:return sr(e.type.render,!1);case 1:return sr(e.type,!0);case 31:return Ma("Activity");default:return""}}function Ju(e){try{var t="",a=null;do t+=Mm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fr=Object.prototype.hasOwnProperty,dr=o.unstable_scheduleCallback,mr=o.unstable_cancelCallback,_m=o.unstable_shouldYield,Om=o.unstable_requestPaint,it=o.unstable_now,Um=o.unstable_getCurrentPriorityLevel,Fu=o.unstable_ImmediatePriority,Wu=o.unstable_UserBlockingPriority,Bn=o.unstable_NormalPriority,Hm=o.unstable_LowPriority,$u=o.unstable_IdlePriority,Lm=o.log,qm=o.unstable_setDisableYieldValue,ql=null,rt=null;function oa(e){if(typeof Lm=="function"&&qm(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(ql,e)}catch{}}var ot=Math.clz32?Math.clz32:Gm,Bm=Math.log,Ym=Math.LN2;function Gm(e){return e>>>=0,e===0?32:31-(Bm(e)/Ym|0)|0}var Yn=256,Gn=262144,kn=4194304;function _a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=_a(l):(u&=s,u!==0?n=_a(u):a||(a=s&~e,a!==0&&(n=_a(a))))):(s=l&~i,s!==0?n=_a(s):u!==0?n=_a(u):a||(a=l&~e,a!==0&&(n=_a(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function km(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iu(){var e=kn;return kn<<=1,(kn&62914560)===0&&(kn=4194304),e}function hr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xm(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,h=e.expirationTimes,z=e.hiddenUpdates;for(a=u&~a;0<a;){var R=31-ot(a),_=1<<R;s[R]=0,h[R]=-1;var N=z[R];if(N!==null)for(z[R]=null,R=0;R<N.length;R++){var A=N[R];A!==null&&(A.lane&=-536870913)}a&=~_}l!==0&&Pu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Pu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ec(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ot(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function tc(e,t){var a=t&-t;return a=(a&42)!==0?1:pr(a),(a&(e.suspendedLanes|t))!==0?0:a}function pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ac(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:kd(e.type))}function lc(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var ua=Math.random().toString(36).slice(2),ke="__reactFiber$"+ua,Ie="__reactProps$"+ua,Ia="__reactContainer$"+ua,yr="__reactEvents$"+ua,Qm="__reactListeners$"+ua,Vm="__reactHandles$"+ua,nc="__reactResources$"+ua,Gl="__reactMarker$"+ua;function vr(e){delete e[ke],delete e[Ie],delete e[yr],delete e[Qm],delete e[Vm]}function Pa(e){var t=e[ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ia]||a[ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Nd(e);e!==null;){if(a=e[ke])return a;e=Nd(e)}return t}e=a,a=e.parentNode}return null}function el(e){if(e=e[ke]||e[Ia]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function kl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function tl(e){var t=e[nc];return t||(t=e[nc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Gl]=!0}var ic=new Set,rc={};function Oa(e,t){al(e,t),al(e+"Capture",t)}function al(e,t){for(rc[e]=t,e=0;e<t.length;e++)ic.add(t[e])}var Zm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oc={},uc={};function Km(e){return fr.call(uc,e)?!0:fr.call(oc,e)?!1:Zm.test(e)?uc[e]=!0:(oc[e]=!0,!1)}function Qn(e,t,a){if(Km(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Vn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Gt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){if(!e._valueTracker){var t=cc(e)?"checked":"value";e._valueTracker=Jm(e,t,""+e[t])}}function sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=cc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fm=/[\n"\\]/g;function vt(e){return e.replace(Fm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function br(e,t,a,l,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Sr(e,u,yt(t)):a!=null?Sr(e,u,yt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+yt(s):e.removeAttribute("name")}function fc(e,t,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){xr(e);return}a=a!=null?""+yt(a):"",t=t!=null?""+yt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),xr(e)}function Sr(e,t,a){t==="number"&&Zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ll(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function dc(e,t,a){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+yt(a):""}function mc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Oe(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=yt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),xr(e)}function nl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Wm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function pc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&hc(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&hc(e,i,t[i])}function jr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $m=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return Im.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function kt(){}var Er=null;function zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,rl=null;function gc(e){var t=el(e);if(t&&(e=t.stateNode)){var a=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(br(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ie]||null;if(!n)throw Error(c(90));br(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&sc(l)}break e;case"textarea":dc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ll(e,!!a.multiple,t,!1)}}}var wr=!1;function yc(e,t,a){if(wr)return e(t,a);wr=!0;try{var l=e(t);return l}finally{if(wr=!1,(il!==null||rl!==null)&&(Oi(),il&&(t=il,e=rl,rl=il=null,gc(t),e)))for(t=0;t<e.length;t++)gc(e[t])}}function Xl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ie]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nr=!1;if(Xt)try{var Ql={};Object.defineProperty(Ql,"passive",{get:function(){Nr=!0}}),window.addEventListener("test",Ql,Ql),window.removeEventListener("test",Ql,Ql)}catch{Nr=!1}var ca=null,Tr=null,Jn=null;function vc(){if(Jn)return Jn;var e,t=Tr,a=t.length,l,n="value"in ca?ca.value:ca.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Jn=n.slice(e,1<l?1-l:void 0)}function Fn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function xc(){return!1}function Pe(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wn:xc,this.isPropagationStopped=xc,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=Pe(Ua),Vl=j({},Ua,{view:0,detail:0}),Pm=Pe(Vl),Ar,Rr,Zl,In=j({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zl&&(Zl&&e.type==="mousemove"?(Ar=e.screenX-Zl.screenX,Rr=e.screenY-Zl.screenY):Rr=Ar=0,Zl=e),Ar)},movementY:function(e){return"movementY"in e?e.movementY:Rr}}),bc=Pe(In),eh=j({},In,{dataTransfer:0}),th=Pe(eh),ah=j({},Vl,{relatedTarget:0}),Dr=Pe(ah),lh=j({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=Pe(lh),ih=j({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rh=Pe(ih),oh=j({},Ua,{data:0}),Sc=Pe(oh),uh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sh[e])?!!t[e]:!1}function Cr(){return fh}var dh=j({},Vl,{key:function(e){if(e.key){var t=uh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ch[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cr,charCode:function(e){return e.type==="keypress"?Fn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mh=Pe(dh),hh=j({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=Pe(hh),ph=j({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cr}),gh=Pe(ph),yh=j({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),vh=Pe(yh),xh=j({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bh=Pe(xh),Sh=j({},Ua,{newState:0,oldState:0}),jh=Pe(Sh),Eh=[9,13,27,32],Mr=Xt&&"CompositionEvent"in window,Kl=null;Xt&&"documentMode"in document&&(Kl=document.documentMode);var zh=Xt&&"TextEvent"in window&&!Kl,Ec=Xt&&(!Mr||Kl&&8<Kl&&11>=Kl),zc=" ",wc=!1;function Nc(e,t){switch(e){case"keyup":return Eh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function wh(e,t){switch(e){case"compositionend":return Tc(t);case"keypress":return t.which!==32?null:(wc=!0,zc);case"textInput":return e=t.data,e===zc&&wc?null:e;default:return null}}function Nh(e,t){if(ol)return e==="compositionend"||!Mr&&Nc(e,t)?(e=vc(),Jn=Tr=ca=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ec&&t.locale!=="ko"?null:t.data;default:return null}}var Th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Th[e.type]:t==="textarea"}function Rc(e,t,a,l){il?rl?rl.push(l):rl=[l]:il=l,t=Gi(t,"onChange"),0<t.length&&(a=new $n("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Jl=null,Fl=null;function Ah(e){dd(e,0)}function Pn(e){var t=kl(e);if(sc(t))return e}function Dc(e,t){if(e==="change")return t}var Cc=!1;if(Xt){var _r;if(Xt){var Or="oninput"in document;if(!Or){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),Or=typeof Mc.oninput=="function"}_r=Or}else _r=!1;Cc=_r&&(!document.documentMode||9<document.documentMode)}function _c(){Jl&&(Jl.detachEvent("onpropertychange",Oc),Fl=Jl=null)}function Oc(e){if(e.propertyName==="value"&&Pn(Fl)){var t=[];Rc(t,Fl,e,zr(e)),yc(Ah,t)}}function Rh(e,t,a){e==="focusin"?(_c(),Jl=t,Fl=a,Jl.attachEvent("onpropertychange",Oc)):e==="focusout"&&_c()}function Dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(Fl)}function Ch(e,t){if(e==="click")return Pn(t)}function Mh(e,t){if(e==="input"||e==="change")return Pn(t)}function _h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:_h;function Wl(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!fr.call(t,n)||!ut(e[n],t[n]))return!1}return!0}function Uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hc(e,t){var a=Uc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Uc(a)}}function Lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zn(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Oh=Xt&&"documentMode"in document&&11>=document.documentMode,ul=null,Hr=null,$l=null,Lr=!1;function Bc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lr||ul==null||ul!==Zn(l)||(l=ul,"selectionStart"in l&&Ur(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$l&&Wl($l,l)||($l=l,l=Gi(Hr,"onSelect"),0<l.length&&(t=new $n("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ul)))}function Ha(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var cl={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},qr={},Yc={};Xt&&(Yc=document.createElement("div").style,"AnimationEvent"in window||(delete cl.animationend.animation,delete cl.animationiteration.animation,delete cl.animationstart.animation),"TransitionEvent"in window||delete cl.transitionend.transition);function La(e){if(qr[e])return qr[e];if(!cl[e])return e;var t=cl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Yc)return qr[e]=t[a];return e}var Gc=La("animationend"),kc=La("animationiteration"),Xc=La("animationstart"),Uh=La("transitionrun"),Hh=La("transitionstart"),Lh=La("transitioncancel"),Qc=La("transitionend"),Vc=new Map,Br="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Br.push("scrollEnd");function Rt(e,t){Vc.set(e,t),Oa(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xt=[],sl=0,Yr=0;function ti(){for(var e=sl,t=Yr=sl=0;t<e;){var a=xt[t];xt[t++]=null;var l=xt[t];xt[t++]=null;var n=xt[t];xt[t++]=null;var i=xt[t];if(xt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Zc(a,n,i)}}function ai(e,t,a,l){xt[sl++]=e,xt[sl++]=t,xt[sl++]=a,xt[sl++]=l,Yr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Gr(e,t,a,l){return ai(e,t,a,l),li(e)}function qa(e,t){return ai(e,null,null,t),li(e)}function Zc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ot(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function li(e){if(50<bn)throw bn=0,$o=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fl={};function qh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,a,l){return new qh(e,t,a,l)}function kr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var a=e.alternate;return a===null?(a=ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")kr(e)&&(u=1);else if(typeof e=="string")u=Xp(e,a,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ke:return e=ct(31,a,t,n),e.elementType=Ke,e.lanes=i,e;case Y:return Ba(a.children,n,i,t);case H:u=8,n|=24;break;case K:return e=ct(12,a,t,n|2),e.elementType=K,e.lanes=i,e;case be:return e=ct(13,a,t,n),e.elementType=be,e.lanes=i,e;case Ne:return e=ct(19,a,t,n),e.elementType=Ne,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:u=10;break e;case I:u=9;break e;case xe:u=11;break e;case W:u=14;break e;case De:u=16,l=null;break e}u=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=ct(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ba(e,t,a,l){return e=ct(7,e,l,t),e.lanes=a,e}function Xr(e,t,a){return e=ct(6,e,null,t),e.lanes=a,e}function Jc(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function Qr(e,t,a){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fc=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=Fc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ju(t)},Fc.set(e,t),t)}return{value:e,source:t,stack:Ju(t)}}var dl=[],ml=0,ii=null,Il=0,St=[],jt=0,sa=null,Ut=1,Ht="";function Vt(e,t){dl[ml++]=Il,dl[ml++]=ii,ii=e,Il=t}function Wc(e,t,a){St[jt++]=Ut,St[jt++]=Ht,St[jt++]=sa,sa=e;var l=Ut;e=Ht;var n=32-ot(l)-1;l&=~(1<<n),a+=1;var i=32-ot(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Ut=1<<32-ot(t)+n|a<<n|l,Ht=i+e}else Ut=1<<i|a<<n|l,Ht=e}function Vr(e){e.return!==null&&(Vt(e,1),Wc(e,1,0))}function Zr(e){for(;e===ii;)ii=dl[--ml],dl[ml]=null,Il=dl[--ml],dl[ml]=null;for(;e===sa;)sa=St[--jt],St[jt]=null,Ht=St[--jt],St[jt]=null,Ut=St[--jt],St[jt]=null}function $c(e,t){St[jt++]=Ut,St[jt++]=Ht,St[jt++]=sa,Ut=t.id,Ht=t.overflow,sa=e}var Xe=null,Ee=null,oe=!1,fa=null,Et=!1,Kr=Error(c(519));function da(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(bt(t,e)),Kr}function Ic(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[ke]=e,t[Ie]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<jn.length;a++)ne(jn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),fc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),mc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||gd(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=kt),t=!0):t=!1,t||da(e,!0)}function Pc(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Xe=Xe.return}}function hl(e){if(e!==Xe)return!1;if(!oe)return Pc(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||du(e.type,e.memoizedProps)),a=!a),a&&Ee&&da(e),Pc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=wd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=wd(e)}else t===27?(t=Ee,Na(e.type)?(e=yu,yu=null,Ee=e):Ee=t):Ee=Xe?wt(e.stateNode.nextSibling):null;return!0}function Ya(){Ee=Xe=null,oe=!1}function Jr(){var e=fa;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),fa=null),e}function Pl(e){fa===null?fa=[e]:fa.push(e)}var Fr=x(null),Ga=null,Zt=null;function ma(e,t,a){q(Fr,t._currentValue),t._currentValue=a}function Kt(e){e._currentValue=Fr.current,O(Fr)}function Wr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function $r(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var h=0;h<t.length;h++)if(s.context===t[h]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Wr(i.return,a,e),l||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(c(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Wr(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function pl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var s=n.type;ut(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===de.current){if(u=n.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Tn):e=[Tn])}n=n.return}e!==null&&$r(t,e,a,l),t.flags|=262144}function ri(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ka(e){Ga=e,Zt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return es(Ga,e)}function oi(e,t){return Ga===null&&ka(e),es(e,t)}function es(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Zt===null){if(e===null)throw Error(c(308));Zt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zt=Zt.next=t;return a}var Bh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Yh=o.unstable_scheduleCallback,Gh=o.unstable_NormalPriority,Ue={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ir(){return{controller:new Bh,data:new Map,refCount:0}}function en(e){e.refCount--,e.refCount===0&&Yh(Gh,function(){e.controller.abort()})}var tn=null,Pr=0,gl=0,yl=null;function kh(e,t){if(tn===null){var a=tn=[];Pr=0,gl=lu(),yl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Pr++,t.then(ts,ts),t}function ts(){if(--Pr===0&&tn!==null){yl!==null&&(yl.status="fulfilled");var e=tn;tn=null,gl=0,yl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var as=D.S;D.S=function(e,t){Yf=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&kh(e,t),as!==null&&as(e,t)};var Xa=x(null);function eo(){var e=Xa.current;return e!==null?e:je.pooledCache}function ui(e,t){t===null?q(Xa,Xa.current):q(Xa,t.pool)}function ls(){var e=eo();return e===null?null:{parent:Ue._currentValue,pool:e}}var vl=Error(c(460)),to=Error(c(474)),ci=Error(c(542)),si={then:function(){}};function ns(e){return e=e.status,e==="fulfilled"||e==="rejected"}function is(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(kt,kt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,os(e),e;default:if(typeof t.status=="string")t.then(kt,kt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,os(e),e}throw Va=t,vl}}function Qa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Va=a,vl):a}}var Va=null;function rs(){if(Va===null)throw Error(c(459));var e=Va;return Va=null,e}function os(e){if(e===vl||e===ci)throw Error(c(483))}var xl=null,an=0;function fi(e){var t=an;return an+=1,xl===null&&(xl=[]),is(xl,e,t)}function ln(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function di(e,t){throw t.$$typeof===U?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function us(e){function t(S,y){if(e){var E=S.deletions;E===null?(S.deletions=[y],S.flags|=16):E.push(y)}}function a(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function l(S){for(var y=new Map;S!==null;)S.key!==null?y.set(S.key,S):y.set(S.index,S),S=S.sibling;return y}function n(S,y){return S=Qt(S,y),S.index=0,S.sibling=null,S}function i(S,y,E){return S.index=E,e?(E=S.alternate,E!==null?(E=E.index,E<y?(S.flags|=67108866,y):E):(S.flags|=67108866,y)):(S.flags|=1048576,y)}function u(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function s(S,y,E,M){return y===null||y.tag!==6?(y=Xr(E,S.mode,M),y.return=S,y):(y=n(y,E),y.return=S,y)}function h(S,y,E,M){var V=E.type;return V===Y?R(S,y,E.props.children,M,E.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===De&&Qa(V)===y.type)?(y=n(y,E.props),ln(y,E),y.return=S,y):(y=ni(E.type,E.key,E.props,null,S.mode,M),ln(y,E),y.return=S,y)}function z(S,y,E,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=Qr(E,S.mode,M),y.return=S,y):(y=n(y,E.children||[]),y.return=S,y)}function R(S,y,E,M,V){return y===null||y.tag!==7?(y=Ba(E,S.mode,M,V),y.return=S,y):(y=n(y,E),y.return=S,y)}function _(S,y,E){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Xr(""+y,S.mode,E),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case X:return E=ni(y.type,y.key,y.props,null,S.mode,E),ln(E,y),E.return=S,E;case Q:return y=Qr(y,S.mode,E),y.return=S,y;case De:return y=Qa(y),_(S,y,E)}if(Oe(y)||Je(y))return y=Ba(y,S.mode,E,null),y.return=S,y;if(typeof y.then=="function")return _(S,fi(y),E);if(y.$$typeof===J)return _(S,oi(S,y),E);di(S,y)}return null}function N(S,y,E,M){var V=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return V!==null?null:s(S,y,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case X:return E.key===V?h(S,y,E,M):null;case Q:return E.key===V?z(S,y,E,M):null;case De:return E=Qa(E),N(S,y,E,M)}if(Oe(E)||Je(E))return V!==null?null:R(S,y,E,M,null);if(typeof E.then=="function")return N(S,y,fi(E),M);if(E.$$typeof===J)return N(S,y,oi(S,E),M);di(S,E)}return null}function A(S,y,E,M,V){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return S=S.get(E)||null,s(y,S,""+M,V);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case X:return S=S.get(M.key===null?E:M.key)||null,h(y,S,M,V);case Q:return S=S.get(M.key===null?E:M.key)||null,z(y,S,M,V);case De:return M=Qa(M),A(S,y,E,M,V)}if(Oe(M)||Je(M))return S=S.get(E)||null,R(y,S,M,V,null);if(typeof M.then=="function")return A(S,y,E,fi(M),V);if(M.$$typeof===J)return A(S,y,E,oi(y,M),V);di(y,M)}return null}function B(S,y,E,M){for(var V=null,ce=null,k=y,te=y=0,re=null;k!==null&&te<E.length;te++){k.index>te?(re=k,k=null):re=k.sibling;var se=N(S,k,E[te],M);if(se===null){k===null&&(k=re);break}e&&k&&se.alternate===null&&t(S,k),y=i(se,y,te),ce===null?V=se:ce.sibling=se,ce=se,k=re}if(te===E.length)return a(S,k),oe&&Vt(S,te),V;if(k===null){for(;te<E.length;te++)k=_(S,E[te],M),k!==null&&(y=i(k,y,te),ce===null?V=k:ce.sibling=k,ce=k);return oe&&Vt(S,te),V}for(k=l(k);te<E.length;te++)re=A(k,S,te,E[te],M),re!==null&&(e&&re.alternate!==null&&k.delete(re.key===null?te:re.key),y=i(re,y,te),ce===null?V=re:ce.sibling=re,ce=re);return e&&k.forEach(function(Ca){return t(S,Ca)}),oe&&Vt(S,te),V}function Z(S,y,E,M){if(E==null)throw Error(c(151));for(var V=null,ce=null,k=y,te=y=0,re=null,se=E.next();k!==null&&!se.done;te++,se=E.next()){k.index>te?(re=k,k=null):re=k.sibling;var Ca=N(S,k,se.value,M);if(Ca===null){k===null&&(k=re);break}e&&k&&Ca.alternate===null&&t(S,k),y=i(Ca,y,te),ce===null?V=Ca:ce.sibling=Ca,ce=Ca,k=re}if(se.done)return a(S,k),oe&&Vt(S,te),V;if(k===null){for(;!se.done;te++,se=E.next())se=_(S,se.value,M),se!==null&&(y=i(se,y,te),ce===null?V=se:ce.sibling=se,ce=se);return oe&&Vt(S,te),V}for(k=l(k);!se.done;te++,se=E.next())se=A(k,S,te,se.value,M),se!==null&&(e&&se.alternate!==null&&k.delete(se.key===null?te:se.key),y=i(se,y,te),ce===null?V=se:ce.sibling=se,ce=se);return e&&k.forEach(function(eg){return t(S,eg)}),oe&&Vt(S,te),V}function ve(S,y,E,M){if(typeof E=="object"&&E!==null&&E.type===Y&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case X:e:{for(var V=E.key;y!==null;){if(y.key===V){if(V=E.type,V===Y){if(y.tag===7){a(S,y.sibling),M=n(y,E.props.children),M.return=S,S=M;break e}}else if(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===De&&Qa(V)===y.type){a(S,y.sibling),M=n(y,E.props),ln(M,E),M.return=S,S=M;break e}a(S,y);break}else t(S,y);y=y.sibling}E.type===Y?(M=Ba(E.props.children,S.mode,M,E.key),M.return=S,S=M):(M=ni(E.type,E.key,E.props,null,S.mode,M),ln(M,E),M.return=S,S=M)}return u(S);case Q:e:{for(V=E.key;y!==null;){if(y.key===V)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){a(S,y.sibling),M=n(y,E.children||[]),M.return=S,S=M;break e}else{a(S,y);break}else t(S,y);y=y.sibling}M=Qr(E,S.mode,M),M.return=S,S=M}return u(S);case De:return E=Qa(E),ve(S,y,E,M)}if(Oe(E))return B(S,y,E,M);if(Je(E)){if(V=Je(E),typeof V!="function")throw Error(c(150));return E=V.call(E),Z(S,y,E,M)}if(typeof E.then=="function")return ve(S,y,fi(E),M);if(E.$$typeof===J)return ve(S,y,oi(S,E),M);di(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,y!==null&&y.tag===6?(a(S,y.sibling),M=n(y,E),M.return=S,S=M):(a(S,y),M=Xr(E,S.mode,M),M.return=S,S=M),u(S)):a(S,y)}return function(S,y,E,M){try{an=0;var V=ve(S,y,E,M);return xl=null,V}catch(k){if(k===vl||k===ci)throw k;var ce=ct(29,k,null,S.mode);return ce.lanes=M,ce.return=S,ce}}}var Za=us(!0),cs=us(!1),ha=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(fe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=li(e),Zc(e,null,a),t}return ai(e,l,t,a),li(e)}function nn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ec(e,a)}}function no(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var io=!1;function rn(){if(io){var e=yl;if(e!==null)throw e}}function on(e,t,a,l){io=!1;var n=e.updateQueue;ha=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var h=s,z=h.next;h.next=null,u===null?i=z:u.next=z,u=h;var R=e.alternate;R!==null&&(R=R.updateQueue,s=R.lastBaseUpdate,s!==u&&(s===null?R.firstBaseUpdate=z:s.next=z,R.lastBaseUpdate=h))}if(i!==null){var _=n.baseState;u=0,R=z=h=null,s=i;do{var N=s.lane&-536870913,A=N!==s.lane;if(A?(ie&N)===N:(l&N)===N){N!==0&&N===gl&&(io=!0),R!==null&&(R=R.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var B=e,Z=s;N=t;var ve=a;switch(Z.tag){case 1:if(B=Z.payload,typeof B=="function"){_=B.call(ve,_,N);break e}_=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=Z.payload,N=typeof B=="function"?B.call(ve,_,N):B,N==null)break e;_=j({},_,N);break e;case 2:ha=!0}}N=s.callback,N!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[N]:A.push(N))}else A={lane:N,tag:s.tag,payload:s.payload,callback:s.callback,next:null},R===null?(z=R=A,h=_):R=R.next=A,u|=N;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;A=s,s=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);R===null&&(h=_),n.baseState=h,n.firstBaseUpdate=z,n.lastBaseUpdate=R,i===null&&(n.shared.lanes=0),Sa|=u,e.lanes=u,e.memoizedState=_}}function ss(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function fs(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ss(a[e],t)}var bl=x(null),mi=x(0);function ds(e,t){e=aa,q(mi,e),q(bl,t),aa=e|t.baseLanes}function ro(){q(mi,aa),q(bl,bl.current)}function oo(){aa=mi.current,O(bl),O(mi)}var st=x(null),zt=null;function ya(e){var t=e.alternate;q(Me,Me.current&1),q(st,e),zt===null&&(t===null||bl.current!==null||t.memoizedState!==null)&&(zt=e)}function uo(e){q(Me,Me.current),q(st,e),zt===null&&(zt=e)}function ms(e){e.tag===22?(q(Me,Me.current),q(st,e),zt===null&&(zt=e)):va()}function va(){q(Me,Me.current),q(st,st.current)}function ft(e){O(st),zt===e&&(zt=null),O(Me)}var Me=x(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pu(a)||gu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,ee=null,ge=null,He=null,pi=!1,Sl=!1,Ka=!1,gi=0,un=0,jl=null,Qh=0;function Ae(){throw Error(c(321))}function co(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ut(e[a],t[a]))return!1;return!0}function so(e,t,a,l,n,i){return Jt=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Ws:No,Ka=!1,i=a(l,n),Ka=!1,Sl&&(i=ps(t,a,l,n)),hs(e),i}function hs(e){D.H=fn;var t=ge!==null&&ge.next!==null;if(Jt=0,He=ge=ee=null,pi=!1,un=0,jl=null,t)throw Error(c(300));e===null||Le||(e=e.dependencies,e!==null&&ri(e)&&(Le=!0))}function ps(e,t,a,l){ee=e;var n=0;do{if(Sl&&(jl=null),un=0,Sl=!1,25<=n)throw Error(c(301));if(n+=1,He=ge=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=$s,i=t(a,l)}while(Sl);return i}function Vh(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?cn(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(ee.flags|=1024),t}function fo(){var e=gi!==0;return gi=0,e}function mo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ho(e){if(pi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}pi=!1}Jt=0,He=ge=ee=null,Sl=!1,un=gi=0,jl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ee.memoizedState=He=e:He=He.next=e,He}function _e(){if(ge===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=He===null?ee.memoizedState:He.next;if(t!==null)He=t,ge=e;else{if(e===null)throw ee.alternate===null?Error(c(467)):Error(c(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},He===null?ee.memoizedState=He=e:He=He.next=e}return He}function yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cn(e){var t=un;return un+=1,jl===null&&(jl=[]),e=is(jl,e,t),t=ee,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Ws:No),e}function vi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cn(e);if(e.$$typeof===J)return Qe(e)}throw Error(c(438,String(e)))}function po(e){var t=null,a=ee.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=yi(),ee.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=_t;return t.index++,a}function Ft(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=_e();return go(t,ge,e)}function go(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,h=null,z=t,R=!1;do{var _=z.lane&-536870913;if(_!==z.lane?(ie&_)===_:(Jt&_)===_){var N=z.revertLane;if(N===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),_===gl&&(R=!0);else if((Jt&N)===N){z=z.next,N===gl&&(R=!0);continue}else _={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},h===null?(s=h=_,u=i):h=h.next=_,ee.lanes|=N,Sa|=N;_=z.action,Ka&&a(i,_),i=z.hasEagerState?z.eagerState:a(i,_)}else N={lane:_,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},h===null?(s=h=N,u=i):h=h.next=N,ee.lanes|=_,Sa|=_;z=z.next}while(z!==null&&z!==t);if(h===null?u=i:h.next=s,!ut(i,e.memoizedState)&&(Le=!0,R&&(a=yl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function yo(e){var t=_e(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);ut(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function gs(e,t,a){var l=ee,n=_e(),i=oe;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var u=!ut((ge||n).memoizedState,a);if(u&&(n.memoizedState=a,Le=!0),n=n.queue,bo(xs.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||He!==null&&He.memoizedState.tag&1){if(l.flags|=2048,El(9,{destroy:void 0},vs.bind(null,l,n,a,t),null),je===null)throw Error(c(349));i||(Jt&127)!==0||ys(l,t,a)}return a}function ys(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ee.updateQueue,t===null?(t=yi(),ee.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function vs(e,t,a,l){t.value=a,t.getSnapshot=l,bs(t)&&Ss(e)}function xs(e,t,a){return a(function(){bs(t)&&Ss(e)})}function bs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ut(e,a)}catch{return!0}}function Ss(e){var t=qa(e,2);t!==null&&nt(t,e,2)}function vo(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Ka){oa(!0);try{a()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function js(e,t,a,l){return e.baseState=a,go(e,ge,typeof l=="function"?l:Ft)}function Zh(e,t,a,l,n){if(ji(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};D.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Es(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Es(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=D.T,u={};D.T=u;try{var s=a(n,l),h=D.S;h!==null&&h(u,s),zs(e,t,s)}catch(z){xo(e,t,z)}finally{i!==null&&u.types!==null&&(i.types=u.types),D.T=i}}else try{i=a(n,l),zs(e,t,i)}catch(z){xo(e,t,z)}}function zs(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ws(e,t,l)},function(l){return xo(e,t,l)}):ws(e,t,a)}function ws(e,t,a){t.status="fulfilled",t.value=a,Ns(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Es(e,a)))}function xo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ns(t),t=t.next;while(t!==l)}e.action=null}function Ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ts(e,t){return t}function As(e,t){if(oe){var a=je.formState;if(a!==null){e:{var l=ee;if(oe){if(Ee){t:{for(var n=Ee,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=wt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=wt(n.nextSibling),l=n.data==="F!";break e}}da(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:t},a.queue=l,a=Ks.bind(null,ee,l),l.dispatch=a,l=vo(!1),i=wo.bind(null,ee,!1,l.queue),l=$e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Zh.bind(null,ee,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Rs(e){var t=_e();return Ds(t,ge,e)}function Ds(e,t,a){if(t=go(e,t,Ts)[0],e=xi(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=cn(t)}catch(u){throw u===vl?ci:u}else l=t;t=_e();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ee.flags|=2048,El(9,{destroy:void 0},Kh.bind(null,n,a),null)),[l,i,e]}function Kh(e,t){e.action=t}function Cs(e){var t=_e(),a=ge;if(a!==null)return Ds(t,a,e);_e(),t=t.memoizedState,a=_e();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function El(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ee.updateQueue,t===null&&(t=yi(),ee.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ms(){return _e().memoizedState}function bi(e,t,a,l){var n=$e();ee.flags|=e,n.memoizedState=El(1|t,{destroy:void 0},a,l===void 0?null:l)}function Si(e,t,a,l){var n=_e();l=l===void 0?null:l;var i=n.memoizedState.inst;ge!==null&&l!==null&&co(l,ge.memoizedState.deps)?n.memoizedState=El(t,i,a,l):(ee.flags|=e,n.memoizedState=El(1|t,i,a,l))}function _s(e,t){bi(8390656,8,e,t)}function bo(e,t){Si(2048,8,e,t)}function Jh(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=yi(),ee.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Os(e){var t=_e().memoizedState;return Jh({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Us(e,t){return Si(4,2,e,t)}function Hs(e,t){return Si(4,4,e,t)}function Ls(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qs(e,t,a){a=a!=null?a.concat([e]):null,Si(4,4,Ls.bind(null,t,e),a)}function So(){}function Bs(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&co(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Ys(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&co(t,l[1]))return l[0];if(l=e(),Ka){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l}function jo(e,t,a){return a===void 0||(Jt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=kf(),ee.lanes|=e,Sa|=e,a)}function Gs(e,t,a,l){return ut(a,t)?a:bl.current!==null?(e=jo(e,a,l),ut(e,t)||(Le=!0),e):(Jt&42)===0||(Jt&1073741824)!==0&&(ie&261930)===0?(Le=!0,e.memoizedState=a):(e=kf(),ee.lanes|=e,Sa|=e,t)}function ks(e,t,a,l,n){var i=L.p;L.p=i!==0&&8>i?i:8;var u=D.T,s={};D.T=s,wo(e,!1,t,a);try{var h=n(),z=D.S;if(z!==null&&z(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var R=Xh(h,l);sn(e,t,R,ht(e))}else sn(e,t,l,ht(e))}catch(_){sn(e,t,{then:function(){},status:"rejected",reason:_},ht())}finally{L.p=i,u!==null&&s.types!==null&&(u.types=s.types),D.T=u}}function Fh(){}function Eo(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=Xs(e).queue;ks(e,n,t,F,a===null?Fh:function(){return Qs(e),a(l)})}function Xs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qs(e){var t=Xs(e);t.next===null&&(t=e.alternate.memoizedState),sn(e,t.next.queue,{},ht())}function zo(){return Qe(Tn)}function Vs(){return _e().memoizedState}function Zs(){return _e().memoizedState}function Wh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ht();e=pa(a);var l=ga(t,e,a);l!==null&&(nt(l,t,a),nn(l,t,a)),t={cache:Ir()},e.payload=t;return}t=t.return}}function $h(e,t,a){var l=ht();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ji(e)?Js(t,a):(a=Gr(e,t,a,l),a!==null&&(nt(a,e,l),Fs(a,t,l)))}function Ks(e,t,a){var l=ht();sn(e,t,a,l)}function sn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ji(e))Js(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,ut(s,u))return ai(e,t,n,0),je===null&&ti(),!1}catch{}if(a=Gr(e,t,n,l),a!==null)return nt(a,e,l),Fs(a,t,l),!0}return!1}function wo(e,t,a,l){if(l={lane:2,revertLane:lu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ji(e)){if(t)throw Error(c(479))}else t=Gr(e,a,l,2),t!==null&&nt(t,e,2)}function ji(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Js(e,t){Sl=pi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Fs(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ec(e,a)}}var fn={readContext:Qe,use:vi,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};fn.useEffectEvent=Ae;var Ws={readContext:Qe,use:vi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:_s,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,bi(4194308,4,Ls.bind(null,t,e),a)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){bi(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Ka){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var n=a(t);if(Ka){oa(!0);try{a(t)}finally{oa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=$h.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=vo(e);var t=e.queue,a=Ks.bind(null,ee,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:So,useDeferredValue:function(e,t){var a=$e();return jo(a,e,t)},useTransition:function(){var e=vo(!1);return e=ks.bind(null,ee,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ee,n=$e();if(oe){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),je===null)throw Error(c(349));(ie&127)!==0||ys(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,_s(xs.bind(null,l,i,e),[e]),l.flags|=2048,El(9,{destroy:void 0},vs.bind(null,l,i,a,t),null),a},useId:function(){var e=$e(),t=je.identifierPrefix;if(oe){var a=Ht,l=Ut;a=(l&~(1<<32-ot(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=gi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Qh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zo,useFormState:As,useActionState:As,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=wo.bind(null,ee,!0,a),a.dispatch=t,[e,t]},useMemoCache:po,useCacheRefresh:function(){return $e().memoizedState=Wh.bind(null,ee)},useEffectEvent:function(e){var t=$e(),a={impl:e};return t.memoizedState=a,function(){if((fe&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},No={readContext:Qe,use:vi,useCallback:Bs,useContext:Qe,useEffect:bo,useImperativeHandle:qs,useInsertionEffect:Us,useLayoutEffect:Hs,useMemo:Ys,useReducer:xi,useRef:Ms,useState:function(){return xi(Ft)},useDebugValue:So,useDeferredValue:function(e,t){var a=_e();return Gs(a,ge.memoizedState,e,t)},useTransition:function(){var e=xi(Ft)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:cn(e),t]},useSyncExternalStore:gs,useId:Vs,useHostTransitionStatus:zo,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){var a=_e();return js(a,ge,e,t)},useMemoCache:po,useCacheRefresh:Zs};No.useEffectEvent=Os;var $s={readContext:Qe,use:vi,useCallback:Bs,useContext:Qe,useEffect:bo,useImperativeHandle:qs,useInsertionEffect:Us,useLayoutEffect:Hs,useMemo:Ys,useReducer:yo,useRef:Ms,useState:function(){return yo(Ft)},useDebugValue:So,useDeferredValue:function(e,t){var a=_e();return ge===null?jo(a,e,t):Gs(a,ge.memoizedState,e,t)},useTransition:function(){var e=yo(Ft)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:cn(e),t]},useSyncExternalStore:gs,useId:Vs,useHostTransitionStatus:zo,useFormState:Cs,useActionState:Cs,useOptimistic:function(e,t){var a=_e();return ge!==null?js(a,ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:po,useCacheRefresh:Zs};$s.useEffectEvent=Os;function To(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ao={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ht(),n=pa(l);n.payload=t,a!=null&&(n.callback=a),t=ga(e,n,l),t!==null&&(nt(t,e,l),nn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ht(),n=pa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ga(e,n,l),t!==null&&(nt(t,e,l),nn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ht(),l=pa(a);l.tag=2,t!=null&&(l.callback=t),t=ga(e,l,a),t!==null&&(nt(t,e,a),nn(t,e,a))}};function Is(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Wl(a,l)||!Wl(n,i):!0}function Ps(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ef(e){ei(e)}function tf(e){console.error(e)}function af(e){ei(e)}function Ei(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function lf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ro(e,t,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ei(e,t)},a}function nf(e){return e=pa(e),e.tag=3,e}function rf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){lf(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){lf(t,a,l),typeof n!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Ih(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&pl(t,a,n,!0),a=st.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?Ui():a.alternate===null&&Re===0&&(Re=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===si?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),eu(e,l,n)),!1;case 22:return a.flags|=65536,l===si?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),eu(e,l,n)),!1}throw Error(c(435,a.tag))}return eu(e,l,n),Ui(),!1}if(oe)return t=st.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Kr&&(e=Error(c(422),{cause:l}),Pl(bt(e,a)))):(l!==Kr&&(t=Error(c(423),{cause:l}),Pl(bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=bt(l,a),n=Ro(e.stateNode,l,n),no(e,n),Re!==4&&(Re=2)),!1;var i=Error(c(520),{cause:l});if(i=bt(i,a),xn===null?xn=[i]:xn.push(i),Re!==4&&(Re=2),t===null)return!0;l=bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Ro(a.stateNode,l,e),no(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ja===null||!ja.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=nf(n),rf(n,e,a,l),no(a,n),!1}a=a.return}while(a!==null);return!1}var Do=Error(c(461)),Le=!1;function Ve(e,t,a,l){t.child=e===null?cs(t,null,a,l):Za(t,e.child,a,l)}function of(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return ka(t),l=so(e,t,a,u,i,n),s=fo(),e!==null&&!Le?(mo(e,t,n),Wt(e,t,n)):(oe&&s&&Vr(t),t.flags|=1,Ve(e,t,l,n),t.child)}function uf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!kr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,cf(e,t,i,l,n)):(e=ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!qo(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Wl,a(u,l)&&e.ref===t.ref)return Wt(e,t,n)}return t.flags|=1,e=Qt(i,l),e.ref=t.ref,e.return=t,t.child=e}function cf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Wl(i,l)&&e.ref===t.ref)if(Le=!1,t.pendingProps=l=i,qo(e,n))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,Wt(e,t,n)}return Co(e,t,a,l,n)}function sf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return ff(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ui(t,i!==null?i.cachePool:null),i!==null?ds(t,i):ro(),ms(t);else return l=t.lanes=536870912,ff(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ui(t,i.cachePool),ds(t,i),va(),t.memoizedState=null):(e!==null&&ui(t,null),ro(),va());return Ve(e,t,n,a),t.child}function dn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ff(e,t,a,l,n){var i=eo();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ui(t,null),ro(),ms(t),e!==null&&pl(e,t,l,!0),t.childLanes=n,null}function zi(e,t){return t=Ni({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function df(e,t,a){return Za(t,e.child,null,a),e=zi(t,t.pendingProps),e.flags|=2,ft(t),t.memoizedState=null,e}function Ph(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(l.mode==="hidden")return e=zi(t,l),t.lanes=536870912,dn(null,e);if(uo(t),(e=Ee)?(e=zd(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:Ut,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Jc(e),a.return=t,t.child=a,Xe=t,Ee=null)):e=null,e===null)throw da(t);return t.lanes=536870912,null}return zi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(uo(t),n)if(t.flags&256)t.flags&=-257,t=df(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Le||pl(e,t,a,!1),n=(a&e.childLanes)!==0,Le||n){if(l=je,l!==null&&(u=tc(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,qa(e,u),nt(l,e,u),Do;Ui(),t=df(e,t,a)}else e=i.treeContext,Ee=wt(u.nextSibling),Xe=t,oe=!0,fa=null,Et=!1,e!==null&&$c(t,e),t=zi(t,l),t.flags|=4096;return t}return e=Qt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Co(e,t,a,l,n){return ka(t),a=so(e,t,a,l,void 0,n),l=fo(),e!==null&&!Le?(mo(e,t,n),Wt(e,t,n)):(oe&&l&&Vr(t),t.flags|=1,Ve(e,t,a,n),t.child)}function mf(e,t,a,l,n,i){return ka(t),t.updateQueue=null,a=ps(t,l,a,n),hs(e),l=fo(),e!==null&&!Le?(mo(e,t,i),Wt(e,t,i)):(oe&&l&&Vr(t),t.flags|=1,Ve(e,t,a,i),t.child)}function hf(e,t,a,l,n){if(ka(t),t.stateNode===null){var i=fl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Qe(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ao,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ao(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Qe(u):fl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(To(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Ao.enqueueReplaceState(i,i.state,null),on(t,l,i,n),rn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,h=Ja(a,s);i.props=h;var z=i.context,R=a.contextType;u=fl,typeof R=="object"&&R!==null&&(u=Qe(R));var _=a.getDerivedStateFromProps;R=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||z!==u)&&Ps(t,i,l,u),ha=!1;var N=t.memoizedState;i.state=N,on(t,l,i,n),rn(),z=t.memoizedState,s||N!==z||ha?(typeof _=="function"&&(To(t,a,_,l),z=t.memoizedState),(h=ha||Is(t,a,h,l,N,z,u))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=z),i.props=l,i.state=z,i.context=u,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,lo(e,t),u=t.memoizedProps,R=Ja(a,u),i.props=R,_=t.pendingProps,N=i.context,z=a.contextType,h=fl,typeof z=="object"&&z!==null&&(h=Qe(z)),s=a.getDerivedStateFromProps,(z=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==_||N!==h)&&Ps(t,i,l,h),ha=!1,N=t.memoizedState,i.state=N,on(t,l,i,n),rn();var A=t.memoizedState;u!==_||N!==A||ha||e!==null&&e.dependencies!==null&&ri(e.dependencies)?(typeof s=="function"&&(To(t,a,s,l),A=t.memoizedState),(R=ha||Is(t,a,R,l,N,A,h)||e!==null&&e.dependencies!==null&&ri(e.dependencies))?(z||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=h,l=R):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,wi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Za(t,e.child,null,n),t.child=Za(t,null,a,n)):Ve(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Wt(e,t,n),e}function pf(e,t,a,l){return Ya(),t.flags|=256,Ve(e,t,a,l),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _o(e){return{baseLanes:e,cachePool:ls()}}function Oo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=mt),e}function gf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?ya(t):va(),(e=Ee)?(e=zd(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:Ut,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Jc(e),a.return=t,t.child=a,Xe=t,Ee=null)):e=null,e===null)throw da(t);return gu(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(va(),n=t.mode,s=Ni({mode:"hidden",children:s},n),l=Ba(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=_o(a),l.childLanes=Oo(e,u,a),t.memoizedState=Mo,dn(null,l)):(ya(t),Uo(t,s))}var h=e.memoizedState;if(h!==null&&(s=h.dehydrated,s!==null)){if(i)t.flags&256?(ya(t),t.flags&=-257,t=Ho(e,t,a)):t.memoizedState!==null?(va(),t.child=e.child,t.flags|=128,t=null):(va(),s=l.fallback,n=t.mode,l=Ni({mode:"visible",children:l.children},n),s=Ba(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Za(t,e.child,null,a),l=t.child,l.memoizedState=_o(a),l.childLanes=Oo(e,u,a),t.memoizedState=Mo,t=dn(null,l));else if(ya(t),gu(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var z=u.dgst;u=z,l=Error(c(419)),l.stack="",l.digest=u,Pl({value:l,source:null,stack:null}),t=Ho(e,t,a)}else if(Le||pl(e,t,a,!1),u=(a&e.childLanes)!==0,Le||u){if(u=je,u!==null&&(l=tc(u,a),l!==0&&l!==h.retryLane))throw h.retryLane=l,qa(e,l),nt(u,e,l),Do;pu(s)||Ui(),t=Ho(e,t,a)}else pu(s)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ee=wt(s.nextSibling),Xe=t,oe=!0,fa=null,Et=!1,e!==null&&$c(t,e),t=Uo(t,l.children),t.flags|=4096);return t}return n?(va(),s=l.fallback,n=t.mode,h=e.child,z=h.sibling,l=Qt(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,z!==null?s=Qt(z,s):(s=Ba(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,dn(null,l),l=t.child,s=e.child.memoizedState,s===null?s=_o(a):(n=s.cachePool,n!==null?(h=Ue._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=ls(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=Oo(e,u,a),t.memoizedState=Mo,dn(e.child,l)):(ya(t),a=e.child,e=a.sibling,a=Qt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Uo(e,t){return t=Ni({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ni(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function Ho(e,t,a){return Za(t,e.child,null,a),e=Uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Wr(e.return,t,a)}function Lo(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function vf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Me.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,q(Me,u),Ve(e,t,l,a),l=oe?Il:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yf(e,a,t);else if(e.tag===19)yf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&hi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Lo(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&hi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Lo(t,!0,a,null,i,l);break;case"together":Lo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function qo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ri(e)))}function ep(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),ma(t,Ue,e.memoizedState.cache),Ya();break;case 27:case 5:Ll(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?gf(e,t,a):(ya(t),e=Wt(e,t,a),e!==null?e.sibling:null);ya(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(pl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return vf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(Me,Me.current),l)break;return null;case 22:return t.lanes=0,sf(e,t,a,t.pendingProps);case 24:ma(t,Ue,e.memoizedState.cache)}return Wt(e,t,a)}function xf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!qo(e,a)&&(t.flags&128)===0)return Le=!1,ep(e,t,a);Le=(e.flags&131072)!==0}else Le=!1,oe&&(t.flags&1048576)!==0&&Wc(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Qa(t.elementType),t.type=e,typeof e=="function")kr(e)?(l=Ja(e,l),t.tag=1,t=hf(null,t,e,l,a)):(t.tag=0,t=Co(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===xe){t.tag=11,t=of(null,t,e,l,a);break e}else if(n===W){t.tag=14,t=uf(null,t,e,l,a);break e}}throw t=gt(e)||e,Error(c(306,t,""))}}return t;case 0:return Co(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ja(l,t.pendingProps),hf(e,t,l,n,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,lo(e,t),on(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ma(t,Ue,l),l!==i.cache&&$r(t,[Ue],a,!0),rn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=pf(e,t,l,a);break e}else if(l!==n){n=bt(Error(c(424)),t),Pl(n),t=pf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ee=wt(e.firstChild),Xe=t,oe=!0,fa=null,Et=!0,a=cs(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ya(),l===n){t=Wt(e,t,a);break e}Ve(e,t,l,a)}t=t.child}return t;case 26:return wi(e,t),e===null?(a=Dd(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=ki(ae.current).createElement(a),l[ke]=t,l[Ie]=e,Ze(l,a,e),Ye(l),t.stateNode=l):t.memoizedState=Dd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ll(t),e===null&&oe&&(l=t.stateNode=Td(t.type,t.pendingProps,ae.current),Xe=t,Et=!0,n=Ee,Na(t.type)?(yu=n,Ee=wt(l.firstChild)):Ee=n),Ve(e,t,t.pendingProps.children,a),wi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=Ee)&&(l=Dp(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Xe=t,Ee=wt(l.firstChild),Et=!1,n=!0):n=!1),n||da(t)),Ll(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,du(n,i)?l=null:u!==null&&du(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=so(e,t,Vh,null,null,a),Tn._currentValue=n),wi(e,t),Ve(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=Ee)&&(a=Cp(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Xe=t,Ee=null,e=!0):e=!1),e||da(t)),null;case 13:return gf(e,t,a);case 4:return We(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Za(t,null,l,a):Ve(e,t,l,a),t.child;case 11:return of(e,t,t.type,t.pendingProps,a);case 7:return Ve(e,t,t.pendingProps,a),t.child;case 8:return Ve(e,t,t.pendingProps.children,a),t.child;case 12:return Ve(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ma(t,t.type,l.value),Ve(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,ka(t),n=Qe(n),l=l(n),t.flags|=1,Ve(e,t,l,a),t.child;case 14:return uf(e,t,t.type,t.pendingProps,a);case 15:return cf(e,t,t.type,t.pendingProps,a);case 19:return vf(e,t,a);case 31:return Ph(e,t,a);case 22:return sf(e,t,a,t.pendingProps);case 24:return ka(t),l=Qe(Ue),e===null?(n=eo(),n===null&&(n=je,i=Ir(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ao(t),ma(t,Ue,n)):((e.lanes&a)!==0&&(lo(e,t),on(t,null,null,a),rn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ma(t,Ue,l)):(l=i.cache,ma(t,Ue,l),l!==n.cache&&$r(t,[Ue],a,!0))),Ve(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function $t(e){e.flags|=4}function Bo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Zf())e.flags|=8192;else throw Va=si,to}else e.flags&=-16777217}function bf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ud(t))if(Zf())e.flags|=8192;else throw Va=si,to}function Ti(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Iu():536870912,e.lanes|=t,Tl|=t)}function mn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function tp(e,t,a){var l=t.pendingProps;switch(Zr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Kt(Ue),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(hl(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jr())),ze(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?($t(t),i!==null?(ze(t),bf(t,i)):(ze(t),Bo(t,n,null,l,a))):i?i!==e.memoizedState?($t(t),ze(t),bf(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&$t(t),ze(t),Bo(t,n,e,l,a)),null;case 27:if(qn(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return ze(t),null}e=G.current,hl(t)?Ic(t):(e=Td(n,l,a),t.stateNode=e,$t(t))}return ze(t),null;case 5:if(qn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return ze(t),null}if(i=G.current,hl(t))Ic(t);else{var u=ki(ae.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[ke]=t,i[Ie]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Ze(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&$t(t)}}return ze(t),Bo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,hl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Xe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[ke]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||gd(e.nodeValue,a)),e||da(t,!0)}else e=ki(e).createTextNode(l),e[ke]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=hl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ke]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=Jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ft(t),t):(ft(t),null);if((t.flags&128)!==0)throw Error(c(558))}return ze(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=hl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[ke]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ft(t),t):(ft(t),null)}return ft(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ti(t,t.updateQueue),ze(t),null);case 4:return Ce(),e===null&&ou(t.stateNode.containerInfo),ze(t),null;case 10:return Kt(t.type),ze(t),null;case 19:if(O(Me),l=t.memoizedState,l===null)return ze(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)mn(l,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=hi(e),i!==null){for(t.flags|=128,mn(l,!1),e=i.updateQueue,t.updateQueue=e,Ti(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Kc(a,e),a=a.sibling;return q(Me,Me.current&1|2),oe&&Vt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&it()>Mi&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304)}else{if(!n)if(e=hi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ti(t,e),mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!oe)return ze(t),null}else 2*it()-l.renderingStartTime>Mi&&a!==536870912&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=it(),e.sibling=null,a=Me.current,q(Me,n?a&1|2:a&1),oe&&Vt(t,l.treeForkCount),e):(ze(t),null);case 22:case 23:return ft(t),oo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Ti(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&O(Xa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(Ue),ze(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function ap(e,t){switch(Zr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(Ue),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qn(t),null;case 31:if(t.memoizedState!==null){if(ft(t),t.alternate===null)throw Error(c(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Me),null;case 4:return Ce(),null;case 10:return Kt(t.type),null;case 22:case 23:return ft(t),oo(),e!==null&&O(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(Ue),null;case 25:return null;default:return null}}function Sf(e,t){switch(Zr(t),t.tag){case 3:Kt(Ue),Ce();break;case 26:case 27:case 5:qn(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&ft(t);break;case 13:ft(t);break;case 19:O(Me);break;case 10:Kt(t.type);break;case 22:case 23:ft(t),oo(),e!==null&&O(Xa);break;case 24:Kt(Ue)}}function hn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){he(t,t.return,s)}}function xa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var h=a,z=s;try{z()}catch(R){he(n,h,R)}}}l=l.next}while(l!==i)}}catch(R){he(t,t.return,R)}}function jf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{fs(t,a)}catch(l){he(e,e.return,l)}}}function Ef(e,t,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function pn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){he(e,t,n)}}function Lt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){he(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){he(e,t,n)}else a.current=null}function zf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){he(e,e.return,n)}}function Yo(e,t,a){try{var l=e.stateNode;zp(l,e.type,a,t),l[Ie]=t}catch(n){he(e,e.return,n)}}function wf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function Go(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ko(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=kt));else if(l!==4&&(l===27&&Na(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ko(e,t,a),e=e.sibling;e!==null;)ko(e,t,a),e=e.sibling}function Ai(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ai(e,t,a),e=e.sibling;e!==null;)Ai(e,t,a),e=e.sibling}function Nf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ze(t,l,a),t[ke]=e,t[Ie]=a}catch(i){he(e,e.return,i)}}var It=!1,qe=!1,Xo=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function lp(e,t){if(e=e.containerInfo,su=Fi,e=qc(e),Ur(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,h=-1,z=0,R=0,_=e,N=null;t:for(;;){for(var A;_!==a||n!==0&&_.nodeType!==3||(s=u+n),_!==i||l!==0&&_.nodeType!==3||(h=u+l),_.nodeType===3&&(u+=_.nodeValue.length),(A=_.firstChild)!==null;)N=_,_=A;for(;;){if(_===e)break t;if(N===a&&++z===n&&(s=u),N===i&&++R===l&&(h=u),(A=_.nextSibling)!==null)break;_=N,N=_.parentNode}_=A}a=s===-1||h===-1?null:{start:s,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(fu={focusedElem:e,selectionRange:a},Fi=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var B=Ja(a.type,n);e=l.getSnapshotBeforeUpdate(B,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(Z){he(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)hu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Af(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),l&4&&hn(5,a);break;case 1:if(ea(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){he(a,a.return,u)}else{var n=Ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){he(a,a.return,u)}}l&64&&jf(a),l&512&&pn(a,a.return);break;case 3:if(ea(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{fs(e,t)}catch(u){he(a,a.return,u)}}break;case 27:t===null&&l&4&&Nf(a);case 26:case 5:ea(e,a),t===null&&l&4&&zf(a),l&512&&pn(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),l&4&&Cf(e,a);break;case 13:ea(e,a),l&4&&Mf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=dp.bind(null,a),Mp(e,a))));break;case 22:if(l=a.memoizedState!==null||It,!l){t=t!==null&&t.memoizedState!==null||qe,n=It;var i=qe;It=l,(qe=t)&&!i?ta(e,a,(a.subtreeFlags&8772)!==0):ea(e,a),It=n,qe=i}break;case 30:break;default:ea(e,a)}}function Rf(e){var t=e.alternate;t!==null&&(e.alternate=null,Rf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,et=!1;function Pt(e,t,a){for(a=a.child;a!==null;)Df(e,t,a),a=a.sibling}function Df(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(ql,a)}catch{}switch(a.tag){case 26:qe||Lt(a,t),Pt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Lt(a,t);var l=we,n=et;Na(a.type)&&(we=a.stateNode,et=!1),Pt(e,t,a),zn(a.stateNode),we=l,et=n;break;case 5:qe||Lt(a,t);case 6:if(l=we,n=et,we=null,Pt(e,t,a),we=l,et=n,we!==null)if(et)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(a.stateNode)}catch(i){he(a,t,i)}else try{we.removeChild(a.stateNode)}catch(i){he(a,t,i)}break;case 18:we!==null&&(et?(e=we,jd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ul(e)):jd(we,a.stateNode));break;case 4:l=we,n=et,we=a.stateNode.containerInfo,et=!0,Pt(e,t,a),we=l,et=n;break;case 0:case 11:case 14:case 15:xa(2,a,t),qe||xa(4,a,t),Pt(e,t,a);break;case 1:qe||(Lt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ef(a,t,l)),Pt(e,t,a);break;case 21:Pt(e,t,a);break;case 22:qe=(l=qe)||a.memoizedState!==null,Pt(e,t,a),qe=l;break;default:Pt(e,t,a)}}function Cf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ul(e)}catch(a){he(t,t.return,a)}}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ul(e)}catch(a){he(t,t.return,a)}}function np(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tf),t;default:throw Error(c(435,e.tag))}}function Ri(e,t){var a=np(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=mp.bind(null,e,l);l.then(n,n)}})}function tt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(Na(s.type)){we=s.stateNode,et=!1;break e}break;case 5:we=s.stateNode,et=!1;break e;case 3:case 4:we=s.stateNode.containerInfo,et=!0;break e}s=s.return}if(we===null)throw Error(c(160));Df(i,u,n),we=null,et=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}var Dt=null;function _f(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),at(e),l&4&&(xa(3,e,e.return),hn(3,e),xa(5,e,e.return));break;case 1:tt(t,e),at(e),l&512&&(qe||a===null||Lt(a,a.return)),l&64&&It&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Dt;if(tt(t,e),at(e),l&512&&(qe||a===null||Lt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Gl]||i[ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ze(i,l,a),i[ke]=e,Ye(i),l=i;break e;case"link":var u=_d("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;case"meta":if(u=_d("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[ke]=e,Ye(i),l=i}e.stateNode=l}else Od(n,e.type,e.stateNode);else e.stateNode=Md(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Od(n,e.type,e.stateNode):Md(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:tt(t,e),at(e),l&512&&(qe||a===null||Lt(a,a.return)),a!==null&&l&4&&Yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(tt(t,e),at(e),l&512&&(qe||a===null||Lt(a,a.return)),e.flags&32){n=e.stateNode;try{nl(n,"")}catch(B){he(e,e.return,B)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Yo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Xo=!0);break;case 6:if(tt(t,e),at(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(B){he(e,e.return,B)}}break;case 3:if(Vi=null,n=Dt,Dt=Xi(t.containerInfo),tt(t,e),Dt=n,at(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ul(t.containerInfo)}catch(B){he(e,e.return,B)}Xo&&(Xo=!1,Of(e));break;case 4:l=Dt,Dt=Xi(e.stateNode.containerInfo),tt(t,e),at(e),Dt=l;break;case 12:tt(t,e),at(e);break;case 31:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 13:tt(t,e),at(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ci=it()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,z=It,R=qe;if(It=z||n,qe=R||h,tt(t,e),qe=R,It=z,at(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||It||qe||Fa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=h.stateNode;var _=h.memoizedProps.style,N=_!=null&&_.hasOwnProperty("display")?_.display:null;s.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(B){he(h,h.return,B)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(B){he(h,h.return,B)}}}else if(t.tag===18){if(a===null){h=t;try{var A=h.stateNode;n?Ed(A,!0):Ed(h.stateNode,!1)}catch(B){he(h,h.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ri(e,a))));break;case 19:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 30:break;case 21:break;default:tt(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(wf(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=Go(e);Ai(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(nl(u,""),a.flags&=-33);var s=Go(e);Ai(e,s,u);break;case 3:case 4:var h=a.stateNode.containerInfo,z=Go(e);ko(e,z,h);break;default:throw Error(c(161))}}catch(R){he(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Of(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Of(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Af(e,t.alternate,t),t=t.sibling}function Fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xa(4,t,t.return),Fa(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ef(t,t.return,a),Fa(t);break;case 27:zn(t.stateNode);case 26:case 5:Lt(t,t.return),Fa(t);break;case 22:t.memoizedState===null&&Fa(t);break;case 30:Fa(t);break;default:Fa(t)}e=e.sibling}}function ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:ta(n,i,a),hn(4,i);break;case 1:if(ta(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){he(l,l.return,z)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)ss(h[n],s)}catch(z){he(l,l.return,z)}}a&&u&64&&jf(i),pn(i,i.return);break;case 27:Nf(i);case 26:case 5:ta(n,i,a),a&&l===null&&u&4&&zf(i),pn(i,i.return);break;case 12:ta(n,i,a);break;case 31:ta(n,i,a),a&&u&4&&Cf(n,i);break;case 13:ta(n,i,a),a&&u&4&&Mf(n,i);break;case 22:i.memoizedState===null&&ta(n,i,a),pn(i,i.return);break;case 30:break;default:ta(n,i,a)}t=t.sibling}}function Qo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&en(a))}function Vo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e))}function Ct(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uf(e,t,a,l),t=t.sibling}function Uf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ct(e,t,a,l),n&2048&&hn(9,t);break;case 1:Ct(e,t,a,l);break;case 3:Ct(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e)));break;case 12:if(n&2048){Ct(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){he(t,t.return,h)}}else Ct(e,t,a,l);break;case 31:Ct(e,t,a,l);break;case 13:Ct(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Ct(e,t,a,l):gn(e,t):i._visibility&2?Ct(e,t,a,l):(i._visibility|=2,zl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Qo(u,t);break;case 24:Ct(e,t,a,l),n&2048&&Vo(t.alternate,t);break;default:Ct(e,t,a,l)}}function zl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=a,h=l,z=u.flags;switch(u.tag){case 0:case 11:case 15:zl(i,u,s,h,n),hn(8,u);break;case 23:break;case 22:var R=u.stateNode;u.memoizedState!==null?R._visibility&2?zl(i,u,s,h,n):gn(i,u):(R._visibility|=2,zl(i,u,s,h,n)),n&&z&2048&&Qo(u.alternate,u);break;case 24:zl(i,u,s,h,n),n&&z&2048&&Vo(u.alternate,u);break;default:zl(i,u,s,h,n)}t=t.sibling}}function gn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:gn(a,l),n&2048&&Qo(l.alternate,l);break;case 24:gn(a,l),n&2048&&Vo(l.alternate,l);break;default:gn(a,l)}t=t.sibling}}var yn=8192;function wl(e,t,a){if(e.subtreeFlags&yn)for(e=e.child;e!==null;)Hf(e,t,a),e=e.sibling}function Hf(e,t,a){switch(e.tag){case 26:wl(e,t,a),e.flags&yn&&e.memoizedState!==null&&Qp(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:wl(e,t,a);break;case 3:case 4:var l=Dt;Dt=Xi(e.stateNode.containerInfo),wl(e,t,a),Dt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yn,yn=16777216,wl(e,t,a),yn=l):wl(e,t,a));break;default:wl(e,t,a)}}function Lf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function vn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Bf(l,e)}Lf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qf(e),e=e.sibling}function qf(e){switch(e.tag){case 0:case 11:case 15:vn(e),e.flags&2048&&xa(9,e,e.return);break;case 3:vn(e);break;case 12:vn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Di(e)):vn(e);break;default:vn(e)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Bf(l,e)}Lf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xa(8,t,t.return),Di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Di(t));break;default:Di(t)}e=e.sibling}}function Bf(e,t){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:xa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:en(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ge=l;else e:for(a=e;Ge!==null;){l=Ge;var n=l.sibling,i=l.return;if(Rf(l),l===a){Ge=null;break e}if(n!==null){n.return=i,Ge=n;break e}Ge=i}}}var ip={getCacheForType:function(e){var t=Qe(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Qe(Ue).controller.signal}},rp=typeof WeakMap=="function"?WeakMap:Map,fe=0,je=null,le=null,ie=0,me=0,dt=null,ba=!1,Nl=!1,Zo=!1,aa=0,Re=0,Sa=0,Wa=0,Ko=0,mt=0,Tl=0,xn=null,lt=null,Jo=!1,Ci=0,Yf=0,Mi=1/0,_i=null,ja=null,Be=0,Ea=null,Al=null,la=0,Fo=0,Wo=null,Gf=null,bn=0,$o=null;function ht(){return(fe&2)!==0&&ie!==0?ie&-ie:D.T!==null?lu():ac()}function kf(){if(mt===0)if((ie&536870912)===0||oe){var e=Gn;Gn<<=1,(Gn&3932160)===0&&(Gn=262144),mt=e}else mt=536870912;return e=st.current,e!==null&&(e.flags|=32),mt}function nt(e,t,a){(e===je&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Rl(e,0),za(e,ie,mt,!1)),Yl(e,a),((fe&2)===0||e!==je)&&(e===je&&((fe&2)===0&&(Wa|=a),Re===4&&za(e,ie,mt,!1)),qt(e))}function Xf(e,t,a){if((fe&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Bl(e,t),n=l?cp(e,t):Po(e,t,!0),i=l;do{if(n===0){Nl&&!l&&za(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!op(a)){n=Po(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=xn;var h=s.current.memoizedState.isDehydrated;if(h&&(Rl(s,u).flags|=256),u=Po(s,u,!1),u!==2){if(Zo&&!h){s.errorRecoveryDisabledLanes|=i,Wa|=i,n=4;break e}i=lt,lt=n,i!==null&&(lt===null?lt=i:lt.push.apply(lt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Rl(e,0),za(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:za(l,t,mt,!ba);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Ci+300-it(),10<n)){if(za(l,t,mt,!ba),Xn(l,0,!0)!==0)break e;la=t,l.timeoutHandle=bd(Qf.bind(null,l,a,lt,_i,Jo,t,mt,Wa,Tl,ba,i,"Throttled",-0,0),n);break e}Qf(l,a,lt,_i,Jo,t,mt,Wa,Tl,ba,i,null,-0,0)}}break}while(!0);qt(e)}function Qf(e,t,a,l,n,i,u,s,h,z,R,_,N,A){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kt},Hf(t,i,_);var B=(i&62914560)===i?Ci-it():(i&4194048)===i?Yf-it():0;if(B=Vp(_,B),B!==null){la=i,e.cancelPendingCommit=B(If.bind(null,e,t,i,a,l,n,u,s,h,R,_,null,N,A)),za(e,i,u,!z);return}}If(e,t,i,a,l,n,u,s,h)}function op(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ut(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function za(e,t,a,l){t&=~Ko,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ot(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Pu(e,a,t)}function Oi(){return(fe&6)===0?(Sn(0),!1):!0}function Io(){if(le!==null){if(me===0)var e=le.return;else e=le,Zt=Ga=null,ho(e),xl=null,an=0,e=le;for(;e!==null;)Sf(e.alternate,e),e=e.return;le=null}}function Rl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Tp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,Io(),je=e,le=a=Qt(e.current,null),ie=t,me=0,dt=null,ba=!1,Nl=Bl(e,t),Zo=!1,Tl=mt=Ko=Wa=Sa=Re=0,lt=xn=null,Jo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ot(l),i=1<<n;t|=e[n],l&=~i}return aa=t,ti(),a}function Vf(e,t){ee=null,D.H=fn,t===vl||t===ci?(t=rs(),me=3):t===to?(t=rs(),me=4):me=t===Do?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,dt=t,le===null&&(Re=1,Ei(e,bt(t,e.current)))}function Zf(){var e=st.current;return e===null?!0:(ie&4194048)===ie?zt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===zt:!1}function Kf(){var e=D.H;return D.H=fn,e===null?fn:e}function Jf(){var e=D.A;return D.A=ip,e}function Ui(){Re=4,ba||(ie&4194048)!==ie&&st.current!==null||(Nl=!0),(Sa&134217727)===0&&(Wa&134217727)===0||je===null||za(je,ie,mt,!1)}function Po(e,t,a){var l=fe;fe|=2;var n=Kf(),i=Jf();(je!==e||ie!==t)&&(_i=null,Rl(e,t)),t=!1;var u=Re;e:do try{if(me!==0&&le!==null){var s=le,h=dt;switch(me){case 8:Io(),u=6;break e;case 3:case 2:case 9:case 6:st.current===null&&(t=!0);var z=me;if(me=0,dt=null,Dl(e,s,h,z),a&&Nl){u=0;break e}break;default:z=me,me=0,dt=null,Dl(e,s,h,z)}}up(),u=Re;break}catch(R){Vf(e,R)}while(!0);return t&&e.shellSuspendCounter++,Zt=Ga=null,fe=l,D.H=n,D.A=i,le===null&&(je=null,ie=0,ti()),u}function up(){for(;le!==null;)Ff(le)}function cp(e,t){var a=fe;fe|=2;var l=Kf(),n=Jf();je!==e||ie!==t?(_i=null,Mi=it()+500,Rl(e,t)):Nl=Bl(e,t);e:do try{if(me!==0&&le!==null){t=le;var i=dt;t:switch(me){case 1:me=0,dt=null,Dl(e,t,i,1);break;case 2:case 9:if(ns(i)){me=0,dt=null,Wf(t);break}t=function(){me!==2&&me!==9||je!==e||(me=7),qt(e)},i.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:ns(i)?(me=0,dt=null,Wf(t)):(me=0,dt=null,Dl(e,t,i,7));break;case 5:var u=null;switch(le.tag){case 26:u=le.memoizedState;case 5:case 27:var s=le;if(u?Ud(u):s.stateNode.complete){me=0,dt=null;var h=s.sibling;if(h!==null)le=h;else{var z=s.return;z!==null?(le=z,Hi(z)):le=null}break t}}me=0,dt=null,Dl(e,t,i,5);break;case 6:me=0,dt=null,Dl(e,t,i,6);break;case 8:Io(),Re=6;break e;default:throw Error(c(462))}}sp();break}catch(R){Vf(e,R)}while(!0);return Zt=Ga=null,D.H=l,D.A=n,fe=a,le!==null?0:(je=null,ie=0,ti(),Re)}function sp(){for(;le!==null&&!_m();)Ff(le)}function Ff(e){var t=xf(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?Hi(e):le=t}function Wf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=mf(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=mf(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:ho(t);default:Sf(a,t),t=le=Kc(t,aa),t=xf(a,t,aa)}e.memoizedProps=e.pendingProps,t===null?Hi(e):le=t}function Dl(e,t,a,l){Zt=Ga=null,ho(t),xl=null,an=0;var n=t.return;try{if(Ih(e,n,t,a,ie)){Re=1,Ei(e,bt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;Re=1,Ei(e,bt(a,e.current)),le=null;return}t.flags&32768?(oe||l===1?e=!0:Nl||(ie&536870912)!==0?e=!1:(ba=e=!0,(l===2||l===9||l===3||l===6)&&(l=st.current,l!==null&&l.tag===13&&(l.flags|=16384))),$f(t,e)):Hi(t)}function Hi(e){var t=e;do{if((t.flags&32768)!==0){$f(t,ba);return}e=t.return;var a=tp(t.alternate,t,aa);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Re===0&&(Re=5)}function $f(e,t){do{var a=ap(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Re=6,le=null}function If(e,t,a,l,n,i,u,s,h){e.cancelPendingCommit=null;do Li();while(Be!==0);if((fe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=Yr,Xm(e,a,i,u,s,h),e===je&&(le=je=null,ie=0),Al=t,Ea=e,la=a,Fo=i,Wo=n,Gf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hp(Bn,function(){return ld(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,n=L.p,L.p=2,u=fe,fe|=4;try{lp(e,t,a)}finally{fe=u,L.p=n,D.T=l}}Be=1,Pf(),ed(),td()}}function Pf(){if(Be===1){Be=0;var e=Ea,t=Al,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=L.p;L.p=2;var n=fe;fe|=4;try{_f(t,e);var i=fu,u=qc(e.containerInfo),s=i.focusedElem,h=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&Lc(s.ownerDocument.documentElement,s)){if(h!==null&&Ur(s)){var z=h.start,R=h.end;if(R===void 0&&(R=z),"selectionStart"in s)s.selectionStart=z,s.selectionEnd=Math.min(R,s.value.length);else{var _=s.ownerDocument||document,N=_&&_.defaultView||window;if(N.getSelection){var A=N.getSelection(),B=s.textContent.length,Z=Math.min(h.start,B),ve=h.end===void 0?Z:Math.min(h.end,B);!A.extend&&Z>ve&&(u=ve,ve=Z,Z=u);var S=Hc(s,Z),y=Hc(s,ve);if(S&&y&&(A.rangeCount!==1||A.anchorNode!==S.node||A.anchorOffset!==S.offset||A.focusNode!==y.node||A.focusOffset!==y.offset)){var E=_.createRange();E.setStart(S.node,S.offset),A.removeAllRanges(),Z>ve?(A.addRange(E),A.extend(y.node,y.offset)):(E.setEnd(y.node,y.offset),A.addRange(E))}}}}for(_=[],A=s;A=A.parentNode;)A.nodeType===1&&_.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<_.length;s++){var M=_[s];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Fi=!!su,fu=su=null}finally{fe=n,L.p=l,D.T=a}}e.current=t,Be=2}}function ed(){if(Be===2){Be=0;var e=Ea,t=Al,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=L.p;L.p=2;var n=fe;fe|=4;try{Af(e,t.alternate,t)}finally{fe=n,L.p=l,D.T=a}}Be=3}}function td(){if(Be===4||Be===3){Be=0,Om();var e=Ea,t=Al,a=la,l=Gf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Be=5:(Be=0,Al=Ea=null,ad(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ja=null),gr(a),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,n=L.p,L.p=2,D.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{D.T=t,L.p=n}}(la&3)!==0&&Li(),qt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===$o?bn++:(bn=0,$o=e):bn=0,Sn(0)}}function ad(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,en(t)))}function Li(){return Pf(),ed(),td(),ld()}function ld(){if(Be!==5)return!1;var e=Ea,t=Fo;Fo=0;var a=gr(la),l=D.T,n=L.p;try{L.p=32>a?32:a,D.T=null,a=Wo,Wo=null;var i=Ea,u=la;if(Be=0,Al=Ea=null,la=0,(fe&6)!==0)throw Error(c(331));var s=fe;if(fe|=4,qf(i.current),Uf(i,i.current,u,a),fe=s,Sn(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(ql,i)}catch{}return!0}finally{L.p=n,D.T=l,ad(e,t)}}function nd(e,t,a){t=bt(a,t),t=Ro(e.stateNode,t,2),e=ga(e,t,2),e!==null&&(Yl(e,2),qt(e))}function he(e,t,a){if(e.tag===3)nd(e,e,a);else for(;t!==null;){if(t.tag===3){nd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ja===null||!ja.has(l))){e=bt(a,e),a=nf(2),l=ga(t,a,2),l!==null&&(rf(a,l,t,e),Yl(l,2),qt(l));break}}t=t.return}}function eu(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new rp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Zo=!0,n.add(a),e=fp.bind(null,e,t,a),t.then(e,e))}function fp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(ie&a)===a&&(Re===4||Re===3&&(ie&62914560)===ie&&300>it()-Ci?(fe&2)===0&&Rl(e,0):Ko|=a,Tl===ie&&(Tl=0)),qt(e)}function id(e,t){t===0&&(t=Iu()),e=qa(e,t),e!==null&&(Yl(e,t),qt(e))}function dp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),id(e,a)}function mp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),id(e,a)}function hp(e,t){return dr(e,t)}var qi=null,Cl=null,tu=!1,Bi=!1,au=!1,wa=0;function qt(e){e!==Cl&&e.next===null&&(Cl===null?qi=Cl=e:Cl=Cl.next=e),Bi=!0,tu||(tu=!0,gp())}function Sn(e,t){if(!au&&Bi){au=!0;do for(var a=!1,l=qi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-ot(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,cd(l,i))}else i=ie,i=Xn(l,l===je?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Bl(l,i)||(a=!0,cd(l,i));l=l.next}while(a);au=!1}}function pp(){rd()}function rd(){Bi=tu=!1;var e=0;wa!==0&&Np()&&(e=wa);for(var t=it(),a=null,l=qi;l!==null;){var n=l.next,i=od(l,t);i===0?(l.next=null,a===null?qi=n:a.next=n,n===null&&(Cl=a)):(a=l,(e!==0||(i&3)!==0)&&(Bi=!0)),l=n}Be!==0&&Be!==5||Sn(e),wa!==0&&(wa=0)}function od(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ot(i),s=1<<u,h=n[u];h===-1?((s&a)===0||(s&l)!==0)&&(n[u]=km(s,t)):h<=t&&(e.expiredLanes|=s),i&=~s}if(t=je,a=ie,a=Xn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&mr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&mr(l),gr(a)){case 2:case 8:a=Wu;break;case 32:a=Bn;break;case 268435456:a=$u;break;default:a=Bn}return l=ud.bind(null,e),a=dr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&mr(l),e.callbackPriority=2,e.callbackNode=null,2}function ud(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Li()&&e.callbackNode!==a)return null;var l=ie;return l=Xn(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Xf(e,l,t),od(e,it()),e.callbackNode!=null&&e.callbackNode===a?ud.bind(null,e):null)}function cd(e,t){if(Li())return null;Xf(e,t,!0)}function gp(){Ap(function(){(fe&6)!==0?dr(Fu,pp):rd()})}function lu(){if(wa===0){var e=gl;e===0&&(e=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),wa=e}return wa}function sd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function fd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function yp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=sd((n[Ie]||null).action),u=l.submitter;u&&(t=(t=u[Ie]||null)?sd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new $n("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(wa!==0){var h=u?fd(n,u):new FormData(n);Eo(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=u?fd(n,u):new FormData(n),Eo(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var nu=0;nu<Br.length;nu++){var iu=Br[nu],vp=iu.toLowerCase(),xp=iu[0].toUpperCase()+iu.slice(1);Rt(vp,"on"+xp)}Rt(Gc,"onAnimationEnd"),Rt(kc,"onAnimationIteration"),Rt(Xc,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Uh,"onTransitionRun"),Rt(Hh,"onTransitionStart"),Rt(Lh,"onTransitionCancel"),Rt(Qc,"onTransitionEnd"),al("onMouseEnter",["mouseout","mouseover"]),al("onMouseLeave",["mouseout","mouseover"]),al("onPointerEnter",["pointerout","pointerover"]),al("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jn));function dd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var s=l[u],h=s.instance,z=s.currentTarget;if(s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=z;try{i(n)}catch(R){ei(R)}n.currentTarget=null,i=h}else for(u=0;u<l.length;u++){if(s=l[u],h=s.instance,z=s.currentTarget,s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=z;try{i(n)}catch(R){ei(R)}n.currentTarget=null,i=h}}}}function ne(e,t){var a=t[yr];a===void 0&&(a=t[yr]=new Set);var l=e+"__bubble";a.has(l)||(md(t,e,2,!1),a.add(l))}function ru(e,t,a){var l=0;t&&(l|=4),md(a,e,l,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function ou(e){if(!e[Yi]){e[Yi]=!0,ic.forEach(function(a){a!=="selectionchange"&&(bp.has(a)||ru(a,!1,e),ru(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,ru("selectionchange",!1,t))}}function md(e,t,a,l){switch(kd(t)){case 2:var n=Jp;break;case 8:n=Fp;break;default:n=ju}a=n.bind(null,t,a,e),n=void 0,!Nr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function uu(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var h=u.tag;if((h===3||h===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Pa(s),u===null)return;if(h=u.tag,h===5||h===6||h===26||h===27){l=i=u;continue e}s=s.parentNode}}l=l.return}yc(function(){var z=i,R=zr(a),_=[];e:{var N=Vc.get(e);if(N!==void 0){var A=$n,B=e;switch(e){case"keypress":if(Fn(a)===0)break e;case"keydown":case"keyup":A=mh;break;case"focusin":B="focus",A=Dr;break;case"focusout":B="blur",A=Dr;break;case"beforeblur":case"afterblur":A=Dr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=gh;break;case Gc:case kc:case Xc:A=nh;break;case Qc:A=vh;break;case"scroll":case"scrollend":A=Pm;break;case"wheel":A=bh;break;case"copy":case"cut":case"paste":A=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=jc;break;case"toggle":case"beforetoggle":A=jh}var Z=(t&4)!==0,ve=!Z&&(e==="scroll"||e==="scrollend"),S=Z?N!==null?N+"Capture":null:N;Z=[];for(var y=z,E;y!==null;){var M=y;if(E=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||E===null||S===null||(M=Xl(y,S),M!=null&&Z.push(En(y,M,E))),ve)break;y=y.return}0<Z.length&&(N=new A(N,B,null,a,R),_.push({event:N,listeners:Z}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",N&&a!==Er&&(B=a.relatedTarget||a.fromElement)&&(Pa(B)||B[Ia]))break e;if((A||N)&&(N=R.window===R?R:(N=R.ownerDocument)?N.defaultView||N.parentWindow:window,A?(B=a.relatedTarget||a.toElement,A=z,B=B?Pa(B):null,B!==null&&(ve=p(B),Z=B.tag,B!==ve||Z!==5&&Z!==27&&Z!==6)&&(B=null)):(A=null,B=z),A!==B)){if(Z=bc,M="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(Z=jc,M="onPointerLeave",S="onPointerEnter",y="pointer"),ve=A==null?N:kl(A),E=B==null?N:kl(B),N=new Z(M,y+"leave",A,a,R),N.target=ve,N.relatedTarget=E,M=null,Pa(R)===z&&(Z=new Z(S,y+"enter",B,a,R),Z.target=E,Z.relatedTarget=ve,M=Z),ve=M,A&&B)t:{for(Z=Sp,S=A,y=B,E=0,M=S;M;M=Z(M))E++;M=0;for(var V=y;V;V=Z(V))M++;for(;0<E-M;)S=Z(S),E--;for(;0<M-E;)y=Z(y),M--;for(;E--;){if(S===y||y!==null&&S===y.alternate){Z=S;break t}S=Z(S),y=Z(y)}Z=null}else Z=null;A!==null&&hd(_,N,A,Z,!1),B!==null&&ve!==null&&hd(_,ve,B,Z,!0)}}e:{if(N=z?kl(z):window,A=N.nodeName&&N.nodeName.toLowerCase(),A==="select"||A==="input"&&N.type==="file")var ce=Dc;else if(Ac(N))if(Cc)ce=Mh;else{ce=Dh;var k=Rh}else A=N.nodeName,!A||A.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?z&&jr(z.elementType)&&(ce=Dc):ce=Ch;if(ce&&(ce=ce(e,z))){Rc(_,ce,a,R);break e}k&&k(e,N,z),e==="focusout"&&z&&N.type==="number"&&z.memoizedProps.value!=null&&Sr(N,"number",N.value)}switch(k=z?kl(z):window,e){case"focusin":(Ac(k)||k.contentEditable==="true")&&(ul=k,Hr=z,$l=null);break;case"focusout":$l=Hr=ul=null;break;case"mousedown":Lr=!0;break;case"contextmenu":case"mouseup":case"dragend":Lr=!1,Bc(_,a,R);break;case"selectionchange":if(Oh)break;case"keydown":case"keyup":Bc(_,a,R)}var te;if(Mr)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else ol?Nc(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(Ec&&a.locale!=="ko"&&(ol||re!=="onCompositionStart"?re==="onCompositionEnd"&&ol&&(te=vc()):(ca=R,Tr="value"in ca?ca.value:ca.textContent,ol=!0)),k=Gi(z,re),0<k.length&&(re=new Sc(re,e,null,a,R),_.push({event:re,listeners:k}),te?re.data=te:(te=Tc(a),te!==null&&(re.data=te)))),(te=zh?wh(e,a):Nh(e,a))&&(re=Gi(z,"onBeforeInput"),0<re.length&&(k=new Sc("onBeforeInput","beforeinput",null,a,R),_.push({event:k,listeners:re}),k.data=te)),yp(_,e,z,a,R)}dd(_,t)})}function En(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Gi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Xl(e,a),n!=null&&l.unshift(En(e,n,i)),n=Xl(e,t),n!=null&&l.push(En(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Sp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hd(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var s=a,h=s.alternate,z=s.stateNode;if(s=s.tag,h!==null&&h===l)break;s!==5&&s!==26&&s!==27||z===null||(h=z,n?(z=Xl(a,i),z!=null&&u.unshift(En(a,z,h))):n||(z=Xl(a,i),z!=null&&u.push(En(a,z,h)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var jp=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function pd(e){return(typeof e=="string"?e:""+e).replace(jp,`
`).replace(Ep,"")}function gd(e,t){return t=pd(t),pd(e)===t}function ye(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||nl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&nl(e,""+l);break;case"className":Vn(e,"class",l);break;case"tabIndex":Vn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Vn(e,a,l);break;case"style":pc(e,l,i);break;case"data":if(t!=="object"){Vn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ye(e,t,"name",n.name,n,null),ye(e,t,"formEncType",n.formEncType,n,null),ye(e,t,"formMethod",n.formMethod,n,null),ye(e,t,"formTarget",n.formTarget,n,null)):(ye(e,t,"encType",n.encType,n,null),ye(e,t,"method",n.method,n,null),ye(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=kt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Qn(e,"popover",l);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Qn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$m.get(a)||a,Qn(e,a,l))}}function cu(e,t,a,l,n,i){switch(a){case"style":pc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?nl(e,l):(typeof l=="number"||typeof l=="bigint")&&nl(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ie]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Qn(e,a,l)}}}function Ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,i,u,a,null)}}n&&ye(e,t,"srcSet",a.srcSet,a,null),l&&ye(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var s=i=u=n=null,h=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var R=a[l];if(R!=null)switch(l){case"name":n=R;break;case"type":u=R;break;case"checked":h=R;break;case"defaultChecked":z=R;break;case"value":i=R;break;case"defaultValue":s=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:ye(e,t,l,R,a,null)}}fc(e,i,s,h,z,u,n,!1);return;case"select":ne("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:ye(e,t,n,s,a,null)}t=i,a=u,e.multiple=!!l,t!=null?ll(e,!!l,t,!1):a!=null&&ll(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:ye(e,t,u,s,a,null)}mc(e,l,n,i);return;case"option":for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null)&&(h==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ye(e,t,h,l,a,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<jn.length;l++)ne(jn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,z,l,a,null)}return;default:if(jr(t)){for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!==void 0&&cu(e,t,R,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&ye(e,t,s,l,a,null))}function zp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,h=null,z=null,R=null;for(A in a){var _=a[A];if(a.hasOwnProperty(A)&&_!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":h=_;default:l.hasOwnProperty(A)||ye(e,t,A,null,l,_)}}for(var N in l){var A=l[N];if(_=a[N],l.hasOwnProperty(N)&&(A!=null||_!=null))switch(N){case"type":i=A;break;case"name":n=A;break;case"checked":z=A;break;case"defaultChecked":R=A;break;case"value":u=A;break;case"defaultValue":s=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:A!==_&&ye(e,t,N,A,l,_)}}br(e,u,s,h,z,R,i,n);return;case"select":A=u=s=N=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":A=h;default:l.hasOwnProperty(i)||ye(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":N=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==h&&ye(e,t,n,i,l,h)}t=s,a=u,l=A,N!=null?ll(e,!!a,N,!1):!!l!=!!a&&(t!=null?ll(e,!!a,t,!0):ll(e,!!a,a?[]:"",!1));return;case"textarea":A=N=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ye(e,t,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":N=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&ye(e,t,u,n,l,i)}dc(e,N,A);return;case"option":for(var B in a)N=a[B],a.hasOwnProperty(B)&&N!=null&&!l.hasOwnProperty(B)&&(B==="selected"?e.selected=!1:ye(e,t,B,null,l,N));for(h in l)N=l[h],A=a[h],l.hasOwnProperty(h)&&N!==A&&(N!=null||A!=null)&&(h==="selected"?e.selected=N&&typeof N!="function"&&typeof N!="symbol":ye(e,t,h,N,l,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)N=a[Z],a.hasOwnProperty(Z)&&N!=null&&!l.hasOwnProperty(Z)&&ye(e,t,Z,null,l,N);for(z in l)if(N=l[z],A=a[z],l.hasOwnProperty(z)&&N!==A&&(N!=null||A!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:ye(e,t,z,N,l,A)}return;default:if(jr(t)){for(var ve in a)N=a[ve],a.hasOwnProperty(ve)&&N!==void 0&&!l.hasOwnProperty(ve)&&cu(e,t,ve,void 0,l,N);for(R in l)N=l[R],A=a[R],!l.hasOwnProperty(R)||N===A||N===void 0&&A===void 0||cu(e,t,R,N,l,A);return}}for(var S in a)N=a[S],a.hasOwnProperty(S)&&N!=null&&!l.hasOwnProperty(S)&&ye(e,t,S,null,l,N);for(_ in l)N=l[_],A=a[_],!l.hasOwnProperty(_)||N===A||N==null&&A==null||ye(e,t,_,N,l,A)}function yd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&yd(u)){for(u=0,s=n.responseEnd,l+=1;l<a.length;l++){var h=a[l],z=h.startTime;if(z>s)break;var R=h.transferSize,_=h.initiatorType;R&&yd(_)&&(h=h.responseEnd,u+=R*(h<s?1:(s-z)/(h-z)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var su=null,fu=null;function ki(e){return e.nodeType===9?e:e.ownerDocument}function vd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function du(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=null;function Np(){var e=window.event;return e&&e.type==="popstate"?e===mu?!1:(mu=e,!0):(mu=null,!1)}var bd=typeof setTimeout=="function"?setTimeout:void 0,Tp=typeof clearTimeout=="function"?clearTimeout:void 0,Sd=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof Sd<"u"?function(e){return Sd.resolve(null).then(e).catch(Rp)}:bd;function Rp(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function jd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ul(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")zn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Gl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&zn(e.ownerDocument.body);a=n}while(a);Ul(t)}function Ed(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function hu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hu(a),vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Dp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function Cp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wt(e.nextSibling),e===null))return null;return e}function zd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wt(e.nextSibling),e===null))return null;return e}function pu(e){return e.data==="$?"||e.data==="$~"}function gu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var yu=null;function wd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return wt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Td(e,t,a){switch(t=ki(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function zn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vr(e)}var Nt=new Map,Ad=new Set;function Xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=L.d;L.d={f:_p,r:Op,D:Up,C:Hp,L:Lp,m:qp,X:Yp,S:Bp,M:Gp};function _p(){var e=na.f(),t=Oi();return e||t}function Op(e){var t=el(e);t!==null&&t.tag===5&&t.type==="form"?Qs(t):na.r(e)}var Ml=typeof document>"u"?null:document;function Rd(e,t,a){var l=Ml;if(l&&typeof t=="string"&&t){var n=vt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Ad.has(n)||(Ad.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ze(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Up(e){na.D(e),Rd("dns-prefetch",e,null)}function Hp(e,t){na.C(e,t),Rd("preconnect",e,t)}function Lp(e,t,a){na.L(e,t,a);var l=Ml;if(l&&e&&t){var n='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+vt(a.imageSizes)+'"]')):n+='[href="'+vt(e)+'"]';var i=n;switch(t){case"style":i=_l(e);break;case"script":i=Ol(e)}Nt.has(i)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Nt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(wn(i))||t==="script"&&l.querySelector(Nn(i))||(t=l.createElement("link"),Ze(t,"link",e),Ye(t),l.head.appendChild(t)))}}function qp(e,t){na.m(e,t);var a=Ml;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ol(e)}if(!Nt.has(i)&&(e=j({rel:"modulepreload",href:e},t),Nt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nn(i)))return}l=a.createElement("link"),Ze(l,"link",e),Ye(l),a.head.appendChild(l)}}}function Bp(e,t,a){na.S(e,t,a);var l=Ml;if(l&&e){var n=tl(l).hoistableStyles,i=_l(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(wn(i)))s.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Nt.get(i))&&vu(e,a);var h=u=l.createElement("link");Ye(h),Ze(h,"link",e),h._p=new Promise(function(z,R){h.onload=z,h.onerror=R}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Qi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function Yp(e,t){na.X(e,t);var a=Ml;if(a&&e){var l=tl(a).hoistableScripts,n=Ol(e),i=l.get(n);i||(i=a.querySelector(Nn(n)),i||(e=j({src:e,async:!0},t),(t=Nt.get(n))&&xu(e,t),i=a.createElement("script"),Ye(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Gp(e,t){na.M(e,t);var a=Ml;if(a&&e){var l=tl(a).hoistableScripts,n=Ol(e),i=l.get(n);i||(i=a.querySelector(Nn(n)),i||(e=j({src:e,async:!0,type:"module"},t),(t=Nt.get(n))&&xu(e,t),i=a.createElement("script"),Ye(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Dd(e,t,a,l){var n=(n=ae.current)?Xi(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=_l(a.href),a=tl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_l(a.href);var i=tl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(wn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Nt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Nt.set(e,a),i||kp(n,e,a,u.state))),t&&l===null)throw Error(c(528,""));return u}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ol(a),a=tl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function _l(e){return'href="'+vt(e)+'"'}function wn(e){return'link[rel="stylesheet"]['+e+"]"}function Cd(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function kp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ze(t,"link",a),Ye(t),e.head.appendChild(t))}function Ol(e){return'[src="'+vt(e)+'"]'}function Nn(e){return"script[async]"+e}function Md(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+vt(a.href)+'"]');if(l)return t.instance=l,Ye(l),l;var n=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ye(l),Ze(l,"style",n),Qi(l,a.precedence,e),t.instance=l;case"stylesheet":n=_l(a.href);var i=e.querySelector(wn(n));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;l=Cd(a),(n=Nt.get(n))&&vu(l,n),i=(e.ownerDocument||e).createElement("link"),Ye(i);var u=i;return u._p=new Promise(function(s,h){u.onload=s,u.onerror=h}),Ze(i,"link",l),t.state.loading|=4,Qi(i,a.precedence,e),t.instance=i;case"script":return i=Ol(a.src),(n=e.querySelector(Nn(i)))?(t.instance=n,Ye(n),n):(l=a,(n=Nt.get(i))&&(l=j({},a),xu(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ye(n),Ze(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Qi(l,a.precedence,e));return t.instance}function Qi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function vu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vi=null;function _d(e,t,a){if(Vi===null){var l=new Map,n=Vi=new Map;n.set(a,l)}else n=Vi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Gl]||i[ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function Od(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Xp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ud(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=_l(l.href),i=t.querySelector(wn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ye(i);return}i=t.ownerDocument||t,l=Cd(l),(n=Nt.get(n))&&vu(l,n),i=i.createElement("link"),Ye(i);var u=i;u._p=new Promise(function(s,h){u.onload=s,u.onerror=h}),Ze(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var bu=0;function Vp(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&bu===0&&(bu=62500*wp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>bu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Zi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(Zp,e),Ki=null,Zi.call(e))}function Zp(e,t){if(!(t.state.loading&4)){var a=Ki.get(e);if(a)var l=a.get(null);else{a=new Map,Ki.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Zi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Tn={$$typeof:J,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Kp(e,t,a,l,n,i,u,s,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hr(0),this.hiddenUpdates=hr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Hd(e,t,a,l,n,i,u,s,h,z,R,_){return e=new Kp(e,t,a,u,h,z,R,_,s),t=1,i===!0&&(t|=24),i=ct(3,null,null,t),e.current=i,i.stateNode=e,t=Ir(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ao(i),e}function Ld(e){return e?(e=fl,e):fl}function qd(e,t,a,l,n,i){n=Ld(n),l.context===null?l.context=n:l.pendingContext=n,l=pa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ga(e,l,t),a!==null&&(nt(a,e,t),nn(a,e,t))}function Bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Su(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function Yd(e){if(e.tag===13||e.tag===31){var t=qa(e,67108864);t!==null&&nt(t,e,67108864),Su(e,67108864)}}function Gd(e){if(e.tag===13||e.tag===31){var t=ht();t=pr(t);var a=qa(e,t);a!==null&&nt(a,e,t),Su(e,t)}}var Fi=!0;function Jp(e,t,a,l){var n=D.T;D.T=null;var i=L.p;try{L.p=2,ju(e,t,a,l)}finally{L.p=i,D.T=n}}function Fp(e,t,a,l){var n=D.T;D.T=null;var i=L.p;try{L.p=8,ju(e,t,a,l)}finally{L.p=i,D.T=n}}function ju(e,t,a,l){if(Fi){var n=Eu(l);if(n===null)uu(e,t,l,Wi,a),Xd(e,l);else if($p(n,e,t,a,l))l.stopPropagation();else if(Xd(e,l),t&4&&-1<Wp.indexOf(e)){for(;n!==null;){var i=el(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=_a(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var h=1<<31-ot(u);s.entanglements[1]|=h,u&=~h}qt(i),(fe&6)===0&&(Mi=it()+500,Sn(0))}}break;case 31:case 13:s=qa(i,2),s!==null&&nt(s,i,2),Oi(),Su(i,2)}if(i=Eu(l),i===null&&uu(e,t,l,Wi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else uu(e,t,l,null,a)}}function Eu(e){return e=zr(e),zu(e)}var Wi=null;function zu(e){if(Wi=null,e=Pa(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wi=e,null}function kd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Um()){case Fu:return 2;case Wu:return 8;case Bn:case Hm:return 32;case $u:return 268435456;default:return 32}default:return 32}}var wu=!1,Ta=null,Aa=null,Ra=null,An=new Map,Rn=new Map,Da=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xd(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function Dn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=el(t),t!==null&&Yd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function $p(e,t,a,l,n){switch(t){case"focusin":return Ta=Dn(Ta,e,t,a,l,n),!0;case"dragenter":return Aa=Dn(Aa,e,t,a,l,n),!0;case"mouseover":return Ra=Dn(Ra,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return An.set(i,Dn(An.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Rn.set(i,Dn(Rn.get(i)||null,e,t,a,l,n)),!0}return!1}function Qd(e){var t=Pa(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,lc(e.priority,function(){Gd(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,lc(e.priority,function(){Gd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Eu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Er=l,a.target.dispatchEvent(l),Er=null}else return t=el(a),t!==null&&Yd(t),e.blockedOn=a,!1;t.shift()}return!0}function Vd(e,t,a){$i(e)&&a.delete(t)}function Ip(){wu=!1,Ta!==null&&$i(Ta)&&(Ta=null),Aa!==null&&$i(Aa)&&(Aa=null),Ra!==null&&$i(Ra)&&(Ra=null),An.forEach(Vd),Rn.forEach(Vd)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,wu||(wu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ip)))}var Pi=null;function Zd(e){Pi!==e&&(Pi=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(zu(l||a)===null)continue;break}var i=el(a);i!==null&&(e.splice(t,3),t-=3,Eo(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ul(e){function t(h){return Ii(h,e)}Ta!==null&&Ii(Ta,e),Aa!==null&&Ii(Aa,e),Ra!==null&&Ii(Ra,e),An.forEach(t),Rn.forEach(t);for(var a=0;a<Da.length;a++){var l=Da[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)Qd(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Ie]||null;if(typeof i=="function")u||Zd(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Ie]||null)s=u.formAction;else if(zu(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Zd(a)}}}function Kd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Nu(e){this._internalRoot=e}er.prototype.render=Nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=ht();qd(a,l,e,t,null,null)},er.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qd(e.current,2,null,e,null,null),Oi(),t[Ia]=null}};function er(e){this._internalRoot=e}er.prototype.unstable_scheduleHydration=function(e){if(e){var t=ac();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Da.length&&t!==0&&t<Da[a].priority;a++);Da.splice(a,0,e),a===0&&Qd(e)}};var Jd=f.version;if(Jd!=="19.2.5")throw Error(c(527,Jd,"19.2.5"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var Pp={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tr.isDisabled&&tr.supportsFiber)try{ql=tr.inject(Pp),rt=tr}catch{}}return Mn.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,l="",n=ef,i=tf,u=af;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Hd(e,1,!1,null,null,a,l,null,n,i,u,Kd),e[Ia]=t.current,ou(e),new Nu(t)},Mn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var l=!1,n="",i=ef,u=tf,s=af,h=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(h=a.formState)),t=Hd(e,1,!0,t,a??null,l,n,h,i,u,s,Kd),t.context=Ld(null),a=t.current,l=ht(),l=pr(l),n=pa(l),n.callback=null,ga(a,n,l),a=l,t.current.lanes=a,Yl(t,a),qt(t),e[Ia]=t.current,ou(e),new er(t)},Mn.version="19.2.5",Mn}var nm;function cg(){if(nm)return Au.exports;nm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),Au.exports=ug(),Au.exports}var sg=cg(),w=qu();var im="popstate";function rm(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function fg(o={}){function f(m,p){let{pathname:g="/",search:T="",hash:b=""}=$a(m.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Hu("",{pathname:g,search:T,hash:b},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(m,p){let g=m.document.querySelector("base"),T="";if(g&&g.getAttribute("href")){let b=m.location.href,v=b.indexOf("#");T=v===-1?b:b.slice(0,v)}return T+"#"+(typeof p=="string"?p:On(p))}function c(m,p){Mt(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return mg(f,d,c,o)}function Te(o,f){if(o===!1||o===null||typeof o>"u")throw new Error(f)}function Mt(o,f){if(!o){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function dg(){return Math.random().toString(36).substring(2,10)}function om(o,f){return{usr:o.state,key:o.key,idx:f,masked:o.unstable_mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function Hu(o,f,d=null,c,m){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof f=="string"?$a(f):f,state:d,key:f&&f.key||c||dg(),unstable_mask:m}}function On({pathname:o="/",search:f="",hash:d=""}){return f&&f!=="?"&&(o+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(o+=d.charAt(0)==="#"?d:"#"+d),o}function $a(o){let f={};if(o){let d=o.indexOf("#");d>=0&&(f.hash=o.substring(d),o=o.substring(0,d));let c=o.indexOf("?");c>=0&&(f.search=o.substring(c),o=o.substring(0,c)),o&&(f.pathname=o)}return f}function mg(o,f,d,c={}){let{window:m=document.defaultView,v5Compat:p=!1}=c,g=m.history,T="POP",b=null,v=C();v==null&&(v=0,g.replaceState({...g.state,idx:v},""));function C(){return(g.state||{idx:null}).idx}function j(){T="POP";let H=C(),K=H==null?null:H-v;v=H,b&&b({action:T,location:Y.location,delta:K})}function U(H,K){T="PUSH";let I=rm(H)?H:Hu(Y.location,H,K);d&&d(I,H),v=C()+1;let J=om(I,v),xe=Y.createHref(I.unstable_mask||I);try{g.pushState(J,"",xe)}catch(be){if(be instanceof DOMException&&be.name==="DataCloneError")throw be;m.location.assign(xe)}p&&b&&b({action:T,location:Y.location,delta:1})}function X(H,K){T="REPLACE";let I=rm(H)?H:Hu(Y.location,H,K);d&&d(I,H),v=C();let J=om(I,v),xe=Y.createHref(I.unstable_mask||I);g.replaceState(J,"",xe),p&&b&&b({action:T,location:Y.location,delta:0})}function Q(H){return hg(H)}let Y={get action(){return T},get location(){return o(m,g)},listen(H){if(b)throw new Error("A history only accepts one active listener");return m.addEventListener(im,j),b=H,()=>{m.removeEventListener(im,j),b=null}},createHref(H){return f(m,H)},createURL:Q,encodeLocation(H){let K=Q(H);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:U,replace:X,go(H){return g.go(H)}};return Y}function hg(o,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Te(d,"No window.location.(origin|href) available to create URL");let c=typeof o=="string"?o:On(o);return c=c.replace(/ $/,"%20"),!f&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function mm(o,f,d="/"){return pg(o,f,d,!1)}function pg(o,f,d,c){let m=typeof f=="string"?$a(f):f,p=ia(m.pathname||"/",d);if(p==null)return null;let g=hm(o);gg(g);let T=null;for(let b=0;T==null&&b<g.length;++b){let v=Tg(p);T=wg(g[b],v,c)}return T}function hm(o,f=[],d=[],c="",m=!1){let p=(g,T,b=m,v)=>{let C={relativePath:v===void 0?g.path||"":v,caseSensitive:g.caseSensitive===!0,childrenIndex:T,route:g};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(c)&&b)return;Te(C.relativePath.startsWith(c),`Absolute route path "${C.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(c.length)}let j=Bt([c,C.relativePath]),U=d.concat(C);g.children&&g.children.length>0&&(Te(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),hm(g.children,f,U,j,b)),!(g.path==null&&!g.index)&&f.push({path:j,score:Eg(j,g.index),routesMeta:U})};return o.forEach((g,T)=>{if(g.path===""||!g.path?.includes("?"))p(g,T);else for(let b of pm(g.path))p(g,T,!0,b)}),f}function pm(o){let f=o.split("/");if(f.length===0)return[];let[d,...c]=f,m=d.endsWith("?"),p=d.replace(/\?$/,"");if(c.length===0)return m?[p,""]:[p];let g=pm(c.join("/")),T=[];return T.push(...g.map(b=>b===""?p:[p,b].join("/"))),m&&T.push(...g),T.map(b=>o.startsWith("/")&&b===""?"/":b)}function gg(o){o.sort((f,d)=>f.score!==d.score?d.score-f.score:zg(f.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var yg=/^:[\w-]+$/,vg=3,xg=2,bg=1,Sg=10,jg=-2,um=o=>o==="*";function Eg(o,f){let d=o.split("/"),c=d.length;return d.some(um)&&(c+=jg),f&&(c+=xg),d.filter(m=>!um(m)).reduce((m,p)=>m+(yg.test(p)?vg:p===""?bg:Sg),c)}function zg(o,f){return o.length===f.length&&o.slice(0,-1).every((c,m)=>c===f[m])?o[o.length-1]-f[f.length-1]:0}function wg(o,f,d=!1){let{routesMeta:c}=o,m={},p="/",g=[];for(let T=0;T<c.length;++T){let b=c[T],v=T===c.length-1,C=p==="/"?f:f.slice(p.length)||"/",j=ir({path:b.relativePath,caseSensitive:b.caseSensitive,end:v},C),U=b.route;if(!j&&v&&d&&!c[c.length-1].route.index&&(j=ir({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},C)),!j)return null;Object.assign(m,j.params),g.push({params:m,pathname:Bt([p,j.pathname]),pathnameBase:Cg(Bt([p,j.pathnameBase])),route:U}),j.pathnameBase!=="/"&&(p=Bt([p,j.pathnameBase]))}return g}function ir(o,f){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[d,c]=Ng(o.path,o.caseSensitive,o.end),m=f.match(d);if(!m)return null;let p=m[0],g=p.replace(/(.)\/+$/,"$1"),T=m.slice(1);return{params:c.reduce((v,{paramName:C,isOptional:j},U)=>{if(C==="*"){let Q=T[U]||"";g=p.slice(0,p.length-Q.length).replace(/(.)\/+$/,"$1")}const X=T[U];return j&&!X?v[C]=void 0:v[C]=(X||"").replace(/%2F/g,"/"),v},{}),pathname:p,pathnameBase:g,pattern:o}}function Ng(o,f=!1,d=!0){Mt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let c=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,T,b,v,C)=>{if(c.push({paramName:T,isOptional:b!=null}),b){let j=C.charAt(v+g.length);return j&&j!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(c.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),c]}function Tg(o){try{return o.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Mt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),o}}function ia(o,f){if(f==="/")return o;if(!o.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,c=o.charAt(d);return c&&c!=="/"?null:o.slice(d)||"/"}var Ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Rg(o,f="/"){let{pathname:d,search:c="",hash:m=""}=typeof o=="string"?$a(o):o,p;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?p=cm(d.substring(1),"/"):p=cm(d,f)):p=f,{pathname:p,search:Mg(c),hash:_g(m)}}function cm(o,f){let d=f.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function _u(o,f,d,c){return`Cannot include a '${o}' character in a manually specified \`to.${f}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Dg(o){return o.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function gm(o){let f=Dg(o);return f.map((d,c)=>c===f.length-1?d.pathname:d.pathnameBase)}function Bu(o,f,d,c=!1){let m;typeof o=="string"?m=$a(o):(m={...o},Te(!m.pathname||!m.pathname.includes("?"),_u("?","pathname","search",m)),Te(!m.pathname||!m.pathname.includes("#"),_u("#","pathname","hash",m)),Te(!m.search||!m.search.includes("#"),_u("#","search","hash",m)));let p=o===""||m.pathname==="",g=p?"/":m.pathname,T;if(g==null)T=d;else{let j=f.length-1;if(!c&&g.startsWith("..")){let U=g.split("/");for(;U[0]==="..";)U.shift(),j-=1;m.pathname=U.join("/")}T=j>=0?f[j]:"/"}let b=Rg(m,T),v=g&&g!=="/"&&g.endsWith("/"),C=(p||g===".")&&d.endsWith("/");return!b.pathname.endsWith("/")&&(v||C)&&(b.pathname+="/"),b}var Bt=o=>o.join("/").replace(/\/\/+/g,"/"),Cg=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Mg=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,_g=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,Og=class{constructor(o,f,d,c=!1){this.status=o,this.statusText=f||"",this.internal=c,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function Ug(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Hg(o){return o.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function vm(o,f){let d=o;if(typeof d!="string"||!Ag.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let c=d,m=!1;if(ym)try{let p=new URL(window.location.href),g=d.startsWith("//")?new URL(p.protocol+d):new URL(d),T=ia(g.pathname,f);g.origin===p.origin&&T!=null?d=T+g.search+g.hash:m=!0}catch{Mt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:m,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var xm=["POST","PUT","PATCH","DELETE"];new Set(xm);var Lg=["GET",...xm];new Set(Lg);var Hl=w.createContext(null);Hl.displayName="DataRouter";var rr=w.createContext(null);rr.displayName="DataRouterState";var bm=w.createContext(!1);function qg(){return w.useContext(bm)}var Sm=w.createContext({isTransitioning:!1});Sm.displayName="ViewTransition";var Bg=w.createContext(new Map);Bg.displayName="Fetchers";var Yg=w.createContext(null);Yg.displayName="Await";var At=w.createContext(null);At.displayName="Navigation";var Un=w.createContext(null);Un.displayName="Location";var ra=w.createContext({outlet:null,matches:[],isDataRoute:!1});ra.displayName="Route";var Yu=w.createContext(null);Yu.displayName="RouteError";var jm="REACT_ROUTER_ERROR",Gg="REDIRECT",kg="ROUTE_ERROR_RESPONSE";function Xg(o){if(o.startsWith(`${jm}:${Gg}:{`))try{let f=JSON.parse(o.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function Qg(o){if(o.startsWith(`${jm}:${kg}:{`))try{let f=JSON.parse(o.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new Og(f.status,f.statusText,f.data)}catch{}}function Vg(o,{relative:f}={}){Te(Hn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=w.useContext(At),{hash:m,pathname:p,search:g}=Ln(o,{relative:f}),T=p;return d!=="/"&&(T=p==="/"?d:Bt([d,p])),c.createHref({pathname:T,search:g,hash:m})}function Hn(){return w.useContext(Un)!=null}function Yt(){return Te(Hn(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Un).location}var Em="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zm(o){w.useContext(At).static||w.useLayoutEffect(o)}function Zg(){let{isDataRoute:o}=w.useContext(ra);return o?iy():Kg()}function Kg(){Te(Hn(),"useNavigate() may be used only in the context of a <Router> component.");let o=w.useContext(Hl),{basename:f,navigator:d}=w.useContext(At),{matches:c}=w.useContext(ra),{pathname:m}=Yt(),p=JSON.stringify(gm(c)),g=w.useRef(!1);return zm(()=>{g.current=!0}),w.useCallback((b,v={})=>{if(Mt(g.current,Em),!g.current)return;if(typeof b=="number"){d.go(b);return}let C=Bu(b,JSON.parse(p),m,v.relative==="path");o==null&&f!=="/"&&(C.pathname=C.pathname==="/"?f:Bt([f,C.pathname])),(v.replace?d.replace:d.push)(C,v.state,v)},[f,d,p,m,o])}w.createContext(null);function Ln(o,{relative:f}={}){let{matches:d}=w.useContext(ra),{pathname:c}=Yt(),m=JSON.stringify(gm(d));return w.useMemo(()=>Bu(o,JSON.parse(m),c,f==="path"),[o,m,c,f])}function Jg(o,f){return wm(o,f)}function wm(o,f,d){Te(Hn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=w.useContext(At),{matches:m}=w.useContext(ra),p=m[m.length-1],g=p?p.params:{},T=p?p.pathname:"/",b=p?p.pathnameBase:"/",v=p&&p.route;{let H=v&&v.path||"";Tm(T,!v||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${T}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let C=Yt(),j;if(f){let H=typeof f=="string"?$a(f):f;Te(b==="/"||H.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`),j=H}else j=C;let U=j.pathname||"/",X=U;if(b!=="/"){let H=b.replace(/^\//,"").split("/");X="/"+U.replace(/^\//,"").split("/").slice(H.length).join("/")}let Q=mm(o,{pathname:X});Mt(v||Q!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),Mt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=Pg(Q&&Q.map(H=>Object.assign({},H,{params:Object.assign({},g,H.params),pathname:Bt([b,c.encodeLocation?c.encodeLocation(H.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?b:Bt([b,c.encodeLocation?c.encodeLocation(H.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),m,d);return f&&Y?w.createElement(Un.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...j},navigationType:"POP"}},Y):Y}function Fg(){let o=ny(),f=Ug(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),d=o instanceof Error?o.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",o),g=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:p},"ErrorBoundary")," or"," ",w.createElement("code",{style:p},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},f),d?w.createElement("pre",{style:m},d):null,g)}var Wg=w.createElement(Fg,null),Nm=class extends w.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,f){return f.location!==o.location||f.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:f.error,location:f.location,revalidation:o.revalidation||f.revalidation}}componentDidCatch(o,f){this.props.onError?this.props.onError(o,f):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const d=Qg(o.digest);d&&(o=d)}let f=o!==void 0?w.createElement(ra.Provider,{value:this.props.routeContext},w.createElement(Yu.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?w.createElement($g,{error:o},f):f}};Nm.contextType=bm;var Ou=new WeakMap;function $g({children:o,error:f}){let{basename:d}=w.useContext(At);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let c=Xg(f.digest);if(c){let m=Ou.get(f);if(m)throw m;let p=vm(c.location,d);if(ym&&!Ou.get(f))if(p.isExternal||c.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Ou.set(f,g),g}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return o}function Ig({routeContext:o,match:f,children:d}){let c=w.useContext(Hl);return c&&c.static&&c.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=f.route.id),w.createElement(ra.Provider,{value:o},d)}function Pg(o,f=[],d){let c=d?.state;if(o==null){if(!c)return null;if(c.errors)o=c.matches;else if(f.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let m=o,p=c?.errors;if(p!=null){let C=m.findIndex(j=>j.route.id&&p?.[j.route.id]!==void 0);Te(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,C+1))}let g=!1,T=-1;if(d&&c){g=c.renderFallback;for(let C=0;C<m.length;C++){let j=m[C];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(T=C),j.route.id){let{loaderData:U,errors:X}=c,Q=j.route.loader&&!U.hasOwnProperty(j.route.id)&&(!X||X[j.route.id]===void 0);if(j.route.lazy||Q){d.isStatic&&(g=!0),T>=0?m=m.slice(0,T+1):m=[m[0]];break}}}}let b=d?.onError,v=c&&b?(C,j)=>{b(C,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:Hg(c.matches),errorInfo:j})}:void 0;return m.reduceRight((C,j,U)=>{let X,Q=!1,Y=null,H=null;c&&(X=p&&j.route.id?p[j.route.id]:void 0,Y=j.route.errorElement||Wg,g&&(T<0&&U===0?(Tm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,H=null):T===U&&(Q=!0,H=j.route.hydrateFallbackElement||null)));let K=f.concat(m.slice(0,U+1)),I=()=>{let J;return X?J=Y:Q?J=H:j.route.Component?J=w.createElement(j.route.Component,null):j.route.element?J=j.route.element:J=C,w.createElement(Ig,{match:j,routeContext:{outlet:C,matches:K,isDataRoute:c!=null},children:J})};return c&&(j.route.ErrorBoundary||j.route.errorElement||U===0)?w.createElement(Nm,{location:c.location,revalidation:c.revalidation,component:Y,error:X,children:I(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:v}):I()},null)}function Gu(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ey(o){let f=w.useContext(Hl);return Te(f,Gu(o)),f}function ty(o){let f=w.useContext(rr);return Te(f,Gu(o)),f}function ay(o){let f=w.useContext(ra);return Te(f,Gu(o)),f}function ku(o){let f=ay(o),d=f.matches[f.matches.length-1];return Te(d.route.id,`${o} can only be used on routes that contain a unique "id"`),d.route.id}function ly(){return ku("useRouteId")}function ny(){let o=w.useContext(Yu),f=ty("useRouteError"),d=ku("useRouteError");return o!==void 0?o:f.errors?.[d]}function iy(){let{router:o}=ey("useNavigate"),f=ku("useNavigate"),d=w.useRef(!1);return zm(()=>{d.current=!0}),w.useCallback(async(m,p={})=>{Mt(d.current,Em),d.current&&(typeof m=="number"?await o.navigate(m):await o.navigate(m,{fromRouteId:f,...p}))},[o,f])}var sm={};function Tm(o,f,d){!f&&!sm[o]&&(sm[o]=!0,Mt(!1,d))}w.memo(ry);function ry({routes:o,future:f,state:d,isStatic:c,onError:m}){return wm(o,void 0,{state:d,isStatic:c,onError:m})}function Tt(o){Te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function oy({basename:o="/",children:f=null,location:d,navigationType:c="POP",navigator:m,static:p=!1,unstable_useTransitions:g}){Te(!Hn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=o.replace(/^\/*/,"/"),b=w.useMemo(()=>({basename:T,navigator:m,static:p,unstable_useTransitions:g,future:{}}),[T,m,p,g]);typeof d=="string"&&(d=$a(d));let{pathname:v="/",search:C="",hash:j="",state:U=null,key:X="default",unstable_mask:Q}=d,Y=w.useMemo(()=>{let H=ia(v,T);return H==null?null:{location:{pathname:H,search:C,hash:j,state:U,key:X,unstable_mask:Q},navigationType:c}},[T,v,C,j,U,X,c,Q]);return Mt(Y!=null,`<Router basename="${T}"> is not able to match the URL "${v}${C}${j}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:w.createElement(At.Provider,{value:b},w.createElement(Un.Provider,{children:f,value:Y}))}function uy({children:o,location:f}){return Jg(Lu(o),f)}function Lu(o,f=[]){let d=[];return w.Children.forEach(o,(c,m)=>{if(!w.isValidElement(c))return;let p=[...f,m];if(c.type===w.Fragment){d.push.apply(d,Lu(c.props.children,p));return}Te(c.type===Tt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Te(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=Lu(c.props.children,p)),d.push(g)}),d}var lr="get",nr="application/x-www-form-urlencoded";function or(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function cy(o){return or(o)&&o.tagName.toLowerCase()==="button"}function sy(o){return or(o)&&o.tagName.toLowerCase()==="form"}function fy(o){return or(o)&&o.tagName.toLowerCase()==="input"}function dy(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function my(o,f){return o.button===0&&(!f||f==="_self")&&!dy(o)}var ar=null;function hy(){if(ar===null)try{new FormData(document.createElement("form"),0),ar=!1}catch{ar=!0}return ar}var py=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uu(o){return o!=null&&!py.has(o)?(Mt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nr}"`),null):o}function gy(o,f){let d,c,m,p,g;if(sy(o)){let T=o.getAttribute("action");c=T?ia(T,f):null,d=o.getAttribute("method")||lr,m=Uu(o.getAttribute("enctype"))||nr,p=new FormData(o)}else if(cy(o)||fy(o)&&(o.type==="submit"||o.type==="image")){let T=o.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=o.getAttribute("formaction")||T.getAttribute("action");if(c=b?ia(b,f):null,d=o.getAttribute("formmethod")||T.getAttribute("method")||lr,m=Uu(o.getAttribute("formenctype"))||Uu(T.getAttribute("enctype"))||nr,p=new FormData(T,o),!hy()){let{name:v,type:C,value:j}=o;if(C==="image"){let U=v?`${v}.`:"";p.append(`${U}x`,"0"),p.append(`${U}y`,"0")}else v&&p.append(v,j)}}else{if(or(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=lr,c=null,m=nr,g=o}return p&&m==="text/plain"&&(g=p,p=void 0),{action:c,method:d.toLowerCase(),encType:m,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xu(o,f){if(o===!1||o===null||typeof o>"u")throw new Error(f)}function Am(o,f,d,c){let m=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return d?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${c}`:m.pathname=`${m.pathname}.${c}`:m.pathname==="/"?m.pathname=`_root.${c}`:f&&ia(m.pathname,f)==="/"?m.pathname=`${f.replace(/\/$/,"")}/_root.${c}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${c}`,m}async function yy(o,f){if(o.id in f)return f[o.id];try{let d=await import(o.module);return f[o.id]=d,d}catch(d){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vy(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function xy(o,f,d){let c=await Promise.all(o.map(async m=>{let p=f.routes[m.route.id];if(p){let g=await yy(p,d);return g.links?g.links():[]}return[]}));return Ey(c.flat(1).filter(vy).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function fm(o,f,d,c,m,p){let g=(b,v)=>d[v]?b.route.id!==d[v].route.id:!0,T=(b,v)=>d[v].pathname!==b.pathname||d[v].route.path?.endsWith("*")&&d[v].params["*"]!==b.params["*"];return p==="assets"?f.filter((b,v)=>g(b,v)||T(b,v)):p==="data"?f.filter((b,v)=>{let C=c.routes[b.route.id];if(!C||!C.hasLoader)return!1;if(g(b,v)||T(b,v))return!0;if(b.route.shouldRevalidate){let j=b.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function by(o,f,{includeHydrateFallback:d}={}){return Sy(o.map(c=>{let m=f.routes[c.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function Sy(o){return[...new Set(o)]}function jy(o){let f={},d=Object.keys(o).sort();for(let c of d)f[c]=o[c];return f}function Ey(o,f){let d=new Set;return new Set(f),o.reduce((c,m)=>{let p=JSON.stringify(jy(m));return d.has(p)||(d.add(p),c.push({key:p,link:m})),c},[])}function Qu(){let o=w.useContext(Hl);return Xu(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function zy(){let o=w.useContext(rr);return Xu(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Vu=w.createContext(void 0);Vu.displayName="FrameworkContext";function Zu(){let o=w.useContext(Vu);return Xu(o,"You must render this element inside a <HydratedRouter> element"),o}function wy(o,f){let d=w.useContext(Vu),[c,m]=w.useState(!1),[p,g]=w.useState(!1),{onFocus:T,onBlur:b,onMouseEnter:v,onMouseLeave:C,onTouchStart:j}=f,U=w.useRef(null);w.useEffect(()=>{if(o==="render"&&g(!0),o==="viewport"){let Y=K=>{K.forEach(I=>{g(I.isIntersecting)})},H=new IntersectionObserver(Y,{threshold:.5});return U.current&&H.observe(U.current),()=>{H.disconnect()}}},[o]),w.useEffect(()=>{if(c){let Y=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(Y)}}},[c]);let X=()=>{m(!0)},Q=()=>{m(!1),g(!1)};return d?o!=="intent"?[p,U,{}]:[p,U,{onFocus:_n(T,X),onBlur:_n(b,Q),onMouseEnter:_n(v,X),onMouseLeave:_n(C,Q),onTouchStart:_n(j,X)}]:[!1,U,{}]}function _n(o,f){return d=>{o&&o(d),d.defaultPrevented||f(d)}}function Ny({page:o,...f}){let d=qg(),{router:c}=Qu(),m=w.useMemo(()=>mm(c.routes,o,c.basename),[c.routes,o,c.basename]);return m?d?w.createElement(Ay,{page:o,matches:m,...f}):w.createElement(Ry,{page:o,matches:m,...f}):null}function Ty(o){let{manifest:f,routeModules:d}=Zu(),[c,m]=w.useState([]);return w.useEffect(()=>{let p=!1;return xy(o,f,d).then(g=>{p||m(g)}),()=>{p=!0}},[o,f,d]),c}function Ay({page:o,matches:f,...d}){let c=Yt(),{future:m}=Zu(),{basename:p}=Qu(),g=w.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let T=Am(o,p,m.unstable_trailingSlashAwareDataRequests,"rsc"),b=!1,v=[];for(let C of f)typeof C.route.shouldRevalidate=="function"?b=!0:v.push(C.route.id);return b&&v.length>0&&T.searchParams.set("_routes",v.join(",")),[T.pathname+T.search]},[p,m.unstable_trailingSlashAwareDataRequests,o,c,f]);return w.createElement(w.Fragment,null,g.map(T=>w.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...d})))}function Ry({page:o,matches:f,...d}){let c=Yt(),{future:m,manifest:p,routeModules:g}=Zu(),{basename:T}=Qu(),{loaderData:b,matches:v}=zy(),C=w.useMemo(()=>fm(o,f,v,p,c,"data"),[o,f,v,p,c]),j=w.useMemo(()=>fm(o,f,v,p,c,"assets"),[o,f,v,p,c]),U=w.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let Y=new Set,H=!1;if(f.forEach(I=>{let J=p.routes[I.route.id];!J||!J.hasLoader||(!C.some(xe=>xe.route.id===I.route.id)&&I.route.id in b&&g[I.route.id]?.shouldRevalidate||J.hasClientLoader?H=!0:Y.add(I.route.id))}),Y.size===0)return[];let K=Am(o,T,m.unstable_trailingSlashAwareDataRequests,"data");return H&&Y.size>0&&K.searchParams.set("_routes",f.filter(I=>Y.has(I.route.id)).map(I=>I.route.id).join(",")),[K.pathname+K.search]},[T,m.unstable_trailingSlashAwareDataRequests,b,c,p,C,f,o,g]),X=w.useMemo(()=>by(j,p),[j,p]),Q=Ty(j);return w.createElement(w.Fragment,null,U.map(Y=>w.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...d})),X.map(Y=>w.createElement("link",{key:Y,rel:"modulepreload",href:Y,...d})),Q.map(({key:Y,link:H})=>w.createElement("link",{key:Y,nonce:d.nonce,...H,crossOrigin:H.crossOrigin??d.crossOrigin})))}function Dy(...o){return f=>{o.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var Cy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cy&&(window.__reactRouterVersion="7.14.0")}catch{}function My({basename:o,children:f,unstable_useTransitions:d,window:c}){let m=w.useRef();m.current==null&&(m.current=fg({window:c,v5Compat:!0}));let p=m.current,[g,T]=w.useState({action:p.action,location:p.location}),b=w.useCallback(v=>{d===!1?T(v):w.startTransition(()=>T(v))},[d]);return w.useLayoutEffect(()=>p.listen(b),[p,b]),w.createElement(oy,{basename:o,children:f,location:g.location,navigationType:g.action,navigator:p,unstable_useTransitions:d})}var Rm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ue=w.forwardRef(function({onClick:f,discover:d="render",prefetch:c="none",relative:m,reloadDocument:p,replace:g,unstable_mask:T,state:b,target:v,to:C,preventScrollReset:j,viewTransition:U,unstable_defaultShouldRevalidate:X,...Q},Y){let{basename:H,navigator:K,unstable_useTransitions:I}=w.useContext(At),J=typeof C=="string"&&Rm.test(C),xe=vm(C,H);C=xe.to;let be=Vg(C,{relative:m}),Ne=Yt(),W=null;if(T){let Oe=Bu(T,[],Ne.unstable_mask?Ne.unstable_mask.pathname:"/",!0);H!=="/"&&(Oe.pathname=Oe.pathname==="/"?H:Bt([H,Oe.pathname])),W=K.createHref(Oe)}let[De,Ke,_t]=wy(c,Q),pt=Hy(C,{replace:g,unstable_mask:T,state:b,target:v,preventScrollReset:j,relative:m,viewTransition:U,unstable_defaultShouldRevalidate:X,unstable_useTransitions:I});function Je(Oe){f&&f(Oe),Oe.defaultPrevented||pt(Oe)}let Ot=!(xe.isExternal||p),gt=w.createElement("a",{...Q,..._t,href:(Ot?W:void 0)||xe.absoluteURL||be,onClick:Ot?Je:f,ref:Dy(Y,Ke),target:v,"data-discover":!J&&d==="render"?"true":void 0});return De&&!J?w.createElement(w.Fragment,null,gt,w.createElement(Ny,{page:be})):gt});ue.displayName="Link";var _y=w.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:c="",end:m=!1,style:p,to:g,viewTransition:T,children:b,...v},C){let j=Ln(g,{relative:v.relative}),U=Yt(),X=w.useContext(rr),{navigator:Q,basename:Y}=w.useContext(At),H=X!=null&&Gy(j)&&T===!0,K=Q.encodeLocation?Q.encodeLocation(j).pathname:j.pathname,I=U.pathname,J=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;d||(I=I.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&Y&&(J=ia(J,Y)||J);const xe=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let be=I===K||!m&&I.startsWith(K)&&I.charAt(xe)==="/",Ne=J!=null&&(J===K||!m&&J.startsWith(K)&&J.charAt(K.length)==="/"),W={isActive:be,isPending:Ne,isTransitioning:H},De=be?f:void 0,Ke;typeof c=="function"?Ke=c(W):Ke=[c,be?"active":null,Ne?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let _t=typeof p=="function"?p(W):p;return w.createElement(ue,{...v,"aria-current":De,className:Ke,ref:C,style:_t,to:g,viewTransition:T},typeof b=="function"?b(W):b)});_y.displayName="NavLink";var Oy=w.forwardRef(({discover:o="render",fetcherKey:f,navigate:d,reloadDocument:c,replace:m,state:p,method:g=lr,action:T,onSubmit:b,relative:v,preventScrollReset:C,viewTransition:j,unstable_defaultShouldRevalidate:U,...X},Q)=>{let{unstable_useTransitions:Y}=w.useContext(At),H=By(),K=Yy(T,{relative:v}),I=g.toLowerCase()==="get"?"get":"post",J=typeof T=="string"&&Rm.test(T),xe=be=>{if(b&&b(be),be.defaultPrevented)return;be.preventDefault();let Ne=be.nativeEvent.submitter,W=Ne?.getAttribute("formmethod")||g,De=()=>H(Ne||be.currentTarget,{fetcherKey:f,method:W,navigate:d,replace:m,state:p,relative:v,preventScrollReset:C,viewTransition:j,unstable_defaultShouldRevalidate:U});Y&&d!==!1?w.startTransition(()=>De()):De()};return w.createElement("form",{ref:Q,method:I,action:K,onSubmit:c?b:xe,...X,"data-discover":!J&&o==="render"?"true":void 0})});Oy.displayName="Form";function Uy(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dm(o){let f=w.useContext(Hl);return Te(f,Uy(o)),f}function Hy(o,{target:f,replace:d,unstable_mask:c,state:m,preventScrollReset:p,relative:g,viewTransition:T,unstable_defaultShouldRevalidate:b,unstable_useTransitions:v}={}){let C=Zg(),j=Yt(),U=Ln(o,{relative:g});return w.useCallback(X=>{if(my(X,f)){X.preventDefault();let Q=d!==void 0?d:On(j)===On(U),Y=()=>C(o,{replace:Q,unstable_mask:c,state:m,preventScrollReset:p,relative:g,viewTransition:T,unstable_defaultShouldRevalidate:b});v?w.startTransition(()=>Y()):Y()}},[j,C,U,d,c,m,f,o,p,g,T,b,v])}var Ly=0,qy=()=>`__${String(++Ly)}__`;function By(){let{router:o}=Dm("useSubmit"),{basename:f}=w.useContext(At),d=ly(),c=o.fetch,m=o.navigate;return w.useCallback(async(p,g={})=>{let{action:T,method:b,encType:v,formData:C,body:j}=gy(p,f);if(g.navigate===!1){let U=g.fetcherKey||qy();await c(U,d,g.action||T,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:C,body:j,formMethod:g.method||b,formEncType:g.encType||v,flushSync:g.flushSync})}else await m(g.action||T,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:C,body:j,formMethod:g.method||b,formEncType:g.encType||v,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,m,f,d])}function Yy(o,{relative:f}={}){let{basename:d}=w.useContext(At),c=w.useContext(ra);Te(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),p={...Ln(o||".",{relative:f})},g=Yt();if(o==null){p.search=g.search;let T=new URLSearchParams(p.search),b=T.getAll("index");if(b.some(C=>C==="")){T.delete("index"),b.filter(j=>j).forEach(j=>T.append("index",j));let C=T.toString();p.search=C?`?${C}`:""}}return(!o||o===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Bt([d,p.pathname])),On(p)}function Gy(o,{relative:f}={}){let d=w.useContext(Sm);Te(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Dm("useViewTransitionState"),m=Ln(o,{relative:f});if(!d.isTransitioning)return!1;let p=ia(d.currentLocation.pathname,c)||d.currentLocation.pathname,g=ia(d.nextLocation.pathname,c)||d.nextLocation.pathname;return ir(m.pathname,g)!=null||ir(m.pathname,p)!=null}function ky(){const[o,f]=w.useState(!0);return w.useEffect(()=>{const d=setTimeout(()=>{f(!1)},500);return()=>clearTimeout(d)},[]),r.jsxs("div",{id:"loader",style:{opacity:o?1:0,transition:"opacity 0.5s ease",pointerEvents:o?"auto":"none"},children:[r.jsx("div",{className:"spinner"}),r.jsx("p",{className:"loader-text",children:"Loading..."})]})}function Cm(){const[o,f]=w.useState(null);w.useEffect(()=>{const m=localStorage.getItem("theme");if(m)f(m==="dark"),d(m);else{const p=window.matchMedia("(prefers-color-scheme: dark)").matches;f(p),d(p?"dark":"light")}},[]);const d=m=>{document.documentElement.classList.remove("light-theme","dark-theme"),m==="light"?document.documentElement.classList.add("light-theme"):document.documentElement.classList.add("dark-theme"),localStorage.setItem("theme",m)},c=()=>{const m=o?"light":"dark";f(!o),d(m)};return o===null?null:r.jsx("button",{onClick:c,title:o?"Switch to Light Mode":"Switch to Dark Mode",style:{background:"transparent",border:"none",color:"inherit",cursor:"pointer",fontSize:"1.2rem",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",width:"36px",height:"36px",transition:"all 0.2s ease"},onMouseEnter:m=>m.target.style.opacity="0.7",onMouseLeave:m=>m.target.style.opacity="1",children:o?r.jsx("i",{className:"fas fa-sun"}):r.jsx("i",{className:"fas fa-moon"})})}function Xy({open:o,onClose:f}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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

        `}),r.jsx("div",{className:`overlay ${o?"show":""}`,onClick:f}),r.jsx("div",{className:`theme-toggle-wrapper ${o?"show":""}`,children:r.jsx(Cm,{})}),r.jsxs("div",{className:`menu ${o?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Project"}),r.jsx(ue,{className:"link",to:"/about",onClick:f,children:"About"}),r.jsx(ue,{className:"link",to:"/features",onClick:f,children:"Features"}),r.jsx(ue,{className:"link",to:"/roadmap",onClick:f,children:"Roadmap"}),r.jsx("a",{className:"link",href:"https://docs.freedomloader.acnolo.fr/",onClick:f,children:"Documentation"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Explore"}),r.jsx(ue,{className:"link",to:"/faq",onClick:f,children:"FAQ"}),r.jsx(ue,{className:"link",to:"/contact",onClick:f,children:"Contact"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Workshop"}),r.jsx("a",{className:"link",href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{className:"link",href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Contribute"}),r.jsx("a",{className:"link",href:"https://github.com/MasterAcnolo/Freedom-Loader",children:"GitHub"}),r.jsx(ue,{className:"link",to:"/contributing",onClick:f,children:"Guide"})]}),r.jsx(ue,{to:"/download",className:"header-btn",onClick:f,children:"Download"})]})]})}function Qy(){const[o,f]=w.useState(null),[d,c]=w.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
        `}),r.jsxs("header",{className:"header",children:[r.jsx(ue,{to:"/",className:"logo",children:r.jsx("img",{src:"./assets/icon/Freedom_Loader.png",alt:"logo"})}),r.jsxs("nav",{className:"nav",children:[r.jsxs("div",{className:`item ${o==="project"?"open":""}`,onMouseEnter:()=>f("project"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Project ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx(ue,{to:"/about",children:"About"}),r.jsx(ue,{to:"/features",children:"Features"}),r.jsx(ue,{to:"/roadmap",children:"Roadmap"}),r.jsx("a",{href:"https://docs.freedomloader.acnolo.fr/",children:"Documentation"})]})]}),r.jsxs("div",{className:`item ${o==="explore"?"open":""}`,onMouseEnter:()=>f("explore"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Explore ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx(ue,{to:"/faq",children:"FAQ"}),r.jsx(ue,{to:"/contact",children:"Contact"})]})]}),r.jsxs("div",{className:`item ${o==="workshop"?"open":""}`,onMouseEnter:()=>f("workshop"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Workshop ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create Theme"})]})]}),r.jsxs("div",{className:`item ${o==="contribute"?"open":""}`,onMouseEnter:()=>f("contribute"),onMouseLeave:()=>f(null),children:[r.jsxs("div",{className:"trigger",children:["Contribute ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",children:"GitHub"}),r.jsx(ue,{to:"/contributing",children:"Guide"})]})]}),r.jsx(ue,{to:"/download",className:"header-btn",children:"Download"}),r.jsx(Cm,{})]}),r.jsxs("div",{className:`hamburger ${d?"open":""}`,onClick:()=>c(!d),children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]}),r.jsx(Xy,{open:d,onClose:()=>c(!1)})]})}function Vy(){const o=new Date().getFullYear();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsxs("footer",{children:[r.jsxs("div",{className:"footer-container",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx(ue,{to:"/",children:r.jsx("img",{src:"./assets/icon/Freedom_Loader.png",alt:"Freedom Loader"})}),r.jsx("p",{children:"Put Freedom in your Downloads."})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Site"}),r.jsx(ue,{to:"/",children:"Home"}),r.jsx(ue,{to:"/about",children:"About"}),r.jsx(ue,{to:"/features",children:"Features"}),r.jsx(ue,{to:"/roadmap",children:"Roadmap"}),r.jsx(ue,{to:"/download",children:"Download"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Workshop"}),r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create Theme"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Legal"}),r.jsx(ue,{to:"/contact",children:"Contact"}),r.jsx(ue,{to:"/privacy",children:"Privacy"}),r.jsx(ue,{to:"/terms",children:"Terms"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Community"}),r.jsx(ue,{to:"/faq",children:"FAQ"}),r.jsx("a",{href:"https://docs.freedomloader.acnolo.fr/",children:"Documentation"}),r.jsx(ue,{to:"/contributing",children:"Contributing"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",rel:"noopener noreferrer",children:"Discussions"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Follow Us"}),r.jsxs("div",{className:"footer-socials",children:[r.jsx("a",{href:"https://masteracnolo.github.io/",target:"_blank",rel:"noopener noreferrer",title:"Website",children:r.jsx("img",{src:"./assets/icon/globe-solid-full.svg",alt:"Website"})}),r.jsx("a",{href:"https://x.com/MasterAcnolo",target:"_blank",rel:"noopener noreferrer",title:"Twitter/X",children:r.jsx("img",{src:"./assets/icon/x-twitter-brands-solid-full.svg",alt:"Twitter/X"})}),r.jsx("a",{href:"https://github.com/MasterAcnolo",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:r.jsx("img",{src:"./assets/icon/github-brands-solid-full.svg",alt:"GitHub"})})]})]})]}),r.jsx("div",{className:"footer-bottom",children:r.jsxs("p",{children:["© ",o," Freedom Loader — All rights reserved."]})})]})]})}function Zy(){const{pathname:o}=Yt();return w.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[o]),null}const Ky=o=>1-Math.pow(1-o,2),dm=(o,f,d,c)=>{const[m,p]=w.useState(o);return w.useEffect(()=>{if(!c)return;let g=null;const T=b=>{g||(g=b);const v=b-g,C=Math.min(v/(d*1e3),1),j=Ky(C),U=Math.round(o+(f-o)*j);p(U),C<1&&requestAnimationFrame(T)};requestAnimationFrame(T)},[c,o,f,d]),m};function Jy(){const[o,f]=w.useState(!1),d=w.useRef(null),c=dm(0,100,2,o),m=dm(100,0,2,o);return w.useEffect(()=>{const p=new IntersectionObserver(([g])=>{g.isIntersecting&&(f(!0),p.unobserve(d.current))},{threshold:.5});return d.current&&p.observe(d.current),()=>{d.current&&p.unobserve(d.current)}},[]),w.useEffect(()=>{document.title="Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsxs("main",{className:"home",children:[r.jsx("section",{className:"hero",children:r.jsxs("div",{className:"hero-content",children:[r.jsx("h1",{children:"Put Freedom in Your Downloads"}),r.jsxs("p",{children:["Fast, simple, powerful media downloads. ",r.jsx("br",{})," Not the best in the world - just the safest."]}),r.jsxs("div",{className:"tagline",children:[r.jsxs("div",{className:"tagline-item",children:[r.jsx("i",{className:"fas fa-bolt"}),r.jsx("span",{children:"Free"})]}),r.jsxs("div",{className:"tagline-item",children:[r.jsx("i",{className:"fas fa-lock"}),r.jsx("span",{children:"Privacy First"})]}),r.jsxs("div",{className:"tagline-item",children:[r.jsx("i",{className:"fas fa-bullseye"}),r.jsx("span",{children:" Simple"})]})]}),r.jsxs("div",{className:"hero-buttons",children:[r.jsx(ue,{to:"/download",className:"btn-primary",children:"Download Now"}),r.jsx("a",{href:"#features",className:"btn-secondary",children:"Learn More"})]}),r.jsxs("div",{className:"stats",ref:d,children:[r.jsxs("div",{className:"stat",children:[r.jsxs("div",{className:"stat-number",children:[c,"%"]}),r.jsx("div",{className:"stat-label",children:"Open Source"})]}),r.jsxs("div",{className:"stat",children:[r.jsxs("div",{className:"stat-number",children:[m,"%"]}),r.jsx("div",{className:"stat-label",children:"Data Collection"})]})]})]})}),r.jsxs("section",{className:"features",id:"features",children:[r.jsx("h2",{className:"section-title",children:"Why You'll Love It"}),r.jsxs("div",{className:"features-grid",children:[r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-sliders-h feature-icon"}),r.jsx("h3",{children:"Configurable"}),r.jsx("p",{children:"Customize every aspect to your needs. Advanced settings for power users, simple defaults for everyone else. Your choice."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-lock feature-icon"}),r.jsx("h3",{children:"100% Private"}),r.jsx("p",{children:"No tracking, no analytics, no data collection. Everything stays on YOUR machine."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-music feature-icon"}),r.jsx("h3",{children:"Any Format"}),r.jsx("p",{children:"Videos, audio, playlists, streams. If it's online, Freedom Loader can grab it."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-heart feature-icon"}),r.jsx("h3",{children:"User First"}),r.jsx("p",{children:"Built with exceptional UX in mind. Intuitive design, smooth workflows, and a pleasure to use every single day."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-feather feature-icon"}),r.jsx("h3",{children:"Zero Bloat"}),r.jsx("p",{children:"Lightweight, fast, efficient. No ads, no spyware, just pure functionality."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-download feature-icon"}),r.jsx("h3",{children:"Super Simple"}),r.jsx("p",{children:"Click, download, done. No complex settings, no confusing menus. Just simplicity."})]})]})]}),r.jsx("section",{className:"community",children:r.jsxs("div",{className:"community-content",children:[r.jsx("h2",{className:"community-title",children:"Join Our Community"}),r.jsx("p",{className:"community-text",children:"Freedom Loader thrives because of its vibrant community. Share your experience, contribute ideas, report bugs, or just stay connected with others like-minded users."}),r.jsxs("div",{className:"community-links",children:[r.jsxs("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",rel:"noopener noreferrer",className:"community-link",children:[r.jsx("i",{className:"fas fa-comments"}),"GitHub Discussions"]}),r.jsxs("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",target:"_blank",rel:"noopener noreferrer",className:"community-link",children:[r.jsx("i",{className:"fab fa-github"}),"Star on GitHub"]}),r.jsxs(ue,{to:"/contributing",className:"community-link",children:[r.jsx("i",{className:"fas fa-code-branch"}),"Contribute"]})]})]})}),r.jsxs("section",{className:"cta",children:[r.jsx("h2",{children:"Completely Free. Forever Free."}),r.jsx("p",{children:"No premium tier, no subscription, no hidden costs. Freedom Loader is free and will always be free. Download now and join all of the happy users."}),r.jsx(ue,{to:"/download",children:"Get Started Free"})]})]})]})}function Fy(){const o=navigator.userAgent;return/Windows/i.test(o)?"windows":/Linux/i.test(o)?"linux":"other"}const Wy=[{id:"copr",label:"Fedora — via COPR",tag:"Recommended",tagColor:"#4CAF50",description:"Install via DNF — updates are handled automatically by your package manager.",type:"code",externalUrl:"https://copr.fedorainfracloud.org/coprs/masteracnolo/freedom-loader/",code:"sudo dnf copr enable masteracnolo/freedom-loader && sudo dnf install freedom-loader"},{id:"snap",label:"Snap",tag:"Any distro with snapd",tagColor:"#82BEA0",description:"Install via Snap Store — managed by snapd, updates automatically.",type:"code",code:"sudo snap install freedom-loader",externalUrl:"https://snapcraft.io/freedom-loader",externalLabel:"View on Snap Store"},{id:"rpm",label:"RPM",tag:"Fedora · RHEL · openSUSE",tagColor:"#294172",description:"Standard RPM package for Fedora-based distributions.",type:"download",assetSuffix:".x86_64.rpm",assetPattern:o=>`freedom-loader-${o.replace("v","")}.x86_64.rpm`},{id:"deb",label:"DEB",tag:"Debian · Ubuntu",tagColor:"#A81D33",description:"Standard DEB package for Debian-based distributions.",type:"download",assetSuffix:".deb",assetPattern:o=>`freedom-loader_${o.replace("v","")}_amd64.deb`},{id:"appimage",label:"AppImage",tag:"Universal",tagColor:"#1E88E5",description:"No installation needed. Download, chmod +x, and run.",type:"download",assetSuffix:".AppImage",assetPattern:o=>`Freedom-Loader-${o}.AppImage`}];function $y(){w.useEffect(()=>{document.title="Download - Freedom Loader"},[]);const[o,f]=w.useState(""),[d,c]=w.useState([]),[m,p]=w.useState(!0),[g,T]=w.useState("other"),[b,v]=w.useState("auto");w.useEffect(()=>{const j=Fy();T(j),v(j==="windows"?"windows":j==="linux"?"linux":"windows")},[]),w.useEffect(()=>{(async()=>{try{const U=await fetch("https://api.github.com/repos/MasterAcnolo/Freedom-Loader/releases/latest");if(!U.ok)throw new Error(`Status: ${U.status}`);const X=await U.json();f(X.tag_name),c(X.assets||[])}catch(U){console.error("Failed to fetch release:",U.message)}finally{p(!1)}})()},[]);function C(j){if(!o)return null;const U=j(o),X=d.find(Q=>Q.name===U);return X?X.browser_download_url:"https://github.com/MasterAcnolo/Freedom-Loader/releases/latest"}return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsx("section",{className:"dl-page",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Download"}),r.jsxs("div",{className:"dl-tabs",children:[r.jsx("button",{className:`dl-tab${b==="windows"?" active":""}`,onClick:()=>v("windows"),children:"Windows"}),r.jsx("button",{className:`dl-tab${b==="linux"?" active":""}`,onClick:()=>v("linux"),children:"Linux"})]}),b==="windows"&&r.jsxs("div",{className:"dl-block",children:[r.jsxs("div",{className:"dl-header",children:[r.jsx("h3",{children:"Windows Installer"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/releases/latest",className:"btn primary",target:"_blank",rel:"noopener noreferrer",children:"Download on GitHub"})]}),r.jsxs("p",{children:["Installer (.exe), latest stable version from the official GitHub Releases page.",r.jsx("br",{}),'If Windows Defender shows a warning, click "More info" > "Run anyway".']})]}),b==="linux"&&r.jsx("div",{className:"linux-options",children:Wy.map(j=>r.jsxs("div",{className:"linux-option",children:[r.jsxs("div",{className:"linux-option-left",children:[r.jsxs("div",{className:"linux-option-title",children:[r.jsx("h4",{children:j.label}),r.jsx("span",{className:"linux-tag",style:{backgroundColor:j.tagColor},children:j.tag})]}),r.jsx("p",{children:j.description}),j.type==="code"&&r.jsx("div",{className:"linux-code",children:j.code})]}),r.jsxs("div",{className:"linux-option-right",children:[j.type==="download"&&r.jsx("a",{href:C(j.assetPattern)||"#",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:m?"Loading...":`Download ${j.label}`}),j.type==="external"&&r.jsx("a",{href:j.url,className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:j.btnLabel}),j.type==="code"&&r.jsxs("a",{href:j.externalUrl,className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:["View on ",j.label]})]})]},j.id))}),r.jsxs("div",{className:"dl-secondary-links",children:[r.jsxs("div",{className:"dl-link-row",children:[r.jsxs("div",{className:"dl-link-left",children:[r.jsx("h3",{children:"Latest Changelog"}),r.jsx("p",{children:"Release notes for the latest updates, fixes and new features."})]}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/releases/latest",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"View Changelog"})]}),r.jsxs("div",{className:"dl-link-row",children:[r.jsxs("div",{className:"dl-link-left",children:[r.jsx("h3",{children:"GitHub Repository"}),r.jsx("p",{children:"Source code, experimental builds, issues and contributions."})]}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"Open Repository"})]}),r.jsxs("div",{className:"dl-link-row",children:[r.jsxs("div",{className:"dl-link-left",children:[r.jsx("h3",{children:"Old Releases"}),r.jsx("p",{children:"Browse older versions and archived builds."})]}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/releases",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"View Old Releases"})]})]})]})})})]})}function Iy(){w.useEffect(()=>{document.title="About - Freedom Loader"},[]);const o=[{name:"Electron",img:"./assets/languages/electron.png",desc:"Desktop app framework using Chromium and Node.js."},{name:"Node.js",img:"./assets/languages/nodejs.png",desc:"Powering all background processes and filesystem tasks."},{name:"Express",img:"./assets/languages/express.svg",desc:"Powering the internal API",invert:!0},{name:"yt-dlp",img:"./assets/languages/ytDlp.png",desc:"Handles all video and audio extraction operations."},{name:"FFmpeg",img:"./assets/languages/ffmpeg.png",desc:"The industry standard for media merging and format conversion."},{name:"Deno",img:"./assets/languages/deno.png",desc:"Powering yt-dlp verification.",invert:!1},{name:"Winston",img:"./assets/languages/winston.png",desc:"Powering the Logger System"},{name:"JavaScript",img:"./assets/languages/js.png",desc:"Core logic and user interaction within the app."}],f=[{title:"Download Media",desc:"Download high-quality video and audio tracks easily."},{title:"Playlist Automation",desc:"Download entire playlists and auto-organize them into folders."},{title:"Cross-Platform",desc:"Fully supported on Windows 10/11 and major Linux distributions."},{title:"Firefox Integration",desc:"Securely use local cookies to bypass age-restricted content."},{title:"Advanced Codecs",desc:"Force H.264, H.265, AV1, or VP9 for perfect hardware compatibility."},{title:"Metadata Injection",desc:"Automatically embed titles, artists, and thumbnails into your files."},{title:"Hardware Acceleration",desc:"GPU-accelerated UI rendering for a smoother experience."},{title:"Dynamic Theme Engine",desc:"Change UI themes on the fly without restarting the app."},{title:"Community Workshop",desc:"Download and share custom themes with other users."},{title:"Discord Rich Presence",desc:"Showcase your current downloads directly on your Discord profile."},{title:"Custom Output",desc:"Flexible download folder settings and file renaming."},{title:"Background Mode",desc:"Minimize to the system tray to let downloads finish quietly."},{title:"Comprehensive Logs",desc:"Detailed local logs for diagnostics and bug reporting."},{title:"Auto Updates",desc:"Automatic app version management on startup."},{title:"Clean & Safe Boot",desc:"Optimized startup system verifying all dependencies safely."},{title:"100% Local & Private",desc:"No ads, no trackers, no analytics. Your data stays yours."}];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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

                /* Thème sombre (défaut) */
                .invert-dark {
                    filter: invert(1);
                }

                /* Thème clair */
                :root.light-theme .invert-dark {
                    filter: invert(0);
                }

                /* Deno : inverse seulement en light */
                :root.dark-theme .tech-card img[alt="Deno"] {
                    filter: invert(1);
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
            `}),r.jsxs("main",{children:[r.jsx("section",{className:"about",children:r.jsxs("div",{className:"about-container",children:[r.jsx("h1",{children:"About Freedom Loader"}),r.jsxs("p",{children:["Freedom Loader is a lightweight desktop app built with ",r.jsx("strong",{children:"Electron"})," that uses",r.jsx("strong",{children:" yt-dlp"})," to download videos and audio from the web easily and privately. It's made for people who just want control over their media - without ads, limits, or paywalls."]}),r.jsxs("p",{children:["I started this project out of frustration with the state of most downloaders. Too many were filled with ads, shady code, or unnecessary restrictions. Freedom Loader exists to put ",r.jsx("strong",{children:"freedom back into your downloads"}),"."]})]})}),r.jsx("section",{className:"history",children:r.jsxs("div",{className:"history-container",children:[r.jsx("h2",{children:"The Story Behind It"}),r.jsx("p",{children:'Freedom Loader was born from a simple need: downloading media without hassle. I wanted a tool that respected privacy, looked clean, and worked - period. No trackers, no "Pro" version, no weird popups. Just a reliable, open-source downloader for everyone.'}),r.jsxs("p",{children:["Over time, it became more than a tool - it's a statement against overcomplication. Built during late nights, Freedom Loader is the kind of app I wish existed when I was younger: fast, transparent, and free. Full story available ",r.jsx("a",{href:"https://masteracnolo.github.io/Blog/pourquoi-freedom-loader/",target:"_blank",rel:"noopener noreferrer",className:"story-link",children:"Here"})]})]})}),r.jsxs("section",{className:"features",children:[r.jsx("h2",{children:"Main Features"}),r.jsx("div",{className:"features-grid",children:f.map((d,c)=>r.jsxs("div",{className:"feature-card",children:[r.jsx("h3",{children:d.title}),r.jsx("p",{children:d.desc})]},c))})]}),r.jsxs("section",{className:"technos",children:[r.jsx("h2",{children:"Technologies Used"}),r.jsx("div",{className:"tech-grid",children:o.map((d,c)=>r.jsxs("div",{className:"tech-card",id:d.name,children:[r.jsx("img",{src:d.img,alt:d.name,className:d.invert?"invert-dark":""}),r.jsx("h3",{children:d.name}),r.jsx("p",{children:d.desc})]},c))})]}),r.jsxs("section",{className:"support",children:[r.jsx("h2",{children:"Support the Project"}),r.jsx("p",{children:"If you want to help Freedom Loader grow, you can contribute or support it directly."}),r.jsx("div",{className:"support-actions",children:r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",target:"_blank",rel:"noopener noreferrer",className:"btn secondary",children:"Contribute on GitHub"})})]})]})]})}function Py(){w.useEffect(()=>{document.title="Features - Freedom Loader"},[]);const[o,f]=w.useState(null),d=[{title:"Multi-Format Downloads",desc:"Download videos in MP4 or audio in MP3 with automatic conversion",icon:"fa-download",v:"1.0.0",cat:"Download"},{title:"Video Quality Selection",desc:"Choose from 6 quality options: Best, Medium, Worst, 1080p, 720p, 480p",icon:"fa-bars",v:"1.0.0",cat:"Download"},{title:"Playlist Support",desc:"Detect and download complete playlists",icon:"fa-list",v:"1.1.0",cat:"Download"},{title:"Video Information Preview",desc:"Preview metadata before download",icon:"fa-eye",v:"1.0.0",cat:"Download"},{title:"Auto Check Info",desc:"Automatically fetch video info when pasting URLs",icon:"fa-wand-magic-sparkles",v:"1.0.0",cat:"Download"},{title:"Metadata Embedding",desc:"Automatically embed title, artist, duration and thumbnail",icon:"fa-tag",v:"1.1.0",cat:"Download"},{title:"Thumbnail Embedding",desc:"Optional thumbnail addition to MP3 files",icon:"fa-image",v:"1.1.0",cat:"Download"},{title:"Custom Video Codecs",desc:"Support for 8 video codecs: H.264, H.265, AV1, VP9, VP9.2, VP8, H.263, Theora",icon:"fa-cog",v:"1.4.0",cat:"Download"},{title:"Custom Output Directory",desc:"Custom download folder selection",icon:"fa-folder-open",v:"1.1.0",cat:"Download"},{title:"Firefox Cookie Integration",desc:"Support Firefox cookies for restricted content",icon:"fa-brands fa-firefox-browser",v:"1.3.0",cat:"Download"},{title:"Real-Time Progress Tracking",desc:"Live progress bar with percentage and speed",icon:" fa-solid fa-hourglass",v:"1.3.0",cat:"Download"},{title:"Network Speed Indicator",desc:"Display download speed in real-time",icon:"fa-tachometer-alt",v:"1.3.0",cat:"Download"},{title:"Download Cancellation",desc:"Stop current download and clear queue",icon:"fa-ban",v:"1.5.0",cat:"Download"},{title:"Playlist Auto-Download Mode",desc:"Automatic playlist downloading without confirmation",icon:"fa-forward",v:"1.4.0",cat:"Download"},{title:"Playlist Folder Creation",desc:"Auto-create folders named after playlists",icon:"fa-folder-plus",v:"1.5.0",cat:"Download"},{title:"Playlist Info Streaming",desc:"Server-Sent Events streaming for live playlist info",icon:"fa-stream",v:"1.3.0",cat:"Download"},{title:"Audio-Only MP3 Conversion",desc:"Audio extraction and optimized MP3 conversion",icon:"fa-music",v:"1.1.0",cat:"Download"},{title:"Concurrent Fragment Downloads",desc:"8 fragments downloaded in parallel for acceleration",icon:"fa-network-wired",v:"1.1.0",cat:"Download"},{title:"Download Retry Logic",desc:"Automatic retry attempts (10 global retries)",icon:"fa-redo",v:"1.5.0",cat:"Download"},{title:"No File Overwrite",desc:"Protection against accidental file overwriting",icon:"fa-shield",v:"1.0.0",cat:"Download"},{title:"Playlist Index Ordering",desc:"Prefix downloaded playlist items with their index number",icon:"fa-list-ol",v:"1.6.1",cat:"Download"},{title:"File Signatures",desc:"Add signatures to downloaded files",icon:"fa-file-signature",v:"1.6.2",cat:"Download"},{title:"Dynamic Theme System",desc:"Pre-built theme system with dynamic switching",icon:"fa-palette",v:"1.1.0",cat:"Customization"},{title:"Custom Theme Support",desc:"Support for custom themes in .theme.json and ZIP formats",icon:"fa-expand",v:"1.5.0",cat:"Customization"},{title:"Custom Top Bar",desc:"Custom title bar and frameless (toggleable)",icon:"fa-window-maximize",v:"1.3.1",cat:"Customization"},{title:"Settings Panel",desc:"GUI for live configuration",icon:"fa-sliders",v:"1.4.0",cat:"Customization"},{title:"Theme Refresh Button",desc:"Dynamic theme reloading without restart",icon:"fa-sync",v:"1.5.0",cat:"Customization"},{title:"Automatic App Updates",desc:"Automatic update checking and installation",icon:"fa-repeat",v:"1.3.0",cat:"System"},{title:"YT-DLP Auto-Update",desc:"Auto-update yt-dlp engine on startup",icon:"fa-arrow-up",v:"1.2.4",cat:"System"},{title:"Single Instance Lock",desc:"Prevent multiple app instances",icon:"fa-lock",v:"1.3.0",cat:"System"},{title:"Native Dependency Validation",desc:"Startup validation of yt-dlp, FFmpeg, FFprobe and Deno",icon:"fa-check-circle",v:"1.3.1",cat:"System"},{title:"Structured Logging",desc:"Formatted logs with Winston and daily rotation",icon:"fa-file-alt",v:"1.1.2",cat:"System"},{title:"Verbose Logging",desc:"Detailed logs mode for advanced debugging",icon:"fa-terminal",v:"1.4.0",cat:"System"},{title:"Path Validation",desc:"Download path validation for security",icon:"fa-shield-alt",v:"1.4.0",cat:"System"},{title:"FFmpeg Integration",desc:"Full FFmpeg integration for media conversion",icon:"fa-video",v:"1.0.0",cat:"System"},{title:"Deno Runtime Integration",desc:"Deno runtime support for youtube challenge",icon:"fa-server",v:"1.3.0",cat:"System"},{title:"Firefox Browser Requirement",desc:"Built-in Firefox cookie extraction support",icon:"fa-brands fa-firefox-browser",v:"1.3.0",cat:"System"},{title:"Context Isolation",desc:"Electron context isolation for maximum security",icon:"fa-shield",v:"1.5.0",cat:"System"},{title:"Splash Screen",desc:"Startup splash screen with progress bar",icon:"fa-spinner",v:"1.5.0",cat:"System"},{title:"System Tray (Background Mode)",desc:"Minimize application to system tray [Experimental]",icon:"fa-minimize",v:"1.6.2",cat:"System"},{title:"Hardware Acceleration Toggle",desc:"Enable or disable hardware acceleration for better performance",icon:"fa-microchip",v:"1.6.2",cat:"System"},{title:"Cross-Platform Support",desc:"Fully supported on Windows and Linux (Snap, AppImage, RPM, DEB)",icon:"fa-linux",v:"1.6.0",cat:"System"},{title:"System Notifications",desc:"Native OS notifications when download completes",icon:"fa-bell",v:"1.1.1",cat:"Tools"},{title:"Logs Folder Access",desc:"Quick button to open logs folder",icon:"fa-folder",v:"1.1.2",cat:"Tools"},{title:"Configuration File Editor",desc:"Direct access to config.json from settings",icon:"fa-edit",v:"1.4.0",cat:"Tools"},{title:"Theme Folder Access",desc:"Quick access to themes folder for creation",icon:"fa-folder-open",v:"1.5.0",cat:"Tools"},{title:"Version Information",desc:"Display current version in interface",icon:"fa-info-circle",v:"1.4.0",cat:"Tools"},{title:"Download Stage Tracking",desc:"Real-time download stage tracking",icon:"fa-tasks",v:"1.3.0",cat:"Tools"},{title:"Server-Sent Events (SSE)",desc:"Non-blocking progress updates via streaming",icon:"fa-broadcast-tower",v:"1.3.0",cat:"Tools"},{title:"Progress Bar Display",desc:"Visual progress interface with percentage",icon:"fa-bars",v:"1.3.0",cat:"Tools"},{title:"IPC Communication",desc:"Secure Electron-Renderer IPC communication",icon:"fa-exchange-alt",v:"1.0.0",cat:"Tools"},{title:"Toast Notifications",desc:"Temporary UI notifications for user feedback",icon:"fa-comment",v:"1.5.0",cat:"Tools"},{title:"Discord Rich Presence",desc:"Discord integration showing activity",icon:"fa-brands fa-discord",v:"1.2.0",cat:"Integration"},{title:"Official Website Link",desc:"Quick access to official website from app",icon:"fa-globe",v:"1.0.0",cat:"Integration"},{title:"Documentation",desc:"Guides for installing, using, and configuring Freedom Loader",icon:"fa-book",v:"1.0.0",cat:"Integration"},{title:"Theme Workshop",desc:"Access to Freedom Loader Theme Workshop",icon:"fa-tools",v:"1.2.0",cat:"Integration"},{title:"GitHub Releases Integration",desc:"GitHub releases integration for updates",icon:"fa-brands fa-github",v:"1.0.0",cat:"Integration"},{title:"YT-DLP Backend",desc:"Using yt-dlp as download engine",icon:"fa-download",v:"1.0.0",cat:"Integration"}],c=["All",...new Set(d.map(g=>g.cat))],m={Download:"#ff6b6b",Customization:"#4ecdc4",System:"#45b7d1",Tools:"#f9ca24",Integration:"#6c5ce7"},p=o&&o!=="All"?d.filter(g=>g.cat===o):d;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsxs("section",{className:"features-page",children:[r.jsxs("div",{className:"features-header",children:[r.jsx("h1",{children:"Features"}),r.jsx("p",{children:"Discover everything Freedom Loader can do. All fully organized by category for easy browsing."})]}),r.jsx("div",{className:"category-filter",children:c.map(g=>r.jsx("button",{className:`filter-btn ${o===g||o===null&&g==="All"?"active":""}`,onClick:()=>f(g==="All"?null:g),children:g},g))}),r.jsxs("div",{className:"features-stats",children:[r.jsxs("div",{className:"stat-box",children:[r.jsx("div",{className:"stat-number",children:p.length}),r.jsx("div",{className:"stat-label",children:o&&o!=="All"?o:"Total Features"})]}),r.jsxs("div",{className:"stat-box",children:[r.jsx("div",{className:"stat-number",children:r.jsx("i",{class:"fa-solid fa-infinity"})}),r.jsx("div",{className:"stat-label",children:"Possibilities"})]})]}),r.jsx("div",{className:"features-container",children:o===null?c.slice(1).map(g=>r.jsxs("div",{className:"category-section",children:[r.jsx("h2",{className:"category-title",style:{borderColor:m[g]||"#1e90ff"},children:g}),r.jsx("div",{className:"features-grid",children:d.filter(T=>T.cat===g).map((T,b)=>r.jsxs("div",{className:"feature-card",children:[r.jsxs("div",{className:"feature-header",children:[r.jsx("div",{className:"feature-icon",style:{color:m[T.cat]},children:r.jsx("i",{className:`fas ${T.icon}`})}),r.jsxs("div",{className:"feature-meta",children:[r.jsx("div",{className:"feature-title-row",children:r.jsx("h3",{className:"feature-title",children:T.title})}),r.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[r.jsx("span",{className:"feature-badge",style:{backgroundColor:m[T.cat]},children:T.cat}),r.jsxs("span",{className:"feature-version",children:["v",T.v]})]})]})]}),r.jsx("p",{className:"feature-desc",children:T.desc})]},b))})]},g)):r.jsxs("div",{className:"category-section",children:[r.jsx("h2",{className:"category-title",style:{borderColor:m[o]},children:o}),r.jsx("div",{className:"features-grid",children:p.map((g,T)=>r.jsxs("div",{className:"feature-card",children:[r.jsxs("div",{className:"feature-header",children:[r.jsx("div",{className:"feature-icon",style:{color:m[g.cat]},children:r.jsx("i",{className:`fas ${g.icon}`})}),r.jsxs("div",{className:"feature-meta",children:[r.jsx("div",{className:"feature-title-row",children:r.jsx("h3",{className:"feature-title",children:g.title})}),r.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[r.jsx("span",{className:"feature-badge",style:{backgroundColor:m[g.cat]},children:g.cat}),r.jsxs("span",{className:"feature-version",children:["v",g.v]})]})]})]}),r.jsx("p",{className:"feature-desc",children:g.desc})]},T))})]})}),r.jsx("div",{className:"coming-soon-section",children:r.jsxs("div",{className:"coming-soon-content",children:[r.jsx("div",{className:"coming-soon-icon",children:r.jsx("i",{className:"fas fa-rocket"})}),r.jsx("h2",{className:"coming-soon-title",children:"And more to come..."}),r.jsx("p",{className:"coming-soon-desc",children:"These are just the current features. We're constantly working on new features and improvements. Check out our roadmap to see what's coming next!"}),r.jsxs(ue,{to:"/roadmap",className:"roadmap-btn",children:[r.jsx("i",{className:"fas fa-map"})," See our Roadmap"]})]})})]})})]})}function e0(){w.useEffect(()=>{document.title="FAQ - Freedom Loader"},[]);const[o,f]=w.useState(null),d={"Installation & Usage":[{q:"How do I install Freedom Loader?",a:"Read the documentation at docs.freedomloader.acnolo.fr for installation instructions. We provide a Windows installer, as well as Snap, AppImage, DEB, and RPM packages for Linux."},{q:"Which operating systems are supported?",a:"Freedom Loader fully supports Windows 10/11 and major Linux distributions (Ubuntu, Debian, Fedora, Arch, etc.)."},{q:"Where are my downloaded files stored?",a:"Files are stored locally in the folder you select during download. The default folder is your Downloads directory."},{q:"How do I update the application?",a:"On Windows and AppImage, updates are downloaded and applied automatically on launch. If you installed via Snap or Fedora Copr on Linux, your system's package manager handles the updates."}],"Features & Limitations":[{q:"What exactly does Freedom Loader do?",a:"Freedom Loader is a graphical interface that allows you to cleanly download video and audio content from the internet with full metadata and various quality options."},{q:"Can I use Freedom Loader with platforms other than YouTube?",a:"Yes! While heavily optimized for YouTube (playlists, metadata, etc.), the underlying engine supports downloading from hundreds of different websites."},{q:"Why is Mozilla Firefox required?",a:"Freedom Loader can securely extract cookies from your local Firefox installation to allow downloading age-restricted or members-only content without requiring you to log in through the app."},{q:"Are there advanced options or settings?",a:"Yes! You can change video codecs (H.264, AV1, VP9), choose quality thresholds, automate playlist folder creation, and even build custom UI themes."}],"Contributions & Open Source":[{q:"Can I contribute to the project?",a:"Absolutely! All contributors are welcome. You can open issues, submit pull requests, or discuss ideas on GitHub."},{q:"How do I report a bug or propose a feature?",a:"Use GitHub Discussions or open an issue on the repository using our provided templates to suggest ideas or report problems."},{q:"What license does Freedom Loader use?",a:"Freedom Loader is open source under the GNU GPL v3 license. You can copy and redistribute the code while crediting the original author."},{q:"Can I use the code in my own projects?",a:"Yes, freely! However, you must keep original credits and respect the GNU GPL v3 license."}],"Support & Community":[{q:"How can I contact the developer?",a:"You can use the contact form on the Contact page or reach out via GitHub or social media."},{q:"Where can I discuss with the community?",a:"Join the GitHub Discussions community or connect via social media platforms to engage with other users."},{q:"Is there documentation available?",a:"Yes, visit docs.freedomloader.acnolo.fr for installation, usage, configuration, and troubleshooting guides."}],"Security & Privacy":[{q:"Is Freedom Loader safe?",a:"Yes, the app is designed to run locally and does not transmit any personal data or download history to any server. Your privacy is guaranteed."},{q:"Is my personal data collected?",a:"No. We have no ads, no trackers, and no analytics. Everything happens on your machine."},{q:"What should I do if I encounter a security issue?",a:"Please refer to our SECURITY.md file on GitHub and contact the maintainer directly to report security concerns."}]},c=(m,p)=>{const g=`${m}-${p}`;f(o===g?null:g)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsxs("section",{className:"faq-page",children:[r.jsxs("div",{className:"faq-header",children:[r.jsx("h1",{children:"Frequently Asked Questions"}),r.jsx("p",{children:"Find answers to all your questions about Freedom Loader. Click any question to reveal the answer."})]}),r.jsx("div",{className:"faq-container",children:Object.entries(d).map(([m,p])=>r.jsxs("div",{className:"faq-category",children:[r.jsx("h2",{className:"category-title",children:m}),p.map((g,T)=>r.jsxs("div",{className:`faq-item ${o===`${m}-${T}`?"expanded":""}`,children:[r.jsxs("button",{className:"faq-question-btn",onClick:()=>c(m,T),children:[r.jsx("span",{children:g.q}),r.jsx("i",{className:"fas fa-chevron-down faq-icon"})]}),r.jsx("div",{className:"faq-answer",children:r.jsx("p",{className:"faq-answer-content",children:g.a})})]},T))]},m))})]})})]})}function t0(){return w.useEffect(()=>{document.title="Contributing - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{className:"contributing",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Contributing to Freedom Loader"}),r.jsx("p",{className:"subtitle",children:"Help make Freedom Loader better. We welcome all contributions."}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"How to Contribute"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Report bugs with clear steps to reproduce"}),r.jsx("li",{children:"Suggest features or improvements"}),r.jsx("li",{children:"Write code fixes and new features"}),r.jsx("li",{children:"Improve documentation"}),r.jsx("li",{children:"Help others in discussions"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"Getting Started"}),r.jsx("h3",{children:"Setup"}),r.jsxs("div",{className:"code-block",children:["git clone https://github.com/MasterAcnolo/Freedom-Loader.git",r.jsx("br",{}),"cd Freedom-Loader",r.jsx("br",{}),"npm install",r.jsx("br",{}),"npm run dev"]}),r.jsx("h3",{children:"Quick Tips"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Fork the repository on GitHub"}),r.jsxs("li",{children:["Create a feature branch: ",r.jsx("span",{className:"code-inline",children:"git checkout -b feature/your-feature"})]}),r.jsx("li",{children:"Make your changes and test"}),r.jsx("li",{children:"Commit with clear messages"}),r.jsx("li",{children:"Push and open a Pull Request"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"Reporting Issues"}),r.jsx("p",{children:"When reporting bugs, include:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Clear description of the problem"}),r.jsx("li",{children:"Steps to reproduce"}),r.jsx("li",{children:"Expected vs actual behavior"}),r.jsx("li",{children:"Browser/OS information"}),r.jsx("li",{children:"Screenshots if relevant"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"Code of Conduct"}),r.jsx("p",{children:"Be respectful, constructive, and inclusive. Discrimination or harassment will not be tolerated."})]}),r.jsxs("div",{className:"cta",children:[r.jsx("h3",{children:"Ready to Contribute?"}),r.jsx("p",{children:"Check out the issues or start with something small."}),r.jsxs("div",{className:"cta-links",children:[r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/issues",target:"_blank",rel:"noopener noreferrer",className:"cta-link cta-primary",children:"View Issues"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",target:"_blank",rel:"noopener noreferrer",className:"cta-link cta-secondary",children:"GitHub Repository"})]})]})]})})]})}function a0(){w.useEffect(()=>{document.title="Roadmap - Freedom Loader"},[]);const[o,f]=w.useState(null),d={"Working Right Now":[{title:"Local History",desc:"See what you downloaded before"},{title:"Easy Log Submission",desc:"A built-in button to easily send your application logs for faster troubleshooting"},{title:"Enhanced Workshop",desc:"Community marketplace for themes, plugins, and third-party tools"},{title:"Improved UI / UX",desc:"Continuous improvements to the user interface and accessibility"},{title:"CI/CD & Automated Testing",desc:"Automated release pipelines are live! Now focusing on integrating automated Unit and E2E tests for rock-solid stability."}],"Coming Next (maybe)":[{title:"Extended Cookie Support",desc:"Expand automatic cookie extraction support beyond Mozilla Firefox"},{title:"Skip Sponsored Parts",desc:"SponsorBlock integration to automatically skip sponsored segments"},{title:"Partial Download",desc:"Download only specific segments of a video (timeframes)"},{title:"Batch & Parallel Downloads",desc:"Download multiple videos concurrently with advanced queue management"},{title:"Migrate to TypeScript",desc:"Migrate the backend code base to TypeScript for better maintainability"},{title:"Spotify Integration",desc:"Dedicated support to download and manage Spotify media"}],Exploring:[{title:"Browser Extension",desc:"A companion extension to send videos directly to Freedom Loader with a single click."},{title:"Mobile Client App",desc:"Explore a Client/Server architecture to bring Freedom Loader UI to mobile devices"},{title:"Subtitle Support",desc:"Automatically fetch and embed subtitles/captions into downloaded videos"},{title:"Headless Mode",desc:"Expose a full local API to trigger downloads from third-party apps or scripts"},{title:"Parallel Fetching",desc:"Speed up the initial video information retrieval by running requests concurrently."},{title:"File Renaming Options",desc:"Advanced templates to customize output file names automatically"}]},c={"Coming Next (maybe)":"#ff3300","Working Right Now":"#4da6ff",Exploring:"#0dd606"};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsxs("section",{className:"roadmap-page",children:[r.jsxs("div",{className:"roadmap-header",children:[r.jsx("h1",{children:"Roadmap"}),r.jsx("p",{children:"See what's coming next for Freedom Loader. We're constantly innovating and improving."})]}),r.jsx("div",{className:"roadmap-container",children:Object.entries(d).map(([m,p],g)=>r.jsxs("div",{className:`roadmap-section ${m==="Coming Next (maybe)"?"coming-soon":m==="Working Right Now"?"in-dev":"future"}`,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"section-dot",style:{backgroundColor:c[m]}}),r.jsx("h2",{className:"section-title",children:m})]}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:p.map((T,b)=>r.jsxs("div",{className:`roadmap-item ${o===`${m}-${b}`?"expanded":""} ${m==="Coming Next (maybe)"?"coming-soon":m==="Working Right Now"?"in-dev":"future"}`,onClick:()=>f(o===`${m}-${b}`?null:`${m}-${b}`),children:[r.jsxs("div",{className:"item-header",children:[r.jsx("h3",{className:"item-title",children:T.title}),r.jsx("i",{className:"fas fa-chevron-down item-icon"})]}),r.jsx("p",{className:"item-desc",children:T.desc})]},b))})]},m))})]})})]})}function l0(){return w.useEffect(()=>{document.title="Terms - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsx("section",{className:"terms",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Terms of Use"}),r.jsx("p",{className:"last-updated",children:"Last updated: May 1, 2026"}),r.jsx("p",{children:"These terms govern your use of the Freedom Loader desktop application. By installing or using the app, you agree to these terms."}),r.jsx("h2",{children:"1. Purpose of the Application"}),r.jsxs("p",{children:["Freedom Loader is a ",r.jsx("strong",{children:"personal, offline media management tool"}),". It provides a graphical interface around"," ",r.jsx("a",{href:"https://github.com/yt-dlp/yt-dlp",target:"_blank",children:"yt-dlp"}),", allowing users to download publicly accessible media for",r.jsx("strong",{children:" strictly personal and offline use"}),"."]}),r.jsx("p",{children:"It is not a streaming platform, not a distribution service, and generates no revenue."}),r.jsx("h2",{children:"2. License & Open Source"}),r.jsxs("p",{children:["Freedom Loader is licensed under the"," ",r.jsx("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html",target:"_blank",children:"GNU GPL v3"}),"."]}),r.jsx("p",{children:"You are allowed to:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Use the application for any purpose"}),r.jsx("li",{children:"Study and modify the code"}),r.jsx("li",{children:"Redistribute original or modified versions"})]}),r.jsx("p",{children:"Under these conditions:"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("strong",{children:"Credit the original author (MasterAcnolo / Axel NICOLAS)"})}),r.jsx("li",{children:"Keep the GPLv3 license"}),r.jsx("li",{children:"Provide source code for modifications"})]}),r.jsx("h2",{children:"3. Acceptable Use"}),r.jsxs("p",{children:["Freedom Loader is intended for ",r.jsx("strong",{children:"personal, non-commercial use"}),"."]}),r.jsx("p",{children:"Allowed:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Downloading publicly accessible content for personal use"}),r.jsx("li",{children:"Archiving content you legitimately access"})]}),r.jsx("p",{children:"Forbidden:"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("strong",{children:"Redistributing downloaded content"})}),r.jsx("li",{children:r.jsx("strong",{children:"Commercial use without rights"})}),r.jsx("li",{children:r.jsx("strong",{children:"Bypassing DRM or paywalls"})}),r.jsx("li",{children:r.jsx("strong",{children:"Downloading pirated content"})})]}),r.jsx("p",{children:"You are solely responsible for how you use the application."}),r.jsx("h2",{children:"4. Legal Framework"}),r.jsx("p",{children:"Freedom Loader does not grant rights over content. Downloaded media remains subject to copyright laws."}),r.jsx("p",{children:"Under French law (Article L122-5), private copies from a lawful source for personal use are permitted."}),r.jsx("p",{children:"Some platforms may forbid downloading in their Terms of Service. This is contractual (account risk), not criminal — but it's on you."}),r.jsx("h2",{children:"5. Privacy"}),r.jsx("p",{children:r.jsx("strong",{children:"No personal data is collected."})}),r.jsxs("ul",{children:[r.jsx("li",{children:"No tracking, no analytics"}),r.jsx("li",{children:"No account required"}),r.jsx("li",{children:"All data stays local"})]}),r.jsx("p",{children:"Network requests are only made to fetch media via yt-dlp."}),r.jsx("h2",{children:"6. Disclaimer"}),r.jsxs("p",{children:["Freedom Loader is provided ",r.jsx("strong",{children:"as-is"}),", without warranty."]}),r.jsxs("ul",{children:[r.jsx("li",{children:"No liability for data loss or system damage"}),r.jsx("li",{children:"No liability for legal misuse"}),r.jsx("li",{children:"No guarantee of functionality"})]}),r.jsx("h2",{children:"7. Third-Party Tools"}),r.jsx("p",{children:"Freedom Loader depends on:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"yt-dlp"})," (media extraction)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"FFmpeg"})," (processing)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Electron"})," (runtime)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Deno"})," (scripting)"]})]}),r.jsx("p",{children:"Not affiliated with YouTube, Google, Twitch, or others."}),r.jsx("h2",{children:"8. Updates"}),r.jsx("p",{children:"The app may change at any time. Features can break depending on external platforms."}),r.jsx("p",{children:"Continued use means you accept updated terms."}),r.jsx("h2",{children:"9. Contact"}),r.jsx("p",{children:"Questions or legal concerns:"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",children:"GitHub Discussions"})}),r.jsx("li",{children:r.jsx("a",{href:"https://www.linkedin.com/in/axelnicolas25",target:"_blank",children:"LinkedIn"})})]})]})})})]})}function n0(){return w.useEffect(()=>{document.title="Privacy - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsx("section",{className:"privacy",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Privacy Policy"}),r.jsxs("p",{className:"last-updated",children:[r.jsx("strong",{children:"Last updated:"})," November 13, 2025"]}),r.jsx("p",{children:"Freedom Loader respects your privacy. This Privacy Policy explains how we handle any data you might use with the app and how we protect your privacy."}),r.jsx("h2",{children:"1. Information We Collect"}),r.jsxs("p",{children:["Freedom Loader is a desktop application. We do ",r.jsx("strong",{children:"not"})," collect personal information such as names, emails, or browsing history. The only data handled by the app is:"]}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Usage Data:"})," Logs or error reports generated locally on your machine to help the app function correctly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Optional metadata:"})," Information from downloaded media (titles, authors, duration) stored locally."]})]}),r.jsx("p",{children:"No data is sent to any server unless you explicitly choose to share it (for example, using Discord Rich Presence)."}),r.jsx("h2",{children:"2. Cookies & Tracking"}),r.jsx("p",{children:"Freedom Loader is a desktop app and does not use cookies or any web tracking technologies."}),r.jsx("h2",{children:"3. Use of Your Data"}),r.jsx("p",{children:"Any data processed by the app is used solely to ensure proper functionality, improve performance, and provide features like download logging and Rich Presence. No personal data is shared with third parties."}),r.jsx("h2",{children:"4. Retention"}),r.jsx("p",{children:"All usage data and metadata are stored locally on your device and remain there until you delete them. Freedom Loader does not store data remotely."}),r.jsx("h2",{children:"5. Security"}),r.jsx("p",{children:"We take reasonable measures to protect your data on your device, but no system is 100% secure. Please use your own discretion when handling downloaded media."}),r.jsx("h2",{children:"6. Children's Privacy"}),r.jsx("p",{children:"Freedom Loader is not intended for children under 13, and we do not knowingly collect any personal information from children."}),r.jsx("h2",{children:"7. Links to Other Websites"}),r.jsx("p",{children:"Any links to external websites in the app are for convenience. We are not responsible for the privacy practices of other sites."}),r.jsx("h2",{children:"8. Changes to This Privacy Policy"}),r.jsx("p",{children:'We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated "Last updated" date.'}),r.jsx("h2",{children:"Contact"}),r.jsxs("p",{children:["For questions regarding this Privacy Policy, visit our ",r.jsx(ue,{to:"/contact",children:"contact page "}),"."]})]})})})]})}function i0(){return w.useEffect(()=>{document.title="Contact - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsx("section",{className:"contact",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Contact Me"}),r.jsx("p",{children:"If you have any questions, suggestions, or need support, reach out using the methods below or fill out the form."}),r.jsxs("div",{className:"contact-methods",children:[r.jsxs("div",{className:"contact-card",children:[r.jsx("i",{className:"fab fa-github"}),r.jsx("h3",{children:"GitHub"}),r.jsx("p",{children:"Join the discussions, report bugs, and contribute to the project:"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",rel:"noopener noreferrer",children:"GitHub Discussions"})]}),r.jsxs("div",{className:"contact-card",children:[r.jsx("i",{className:"fab fa-linkedin-in"}),r.jsx("h3",{children:"LinkedIn"}),r.jsx("p",{children:"Connect for updates, networking, and professional inquiries:"}),r.jsx("a",{href:"https://www.linkedin.com/in/axelnicolas25",target:"_blank",rel:"noopener noreferrer",children:"@axelnicolas25"})]})]}),r.jsxs("form",{className:"contact-form",action:"https://api.web3forms.com/submit",method:"POST",children:[r.jsx("input",{type:"hidden",name:"apikey",value:"cd8edfb2-7b53-4db9-a545-8a055f04612c"}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"name",children:"Name"}),r.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your name",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",children:"Email"}),r.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Your email",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"message",children:"Message"}),r.jsx("textarea",{id:"message",name:"message",placeholder:"Your message...",required:!0})]}),r.jsx("button",{type:"submit",children:"Send Message"})]})]})})})]})}function r0(){return w.useEffect(()=>{window.location.replace("https://docs.freedomloader.acnolo.fr/")},[]),r.jsxs("p",{children:["Documentation moved to ",r.jsx("a",{href:"https://docs.freedomloader.acnolo.fr/",children:"docs.freedomloader.acnolo.fr"}),"."]})}function o0(){return r.jsxs(r.Fragment,{children:[r.jsx(Zy,{}),r.jsx(Qy,{}),r.jsxs(uy,{children:[r.jsx(Tt,{path:"/",element:r.jsx(Jy,{})}),r.jsx(Tt,{path:"/about",element:r.jsx(Iy,{})}),r.jsx(Tt,{path:"/faq",element:r.jsx(e0,{})}),r.jsx(Tt,{path:"/features",element:r.jsx(Py,{})}),r.jsx(Tt,{path:"/wiki",element:r.jsx(r0,{})}),r.jsx(Tt,{path:"/contributing",element:r.jsx(t0,{})}),r.jsx(Tt,{path:"/roadmap",element:r.jsx(a0,{})}),r.jsx(Tt,{path:"/download",element:r.jsx($y,{})}),r.jsx(Tt,{path:"/terms",element:r.jsx(l0,{})}),r.jsx(Tt,{path:"/privacy",element:r.jsx(n0,{})}),r.jsx(Tt,{path:"/contact",element:r.jsx(i0,{})})]}),r.jsx(Vy,{})]})}function u0(){const{pathname:o,hash:f}=window.location;if(f){sessionStorage.removeItem("redirect");return}const d="/",c=sessionStorage.getItem("redirect"),m=c||o.replace(d,"");c&&(sessionStorage.removeItem("redirect"),sessionStorage.removeItem("redirected")),m&&m!=="/"&&window.location.replace(`${d}/#${m}`)}u0();sg.createRoot(document.getElementById("root")).render(r.jsxs(My,{children:[r.jsx(ky,{}),r.jsx(o0,{})]}));
