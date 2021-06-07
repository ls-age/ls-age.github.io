import{a as e,b as t,c as n,d as r,e as a,f as o,g as s,h as i,i as c,j as l,k as u,l as f,m as h,n as p,o as d,p as m,q as v,r as g,s as _,t as y,u as b,v as E,w as S,x as N,y as w}from"./chunk.4067539a.js";function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function k(e){var t=e-1;return t*t*t+1}function A(e,t){var n=t.delay;void 0===n&&(n=0);var r=t.duration;void 0===r&&(r=400);var a=+getComputedStyle(e).opacity;return{delay:n,duration:r,css:function(e){return"opacity: "+e*a}}}function P(e,t){var n=t.delay;void 0===n&&(n=0);var r=t.duration;void 0===r&&(r=400);var a=t.easing;void 0===a&&(a=k);var o=getComputedStyle(e),s=+o.opacity,i=parseFloat(o.height),c=parseFloat(o.paddingTop),l=parseFloat(o.paddingBottom),u=parseFloat(o.marginTop),f=parseFloat(o.marginBottom),h=parseFloat(o.borderTopWidth),p=parseFloat(o.borderBottomWidth);return{delay:n,duration:r,easing:a,css:function(e){return"overflow: hidden;opacity: "+Math.min(20*e,1)*s+";height: "+e*i+"px;padding-top: "+e*c+"px;padding-bottom: "+e*l+"px;margin-top: "+e*u+"px;margin-bottom: "+e*f+"px;border-top-width: "+e*h+"px;border-bottom-width: "+e*p+"px;"}}}function x(e,t){var n,v,g,_,y,b,E,S,N,w,O,k,A,x,C;function R(t){e.set({menuOpen:!1})}return{c:function(){n=r("div"),v=r("div"),g=r("a"),_=a("About"),y=a("\n        "),b=r("a"),E=a("Open Source"),S=a("\n\n      "),N=r("div"),w=r("div"),O=r("a"),k=a("Contact"),this.h()},l:function(e){n=o(e,"DIV",{class:!0},!1);var t=s(n);v=o(t,"DIV",{class:!0},!1);var r=s(v);g=o(r,"A",{class:!0,rel:!0,href:!0},!1);var a=s(g);_=c(a,"About"),a.forEach(i),y=c(r,"\n        "),b=o(r,"A",{class:!0,rel:!0,href:!0},!1);var l=s(b);E=c(l,"Open Source"),l.forEach(i),r.forEach(i),S=c(t,"\n\n      "),N=o(t,"DIV",{class:!0},!1);var u=s(N);w=o(u,"DIV",{class:!0},!1);var f=s(w);O=o(f,"A",{class:!0,href:!0,"sapper-noscroll":!0},!1);var h=s(O);k=c(h,"Contact"),h.forEach(i),f.forEach(i),u.forEach(i),t.forEach(i),this.h()},h:function(){g.className="navbar-item svelte-1mls0p8",g.rel="prefetch",g.href=".",f(g,"is-active",t.segment===t.undefined),b.className="navbar-item svelte-1mls0p8",b.rel="prefetch",b.href="open-source",f(b,"is-active","open-source"===t.segment),v.className="navbar-start svelte-1mls0p8",O.className="button svelte-1mls0p8",O.href=A=t.path+"?contact",l(O,"sapper-noscroll",!0),f(O,"is-primary",t.segment!==t.undefined),w.className="navbar-item svelte-1mls0p8",N.className="navbar-end svelte-1mls0p8",u(n,"click",R),n.className="navbar-menu svelte-1mls0p8",f(n,"is-active",t.menuOpen)},m:function(e,t){h(e,n,t),p(n,v),p(v,g),p(g,_),p(v,y),p(v,b),p(b,E),p(n,S),p(n,N),p(N,w),p(w,O),p(O,k),C=!0},p:function(e,t){(e.segment||e.undefined)&&f(g,"is-active",t.segment===t.undefined),e.segment&&f(b,"is-active","open-source"===t.segment),C&&!e.path||A===(A=t.path+"?contact")||(O.href=A),(e.segment||e.undefined)&&f(O,"is-primary",t.segment!==t.undefined),e.menuOpen&&f(n,"is-active",t.menuOpen)},i:function(r,a){C||(e.root._intro&&(x&&x.invalidate(),e.root._aftercreate.push(function(){x||(x=d(e,n,P,{duration:t.desktop?0:300},!0)),x.run(1)})),this.m(r,a))},o:function(r){C&&(x||(x=d(e,n,P,{duration:t.desktop?0:300},!1)),x.run(0,function(){r(),x=null}),C=!1)},d:function(e){e&&i(n),m(n,"click",R),e&&x&&x.abort()}}}function C(e,t){var n,a,c;function l(t){e.set({menuOpen:!1})}return{c:function(){n=r("div"),this.h()},l:function(e){n=o(e,"DIV",{class:!0},!1),s(n).forEach(i),this.h()},h:function(){u(n,"click",l),n.className="menu-overlay svelte-1mls0p8"},m:function(e,t){h(e,n,t),c=!0},i:function(t,r){c||(e.root._intro&&(a&&a.invalidate(),e.root._aftercreate.push(function(){a||(a=d(e,n,A,{duration:100},!0)),a.run(1)})),this.m(t,r))},o:function(t){c&&(a||(a=d(e,n,A,{duration:100},!1)),a.run(0,function(){t(),a=null}),c=!1)},d:function(e){e&&i(n),m(n,"click",l),e&&a&&a.abort()}}}function R(t){if(n(this,t),this._state=e(e({undefined:void 0},{menuOpen:!1}),t.data),this._state.innerWidth=window.innerWidth,this._recompute({innerWidth:1},this._state),this._intro=!!t.intro,this._fragment=function(e,t){var n,d,_,y,b,E,S,N,w,O,k;function A(t){e.set({innerWidth:this.innerWidth})}function P(t){e.toggleMenu()}window.addEventListener("resize",A);var R=(t.menuOpen||t.desktop)&&x(e,t),j=t.menuOpen&&!t.desktop&&C(e);return{c:function(){n=r("nav"),d=r("div"),_=r("div"),y=r("span"),b=a("\n      "),E=r("span"),S=a("\n      "),N=r("span"),w=a("\n\n  "),R&&R.c(),O=a("\n  "),j&&j.c(),this.h()},l:function(e){n=o(e,"NAV",{class:!0,role:!0,"aria-label":!0},!1);var t=s(n);d=o(t,"DIV",{class:!0},!1);var r=s(d);_=o(r,"DIV",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0},!1);var a=s(_);y=o(a,"SPAN",{"aria-hidden":!0,class:!0},!1),s(y).forEach(i),b=c(a,"\n      "),E=o(a,"SPAN",{"aria-hidden":!0,class:!0},!1),s(E).forEach(i),S=c(a,"\n      "),N=o(a,"SPAN",{"aria-hidden":!0,class:!0},!1),s(N).forEach(i),a.forEach(i),r.forEach(i),w=c(t,"\n\n  "),R&&R.l(t),O=c(t,"\n  "),j&&j.l(t),t.forEach(i),this.h()},h:function(){l(y,"aria-hidden","true"),y.className="svelte-1mls0p8",l(E,"aria-hidden","true"),E.className="svelte-1mls0p8",l(N,"aria-hidden","true"),N.className="svelte-1mls0p8",u(_,"click",P),l(_,"role","button"),_.className="navbar-burger burger svelte-1mls0p8",l(_,"aria-label","menu"),l(_,"aria-expanded","false"),f(_,"is-active",t.menuOpen),d.className="navbar-brand svelte-1mls0p8",n.className="navbar is-fixed-top is-transparent svelte-1mls0p8",l(n,"role","navigation"),l(n,"aria-label","main navigation"),f(n,"is-primary",t.segment===t.undefined&&!t.menuOpen)},m:function(e,t){h(e,n,t),p(n,d),p(d,_),p(_,y),p(_,b),p(_,E),p(_,S),p(_,N),p(n,w),R&&R.i(n,null),p(n,O),j&&j.i(n,null),k=!0},p:function(t,r){t.menuOpen&&f(_,"is-active",r.menuOpen),r.menuOpen||r.desktop?(R?R.p(t,r):(R=x(e,r))&&R.c(),R.i(n,O)):R&&(v(),R.o(function(){R.d(1),R=null})),r.menuOpen&&!r.desktop?(j||(j=C(e)).c(),j.i(n,null)):j&&(v(),j.o(function(){j.d(1),j=null})),(t.segment||t.undefined||t.menuOpen)&&f(n,"is-primary",r.segment===r.undefined&&!r.menuOpen)},i:function(e,t){k||this.m(e,t)},o:function(e){k&&(e=g(e,2),R?R.o(e):e(),j?j.o(e):e(),k=!1)},d:function(e){window.removeEventListener("resize",A),e&&i(n),m(_,"click",P),R&&R.d(),j&&j.d()}}}(this,this._state),t.target){var d=s(t.target);t.hydrate?this._fragment.l(d):this._fragment.c(),d.forEach(i),this._mount(t.target,t.anchor),_(this)}this._intro=!0}function j(t){var l,u,f,d,m,v,g,_,E,S,N,w,O,k,A,P,x;if(n(this,t),this._state=e({},t.data),this._intro=!!t.intro,this._fragment=(this._state,{c:function(){l=r("footer"),u=r("div"),f=r("p"),d=a("© 2019 Lukas Hechenberger"),m=a("\n    "),v=r("p"),g=a("Made with "),_=r("a"),E=a("Sapper"),S=a(" and "),N=r("a"),w=a("Bulma"),O=a(".\n      Check it out on "),k=r("a"),A=a("GitHub"),P=a("."),this.h()},l:function(e){l=o(e,"FOOTER",{class:!0},!1);var t=s(l);u=o(t,"DIV",{class:!0},!1);var n=s(u);f=o(n,"P",{class:!0},!1);var r=s(f);d=c(r,"© 2019 Lukas Hechenberger"),r.forEach(i),m=c(n,"\n    "),v=o(n,"P",{class:!0},!1);var a=s(v);g=c(a,"Made with "),_=o(a,"A",{href:!0},!1);var h=s(_);E=c(h,"Sapper"),h.forEach(i),S=c(a," and "),N=o(a,"A",{href:!0},!1);var p=s(N);w=c(p,"Bulma"),p.forEach(i),O=c(a,".\n      Check it out on "),k=o(a,"A",{href:!0},!1);var y=s(k);A=c(y,"GitHub"),y.forEach(i),P=c(a,"."),a.forEach(i),n.forEach(i),t.forEach(i),this.h()},h:function(){f.className="svelte-1gb2vdy",_.href="https://sapper.svelte.technology",N.href="https://bulma.io",k.href="https://github.com/ls-age/landing-page",v.className="svelte-1gb2vdy",u.className="content has-text-centered svelte-1gb2vdy",l.className="footer svelte-1gb2vdy"},m:function(e,t){h(e,l,t),p(l,u),p(u,f),p(f,d),p(u,m),p(u,v),p(v,g),p(v,_),p(_,E),p(v,S),p(v,N),p(N,w),p(v,O),p(v,k),p(k,A),p(v,P),x=!0},p:y,i:function(e,t){x||this.m(e,t)},o:b,d:function(e){e&&i(l)}}),t.target){var C=s(t.target);t.hydrate?this._fragment.l(C):this._fragment.c(),C.forEach(i),this._mount(t.target,t.anchor)}this._intro=!0}e(R.prototype,t),e(R.prototype,{toggleMenu:function(){this.set({menuOpen:!this.get().menuOpen})}}),R.prototype._recompute=function(e,t){e.innerWidth&&this._differs(t.desktop,t.desktop=t.innerWidth>400)&&(e.desktop=!0)},e(j.prototype,t);var I=function(e){return-e*(e-2)};function L(e,t){var n=t.delay,r=void 0===n?0:n,a=t.duration;return{delay:r,duration:void 0===a?100:a,easing:t.easing,css:function(e){return"transform: scale(".concat(.8+.2*e,")")}}}function q(e,t){var n,u,f,m,v,g,_,y,b,E,S,N,w,O,k,P,x,C,R,j;return{c:function(){n=r("div"),u=r("a"),f=r("div"),m=a("\n      "),v=r("button"),_=a("\n\n    "),y=r("div"),b=r("div"),E=r("h1"),S=a("Interested in working together?"),N=a("\n        "),w=r("p"),O=a("Feel free to send me a mail!"),k=a("\n        "),P=r("p"),x=r("a"),C=a("hello@ls-age.com"),this.h()},l:function(e){n=o(e,"DIV",{class:!0},!1);var t=s(n);u=o(t,"A",{href:!0,"sapper-noscroll":!0},!1);var r=s(u);f=o(r,"DIV",{class:!0},!1),s(f).forEach(i),m=c(r,"\n      "),v=o(r,"BUTTON",{class:!0,"aria-label":!0},!1),s(v).forEach(i),r.forEach(i),_=c(t,"\n\n    "),y=o(t,"DIV",{class:!0},!1);var a=s(y);b=o(a,"DIV",{class:!0},!1);var l=s(b);E=o(l,"H1",{class:!0},!1);var h=s(E);S=c(h,"Interested in working together?"),h.forEach(i),N=c(l,"\n        "),w=o(l,"P",{class:!0},!1);var p=s(w);O=c(p,"Feel free to send me a mail!"),p.forEach(i),k=c(l,"\n        "),P=o(l,"P",{class:!0},!1);var d=s(P);x=o(d,"A",{class:!0,href:!0},!1);var g=s(x);C=c(g,"hello@ls-age.com"),g.forEach(i),d.forEach(i),l.forEach(i),a.forEach(i),t.forEach(i),this.h()},h:function(){f.className="modal-background svelte-4sggz6",v.className="modal-close is-large is-dark svelte-4sggz6",l(v,"aria-label","close"),u.href=g=t.child.props.path,l(u,"sapper-noscroll",!0),E.className="title svelte-4sggz6",w.className="svelte-4sggz6",x.className="button is-link svelte-4sggz6",x.href="mailto:hello@ls-age.com",P.className="svelte-4sggz6",b.className="box has-text-centered content svelte-4sggz6",y.className="modal-content svelte-4sggz6",n.className="modal is-active svelte-4sggz6"},m:function(e,t){h(e,n,t),p(n,u),p(u,f),p(u,m),p(u,v),p(n,_),p(n,y),p(y,b),p(b,E),p(E,S),p(b,N),p(b,w),p(w,O),p(b,k),p(b,P),p(P,x),p(x,C),j=!0},p:function(e,t){j&&!e.child||g===(g=t.child.props.path)||(u.href=g)},i:function(t,r){j||(e.root._intro&&(e.root._aftercreate.push(function(){d(e,y,L,{delay:50,duration:150,easing:I},!0).run(1)}),R&&R.invalidate(),e.root._aftercreate.push(function(){R||(R=d(e,n,A,{duration:100},!0)),R.run(1)})),this.m(t,r))},o:function(t){j&&(R||(R=d(e,n,A,{duration:100},!1)),R.run(0,function(){t(),R=null}),j=!1)},d:function(e){e&&(i(n),R&&R.abort())}}}function D(t){if(n(this,t),this._state=e({undefined:void 0},t.data),this._intro=!!t.intro,this._fragment=function(t,n){var l,u,f,p,d,m,_={segment:n.child.segment,path:n.child.props.path},y=new R({root:t.root,store:t.store,data:_}),b=[n.child.props],N=n.child.component;function w(n){for(var r={},a=0;a<b.length;a+=1)r=e(r,b[a]);return{root:t.root,store:t.store,data:r}}if(N)var O=new N(w());var k=new j({root:t.root,store:t.store}),A=n.child.props.query.contact!==n.undefined&&q(t,n);return{c:function(){y._fragment.c(),l=a("\n\n"),u=r("main"),O&&O._fragment.c(),f=a("\n\n"),k._fragment.c(),p=a("\n\n"),A&&A.c(),d=E(),this.h()},l:function(e){y._fragment.l(e),l=c(e,"\n\n"),u=o(e,"MAIN",{class:!0},!1);var t=s(u);O&&O._fragment.l(t),t.forEach(i),f=c(e,"\n\n"),k._fragment.l(e),p=c(e,"\n\n"),A&&A.l(e),d=E(),this.h()},h:function(){u.className="svelte-4sggz6"},m:function(e,t){y._mount(e,t),h(e,l,t),h(e,u,t),O&&O._mount(u,null),h(e,f,t),k._mount(e,t),h(e,p,t),A&&A.i(e,t),h(e,d,t),m=!0},p:function(e,n){var r={};e.child&&(r.segment=n.child.segment),e.child&&(r.path=n.child.props.path),y._set(r);var a=e.child?S(b,[n.child.props]):{};if(N!==(N=n.child.component)){if(O){v();var o=O;o._fragment.o(function(){o.destroy()})}N?((O=new N(w()))._fragment.c(),O._mount(u,null)):O=null}else N&&O._set(a);n.child.props.query.contact!==n.undefined?(A?A.p(e,n):(A=q(t,n))&&A.c(),A.i(d.parentNode,d)):A&&(v(),A.o(function(){A.d(1),A=null}))},i:function(e,t){m||this.m(e,t)},o:function(e){m&&(e=g(e,4),y&&y._fragment.o(e),O&&O._fragment.o(e),k&&k._fragment.o(e),A?A.o(e):e(),m=!1)},d:function(e){y.destroy(e),e&&(i(l),i(u)),O&&O.destroy(),e&&i(f),k.destroy(e),e&&i(p),A&&A.d(e),e&&i(d)}}}(this,this._state),t.target){var l=s(t.target);t.hydrate?this._fragment.l(l):this._fragment.c(),l.forEach(i),this._mount(t.target,t.anchor),_(this)}this._intro=!0}e(D.prototype,t);var V=!1;function U(e,t){var n,l,u,f,d,m,v,g,_,y,S=t.error.message;document.title=n=t.status;var w=V&&t.error.stack&&function(e,t){var n,l,u=t.error.stack;return{c:function(){n=r("pre"),l=a(u)},l:function(e){n=o(e,"PRE",{},!1);var t=s(n);l=c(t,u),t.forEach(i)},m:function(e,t){h(e,n,t),p(n,l)},p:function(e,t){e.error&&u!==(u=t.error.stack)&&N(l,u)},d:function(e){e&&i(n)}}}(0,t);return{c:function(){l=a("\n\n"),u=r("h1"),f=a(t.status),d=a("\n\n"),m=r("p"),v=a(S),g=a("\n\n"),w&&w.c(),_=E(),this.h()},l:function(e){l=c(e,"\n\n"),u=o(e,"H1",{class:!0},!1);var n=s(u);f=c(n,t.status),n.forEach(i),d=c(e,"\n\n"),m=o(e,"P",{class:!0},!1);var r=s(m);v=c(r,S),r.forEach(i),g=c(e,"\n\n"),w&&w.l(e),_=E(),this.h()},h:function(){u.className="svelte-8od9u6",m.className="svelte-8od9u6"},m:function(e,t){h(e,l,t),h(e,u,t),p(u,f),h(e,d,t),h(e,m,t),p(m,v),h(e,g,t),w&&w.m(e,t),h(e,_,t),y=!0},p:function(e,t){e.status&&n!==(n=t.status)&&(document.title=n),e.status&&N(f,t.status),e.error&&S!==(S=t.error.message)&&N(v,S),w&&(w.d(1),w=null)},i:function(e,t){y||this.m(e,t)},o:b,d:function(e){e&&(i(l),i(u),i(d),i(m),i(g)),w&&w.d(e),e&&i(_)}}}function z(t){if(n(this,t),this._state=e({},t.data),this._intro=!!t.intro,this._fragment=U(0,this._state),t.target){var r=s(t.target);t.hydrate?this._fragment.l(r):this._fragment.c(),r.forEach(i),this._mount(t.target,t.anchor)}this._intro=!0}e(z.prototype,t);var F,T,W,H,B,M,$,G=[/^\/open-source\/repos.json$/,/^\/open-source\/([^\/]+?)\/([^\/]+?)\/info.json$/],K=[{js:function(){return import("./chunk.312082d1.js")},css:["chunk.312082d1.css"]},{js:function(){return import("./chunk.f5dd777d.js")},css:["chunk.f5dd777d.css","chunk.2f087dff.css"]},{js:function(){return import("./chunk.39098ccb.js")},css:["chunk.39098ccb.css","chunk.2f087dff.css"]}],J=(F=decodeURIComponent,[{pattern:/^\/?$/,parts:[{i:0}]},{pattern:/^\/open-source\/?$/,parts:[null,{i:1}]},{pattern:/^\/open-source\/([^\/]+?)\/([^\/]+?)\/?$/,parts:[null,null,null,{i:2,params:function(e){return{owner:F(e[1]),repo:F(e[2])}}}]}]),X=!1,Y=[],Q={path:null,params:null,query:null,child:{segment:null,component:null,props:{}}},Z=null;var ee,te=1;var ne,re,ae,oe,se="undefined"!=typeof __SAPPER__&&__SAPPER__,ie="undefined"!=typeof history?history:{pushState:function(e,t,n){},replaceState:function(e,t,n){},scrollRestoration:""},ce={};function le(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(se.baseUrl))return null;var t=e.pathname.slice(se.baseUrl.length);if(!G.some(function(e){return e.test(t)}))for(var n=0;n<J.length;n+=1){var r=J[n],a=r.pattern.exec(t);if(a){var o=function(){var n=Object.create(null);return e.search.length>0&&e.search.slice(1).split("&").forEach(function(e){var t=O(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e)),3),r=t[1],a=t[2];a=(a||"").replace(/\+/g," "),"string"==typeof n[r]&&(n[r]=[n[r]]),"object"===w(n[r])?n[r].push(a):n[r]=a}),{v:{url:e,path:t,page:r,match:a,query:n}}}();if("object"===w(o))return o.v}}}function ue(){return{x:pageXOffset,y:pageYOffset}}function fe(e,t,n,r){if(t)ee=t;else{var a=ue();ce[ee]=a,t=ee=++te,ce[ee]=n?a:{x:0,y:0}}ee=t,T&&T.set({preloading:!0});var o=Z&&Z.href===e.url.href?Z.promise:pe(e);Z=null;var s=W={};return o.then(function(e){var a=e.redirect,o=e.data,i=e.nullable_depth,c=e.new_segments;if(a)return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=le(new URL(e,document.baseURI));return n?(ie[t.replaceState?"replaceState":"pushState"]({id:ee},"",e),fe(n,null).then(function(){})):(location.href=e,new Promise(function(e){}))}(a.location,{replaceState:!0});c&&(Y=c),he(o,i,ce[t],n,r,s),document.activeElement&&document.activeElement.blur()})}function he(e,t,n,r,a,o){if(W===o){if(T){for(var s=e.child,i=0;i<t&&i!==t;i+=1)s=s.props.child;var c=s.component;s.component=null,T.set({child:e.child}),s.component=c,T.set(e)}else{var l=document.querySelector("#sapper-head-start"),u=document.querySelector("#sapper-head-end");if(l&&u){for(;l.nextSibling!==u;)me(l.nextSibling);me(l),me(u)}Object.assign(e,B),T=new D({target:$,data:e,store:M,hydrate:!0})}if(!r){if(a){var f=document.querySelector(a);f&&(n={x:0,y:f.getBoundingClientRect().top})}ce[ee]=n,n&&scrollTo(n.x,n.y)}Object.assign(Q,e),X=!0}}function pe(e){for(var t=e.page,n=e.path,r=e.query,a=n.split("/").filter(Boolean),o=0;Y[o]&&a[o]&&Y[o]===a[o];)o+=1;o===a.length&&(o-=1);var s=null,i=null,c={store:M,fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){return fetch(e,t)}),redirect:function(e,t){if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:function(e,t){i={statusCode:e,message:t}}};return H||(H=D.preload?se.preloaded[0]||D.preload.call(c,{path:n,query:r,params:{}}):{}),Promise.all(t.parts.map(function(t,a){return a<o?null:t?(s=K[t.i],i="string"==typeof s.css?[]:s.css.map(de),i.unshift(s.js()),Promise.all(i).then(function(e){return e[0].default})).then(function(o){var s,i={path:n,query:r,params:t.params?t.params(e.match):{}};return s=X||!se.preloaded[a+1]?o.preload?o.preload.call(c,i):{}:se.preloaded[a+1],Promise.resolve(s).then(function(e){return{Component:o,preloaded:e}})}):null;var s,i})).catch(function(e){return i={statusCode:500,message:e},[]}).then(function(e){return B?e:Promise.resolve(H).then(function(t){return B=t,e})}).then(function(c){if(s)return{redirect:s,new_segments:a};var l=(t.parts[t.parts.length-1].params||function(){return{}})(e.match);if(i){var u={path:n,query:r,params:l,error:"string"==typeof i.message?new Error(i.message):i.message,status:i.statusCode};return{new_segments:a,data:Object.assign({},u,{preloading:!1,child:{component:z,props:u}})}}var f={path:n,query:r,error:null,status:null},h={path:n,preloading:!1,child:Object.assign({},Q.child,{segment:a[0]})};ve(r,Q.query)&&(h.query=r),ve(l,Q.params)&&(h.params=l);for(var p=h.child,d=0,m=0;m<t.parts.length;m+=1){var v=t.parts[m];if(v){var g=v.params||function(){return{}};m<o?(p.props.path=n,p.props.query=r,p.props.child=Object.assign({},p.props.child),d+=1):(p.component=c[m].Component,p.props=Object.assign({},p.props,f,{params:g(e.match)},c[m].preloaded),p.props.child={}),(p=p.props.child).segment=a[m+1]}}return{data:h,nullable_depth:d,new_segments:a}})}function de(e){var t="client/".concat(e);if(!document.querySelector('link[href="'.concat(t,'"]')))return new Promise(function(e,n){var r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=function(){return e()},r.onerror=n,document.head.appendChild(r)})}function me(e){e.parentNode.removeChild(e)}function ve(e,t){return JSON.stringify(e)!==JSON.stringify(t)}function ge(e){var t=le(new URL(e,document.baseURI));if(t)return Z&&e===Z.href||function(e,t){Z={href:e,promise:t}}(e,pe(t)),Z.promise}function _e(e){clearTimeout(ne),ne=setTimeout(function(){ye(e)},20)}function ye(e){var t=Ee(e.target);t&&"prefetch"===t.rel&&ge(t.href)}function be(e){if(1===function(e){return null===e.which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=Ee(e.target);if(t&&t.href){var n="object"===w(t.href)&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r!==location.href){if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")&&(n?!t.target.baseVal:!t.target)){var a=new URL(r);if(a.pathname!==location.pathname||a.search!==location.search){var o=le(a);if(o)fe(o,null,t.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),ie.pushState({id:ee},"",a.href)}}}else location.hash||e.preventDefault()}}}function Ee(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Se(e){if(ce[ee]=ue(),e.state){var t=le(new URL(location.href));t?fe(t,e.state.id):location.href=location.href}else(function(e){ee=e})(te=te+1),ie.replaceState({id:ee},"",location.href)}re={target:document.querySelector("#sapper")},"scrollRestoration"in ie&&(ie.scrollRestoration="manual"),ae=re.target,$=ae,re.store&&(oe=re.store,M=oe(se.store)),addEventListener("click",be),addEventListener("popstate",Se),addEventListener("touchstart",ye),addEventListener("mousemove",_e),Promise.resolve().then(function(){var e=location,t=e.hash,n=e.href;if(ie.replaceState({id:te},"",n),!se.error){var r=le(new URL(location.href));if(r)return fe(r,te,!1,t)}});
//# sourceMappingURL=client.db265226.js.map
