import{a as t,b as e,c as n,d as r,e as a,f as o,g as i,h as s,i as c,j as u,k as l,l as f,m as h,n as d,o as p,p as m,q as v,r as g,s as _,t as y,u as b,v as E,w as S,x as w,y as N,z as O}from"./chunk.97ca8711.js";function k(e,n){return function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,a,o=[],i=!0,s=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){s=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t){var e=t-1;return e*e*e+1}function A(t,e){var n=e.delay;void 0===n&&(n=0);var r=e.duration;void 0===r&&(r=400);var a=+getComputedStyle(t).opacity;return{delay:n,duration:r,css:function(t){return"opacity: "+t*a}}}function P(t,e){var n=e.delay;void 0===n&&(n=0);var r=e.duration;void 0===r&&(r=400);var a=e.easing;void 0===a&&(a=x);var o=getComputedStyle(t),i=+o.opacity,s=parseFloat(o.height),c=parseFloat(o.paddingTop),u=parseFloat(o.paddingBottom),l=parseFloat(o.marginTop),f=parseFloat(o.marginBottom),h=parseFloat(o.borderTopWidth),d=parseFloat(o.borderBottomWidth);return{delay:n,duration:r,easing:a,css:function(t){return"overflow: hidden;opacity: "+Math.min(20*t,1)*i+";height: "+t*s+"px;padding-top: "+t*c+"px;padding-bottom: "+t*u+"px;margin-top: "+t*l+"px;margin-bottom: "+t*f+"px;border-top-width: "+t*h+"px;border-bottom-width: "+t*d+"px;"}}}function C(t,e){var n,r,g,_,y,b,E,S,w,N,O,k,x,A,C;function j(e){t.set({menuOpen:!1})}return{c:function(){n=a("div"),r=a("div"),g=a("a"),_=o("About"),y=o("\n        "),b=a("a"),E=o("Open Source"),S=o("\n\n      "),w=a("div"),N=a("div"),O=a("a"),k=o("Contact"),this.h()},l:function(t){n=i(t,"DIV",{class:!0},!1);var e=s(n);r=i(e,"DIV",{class:!0},!1);var a=s(r);g=i(a,"A",{class:!0,rel:!0,href:!0},!1);var o=s(g);_=u(o,"About"),o.forEach(c),y=u(a,"\n        "),b=i(a,"A",{class:!0,rel:!0,href:!0},!1);var l=s(b);E=u(l,"Open Source"),l.forEach(c),a.forEach(c),S=u(e,"\n\n      "),w=i(e,"DIV",{class:!0},!1);var f=s(w);N=i(f,"DIV",{class:!0},!1);var h=s(N);O=i(h,"A",{class:!0,href:!0,"sapper-noscroll":!0},!1);var d=s(O);k=u(d,"Contact"),d.forEach(c),h.forEach(c),f.forEach(c),e.forEach(c),this.h()},h:function(){g.className="navbar-item",g.rel="prefetch",g.href=".",h(g,"is-active",e.segment===e.undefined),b.className="navbar-item",b.rel="prefetch",b.href="open-source",h(b,"is-active","open-source"===e.segment),r.className="navbar-start",O.className="button svelte-1nwm4jx",O.href=x=e.path+"?contact",l(O,"sapper-noscroll",!0),h(O,"is-primary",e.segment!==e.undefined),N.className="navbar-item svelte-1nwm4jx",w.className="navbar-end",f(n,"click",j),n.className="navbar-menu",h(n,"is-active",e.menuOpen)},m:function(t,e){d(t,n,e),p(n,r),p(r,g),p(g,_),p(r,y),p(r,b),p(b,E),p(n,S),p(n,w),p(w,N),p(N,O),p(O,k),C=!0},p:function(t,e){(t.segment||t.undefined)&&h(g,"is-active",e.segment===e.undefined),t.segment&&h(b,"is-active","open-source"===e.segment),C&&!t.path||x===(x=e.path+"?contact")||(O.href=x),(t.segment||t.undefined)&&h(O,"is-primary",e.segment!==e.undefined),t.menuOpen&&h(n,"is-active",e.menuOpen)},i:function(r,a){C||(t.root._intro&&(A&&A.invalidate(),t.root._aftercreate.push(function(){A||(A=m(t,n,P,{duration:e.desktop?0:300},!0)),A.run(1)})),this.m(r,a))},o:function(r){C&&(A||(A=m(t,n,P,{duration:e.desktop?0:300},!1)),A.run(0,function(){r(),A=null}),C=!1)},d:function(t){t&&c(n),v(n,"click",j),t&&A&&A.abort()}}}function j(t,e){var n,r,o;function u(e){t.set({menuOpen:!1})}return{c:function(){n=a("div"),this.h()},l:function(t){n=i(t,"DIV",{class:!0},!1),s(n).forEach(c),this.h()},h:function(){f(n,"click",u),n.className="menu-overlay svelte-1nwm4jx"},m:function(t,e){d(t,n,e),o=!0},i:function(e,a){o||(t.root._intro&&(r&&r.invalidate(),t.root._aftercreate.push(function(){r||(r=m(t,n,A,{duration:100},!0)),r.run(1)})),this.m(e,a))},o:function(e){o&&(r||(r=m(t,n,A,{duration:100},!1)),r.run(0,function(){e(),r=null}),o=!1)},d:function(t){t&&c(n),v(n,"click",u),t&&r&&r.abort()}}}function R(t){if(r(this,t),this._state=e(e({undefined:void 0},{menuOpen:!1}),t.data),this._state.innerWidth=window.innerWidth,this._recompute({innerWidth:1},this._state),this._intro=!!t.intro,this._fragment=function(t,e){var n,r,m,y,b,E,S,w,N,O,k;function x(e){t.set({innerWidth:this.innerWidth})}function A(e){t.toggleMenu()}window.addEventListener("resize",x);var P=(e.menuOpen||e.desktop)&&C(t,e),R=e.menuOpen&&!e.desktop&&j(t);return{c:function(){n=a("nav"),r=a("div"),m=a("div"),y=a("span"),b=o("\n      "),E=a("span"),S=o("\n      "),w=a("span"),N=o("\n\n  "),P&&P.c(),O=o("\n  "),R&&R.c(),this.h()},l:function(t){n=i(t,"NAV",{class:!0,role:!0,"aria-label":!0},!1);var e=s(n);r=i(e,"DIV",{class:!0},!1);var a=s(r);m=i(a,"DIV",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0},!1);var o=s(m);y=i(o,"SPAN",{"aria-hidden":!0},!1),s(y).forEach(c),b=u(o,"\n      "),E=i(o,"SPAN",{"aria-hidden":!0},!1),s(E).forEach(c),S=u(o,"\n      "),w=i(o,"SPAN",{"aria-hidden":!0},!1),s(w).forEach(c),o.forEach(c),a.forEach(c),N=u(e,"\n\n  "),P&&P.l(e),O=u(e,"\n  "),R&&R.l(e),e.forEach(c),this.h()},h:function(){l(y,"aria-hidden","true"),l(E,"aria-hidden","true"),l(w,"aria-hidden","true"),f(m,"click",A),l(m,"role","button"),m.className="navbar-burger burger",l(m,"aria-label","menu"),l(m,"aria-expanded","false"),h(m,"is-active",e.menuOpen),r.className="navbar-brand",n.className="navbar is-fixed-top is-transparent",l(n,"role","navigation"),l(n,"aria-label","main navigation"),h(n,"is-primary",e.segment===e.undefined&&!e.menuOpen)},m:function(t,e){d(t,n,e),p(n,r),p(r,m),p(m,y),p(m,b),p(m,E),p(m,S),p(m,w),p(n,N),P&&P.i(n,null),p(n,O),R&&R.i(n,null),k=!0},p:function(e,r){e.menuOpen&&h(m,"is-active",r.menuOpen),r.menuOpen||r.desktop?(P?P.p(e,r):(P=C(t,r))&&P.c(),P.i(n,O)):P&&(g(),P.o(function(){P.d(1),P=null})),r.menuOpen&&!r.desktop?(R||(R=j(t)).c(),R.i(n,null)):R&&(g(),R.o(function(){R.d(1),R=null})),(e.segment||e.undefined||e.menuOpen)&&h(n,"is-primary",r.segment===r.undefined&&!r.menuOpen)},i:function(t,e){k||this.m(t,e)},o:function(t){k&&(t=_(t,2),P?P.o(t):t(),R?R.o(t):t(),k=!1)},d:function(t){window.removeEventListener("resize",x),t&&c(n),v(m,"click",A),P&&P.d(),R&&R.d()}}}(this,this._state),t.target){var n=s(t.target);t.hydrate?this._fragment.l(n):this._fragment.c(),n.forEach(c),this._mount(t.target,t.anchor),y(this)}this._intro=!0}function q(t){var n,l,f,h,m,v,g,_,y,S,w,N,O,k,x,A,P;if(r(this,t),this._state=e({},t.data),this._intro=!!t.intro,this._fragment=(this._state,{c:function(){n=a("footer"),l=a("div"),f=a("p"),h=o("© 2019 Lukas Hechenberger"),m=o("\n    "),v=a("p"),g=o("Made with "),_=a("a"),y=o("Sapper"),S=o(" and "),w=a("a"),N=o("Bulma"),O=o(".\n      Check it out on "),k=a("a"),x=o("GitHub"),A=o("."),this.h()},l:function(t){n=i(t,"FOOTER",{class:!0},!1);var e=s(n);l=i(e,"DIV",{class:!0},!1);var r=s(l);f=i(r,"P",{class:!0},!1);var a=s(f);h=u(a,"© 2019 Lukas Hechenberger"),a.forEach(c),m=u(r,"\n    "),v=i(r,"P",{class:!0},!1);var o=s(v);g=u(o,"Made with "),_=i(o,"A",{href:!0},!1);var d=s(_);y=u(d,"Sapper"),d.forEach(c),S=u(o," and "),w=i(o,"A",{href:!0},!1);var p=s(w);N=u(p,"Bulma"),p.forEach(c),O=u(o,".\n      Check it out on "),k=i(o,"A",{href:!0},!1);var b=s(k);x=u(b,"GitHub"),b.forEach(c),A=u(o,"."),o.forEach(c),r.forEach(c),e.forEach(c),this.h()},h:function(){f.className="svelte-qym14z",_.href="https://sapper.svelte.technology",w.href="https://bulma.io",k.href="https://github.com/ls-age/landing-page",v.className="svelte-qym14z",l.className="content has-text-centered svelte-qym14z",n.className="footer"},m:function(t,e){d(t,n,e),p(n,l),p(l,f),p(f,h),p(l,m),p(l,v),p(v,g),p(v,_),p(_,y),p(v,S),p(v,w),p(w,N),p(v,O),p(v,k),p(k,x),p(v,A),P=!0},p:b,i:function(t,e){P||this.m(t,e)},o:E,d:function(t){t&&c(n)}}),t.target){var C=s(t.target);t.hydrate?this._fragment.l(C):this._fragment.c(),C.forEach(c),this._mount(t.target,t.anchor)}this._intro=!0}e(R.prototype,n),e(R.prototype,{toggleMenu:function(){this.set({menuOpen:!this.get().menuOpen})}}),R.prototype._recompute=function(t,e){t.innerWidth&&this._differs(e.desktop,e.desktop=e.innerWidth>400)&&(t.desktop=!0)},e(q.prototype,n);var I=function(t){return-t*(t-2)};function L(t,e){var n=e.delay,r=void 0===n?0:n,a=e.duration;return{delay:r,duration:void 0===a?100:a,easing:e.easing,css:function(t){return"transform: scale(".concat(.8+.2*t,")")}}}function D(t,e){var n,r,f,h,v,g,_,y,b,E,S,w,N,O,k,x,P,C,j,R;return{c:function(){n=a("div"),r=a("a"),f=a("div"),h=o("\n      "),v=a("button"),_=o("\n\n    "),y=a("div"),b=a("div"),E=a("h1"),S=o("Interested in working together?"),w=o("\n        "),N=a("p"),O=o("Feel free to send me a mail!"),k=o("\n        "),x=a("p"),P=a("a"),C=o("hello@ls-age.com"),this.h()},l:function(t){n=i(t,"DIV",{class:!0},!1);var e=s(n);r=i(e,"A",{href:!0,"sapper-noscroll":!0},!1);var a=s(r);f=i(a,"DIV",{class:!0},!1),s(f).forEach(c),h=u(a,"\n      "),v=i(a,"BUTTON",{class:!0,"aria-label":!0},!1),s(v).forEach(c),a.forEach(c),_=u(e,"\n\n    "),y=i(e,"DIV",{class:!0},!1);var o=s(y);b=i(o,"DIV",{class:!0},!1);var l=s(b);E=i(l,"H1",{class:!0},!1);var d=s(E);S=u(d,"Interested in working together?"),d.forEach(c),w=u(l,"\n        "),N=i(l,"P",{},!1);var p=s(N);O=u(p,"Feel free to send me a mail!"),p.forEach(c),k=u(l,"\n        "),x=i(l,"P",{},!1);var m=s(x);P=i(m,"A",{class:!0,href:!0},!1);var g=s(P);C=u(g,"hello@ls-age.com"),g.forEach(c),m.forEach(c),l.forEach(c),o.forEach(c),e.forEach(c),this.h()},h:function(){f.className="modal-background svelte-15f505i",v.className="modal-close is-large is-dark",l(v,"aria-label","close"),r.href=g=e.child.props.path,l(r,"sapper-noscroll",!0),E.className="title",P.className="button is-link",P.href="mailto:hello@ls-age.com",b.className="box has-text-centered content svelte-15f505i",y.className="modal-content",n.className="modal is-active"},m:function(t,e){d(t,n,e),p(n,r),p(r,f),p(r,h),p(r,v),p(n,_),p(n,y),p(y,b),p(b,E),p(E,S),p(b,w),p(b,N),p(N,O),p(b,k),p(b,x),p(x,P),p(P,C),R=!0},p:function(t,e){R&&!t.child||g===(g=e.child.props.path)||(r.href=g)},i:function(e,r){R||(t.root._intro&&(t.root._aftercreate.push(function(){m(t,y,L,{delay:50,duration:150,easing:I},!0).run(1)}),j&&j.invalidate(),t.root._aftercreate.push(function(){j||(j=m(t,n,A,{duration:100},!0)),j.run(1)})),this.m(e,r))},o:function(e){R&&(j||(j=m(t,n,A,{duration:100},!1)),j.run(0,function(){e(),j=null}),R=!1)},d:function(t){t&&(c(n),j&&j.abort())}}}function V(t){if(r(this,t),this._state=e({undefined:void 0},t.data),this._intro=!!t.intro,this._fragment=function(t,n){var r,l,f,h,p,m,v={segment:n.child.segment,path:n.child.props.path},y=new R({root:t.root,store:t.store,data:v}),b=[n.child.props],E=n.child.component;function N(n){for(var r={},a=0;a<b.length;a+=1)r=e(r,b[a]);return{root:t.root,store:t.store,data:r}}if(E)var O=new E(N());var k=new q({root:t.root,store:t.store}),x=n.child.props.query.contact!==n.undefined&&D(t,n);return{c:function(){y._fragment.c(),r=o("\n\n"),l=a("main"),O&&O._fragment.c(),f=o("\n\n"),k._fragment.c(),h=o("\n\n"),x&&x.c(),p=S(),this.h()},l:function(t){y._fragment.l(t),r=u(t,"\n\n"),l=i(t,"MAIN",{class:!0},!1);var e=s(l);O&&O._fragment.l(e),e.forEach(c),f=u(t,"\n\n"),k._fragment.l(t),h=u(t,"\n\n"),x&&x.l(t),p=S(),this.h()},h:function(){l.className="svelte-15f505i"},m:function(t,e){y._mount(t,e),d(t,r,e),d(t,l,e),O&&O._mount(l,null),d(t,f,e),k._mount(t,e),d(t,h,e),x&&x.i(t,e),d(t,p,e),m=!0},p:function(e,n){var r={};e.child&&(r.segment=n.child.segment),e.child&&(r.path=n.child.props.path),y._set(r);var a=e.child?w(b,[n.child.props]):{};if(E!==(E=n.child.component)){if(O){g();var o=O;o._fragment.o(function(){o.destroy()})}E?((O=new E(N()))._fragment.c(),O._mount(l,null)):O=null}else E&&O._set(a);n.child.props.query.contact!==n.undefined?(x?x.p(e,n):(x=D(t,n))&&x.c(),x.i(p.parentNode,p)):x&&(g(),x.o(function(){x.d(1),x=null}))},i:function(t,e){m||this.m(t,e)},o:function(t){m&&(t=_(t,4),y&&y._fragment.o(t),O&&O._fragment.o(t),k&&k._fragment.o(t),x?x.o(t):t(),m=!1)},d:function(t){y.destroy(t),t&&(c(r),c(l)),O&&O.destroy(),t&&c(f),k.destroy(t),t&&c(h),x&&x.d(t),t&&c(p)}}}(this,this._state),t.target){var n=s(t.target);t.hydrate?this._fragment.l(n):this._fragment.c(),n.forEach(c),this._mount(t.target,t.anchor),y(this)}this._intro=!0}e(V.prototype,n);var U=!1;function F(t,e){var n,r,l,f,h,m,v,g,_,y,b=e.error.message;document.title=n=e.status;var w=U&&e.error.stack&&function(t,e){var n,r,l=e.error.stack;return{c:function(){n=a("pre"),r=o(l)},l:function(t){n=i(t,"PRE",{},!1);var e=s(n);r=u(e,l),e.forEach(c)},m:function(t,e){d(t,n,e),p(n,r)},p:function(t,e){t.error&&l!==(l=e.error.stack)&&N(r,l)},d:function(t){t&&c(n)}}}(0,e);return{c:function(){r=o("\n\n"),l=a("h1"),f=o(e.status),h=o("\n\n"),m=a("p"),v=o(b),g=o("\n\n"),w&&w.c(),_=S(),this.h()},l:function(t){r=u(t,"\n\n"),l=i(t,"H1",{class:!0},!1);var n=s(l);f=u(n,e.status),n.forEach(c),h=u(t,"\n\n"),m=i(t,"P",{class:!0},!1);var a=s(m);v=u(a,b),a.forEach(c),g=u(t,"\n\n"),w&&w.l(t),_=S(),this.h()},h:function(){l.className="svelte-8od9u6",m.className="svelte-8od9u6"},m:function(t,e){d(t,r,e),d(t,l,e),p(l,f),d(t,h,e),d(t,m,e),p(m,v),d(t,g,e),w&&w.m(t,e),d(t,_,e),y=!0},p:function(t,e){t.status&&n!==(n=e.status)&&(document.title=n),t.status&&N(f,e.status),t.error&&b!==(b=e.error.message)&&N(v,b),w&&(w.d(1),w=null)},i:function(t,e){y||this.m(t,e)},o:E,d:function(t){t&&(c(r),c(l),c(h),c(m),c(g)),w&&w.d(t),t&&c(_)}}}function T(t){if(r(this,t),this._state=e({},t.data),this._intro=!!t.intro,this._fragment=F(0,this._state),t.target){var n=s(t.target);t.hydrate?this._fragment.l(n):this._fragment.c(),n.forEach(c),this._mount(t.target,t.anchor)}this._intro=!0}e(T.prototype,n);var W,H,B,z,M,$,G,K=[/^\/open-source\/repos.json$/,/^\/open-source\/([^\/]+?)\/([^\/]+?)\/info.json$/],J=[{js:function(){return import("./chunk.8ae9dccd.js")},css:["chunk.8ae9dccd.css"]},{js:function(){return import("./chunk.4ca4238c.js")},css:["chunk.4ca4238c.css","chunk.e51d9823.css"]},{js:function(){return import("./chunk.2d792f16.js")},css:["chunk.2d792f16.css","chunk.e51d9823.css"]}],X=(W=decodeURIComponent,[{pattern:/^\/?$/,parts:[{i:0}]},{pattern:/^\/open-source\/?$/,parts:[null,{i:1}]},{pattern:/^\/open-source\/([^\/]+?)\/([^\/]+?)\/?$/,parts:[null,null,null,{i:2,params:function(t){return{owner:W(t[1]),repo:W(t[2])}}}]}]),Y=!1,Q=[],Z={path:null,params:null,query:null,child:{segment:null,component:null,props:{}}},tt=null;var et,nt=1;var rt,at,ot,it,st="undefined"!=typeof __SAPPER__&&__SAPPER__,ct="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},ut={};function lt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(st.baseUrl))return null;var e=t.pathname.slice(st.baseUrl.length);if(!K.some(function(t){return t.test(e)}))for(var n=0;n<X.length;n+=1){var r=X[n],a=r.pattern.exec(e);if(a){var o=function(){var n=Object.create(null);return t.search.length>0&&t.search.slice(1).split("&").forEach(function(t){var e=k(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t)),3),r=e[1],a=e[2];a=(a||"").replace(/\+/g," "),"string"==typeof n[r]&&(n[r]=[n[r]]),"object"===O(n[r])?n[r].push(a):n[r]=a}),{v:{url:t,path:e,page:r,match:a,query:n}}}();if("object"===O(o))return o.v}}}function ft(){return{x:pageXOffset,y:pageYOffset}}function ht(t,e,n,r){if(e)et=e;else{var a=ft();ut[et]=a,e=et=++nt,ut[et]=n?a:{x:0,y:0}}et=e,H&&H.set({preloading:!0});var o=tt&&tt.href===t.url.href?tt.promise:pt(t);tt=null;var i=B={};return o.then(function(t){var a=t.redirect,o=t.data,s=t.nullable_depth,c=t.new_segments;if(a)return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=lt(new URL(t,document.baseURI));return n?(ct[e.replaceState?"replaceState":"pushState"]({id:et},"",t),ht(n,null).then(function(){})):(location.href=t,new Promise(function(t){}))}(a.location,{replaceState:!0});c&&(Q=c),dt(o,s,ut[e],n,r,i),document.activeElement&&document.activeElement.blur()})}function dt(t,e,n,r,a,o){if(B===o){if(H){for(var i=t.child,s=0;s<e&&s!==e;s+=1)i=i.props.child;var c=i.component;i.component=null,H.set({child:t.child}),i.component=c,H.set(t)}else{var u=document.querySelector("#sapper-head-start"),l=document.querySelector("#sapper-head-end");if(u&&l){for(;u.nextSibling!==l;)vt(u.nextSibling);vt(u),vt(l)}Object.assign(t,M),H=new V({target:G,data:t,store:$,hydrate:!0})}if(!r){if(a){var f=document.querySelector(a);f&&(n={x:0,y:f.getBoundingClientRect().top})}ut[et]=n,n&&scrollTo(n.x,n.y)}Object.assign(Z,t),Y=!0}}function pt(t){for(var e=t.page,n=t.path,r=t.query,a=n.split("/").filter(Boolean),o=0;Q[o]&&a[o]&&Q[o]===a[o];)o+=1;o===a.length&&(o-=1);var i=null,s=null,c={store:$,fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){s={statusCode:t,message:e}}};return z||(z=V.preload?st.preloaded[0]||V.preload.call(c,{path:n,query:r,params:{}}):{}),Promise.all(e.parts.map(function(e,a){return a<o?null:e?(i=J[e.i],s="string"==typeof i.css?[]:i.css.map(mt),s.unshift(i.js()),Promise.all(s).then(function(t){return t[0].default})).then(function(o){var i,s={path:n,query:r,params:e.params?e.params(t.match):{}};return i=Y||!st.preloaded[a+1]?o.preload?o.preload.call(c,s):{}:st.preloaded[a+1],Promise.resolve(i).then(function(t){return{Component:o,preloaded:t}})}):null;var i,s})).catch(function(t){return s={statusCode:500,message:t},[]}).then(function(t){return M?t:Promise.resolve(z).then(function(e){return M=e,t})}).then(function(c){if(i)return{redirect:i,new_segments:a};var u=(e.parts[e.parts.length-1].params||function(){return{}})(t.match);if(s){var l={path:n,query:r,params:u,error:"string"==typeof s.message?new Error(s.message):s.message,status:s.statusCode};return{new_segments:a,data:Object.assign({},l,{preloading:!1,child:{component:T,props:l}})}}var f={path:n,query:r,error:null,status:null},h={path:n,preloading:!1,child:Object.assign({},Z.child,{segment:a[0]})};gt(r,Z.query)&&(h.query=r),gt(u,Z.params)&&(h.params=u);for(var d=h.child,p=0,m=0;m<e.parts.length;m+=1){var v=e.parts[m];if(v){var g=v.params||function(){return{}};m<o?(d.props.path=n,d.props.query=r,d.props.child=Object.assign({},d.props.child),p+=1):(d.component=c[m].Component,d.props=Object.assign({},d.props,f,{params:g(t.match)},c[m].preloaded),d.props.child={}),(d=d.props.child).segment=a[m+1]}}return{data:h,nullable_depth:p,new_segments:a}})}function mt(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)})}function vt(t){t.parentNode.removeChild(t)}function gt(t,e){return JSON.stringify(t)!==JSON.stringify(e)}function _t(t){var e=lt(new URL(t,document.baseURI));if(e)return tt&&t===tt.href||function(t,e){tt={href:t,promise:e}}(t,pt(e)),tt.promise}function yt(t){clearTimeout(rt),rt=setTimeout(function(){bt(t)},20)}function bt(t){var e=St(t.target);e&&"prefetch"===e.rel&&_t(e.href)}function Et(t){if(1===function(t){return null===t.which?t.button:t.which}(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=St(t.target);if(e&&e.href){var n="object"===O(e.href)&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r!==location.href){if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")&&(n?!e.target.baseVal:!e.target)){var a=new URL(r);if(a.pathname!==location.pathname||a.search!==location.search){var o=lt(a);if(o)ht(o,null,e.hasAttribute("sapper-noscroll"),a.hash),t.preventDefault(),ct.pushState({id:et},"",a.href)}}}else location.hash||t.preventDefault()}}}function St(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function wt(t){if(ut[et]=ft(),t.state){var e=lt(new URL(location.href));e?ht(e,t.state.id):location.href=location.href}else(function(t){et=t})(nt=nt+1),ct.replaceState({id:et},"",location.href)}at={target:document.querySelector("#sapper")},"scrollRestoration"in ct&&(ct.scrollRestoration="manual"),ot=at.target,G=ot,at.store&&(it=at.store,$=it(st.store)),addEventListener("click",Et),addEventListener("popstate",wt),addEventListener("touchstart",bt),addEventListener("mousemove",yt),Promise.resolve().then(function(){var t=location,e=t.hash,n=t.href;if(ct.replaceState({id:nt},"",n),!st.error){var r=lt(new URL(location.href));if(r)return ht(r,nt,!1,e)}});
//# sourceMappingURL=client.8c638009.js.map
