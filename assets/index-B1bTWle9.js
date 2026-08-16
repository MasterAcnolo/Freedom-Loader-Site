(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function f(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(m){if(m.ep)return;m.ep=!0;const p=f(m);fetch(m.href,p)}})();var Nc={exports:{}},Dn={};var Ff;function tg(){if(Ff)return Dn;Ff=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(u,m,p){var g=null;if(p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),"key"in m){p={};for(var N in m)N!=="key"&&(p[N]=m[N])}else p=m;return m=p.ref,{$$typeof:o,type:u,key:g,ref:m!==void 0?m:null,props:p}}return Dn.Fragment=d,Dn.jsx=f,Dn.jsxs=f,Dn}var Wf;function ag(){return Wf||(Wf=1,Nc.exports=tg()),Nc.exports}var r=ag(),Ac={exports:{}},Mn={},Rc={exports:{}},Cc={};var $f;function lg(){return $f||($f=1,(function(o){function d(C,H){var F=C.length;C.push(H);e:for(;0<F;){var pe=F-1>>>1,je=C[pe];if(0<m(je,H))C[pe]=H,C[F]=je,F=pe;else break e}}function f(C){return C.length===0?null:C[0]}function u(C){if(C.length===0)return null;var H=C[0],F=C.pop();if(F!==H){C[0]=F;e:for(var pe=0,je=C.length,v=je>>>1;pe<v;){var _=2*(pe+1)-1,q=C[_],Y=_+1,P=C[Y];if(0>m(q,F))Y<je&&0>m(P,q)?(C[pe]=P,C[Y]=F,pe=Y):(C[pe]=q,C[_]=F,pe=_);else if(Y<je&&0>m(P,F))C[pe]=P,C[Y]=F,pe=Y;else break e}}return H}function m(C,H){var F=C.sortIndex-H.sortIndex;return F!==0?F:C.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;o.unstable_now=function(){return p.now()}}else{var g=Date,N=g.now();o.unstable_now=function(){return g.now()-N}}var b=[],x=[],D=1,S=null,U=3,X=!1,Q=!1,B=!1,L=!1,K=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ve(C){for(var H=f(x);H!==null;){if(H.callback===null)u(x);else if(H.startTime<=C)u(x),H.sortIndex=H.expirationTime,d(b,H);else break;H=f(x)}}function be(C){if(B=!1,ve(C),!Q)if(f(b)!==null)Q=!0,Te||(Te=!0,Je());else{var H=f(x);H!==null&&_e(be,H.startTime-C)}}var Te=!1,W=-1,Ce=5,Ke=-1;function Ot(){return L?!0:!(o.unstable_now()-Ke<Ce)}function pt(){if(L=!1,Te){var C=o.unstable_now();Ke=C;var H=!0;try{e:{Q=!1,B&&(B=!1,I(W),W=-1),X=!0;var F=U;try{t:{for(ve(C),S=f(b);S!==null&&!(S.expirationTime>C&&Ot());){var pe=S.callback;if(typeof pe=="function"){S.callback=null,U=S.priorityLevel;var je=pe(S.expirationTime<=C);if(C=o.unstable_now(),typeof je=="function"){S.callback=je,ve(C),H=!0;break t}S===f(b)&&u(b),ve(C)}else u(b);S=f(b)}if(S!==null)H=!0;else{var v=f(x);v!==null&&_e(be,v.startTime-C),H=!1}}break e}finally{S=null,U=F,X=!1}H=void 0}}finally{H?Je():Te=!1}}}var Je;if(typeof J=="function")Je=function(){J(pt)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,gt=_t.port2;_t.port1.onmessage=pt,Je=function(){gt.postMessage(null)}}else Je=function(){K(pt,0)};function _e(C,H){W=K(function(){C(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(C){C.callback=null},o.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<C?Math.floor(1e3/C):5},o.unstable_getCurrentPriorityLevel=function(){return U},o.unstable_next=function(C){switch(U){case 1:case 2:case 3:var H=3;break;default:H=U}var F=U;U=H;try{return C()}finally{U=F}},o.unstable_requestPaint=function(){L=!0},o.unstable_runWithPriority=function(C,H){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var F=U;U=C;try{return H()}finally{U=F}},o.unstable_scheduleCallback=function(C,H,F){var pe=o.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,C){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=F+je,C={id:D++,callback:H,priorityLevel:C,startTime:F,expirationTime:je,sortIndex:-1},F>pe?(C.sortIndex=F,d(x,C),f(b)===null&&C===f(x)&&(B?(I(W),W=-1):B=!0,_e(be,F-pe))):(C.sortIndex=je,d(b,C),Q||X||(Q=!0,Te||(Te=!0,Je()))),C},o.unstable_shouldYield=Ot,o.unstable_wrapCallback=function(C){var H=U;return function(){var F=U;U=H;try{return C.apply(this,arguments)}finally{U=F}}}})(Cc)),Cc}var If;function ng(){return If||(If=1,Rc.exports=lg()),Rc.exports}var Dc={exports:{}},$={};var Pf;function ig(){if(Pf)return $;Pf=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),U=Symbol.iterator;function X(v){return v===null||typeof v!="object"?null:(v=U&&v[U]||v["@@iterator"],typeof v=="function"?v:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,L={};function K(v,_,q){this.props=v,this.context=_,this.refs=L,this.updater=q||Q}K.prototype.isReactComponent={},K.prototype.setState=function(v,_){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,_,"setState")},K.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function I(){}I.prototype=K.prototype;function J(v,_,q){this.props=v,this.context=_,this.refs=L,this.updater=q||Q}var ve=J.prototype=new I;ve.constructor=J,B(ve,K.prototype),ve.isPureReactComponent=!0;var be=Array.isArray;function Te(){}var W={H:null,A:null,T:null,S:null},Ce=Object.prototype.hasOwnProperty;function Ke(v,_,q){var Y=q.ref;return{$$typeof:o,type:v,key:_,ref:Y!==void 0?Y:null,props:q}}function Ot(v,_){return Ke(v.type,_,v.props)}function pt(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function Je(v){var _={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(q){return _[q]})}var _t=/\/+/g;function gt(v,_){return typeof v=="object"&&v!==null&&v.key!=null?Je(""+v.key):_.toString(36)}function _e(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Te,Te):(v.status="pending",v.then(function(_){v.status==="pending"&&(v.status="fulfilled",v.value=_)},function(_){v.status==="pending"&&(v.status="rejected",v.reason=_)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function C(v,_,q,Y,P){var ae=typeof v;(ae==="undefined"||ae==="boolean")&&(v=null);var fe=!1;if(v===null)fe=!0;else switch(ae){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(v.$$typeof){case o:case d:fe=!0;break;case D:return fe=v._init,C(fe(v._payload),_,q,Y,P)}}if(fe)return P=P(v),fe=Y===""?"."+gt(v,0):Y,be(P)?(q="",fe!=null&&(q=fe.replace(_t,"$&/")+"/"),C(P,_,q,"",function(Hl){return Hl})):P!=null&&(pt(P)&&(P=Ot(P,q+(P.key==null||v&&v.key===P.key?"":(""+P.key).replace(_t,"$&/")+"/")+fe)),_.push(P)),1;fe=0;var We=Y===""?".":Y+":";if(be(v))for(var De=0;De<v.length;De++)Y=v[De],ae=We+gt(Y,De),fe+=C(Y,_,q,ae,P);else if(De=X(v),typeof De=="function")for(v=De.call(v),De=0;!(Y=v.next()).done;)Y=Y.value,ae=We+gt(Y,De++),fe+=C(Y,_,q,ae,P);else if(ae==="object"){if(typeof v.then=="function")return C(_e(v),_,q,Y,P);throw _=String(v),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return fe}function H(v,_,q){if(v==null)return v;var Y=[],P=0;return C(v,Y,"","",function(ae){return _.call(q,ae,P++)}),Y}function F(v){if(v._status===-1){var _=v._result;_=_(),_.then(function(q){(v._status===0||v._status===-1)&&(v._status=1,v._result=q)},function(q){(v._status===0||v._status===-1)&&(v._status=2,v._result=q)}),v._status===-1&&(v._status=0,v._result=_)}if(v._status===1)return v._result.default;throw v._result}var pe=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},je={map:H,forEach:function(v,_,q){H(v,function(){_.apply(this,arguments)},q)},count:function(v){var _=0;return H(v,function(){_++}),_},toArray:function(v){return H(v,function(_){return _})||[]},only:function(v){if(!pt(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return $.Activity=S,$.Children=je,$.Component=K,$.Fragment=f,$.Profiler=m,$.PureComponent=J,$.StrictMode=u,$.Suspense=b,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,$.__COMPILER_RUNTIME={__proto__:null,c:function(v){return W.H.useMemoCache(v)}},$.cache=function(v){return function(){return v.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(v,_,q){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var Y=B({},v.props),P=v.key;if(_!=null)for(ae in _.key!==void 0&&(P=""+_.key),_)!Ce.call(_,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&_.ref===void 0||(Y[ae]=_[ae]);var ae=arguments.length-2;if(ae===1)Y.children=q;else if(1<ae){for(var fe=Array(ae),We=0;We<ae;We++)fe[We]=arguments[We+2];Y.children=fe}return Ke(v.type,P,Y)},$.createContext=function(v){return v={$$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:p,_context:v},v},$.createElement=function(v,_,q){var Y,P={},ae=null;if(_!=null)for(Y in _.key!==void 0&&(ae=""+_.key),_)Ce.call(_,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(P[Y]=_[Y]);var fe=arguments.length-2;if(fe===1)P.children=q;else if(1<fe){for(var We=Array(fe),De=0;De<fe;De++)We[De]=arguments[De+2];P.children=We}if(v&&v.defaultProps)for(Y in fe=v.defaultProps,fe)P[Y]===void 0&&(P[Y]=fe[Y]);return Ke(v,ae,P)},$.createRef=function(){return{current:null}},$.forwardRef=function(v){return{$$typeof:N,render:v}},$.isValidElement=pt,$.lazy=function(v){return{$$typeof:D,_payload:{_status:-1,_result:v},_init:F}},$.memo=function(v,_){return{$$typeof:x,type:v,compare:_===void 0?null:_}},$.startTransition=function(v){var _=W.T,q={};W.T=q;try{var Y=v(),P=W.S;P!==null&&P(q,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(Te,pe)}catch(ae){pe(ae)}finally{_!==null&&q.types!==null&&(_.types=q.types),W.T=_}},$.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},$.use=function(v){return W.H.use(v)},$.useActionState=function(v,_,q){return W.H.useActionState(v,_,q)},$.useCallback=function(v,_){return W.H.useCallback(v,_)},$.useContext=function(v){return W.H.useContext(v)},$.useDebugValue=function(){},$.useDeferredValue=function(v,_){return W.H.useDeferredValue(v,_)},$.useEffect=function(v,_){return W.H.useEffect(v,_)},$.useEffectEvent=function(v){return W.H.useEffectEvent(v)},$.useId=function(){return W.H.useId()},$.useImperativeHandle=function(v,_,q){return W.H.useImperativeHandle(v,_,q)},$.useInsertionEffect=function(v,_){return W.H.useInsertionEffect(v,_)},$.useLayoutEffect=function(v,_){return W.H.useLayoutEffect(v,_)},$.useMemo=function(v,_){return W.H.useMemo(v,_)},$.useOptimistic=function(v,_){return W.H.useOptimistic(v,_)},$.useReducer=function(v,_,q){return W.H.useReducer(v,_,q)},$.useRef=function(v){return W.H.useRef(v)},$.useState=function(v){return W.H.useState(v)},$.useSyncExternalStore=function(v,_,q){return W.H.useSyncExternalStore(v,_,q)},$.useTransition=function(){return W.H.useTransition()},$.version="19.2.5",$}var em;function qc(){return em||(em=1,Dc.exports=ig()),Dc.exports}var Mc={exports:{}},Fe={};var tm;function rg(){if(tm)return Fe;tm=1;var o=qc();function d(b){var x="https://react.dev/errors/"+b;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)x+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+b+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(b,x,D){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:S==null?null:""+S,children:b,containerInfo:x,implementation:D}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(b,x){if(b==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Fe.createPortal=function(b,x){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(d(299));return p(b,x,null,D)},Fe.flushSync=function(b){var x=g.T,D=u.p;try{if(g.T=null,u.p=2,b)return b()}finally{g.T=x,u.p=D,u.d.f()}},Fe.preconnect=function(b,x){typeof b=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,u.d.C(b,x))},Fe.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},Fe.preinit=function(b,x){if(typeof b=="string"&&x&&typeof x.as=="string"){var D=x.as,S=N(D,x.crossOrigin),U=typeof x.integrity=="string"?x.integrity:void 0,X=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;D==="style"?u.d.S(b,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:S,integrity:U,fetchPriority:X}):D==="script"&&u.d.X(b,{crossOrigin:S,integrity:U,fetchPriority:X,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Fe.preinitModule=function(b,x){if(typeof b=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var D=N(x.as,x.crossOrigin);u.d.M(b,{crossOrigin:D,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&u.d.M(b)},Fe.preload=function(b,x){if(typeof b=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var D=x.as,S=N(D,x.crossOrigin);u.d.L(b,D,{crossOrigin:S,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Fe.preloadModule=function(b,x){if(typeof b=="string")if(x){var D=N(x.as,x.crossOrigin);u.d.m(b,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:D,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else u.d.m(b)},Fe.requestFormReset=function(b){u.d.r(b)},Fe.unstable_batchedUpdates=function(b,x){return b(x)},Fe.useFormState=function(b,x,D){return g.H.useFormState(b,x,D)},Fe.useFormStatus=function(){return g.H.useHostTransitionStatus()},Fe.version="19.2.5",Fe}var am;function og(){if(am)return Mc.exports;am=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Mc.exports=rg(),Mc.exports}var lm;function cg(){if(lm)return Mn;lm=1;var o=ng(),d=qc(),f=og();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function N(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(p(e)!==e)throw Error(u(188))}function x(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return b(n),e;if(i===l)return b(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,s=n.child;s;){if(s===a){c=!0,a=n,l=i;break}if(s===l){c=!0,l=n,a=i;break}s=s.sibling}if(!c){for(s=i.child;s;){if(s===a){c=!0,a=i,l=n;break}if(s===l){c=!0,l=i,a=n;break}s=s.sibling}if(!c)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function D(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=D(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,U=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),Ke=Symbol.for("react.activity"),Ot=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=pt&&e[pt]||e["@@iterator"],typeof e=="function"?e:null)}var _t=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_t?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case K:return"Profiler";case L:return"StrictMode";case be:return"Suspense";case Te:return"SuspenseList";case Ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case J:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:gt(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return gt(e(t))}catch{}}return null}var _e=Array.isArray,C=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],je=-1;function v(e){return{current:e}}function _(e){0>je||(e.current=pe[je],pe[je]=null,je--)}function q(e,t){je++,pe[je]=e.current,e.current=t}var Y=v(null),P=v(null),ae=v(null),fe=v(null);function We(e,t){switch(q(ae,t),q(P,e),q(Y,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?xf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=xf(t),e=vf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(Y),q(Y,e)}function De(){_(Y),_(P),_(ae)}function Hl(e){e.memoizedState!==null&&q(fe,e);var t=Y.current,a=vf(t,e.type);t!==a&&(q(P,e),q(Y,a))}function qn(e){P.current===e&&(_(Y),_(P)),fe.current===e&&(_(fe),Nn._currentValue=F)}var cr,Kc;function Ma(e){if(cr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);cr=t&&t[1]||"",Kc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cr+e+Kc}var ur=!1;function sr(e,t){if(!e||ur)return"";ur=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(A){var T=A}Reflect.construct(e,[],O)}else{try{O.call()}catch(A){T=A}e.call(O.prototype)}}else{try{throw Error()}catch(A){T=A}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],s=i[1];if(c&&s){var h=c.split(`
`),z=s.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===z.length)for(l=h.length-1,n=z.length-1;1<=l&&0<=n&&h[l]!==z[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==z[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==z[n]){var R=`
`+h[l].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=l&&0<=n);break}}}finally{ur=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ma(a):""}function Mm(e,t){switch(e.tag){case 26:case 27:case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return e.child!==t&&t!==null?Ma("Suspense Fallback"):Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return sr(e.type,!1);case 11:return sr(e.type.render,!1);case 1:return sr(e.type,!0);case 31:return Ma("Activity");default:return""}}function Jc(e){try{var t="",a=null;do t+=Mm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var dr=Object.prototype.hasOwnProperty,fr=o.unstable_scheduleCallback,mr=o.unstable_cancelCallback,Om=o.unstable_shouldYield,_m=o.unstable_requestPaint,it=o.unstable_now,Um=o.unstable_getCurrentPriorityLevel,Fc=o.unstable_ImmediatePriority,Wc=o.unstable_UserBlockingPriority,kn=o.unstable_NormalPriority,Lm=o.unstable_LowPriority,$c=o.unstable_IdlePriority,Hm=o.log,qm=o.unstable_setDisableYieldValue,ql=null,rt=null;function oa(e){if(typeof Hm=="function"&&qm(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(ql,e)}catch{}}var ot=Math.clz32?Math.clz32:Ym,km=Math.log,Bm=Math.LN2;function Ym(e){return e>>>=0,e===0?32:31-(km(e)/Bm|0)|0}var Bn=256,Yn=262144,Gn=4194304;function Oa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Oa(l):(c&=s,c!==0?n=Oa(c):a||(a=s&~e,a!==0&&(n=Oa(a))))):(s=l&~i,s!==0?n=Oa(s):c!==0?n=Oa(c):a||(a=l&~e,a!==0&&(n=Oa(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ic(){var e=Gn;return Gn<<=1,(Gn&62914560)===0&&(Gn=4194304),e}function hr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Bl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xm(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,h=e.expirationTimes,z=e.hiddenUpdates;for(a=c&~a;0<a;){var R=31-ot(a),O=1<<R;s[R]=0,h[R]=-1;var T=z[R];if(T!==null)for(z[R]=null,R=0;R<T.length;R++){var A=T[R];A!==null&&(A.lane&=-536870913)}a&=~O}l!==0&&Pc(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Pc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function eu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ot(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function tu(e,t){var a=t&-t;return a=(a&42)!==0?1:pr(a),(a&(e.suspendedLanes|t))!==0?0:a}function pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function au(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Gf(e.type))}function lu(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var ca=Math.random().toString(36).slice(2),Ge="__reactFiber$"+ca,Ie="__reactProps$"+ca,Ia="__reactContainer$"+ca,yr="__reactEvents$"+ca,Qm="__reactListeners$"+ca,Vm="__reactHandles$"+ca,nu="__reactResources$"+ca,Yl="__reactMarker$"+ca;function xr(e){delete e[Ge],delete e[Ie],delete e[yr],delete e[Qm],delete e[Vm]}function Pa(e){var t=e[Ge];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ia]||a[Ge]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Tf(e);e!==null;){if(a=e[Ge])return a;e=Tf(e)}return t}e=a,a=e.parentNode}return null}function el(e){if(e=e[Ge]||e[Ia]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Gl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function tl(e){var t=e[nu];return t||(t=e[nu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Be(e){e[Yl]=!0}var iu=new Set,ru={};function _a(e,t){al(e,t),al(e+"Capture",t)}function al(e,t){for(ru[e]=t,e=0;e<t.length;e++)iu.add(t[e])}var Zm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ou={},cu={};function Km(e){return dr.call(cu,e)?!0:dr.call(ou,e)?!1:Zm.test(e)?cu[e]=!0:(ou[e]=!0,!1)}function Qn(e,t,a){if(Km(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Vn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){if(!e._valueTracker){var t=uu(e)?"checked":"value";e._valueTracker=Jm(e,t,""+e[t])}}function su(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=uu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fm=/[\n"\\]/g;function xt(e){return e.replace(Fm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function br(e,t,a,l,n,i,c,s){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?jr(e,c,yt(t)):a!=null?jr(e,c,yt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+yt(s):e.removeAttribute("name")}function du(e,t,a,l,n,i,c,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){vr(e);return}a=a!=null?""+yt(a):"",t=t!=null?""+yt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),vr(e)}function jr(e,t,a){t==="number"&&Zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ll(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function fu(e,t,a){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+yt(a):""}function mu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(_e(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=yt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),vr(e)}function nl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hu(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Wm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function pu(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&hu(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&hu(e,i,t[i])}function Sr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $m=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return Im.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var wr=null;function zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,rl=null;function gu(e){var t=el(e);if(t&&(e=t.stateNode)){var a=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(br(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ie]||null;if(!n)throw Error(u(90));br(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&su(l)}break e;case"textarea":fu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ll(e,!!a.multiple,t,!1)}}}var Er=!1;function yu(e,t,a){if(Er)return e(t,a);Er=!0;try{var l=e(t);return l}finally{if(Er=!1,(il!==null||rl!==null)&&(_i(),il&&(t=il,e=rl,rl=il=null,gu(t),e)))for(t=0;t<e.length;t++)gu(e[t])}}function Xl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ie]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tr=!1;if(Xt)try{var Ql={};Object.defineProperty(Ql,"passive",{get:function(){Tr=!0}}),window.addEventListener("test",Ql,Ql),window.removeEventListener("test",Ql,Ql)}catch{Tr=!1}var ua=null,Nr=null,Jn=null;function xu(){if(Jn)return Jn;var e,t=Nr,a=t.length,l,n="value"in ua?ua.value:ua.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return Jn=n.slice(e,1<l?1-l:void 0)}function Fn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function vu(){return!1}function Pe(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wn:vu,this.isPropagationStopped=vu,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=Pe(Ua),Vl=S({},Ua,{view:0,detail:0}),Pm=Pe(Vl),Ar,Rr,Zl,In=S({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zl&&(Zl&&e.type==="mousemove"?(Ar=e.screenX-Zl.screenX,Rr=e.screenY-Zl.screenY):Rr=Ar=0,Zl=e),Ar)},movementY:function(e){return"movementY"in e?e.movementY:Rr}}),bu=Pe(In),eh=S({},In,{dataTransfer:0}),th=Pe(eh),ah=S({},Vl,{relatedTarget:0}),Cr=Pe(ah),lh=S({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=Pe(lh),ih=S({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rh=Pe(ih),oh=S({},Ua,{data:0}),ju=Pe(oh),ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sh[e])?!!t[e]:!1}function Dr(){return dh}var fh=S({},Vl,{key:function(e){if(e.key){var t=ch[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dr,charCode:function(e){return e.type==="keypress"?Fn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mh=Pe(fh),hh=S({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Su=Pe(hh),ph=S({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dr}),gh=Pe(ph),yh=S({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=Pe(yh),vh=S({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bh=Pe(vh),jh=S({},Ua,{newState:0,oldState:0}),Sh=Pe(jh),wh=[9,13,27,32],Mr=Xt&&"CompositionEvent"in window,Kl=null;Xt&&"documentMode"in document&&(Kl=document.documentMode);var zh=Xt&&"TextEvent"in window&&!Kl,wu=Xt&&(!Mr||Kl&&8<Kl&&11>=Kl),zu=" ",Eu=!1;function Tu(e,t){switch(e){case"keyup":return wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function Eh(e,t){switch(e){case"compositionend":return Nu(t);case"keypress":return t.which!==32?null:(Eu=!0,zu);case"textInput":return e=t.data,e===zu&&Eu?null:e;default:return null}}function Th(e,t){if(ol)return e==="compositionend"||!Mr&&Tu(e,t)?(e=xu(),Jn=Nr=ua=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wu&&t.locale!=="ko"?null:t.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nh[e.type]:t==="textarea"}function Ru(e,t,a,l){il?rl?rl.push(l):rl=[l]:il=l,t=Yi(t,"onChange"),0<t.length&&(a=new $n("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Jl=null,Fl=null;function Ah(e){ff(e,0)}function Pn(e){var t=Gl(e);if(su(t))return e}function Cu(e,t){if(e==="change")return t}var Du=!1;if(Xt){var Or;if(Xt){var _r="oninput"in document;if(!_r){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),_r=typeof Mu.oninput=="function"}Or=_r}else Or=!1;Du=Or&&(!document.documentMode||9<document.documentMode)}function Ou(){Jl&&(Jl.detachEvent("onpropertychange",_u),Fl=Jl=null)}function _u(e){if(e.propertyName==="value"&&Pn(Fl)){var t=[];Ru(t,Fl,e,zr(e)),yu(Ah,t)}}function Rh(e,t,a){e==="focusin"?(Ou(),Jl=t,Fl=a,Jl.attachEvent("onpropertychange",_u)):e==="focusout"&&Ou()}function Ch(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(Fl)}function Dh(e,t){if(e==="click")return Pn(t)}function Mh(e,t){if(e==="input"||e==="change")return Pn(t)}function Oh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Oh;function Wl(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!dr.call(t,n)||!ct(e[n],t[n]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lu(e,t){var a=Uu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Uu(a)}}function Hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zn(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _h=Xt&&"documentMode"in document&&11>=document.documentMode,cl=null,Lr=null,$l=null,Hr=!1;function ku(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hr||cl==null||cl!==Zn(l)||(l=cl,"selectionStart"in l&&Ur(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$l&&Wl($l,l)||($l=l,l=Yi(Lr,"onSelect"),0<l.length&&(t=new $n("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=cl)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ul={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},qr={},Bu={};Xt&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function Ha(e){if(qr[e])return qr[e];if(!ul[e])return e;var t=ul[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Bu)return qr[e]=t[a];return e}var Yu=Ha("animationend"),Gu=Ha("animationiteration"),Xu=Ha("animationstart"),Uh=Ha("transitionrun"),Lh=Ha("transitionstart"),Hh=Ha("transitioncancel"),Qu=Ha("transitionend"),Vu=new Map,kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kr.push("scrollEnd");function Rt(e,t){Vu.set(e,t),_a(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],sl=0,Br=0;function ti(){for(var e=sl,t=Br=sl=0;t<e;){var a=vt[t];vt[t++]=null;var l=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];if(vt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&Zu(a,n,i)}}function ai(e,t,a,l){vt[sl++]=e,vt[sl++]=t,vt[sl++]=a,vt[sl++]=l,Br|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Yr(e,t,a,l){return ai(e,t,a,l),li(e)}function qa(e,t){return ai(e,null,null,t),li(e)}function Zu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ot(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function li(e){if(50<bn)throw bn=0,$o=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var dl={};function qh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,a,l){return new qh(e,t,a,l)}function Gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var a=e.alternate;return a===null?(a=ut(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ku(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")Gr(e)&&(c=1);else if(typeof e=="string")c=Xp(e,a,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ke:return e=ut(31,a,t,n),e.elementType=Ke,e.lanes=i,e;case B:return ka(a.children,n,i,t);case L:c=8,n|=24;break;case K:return e=ut(12,a,t,n|2),e.elementType=K,e.lanes=i,e;case be:return e=ut(13,a,t,n),e.elementType=be,e.lanes=i,e;case Te:return e=ut(19,a,t,n),e.elementType=Te,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:c=10;break e;case I:c=9;break e;case ve:c=11;break e;case W:c=14;break e;case Ce:c=16,l=null;break e}c=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=ut(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function ka(e,t,a,l){return e=ut(7,e,l,t),e.lanes=a,e}function Xr(e,t,a){return e=ut(6,e,null,t),e.lanes=a,e}function Ju(e){var t=ut(18,null,null,0);return t.stateNode=e,t}function Qr(e,t,a){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fu=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=Fu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Jc(t)},Fu.set(e,t),t)}return{value:e,source:t,stack:Jc(t)}}var fl=[],ml=0,ii=null,Il=0,jt=[],St=0,sa=null,Ut=1,Lt="";function Vt(e,t){fl[ml++]=Il,fl[ml++]=ii,ii=e,Il=t}function Wu(e,t,a){jt[St++]=Ut,jt[St++]=Lt,jt[St++]=sa,sa=e;var l=Ut;e=Lt;var n=32-ot(l)-1;l&=~(1<<n),a+=1;var i=32-ot(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Ut=1<<32-ot(t)+n|a<<n|l,Lt=i+e}else Ut=1<<i|a<<n|l,Lt=e}function Vr(e){e.return!==null&&(Vt(e,1),Wu(e,1,0))}function Zr(e){for(;e===ii;)ii=fl[--ml],fl[ml]=null,Il=fl[--ml],fl[ml]=null;for(;e===sa;)sa=jt[--St],jt[St]=null,Lt=jt[--St],jt[St]=null,Ut=jt[--St],jt[St]=null}function $u(e,t){jt[St++]=Ut,jt[St++]=Lt,jt[St++]=sa,Ut=t.id,Lt=t.overflow,sa=e}var Xe=null,we=null,ce=!1,da=null,wt=!1,Kr=Error(u(519));function fa(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(bt(t,e)),Kr}function Iu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ge]=e,t[Ie]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<Sn.length;a++)ne(Sn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),du(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),mu(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||gf(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||fa(e,!0)}function Pu(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:Xe=Xe.return}}function hl(e){if(e!==Xe)return!1;if(!ce)return Pu(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fc(e.type,e.memoizedProps)),a=!a),a&&we&&fa(e),Pu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));we=Ef(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));we=Ef(e)}else t===27?(t=we,Ta(e.type)?(e=yc,yc=null,we=e):we=t):we=Xe?Et(e.stateNode.nextSibling):null;return!0}function Ba(){we=Xe=null,ce=!1}function Jr(){var e=da;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),da=null),e}function Pl(e){da===null?da=[e]:da.push(e)}var Fr=v(null),Ya=null,Zt=null;function ma(e,t,a){q(Fr,t._currentValue),t._currentValue=a}function Kt(e){e._currentValue=Fr.current,_(Fr)}function Wr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function $r(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var h=0;h<t.length;h++)if(s.context===t[h]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Wr(i.return,a,e),l||(c=null);break e}i=s.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(u(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),Wr(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function pl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var s=n.type;ct(n.pendingProps.value,c.value)||(e!==null?e.push(s):e=[s])}}else if(n===fe.current){if(c=n.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Nn):e=[Nn])}n=n.return}e!==null&&$r(t,e,a,l),t.flags|=262144}function ri(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Ya=e,Zt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return es(Ya,e)}function oi(e,t){return Ya===null&&Ga(e),es(e,t)}function es(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Zt===null){if(e===null)throw Error(u(308));Zt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zt=Zt.next=t;return a}var kh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Bh=o.unstable_scheduleCallback,Yh=o.unstable_NormalPriority,Ue={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ir(){return{controller:new kh,data:new Map,refCount:0}}function en(e){e.refCount--,e.refCount===0&&Bh(Yh,function(){e.controller.abort()})}var tn=null,Pr=0,gl=0,yl=null;function Gh(e,t){if(tn===null){var a=tn=[];Pr=0,gl=lc(),yl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Pr++,t.then(ts,ts),t}function ts(){if(--Pr===0&&tn!==null){yl!==null&&(yl.status="fulfilled");var e=tn;tn=null,gl=0,yl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var as=C.S;C.S=function(e,t){kd=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gh(e,t),as!==null&&as(e,t)};var Xa=v(null);function eo(){var e=Xa.current;return e!==null?e:Se.pooledCache}function ci(e,t){t===null?q(Xa,Xa.current):q(Xa,t.pool)}function ls(){var e=eo();return e===null?null:{parent:Ue._currentValue,pool:e}}var xl=Error(u(460)),to=Error(u(474)),ui=Error(u(542)),si={then:function(){}};function ns(e){return e=e.status,e==="fulfilled"||e==="rejected"}function is(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,os(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,os(e),e}throw Va=t,xl}}function Qa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Va=a,xl):a}}var Va=null;function rs(){if(Va===null)throw Error(u(459));var e=Va;return Va=null,e}function os(e){if(e===xl||e===ui)throw Error(u(483))}var vl=null,an=0;function di(e){var t=an;return an+=1,vl===null&&(vl=[]),is(vl,e,t)}function ln(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function fi(e,t){throw t.$$typeof===U?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function cs(e){function t(j,y){if(e){var w=j.deletions;w===null?(j.deletions=[y],j.flags|=16):w.push(y)}}function a(j,y){if(!e)return null;for(;y!==null;)t(j,y),y=y.sibling;return null}function l(j){for(var y=new Map;j!==null;)j.key!==null?y.set(j.key,j):y.set(j.index,j),j=j.sibling;return y}function n(j,y){return j=Qt(j,y),j.index=0,j.sibling=null,j}function i(j,y,w){return j.index=w,e?(w=j.alternate,w!==null?(w=w.index,w<y?(j.flags|=67108866,y):w):(j.flags|=67108866,y)):(j.flags|=1048576,y)}function c(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function s(j,y,w,M){return y===null||y.tag!==6?(y=Xr(w,j.mode,M),y.return=j,y):(y=n(y,w),y.return=j,y)}function h(j,y,w,M){var V=w.type;return V===B?R(j,y,w.props.children,M,w.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ce&&Qa(V)===y.type)?(y=n(y,w.props),ln(y,w),y.return=j,y):(y=ni(w.type,w.key,w.props,null,j.mode,M),ln(y,w),y.return=j,y)}function z(j,y,w,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==w.containerInfo||y.stateNode.implementation!==w.implementation?(y=Qr(w,j.mode,M),y.return=j,y):(y=n(y,w.children||[]),y.return=j,y)}function R(j,y,w,M,V){return y===null||y.tag!==7?(y=ka(w,j.mode,M,V),y.return=j,y):(y=n(y,w),y.return=j,y)}function O(j,y,w){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Xr(""+y,j.mode,w),y.return=j,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case X:return w=ni(y.type,y.key,y.props,null,j.mode,w),ln(w,y),w.return=j,w;case Q:return y=Qr(y,j.mode,w),y.return=j,y;case Ce:return y=Qa(y),O(j,y,w)}if(_e(y)||Je(y))return y=ka(y,j.mode,w,null),y.return=j,y;if(typeof y.then=="function")return O(j,di(y),w);if(y.$$typeof===J)return O(j,oi(j,y),w);fi(j,y)}return null}function T(j,y,w,M){var V=y!==null?y.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return V!==null?null:s(j,y,""+w,M);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case X:return w.key===V?h(j,y,w,M):null;case Q:return w.key===V?z(j,y,w,M):null;case Ce:return w=Qa(w),T(j,y,w,M)}if(_e(w)||Je(w))return V!==null?null:R(j,y,w,M,null);if(typeof w.then=="function")return T(j,y,di(w),M);if(w.$$typeof===J)return T(j,y,oi(j,w),M);fi(j,w)}return null}function A(j,y,w,M,V){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return j=j.get(w)||null,s(y,j,""+M,V);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case X:return j=j.get(M.key===null?w:M.key)||null,h(y,j,M,V);case Q:return j=j.get(M.key===null?w:M.key)||null,z(y,j,M,V);case Ce:return M=Qa(M),A(j,y,w,M,V)}if(_e(M)||Je(M))return j=j.get(w)||null,R(y,j,M,V,null);if(typeof M.then=="function")return A(j,y,w,di(M),V);if(M.$$typeof===J)return A(j,y,w,oi(y,M),V);fi(y,M)}return null}function k(j,y,w,M){for(var V=null,ue=null,G=y,te=y=0,oe=null;G!==null&&te<w.length;te++){G.index>te?(oe=G,G=null):oe=G.sibling;var se=T(j,G,w[te],M);if(se===null){G===null&&(G=oe);break}e&&G&&se.alternate===null&&t(j,G),y=i(se,y,te),ue===null?V=se:ue.sibling=se,ue=se,G=oe}if(te===w.length)return a(j,G),ce&&Vt(j,te),V;if(G===null){for(;te<w.length;te++)G=O(j,w[te],M),G!==null&&(y=i(G,y,te),ue===null?V=G:ue.sibling=G,ue=G);return ce&&Vt(j,te),V}for(G=l(G);te<w.length;te++)oe=A(G,j,te,w[te],M),oe!==null&&(e&&oe.alternate!==null&&G.delete(oe.key===null?te:oe.key),y=i(oe,y,te),ue===null?V=oe:ue.sibling=oe,ue=oe);return e&&G.forEach(function(Da){return t(j,Da)}),ce&&Vt(j,te),V}function Z(j,y,w,M){if(w==null)throw Error(u(151));for(var V=null,ue=null,G=y,te=y=0,oe=null,se=w.next();G!==null&&!se.done;te++,se=w.next()){G.index>te?(oe=G,G=null):oe=G.sibling;var Da=T(j,G,se.value,M);if(Da===null){G===null&&(G=oe);break}e&&G&&Da.alternate===null&&t(j,G),y=i(Da,y,te),ue===null?V=Da:ue.sibling=Da,ue=Da,G=oe}if(se.done)return a(j,G),ce&&Vt(j,te),V;if(G===null){for(;!se.done;te++,se=w.next())se=O(j,se.value,M),se!==null&&(y=i(se,y,te),ue===null?V=se:ue.sibling=se,ue=se);return ce&&Vt(j,te),V}for(G=l(G);!se.done;te++,se=w.next())se=A(G,j,te,se.value,M),se!==null&&(e&&se.alternate!==null&&G.delete(se.key===null?te:se.key),y=i(se,y,te),ue===null?V=se:ue.sibling=se,ue=se);return e&&G.forEach(function(eg){return t(j,eg)}),ce&&Vt(j,te),V}function xe(j,y,w,M){if(typeof w=="object"&&w!==null&&w.type===B&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case X:e:{for(var V=w.key;y!==null;){if(y.key===V){if(V=w.type,V===B){if(y.tag===7){a(j,y.sibling),M=n(y,w.props.children),M.return=j,j=M;break e}}else if(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ce&&Qa(V)===y.type){a(j,y.sibling),M=n(y,w.props),ln(M,w),M.return=j,j=M;break e}a(j,y);break}else t(j,y);y=y.sibling}w.type===B?(M=ka(w.props.children,j.mode,M,w.key),M.return=j,j=M):(M=ni(w.type,w.key,w.props,null,j.mode,M),ln(M,w),M.return=j,j=M)}return c(j);case Q:e:{for(V=w.key;y!==null;){if(y.key===V)if(y.tag===4&&y.stateNode.containerInfo===w.containerInfo&&y.stateNode.implementation===w.implementation){a(j,y.sibling),M=n(y,w.children||[]),M.return=j,j=M;break e}else{a(j,y);break}else t(j,y);y=y.sibling}M=Qr(w,j.mode,M),M.return=j,j=M}return c(j);case Ce:return w=Qa(w),xe(j,y,w,M)}if(_e(w))return k(j,y,w,M);if(Je(w)){if(V=Je(w),typeof V!="function")throw Error(u(150));return w=V.call(w),Z(j,y,w,M)}if(typeof w.then=="function")return xe(j,y,di(w),M);if(w.$$typeof===J)return xe(j,y,oi(j,w),M);fi(j,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,y!==null&&y.tag===6?(a(j,y.sibling),M=n(y,w),M.return=j,j=M):(a(j,y),M=Xr(w,j.mode,M),M.return=j,j=M),c(j)):a(j,y)}return function(j,y,w,M){try{an=0;var V=xe(j,y,w,M);return vl=null,V}catch(G){if(G===xl||G===ui)throw G;var ue=ut(29,G,null,j.mode);return ue.lanes=M,ue.return=j,ue}}}var Za=cs(!0),us=cs(!1),ha=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(de&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=li(e),Zu(e,null,a),t}return ai(e,l,t,a),li(e)}function nn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,eu(e,a)}}function no(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var io=!1;function rn(){if(io){var e=yl;if(e!==null)throw e}}function on(e,t,a,l){io=!1;var n=e.updateQueue;ha=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var h=s,z=h.next;h.next=null,c===null?i=z:c.next=z,c=h;var R=e.alternate;R!==null&&(R=R.updateQueue,s=R.lastBaseUpdate,s!==c&&(s===null?R.firstBaseUpdate=z:s.next=z,R.lastBaseUpdate=h))}if(i!==null){var O=n.baseState;c=0,R=z=h=null,s=i;do{var T=s.lane&-536870913,A=T!==s.lane;if(A?(re&T)===T:(l&T)===T){T!==0&&T===gl&&(io=!0),R!==null&&(R=R.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var k=e,Z=s;T=t;var xe=a;switch(Z.tag){case 1:if(k=Z.payload,typeof k=="function"){O=k.call(xe,O,T);break e}O=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=Z.payload,T=typeof k=="function"?k.call(xe,O,T):k,T==null)break e;O=S({},O,T);break e;case 2:ha=!0}}T=s.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[T]:A.push(T))}else A={lane:T,tag:s.tag,payload:s.payload,callback:s.callback,next:null},R===null?(z=R=A,h=O):R=R.next=A,c|=T;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;A=s,s=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);R===null&&(h=O),n.baseState=h,n.firstBaseUpdate=z,n.lastBaseUpdate=R,i===null&&(n.shared.lanes=0),ja|=c,e.lanes=c,e.memoizedState=O}}function ss(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function ds(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ss(a[e],t)}var bl=v(null),mi=v(0);function fs(e,t){e=aa,q(mi,e),q(bl,t),aa=e|t.baseLanes}function ro(){q(mi,aa),q(bl,bl.current)}function oo(){aa=mi.current,_(bl),_(mi)}var st=v(null),zt=null;function ya(e){var t=e.alternate;q(Me,Me.current&1),q(st,e),zt===null&&(t===null||bl.current!==null||t.memoizedState!==null)&&(zt=e)}function co(e){q(Me,Me.current),q(st,e),zt===null&&(zt=e)}function ms(e){e.tag===22?(q(Me,Me.current),q(st,e),zt===null&&(zt=e)):xa()}function xa(){q(Me,Me.current),q(st,st.current)}function dt(e){_(st),zt===e&&(zt=null),_(Me)}var Me=v(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pc(a)||gc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,ee=null,ge=null,Le=null,pi=!1,jl=!1,Ka=!1,gi=0,cn=0,Sl=null,Qh=0;function Ae(){throw Error(u(321))}function uo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ct(e[a],t[a]))return!1;return!0}function so(e,t,a,l,n,i){return Jt=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Ws:To,Ka=!1,i=a(l,n),Ka=!1,jl&&(i=ps(t,a,l,n)),hs(e),i}function hs(e){C.H=dn;var t=ge!==null&&ge.next!==null;if(Jt=0,Le=ge=ee=null,pi=!1,cn=0,Sl=null,t)throw Error(u(300));e===null||He||(e=e.dependencies,e!==null&&ri(e)&&(He=!0))}function ps(e,t,a,l){ee=e;var n=0;do{if(jl&&(Sl=null),cn=0,jl=!1,25<=n)throw Error(u(301));if(n+=1,Le=ge=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=$s,i=t(a,l)}while(jl);return i}function Vh(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?un(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(ee.flags|=1024),t}function fo(){var e=gi!==0;return gi=0,e}function mo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ho(e){if(pi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}pi=!1}Jt=0,Le=ge=ee=null,jl=!1,cn=gi=0,Sl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ee.memoizedState=Le=e:Le=Le.next=e,Le}function Oe(){if(ge===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=Le===null?ee.memoizedState:Le.next;if(t!==null)Le=t,ge=e;else{if(e===null)throw ee.alternate===null?Error(u(467)):Error(u(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Le===null?ee.memoizedState=Le=e:Le=Le.next=e}return Le}function yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function un(e){var t=cn;return cn+=1,Sl===null&&(Sl=[]),e=is(Sl,e,t),t=ee,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Ws:To),e}function xi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return un(e);if(e.$$typeof===J)return Qe(e)}throw Error(u(438,String(e)))}function po(e){var t=null,a=ee.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=yi(),ee.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ot;return t.index++,a}function Ft(e,t){return typeof t=="function"?t(e):t}function vi(e){var t=Oe();return go(t,ge,e)}function go(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=c=null,h=null,z=t,R=!1;do{var O=z.lane&-536870913;if(O!==z.lane?(re&O)===O:(Jt&O)===O){var T=z.revertLane;if(T===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),O===gl&&(R=!0);else if((Jt&T)===T){z=z.next,T===gl&&(R=!0);continue}else O={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},h===null?(s=h=O,c=i):h=h.next=O,ee.lanes|=T,ja|=T;O=z.action,Ka&&a(i,O),i=z.hasEagerState?z.eagerState:a(i,O)}else T={lane:O,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},h===null?(s=h=T,c=i):h=h.next=T,ee.lanes|=O,ja|=O;z=z.next}while(z!==null&&z!==t);if(h===null?c=i:h.next=s,!ct(i,e.memoizedState)&&(He=!0,R&&(a=yl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function yo(e){var t=Oe(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ct(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function gs(e,t,a){var l=ee,n=Oe(),i=ce;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var c=!ct((ge||n).memoizedState,a);if(c&&(n.memoizedState=a,He=!0),n=n.queue,bo(vs.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,wl(9,{destroy:void 0},xs.bind(null,l,n,a,t),null),Se===null)throw Error(u(349));i||(Jt&127)!==0||ys(l,t,a)}return a}function ys(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ee.updateQueue,t===null?(t=yi(),ee.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function xs(e,t,a,l){t.value=a,t.getSnapshot=l,bs(t)&&js(e)}function vs(e,t,a){return a(function(){bs(t)&&js(e)})}function bs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ct(e,a)}catch{return!0}}function js(e){var t=qa(e,2);t!==null&&nt(t,e,2)}function xo(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Ka){oa(!0);try{a()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function Ss(e,t,a,l){return e.baseState=a,go(e,ge,typeof l=="function"?l:Ft)}function Zh(e,t,a,l,n){if(Si(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};C.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,ws(t,i)):(i.next=a.next,t.pending=a.next=i)}}function ws(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=C.T,c={};C.T=c;try{var s=a(n,l),h=C.S;h!==null&&h(c,s),zs(e,t,s)}catch(z){vo(e,t,z)}finally{i!==null&&c.types!==null&&(i.types=c.types),C.T=i}}else try{i=a(n,l),zs(e,t,i)}catch(z){vo(e,t,z)}}function zs(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Es(e,t,l)},function(l){return vo(e,t,l)}):Es(e,t,a)}function Es(e,t,a){t.status="fulfilled",t.value=a,Ts(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ws(e,a)))}function vo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ts(t),t=t.next;while(t!==l)}e.action=null}function Ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ns(e,t){return t}function As(e,t){if(ce){var a=Se.formState;if(a!==null){e:{var l=ee;if(ce){if(we){t:{for(var n=we,i=wt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Et(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){we=Et(n.nextSibling),l=n.data==="F!";break e}}fa(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:t},a.queue=l,a=Ks.bind(null,ee,l),l.dispatch=a,l=xo(!1),i=Eo.bind(null,ee,!1,l.queue),l=$e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Zh.bind(null,ee,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Rs(e){var t=Oe();return Cs(t,ge,e)}function Cs(e,t,a){if(t=go(e,t,Ns)[0],e=vi(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=un(t)}catch(c){throw c===xl?ui:c}else l=t;t=Oe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ee.flags|=2048,wl(9,{destroy:void 0},Kh.bind(null,n,a),null)),[l,i,e]}function Kh(e,t){e.action=t}function Ds(e){var t=Oe(),a=ge;if(a!==null)return Cs(t,a,e);Oe(),t=t.memoizedState,a=Oe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function wl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ee.updateQueue,t===null&&(t=yi(),ee.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ms(){return Oe().memoizedState}function bi(e,t,a,l){var n=$e();ee.flags|=e,n.memoizedState=wl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ji(e,t,a,l){var n=Oe();l=l===void 0?null:l;var i=n.memoizedState.inst;ge!==null&&l!==null&&uo(l,ge.memoizedState.deps)?n.memoizedState=wl(t,i,a,l):(ee.flags|=e,n.memoizedState=wl(1|t,i,a,l))}function Os(e,t){bi(8390656,8,e,t)}function bo(e,t){ji(2048,8,e,t)}function Jh(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=yi(),ee.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function _s(e){var t=Oe().memoizedState;return Jh({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Us(e,t){return ji(4,2,e,t)}function Ls(e,t){return ji(4,4,e,t)}function Hs(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qs(e,t,a){a=a!=null?a.concat([e]):null,ji(4,4,Hs.bind(null,t,e),a)}function jo(){}function ks(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&uo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Bs(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&uo(t,l[1]))return l[0];if(l=e(),Ka){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l}function So(e,t,a){return a===void 0||(Jt&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Yd(),ee.lanes|=e,ja|=e,a)}function Ys(e,t,a,l){return ct(a,t)?a:bl.current!==null?(e=So(e,a,l),ct(e,t)||(He=!0),e):(Jt&42)===0||(Jt&1073741824)!==0&&(re&261930)===0?(He=!0,e.memoizedState=a):(e=Yd(),ee.lanes|=e,ja|=e,t)}function Gs(e,t,a,l,n){var i=H.p;H.p=i!==0&&8>i?i:8;var c=C.T,s={};C.T=s,Eo(e,!1,t,a);try{var h=n(),z=C.S;if(z!==null&&z(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var R=Xh(h,l);sn(e,t,R,ht(e))}else sn(e,t,l,ht(e))}catch(O){sn(e,t,{then:function(){},status:"rejected",reason:O},ht())}finally{H.p=i,c!==null&&s.types!==null&&(c.types=s.types),C.T=c}}function Fh(){}function wo(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=Xs(e).queue;Gs(e,n,t,F,a===null?Fh:function(){return Qs(e),a(l)})}function Xs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qs(e){var t=Xs(e);t.next===null&&(t=e.alternate.memoizedState),sn(e,t.next.queue,{},ht())}function zo(){return Qe(Nn)}function Vs(){return Oe().memoizedState}function Zs(){return Oe().memoizedState}function Wh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ht();e=pa(a);var l=ga(t,e,a);l!==null&&(nt(l,t,a),nn(l,t,a)),t={cache:Ir()},e.payload=t;return}t=t.return}}function $h(e,t,a){var l=ht();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Si(e)?Js(t,a):(a=Yr(e,t,a,l),a!==null&&(nt(a,e,l),Fs(a,t,l)))}function Ks(e,t,a){var l=ht();sn(e,t,a,l)}function sn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Si(e))Js(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,s=i(c,a);if(n.hasEagerState=!0,n.eagerState=s,ct(s,c))return ai(e,t,n,0),Se===null&&ti(),!1}catch{}if(a=Yr(e,t,n,l),a!==null)return nt(a,e,l),Fs(a,t,l),!0}return!1}function Eo(e,t,a,l){if(l={lane:2,revertLane:lc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Si(e)){if(t)throw Error(u(479))}else t=Yr(e,a,l,2),t!==null&&nt(t,e,2)}function Si(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Js(e,t){jl=pi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Fs(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,eu(e,a)}}var dn={readContext:Qe,use:xi,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};dn.useEffectEvent=Ae;var Ws={readContext:Qe,use:xi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Os,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,bi(4194308,4,Hs.bind(null,t,e),a)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){bi(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Ka){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var n=a(t);if(Ka){oa(!0);try{a(t)}finally{oa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=$h.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=xo(e);var t=e.queue,a=Ks.bind(null,ee,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:jo,useDeferredValue:function(e,t){var a=$e();return So(a,e,t)},useTransition:function(){var e=xo(!1);return e=Gs.bind(null,ee,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ee,n=$e();if(ce){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Se===null)throw Error(u(349));(re&127)!==0||ys(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Os(vs.bind(null,l,i,e),[e]),l.flags|=2048,wl(9,{destroy:void 0},xs.bind(null,l,i,a,t),null),a},useId:function(){var e=$e(),t=Se.identifierPrefix;if(ce){var a=Lt,l=Ut;a=(l&~(1<<32-ot(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=gi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Qh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zo,useFormState:As,useActionState:As,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Eo.bind(null,ee,!0,a),a.dispatch=t,[e,t]},useMemoCache:po,useCacheRefresh:function(){return $e().memoizedState=Wh.bind(null,ee)},useEffectEvent:function(e){var t=$e(),a={impl:e};return t.memoizedState=a,function(){if((de&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},To={readContext:Qe,use:xi,useCallback:ks,useContext:Qe,useEffect:bo,useImperativeHandle:qs,useInsertionEffect:Us,useLayoutEffect:Ls,useMemo:Bs,useReducer:vi,useRef:Ms,useState:function(){return vi(Ft)},useDebugValue:jo,useDeferredValue:function(e,t){var a=Oe();return Ys(a,ge.memoizedState,e,t)},useTransition:function(){var e=vi(Ft)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:un(e),t]},useSyncExternalStore:gs,useId:Vs,useHostTransitionStatus:zo,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){var a=Oe();return Ss(a,ge,e,t)},useMemoCache:po,useCacheRefresh:Zs};To.useEffectEvent=_s;var $s={readContext:Qe,use:xi,useCallback:ks,useContext:Qe,useEffect:bo,useImperativeHandle:qs,useInsertionEffect:Us,useLayoutEffect:Ls,useMemo:Bs,useReducer:yo,useRef:Ms,useState:function(){return yo(Ft)},useDebugValue:jo,useDeferredValue:function(e,t){var a=Oe();return ge===null?So(a,e,t):Ys(a,ge.memoizedState,e,t)},useTransition:function(){var e=yo(Ft)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:un(e),t]},useSyncExternalStore:gs,useId:Vs,useHostTransitionStatus:zo,useFormState:Ds,useActionState:Ds,useOptimistic:function(e,t){var a=Oe();return ge!==null?Ss(a,ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:po,useCacheRefresh:Zs};$s.useEffectEvent=_s;function No(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:S({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ao={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ht(),n=pa(l);n.payload=t,a!=null&&(n.callback=a),t=ga(e,n,l),t!==null&&(nt(t,e,l),nn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ht(),n=pa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ga(e,n,l),t!==null&&(nt(t,e,l),nn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ht(),l=pa(a);l.tag=2,t!=null&&(l.callback=t),t=ga(e,l,a),t!==null&&(nt(t,e,a),nn(t,e,a))}};function Is(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!Wl(a,l)||!Wl(n,i):!0}function Ps(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=S({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ed(e){ei(e)}function td(e){console.error(e)}function ad(e){ei(e)}function wi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ld(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ro(e,t,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){wi(e,t)},a}function nd(e){return e=pa(e),e.tag=3,e}function id(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){ld(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){ld(t,a,l),typeof n!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Ih(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&pl(t,a,n,!0),a=st.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?Ui():a.alternate===null&&Re===0&&(Re=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===si?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ec(e,l,n)),!1;case 22:return a.flags|=65536,l===si?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ec(e,l,n)),!1}throw Error(u(435,a.tag))}return ec(e,l,n),Ui(),!1}if(ce)return t=st.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Kr&&(e=Error(u(422),{cause:l}),Pl(bt(e,a)))):(l!==Kr&&(t=Error(u(423),{cause:l}),Pl(bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=bt(l,a),n=Ro(e.stateNode,l,n),no(e,n),Re!==4&&(Re=2)),!1;var i=Error(u(520),{cause:l});if(i=bt(i,a),vn===null?vn=[i]:vn.push(i),Re!==4&&(Re=2),t===null)return!0;l=bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Ro(a.stateNode,l,e),no(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Sa===null||!Sa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=nd(n),id(n,e,a,l),no(a,n),!1}a=a.return}while(a!==null);return!1}var Co=Error(u(461)),He=!1;function Ve(e,t,a,l){t.child=e===null?us(t,null,a,l):Za(t,e.child,a,l)}function rd(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var s in l)s!=="ref"&&(c[s]=l[s])}else c=l;return Ga(t),l=so(e,t,a,c,i,n),s=fo(),e!==null&&!He?(mo(e,t,n),Wt(e,t,n)):(ce&&s&&Vr(t),t.flags|=1,Ve(e,t,l,n),t.child)}function od(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Gr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,cd(e,t,i,l,n)):(e=ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!qo(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:Wl,a(c,l)&&e.ref===t.ref)return Wt(e,t,n)}return t.flags|=1,e=Qt(i,l),e.ref=t.ref,e.return=t,t.child=e}function cd(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Wl(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,qo(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Wt(e,t,n)}return Do(e,t,a,l,n)}function ud(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return sd(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ci(t,i!==null?i.cachePool:null),i!==null?fs(t,i):ro(),ms(t);else return l=t.lanes=536870912,sd(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ci(t,i.cachePool),fs(t,i),xa(),t.memoizedState=null):(e!==null&&ci(t,null),ro(),xa());return Ve(e,t,n,a),t.child}function fn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sd(e,t,a,l,n){var i=eo();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ci(t,null),ro(),ms(t),e!==null&&pl(e,t,l,!0),t.childLanes=n,null}function zi(e,t){return t=Ti({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dd(e,t,a){return Za(t,e.child,null,a),e=zi(t,t.pendingProps),e.flags|=2,dt(t),t.memoizedState=null,e}function Ph(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(l.mode==="hidden")return e=zi(t,l),t.lanes=536870912,fn(null,e);if(co(t),(e=we)?(e=zf(e,wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:Ut,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=Ju(e),a.return=t,t.child=a,Xe=t,we=null)):e=null,e===null)throw fa(t);return t.lanes=536870912,null}return zi(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(co(t),n)if(t.flags&256)t.flags&=-257,t=dd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(He||pl(e,t,a,!1),n=(a&e.childLanes)!==0,He||n){if(l=Se,l!==null&&(c=tu(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,qa(e,c),nt(l,e,c),Co;Ui(),t=dd(e,t,a)}else e=i.treeContext,we=Et(c.nextSibling),Xe=t,ce=!0,da=null,wt=!1,e!==null&&$u(t,e),t=zi(t,l),t.flags|=4096;return t}return e=Qt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ei(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Do(e,t,a,l,n){return Ga(t),a=so(e,t,a,l,void 0,n),l=fo(),e!==null&&!He?(mo(e,t,n),Wt(e,t,n)):(ce&&l&&Vr(t),t.flags|=1,Ve(e,t,a,n),t.child)}function fd(e,t,a,l,n,i){return Ga(t),t.updateQueue=null,a=ps(t,l,a,n),hs(e),l=fo(),e!==null&&!He?(mo(e,t,i),Wt(e,t,i)):(ce&&l&&Vr(t),t.flags|=1,Ve(e,t,a,i),t.child)}function md(e,t,a,l,n){if(Ga(t),t.stateNode===null){var i=dl,c=a.contextType;typeof c=="object"&&c!==null&&(i=Qe(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ao,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ao(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Qe(c):dl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(No(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Ao.enqueueReplaceState(i,i.state,null),on(t,l,i,n),rn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,h=Ja(a,s);i.props=h;var z=i.context,R=a.contextType;c=dl,typeof R=="object"&&R!==null&&(c=Qe(R));var O=a.getDerivedStateFromProps;R=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||z!==c)&&Ps(t,i,l,c),ha=!1;var T=t.memoizedState;i.state=T,on(t,l,i,n),rn(),z=t.memoizedState,s||T!==z||ha?(typeof O=="function"&&(No(t,a,O,l),z=t.memoizedState),(h=ha||Is(t,a,h,l,T,z,c))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=z),i.props=l,i.state=z,i.context=c,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,lo(e,t),c=t.memoizedProps,R=Ja(a,c),i.props=R,O=t.pendingProps,T=i.context,z=a.contextType,h=dl,typeof z=="object"&&z!==null&&(h=Qe(z)),s=a.getDerivedStateFromProps,(z=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==O||T!==h)&&Ps(t,i,l,h),ha=!1,T=t.memoizedState,i.state=T,on(t,l,i,n),rn();var A=t.memoizedState;c!==O||T!==A||ha||e!==null&&e.dependencies!==null&&ri(e.dependencies)?(typeof s=="function"&&(No(t,a,s,l),A=t.memoizedState),(R=ha||Is(t,a,R,l,T,A,h)||e!==null&&e.dependencies!==null&&ri(e.dependencies))?(z||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=h,l=R):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ei(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Za(t,e.child,null,n),t.child=Za(t,null,a,n)):Ve(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Wt(e,t,n),e}function hd(e,t,a,l){return Ba(),t.flags|=256,Ve(e,t,a,l),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oo(e){return{baseLanes:e,cachePool:ls()}}function _o(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=mt),e}function pd(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(n?ya(t):xa(),(e=we)?(e=zf(e,wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:Ut,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=Ju(e),a.return=t,t.child=a,Xe=t,we=null)):e=null,e===null)throw fa(t);return gc(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(xa(),n=t.mode,s=Ti({mode:"hidden",children:s},n),l=ka(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=Oo(a),l.childLanes=_o(e,c,a),t.memoizedState=Mo,fn(null,l)):(ya(t),Uo(t,s))}var h=e.memoizedState;if(h!==null&&(s=h.dehydrated,s!==null)){if(i)t.flags&256?(ya(t),t.flags&=-257,t=Lo(e,t,a)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,t=null):(xa(),s=l.fallback,n=t.mode,l=Ti({mode:"visible",children:l.children},n),s=ka(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Za(t,e.child,null,a),l=t.child,l.memoizedState=Oo(a),l.childLanes=_o(e,c,a),t.memoizedState=Mo,t=fn(null,l));else if(ya(t),gc(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var z=c.dgst;c=z,l=Error(u(419)),l.stack="",l.digest=c,Pl({value:l,source:null,stack:null}),t=Lo(e,t,a)}else if(He||pl(e,t,a,!1),c=(a&e.childLanes)!==0,He||c){if(c=Se,c!==null&&(l=tu(c,a),l!==0&&l!==h.retryLane))throw h.retryLane=l,qa(e,l),nt(c,e,l),Co;pc(s)||Ui(),t=Lo(e,t,a)}else pc(s)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,we=Et(s.nextSibling),Xe=t,ce=!0,da=null,wt=!1,e!==null&&$u(t,e),t=Uo(t,l.children),t.flags|=4096);return t}return n?(xa(),s=l.fallback,n=t.mode,h=e.child,z=h.sibling,l=Qt(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,z!==null?s=Qt(z,s):(s=ka(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,fn(null,l),l=t.child,s=e.child.memoizedState,s===null?s=Oo(a):(n=s.cachePool,n!==null?(h=Ue._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=ls(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=_o(e,c,a),t.memoizedState=Mo,fn(e.child,l)):(ya(t),a=e.child,e=a.sibling,a=Qt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Uo(e,t){return t=Ti({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ti(e,t){return e=ut(22,e,null,t),e.lanes=0,e}function Lo(e,t,a){return Za(t,e.child,null,a),e=Uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Wr(e.return,t,a)}function Ho(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function yd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=Me.current,s=(c&2)!==0;if(s?(c=c&1|2,t.flags|=128):c&=1,q(Me,c),Ve(e,t,l,a),l=ce?Il:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,a,t);else if(e.tag===19)gd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&hi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Ho(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&hi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Ho(t,!0,a,null,i,l);break;case"together":Ho(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ja|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function qo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ri(e)))}function ep(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),ma(t,Ue,e.memoizedState.cache),Ba();break;case 27:case 5:Hl(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?pd(e,t,a):(ya(t),e=Wt(e,t,a),e!==null?e.sibling:null);ya(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(pl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return yd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(Me,Me.current),l)break;return null;case 22:return t.lanes=0,ud(e,t,a,t.pendingProps);case 24:ma(t,Ue,e.memoizedState.cache)}return Wt(e,t,a)}function xd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!qo(e,a)&&(t.flags&128)===0)return He=!1,ep(e,t,a);He=(e.flags&131072)!==0}else He=!1,ce&&(t.flags&1048576)!==0&&Wu(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Qa(t.elementType),t.type=e,typeof e=="function")Gr(e)?(l=Ja(e,l),t.tag=1,t=md(null,t,e,l,a)):(t.tag=0,t=Do(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ve){t.tag=11,t=rd(null,t,e,l,a);break e}else if(n===W){t.tag=14,t=od(null,t,e,l,a);break e}}throw t=gt(e)||e,Error(u(306,t,""))}}return t;case 0:return Do(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ja(l,t.pendingProps),md(e,t,l,n,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,lo(e,t),on(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ma(t,Ue,l),l!==i.cache&&$r(t,[Ue],a,!0),rn(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=hd(e,t,l,a);break e}else if(l!==n){n=bt(Error(u(424)),t),Pl(n),t=hd(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=Et(e.firstChild),Xe=t,ce=!0,da=null,wt=!0,a=us(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ba(),l===n){t=Wt(e,t,a);break e}Ve(e,t,l,a)}t=t.child}return t;case 26:return Ei(e,t),e===null?(a=Cf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,l=Gi(ae.current).createElement(a),l[Ge]=t,l[Ie]=e,Ze(l,a,e),Be(l),t.stateNode=l):t.memoizedState=Cf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Hl(t),e===null&&ce&&(l=t.stateNode=Nf(t.type,t.pendingProps,ae.current),Xe=t,wt=!0,n=we,Ta(t.type)?(yc=n,we=Et(l.firstChild)):we=n),Ve(e,t,t.pendingProps.children,a),Ei(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((n=l=we)&&(l=Cp(l,t.type,t.pendingProps,wt),l!==null?(t.stateNode=l,Xe=t,we=Et(l.firstChild),wt=!1,n=!0):n=!1),n||fa(t)),Hl(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,fc(n,i)?l=null:c!==null&&fc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=so(e,t,Vh,null,null,a),Nn._currentValue=n),Ei(e,t),Ve(e,t,l,a),t.child;case 6:return e===null&&ce&&((e=a=we)&&(a=Dp(a,t.pendingProps,wt),a!==null?(t.stateNode=a,Xe=t,we=null,e=!0):e=!1),e||fa(t)),null;case 13:return pd(e,t,a);case 4:return We(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Za(t,null,l,a):Ve(e,t,l,a),t.child;case 11:return rd(e,t,t.type,t.pendingProps,a);case 7:return Ve(e,t,t.pendingProps,a),t.child;case 8:return Ve(e,t,t.pendingProps.children,a),t.child;case 12:return Ve(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ma(t,t.type,l.value),Ve(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ga(t),n=Qe(n),l=l(n),t.flags|=1,Ve(e,t,l,a),t.child;case 14:return od(e,t,t.type,t.pendingProps,a);case 15:return cd(e,t,t.type,t.pendingProps,a);case 19:return yd(e,t,a);case 31:return Ph(e,t,a);case 22:return ud(e,t,a,t.pendingProps);case 24:return Ga(t),l=Qe(Ue),e===null?(n=eo(),n===null&&(n=Se,i=Ir(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ao(t),ma(t,Ue,n)):((e.lanes&a)!==0&&(lo(e,t),on(t,null,null,a),rn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ma(t,Ue,l)):(l=i.cache,ma(t,Ue,l),l!==n.cache&&$r(t,[Ue],a,!0))),Ve(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function $t(e){e.flags|=4}function ko(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw Va=si,to}else e.flags&=-16777217}function vd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uf(t))if(Vd())e.flags|=8192;else throw Va=si,to}function Ni(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ic():536870912,e.lanes|=t,Nl|=t)}function mn(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function tp(e,t,a){var l=t.pendingProps;switch(Zr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Kt(Ue),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(hl(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jr())),ze(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?($t(t),i!==null?(ze(t),vd(t,i)):(ze(t),ko(t,n,null,l,a))):i?i!==e.memoizedState?($t(t),ze(t),vd(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&$t(t),ze(t),ko(t,n,e,l,a)),null;case 27:if(qn(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return ze(t),null}e=Y.current,hl(t)?Iu(t):(e=Nf(n,l,a),t.stateNode=e,$t(t))}return ze(t),null;case 5:if(qn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return ze(t),null}if(i=Y.current,hl(t))Iu(t);else{var c=Gi(ae.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Ge]=t,i[Ie]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Ze(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&$t(t)}}return ze(t),ko(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ae.current,hl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Xe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||gf(e.nodeValue,a)),e||fa(t,!0)}else e=Gi(e).createTextNode(l),e[Ge]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=hl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ge]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=Jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(dt(t),t):(dt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return ze(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=hl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[Ge]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(dt(t),t):(dt(t),null)}return dt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ni(t,t.updateQueue),ze(t),null);case 4:return De(),e===null&&oc(t.stateNode.containerInfo),ze(t),null;case 10:return Kt(t.type),ze(t),null;case 19:if(_(Me),l=t.memoizedState,l===null)return ze(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)mn(l,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=hi(e),i!==null){for(t.flags|=128,mn(l,!1),e=i.updateQueue,t.updateQueue=e,Ni(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ku(a,e),a=a.sibling;return q(Me,Me.current&1|2),ce&&Vt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&it()>Mi&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304)}else{if(!n)if(e=hi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ni(t,e),mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ce)return ze(t),null}else 2*it()-l.renderingStartTime>Mi&&a!==536870912&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=it(),e.sibling=null,a=Me.current,q(Me,n?a&1|2:a&1),ce&&Vt(t,l.treeForkCount),e):(ze(t),null);case 22:case 23:return dt(t),oo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Ni(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&_(Xa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(Ue),ze(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function ap(e,t){switch(Zr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(Ue),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qn(t),null;case 31:if(t.memoizedState!==null){if(dt(t),t.alternate===null)throw Error(u(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Me),null;case 4:return De(),null;case 10:return Kt(t.type),null;case 22:case 23:return dt(t),oo(),e!==null&&_(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(Ue),null;case 25:return null;default:return null}}function bd(e,t){switch(Zr(t),t.tag){case 3:Kt(Ue),De();break;case 26:case 27:case 5:qn(t);break;case 4:De();break;case 31:t.memoizedState!==null&&dt(t);break;case 13:dt(t);break;case 19:_(Me);break;case 10:Kt(t.type);break;case 22:case 23:dt(t),oo(),e!==null&&_(Xa);break;case 24:Kt(Ue)}}function hn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(s){he(t,t.return,s)}}function va(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,n=t;var h=a,z=s;try{z()}catch(R){he(n,h,R)}}}l=l.next}while(l!==i)}}catch(R){he(t,t.return,R)}}function jd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ds(t,a)}catch(l){he(e,e.return,l)}}}function Sd(e,t,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function pn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){he(e,t,n)}}function Ht(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){he(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){he(e,t,n)}else a.current=null}function wd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){he(e,e.return,n)}}function Bo(e,t,a){try{var l=e.stateNode;zp(l,e.type,a,t),l[Ie]=t}catch(n){he(e,e.return,n)}}function zd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Yo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Go(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Go(e,t,a),e=e.sibling;e!==null;)Go(e,t,a),e=e.sibling}function Ai(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ai(e,t,a),e=e.sibling;e!==null;)Ai(e,t,a),e=e.sibling}function Ed(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ze(t,l,a),t[Ge]=e,t[Ie]=a}catch(i){he(e,e.return,i)}}var It=!1,qe=!1,Xo=!1,Td=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function lp(e,t){if(e=e.containerInfo,sc=Fi,e=qu(e),Ur(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,s=-1,h=-1,z=0,R=0,O=e,T=null;t:for(;;){for(var A;O!==a||n!==0&&O.nodeType!==3||(s=c+n),O!==i||l!==0&&O.nodeType!==3||(h=c+l),O.nodeType===3&&(c+=O.nodeValue.length),(A=O.firstChild)!==null;)T=O,O=A;for(;;){if(O===e)break t;if(T===a&&++z===n&&(s=c),T===i&&++R===l&&(h=c),(A=O.nextSibling)!==null)break;O=T,T=O.parentNode}O=A}a=s===-1||h===-1?null:{start:s,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(dc={focusedElem:e,selectionRange:a},Fi=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var k=Ja(a.type,n);e=l.getSnapshotBeforeUpdate(k,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(Z){he(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)hc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function Nd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),l&4&&hn(5,a);break;case 1:if(ea(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){he(a,a.return,c)}else{var n=Ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){he(a,a.return,c)}}l&64&&jd(a),l&512&&pn(a,a.return);break;case 3:if(ea(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ds(e,t)}catch(c){he(a,a.return,c)}}break;case 27:t===null&&l&4&&Ed(a);case 26:case 5:ea(e,a),t===null&&l&4&&wd(a),l&512&&pn(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),l&4&&Cd(e,a);break;case 13:ea(e,a),l&4&&Dd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fp.bind(null,a),Mp(e,a))));break;case 22:if(l=a.memoizedState!==null||It,!l){t=t!==null&&t.memoizedState!==null||qe,n=It;var i=qe;It=l,(qe=t)&&!i?ta(e,a,(a.subtreeFlags&8772)!==0):ea(e,a),It=n,qe=i}break;case 30:break;default:ea(e,a)}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,et=!1;function Pt(e,t,a){for(a=a.child;a!==null;)Rd(e,t,a),a=a.sibling}function Rd(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(ql,a)}catch{}switch(a.tag){case 26:qe||Ht(a,t),Pt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Ht(a,t);var l=Ee,n=et;Ta(a.type)&&(Ee=a.stateNode,et=!1),Pt(e,t,a),zn(a.stateNode),Ee=l,et=n;break;case 5:qe||Ht(a,t);case 6:if(l=Ee,n=et,Ee=null,Pt(e,t,a),Ee=l,et=n,Ee!==null)if(et)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(a.stateNode)}catch(i){he(a,t,i)}else try{Ee.removeChild(a.stateNode)}catch(i){he(a,t,i)}break;case 18:Ee!==null&&(et?(e=Ee,Sf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ul(e)):Sf(Ee,a.stateNode));break;case 4:l=Ee,n=et,Ee=a.stateNode.containerInfo,et=!0,Pt(e,t,a),Ee=l,et=n;break;case 0:case 11:case 14:case 15:va(2,a,t),qe||va(4,a,t),Pt(e,t,a);break;case 1:qe||(Ht(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Sd(a,t,l)),Pt(e,t,a);break;case 21:Pt(e,t,a);break;case 22:qe=(l=qe)||a.memoizedState!==null,Pt(e,t,a),qe=l;break;default:Pt(e,t,a)}}function Cd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ul(e)}catch(a){he(t,t.return,a)}}}function Dd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ul(e)}catch(a){he(t,t.return,a)}}function np(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Td),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Td),t;default:throw Error(u(435,e.tag))}}function Ri(e,t){var a=np(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=mp.bind(null,e,l);l.then(n,n)}})}function tt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,s=c;e:for(;s!==null;){switch(s.tag){case 27:if(Ta(s.type)){Ee=s.stateNode,et=!1;break e}break;case 5:Ee=s.stateNode,et=!1;break e;case 3:case 4:Ee=s.stateNode.containerInfo,et=!0;break e}s=s.return}if(Ee===null)throw Error(u(160));Rd(i,c,n),Ee=null,et=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}var Ct=null;function Md(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),at(e),l&4&&(va(3,e,e.return),hn(3,e),va(5,e,e.return));break;case 1:tt(t,e),at(e),l&512&&(qe||a===null||Ht(a,a.return)),l&64&&It&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ct;if(tt(t,e),at(e),l&512&&(qe||a===null||Ht(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Yl]||i[Ge]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ze(i,l,a),i[Ge]=e,Be(i),l=i;break e;case"link":var c=Of("link","href",n).get(l+(a.href||""));if(c){for(var s=0;s<c.length;s++)if(i=c[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;case"meta":if(c=Of("meta","content",n).get(l+(a.content||""))){for(s=0;s<c.length;s++)if(i=c[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[Ge]=e,Be(i),l=i}e.stateNode=l}else _f(n,e.type,e.stateNode);else e.stateNode=Mf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?_f(n,e.type,e.stateNode):Mf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Bo(e,e.memoizedProps,a.memoizedProps)}break;case 27:tt(t,e),at(e),l&512&&(qe||a===null||Ht(a,a.return)),a!==null&&l&4&&Bo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(tt(t,e),at(e),l&512&&(qe||a===null||Ht(a,a.return)),e.flags&32){n=e.stateNode;try{nl(n,"")}catch(k){he(e,e.return,k)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Bo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Xo=!0);break;case 6:if(tt(t,e),at(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(k){he(e,e.return,k)}}break;case 3:if(Vi=null,n=Ct,Ct=Xi(t.containerInfo),tt(t,e),Ct=n,at(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ul(t.containerInfo)}catch(k){he(e,e.return,k)}Xo&&(Xo=!1,Od(e));break;case 4:l=Ct,Ct=Xi(e.stateNode.containerInfo),tt(t,e),at(e),Ct=l;break;case 12:tt(t,e),at(e);break;case 31:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 13:tt(t,e),at(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Di=it()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,z=It,R=qe;if(It=z||n,qe=R||h,tt(t,e),qe=R,It=z,at(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||It||qe||Fa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=h.stateNode;var O=h.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null;s.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(k){he(h,h.return,k)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(k){he(h,h.return,k)}}}else if(t.tag===18){if(a===null){h=t;try{var A=h.stateNode;n?wf(A,!0):wf(h.stateNode,!1)}catch(k){he(h,h.return,k)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ri(e,a))));break;case 19:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 30:break;case 21:break;default:tt(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(zd(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=Yo(e);Ai(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(nl(c,""),a.flags&=-33);var s=Yo(e);Ai(e,s,c);break;case 3:case 4:var h=a.stateNode.containerInfo,z=Yo(e);Go(e,z,h);break;default:throw Error(u(161))}}catch(R){he(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Od(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Od(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nd(e,t.alternate,t),t=t.sibling}function Fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),Fa(t);break;case 1:Ht(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Sd(t,t.return,a),Fa(t);break;case 27:zn(t.stateNode);case 26:case 5:Ht(t,t.return),Fa(t);break;case 22:t.memoizedState===null&&Fa(t);break;case 30:Fa(t);break;default:Fa(t)}e=e.sibling}}function ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:ta(n,i,a),hn(4,i);break;case 1:if(ta(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){he(l,l.return,z)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)ss(h[n],s)}catch(z){he(l,l.return,z)}}a&&c&64&&jd(i),pn(i,i.return);break;case 27:Ed(i);case 26:case 5:ta(n,i,a),a&&l===null&&c&4&&wd(i),pn(i,i.return);break;case 12:ta(n,i,a);break;case 31:ta(n,i,a),a&&c&4&&Cd(n,i);break;case 13:ta(n,i,a),a&&c&4&&Dd(n,i);break;case 22:i.memoizedState===null&&ta(n,i,a),pn(i,i.return);break;case 30:break;default:ta(n,i,a)}t=t.sibling}}function Qo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&en(a))}function Vo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_d(e,t,a,l),t=t.sibling}function _d(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),n&2048&&hn(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e)));break;case 12:if(n&2048){Dt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,s=i.onPostCommit;typeof s=="function"&&s(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){he(t,t.return,h)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Dt(e,t,a,l):gn(e,t):i._visibility&2?Dt(e,t,a,l):(i._visibility|=2,zl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Qo(c,t);break;case 24:Dt(e,t,a,l),n&2048&&Vo(t.alternate,t);break;default:Dt(e,t,a,l)}}function zl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,s=a,h=l,z=c.flags;switch(c.tag){case 0:case 11:case 15:zl(i,c,s,h,n),hn(8,c);break;case 23:break;case 22:var R=c.stateNode;c.memoizedState!==null?R._visibility&2?zl(i,c,s,h,n):gn(i,c):(R._visibility|=2,zl(i,c,s,h,n)),n&&z&2048&&Qo(c.alternate,c);break;case 24:zl(i,c,s,h,n),n&&z&2048&&Vo(c.alternate,c);break;default:zl(i,c,s,h,n)}t=t.sibling}}function gn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:gn(a,l),n&2048&&Qo(l.alternate,l);break;case 24:gn(a,l),n&2048&&Vo(l.alternate,l);break;default:gn(a,l)}t=t.sibling}}var yn=8192;function El(e,t,a){if(e.subtreeFlags&yn)for(e=e.child;e!==null;)Ud(e,t,a),e=e.sibling}function Ud(e,t,a){switch(e.tag){case 26:El(e,t,a),e.flags&yn&&e.memoizedState!==null&&Qp(a,Ct,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,a);break;case 3:case 4:var l=Ct;Ct=Xi(e.stateNode.containerInfo),El(e,t,a),Ct=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yn,yn=16777216,El(e,t,a),yn=l):El(e,t,a));break;default:El(e,t,a)}}function Ld(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,qd(l,e)}Ld(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hd(e),e=e.sibling}function Hd(e){switch(e.tag){case 0:case 11:case 15:xn(e),e.flags&2048&&va(9,e,e.return);break;case 3:xn(e);break;case 12:xn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ci(e)):xn(e);break;default:xn(e)}}function Ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,qd(l,e)}Ld(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),Ci(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ci(t));break;default:Ci(t)}e=e.sibling}}function qd(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:en(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ye=l;else e:for(a=e;Ye!==null;){l=Ye;var n=l.sibling,i=l.return;if(Ad(l),l===a){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var ip={getCacheForType:function(e){var t=Qe(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Qe(Ue).controller.signal}},rp=typeof WeakMap=="function"?WeakMap:Map,de=0,Se=null,le=null,re=0,me=0,ft=null,ba=!1,Tl=!1,Zo=!1,aa=0,Re=0,ja=0,Wa=0,Ko=0,mt=0,Nl=0,vn=null,lt=null,Jo=!1,Di=0,kd=0,Mi=1/0,Oi=null,Sa=null,ke=0,wa=null,Al=null,la=0,Fo=0,Wo=null,Bd=null,bn=0,$o=null;function ht(){return(de&2)!==0&&re!==0?re&-re:C.T!==null?lc():au()}function Yd(){if(mt===0)if((re&536870912)===0||ce){var e=Yn;Yn<<=1,(Yn&3932160)===0&&(Yn=262144),mt=e}else mt=536870912;return e=st.current,e!==null&&(e.flags|=32),mt}function nt(e,t,a){(e===Se&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Rl(e,0),za(e,re,mt,!1)),Bl(e,a),((de&2)===0||e!==Se)&&(e===Se&&((de&2)===0&&(Wa|=a),Re===4&&za(e,re,mt,!1)),qt(e))}function Gd(e,t,a){if((de&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||kl(e,t),n=l?up(e,t):Po(e,t,!0),i=l;do{if(n===0){Tl&&!l&&za(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!op(a)){n=Po(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var s=e;n=vn;var h=s.current.memoizedState.isDehydrated;if(h&&(Rl(s,c).flags|=256),c=Po(s,c,!1),c!==2){if(Zo&&!h){s.errorRecoveryDisabledLanes|=i,Wa|=i,n=4;break e}i=lt,lt=n,i!==null&&(lt===null?lt=i:lt.push.apply(lt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Rl(e,0),za(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:za(l,t,mt,!ba);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=Di+300-it(),10<n)){if(za(l,t,mt,!ba),Xn(l,0,!0)!==0)break e;la=t,l.timeoutHandle=bf(Xd.bind(null,l,a,lt,Oi,Jo,t,mt,Wa,Nl,ba,i,"Throttled",-0,0),n);break e}Xd(l,a,lt,Oi,Jo,t,mt,Wa,Nl,ba,i,null,-0,0)}}break}while(!0);qt(e)}function Xd(e,t,a,l,n,i,c,s,h,z,R,O,T,A){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Ud(t,i,O);var k=(i&62914560)===i?Di-it():(i&4194048)===i?kd-it():0;if(k=Vp(O,k),k!==null){la=i,e.cancelPendingCommit=k($d.bind(null,e,t,i,a,l,n,c,s,h,R,O,null,T,A)),za(e,i,c,!z);return}}$d(e,t,i,a,l,n,c,s,h)}function op(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ct(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function za(e,t,a,l){t&=~Ko,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ot(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&Pc(e,a,t)}function _i(){return(de&6)===0?(jn(0),!1):!0}function Io(){if(le!==null){if(me===0)var e=le.return;else e=le,Zt=Ya=null,ho(e),vl=null,an=0,e=le;for(;e!==null;)bd(e.alternate,e),e=e.return;le=null}}function Rl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Np(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,Io(),Se=e,le=a=Qt(e.current,null),re=t,me=0,ft=null,ba=!1,Tl=kl(e,t),Zo=!1,Nl=mt=Ko=Wa=ja=Re=0,lt=vn=null,Jo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ot(l),i=1<<n;t|=e[n],l&=~i}return aa=t,ti(),a}function Qd(e,t){ee=null,C.H=dn,t===xl||t===ui?(t=rs(),me=3):t===to?(t=rs(),me=4):me=t===Co?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,le===null&&(Re=1,wi(e,bt(t,e.current)))}function Vd(){var e=st.current;return e===null?!0:(re&4194048)===re?zt===null:(re&62914560)===re||(re&536870912)!==0?e===zt:!1}function Zd(){var e=C.H;return C.H=dn,e===null?dn:e}function Kd(){var e=C.A;return C.A=ip,e}function Ui(){Re=4,ba||(re&4194048)!==re&&st.current!==null||(Tl=!0),(ja&134217727)===0&&(Wa&134217727)===0||Se===null||za(Se,re,mt,!1)}function Po(e,t,a){var l=de;de|=2;var n=Zd(),i=Kd();(Se!==e||re!==t)&&(Oi=null,Rl(e,t)),t=!1;var c=Re;e:do try{if(me!==0&&le!==null){var s=le,h=ft;switch(me){case 8:Io(),c=6;break e;case 3:case 2:case 9:case 6:st.current===null&&(t=!0);var z=me;if(me=0,ft=null,Cl(e,s,h,z),a&&Tl){c=0;break e}break;default:z=me,me=0,ft=null,Cl(e,s,h,z)}}cp(),c=Re;break}catch(R){Qd(e,R)}while(!0);return t&&e.shellSuspendCounter++,Zt=Ya=null,de=l,C.H=n,C.A=i,le===null&&(Se=null,re=0,ti()),c}function cp(){for(;le!==null;)Jd(le)}function up(e,t){var a=de;de|=2;var l=Zd(),n=Kd();Se!==e||re!==t?(Oi=null,Mi=it()+500,Rl(e,t)):Tl=kl(e,t);e:do try{if(me!==0&&le!==null){t=le;var i=ft;t:switch(me){case 1:me=0,ft=null,Cl(e,t,i,1);break;case 2:case 9:if(ns(i)){me=0,ft=null,Fd(t);break}t=function(){me!==2&&me!==9||Se!==e||(me=7),qt(e)},i.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:ns(i)?(me=0,ft=null,Fd(t)):(me=0,ft=null,Cl(e,t,i,7));break;case 5:var c=null;switch(le.tag){case 26:c=le.memoizedState;case 5:case 27:var s=le;if(c?Uf(c):s.stateNode.complete){me=0,ft=null;var h=s.sibling;if(h!==null)le=h;else{var z=s.return;z!==null?(le=z,Li(z)):le=null}break t}}me=0,ft=null,Cl(e,t,i,5);break;case 6:me=0,ft=null,Cl(e,t,i,6);break;case 8:Io(),Re=6;break e;default:throw Error(u(462))}}sp();break}catch(R){Qd(e,R)}while(!0);return Zt=Ya=null,C.H=l,C.A=n,de=a,le!==null?0:(Se=null,re=0,ti(),Re)}function sp(){for(;le!==null&&!Om();)Jd(le)}function Jd(e){var t=xd(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?Li(e):le=t}function Fd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=fd(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=fd(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:ho(t);default:bd(a,t),t=le=Ku(t,aa),t=xd(a,t,aa)}e.memoizedProps=e.pendingProps,t===null?Li(e):le=t}function Cl(e,t,a,l){Zt=Ya=null,ho(t),vl=null,an=0;var n=t.return;try{if(Ih(e,n,t,a,re)){Re=1,wi(e,bt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;Re=1,wi(e,bt(a,e.current)),le=null;return}t.flags&32768?(ce||l===1?e=!0:Tl||(re&536870912)!==0?e=!1:(ba=e=!0,(l===2||l===9||l===3||l===6)&&(l=st.current,l!==null&&l.tag===13&&(l.flags|=16384))),Wd(t,e)):Li(t)}function Li(e){var t=e;do{if((t.flags&32768)!==0){Wd(t,ba);return}e=t.return;var a=tp(t.alternate,t,aa);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Re===0&&(Re=5)}function Wd(e,t){do{var a=ap(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Re=6,le=null}function $d(e,t,a,l,n,i,c,s,h){e.cancelPendingCommit=null;do Hi();while(ke!==0);if((de&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=Br,Xm(e,a,i,c,s,h),e===Se&&(le=Se=null,re=0),Al=t,wa=e,la=a,Fo=i,Wo=n,Bd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hp(kn,function(){return af(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,n=H.p,H.p=2,c=de,de|=4;try{lp(e,t,a)}finally{de=c,H.p=n,C.T=l}}ke=1,Id(),Pd(),ef()}}function Id(){if(ke===1){ke=0;var e=wa,t=Al,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var l=H.p;H.p=2;var n=de;de|=4;try{Md(t,e);var i=dc,c=qu(e.containerInfo),s=i.focusedElem,h=i.selectionRange;if(c!==s&&s&&s.ownerDocument&&Hu(s.ownerDocument.documentElement,s)){if(h!==null&&Ur(s)){var z=h.start,R=h.end;if(R===void 0&&(R=z),"selectionStart"in s)s.selectionStart=z,s.selectionEnd=Math.min(R,s.value.length);else{var O=s.ownerDocument||document,T=O&&O.defaultView||window;if(T.getSelection){var A=T.getSelection(),k=s.textContent.length,Z=Math.min(h.start,k),xe=h.end===void 0?Z:Math.min(h.end,k);!A.extend&&Z>xe&&(c=xe,xe=Z,Z=c);var j=Lu(s,Z),y=Lu(s,xe);if(j&&y&&(A.rangeCount!==1||A.anchorNode!==j.node||A.anchorOffset!==j.offset||A.focusNode!==y.node||A.focusOffset!==y.offset)){var w=O.createRange();w.setStart(j.node,j.offset),A.removeAllRanges(),Z>xe?(A.addRange(w),A.extend(y.node,y.offset)):(w.setEnd(y.node,y.offset),A.addRange(w))}}}}for(O=[],A=s;A=A.parentNode;)A.nodeType===1&&O.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<O.length;s++){var M=O[s];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Fi=!!sc,dc=sc=null}finally{de=n,H.p=l,C.T=a}}e.current=t,ke=2}}function Pd(){if(ke===2){ke=0;var e=wa,t=Al,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var l=H.p;H.p=2;var n=de;de|=4;try{Nd(e,t.alternate,t)}finally{de=n,H.p=l,C.T=a}}ke=3}}function ef(){if(ke===4||ke===3){ke=0,_m();var e=wa,t=Al,a=la,l=Bd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ke=5:(ke=0,Al=wa=null,tf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Sa=null),gr(a),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=C.T,n=H.p,H.p=2,C.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var s=l[c];i(s.value,{componentStack:s.stack})}}finally{C.T=t,H.p=n}}(la&3)!==0&&Hi(),qt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===$o?bn++:(bn=0,$o=e):bn=0,jn(0)}}function tf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,en(t)))}function Hi(){return Id(),Pd(),ef(),af()}function af(){if(ke!==5)return!1;var e=wa,t=Fo;Fo=0;var a=gr(la),l=C.T,n=H.p;try{H.p=32>a?32:a,C.T=null,a=Wo,Wo=null;var i=wa,c=la;if(ke=0,Al=wa=null,la=0,(de&6)!==0)throw Error(u(331));var s=de;if(de|=4,Hd(i.current),_d(i,i.current,c,a),de=s,jn(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(ql,i)}catch{}return!0}finally{H.p=n,C.T=l,tf(e,t)}}function lf(e,t,a){t=bt(a,t),t=Ro(e.stateNode,t,2),e=ga(e,t,2),e!==null&&(Bl(e,2),qt(e))}function he(e,t,a){if(e.tag===3)lf(e,e,a);else for(;t!==null;){if(t.tag===3){lf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sa===null||!Sa.has(l))){e=bt(a,e),a=nd(2),l=ga(t,a,2),l!==null&&(id(a,l,t,e),Bl(l,2),qt(l));break}}t=t.return}}function ec(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new rp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Zo=!0,n.add(a),e=dp.bind(null,e,t,a),t.then(e,e))}function dp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(re&a)===a&&(Re===4||Re===3&&(re&62914560)===re&&300>it()-Di?(de&2)===0&&Rl(e,0):Ko|=a,Nl===re&&(Nl=0)),qt(e)}function nf(e,t){t===0&&(t=Ic()),e=qa(e,t),e!==null&&(Bl(e,t),qt(e))}function fp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),nf(e,a)}function mp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),nf(e,a)}function hp(e,t){return fr(e,t)}var qi=null,Dl=null,tc=!1,ki=!1,ac=!1,Ea=0;function qt(e){e!==Dl&&e.next===null&&(Dl===null?qi=Dl=e:Dl=Dl.next=e),ki=!0,tc||(tc=!0,gp())}function jn(e,t){if(!ac&&ki){ac=!0;do for(var a=!1,l=qi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-ot(42|e)+1)-1,i&=n&~(c&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,uf(l,i))}else i=re,i=Xn(l,l===Se?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||kl(l,i)||(a=!0,uf(l,i));l=l.next}while(a);ac=!1}}function pp(){rf()}function rf(){ki=tc=!1;var e=0;Ea!==0&&Tp()&&(e=Ea);for(var t=it(),a=null,l=qi;l!==null;){var n=l.next,i=of(l,t);i===0?(l.next=null,a===null?qi=n:a.next=n,n===null&&(Dl=a)):(a=l,(e!==0||(i&3)!==0)&&(ki=!0)),l=n}ke!==0&&ke!==5||jn(e),Ea!==0&&(Ea=0)}function of(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-ot(i),s=1<<c,h=n[c];h===-1?((s&a)===0||(s&l)!==0)&&(n[c]=Gm(s,t)):h<=t&&(e.expiredLanes|=s),i&=~s}if(t=Se,a=re,a=Xn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&mr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&mr(l),gr(a)){case 2:case 8:a=Wc;break;case 32:a=kn;break;case 268435456:a=$c;break;default:a=kn}return l=cf.bind(null,e),a=fr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&mr(l),e.callbackPriority=2,e.callbackNode=null,2}function cf(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hi()&&e.callbackNode!==a)return null;var l=re;return l=Xn(e,e===Se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Gd(e,l,t),of(e,it()),e.callbackNode!=null&&e.callbackNode===a?cf.bind(null,e):null)}function uf(e,t){if(Hi())return null;Gd(e,t,!0)}function gp(){Ap(function(){(de&6)!==0?fr(Fc,pp):rf()})}function lc(){if(Ea===0){var e=gl;e===0&&(e=Bn,Bn<<=1,(Bn&261888)===0&&(Bn=256)),Ea=e}return Ea}function sf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function df(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function yp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=sf((n[Ie]||null).action),c=l.submitter;c&&(t=(t=c[Ie]||null)?sf(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var s=new $n("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ea!==0){var h=c?df(n,c):new FormData(n);wo(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=c?df(n,c):new FormData(n),wo(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var nc=0;nc<kr.length;nc++){var ic=kr[nc],xp=ic.toLowerCase(),vp=ic[0].toUpperCase()+ic.slice(1);Rt(xp,"on"+vp)}Rt(Yu,"onAnimationEnd"),Rt(Gu,"onAnimationIteration"),Rt(Xu,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Uh,"onTransitionRun"),Rt(Lh,"onTransitionStart"),Rt(Hh,"onTransitionCancel"),Rt(Qu,"onTransitionEnd"),al("onMouseEnter",["mouseout","mouseover"]),al("onMouseLeave",["mouseout","mouseover"]),al("onPointerEnter",["pointerout","pointerover"]),al("onPointerLeave",["pointerout","pointerover"]),_a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_a("onBeforeInput",["compositionend","keypress","textInput","paste"]),_a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn));function ff(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var s=l[c],h=s.instance,z=s.currentTarget;if(s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=z;try{i(n)}catch(R){ei(R)}n.currentTarget=null,i=h}else for(c=0;c<l.length;c++){if(s=l[c],h=s.instance,z=s.currentTarget,s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=z;try{i(n)}catch(R){ei(R)}n.currentTarget=null,i=h}}}}function ne(e,t){var a=t[yr];a===void 0&&(a=t[yr]=new Set);var l=e+"__bubble";a.has(l)||(mf(t,e,2,!1),a.add(l))}function rc(e,t,a){var l=0;t&&(l|=4),mf(a,e,l,t)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function oc(e){if(!e[Bi]){e[Bi]=!0,iu.forEach(function(a){a!=="selectionchange"&&(bp.has(a)||rc(a,!1,e),rc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bi]||(t[Bi]=!0,rc("selectionchange",!1,t))}}function mf(e,t,a,l){switch(Gf(t)){case 2:var n=Jp;break;case 8:n=Fp;break;default:n=Sc}a=n.bind(null,t,a,e),n=void 0,!Tr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function cc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var s=l.stateNode.containerInfo;if(s===n)break;if(c===4)for(c=l.return;c!==null;){var h=c.tag;if((h===3||h===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;s!==null;){if(c=Pa(s),c===null)return;if(h=c.tag,h===5||h===6||h===26||h===27){l=i=c;continue e}s=s.parentNode}}l=l.return}yu(function(){var z=i,R=zr(a),O=[];e:{var T=Vu.get(e);if(T!==void 0){var A=$n,k=e;switch(e){case"keypress":if(Fn(a)===0)break e;case"keydown":case"keyup":A=mh;break;case"focusin":k="focus",A=Cr;break;case"focusout":k="blur",A=Cr;break;case"beforeblur":case"afterblur":A=Cr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=gh;break;case Yu:case Gu:case Xu:A=nh;break;case Qu:A=xh;break;case"scroll":case"scrollend":A=Pm;break;case"wheel":A=bh;break;case"copy":case"cut":case"paste":A=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Su;break;case"toggle":case"beforetoggle":A=Sh}var Z=(t&4)!==0,xe=!Z&&(e==="scroll"||e==="scrollend"),j=Z?T!==null?T+"Capture":null:T;Z=[];for(var y=z,w;y!==null;){var M=y;if(w=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||w===null||j===null||(M=Xl(y,j),M!=null&&Z.push(wn(y,M,w))),xe)break;y=y.return}0<Z.length&&(T=new A(T,k,null,a,R),O.push({event:T,listeners:Z}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&a!==wr&&(k=a.relatedTarget||a.fromElement)&&(Pa(k)||k[Ia]))break e;if((A||T)&&(T=R.window===R?R:(T=R.ownerDocument)?T.defaultView||T.parentWindow:window,A?(k=a.relatedTarget||a.toElement,A=z,k=k?Pa(k):null,k!==null&&(xe=p(k),Z=k.tag,k!==xe||Z!==5&&Z!==27&&Z!==6)&&(k=null)):(A=null,k=z),A!==k)){if(Z=bu,M="onMouseLeave",j="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Su,M="onPointerLeave",j="onPointerEnter",y="pointer"),xe=A==null?T:Gl(A),w=k==null?T:Gl(k),T=new Z(M,y+"leave",A,a,R),T.target=xe,T.relatedTarget=w,M=null,Pa(R)===z&&(Z=new Z(j,y+"enter",k,a,R),Z.target=w,Z.relatedTarget=xe,M=Z),xe=M,A&&k)t:{for(Z=jp,j=A,y=k,w=0,M=j;M;M=Z(M))w++;M=0;for(var V=y;V;V=Z(V))M++;for(;0<w-M;)j=Z(j),w--;for(;0<M-w;)y=Z(y),M--;for(;w--;){if(j===y||y!==null&&j===y.alternate){Z=j;break t}j=Z(j),y=Z(y)}Z=null}else Z=null;A!==null&&hf(O,T,A,Z,!1),k!==null&&xe!==null&&hf(O,xe,k,Z,!0)}}e:{if(T=z?Gl(z):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var ue=Cu;else if(Au(T))if(Du)ue=Mh;else{ue=Ch;var G=Rh}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?z&&Sr(z.elementType)&&(ue=Cu):ue=Dh;if(ue&&(ue=ue(e,z))){Ru(O,ue,a,R);break e}G&&G(e,T,z),e==="focusout"&&z&&T.type==="number"&&z.memoizedProps.value!=null&&jr(T,"number",T.value)}switch(G=z?Gl(z):window,e){case"focusin":(Au(G)||G.contentEditable==="true")&&(cl=G,Lr=z,$l=null);break;case"focusout":$l=Lr=cl=null;break;case"mousedown":Hr=!0;break;case"contextmenu":case"mouseup":case"dragend":Hr=!1,ku(O,a,R);break;case"selectionchange":if(_h)break;case"keydown":case"keyup":ku(O,a,R)}var te;if(Mr)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else ol?Tu(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(wu&&a.locale!=="ko"&&(ol||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ol&&(te=xu()):(ua=R,Nr="value"in ua?ua.value:ua.textContent,ol=!0)),G=Yi(z,oe),0<G.length&&(oe=new ju(oe,e,null,a,R),O.push({event:oe,listeners:G}),te?oe.data=te:(te=Nu(a),te!==null&&(oe.data=te)))),(te=zh?Eh(e,a):Th(e,a))&&(oe=Yi(z,"onBeforeInput"),0<oe.length&&(G=new ju("onBeforeInput","beforeinput",null,a,R),O.push({event:G,listeners:oe}),G.data=te)),yp(O,e,z,a,R)}ff(O,t)})}function wn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Yi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Xl(e,a),n!=null&&l.unshift(wn(e,n,i)),n=Xl(e,t),n!=null&&l.push(wn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function jp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hf(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var s=a,h=s.alternate,z=s.stateNode;if(s=s.tag,h!==null&&h===l)break;s!==5&&s!==26&&s!==27||z===null||(h=z,n?(z=Xl(a,i),z!=null&&c.unshift(wn(a,z,h))):n||(z=Xl(a,i),z!=null&&c.push(wn(a,z,h)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var Sp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function pf(e){return(typeof e=="string"?e:""+e).replace(Sp,`
`).replace(wp,"")}function gf(e,t){return t=pf(t),pf(e)===t}function ye(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||nl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&nl(e,""+l);break;case"className":Vn(e,"class",l);break;case"tabIndex":Vn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Vn(e,a,l);break;case"style":pu(e,l,i);break;case"data":if(t!=="object"){Vn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ye(e,t,"name",n.name,n,null),ye(e,t,"formEncType",n.formEncType,n,null),ye(e,t,"formMethod",n.formMethod,n,null),ye(e,t,"formTarget",n.formTarget,n,null)):(ye(e,t,"encType",n.encType,n,null),ye(e,t,"method",n.method,n,null),ye(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Qn(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Qn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$m.get(a)||a,Qn(e,a,l))}}function uc(e,t,a,l,n,i){switch(a){case"style":pu(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?nl(e,l):(typeof l=="number"||typeof l=="bigint")&&nl(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ru.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ie]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Qn(e,a,l)}}}function Ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ye(e,t,i,c,a,null)}}n&&ye(e,t,"srcSet",a.srcSet,a,null),l&&ye(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var s=i=c=n=null,h=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var R=a[l];if(R!=null)switch(l){case"name":n=R;break;case"type":c=R;break;case"checked":h=R;break;case"defaultChecked":z=R;break;case"value":i=R;break;case"defaultValue":s=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:ye(e,t,l,R,a,null)}}du(e,i,s,h,z,c,n,!1);return;case"select":ne("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":c=s;break;case"multiple":l=s;default:ye(e,t,n,s,a,null)}t=i,a=c,e.multiple=!!l,t!=null?ll(e,!!l,t,!1):a!=null&&ll(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(s=a[c],s!=null))switch(c){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(u(91));break;default:ye(e,t,c,s,a,null)}mu(e,l,n,i);return;case"option":for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null)&&(h==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ye(e,t,h,l,a,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<Sn.length;l++)ne(Sn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ye(e,t,z,l,a,null)}return;default:if(Sr(t)){for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!==void 0&&uc(e,t,R,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&ye(e,t,s,l,a,null))}function zp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,s=null,h=null,z=null,R=null;for(A in a){var O=a[A];if(a.hasOwnProperty(A)&&O!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":h=O;default:l.hasOwnProperty(A)||ye(e,t,A,null,l,O)}}for(var T in l){var A=l[T];if(O=a[T],l.hasOwnProperty(T)&&(A!=null||O!=null))switch(T){case"type":i=A;break;case"name":n=A;break;case"checked":z=A;break;case"defaultChecked":R=A;break;case"value":c=A;break;case"defaultValue":s=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:A!==O&&ye(e,t,T,A,l,O)}}br(e,c,s,h,z,R,i,n);return;case"select":A=c=s=T=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":A=h;default:l.hasOwnProperty(i)||ye(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":T=i;break;case"defaultValue":s=i;break;case"multiple":c=i;default:i!==h&&ye(e,t,n,i,l,h)}t=s,a=c,l=A,T!=null?ll(e,!!a,T,!1):!!l!=!!a&&(t!=null?ll(e,!!a,t,!0):ll(e,!!a,a?[]:"",!1));return;case"textarea":A=T=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ye(e,t,s,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":T=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&ye(e,t,c,n,l,i)}fu(e,T,A);return;case"option":for(var k in a)T=a[k],a.hasOwnProperty(k)&&T!=null&&!l.hasOwnProperty(k)&&(k==="selected"?e.selected=!1:ye(e,t,k,null,l,T));for(h in l)T=l[h],A=a[h],l.hasOwnProperty(h)&&T!==A&&(T!=null||A!=null)&&(h==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":ye(e,t,h,T,l,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)T=a[Z],a.hasOwnProperty(Z)&&T!=null&&!l.hasOwnProperty(Z)&&ye(e,t,Z,null,l,T);for(z in l)if(T=l[z],A=a[z],l.hasOwnProperty(z)&&T!==A&&(T!=null||A!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:ye(e,t,z,T,l,A)}return;default:if(Sr(t)){for(var xe in a)T=a[xe],a.hasOwnProperty(xe)&&T!==void 0&&!l.hasOwnProperty(xe)&&uc(e,t,xe,void 0,l,T);for(R in l)T=l[R],A=a[R],!l.hasOwnProperty(R)||T===A||T===void 0&&A===void 0||uc(e,t,R,T,l,A);return}}for(var j in a)T=a[j],a.hasOwnProperty(j)&&T!=null&&!l.hasOwnProperty(j)&&ye(e,t,j,null,l,T);for(O in l)T=l[O],A=a[O],!l.hasOwnProperty(O)||T===A||T==null&&A==null||ye(e,t,O,T,l,A)}function yf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ep(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,s=n.duration;if(i&&s&&yf(c)){for(c=0,s=n.responseEnd,l+=1;l<a.length;l++){var h=a[l],z=h.startTime;if(z>s)break;var R=h.transferSize,O=h.initiatorType;R&&yf(O)&&(h=h.responseEnd,c+=R*(h<s?1:(s-z)/(h-z)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sc=null,dc=null;function Gi(e){return e.nodeType===9?e:e.ownerDocument}function xf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mc=null;function Tp(){var e=window.event;return e&&e.type==="popstate"?e===mc?!1:(mc=e,!0):(mc=null,!1)}var bf=typeof setTimeout=="function"?setTimeout:void 0,Np=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(Rp)}:bf;function Rp(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Sf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ul(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")zn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,s=i.nodeName;i[Yl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&zn(e.ownerDocument.body);a=n}while(a);Ul(t)}function wf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function hc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hc(a),xr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Cp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Yl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function Dp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Et(e.nextSibling),e===null))return null;return e}function zf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Et(e.nextSibling),e===null))return null;return e}function pc(e){return e.data==="$?"||e.data==="$~"}function gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var yc=null;function Ef(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Et(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Tf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Nf(e,t,a){switch(t=Gi(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function zn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xr(e)}var Tt=new Map,Af=new Set;function Xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=H.d;H.d={f:Op,r:_p,D:Up,C:Lp,L:Hp,m:qp,X:Bp,S:kp,M:Yp};function Op(){var e=na.f(),t=_i();return e||t}function _p(e){var t=el(e);t!==null&&t.tag===5&&t.type==="form"?Qs(t):na.r(e)}var Ml=typeof document>"u"?null:document;function Rf(e,t,a){var l=Ml;if(l&&typeof t=="string"&&t){var n=xt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Af.has(n)||(Af.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ze(t,"link",e),Be(t),l.head.appendChild(t)))}}function Up(e){na.D(e),Rf("dns-prefetch",e,null)}function Lp(e,t){na.C(e,t),Rf("preconnect",e,t)}function Hp(e,t,a){na.L(e,t,a);var l=Ml;if(l&&e&&t){var n='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+xt(a.imageSizes)+'"]')):n+='[href="'+xt(e)+'"]';var i=n;switch(t){case"style":i=Ol(e);break;case"script":i=_l(e)}Tt.has(i)||(e=S({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(En(i))||t==="script"&&l.querySelector(Tn(i))||(t=l.createElement("link"),Ze(t,"link",e),Be(t),l.head.appendChild(t)))}}function qp(e,t){na.m(e,t);var a=Ml;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+xt(l)+'"][href="'+xt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=_l(e)}if(!Tt.has(i)&&(e=S({rel:"modulepreload",href:e},t),Tt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tn(i)))return}l=a.createElement("link"),Ze(l,"link",e),Be(l),a.head.appendChild(l)}}}function kp(e,t,a){na.S(e,t,a);var l=Ml;if(l&&e){var n=tl(l).hoistableStyles,i=Ol(e);t=t||"default";var c=n.get(i);if(!c){var s={loading:0,preload:null};if(c=l.querySelector(En(i)))s.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(i))&&xc(e,a);var h=c=l.createElement("link");Be(h),Ze(h,"link",e),h._p=new Promise(function(z,R){h.onload=z,h.onerror=R}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Qi(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:s},n.set(i,c)}}}function Bp(e,t){na.X(e,t);var a=Ml;if(a&&e){var l=tl(a).hoistableScripts,n=_l(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=S({src:e,async:!0},t),(t=Tt.get(n))&&vc(e,t),i=a.createElement("script"),Be(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Yp(e,t){na.M(e,t);var a=Ml;if(a&&e){var l=tl(a).hoistableScripts,n=_l(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=S({src:e,async:!0,type:"module"},t),(t=Tt.get(n))&&vc(e,t),i=a.createElement("script"),Be(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Cf(e,t,a,l){var n=(n=ae.current)?Xi(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ol(a.href),a=tl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ol(a.href);var i=tl(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(En(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),i||Gp(n,e,a,c.state))),t&&l===null)throw Error(u(528,""));return c}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_l(a),a=tl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ol(e){return'href="'+xt(e)+'"'}function En(e){return'link[rel="stylesheet"]['+e+"]"}function Df(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Gp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ze(t,"link",a),Be(t),e.head.appendChild(t))}function _l(e){return'[src="'+xt(e)+'"]'}function Tn(e){return"script[async]"+e}function Mf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(l)return t.instance=l,Be(l),l;var n=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Be(l),Ze(l,"style",n),Qi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ol(a.href);var i=e.querySelector(En(n));if(i)return t.state.loading|=4,t.instance=i,Be(i),i;l=Df(a),(n=Tt.get(n))&&xc(l,n),i=(e.ownerDocument||e).createElement("link"),Be(i);var c=i;return c._p=new Promise(function(s,h){c.onload=s,c.onerror=h}),Ze(i,"link",l),t.state.loading|=4,Qi(i,a.precedence,e),t.instance=i;case"script":return i=_l(a.src),(n=e.querySelector(Tn(i)))?(t.instance=n,Be(n),n):(l=a,(n=Tt.get(i))&&(l=S({},a),vc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Be(n),Ze(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Qi(l,a.precedence,e));return t.instance}function Qi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var s=l[c];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vi=null;function Of(e,t,a){if(Vi===null){var l=new Map,n=Vi=new Map;n.set(a,l)}else n=Vi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Yl]||i[Ge]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var s=l.get(c);s?s.push(i):l.set(c,[i])}}return l}function _f(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Xp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Uf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ol(l.href),i=t.querySelector(En(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Be(i);return}i=t.ownerDocument||t,l=Df(l),(n=Tt.get(n))&&xc(l,n),i=i.createElement("link"),Be(i);var c=i;c._p=new Promise(function(s,h){c.onload=s,c.onerror=h}),Ze(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var bc=0;function Vp(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&bc===0&&(bc=62500*Ep());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>bc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Zi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(Zp,e),Ki=null,Zi.call(e))}function Zp(e,t){if(!(t.state.loading&4)){var a=Ki.get(e);if(a)var l=a.get(null);else{a=new Map,Ki.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Zi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Nn={$$typeof:J,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Kp(e,t,a,l,n,i,c,s,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hr(0),this.hiddenUpdates=hr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Lf(e,t,a,l,n,i,c,s,h,z,R,O){return e=new Kp(e,t,a,c,h,z,R,O,s),t=1,i===!0&&(t|=24),i=ut(3,null,null,t),e.current=i,i.stateNode=e,t=Ir(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ao(i),e}function Hf(e){return e?(e=dl,e):dl}function qf(e,t,a,l,n,i){n=Hf(n),l.context===null?l.context=n:l.pendingContext=n,l=pa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ga(e,l,t),a!==null&&(nt(a,e,t),nn(a,e,t))}function kf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function jc(e,t){kf(e,t),(e=e.alternate)&&kf(e,t)}function Bf(e){if(e.tag===13||e.tag===31){var t=qa(e,67108864);t!==null&&nt(t,e,67108864),jc(e,67108864)}}function Yf(e){if(e.tag===13||e.tag===31){var t=ht();t=pr(t);var a=qa(e,t);a!==null&&nt(a,e,t),jc(e,t)}}var Fi=!0;function Jp(e,t,a,l){var n=C.T;C.T=null;var i=H.p;try{H.p=2,Sc(e,t,a,l)}finally{H.p=i,C.T=n}}function Fp(e,t,a,l){var n=C.T;C.T=null;var i=H.p;try{H.p=8,Sc(e,t,a,l)}finally{H.p=i,C.T=n}}function Sc(e,t,a,l){if(Fi){var n=wc(l);if(n===null)cc(e,t,l,Wi,a),Xf(e,l);else if($p(n,e,t,a,l))l.stopPropagation();else if(Xf(e,l),t&4&&-1<Wp.indexOf(e)){for(;n!==null;){var i=el(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Oa(i.pendingLanes);if(c!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var h=1<<31-ot(c);s.entanglements[1]|=h,c&=~h}qt(i),(de&6)===0&&(Mi=it()+500,jn(0))}}break;case 31:case 13:s=qa(i,2),s!==null&&nt(s,i,2),_i(),jc(i,2)}if(i=wc(l),i===null&&cc(e,t,l,Wi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else cc(e,t,l,null,a)}}function wc(e){return e=zr(e),zc(e)}var Wi=null;function zc(e){if(Wi=null,e=Pa(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=N(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wi=e,null}function Gf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Um()){case Fc:return 2;case Wc:return 8;case kn:case Lm:return 32;case $c:return 268435456;default:return 32}default:return 32}}var Ec=!1,Na=null,Aa=null,Ra=null,An=new Map,Rn=new Map,Ca=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xf(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function Cn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=el(t),t!==null&&Bf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function $p(e,t,a,l,n){switch(t){case"focusin":return Na=Cn(Na,e,t,a,l,n),!0;case"dragenter":return Aa=Cn(Aa,e,t,a,l,n),!0;case"mouseover":return Ra=Cn(Ra,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return An.set(i,Cn(An.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Rn.set(i,Cn(Rn.get(i)||null,e,t,a,l,n)),!0}return!1}function Qf(e){var t=Pa(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,lu(e.priority,function(){Yf(a)});return}}else if(t===31){if(t=N(a),t!==null){e.blockedOn=t,lu(e.priority,function(){Yf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=wc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);wr=l,a.target.dispatchEvent(l),wr=null}else return t=el(a),t!==null&&Bf(t),e.blockedOn=a,!1;t.shift()}return!0}function Vf(e,t,a){$i(e)&&a.delete(t)}function Ip(){Ec=!1,Na!==null&&$i(Na)&&(Na=null),Aa!==null&&$i(Aa)&&(Aa=null),Ra!==null&&$i(Ra)&&(Ra=null),An.forEach(Vf),Rn.forEach(Vf)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Ec||(Ec=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ip)))}var Pi=null;function Zf(e){Pi!==e&&(Pi=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(zc(l||a)===null)continue;break}var i=el(a);i!==null&&(e.splice(t,3),t-=3,wo(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ul(e){function t(h){return Ii(h,e)}Na!==null&&Ii(Na,e),Aa!==null&&Ii(Aa,e),Ra!==null&&Ii(Ra,e),An.forEach(t),Rn.forEach(t);for(var a=0;a<Ca.length;a++){var l=Ca[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Qf(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[Ie]||null;if(typeof i=="function")c||Zf(a);else if(c){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Ie]||null)s=c.formAction;else if(zc(n)!==null)continue}else s=c.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Zf(a)}}}function Kf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Tc(e){this._internalRoot=e}er.prototype.render=Tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=ht();qf(a,l,e,t,null,null)},er.prototype.unmount=Tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qf(e.current,2,null,e,null,null),_i(),t[Ia]=null}};function er(e){this._internalRoot=e}er.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ca.length&&t!==0&&t<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&Qf(e)}};var Jf=d.version;if(Jf!=="19.2.5")throw Error(u(527,Jf,"19.2.5"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e!==null?D(e):null,e=e===null?null:e.stateNode,e};var Pp={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tr.isDisabled&&tr.supportsFiber)try{ql=tr.inject(Pp),rt=tr}catch{}}return Mn.createRoot=function(e,t){if(!m(e))throw Error(u(299));var a=!1,l="",n=ed,i=td,c=ad;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Lf(e,1,!1,null,null,a,l,null,n,i,c,Kf),e[Ia]=t.current,oc(e),new Tc(t)},Mn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(u(299));var l=!1,n="",i=ed,c=td,s=ad,h=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(h=a.formState)),t=Lf(e,1,!0,t,a??null,l,n,h,i,c,s,Kf),t.context=Hf(null),a=t.current,l=ht(),l=pr(l),n=pa(l),n.callback=null,ga(a,n,l),a=l,t.current.lanes=a,Bl(t,a),qt(t),e[Ia]=t.current,oc(e),new er(t)},Mn.version="19.2.5",Mn}var nm;function ug(){if(nm)return Ac.exports;nm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Ac.exports=cg(),Ac.exports}var sg=ug(),E=qc();var im="popstate";function rm(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function dg(o={}){function d(m,p){let{pathname:g="/",search:N="",hash:b=""}=$a(m.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Lc("",{pathname:g,search:N,hash:b},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function f(m,p){let g=m.document.querySelector("base"),N="";if(g&&g.getAttribute("href")){let b=m.location.href,x=b.indexOf("#");N=x===-1?b:b.slice(0,x)}return N+"#"+(typeof p=="string"?p:_n(p))}function u(m,p){Mt(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return mg(d,f,u,o)}function Ne(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Mt(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function fg(){return Math.random().toString(36).substring(2,10)}function om(o,d){return{usr:o.state,key:o.key,idx:d,masked:o.unstable_mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function Lc(o,d,f=null,u,m){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof d=="string"?$a(d):d,state:f,key:d&&d.key||u||fg(),unstable_mask:m}}function _n({pathname:o="/",search:d="",hash:f=""}){return d&&d!=="?"&&(o+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(o+=f.charAt(0)==="#"?f:"#"+f),o}function $a(o){let d={};if(o){let f=o.indexOf("#");f>=0&&(d.hash=o.substring(f),o=o.substring(0,f));let u=o.indexOf("?");u>=0&&(d.search=o.substring(u),o=o.substring(0,u)),o&&(d.pathname=o)}return d}function mg(o,d,f,u={}){let{window:m=document.defaultView,v5Compat:p=!1}=u,g=m.history,N="POP",b=null,x=D();x==null&&(x=0,g.replaceState({...g.state,idx:x},""));function D(){return(g.state||{idx:null}).idx}function S(){N="POP";let L=D(),K=L==null?null:L-x;x=L,b&&b({action:N,location:B.location,delta:K})}function U(L,K){N="PUSH";let I=rm(L)?L:Lc(B.location,L,K);f&&f(I,L),x=D()+1;let J=om(I,x),ve=B.createHref(I.unstable_mask||I);try{g.pushState(J,"",ve)}catch(be){if(be instanceof DOMException&&be.name==="DataCloneError")throw be;m.location.assign(ve)}p&&b&&b({action:N,location:B.location,delta:1})}function X(L,K){N="REPLACE";let I=rm(L)?L:Lc(B.location,L,K);f&&f(I,L),x=D();let J=om(I,x),ve=B.createHref(I.unstable_mask||I);g.replaceState(J,"",ve),p&&b&&b({action:N,location:B.location,delta:0})}function Q(L){return hg(L)}let B={get action(){return N},get location(){return o(m,g)},listen(L){if(b)throw new Error("A history only accepts one active listener");return m.addEventListener(im,S),b=L,()=>{m.removeEventListener(im,S),b=null}},createHref(L){return d(m,L)},createURL:Q,encodeLocation(L){let K=Q(L);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:U,replace:X,go(L){return g.go(L)}};return B}function hg(o,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(f,"No window.location.(origin|href) available to create URL");let u=typeof o=="string"?o:_n(o);return u=u.replace(/ $/,"%20"),!d&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function mm(o,d,f="/"){return pg(o,d,f,!1)}function pg(o,d,f,u){let m=typeof d=="string"?$a(d):d,p=ia(m.pathname||"/",f);if(p==null)return null;let g=hm(o);gg(g);let N=null;for(let b=0;N==null&&b<g.length;++b){let x=Ng(p);N=Eg(g[b],x,u)}return N}function hm(o,d=[],f=[],u="",m=!1){let p=(g,N,b=m,x)=>{let D={relativePath:x===void 0?g.path||"":x,caseSensitive:g.caseSensitive===!0,childrenIndex:N,route:g};if(D.relativePath.startsWith("/")){if(!D.relativePath.startsWith(u)&&b)return;Ne(D.relativePath.startsWith(u),`Absolute route path "${D.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),D.relativePath=D.relativePath.slice(u.length)}let S=kt([u,D.relativePath]),U=f.concat(D);g.children&&g.children.length>0&&(Ne(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),hm(g.children,d,U,S,b)),!(g.path==null&&!g.index)&&d.push({path:S,score:wg(S,g.index),routesMeta:U})};return o.forEach((g,N)=>{if(g.path===""||!g.path?.includes("?"))p(g,N);else for(let b of pm(g.path))p(g,N,!0,b)}),d}function pm(o){let d=o.split("/");if(d.length===0)return[];let[f,...u]=d,m=f.endsWith("?"),p=f.replace(/\?$/,"");if(u.length===0)return m?[p,""]:[p];let g=pm(u.join("/")),N=[];return N.push(...g.map(b=>b===""?p:[p,b].join("/"))),m&&N.push(...g),N.map(b=>o.startsWith("/")&&b===""?"/":b)}function gg(o){o.sort((d,f)=>d.score!==f.score?f.score-d.score:zg(d.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var yg=/^:[\w-]+$/,xg=3,vg=2,bg=1,jg=10,Sg=-2,cm=o=>o==="*";function wg(o,d){let f=o.split("/"),u=f.length;return f.some(cm)&&(u+=Sg),d&&(u+=vg),f.filter(m=>!cm(m)).reduce((m,p)=>m+(yg.test(p)?xg:p===""?bg:jg),u)}function zg(o,d){return o.length===d.length&&o.slice(0,-1).every((u,m)=>u===d[m])?o[o.length-1]-d[d.length-1]:0}function Eg(o,d,f=!1){let{routesMeta:u}=o,m={},p="/",g=[];for(let N=0;N<u.length;++N){let b=u[N],x=N===u.length-1,D=p==="/"?d:d.slice(p.length)||"/",S=ir({path:b.relativePath,caseSensitive:b.caseSensitive,end:x},D),U=b.route;if(!S&&x&&f&&!u[u.length-1].route.index&&(S=ir({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},D)),!S)return null;Object.assign(m,S.params),g.push({params:m,pathname:kt([p,S.pathname]),pathnameBase:Dg(kt([p,S.pathnameBase])),route:U}),S.pathnameBase!=="/"&&(p=kt([p,S.pathnameBase]))}return g}function ir(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[f,u]=Tg(o.path,o.caseSensitive,o.end),m=d.match(f);if(!m)return null;let p=m[0],g=p.replace(/(.)\/+$/,"$1"),N=m.slice(1);return{params:u.reduce((x,{paramName:D,isOptional:S},U)=>{if(D==="*"){let Q=N[U]||"";g=p.slice(0,p.length-Q.length).replace(/(.)\/+$/,"$1")}const X=N[U];return S&&!X?x[D]=void 0:x[D]=(X||"").replace(/%2F/g,"/"),x},{}),pathname:p,pathnameBase:g,pattern:o}}function Tg(o,d=!1,f=!0){Mt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let u=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,N,b,x,D)=>{if(u.push({paramName:N,isOptional:b!=null}),b){let S=D.charAt(x+g.length);return S&&S!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(u.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),u]}function Ng(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Mt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),o}}function ia(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,u=o.charAt(f);return u&&u!=="/"?null:o.slice(f)||"/"}var Ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Rg(o,d="/"){let{pathname:f,search:u="",hash:m=""}=typeof o=="string"?$a(o):o,p;return f?(f=f.replace(/\/\/+/g,"/"),f.startsWith("/")?p=um(f.substring(1),"/"):p=um(f,d)):p=d,{pathname:p,search:Mg(u),hash:Og(m)}}function um(o,d){let f=d.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Oc(o,d,f,u){return`Cannot include a '${o}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cg(o){return o.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function gm(o){let d=Cg(o);return d.map((f,u)=>u===d.length-1?f.pathname:f.pathnameBase)}function kc(o,d,f,u=!1){let m;typeof o=="string"?m=$a(o):(m={...o},Ne(!m.pathname||!m.pathname.includes("?"),Oc("?","pathname","search",m)),Ne(!m.pathname||!m.pathname.includes("#"),Oc("#","pathname","hash",m)),Ne(!m.search||!m.search.includes("#"),Oc("#","search","hash",m)));let p=o===""||m.pathname==="",g=p?"/":m.pathname,N;if(g==null)N=f;else{let S=d.length-1;if(!u&&g.startsWith("..")){let U=g.split("/");for(;U[0]==="..";)U.shift(),S-=1;m.pathname=U.join("/")}N=S>=0?d[S]:"/"}let b=Rg(m,N),x=g&&g!=="/"&&g.endsWith("/"),D=(p||g===".")&&f.endsWith("/");return!b.pathname.endsWith("/")&&(x||D)&&(b.pathname+="/"),b}var kt=o=>o.join("/").replace(/\/\/+/g,"/"),Dg=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Mg=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Og=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,_g=class{constructor(o,d,f,u=!1){this.status=o,this.statusText=d||"",this.internal=u,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Ug(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Lg(o){return o.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xm(o,d){let f=o;if(typeof f!="string"||!Ag.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let u=f,m=!1;if(ym)try{let p=new URL(window.location.href),g=f.startsWith("//")?new URL(p.protocol+f):new URL(f),N=ia(g.pathname,d);g.origin===p.origin&&N!=null?f=N+g.search+g.hash:m=!0}catch{Mt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vm=["POST","PUT","PATCH","DELETE"];new Set(vm);var Hg=["GET",...vm];new Set(Hg);var Ll=E.createContext(null);Ll.displayName="DataRouter";var rr=E.createContext(null);rr.displayName="DataRouterState";var bm=E.createContext(!1);function qg(){return E.useContext(bm)}var jm=E.createContext({isTransitioning:!1});jm.displayName="ViewTransition";var kg=E.createContext(new Map);kg.displayName="Fetchers";var Bg=E.createContext(null);Bg.displayName="Await";var At=E.createContext(null);At.displayName="Navigation";var Un=E.createContext(null);Un.displayName="Location";var ra=E.createContext({outlet:null,matches:[],isDataRoute:!1});ra.displayName="Route";var Bc=E.createContext(null);Bc.displayName="RouteError";var Sm="REACT_ROUTER_ERROR",Yg="REDIRECT",Gg="ROUTE_ERROR_RESPONSE";function Xg(o){if(o.startsWith(`${Sm}:${Yg}:{`))try{let d=JSON.parse(o.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function Qg(o){if(o.startsWith(`${Sm}:${Gg}:{`))try{let d=JSON.parse(o.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new _g(d.status,d.statusText,d.data)}catch{}}function Vg(o,{relative:d}={}){Ne(Ln(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=E.useContext(At),{hash:m,pathname:p,search:g}=Hn(o,{relative:d}),N=p;return f!=="/"&&(N=p==="/"?f:kt([f,p])),u.createHref({pathname:N,search:g,hash:m})}function Ln(){return E.useContext(Un)!=null}function Bt(){return Ne(Ln(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Un).location}var wm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zm(o){E.useContext(At).static||E.useLayoutEffect(o)}function Zg(){let{isDataRoute:o}=E.useContext(ra);return o?iy():Kg()}function Kg(){Ne(Ln(),"useNavigate() may be used only in the context of a <Router> component.");let o=E.useContext(Ll),{basename:d,navigator:f}=E.useContext(At),{matches:u}=E.useContext(ra),{pathname:m}=Bt(),p=JSON.stringify(gm(u)),g=E.useRef(!1);return zm(()=>{g.current=!0}),E.useCallback((b,x={})=>{if(Mt(g.current,wm),!g.current)return;if(typeof b=="number"){f.go(b);return}let D=kc(b,JSON.parse(p),m,x.relative==="path");o==null&&d!=="/"&&(D.pathname=D.pathname==="/"?d:kt([d,D.pathname])),(x.replace?f.replace:f.push)(D,x.state,x)},[d,f,p,m,o])}E.createContext(null);function Hn(o,{relative:d}={}){let{matches:f}=E.useContext(ra),{pathname:u}=Bt(),m=JSON.stringify(gm(f));return E.useMemo(()=>kc(o,JSON.parse(m),u,d==="path"),[o,m,u,d])}function Jg(o,d){return Em(o,d)}function Em(o,d,f){Ne(Ln(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=E.useContext(At),{matches:m}=E.useContext(ra),p=m[m.length-1],g=p?p.params:{},N=p?p.pathname:"/",b=p?p.pathnameBase:"/",x=p&&p.route;{let L=x&&x.path||"";Nm(N,!x||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${N}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let D=Bt(),S;if(d){let L=typeof d=="string"?$a(d):d;Ne(b==="/"||L.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${L.pathname}" was given in the \`location\` prop.`),S=L}else S=D;let U=S.pathname||"/",X=U;if(b!=="/"){let L=b.replace(/^\//,"").split("/");X="/"+U.replace(/^\//,"").split("/").slice(L.length).join("/")}let Q=mm(o,{pathname:X});Mt(x||Q!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Mt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=Pg(Q&&Q.map(L=>Object.assign({},L,{params:Object.assign({},g,L.params),pathname:kt([b,u.encodeLocation?u.encodeLocation(L.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?b:kt([b,u.encodeLocation?u.encodeLocation(L.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),m,f);return d&&B?E.createElement(Un.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...S},navigationType:"POP"}},B):B}function Fg(){let o=ny(),d=Ug(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),f=o instanceof Error?o.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},g=null;return console.error("Error handled by React Router default ErrorBoundary:",o),g=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:p},"ErrorBoundary")," or"," ",E.createElement("code",{style:p},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},d),f?E.createElement("pre",{style:m},f):null,g)}var Wg=E.createElement(Fg,null),Tm=class extends E.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,d){return d.location!==o.location||d.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:d.error,location:d.location,revalidation:o.revalidation||d.revalidation}}componentDidCatch(o,d){this.props.onError?this.props.onError(o,d):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const f=Qg(o.digest);f&&(o=f)}let d=o!==void 0?E.createElement(ra.Provider,{value:this.props.routeContext},E.createElement(Bc.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?E.createElement($g,{error:o},d):d}};Tm.contextType=bm;var _c=new WeakMap;function $g({children:o,error:d}){let{basename:f}=E.useContext(At);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let u=Xg(d.digest);if(u){let m=_c.get(d);if(m)throw m;let p=xm(u.location,f);if(ym&&!_c.get(d))if(p.isExternal||u.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:u.replace}));throw _c.set(d,g),g}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return o}function Ig({routeContext:o,match:d,children:f}){let u=E.useContext(Ll);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),E.createElement(ra.Provider,{value:o},f)}function Pg(o,d=[],f){let u=f?.state;if(o==null){if(!u)return null;if(u.errors)o=u.matches;else if(d.length===0&&!u.initialized&&u.matches.length>0)o=u.matches;else return null}let m=o,p=u?.errors;if(p!=null){let D=m.findIndex(S=>S.route.id&&p?.[S.route.id]!==void 0);Ne(D>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,D+1))}let g=!1,N=-1;if(f&&u){g=u.renderFallback;for(let D=0;D<m.length;D++){let S=m[D];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(N=D),S.route.id){let{loaderData:U,errors:X}=u,Q=S.route.loader&&!U.hasOwnProperty(S.route.id)&&(!X||X[S.route.id]===void 0);if(S.route.lazy||Q){f.isStatic&&(g=!0),N>=0?m=m.slice(0,N+1):m=[m[0]];break}}}}let b=f?.onError,x=u&&b?(D,S)=>{b(D,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:Lg(u.matches),errorInfo:S})}:void 0;return m.reduceRight((D,S,U)=>{let X,Q=!1,B=null,L=null;u&&(X=p&&S.route.id?p[S.route.id]:void 0,B=S.route.errorElement||Wg,g&&(N<0&&U===0?(Nm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,L=null):N===U&&(Q=!0,L=S.route.hydrateFallbackElement||null)));let K=d.concat(m.slice(0,U+1)),I=()=>{let J;return X?J=B:Q?J=L:S.route.Component?J=E.createElement(S.route.Component,null):S.route.element?J=S.route.element:J=D,E.createElement(Ig,{match:S,routeContext:{outlet:D,matches:K,isDataRoute:u!=null},children:J})};return u&&(S.route.ErrorBoundary||S.route.errorElement||U===0)?E.createElement(Tm,{location:u.location,revalidation:u.revalidation,component:B,error:X,children:I(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:x}):I()},null)}function Yc(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ey(o){let d=E.useContext(Ll);return Ne(d,Yc(o)),d}function ty(o){let d=E.useContext(rr);return Ne(d,Yc(o)),d}function ay(o){let d=E.useContext(ra);return Ne(d,Yc(o)),d}function Gc(o){let d=ay(o),f=d.matches[d.matches.length-1];return Ne(f.route.id,`${o} can only be used on routes that contain a unique "id"`),f.route.id}function ly(){return Gc("useRouteId")}function ny(){let o=E.useContext(Bc),d=ty("useRouteError"),f=Gc("useRouteError");return o!==void 0?o:d.errors?.[f]}function iy(){let{router:o}=ey("useNavigate"),d=Gc("useNavigate"),f=E.useRef(!1);return zm(()=>{f.current=!0}),E.useCallback(async(m,p={})=>{Mt(f.current,wm),f.current&&(typeof m=="number"?await o.navigate(m):await o.navigate(m,{fromRouteId:d,...p}))},[o,d])}var sm={};function Nm(o,d,f){!d&&!sm[o]&&(sm[o]=!0,Mt(!1,f))}E.memo(ry);function ry({routes:o,future:d,state:f,isStatic:u,onError:m}){return Em(o,void 0,{state:f,isStatic:u,onError:m})}function Nt(o){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function oy({basename:o="/",children:d=null,location:f,navigationType:u="POP",navigator:m,static:p=!1,unstable_useTransitions:g}){Ne(!Ln(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let N=o.replace(/^\/*/,"/"),b=E.useMemo(()=>({basename:N,navigator:m,static:p,unstable_useTransitions:g,future:{}}),[N,m,p,g]);typeof f=="string"&&(f=$a(f));let{pathname:x="/",search:D="",hash:S="",state:U=null,key:X="default",unstable_mask:Q}=f,B=E.useMemo(()=>{let L=ia(x,N);return L==null?null:{location:{pathname:L,search:D,hash:S,state:U,key:X,unstable_mask:Q},navigationType:u}},[N,x,D,S,U,X,u,Q]);return Mt(B!=null,`<Router basename="${N}"> is not able to match the URL "${x}${D}${S}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:E.createElement(At.Provider,{value:b},E.createElement(Un.Provider,{children:d,value:B}))}function cy({children:o,location:d}){return Jg(Hc(o),d)}function Hc(o,d=[]){let f=[];return E.Children.forEach(o,(u,m)=>{if(!E.isValidElement(u))return;let p=[...d,m];if(u.type===E.Fragment){f.push.apply(f,Hc(u.props.children,p));return}Ne(u.type===Nt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!u.props.index||!u.props.children,"An index route cannot have child routes.");let g={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(g.children=Hc(u.props.children,p)),f.push(g)}),f}var lr="get",nr="application/x-www-form-urlencoded";function or(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function uy(o){return or(o)&&o.tagName.toLowerCase()==="button"}function sy(o){return or(o)&&o.tagName.toLowerCase()==="form"}function dy(o){return or(o)&&o.tagName.toLowerCase()==="input"}function fy(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function my(o,d){return o.button===0&&(!d||d==="_self")&&!fy(o)}var ar=null;function hy(){if(ar===null)try{new FormData(document.createElement("form"),0),ar=!1}catch{ar=!0}return ar}var py=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uc(o){return o!=null&&!py.has(o)?(Mt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nr}"`),null):o}function gy(o,d){let f,u,m,p,g;if(sy(o)){let N=o.getAttribute("action");u=N?ia(N,d):null,f=o.getAttribute("method")||lr,m=Uc(o.getAttribute("enctype"))||nr,p=new FormData(o)}else if(uy(o)||dy(o)&&(o.type==="submit"||o.type==="image")){let N=o.form;if(N==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=o.getAttribute("formaction")||N.getAttribute("action");if(u=b?ia(b,d):null,f=o.getAttribute("formmethod")||N.getAttribute("method")||lr,m=Uc(o.getAttribute("formenctype"))||Uc(N.getAttribute("enctype"))||nr,p=new FormData(N,o),!hy()){let{name:x,type:D,value:S}=o;if(D==="image"){let U=x?`${x}.`:"";p.append(`${U}x`,"0"),p.append(`${U}y`,"0")}else x&&p.append(x,S)}}else{if(or(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=lr,u=null,m=nr,g=o}return p&&m==="text/plain"&&(g=p,p=void 0),{action:u,method:f.toLowerCase(),encType:m,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xc(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Am(o,d,f,u){let m=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${u}`:m.pathname=`${m.pathname}.${u}`:m.pathname==="/"?m.pathname=`_root.${u}`:d&&ia(m.pathname,d)==="/"?m.pathname=`${d.replace(/\/$/,"")}/_root.${u}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${u}`,m}async function yy(o,d){if(o.id in d)return d[o.id];try{let f=await import(o.module);return d[o.id]=f,f}catch(f){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xy(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function vy(o,d,f){let u=await Promise.all(o.map(async m=>{let p=d.routes[m.route.id];if(p){let g=await yy(p,f);return g.links?g.links():[]}return[]}));return wy(u.flat(1).filter(xy).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function dm(o,d,f,u,m,p){let g=(b,x)=>f[x]?b.route.id!==f[x].route.id:!0,N=(b,x)=>f[x].pathname!==b.pathname||f[x].route.path?.endsWith("*")&&f[x].params["*"]!==b.params["*"];return p==="assets"?d.filter((b,x)=>g(b,x)||N(b,x)):p==="data"?d.filter((b,x)=>{let D=u.routes[b.route.id];if(!D||!D.hasLoader)return!1;if(g(b,x)||N(b,x))return!0;if(b.route.shouldRevalidate){let S=b.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function by(o,d,{includeHydrateFallback:f}={}){return jy(o.map(u=>{let m=d.routes[u.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function jy(o){return[...new Set(o)]}function Sy(o){let d={},f=Object.keys(o).sort();for(let u of f)d[u]=o[u];return d}function wy(o,d){let f=new Set;return new Set(d),o.reduce((u,m)=>{let p=JSON.stringify(Sy(m));return f.has(p)||(f.add(p),u.push({key:p,link:m})),u},[])}function Qc(){let o=E.useContext(Ll);return Xc(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function zy(){let o=E.useContext(rr);return Xc(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Vc=E.createContext(void 0);Vc.displayName="FrameworkContext";function Zc(){let o=E.useContext(Vc);return Xc(o,"You must render this element inside a <HydratedRouter> element"),o}function Ey(o,d){let f=E.useContext(Vc),[u,m]=E.useState(!1),[p,g]=E.useState(!1),{onFocus:N,onBlur:b,onMouseEnter:x,onMouseLeave:D,onTouchStart:S}=d,U=E.useRef(null);E.useEffect(()=>{if(o==="render"&&g(!0),o==="viewport"){let B=K=>{K.forEach(I=>{g(I.isIntersecting)})},L=new IntersectionObserver(B,{threshold:.5});return U.current&&L.observe(U.current),()=>{L.disconnect()}}},[o]),E.useEffect(()=>{if(u){let B=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(B)}}},[u]);let X=()=>{m(!0)},Q=()=>{m(!1),g(!1)};return f?o!=="intent"?[p,U,{}]:[p,U,{onFocus:On(N,X),onBlur:On(b,Q),onMouseEnter:On(x,X),onMouseLeave:On(D,Q),onTouchStart:On(S,X)}]:[!1,U,{}]}function On(o,d){return f=>{o&&o(f),f.defaultPrevented||d(f)}}function Ty({page:o,...d}){let f=qg(),{router:u}=Qc(),m=E.useMemo(()=>mm(u.routes,o,u.basename),[u.routes,o,u.basename]);return m?f?E.createElement(Ay,{page:o,matches:m,...d}):E.createElement(Ry,{page:o,matches:m,...d}):null}function Ny(o){let{manifest:d,routeModules:f}=Zc(),[u,m]=E.useState([]);return E.useEffect(()=>{let p=!1;return vy(o,d,f).then(g=>{p||m(g)}),()=>{p=!0}},[o,d,f]),u}function Ay({page:o,matches:d,...f}){let u=Bt(),{future:m}=Zc(),{basename:p}=Qc(),g=E.useMemo(()=>{if(o===u.pathname+u.search+u.hash)return[];let N=Am(o,p,m.unstable_trailingSlashAwareDataRequests,"rsc"),b=!1,x=[];for(let D of d)typeof D.route.shouldRevalidate=="function"?b=!0:x.push(D.route.id);return b&&x.length>0&&N.searchParams.set("_routes",x.join(",")),[N.pathname+N.search]},[p,m.unstable_trailingSlashAwareDataRequests,o,u,d]);return E.createElement(E.Fragment,null,g.map(N=>E.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...f})))}function Ry({page:o,matches:d,...f}){let u=Bt(),{future:m,manifest:p,routeModules:g}=Zc(),{basename:N}=Qc(),{loaderData:b,matches:x}=zy(),D=E.useMemo(()=>dm(o,d,x,p,u,"data"),[o,d,x,p,u]),S=E.useMemo(()=>dm(o,d,x,p,u,"assets"),[o,d,x,p,u]),U=E.useMemo(()=>{if(o===u.pathname+u.search+u.hash)return[];let B=new Set,L=!1;if(d.forEach(I=>{let J=p.routes[I.route.id];!J||!J.hasLoader||(!D.some(ve=>ve.route.id===I.route.id)&&I.route.id in b&&g[I.route.id]?.shouldRevalidate||J.hasClientLoader?L=!0:B.add(I.route.id))}),B.size===0)return[];let K=Am(o,N,m.unstable_trailingSlashAwareDataRequests,"data");return L&&B.size>0&&K.searchParams.set("_routes",d.filter(I=>B.has(I.route.id)).map(I=>I.route.id).join(",")),[K.pathname+K.search]},[N,m.unstable_trailingSlashAwareDataRequests,b,u,p,D,d,o,g]),X=E.useMemo(()=>by(S,p),[S,p]),Q=Ny(S);return E.createElement(E.Fragment,null,U.map(B=>E.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...f})),X.map(B=>E.createElement("link",{key:B,rel:"modulepreload",href:B,...f})),Q.map(({key:B,link:L})=>E.createElement("link",{key:B,nonce:f.nonce,...L,crossOrigin:L.crossOrigin??f.crossOrigin})))}function Cy(...o){return d=>{o.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var Dy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dy&&(window.__reactRouterVersion="7.14.0")}catch{}function My({basename:o,children:d,unstable_useTransitions:f,window:u}){let m=E.useRef();m.current==null&&(m.current=dg({window:u,v5Compat:!0}));let p=m.current,[g,N]=E.useState({action:p.action,location:p.location}),b=E.useCallback(x=>{f===!1?N(x):E.startTransition(()=>N(x))},[f]);return E.useLayoutEffect(()=>p.listen(b),[p,b]),E.createElement(oy,{basename:o,children:d,location:g.location,navigationType:g.action,navigator:p,unstable_useTransitions:f})}var Rm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ie=E.forwardRef(function({onClick:d,discover:f="render",prefetch:u="none",relative:m,reloadDocument:p,replace:g,unstable_mask:N,state:b,target:x,to:D,preventScrollReset:S,viewTransition:U,unstable_defaultShouldRevalidate:X,...Q},B){let{basename:L,navigator:K,unstable_useTransitions:I}=E.useContext(At),J=typeof D=="string"&&Rm.test(D),ve=xm(D,L);D=ve.to;let be=Vg(D,{relative:m}),Te=Bt(),W=null;if(N){let _e=kc(N,[],Te.unstable_mask?Te.unstable_mask.pathname:"/",!0);L!=="/"&&(_e.pathname=_e.pathname==="/"?L:kt([L,_e.pathname])),W=K.createHref(_e)}let[Ce,Ke,Ot]=Ey(u,Q),pt=Ly(D,{replace:g,unstable_mask:N,state:b,target:x,preventScrollReset:S,relative:m,viewTransition:U,unstable_defaultShouldRevalidate:X,unstable_useTransitions:I});function Je(_e){d&&d(_e),_e.defaultPrevented||pt(_e)}let _t=!(ve.isExternal||p),gt=E.createElement("a",{...Q,...Ot,href:(_t?W:void 0)||ve.absoluteURL||be,onClick:_t?Je:d,ref:Cy(B,Ke),target:x,"data-discover":!J&&f==="render"?"true":void 0});return Ce&&!J?E.createElement(E.Fragment,null,gt,E.createElement(Ty,{page:be})):gt});ie.displayName="Link";var Oy=E.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:u="",end:m=!1,style:p,to:g,viewTransition:N,children:b,...x},D){let S=Hn(g,{relative:x.relative}),U=Bt(),X=E.useContext(rr),{navigator:Q,basename:B}=E.useContext(At),L=X!=null&&Yy(S)&&N===!0,K=Q.encodeLocation?Q.encodeLocation(S).pathname:S.pathname,I=U.pathname,J=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;f||(I=I.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&B&&(J=ia(J,B)||J);const ve=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let be=I===K||!m&&I.startsWith(K)&&I.charAt(ve)==="/",Te=J!=null&&(J===K||!m&&J.startsWith(K)&&J.charAt(K.length)==="/"),W={isActive:be,isPending:Te,isTransitioning:L},Ce=be?d:void 0,Ke;typeof u=="function"?Ke=u(W):Ke=[u,be?"active":null,Te?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let Ot=typeof p=="function"?p(W):p;return E.createElement(ie,{...x,"aria-current":Ce,className:Ke,ref:D,style:Ot,to:g,viewTransition:N},typeof b=="function"?b(W):b)});Oy.displayName="NavLink";var _y=E.forwardRef(({discover:o="render",fetcherKey:d,navigate:f,reloadDocument:u,replace:m,state:p,method:g=lr,action:N,onSubmit:b,relative:x,preventScrollReset:D,viewTransition:S,unstable_defaultShouldRevalidate:U,...X},Q)=>{let{unstable_useTransitions:B}=E.useContext(At),L=ky(),K=By(N,{relative:x}),I=g.toLowerCase()==="get"?"get":"post",J=typeof N=="string"&&Rm.test(N),ve=be=>{if(b&&b(be),be.defaultPrevented)return;be.preventDefault();let Te=be.nativeEvent.submitter,W=Te?.getAttribute("formmethod")||g,Ce=()=>L(Te||be.currentTarget,{fetcherKey:d,method:W,navigate:f,replace:m,state:p,relative:x,preventScrollReset:D,viewTransition:S,unstable_defaultShouldRevalidate:U});B&&f!==!1?E.startTransition(()=>Ce()):Ce()};return E.createElement("form",{ref:Q,method:I,action:K,onSubmit:u?b:ve,...X,"data-discover":!J&&o==="render"?"true":void 0})});_y.displayName="Form";function Uy(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cm(o){let d=E.useContext(Ll);return Ne(d,Uy(o)),d}function Ly(o,{target:d,replace:f,unstable_mask:u,state:m,preventScrollReset:p,relative:g,viewTransition:N,unstable_defaultShouldRevalidate:b,unstable_useTransitions:x}={}){let D=Zg(),S=Bt(),U=Hn(o,{relative:g});return E.useCallback(X=>{if(my(X,d)){X.preventDefault();let Q=f!==void 0?f:_n(S)===_n(U),B=()=>D(o,{replace:Q,unstable_mask:u,state:m,preventScrollReset:p,relative:g,viewTransition:N,unstable_defaultShouldRevalidate:b});x?E.startTransition(()=>B()):B()}},[S,D,U,f,u,m,d,o,p,g,N,b,x])}var Hy=0,qy=()=>`__${String(++Hy)}__`;function ky(){let{router:o}=Cm("useSubmit"),{basename:d}=E.useContext(At),f=ly(),u=o.fetch,m=o.navigate;return E.useCallback(async(p,g={})=>{let{action:N,method:b,encType:x,formData:D,body:S}=gy(p,d);if(g.navigate===!1){let U=g.fetcherKey||qy();await u(U,f,g.action||N,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:D,body:S,formMethod:g.method||b,formEncType:g.encType||x,flushSync:g.flushSync})}else await m(g.action||N,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:D,body:S,formMethod:g.method||b,formEncType:g.encType||x,replace:g.replace,state:g.state,fromRouteId:f,flushSync:g.flushSync,viewTransition:g.viewTransition})},[u,m,d,f])}function By(o,{relative:d}={}){let{basename:f}=E.useContext(At),u=E.useContext(ra);Ne(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),p={...Hn(o||".",{relative:d})},g=Bt();if(o==null){p.search=g.search;let N=new URLSearchParams(p.search),b=N.getAll("index");if(b.some(D=>D==="")){N.delete("index"),b.filter(S=>S).forEach(S=>N.append("index",S));let D=N.toString();p.search=D?`?${D}`:""}}return(!o||o===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:kt([f,p.pathname])),_n(p)}function Yy(o,{relative:d}={}){let f=E.useContext(jm);Ne(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Cm("useViewTransitionState"),m=Hn(o,{relative:d});if(!f.isTransitioning)return!1;let p=ia(f.currentLocation.pathname,u)||f.currentLocation.pathname,g=ia(f.nextLocation.pathname,u)||f.nextLocation.pathname;return ir(m.pathname,g)!=null||ir(m.pathname,p)!=null}function Gy(){const[o,d]=E.useState(!0);return E.useEffect(()=>{const f=setTimeout(()=>{d(!1)},500);return()=>clearTimeout(f)},[]),r.jsxs("div",{id:"loader",style:{opacity:o?1:0,transition:"opacity 0.5s ease",pointerEvents:o?"auto":"none"},children:[r.jsx("div",{className:"spinner"}),r.jsx("p",{className:"loader-text",children:"Loading..."})]})}function Dm(){const[o,d]=E.useState(null);E.useEffect(()=>{const m=localStorage.getItem("theme");if(m)d(m==="dark"),f(m);else{const p=window.matchMedia("(prefers-color-scheme: dark)").matches;d(p),f(p?"dark":"light")}},[]);const f=m=>{document.documentElement.classList.remove("light-theme","dark-theme"),m==="light"?document.documentElement.classList.add("light-theme"):document.documentElement.classList.add("dark-theme"),localStorage.setItem("theme",m)},u=()=>{const m=o?"light":"dark";d(!o),f(m)};return o===null?null:r.jsx("button",{onClick:u,title:o?"Switch to Light Mode":"Switch to Dark Mode",style:{background:"transparent",border:"none",color:"inherit",cursor:"pointer",fontSize:"1.2rem",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",width:"36px",height:"36px",transition:"all 0.2s ease"},onMouseEnter:m=>m.target.style.opacity="0.7",onMouseLeave:m=>m.target.style.opacity="1",children:o?r.jsx("i",{className:"fas fa-sun"}):r.jsx("i",{className:"fas fa-moon"})})}function Xy({open:o,onClose:d}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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

        `}),r.jsx("div",{className:`overlay ${o?"show":""}`,onClick:d}),r.jsx("div",{className:`theme-toggle-wrapper ${o?"show":""}`,children:r.jsx(Dm,{})}),r.jsxs("div",{className:`menu ${o?"open":""}`,children:[r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Project"}),r.jsx(ie,{className:"link",to:"/about",onClick:d,children:"About"}),r.jsx(ie,{className:"link",to:"/features",onClick:d,children:"Features"}),r.jsx(ie,{className:"link",to:"/roadmap",onClick:d,children:"Roadmap"}),r.jsx(ie,{className:"link",to:"/wiki",onClick:d,children:"Wiki"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Explore"}),r.jsx(ie,{className:"link",to:"/faq",onClick:d,children:"FAQ"}),r.jsx(ie,{className:"link",to:"/contact",onClick:d,children:"Contact"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Workshop"}),r.jsx("a",{className:"link",href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{className:"link",href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create"})]}),r.jsx("div",{className:"divider"}),r.jsxs("div",{className:"section",children:[r.jsx("div",{className:"title",children:"Contribute"}),r.jsx("a",{className:"link",href:"https://github.com/MasterAcnolo/Freedom-Loader",children:"GitHub"}),r.jsx(ie,{className:"link",to:"/contributing",onClick:d,children:"Guide"})]}),r.jsx(ie,{to:"/download",className:"header-btn",onClick:d,children:"Download"})]})]})}function Qy(){const[o,d]=E.useState(null),[f,u]=E.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
        `}),r.jsxs("header",{className:"header",children:[r.jsx(ie,{to:"/",className:"logo",children:r.jsx("img",{src:"./assets/icon/Freedom_Loader.png",alt:"logo"})}),r.jsxs("nav",{className:"nav",children:[r.jsxs("div",{className:`item ${o==="project"?"open":""}`,onMouseEnter:()=>d("project"),onMouseLeave:()=>d(null),children:[r.jsxs("div",{className:"trigger",children:["Project ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx(ie,{to:"/about",children:"About"}),r.jsx(ie,{to:"/features",children:"Features"}),r.jsx(ie,{to:"/roadmap",children:"Roadmap"}),r.jsx(ie,{to:"/wiki",children:"Wiki"})]})]}),r.jsxs("div",{className:`item ${o==="explore"?"open":""}`,onMouseEnter:()=>d("explore"),onMouseLeave:()=>d(null),children:[r.jsxs("div",{className:"trigger",children:["Explore ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx(ie,{to:"/faq",children:"FAQ"}),r.jsx(ie,{to:"/contact",children:"Contact"})]})]}),r.jsxs("div",{className:`item ${o==="workshop"?"open":""}`,onMouseEnter:()=>d("workshop"),onMouseLeave:()=>d(null),children:[r.jsxs("div",{className:"trigger",children:["Workshop ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create Theme"})]})]}),r.jsxs("div",{className:`item ${o==="contribute"?"open":""}`,onMouseEnter:()=>d("contribute"),onMouseLeave:()=>d(null),children:[r.jsxs("div",{className:"trigger",children:["Contribute ",r.jsx("span",{className:"arrow",children:"▾"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",children:"GitHub"}),r.jsx(ie,{to:"/contributing",children:"Guide"})]})]}),r.jsx(ie,{to:"/download",className:"header-btn",children:"Download"}),r.jsx(Dm,{})]}),r.jsxs("div",{className:`hamburger ${f?"open":""}`,onClick:()=>u(!f),children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]}),r.jsx(Xy,{open:f,onClose:()=>u(!1)})]})}function Vy(){const o=new Date().getFullYear();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsxs("footer",{children:[r.jsxs("div",{className:"footer-container",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx(ie,{to:"/",children:r.jsx("img",{src:"./assets/icon/Freedom_Loader.png",alt:"Freedom Loader"})}),r.jsx("p",{children:"Put Freedom in your Downloads."})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Site"}),r.jsx(ie,{to:"/",children:"Home"}),r.jsx(ie,{to:"/about",children:"About"}),r.jsx(ie,{to:"/features",children:"Features"}),r.jsx(ie,{to:"/roadmap",children:"Roadmap"}),r.jsx(ie,{to:"/download",children:"Download"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Workshop"}),r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Browse Themes"}),r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html",target:"_blank",rel:"noopener noreferrer",children:"Create Theme"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Legal"}),r.jsx(ie,{to:"/contact",children:"Contact"}),r.jsx(ie,{to:"/privacy",children:"Privacy"}),r.jsx(ie,{to:"/terms",children:"Terms"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Community"}),r.jsx(ie,{to:"/faq",children:"FAQ"}),r.jsx(ie,{to:"/wiki",children:"Wiki"}),r.jsx(ie,{to:"/contributing",children:"Contributing"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",rel:"noopener noreferrer",children:"Discussions"})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h4",{children:"Follow Us"}),r.jsxs("div",{className:"footer-socials",children:[r.jsx("a",{href:"https://masteracnolo.github.io/",target:"_blank",rel:"noopener noreferrer",title:"Website",children:r.jsx("img",{src:"./assets/icon/globe-solid-full.svg",alt:"Website"})}),r.jsx("a",{href:"https://x.com/MasterAcnolo",target:"_blank",rel:"noopener noreferrer",title:"Twitter/X",children:r.jsx("img",{src:"./assets/icon/x-twitter-brands-solid-full.svg",alt:"Twitter/X"})}),r.jsx("a",{href:"https://github.com/MasterAcnolo",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:r.jsx("img",{src:"./assets/icon/github-brands-solid-full.svg",alt:"GitHub"})})]})]})]}),r.jsx("div",{className:"footer-bottom",children:r.jsxs("p",{children:["© ",o," Freedom Loader — All rights reserved."]})})]})]})}function Zy(){const{pathname:o}=Bt();return E.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[o]),null}const Ky=o=>1-Math.pow(1-o,2),fm=(o,d,f,u)=>{const[m,p]=E.useState(o);return E.useEffect(()=>{if(!u)return;let g=null;const N=b=>{g||(g=b);const x=b-g,D=Math.min(x/(f*1e3),1),S=Ky(D),U=Math.round(o+(d-o)*S);p(U),D<1&&requestAnimationFrame(N)};requestAnimationFrame(N)},[u,o,d,f]),m};function Jy(){const[o,d]=E.useState(!1),f=E.useRef(null),u=fm(0,100,2,o),m=fm(100,0,2,o);return E.useEffect(()=>{const p=new IntersectionObserver(([g])=>{g.isIntersecting&&(d(!0),p.unobserve(f.current))},{threshold:.5});return f.current&&p.observe(f.current),()=>{f.current&&p.unobserve(f.current)}},[]),E.useEffect(()=>{document.title="Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsxs("main",{className:"home",children:[r.jsx("section",{className:"hero",children:r.jsxs("div",{className:"hero-content",children:[r.jsx("h1",{children:"Put Freedom in Your Downloads"}),r.jsxs("p",{children:["Fast, simple, powerful media downloads. ",r.jsx("br",{})," Not the best in the world - just the safest."]}),r.jsxs("div",{className:"tagline",children:[r.jsxs("div",{className:"tagline-item",children:[r.jsx("i",{className:"fas fa-bolt"}),r.jsx("span",{children:"Free"})]}),r.jsxs("div",{className:"tagline-item",children:[r.jsx("i",{className:"fas fa-lock"}),r.jsx("span",{children:"Privacy First"})]}),r.jsxs("div",{className:"tagline-item",children:[r.jsx("i",{className:"fas fa-bullseye"}),r.jsx("span",{children:" Simple"})]})]}),r.jsxs("div",{className:"hero-buttons",children:[r.jsx(ie,{to:"/download",className:"btn-primary",children:"Download Now"}),r.jsx("a",{href:"#features",className:"btn-secondary",children:"Learn More"})]}),r.jsxs("div",{className:"stats",ref:f,children:[r.jsxs("div",{className:"stat",children:[r.jsxs("div",{className:"stat-number",children:[u,"%"]}),r.jsx("div",{className:"stat-label",children:"Open Source"})]}),r.jsxs("div",{className:"stat",children:[r.jsxs("div",{className:"stat-number",children:[m,"%"]}),r.jsx("div",{className:"stat-label",children:"Data Collection"})]})]})]})}),r.jsxs("section",{className:"features",id:"features",children:[r.jsx("h2",{className:"section-title",children:"Why You'll Love It"}),r.jsxs("div",{className:"features-grid",children:[r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-sliders-h feature-icon"}),r.jsx("h3",{children:"Configurable"}),r.jsx("p",{children:"Customize every aspect to your needs. Advanced settings for power users, simple defaults for everyone else. Your choice."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-lock feature-icon"}),r.jsx("h3",{children:"100% Private"}),r.jsx("p",{children:"No tracking, no analytics, no data collection. Everything stays on YOUR machine."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-music feature-icon"}),r.jsx("h3",{children:"Any Format"}),r.jsx("p",{children:"Videos, audio, playlists, streams. If it's online, Freedom Loader can grab it."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-heart feature-icon"}),r.jsx("h3",{children:"User First"}),r.jsx("p",{children:"Built with exceptional UX in mind. Intuitive design, smooth workflows, and a pleasure to use every single day."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-feather feature-icon"}),r.jsx("h3",{children:"Zero Bloat"}),r.jsx("p",{children:"Lightweight, fast, efficient. No ads, no spyware, just pure functionality."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("i",{className:"fas fa-download feature-icon"}),r.jsx("h3",{children:"Super Simple"}),r.jsx("p",{children:"Click, download, done. No complex settings, no confusing menus. Just simplicity."})]})]})]}),r.jsx("section",{className:"community",children:r.jsxs("div",{className:"community-content",children:[r.jsx("h2",{className:"community-title",children:"Join Our Community"}),r.jsx("p",{className:"community-text",children:"Freedom Loader thrives because of its vibrant community. Share your experience, contribute ideas, report bugs, or just stay connected with others like-minded users."}),r.jsxs("div",{className:"community-links",children:[r.jsxs("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",rel:"noopener noreferrer",className:"community-link",children:[r.jsx("i",{className:"fas fa-comments"}),"GitHub Discussions"]}),r.jsxs("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",target:"_blank",rel:"noopener noreferrer",className:"community-link",children:[r.jsx("i",{className:"fab fa-github"}),"Star on GitHub"]}),r.jsxs(ie,{to:"/contributing",className:"community-link",children:[r.jsx("i",{className:"fas fa-code-branch"}),"Contribute"]})]})]})}),r.jsxs("section",{className:"cta",children:[r.jsx("h2",{children:"Completely Free. Forever Free."}),r.jsx("p",{children:"No premium tier, no subscription, no hidden costs. Freedom Loader is free and will always be free. Download now and join all of the happy users."}),r.jsx(ie,{to:"/download",children:"Get Started Free"})]})]})]})}function Fy(){const o=navigator.userAgent;return/Windows/i.test(o)?"windows":/Linux/i.test(o)?"linux":"other"}const Wy=[{id:"copr",label:"Fedora — via COPR",tag:"Recommended",tagColor:"#4CAF50",description:"Install via DNF — updates are handled automatically by your package manager.",type:"code",externalUrl:"https://copr.fedorainfracloud.org/coprs/masteracnolo/freedom-loader/",code:`sudo dnf copr enable masteracnolo/freedom-loader
sudo dnf install freedom-loader`},{id:"snap",label:"Snap",tag:"Any distro with snapd",tagColor:"#82BEA0",description:"Install via Snap Store — managed by snapd, updates automatically.",type:"code",code:"sudo snap install freedom-loader",externalUrl:"https://snapcraft.io/freedom-loader",externalLabel:"View on Snap Store"},{id:"rpm",label:"RPM",tag:"Fedora · RHEL · openSUSE",tagColor:"#294172",description:"Standard RPM package for Fedora-based distributions.",type:"download",assetSuffix:".x86_64.rpm",assetPattern:o=>`freedom-loader-${o.replace("v","")}.x86_64.rpm`},{id:"deb",label:"DEB",tag:"Debian · Ubuntu",tagColor:"#A81D33",description:"Standard DEB package for Debian-based distributions.",type:"download",assetSuffix:".deb",assetPattern:o=>`freedom-loader_${o.replace("v","")}_amd64.deb`},{id:"appimage",label:"AppImage",tag:"Universal",tagColor:"#1E88E5",description:"No installation needed. Download, chmod +x, and run.",type:"download",assetSuffix:".AppImage",assetPattern:o=>`Freedom.Loader-${o}.AppImage`}];function $y(){E.useEffect(()=>{document.title="Download - Freedom Loader"},[]);const[o,d]=E.useState(""),[f,u]=E.useState([]),[m,p]=E.useState(!0),[g,N]=E.useState("other"),[b,x]=E.useState("auto");E.useEffect(()=>{const S=Fy();N(S),x(S==="windows"?"windows":S==="linux"?"linux":"windows")},[]),E.useEffect(()=>{(async()=>{try{const U=await fetch("https://api.github.com/repos/MasterAcnolo/Freedom-Loader/releases/latest");if(!U.ok)throw new Error(`Status: ${U.status}`);const X=await U.json();d(X.tag_name),u(X.assets||[])}catch(U){console.error("Failed to fetch release:",U.message)}finally{p(!1)}})()},[]);function D(S){if(!o)return null;const U=S(o),X=f.find(Q=>Q.name===U);return X?X.browser_download_url:"https://github.com/MasterAcnolo/Freedom-Loader/releases/latest"}return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsx("section",{className:"dl-page",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Download"}),r.jsxs("div",{className:"dl-tabs",children:[r.jsx("button",{className:`dl-tab${b==="windows"?" active":""}`,onClick:()=>x("windows"),children:"Windows"}),r.jsx("button",{className:`dl-tab${b==="linux"?" active":""}`,onClick:()=>x("linux"),children:"Linux"})]}),b==="windows"&&r.jsxs("div",{className:"dl-block",children:[r.jsxs("div",{className:"dl-header",children:[r.jsx("h3",{children:"Windows Installer"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/releases/latest",className:"btn primary",target:"_blank",rel:"noopener noreferrer",children:"Download on GitHub"})]}),r.jsxs("p",{children:["Installer (.exe), latest stable version from the official GitHub Releases page.",r.jsx("br",{}),'If Windows Defender shows a warning, click "More info" > "Run anyway".']})]}),b==="linux"&&r.jsx("div",{className:"linux-options",children:Wy.map(S=>r.jsxs("div",{className:"linux-option",children:[r.jsxs("div",{className:"linux-option-left",children:[r.jsxs("div",{className:"linux-option-title",children:[r.jsx("h4",{children:S.label}),r.jsx("span",{className:"linux-tag",style:{backgroundColor:S.tagColor},children:S.tag})]}),r.jsx("p",{children:S.description}),S.type==="code"&&r.jsx("div",{className:"linux-code",children:S.code})]}),r.jsxs("div",{className:"linux-option-right",children:[S.type==="download"&&r.jsx("a",{href:D(S.assetPattern)||"#",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:m?"Loading...":`Download ${S.label}`}),S.type==="external"&&r.jsx("a",{href:S.url,className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:S.btnLabel}),S.type==="code"&&r.jsxs("a",{href:S.externalUrl,className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:["View on ",S.label]})]})]},S.id))}),r.jsxs("div",{className:"dl-secondary-links",children:[r.jsxs("div",{className:"dl-link-row",children:[r.jsxs("div",{className:"dl-link-left",children:[r.jsx("h3",{children:"Latest Changelog"}),r.jsx("p",{children:"Release notes for the latest updates, fixes and new features."})]}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/releases/latest",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"View Changelog"})]}),r.jsxs("div",{className:"dl-link-row",children:[r.jsxs("div",{className:"dl-link-left",children:[r.jsx("h3",{children:"GitHub Repository"}),r.jsx("p",{children:"Source code, experimental builds, issues and contributions."})]}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"Open Repository"})]}),r.jsxs("div",{className:"dl-link-row",children:[r.jsxs("div",{className:"dl-link-left",children:[r.jsx("h3",{children:"Old Releases"}),r.jsx("p",{children:"Browse older versions and archived builds."})]}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/releases",className:"btn secondary",target:"_blank",rel:"noopener noreferrer",children:"View Old Releases"})]})]})]})})})]})}function Iy(){E.useEffect(()=>{document.title="About - Freedom Loader"},[]);const o=[{name:"Electron",img:"./assets/languages/electron.png",desc:"Desktop app framework using Chromium and Node.js."},{name:"Node.js",img:"./assets/languages/nodejs.png",desc:"Powering all background processes and filesystem tasks."},{name:"Express",img:"./assets/languages/express.svg",desc:"Powering the internal API",invert:!0},{name:"yt-dlp",img:"./assets/languages/ytDlp.png",desc:"Handles all video and audio extraction operations."},{name:"FFmpeg",img:"./assets/languages/ffmpeg.png",desc:"The industry standard for media merging and format conversion."},{name:"Deno",img:"./assets/languages/deno.png",desc:"Powering yt-dlp verification.",invert:!1},{name:"Winston",img:"./assets/languages/winston.png",desc:"Powering the Logger System"},{name:"JavaScript",img:"./assets/languages/js.png",desc:"Core logic and user interaction within the app."}],d=[{title:"Download Media",desc:"Download high-quality video and audio tracks easily."},{title:"Playlist Automation",desc:"Download entire playlists and auto-organize them into folders."},{title:"Cross-Platform",desc:"Fully supported on Windows 10/11 and major Linux distributions."},{title:"Firefox Integration",desc:"Securely use local cookies to bypass age-restricted content."},{title:"Advanced Codecs",desc:"Force H.264, H.265, AV1, or VP9 for perfect hardware compatibility."},{title:"Metadata Injection",desc:"Automatically embed titles, artists, and thumbnails into your files."},{title:"Hardware Acceleration",desc:"GPU-accelerated UI rendering for a smoother experience."},{title:"Dynamic Theme Engine",desc:"Change UI themes on the fly without restarting the app."},{title:"Community Workshop",desc:"Download and share custom themes with other users."},{title:"Discord Rich Presence",desc:"Showcase your current downloads directly on your Discord profile."},{title:"Custom Output",desc:"Flexible download folder settings and file renaming."},{title:"Background Mode",desc:"Minimize to the system tray to let downloads finish quietly."},{title:"Comprehensive Logs",desc:"Detailed local logs for diagnostics and bug reporting."},{title:"Auto Updates",desc:"Automatic app version management on startup."},{title:"Clean & Safe Boot",desc:"Optimized startup system verifying all dependencies safely."},{title:"100% Local & Private",desc:"No ads, no trackers, no analytics. Your data stays yours."}];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsxs("main",{children:[r.jsx("section",{className:"about",children:r.jsxs("div",{className:"about-container",children:[r.jsx("h1",{children:"About Freedom Loader"}),r.jsxs("p",{children:["Freedom Loader is a lightweight desktop app built with ",r.jsx("strong",{children:"Electron"})," that uses",r.jsx("strong",{children:" yt-dlp"})," to download videos and audio from the web easily and privately. It's made for people who just want control over their media - without ads, limits, or paywalls."]}),r.jsxs("p",{children:["I started this project out of frustration with the state of most downloaders. Too many were filled with ads, shady code, or unnecessary restrictions. Freedom Loader exists to put ",r.jsx("strong",{children:"freedom back into your downloads"}),"."]})]})}),r.jsx("section",{className:"history",children:r.jsxs("div",{className:"history-container",children:[r.jsx("h2",{children:"The Story Behind It"}),r.jsx("p",{children:'Freedom Loader was born from a simple need: downloading media without hassle. I wanted a tool that respected privacy, looked clean, and worked - period. No trackers, no "Pro" version, no weird popups. Just a reliable, open-source downloader for everyone.'}),r.jsxs("p",{children:["Over time, it became more than a tool - it's a statement against overcomplication. Built during late nights, Freedom Loader is the kind of app I wish existed when I was younger: fast, transparent, and free. Full story available ",r.jsx("a",{href:"https://masteracnolo.github.io/Blog/pourquoi-freedom-loader/",target:"_blank",rel:"noopener noreferrer",className:"story-link",children:"Here"})]})]})}),r.jsxs("section",{className:"features",children:[r.jsx("h2",{children:"Main Features"}),r.jsx("div",{className:"features-grid",children:d.map((f,u)=>r.jsxs("div",{className:"feature-card",children:[r.jsx("h3",{children:f.title}),r.jsx("p",{children:f.desc})]},u))})]}),r.jsxs("section",{className:"technos",children:[r.jsx("h2",{children:"Technologies Used"}),r.jsx("div",{className:"tech-grid",children:o.map((f,u)=>r.jsxs("div",{className:"tech-card",id:f.name,children:[r.jsx("img",{src:f.img,alt:f.name,className:f.invert?"invert-dark":""}),r.jsx("h3",{children:f.name}),r.jsx("p",{children:f.desc})]},u))})]}),r.jsxs("section",{className:"support",children:[r.jsx("h2",{children:"Support the Project"}),r.jsx("p",{children:"If you want to help Freedom Loader grow, you can contribute or support it directly."}),r.jsx("div",{className:"support-actions",children:r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",target:"_blank",rel:"noopener noreferrer",className:"btn secondary",children:"Contribute on GitHub"})})]})]})]})}function Py(){E.useEffect(()=>{document.title="Features - Freedom Loader"},[]);const[o,d]=E.useState(null),f=[{title:"Multi-Format Downloads",desc:"Download videos in MP4 or audio in MP3 with automatic conversion",icon:"fa-download",v:"1.0.0",cat:"Download"},{title:"Video Quality Selection",desc:"Choose from 6 quality options: Best, Medium, Worst, 1080p, 720p, 480p",icon:"fa-bars",v:"1.0.0",cat:"Download"},{title:"Playlist Support",desc:"Detect and download complete playlists",icon:"fa-list",v:"1.1.0",cat:"Download"},{title:"Video Information Preview",desc:"Preview metadata before download",icon:"fa-eye",v:"1.0.0",cat:"Download"},{title:"Auto Check Info",desc:"Automatically fetch video info when pasting URLs",icon:"fa-wand-magic-sparkles",v:"1.0.0",cat:"Download"},{title:"Metadata Embedding",desc:"Automatically embed title, artist, duration and thumbnail",icon:"fa-tag",v:"1.1.0",cat:"Download"},{title:"Thumbnail Embedding",desc:"Optional thumbnail addition to MP3 files",icon:"fa-image",v:"1.1.0",cat:"Download"},{title:"Custom Video Codecs",desc:"Support for 8 video codecs: H.264, H.265, AV1, VP9, VP9.2, VP8, H.263, Theora",icon:"fa-cog",v:"1.4.0",cat:"Download"},{title:"Custom Output Directory",desc:"Custom download folder selection",icon:"fa-folder-open",v:"1.1.0",cat:"Download"},{title:"Firefox Cookie Integration",desc:"Support Firefox cookies for restricted content",icon:"fa-brands fa-firefox-browser",v:"1.3.0",cat:"Download"},{title:"Real-Time Progress Tracking",desc:"Live progress bar with percentage and speed",icon:" fa-solid fa-hourglass",v:"1.3.0",cat:"Download"},{title:"Network Speed Indicator",desc:"Display download speed in real-time",icon:"fa-tachometer-alt",v:"1.3.0",cat:"Download"},{title:"Download Cancellation",desc:"Stop current download and clear queue",icon:"fa-ban",v:"1.5.0",cat:"Download"},{title:"Playlist Auto-Download Mode",desc:"Automatic playlist downloading without confirmation",icon:"fa-forward",v:"1.4.0",cat:"Download"},{title:"Playlist Folder Creation",desc:"Auto-create folders named after playlists",icon:"fa-folder-plus",v:"1.5.0",cat:"Download"},{title:"Playlist Info Streaming",desc:"Server-Sent Events streaming for live playlist info",icon:"fa-stream",v:"1.3.0",cat:"Download"},{title:"Audio-Only MP3 Conversion",desc:"Audio extraction and optimized MP3 conversion",icon:"fa-music",v:"1.1.0",cat:"Download"},{title:"Concurrent Fragment Downloads",desc:"8 fragments downloaded in parallel for acceleration",icon:"fa-network-wired",v:"1.1.0",cat:"Download"},{title:"Download Retry Logic",desc:"Automatic retry attempts (10 global retries)",icon:"fa-redo",v:"1.5.0",cat:"Download"},{title:"No File Overwrite",desc:"Protection against accidental file overwriting",icon:"fa-shield",v:"1.0.0",cat:"Download"},{title:"Playlist Index Ordering",desc:"Prefix downloaded playlist items with their index number",icon:"fa-list-ol",v:"1.6.1",cat:"Download"},{title:"File Signatures",desc:"Add signatures to downloaded files",icon:"fa-file-signature",v:"1.6.2",cat:"Download"},{title:"Dynamic Theme System",desc:"Pre-built theme system with dynamic switching",icon:"fa-palette",v:"1.1.0",cat:"Customization"},{title:"Custom Theme Support",desc:"Support for custom themes in .theme.json and ZIP formats",icon:"fa-expand",v:"1.5.0",cat:"Customization"},{title:"Custom Top Bar",desc:"Custom title bar and frameless (toggleable)",icon:"fa-window-maximize",v:"1.3.1",cat:"Customization"},{title:"Settings Panel",desc:"GUI for live configuration",icon:"fa-sliders",v:"1.4.0",cat:"Customization"},{title:"Theme Refresh Button",desc:"Dynamic theme reloading without restart",icon:"fa-sync",v:"1.5.0",cat:"Customization"},{title:"Automatic App Updates",desc:"Automatic update checking and installation",icon:"fa-repeat",v:"1.3.0",cat:"System"},{title:"YT-DLP Auto-Update",desc:"Auto-update yt-dlp engine on startup",icon:"fa-arrow-up",v:"1.2.4",cat:"System"},{title:"Single Instance Lock",desc:"Prevent multiple app instances",icon:"fa-lock",v:"1.3.0",cat:"System"},{title:"Native Dependency Validation",desc:"Startup validation of yt-dlp, FFmpeg, FFprobe and Deno",icon:"fa-check-circle",v:"1.3.1",cat:"System"},{title:"Structured Logging",desc:"Formatted logs with Winston and daily rotation",icon:"fa-file-alt",v:"1.1.2",cat:"System"},{title:"Verbose Logging",desc:"Detailed logs mode for advanced debugging",icon:"fa-terminal",v:"1.4.0",cat:"System"},{title:"Path Validation",desc:"Download path validation for security",icon:"fa-shield-alt",v:"1.4.0",cat:"System"},{title:"FFmpeg Integration",desc:"Full FFmpeg integration for media conversion",icon:"fa-video",v:"1.0.0",cat:"System"},{title:"Deno Runtime Integration",desc:"Deno runtime support for youtube challenge",icon:"fa-server",v:"1.3.0",cat:"System"},{title:"Firefox Browser Requirement",desc:"Built-in Firefox cookie extraction support",icon:"fa-brands fa-firefox-browser",v:"1.3.0",cat:"System"},{title:"Context Isolation",desc:"Electron context isolation for maximum security",icon:"fa-shield",v:"1.5.0",cat:"System"},{title:"Splash Screen",desc:"Startup splash screen with progress bar",icon:"fa-spinner",v:"1.5.0",cat:"System"},{title:"System Tray (Background Mode)",desc:"Minimize application to system tray [Experimental]",icon:"fa-minimize",v:"1.6.2",cat:"System"},{title:"Hardware Acceleration Toggle",desc:"Enable or disable hardware acceleration for better performance",icon:"fa-microchip",v:"1.6.2",cat:"System"},{title:"Cross-Platform Support",desc:"Fully supported on Windows and Linux (Snap, AppImage, RPM, DEB)",icon:"fa-linux",v:"1.6.0",cat:"System"},{title:"System Notifications",desc:"Native OS notifications when download completes",icon:"fa-bell",v:"1.1.1",cat:"Tools"},{title:"Logs Folder Access",desc:"Quick button to open logs folder",icon:"fa-folder",v:"1.1.2",cat:"Tools"},{title:"Configuration File Editor",desc:"Direct access to config.json from settings",icon:"fa-edit",v:"1.4.0",cat:"Tools"},{title:"Theme Folder Access",desc:"Quick access to themes folder for creation",icon:"fa-folder-open",v:"1.5.0",cat:"Tools"},{title:"Version Information",desc:"Display current version in interface",icon:"fa-info-circle",v:"1.4.0",cat:"Tools"},{title:"Download Stage Tracking",desc:"Real-time download stage tracking",icon:"fa-tasks",v:"1.3.0",cat:"Tools"},{title:"Server-Sent Events (SSE)",desc:"Non-blocking progress updates via streaming",icon:"fa-broadcast-tower",v:"1.3.0",cat:"Tools"},{title:"Progress Bar Display",desc:"Visual progress interface with percentage",icon:"fa-bars",v:"1.3.0",cat:"Tools"},{title:"IPC Communication",desc:"Secure Electron-Renderer IPC communication",icon:"fa-exchange-alt",v:"1.0.0",cat:"Tools"},{title:"Toast Notifications",desc:"Temporary UI notifications for user feedback",icon:"fa-comment",v:"1.5.0",cat:"Tools"},{title:"Discord Rich Presence",desc:"Discord integration showing activity",icon:"fa-brands fa-discord",v:"1.2.0",cat:"Integration"},{title:"Official Website Link",desc:"Quick access to official website from app",icon:"fa-globe",v:"1.0.0",cat:"Integration"},{title:"Wiki Access",desc:"Link to official documentation/wiki",icon:"fa-book",v:"1.0.0",cat:"Integration"},{title:"Theme Workshop",desc:"Access to Freedom Loader Theme Workshop",icon:"fa-tools",v:"1.2.0",cat:"Integration"},{title:"GitHub Releases Integration",desc:"GitHub releases integration for updates",icon:"fa-brands fa-github",v:"1.0.0",cat:"Integration"},{title:"YT-DLP Backend",desc:"Using yt-dlp as download engine",icon:"fa-download",v:"1.0.0",cat:"Integration"}],u=["All",...new Set(f.map(g=>g.cat))],m={Download:"#ff6b6b",Customization:"#4ecdc4",System:"#45b7d1",Tools:"#f9ca24",Integration:"#6c5ce7"},p=o&&o!=="All"?f.filter(g=>g.cat===o):f;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsxs("section",{className:"features-page",children:[r.jsxs("div",{className:"features-header",children:[r.jsx("h1",{children:"Features"}),r.jsx("p",{children:"Discover everything Freedom Loader can do. All fully organized by category for easy browsing."})]}),r.jsx("div",{className:"category-filter",children:u.map(g=>r.jsx("button",{className:`filter-btn ${o===g||o===null&&g==="All"?"active":""}`,onClick:()=>d(g==="All"?null:g),children:g},g))}),r.jsxs("div",{className:"features-stats",children:[r.jsxs("div",{className:"stat-box",children:[r.jsx("div",{className:"stat-number",children:p.length}),r.jsx("div",{className:"stat-label",children:o&&o!=="All"?o:"Total Features"})]}),r.jsxs("div",{className:"stat-box",children:[r.jsx("div",{className:"stat-number",children:r.jsx("i",{class:"fa-solid fa-infinity"})}),r.jsx("div",{className:"stat-label",children:"Possibilities"})]})]}),r.jsx("div",{className:"features-container",children:o===null?u.slice(1).map(g=>r.jsxs("div",{className:"category-section",children:[r.jsx("h2",{className:"category-title",style:{borderColor:m[g]||"#1e90ff"},children:g}),r.jsx("div",{className:"features-grid",children:f.filter(N=>N.cat===g).map((N,b)=>r.jsxs("div",{className:"feature-card",children:[r.jsxs("div",{className:"feature-header",children:[r.jsx("div",{className:"feature-icon",style:{color:m[N.cat]},children:r.jsx("i",{className:`fas ${N.icon}`})}),r.jsxs("div",{className:"feature-meta",children:[r.jsx("div",{className:"feature-title-row",children:r.jsx("h3",{className:"feature-title",children:N.title})}),r.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[r.jsx("span",{className:"feature-badge",style:{backgroundColor:m[N.cat]},children:N.cat}),r.jsxs("span",{className:"feature-version",children:["v",N.v]})]})]})]}),r.jsx("p",{className:"feature-desc",children:N.desc})]},b))})]},g)):r.jsxs("div",{className:"category-section",children:[r.jsx("h2",{className:"category-title",style:{borderColor:m[o]},children:o}),r.jsx("div",{className:"features-grid",children:p.map((g,N)=>r.jsxs("div",{className:"feature-card",children:[r.jsxs("div",{className:"feature-header",children:[r.jsx("div",{className:"feature-icon",style:{color:m[g.cat]},children:r.jsx("i",{className:`fas ${g.icon}`})}),r.jsxs("div",{className:"feature-meta",children:[r.jsx("div",{className:"feature-title-row",children:r.jsx("h3",{className:"feature-title",children:g.title})}),r.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[r.jsx("span",{className:"feature-badge",style:{backgroundColor:m[g.cat]},children:g.cat}),r.jsxs("span",{className:"feature-version",children:["v",g.v]})]})]})]}),r.jsx("p",{className:"feature-desc",children:g.desc})]},N))})]})}),r.jsx("div",{className:"coming-soon-section",children:r.jsxs("div",{className:"coming-soon-content",children:[r.jsx("div",{className:"coming-soon-icon",children:r.jsx("i",{className:"fas fa-rocket"})}),r.jsx("h2",{className:"coming-soon-title",children:"And more to come..."}),r.jsx("p",{className:"coming-soon-desc",children:"These are just the current features. We're constantly working on new features and improvements. Check out our roadmap to see what's coming next!"}),r.jsxs(ie,{to:"/roadmap",className:"roadmap-btn",children:[r.jsx("i",{className:"fas fa-map"})," See our Roadmap"]})]})})]})})]})}function ex(){E.useEffect(()=>{document.title="FAQ - Freedom Loader"},[]);const[o,d]=E.useState(null),f={"Installation & Usage":[{q:"How do I install Freedom Loader?",a:"Check the download instructions on the Wiki page to get started quickly. We provide a Windows installer, as well as Snap, AppImage, DEB, and RPM packages for Linux."},{q:"Which operating systems are supported?",a:"Freedom Loader fully supports Windows 10/11 and major Linux distributions (Ubuntu, Debian, Fedora, Arch, etc.)."},{q:"Where are my downloaded files stored?",a:"Files are stored locally in the folder you select during download. The default folder is your Downloads directory."},{q:"How do I update the application?",a:"On Windows and AppImage, updates are downloaded and applied automatically on launch. If you installed via Snap or Fedora Copr on Linux, your system's package manager handles the updates."}],"Features & Limitations":[{q:"What exactly does Freedom Loader do?",a:"Freedom Loader is a graphical interface that allows you to cleanly download video and audio content from the internet with full metadata and various quality options."},{q:"Can I use Freedom Loader with platforms other than YouTube?",a:"Yes! While heavily optimized for YouTube (playlists, metadata, etc.), the underlying engine supports downloading from hundreds of different websites."},{q:"Why is Mozilla Firefox required?",a:"Freedom Loader can securely extract cookies from your local Firefox installation to allow downloading age-restricted or members-only content without requiring you to log in through the app."},{q:"Are there advanced options or settings?",a:"Yes! You can change video codecs (H.264, AV1, VP9), choose quality thresholds, automate playlist folder creation, and even build custom UI themes."}],"Contributions & Open Source":[{q:"Can I contribute to the project?",a:"Absolutely! All contributors are welcome. You can open issues, submit pull requests, or discuss ideas on GitHub."},{q:"How do I report a bug or propose a feature?",a:"Use GitHub Discussions or open an issue on the repository using our provided templates to suggest ideas or report problems."},{q:"What license does Freedom Loader use?",a:"Freedom Loader is open source under the GNU GPL v3 license. You can copy and redistribute the code while crediting the original author."},{q:"Can I use the code in my own projects?",a:"Yes, freely! However, you must keep original credits and respect the GNU GPL v3 license."}],"Support & Community":[{q:"How can I contact the developer?",a:"You can use the contact form on the Contact page or reach out via GitHub or social media."},{q:"Where can I discuss with the community?",a:"Join the GitHub Discussions community or connect via social media platforms to engage with other users."},{q:"Is there documentation available?",a:"Yes, comprehensive documentation is available on the Wiki page with guides for installation, usage, and troubleshooting."}],"Security & Privacy":[{q:"Is Freedom Loader safe?",a:"Yes, the app is designed to run locally and does not transmit any personal data or download history to any server. Your privacy is guaranteed."},{q:"Is my personal data collected?",a:"No. We have no ads, no trackers, and no analytics. Everything happens on your machine."},{q:"What should I do if I encounter a security issue?",a:"Please refer to our SECURITY.md file on GitHub and contact the maintainer directly to report security concerns."}]},u=(m,p)=>{const g=`${m}-${p}`;d(o===g?null:g)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsxs("section",{className:"faq-page",children:[r.jsxs("div",{className:"faq-header",children:[r.jsx("h1",{children:"Frequently Asked Questions"}),r.jsx("p",{children:"Find answers to all your questions about Freedom Loader. Click any question to reveal the answer."})]}),r.jsx("div",{className:"faq-container",children:Object.entries(f).map(([m,p])=>r.jsxs("div",{className:"faq-category",children:[r.jsx("h2",{className:"category-title",children:m}),p.map((g,N)=>r.jsxs("div",{className:`faq-item ${o===`${m}-${N}`?"expanded":""}`,children:[r.jsxs("button",{className:"faq-question-btn",onClick:()=>u(m,N),children:[r.jsx("span",{children:g.q}),r.jsx("i",{className:"fas fa-chevron-down faq-icon"})]}),r.jsx("div",{className:"faq-answer",children:r.jsx("p",{className:"faq-answer-content",children:g.a})})]},N))]},m))})]})})]})}function tx(){E.useEffect(()=>{document.title="Wiki - Freedom Loader"},[]);const[o,d]=E.useState("Installation"),f={Installation:{icon:"fa-download",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Installation"}),r.jsx("h3",{children:"System Requirements"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Windows 10/11 or a modern Linux distribution (Ubuntu, Fedora, Arch, etc.)"}),r.jsx("li",{children:"Mozilla Firefox Browser (required for secure cookie extraction)"}),r.jsx("li",{children:"Active internet connection"})]}),r.jsx("h3",{children:"Windows Installation"}),r.jsxs("ol",{children:[r.jsxs("li",{children:["Download the latest ",r.jsx("code",{children:".exe"})," from the ",r.jsx(ie,{to:"/download",children:"Download page"})," or GitHub Releases."]}),r.jsx("li",{children:'Run the installer (click "More info" → "Run anyway" if Windows SmartScreen warns you).'}),r.jsx("li",{children:"Follow the setup wizard and launch Freedom Loader."})]}),r.jsx("h3",{children:"Linux Installation"}),r.jsx("p",{children:"We provide multiple ways to install Freedom Loader on Linux:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Fedora (Copr):"})," ",r.jsx("code",{children:"sudo dnf copr enable masteracnolo/freedom-loader"})," then ",r.jsx("code",{children:"sudo dnf install freedom-loader"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Snap Store:"})," ",r.jsx("code",{children:"sudo snap install freedom-loader"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"AppImage:"})," Download the ",r.jsx("code",{children:".AppImage"}),", right-click to make it executable (or ",r.jsx("code",{children:"chmod +x"}),"), and run it."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"DEB / RPM:"})," Download the respective packages from our GitHub releases and install via your package manager."]})]})]})},Usage:{icon:"fa-play",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Usage Guide"}),r.jsx("h3",{children:"First Launch"}),r.jsx("p",{children:"At your first launch, your OS or antivirus might flag the app since it's a new open-source software. This is normal. You may also see terminal windows for yt-dlp binary checks."}),r.jsx("h3",{children:"Basic Workflow"}),r.jsxs("ol",{children:[r.jsx("li",{children:"Paste a URL into the app (YouTube, Soundcloud, Twitch, etc.)."}),r.jsx("li",{children:'Wait a second for the app to fetch the video/playlist metadata (or enable "Auto Fetch Info" in settings).'}),r.jsx("li",{children:"Select your format: Video (MP4) or Audio (MP3)."}),r.jsx("li",{children:"Select quality (Best, Medium, Worst) or specific resolution."}),r.jsx("li",{children:"Click Download and monitor the real-time progress bar!"})]}),r.jsx("h3",{children:"Settings Panel: Download Options"}),r.jsx("p",{children:"Click the gear icon to access these powerful download features:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Automation:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("em",{children:"Auto Fetch Info:"})," Automatically fetch information for new downloads as soon as you paste a link."]}),r.jsxs("li",{children:[r.jsx("em",{children:"Download Playlist automatically:"})," If enabled, playlists will download without confirmation."]}),r.jsxs("li",{children:[r.jsx("em",{children:"Create Playlist Folders:"})," Create a dedicated folder for each playlist with its name."]})]})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Metadata & Media:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("em",{children:"Add Metadata / Add Thumbnail:"})," Include metadata and thumbnails directly in downloaded files."]}),r.jsxs("li",{children:[r.jsx("em",{children:"Keep Playlist Order:"})," Add an index before the output file to keep the correct order."]}),r.jsxs("li",{children:[r.jsx("em",{children:"Custom Codec:"})," Choose your preferred video codec (H264, AV1, AV01, VP9.2, VP9, H265, Theora)."]})]})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"System Controls:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("em",{children:"Notification at the end:"})," Notify when a download finishes."]}),r.jsxs("li",{children:[r.jsx("em",{children:"Auto Update:"})," Enable automatic app updates."]}),r.jsxs("li",{children:[r.jsx("em",{children:"Enable Hardware Acceleration:"})," Uses GPU acceleration for rendering when available (requires restart)."]})]})]})]})]})},Customization:{icon:"fa-palette",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Themes & Customization"}),r.jsx("p",{children:"Freedom Loader features a powerful, dynamic theme engine. You can change how the app looks without even restarting it!"}),r.jsx("h3",{children:"Using the Theme Workshop"}),r.jsxs("ol",{children:[r.jsxs("li",{children:["Visit the ",r.jsx("a",{href:"https://masteracnolo.github.io/Freedom-Loader-Workshop/",target:"_blank",rel:"noopener noreferrer",children:"Freedom Loader Workshop"}),"."]}),r.jsx("li",{children:"Browse community themes or use the creator tool to make your own."}),r.jsxs("li",{children:["Download the theme as a ",r.jsx("code",{children:".zip"})," file."]}),r.jsxs("li",{children:["Open Freedom Loader, go to Settings, and click ",r.jsx("strong",{children:"Open Theme Folder"})," at the bottom."]}),r.jsxs("li",{children:["Drop the ",r.jsx("code",{children:".zip"})," file inside, click the Refresh icon next to the theme selector, and choose your new theme!"]})]}),r.jsx("h3",{children:"UI & Interface Options"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Custom Top bar:"})," Use this if the OS topbar is missing or you prefer our sleek custom one."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"System Tray:"})," Minimize app on close, hiding it in the System Tray [EXPERIMENTAL]."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Discord RPC:"})," Enable/disable Discord Rich Presence to show off your app activity on Discord."]})]}),r.jsx("h3",{children:"Developer Tools"}),r.jsx("p",{children:"At the bottom of the settings panel, you can find advanced tools:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Verbose Logs:"})," Show verbose logs for debugging purposes."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Open JSON Configuration:"})," Directly open and edit the raw ",r.jsx("code",{children:"config.json"})," file."]})]})]})},Firefox:{icon:"fa-brands fa-firefox-browser",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Setting Up Firefox"}),r.jsx("p",{children:"Freedom Loader requires Firefox to securely extract cookies. This allows you to download age-restricted or members-only videos without typing your password into our app."}),r.jsx("h3",{children:"How it works"}),r.jsxs("ol",{children:[r.jsx("li",{children:"Install Mozilla Firefox (if you don't have it)."}),r.jsx("li",{children:"Open Firefox and log in to your YouTube account."}),r.jsx("li",{children:"Play any video on YouTube to establish an active session."}),r.jsx("li",{children:r.jsx("strong",{children:"Close Firefox completely."})}),r.jsx("li",{children:"Launch Freedom Loader and download your restricted video."})]}),r.jsx("p",{children:r.jsx("em",{children:"Note: If cookies aren't found, try logging out and back into YouTube on Firefox. Chrome/Edge cookie support is currently being explored for future updates."})})]})},Contributing:{icon:"fa-code-branch",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Contributing to Freedom Loader"}),r.jsx("p",{children:"We love open-source! Whether you are a developer, a designer, or a user finding bugs, your help is welcome."}),r.jsx("h3",{children:"For Developers"}),r.jsx("p",{children:"We use a Trunk-Based Development workflow on GitHub. To get started:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Read our ",r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/blob/main/DEVELOPMENT.md",target:"_blank",rel:"noopener noreferrer",children:"DEVELOPMENT.md"})," guide to set up your local environment, Node.js, and native binaries."]}),r.jsxs("li",{children:["Read our ",r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer",children:"CONTRIBUTING.md"})," for PR conventions and code style."]})]}),r.jsx("h3",{children:"For Theme Designers"}),r.jsxs("p",{children:["Created a cool theme in the Workshop? Submit it to the community by opening an issue on the ",r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader-Workshop",target:"_blank",rel:"noopener noreferrer",children:"Workshop Repository"})," with your ZIP file and a screenshot!"]})]})},"Common Issues":{icon:"fa-circle-exclamation",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Common Issues & Solutions"}),r.jsx("h3",{children:"1. App won't launch (Windows)"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Solution:"})," Your antivirus might be blocking the executables (yt-dlp, ffmpeg) inside the app. Add the Freedom Loader installation folder to your antivirus whitelist."]}),r.jsx("h3",{children:"2. Downloads fail immediately"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Solution:"})," Ensure your output folder exists and you have write permissions. You can change the output directory in the Settings panel."]}),r.jsx("h3",{children:"3. Age-Restricted downloads fail"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Solution:"})," Log into YouTube on Firefox, play a video, close Firefox completely, and try again."]}),r.jsx("h3",{children:"4. Linux: Missing Binaries or Permissions"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Solution:"})," If you installed via AppImage or built from source, ensure the internal binaries (yt-dlp, ffmpeg) have executable permissions (",r.jsx("code",{children:"chmod +x"}),")."]})]})},"Report Bug":{icon:"fa-bug",content:r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"How to Report Issues"}),r.jsx("p",{children:"Found a bug? Help us fix it by providing detailed logs."}),r.jsx("h3",{children:"Where to find your logs"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Windows:"})," ",r.jsx("code",{children:"C:\\Users\\[USERNAME]\\AppData\\Local\\FreedomLoader\\logs\\"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Linux:"})," ",r.jsx("code",{children:"~/.local/share/FreedomLoader/logs/"})]})]}),r.jsx("p",{children:r.jsx("em",{children:`Tip: You can click the "Folder" icon in the app's settings to open this directory instantly!`})}),r.jsx("h3",{children:"Reporting on GitHub"}),r.jsxs("ol",{children:[r.jsxs("li",{children:["Go to our ",r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/issues",target:"_blank",rel:"noopener noreferrer",children:"GitHub Issues"})," page."]}),r.jsx("li",{children:'Select the "Bug Report" template.'}),r.jsx("li",{children:"Attach your log file and describe the steps to reproduce the crash."}),r.jsx("li",{children:"Include your OS (Windows 11, Fedora, Ubuntu, etc.) and app version."})]})]})}},u=Object.keys(f);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
                    max-width: 1200px;
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
            `}),r.jsx("main",{children:r.jsxs("section",{className:"wiki-page",children:[r.jsxs("div",{className:"wiki-header",children:[r.jsx("h1",{children:"Wiki"}),r.jsx("p",{children:"Complete documentation and guides for Freedom Loader"})]}),r.jsxs("div",{className:"wiki-container",children:[r.jsx("div",{className:"wiki-tabs",children:u.map(m=>r.jsxs("button",{className:`wiki-tab ${o===m?"active":""}`,onClick:()=>d(m),children:[r.jsx("i",{className:`fas ${f[m].icon}`}),m]},m))}),r.jsx("div",{className:"wiki-content",children:f[o].content})]})]})})]})}function ax(){return E.useEffect(()=>{document.title="Contributing - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{className:"contributing",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Contributing to Freedom Loader"}),r.jsx("p",{className:"subtitle",children:"Help make Freedom Loader better. We welcome all contributions."}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"How to Contribute"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Report bugs with clear steps to reproduce"}),r.jsx("li",{children:"Suggest features or improvements"}),r.jsx("li",{children:"Write code fixes and new features"}),r.jsx("li",{children:"Improve documentation"}),r.jsx("li",{children:"Help others in discussions"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"Getting Started"}),r.jsx("h3",{children:"Setup"}),r.jsxs("div",{className:"code-block",children:["git clone https://github.com/MasterAcnolo/Freedom-Loader.git",r.jsx("br",{}),"cd Freedom-Loader",r.jsx("br",{}),"npm install",r.jsx("br",{}),"npm run dev"]}),r.jsx("h3",{children:"Quick Tips"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Fork the repository on GitHub"}),r.jsxs("li",{children:["Create a feature branch: ",r.jsx("span",{className:"code-inline",children:"git checkout -b feature/your-feature"})]}),r.jsx("li",{children:"Make your changes and test"}),r.jsx("li",{children:"Commit with clear messages"}),r.jsx("li",{children:"Push and open a Pull Request"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"Reporting Issues"}),r.jsx("p",{children:"When reporting bugs, include:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Clear description of the problem"}),r.jsx("li",{children:"Steps to reproduce"}),r.jsx("li",{children:"Expected vs actual behavior"}),r.jsx("li",{children:"Browser/OS information"}),r.jsx("li",{children:"Screenshots if relevant"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{children:"Code of Conduct"}),r.jsx("p",{children:"Be respectful, constructive, and inclusive. Discrimination or harassment will not be tolerated."})]}),r.jsxs("div",{className:"cta",children:[r.jsx("h3",{children:"Ready to Contribute?"}),r.jsx("p",{children:"Check out the issues or start with something small."}),r.jsxs("div",{className:"cta-links",children:[r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/issues",target:"_blank",rel:"noopener noreferrer",className:"cta-link cta-primary",children:"View Issues"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader",target:"_blank",rel:"noopener noreferrer",className:"cta-link cta-secondary",children:"GitHub Repository"})]})]})]})})]})}function lx(){E.useEffect(()=>{document.title="Roadmap - Freedom Loader"},[]);const[o,d]=E.useState(null),f={"Working Right Now":[{title:"Local History",desc:"See what you downloaded before"},{title:"Easy Log Submission",desc:"A built-in button to easily send your application logs for faster troubleshooting"},{title:"Enhanced Workshop",desc:"Community marketplace for themes, plugins, and third-party tools"},{title:"Improved UI / UX",desc:"Continuous improvements to the user interface and accessibility"},{title:"CI/CD & Automated Testing",desc:"Automated release pipelines are live! Now focusing on integrating automated Unit and E2E tests for rock-solid stability."}],"Coming Next (maybe)":[{title:"Extended Cookie Support",desc:"Expand automatic cookie extraction support beyond Mozilla Firefox"},{title:"Skip Sponsored Parts",desc:"SponsorBlock integration to automatically skip sponsored segments"},{title:"Partial Download",desc:"Download only specific segments of a video (timeframes)"},{title:"Batch & Parallel Downloads",desc:"Download multiple videos concurrently with advanced queue management"},{title:"Migrate to TypeScript",desc:"Migrate the backend code base to TypeScript for better maintainability"},{title:"Spotify Integration",desc:"Dedicated support to download and manage Spotify media"}],Exploring:[{title:"Browser Extension",desc:"A companion extension to send videos directly to Freedom Loader with a single click."},{title:"Mobile Client App",desc:"Explore a Client/Server architecture to bring Freedom Loader UI to mobile devices"},{title:"Subtitle Support",desc:"Automatically fetch and embed subtitles/captions into downloaded videos"},{title:"Headless Mode",desc:"Expose a full local API to trigger downloads from third-party apps or scripts"},{title:"Parallel Fetching",desc:"Speed up the initial video information retrieval by running requests concurrently."},{title:"File Renaming Options",desc:"Advanced templates to customize output file names automatically"}]},u={"Coming Next (maybe)":"#ff3300","Working Right Now":"#4da6ff",Exploring:"#0dd606"};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsxs("section",{className:"roadmap-page",children:[r.jsxs("div",{className:"roadmap-header",children:[r.jsx("h1",{children:"Roadmap"}),r.jsx("p",{children:"See what's coming next for Freedom Loader. We're constantly innovating and improving."})]}),r.jsx("div",{className:"roadmap-container",children:Object.entries(f).map(([m,p],g)=>r.jsxs("div",{className:`roadmap-section ${m==="Coming Next (maybe)"?"coming-soon":m==="Working Right Now"?"in-dev":"future"}`,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"section-dot",style:{backgroundColor:u[m]}}),r.jsx("h2",{className:"section-title",children:m})]}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:p.map((N,b)=>r.jsxs("div",{className:`roadmap-item ${o===`${m}-${b}`?"expanded":""} ${m==="Coming Next (maybe)"?"coming-soon":m==="Working Right Now"?"in-dev":"future"}`,onClick:()=>d(o===`${m}-${b}`?null:`${m}-${b}`),children:[r.jsxs("div",{className:"item-header",children:[r.jsx("h3",{className:"item-title",children:N.title}),r.jsx("i",{className:"fas fa-chevron-down item-icon"})]}),r.jsx("p",{className:"item-desc",children:N.desc})]},b))})]},m))})]})})]})}function nx(){return E.useEffect(()=>{document.title="Terms - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsx("section",{className:"terms",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Terms of Use"}),r.jsx("p",{className:"last-updated",children:"Last updated: May 1, 2026"}),r.jsx("p",{children:"These terms govern your use of the Freedom Loader desktop application. By installing or using the app, you agree to these terms."}),r.jsx("h2",{children:"1. Purpose of the Application"}),r.jsxs("p",{children:["Freedom Loader is a ",r.jsx("strong",{children:"personal, offline media management tool"}),". It provides a graphical interface around"," ",r.jsx("a",{href:"https://github.com/yt-dlp/yt-dlp",target:"_blank",children:"yt-dlp"}),", allowing users to download publicly accessible media for",r.jsx("strong",{children:" strictly personal and offline use"}),"."]}),r.jsx("p",{children:"It is not a streaming platform, not a distribution service, and generates no revenue."}),r.jsx("h2",{children:"2. License & Open Source"}),r.jsxs("p",{children:["Freedom Loader is licensed under the"," ",r.jsx("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html",target:"_blank",children:"GNU GPL v3"}),"."]}),r.jsx("p",{children:"You are allowed to:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Use the application for any purpose"}),r.jsx("li",{children:"Study and modify the code"}),r.jsx("li",{children:"Redistribute original or modified versions"})]}),r.jsx("p",{children:"Under these conditions:"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("strong",{children:"Credit the original author (MasterAcnolo / Axel NICOLAS)"})}),r.jsx("li",{children:"Keep the GPLv3 license"}),r.jsx("li",{children:"Provide source code for modifications"})]}),r.jsx("h2",{children:"3. Acceptable Use"}),r.jsxs("p",{children:["Freedom Loader is intended for ",r.jsx("strong",{children:"personal, non-commercial use"}),"."]}),r.jsx("p",{children:"Allowed:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Downloading publicly accessible content for personal use"}),r.jsx("li",{children:"Archiving content you legitimately access"})]}),r.jsx("p",{children:"Forbidden:"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("strong",{children:"Redistributing downloaded content"})}),r.jsx("li",{children:r.jsx("strong",{children:"Commercial use without rights"})}),r.jsx("li",{children:r.jsx("strong",{children:"Bypassing DRM or paywalls"})}),r.jsx("li",{children:r.jsx("strong",{children:"Downloading pirated content"})})]}),r.jsx("p",{children:"You are solely responsible for how you use the application."}),r.jsx("h2",{children:"4. Legal Framework"}),r.jsx("p",{children:"Freedom Loader does not grant rights over content. Downloaded media remains subject to copyright laws."}),r.jsx("p",{children:"Under French law (Article L122-5), private copies from a lawful source for personal use are permitted."}),r.jsx("p",{children:"Some platforms may forbid downloading in their Terms of Service. This is contractual (account risk), not criminal — but it's on you."}),r.jsx("h2",{children:"5. Privacy"}),r.jsx("p",{children:r.jsx("strong",{children:"No personal data is collected."})}),r.jsxs("ul",{children:[r.jsx("li",{children:"No tracking, no analytics"}),r.jsx("li",{children:"No account required"}),r.jsx("li",{children:"All data stays local"})]}),r.jsx("p",{children:"Network requests are only made to fetch media via yt-dlp."}),r.jsx("h2",{children:"6. Disclaimer"}),r.jsxs("p",{children:["Freedom Loader is provided ",r.jsx("strong",{children:"as-is"}),", without warranty."]}),r.jsxs("ul",{children:[r.jsx("li",{children:"No liability for data loss or system damage"}),r.jsx("li",{children:"No liability for legal misuse"}),r.jsx("li",{children:"No guarantee of functionality"})]}),r.jsx("h2",{children:"7. Third-Party Tools"}),r.jsx("p",{children:"Freedom Loader depends on:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"yt-dlp"})," (media extraction)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"FFmpeg"})," (processing)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Electron"})," (runtime)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Deno"})," (scripting)"]})]}),r.jsx("p",{children:"Not affiliated with YouTube, Google, Twitch, or others."}),r.jsx("h2",{children:"8. Updates"}),r.jsx("p",{children:"The app may change at any time. Features can break depending on external platforms."}),r.jsx("p",{children:"Continued use means you accept updated terms."}),r.jsx("h2",{children:"9. Contact"}),r.jsx("p",{children:"Questions or legal concerns:"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",children:"GitHub Discussions"})}),r.jsx("li",{children:r.jsx("a",{href:"https://www.linkedin.com/in/axelnicolas25",target:"_blank",children:"LinkedIn"})})]})]})})})]})}function ix(){return E.useEffect(()=>{document.title="Privacy - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsx("section",{className:"privacy",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Privacy Policy"}),r.jsxs("p",{className:"last-updated",children:[r.jsx("strong",{children:"Last updated:"})," November 13, 2025"]}),r.jsx("p",{children:"Freedom Loader respects your privacy. This Privacy Policy explains how we handle any data you might use with the app and how we protect your privacy."}),r.jsx("h2",{children:"1. Information We Collect"}),r.jsxs("p",{children:["Freedom Loader is a desktop application. We do ",r.jsx("strong",{children:"not"})," collect personal information such as names, emails, or browsing history. The only data handled by the app is:"]}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Usage Data:"})," Logs or error reports generated locally on your machine to help the app function correctly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Optional metadata:"})," Information from downloaded media (titles, authors, duration) stored locally."]})]}),r.jsx("p",{children:"No data is sent to any server unless you explicitly choose to share it (for example, using Discord Rich Presence)."}),r.jsx("h2",{children:"2. Cookies & Tracking"}),r.jsx("p",{children:"Freedom Loader is a desktop app and does not use cookies or any web tracking technologies."}),r.jsx("h2",{children:"3. Use of Your Data"}),r.jsx("p",{children:"Any data processed by the app is used solely to ensure proper functionality, improve performance, and provide features like download logging and Rich Presence. No personal data is shared with third parties."}),r.jsx("h2",{children:"4. Retention"}),r.jsx("p",{children:"All usage data and metadata are stored locally on your device and remain there until you delete them. Freedom Loader does not store data remotely."}),r.jsx("h2",{children:"5. Security"}),r.jsx("p",{children:"We take reasonable measures to protect your data on your device, but no system is 100% secure. Please use your own discretion when handling downloaded media."}),r.jsx("h2",{children:"6. Children's Privacy"}),r.jsx("p",{children:"Freedom Loader is not intended for children under 13, and we do not knowingly collect any personal information from children."}),r.jsx("h2",{children:"7. Links to Other Websites"}),r.jsx("p",{children:"Any links to external websites in the app are for convenience. We are not responsible for the privacy practices of other sites."}),r.jsx("h2",{children:"8. Changes to This Privacy Policy"}),r.jsx("p",{children:'We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated "Last updated" date.'}),r.jsx("h2",{children:"Contact"}),r.jsxs("p",{children:["For questions regarding this Privacy Policy, visit our ",r.jsx(ie,{to:"/contact",children:"contact page "}),"."]})]})})})]})}function rx(){return E.useEffect(()=>{document.title="Contact - Freedom Loader"},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
            `}),r.jsx("main",{children:r.jsx("section",{className:"contact",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Contact Me"}),r.jsx("p",{children:"If you have any questions, suggestions, or need support, reach out using the methods below or fill out the form."}),r.jsxs("div",{className:"contact-methods",children:[r.jsxs("div",{className:"contact-card",children:[r.jsx("i",{className:"fab fa-github"}),r.jsx("h3",{children:"GitHub"}),r.jsx("p",{children:"Join the discussions, report bugs, and contribute to the project:"}),r.jsx("a",{href:"https://github.com/MasterAcnolo/Freedom-Loader/discussions",target:"_blank",rel:"noopener noreferrer",children:"GitHub Discussions"})]}),r.jsxs("div",{className:"contact-card",children:[r.jsx("i",{className:"fab fa-linkedin-in"}),r.jsx("h3",{children:"LinkedIn"}),r.jsx("p",{children:"Connect for updates, networking, and professional inquiries:"}),r.jsx("a",{href:"https://www.linkedin.com/in/axelnicolas25",target:"_blank",rel:"noopener noreferrer",children:"@axelnicolas25"})]})]}),r.jsxs("form",{className:"contact-form",action:"https://api.web3forms.com/submit",method:"POST",children:[r.jsx("input",{type:"hidden",name:"apikey",value:"cd8edfb2-7b53-4db9-a545-8a055f04612c"}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"name",children:"Name"}),r.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your name",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",children:"Email"}),r.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Your email",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"message",children:"Message"}),r.jsx("textarea",{id:"message",name:"message",placeholder:"Your message...",required:!0})]}),r.jsx("button",{type:"submit",children:"Send Message"})]})]})})})]})}function ox(){return r.jsxs(r.Fragment,{children:[r.jsx(Zy,{}),r.jsx(Qy,{}),r.jsxs(cy,{children:[r.jsx(Nt,{path:"/",element:r.jsx(Jy,{})}),r.jsx(Nt,{path:"/about",element:r.jsx(Iy,{})}),r.jsx(Nt,{path:"/faq",element:r.jsx(ex,{})}),r.jsx(Nt,{path:"/features",element:r.jsx(Py,{})}),r.jsx(Nt,{path:"/wiki",element:r.jsx(tx,{})}),r.jsx(Nt,{path:"/contributing",element:r.jsx(ax,{})}),r.jsx(Nt,{path:"/roadmap",element:r.jsx(lx,{})}),r.jsx(Nt,{path:"/download",element:r.jsx($y,{})}),r.jsx(Nt,{path:"/terms",element:r.jsx(nx,{})}),r.jsx(Nt,{path:"/privacy",element:r.jsx(ix,{})}),r.jsx(Nt,{path:"/contact",element:r.jsx(rx,{})})]}),r.jsx(Vy,{})]})}function cx(){const{pathname:o,hash:d}=window.location;if(d){sessionStorage.removeItem("redirect");return}const f="/Freedom-Loader-Site",u=sessionStorage.getItem("redirect"),m=u||o.replace(f,"");u&&(sessionStorage.removeItem("redirect"),sessionStorage.removeItem("redirected")),m&&m!=="/"&&window.location.replace(`${f}/#${m}`)}cx();sg.createRoot(document.getElementById("root")).render(r.jsxs(My,{children:[r.jsx(Gy,{}),r.jsx(ox,{})]}));
