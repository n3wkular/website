!function(){function e(){T.keyboardSupport&&f("keydown",r)}function t(){if(!z&&document.body){z=!0;var t=document.body,o=document.documentElement,n=window.innerHeight,r=t.scrollHeight;if(L=document.compatMode.indexOf("CSS")>=0?o:t,g=t,e(),top!=self)C=!0;else if(r>n&&(t.offsetHeight<=n||o.offsetHeight<=n)){var a,i=document.createElement("div");i.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+L.scrollHeight+"px",document.body.appendChild(i),x=function(){a||(a=setTimeout((function(){E||(i.style.height="0",i.style.height=L.scrollHeight+"px",a=null)}),500))},setTimeout(x,10),f("resize",x);if((S=new F(x)).observe(t,{attributes:!0,childList:!0,characterData:!1}),L.offsetHeight<=n){var l=document.createElement("div");l.style.clear="both",t.appendChild(l)}}T.fixedBackground||E||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(e,t,o){if(function(e,t){e=e>0?1:-1,t=t>0?1:-1,(H.x!==e||H.y!==t)&&(H.x=e,H.y=t,N=[],K=0)}(t,o),1!=T.accelerationMax){var n=Date.now()-K;if(n<T.accelerationDelta){var r=(1+50/n)/2;r>1&&(r=Math.min(r,T.accelerationMax),t*=r,o*=r)}K=Date.now()}if(N.push({x:t,y:o,lastX:0>t?.99:-.99,lastY:0>o?.99:-.99,start:Date.now()}),!O){var a=e===document.body,i=function(n){for(var r=Date.now(),l=0,c=0,u=0;u<N.length;u++){var d=N[u],s=r-d.start,f=s>=T.animationTime,m=f?1:s/T.animationTime;T.pulseAlgorithm&&(m=v(m));var w=d.x*m-d.lastX>>0,h=d.y*m-d.lastY>>0;l+=w,c+=h,d.lastX+=w,d.lastY+=h,f&&(N.splice(u,1),u--)}a?window.scrollBy(l,c):(l&&(e.scrollLeft+=l),c&&(e.scrollTop+=c)),t||o||(N=[]),N.length?j(i,e,1e3/T.frameRate+1):O=!1};j(i,e,0),O=!0}}function n(e){z||t();var n=e.target,r=c(n);if(!r||e.defaultPrevented||e.ctrlKey)return!0;if(w(g,"embed")||w(n,"embed")&&/\.pdf/i.test(n.src)||w(g,"object")||n.shadowRoot)return!0;var a=-e.wheelDeltaX||e.deltaX||0,l=-e.wheelDeltaY||e.deltaY||0;return Y&&(e.wheelDeltaX&&h(e.wheelDeltaX,120)&&(a=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&h(e.wheelDeltaY,120)&&(l=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),a||l||(l=-e.wheelDelta||0),1===e.deltaMode&&(a*=40,l*=40),!(T.touchpadSupport||!function(e){return e?(X.length||(X=[e,e,e]),e=Math.abs(e),X.push(e),X.shift(),clearTimeout(D),D=setTimeout((function(){window.localStorage&&(localStorage.SS_deltaBuffer=X.join(","))}),1e3),!p(120)&&!p(100)):void 0}(l))||(Math.abs(a)>1.2&&(a*=T.stepSize/120),Math.abs(l)>1.2&&(l*=T.stepSize/120),o(r,a,l),e.preventDefault(),void i())}function r(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==A.spacebar;document.body.contains(g)||(g=document.activeElement);var r=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(t.nodeName)||w(t,"input")&&!r.test(t.type)||w(g,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(e)||t.isContentEditable||n)return!0;if((w(t,"button")||w(t,"input")&&r.test(t.type))&&e.keyCode===A.spacebar)return!0;if(w(t,"input")&&"radio"==t.type&&B[e.keyCode])return!0;var a=0,l=0,u=c(g),d=u.clientHeight;switch(u==document.body&&(d=window.innerHeight),e.keyCode){case A.up:l=-T.arrowScroll;break;case A.down:l=T.arrowScroll;break;case A.spacebar:l=-(e.shiftKey?1:-1)*d*.9;break;case A.pageup:l=.9*-d;break;case A.pagedown:l=.9*d;break;case A.home:l=-u.scrollTop;break;case A.end:var s=u.scrollHeight-u.scrollTop-d;l=s>0?s+10:0;break;case A.left:a=-T.arrowScroll;break;case A.right:a=T.arrowScroll;break;default:return!0}o(u,a,l),e.preventDefault(),i()}function a(e){g=e.target}function i(){clearTimeout(k),k=setInterval((function(){q={}}),1e3)}function l(e,t){for(var o=e.length;o--;)q[R(e[o])]=t;return t}function c(e){var t=[],o=document.body,n=L.scrollHeight;do{var r=q[R(e)];if(r)return l(t,r);if(t.push(e),n===e.scrollHeight){var a=d(L)&&d(o)||s(L);if(C&&u(L)||!C&&a)return l(t,I())}else if(u(e)&&s(e))return l(t,e)}while(e=e.parentElement)}function u(e){return e.clientHeight+10<e.scrollHeight}function d(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function s(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function f(e,t){window.addEventListener(e,t,!1)}function m(e,t){window.removeEventListener(e,t,!1)}function w(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function h(e,t){return Math.floor(e/t)==e/t}function p(e){return h(X[0],e)&&h(X[1],e)&&h(X[2],e)}function b(e){var t,o;return 1>(e*=T.pulseScale)?t=e-(1-Math.exp(-e)):(e-=1,t=(o=Math.exp(-1))+(1-Math.exp(-e))*(1-o)),t*T.pulseNormalize}function v(e){return e>=1?1:0>=e?0:(1==T.pulseNormalize&&(T.pulseNormalize/=b(1)),b(e))}function y(e){for(var t in e)M.hasOwnProperty(t)&&(T[t]=e[t])}var g,S,x,k,D,M={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!1,fixedBackground:!0,excluded:""},T=M,E=!1,C=!1,H={x:0,y:0},z=!1,L=document.documentElement,X=[],Y=/^Mac/.test(navigator.platform),A={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},B={37:1,38:1,39:1,40:1},N=[],O=!1,K=Date.now(),R=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),q={};window.localStorage&&localStorage.SS_deltaBuffer&&(X=localStorage.SS_deltaBuffer.split(","));var P,j=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},F=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,I=function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var o=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),e=document.body.scrollTop!=o?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(t)}return e}}(),_=window.navigator.userAgent,V=/Edge/.test(_),W=/chrome/i.test(_)&&!V,$=/safari/i.test(_)&&!V,U=/mobile/i.test(_),G=/Windows NT 6.1/i.test(_)&&/rv:11/i.test(_),J=(W||$||G)&&!U;"onwheel"in document.createElement("div")?P="wheel":"onmousewheel"in document.createElement("div")&&(P="mousewheel"),P&&J&&(f(P,n),f("mousedown",a),f("load",t)),y.destroy=function(){S&&S.disconnect(),m(P,n),m("mousedown",a),m("keydown",r),m("resize",x),m("load",t)},window.SmoothScrollOptions&&y(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define((function(){return y})):"object"==typeof exports?module.exports=y:window.SmoothScroll=y}();
//# sourceMappingURL=smoothscroll.js.map