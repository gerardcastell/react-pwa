(this["webpackJsonpreact-pwa"]=this["webpackJsonpreact-pwa"]||[]).push([[0],{17:function(e,t,n){e.exports=n(42)},23:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),i=n(3),s=n.n(i),l=n(14),u=n(2),p=n(15),f=(n(23),n(24),n(16)),d=n.n(f).a.create({baseURL:"https://api.arasaac.org/api/pictograms/"}),h=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)("es"),i=Object(u.a)(c,2),f=i[0],h=(i[1],Object(a.useState)("")),g=Object(u.a)(h,2),v=g[0],b=g[1],w=Object(a.useState)(!0),m=Object(u.a)(w,2),x=m[0],k=m[1],y=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,c,i,l,u,h,g,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===v){e.next=47;break}return e.next=3,d.get("".concat(f,"/search/").concat(v,"/"));case 3:t=e.sent,console.log(t),n=[],a=!0,r=!1,e.prev=8,i=Object(p.a)(t.data);case 10:return e.next=12,i.next();case 12:return l=e.sent,a=l.done,e.next=16,l.value;case 16:if(u=e.sent,a){e.next=28;break}return h=u,e.next=21,d.get("".concat(h._id,"/"),{responseType:"blob"});case 21:g=e.sent,console.log(g),b=URL.createObjectURL(g.data),n.push(b);case 25:a=!0,e.next=10;break;case 28:e.next=34;break;case 30:e.prev=30,e.t0=e.catch(8),r=!0,c=e.t0;case 34:if(e.prev=34,e.prev=35,a||null==i.return){e.next=39;break}return e.next=39,i.return();case 39:if(e.prev=39,!r){e.next=42;break}throw c;case 42:return e.finish(39);case 43:return e.finish(34);case 44:console.log(n),o(n),k(!1);case 47:case"end":return e.stop()}}),e,null,[[8,30,34,44],[35,,39,43]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,"Bilingually Functional Demo v1"),r.a.createElement("div",{className:"App-browser"},r.a.createElement("title",null,"Introduce una palabra para buscar"),r.a.createElement("input",{type:"text",placeholder:"Word to search...",value:v,onChange:function(e){return b(e.target.value)}}),r.a.createElement("button",{onClick:function(){return y()}},"Search")),r.a.createElement("div",{className:"App-images",style:{display:"flex",flexDirection:"row",width:500}},x?r.a.createElement(r.a.Fragment,null,"There are no images"):(console.log(n[0]),r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement("img",{src:e,alt:"hola",style:{height:"75px",width:"75pxs"}})}))))))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-pwa","/service-worker.js");g?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.e7af635d.chunk.js.map