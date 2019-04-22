import{a as t,b as n,c as e,d as a,f as s,g as r,h as o,m as i,e as c,i as l,n as f,x as h,q as u,r as m,z as d,s as v,t as p,u as g,A as _,v as w,w as N,B as y,C as E}from"./chunk.4067539a.js";import{a as z}from"./chunk.45d65b2a.js";import{c as b,d as I,e as V}from"./chunk.f56c1553.js";function D(t,n,e){var a=Object.create(t);return a.item=n[e],a}function k(t,n){var e,a={children:n.item.children,_root:!1},s=new A({root:t.root,store:t.store,data:a});return{c:function(){s._fragment.c()},l:function(t){s._fragment.l(t)},m:function(t,n){s._mount(t,n),e=!0},p:function(t,n){var e={};t.children&&(e.children=n.item.children),s._set(e)},i:function(t,n){e||this.m(t,n)},o:function(t){e&&(s&&s._fragment.o(t),e=!1)},d:function(t){s.destroy(t)}}}function O(t,n){var e,m,d,v,p,g,_,w=n.item.title,N=n.item.children&&k(t,n);return{c:function(){e=a("li"),m=a("a"),d=c(w),p=c("\n      "),N&&N.c(),g=c("\n    "),this.h()},l:function(t){e=s(t,"LI",{},!1);var n=r(e);m=s(n,"A",{href:!0,class:!0},!1);var a=r(m);d=l(a,w),a.forEach(o),p=l(n,"\n      "),N&&N.l(n),g=l(n,"\n    "),n.forEach(o),this.h()},h:function(){m.href=v=n.item.href,m.className="svelte-9yxbi5"},m:function(t,n){i(t,e,n),f(e,m),f(m,d),f(e,p),N&&N.m(e,null),f(e,g),_=!0},p:function(n,a){_&&!n.children||w===(w=a.item.title)||h(d,w),_&&!n.children||v===(v=a.item.href)||(m.href=v),a.item.children?(N?N.p(n,a):(N=k(t,a))&&N.c(),N.i(e,g)):N&&(u(),N.o(function(){N.d(1),N=null}))},i:function(t,n){_||this.m(t,n)},o:function(t){_&&(N?N.o(t):t(),_=!1)},d:function(t){t&&o(e),N&&N.d()}}}function A(n){if(e(this,n),this._state=t({_root:!0},n.data),this._intro=!!n.intro,this._fragment=function(t,n){for(var e,c,l=n.children,f=[],h=0;h<l.length;h+=1)f[h]=O(t,D(n,l,h));function v(t,n,e){f[t]&&f[t].o(function(){n&&(f[t].d(n),f[t]=null),e&&e()})}return{c:function(){e=a("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){e=s(t,"UL",{class:!0},!1);for(var n=r(e),a=0;a<f.length;a+=1)f[a].l(n);n.forEach(o),this.h()},h:function(){e.className="list"},m:function(t,n){i(t,e,n);for(var a=0;a<f.length;a+=1)f[a].i(e,null);c=!0},p:function(n,a){if(n.children){l=a.children;for(var s=0;s<l.length;s+=1){var r=D(a,l,s);f[s]?f[s].p(n,r):(f[s]=O(t,r),f[s].c()),f[s].i(e,null)}for(u();s<f.length;s+=1)v(s,1)}},i:function(t,n){c||this.m(t,n)},o:function(t){if(c){f=f.filter(Boolean);for(var n=m(t,f.length),e=0;e<f.length;e+=1)v(e,0,n);c=!1}},d:function(t){t&&o(e),d(f,t)}}}(this,this._state),n.target){var c=r(n.target);n.hydrate?this._fragment.l(c):this._fragment.c(),c.forEach(o),this._mount(n.target,n.anchor),v(this)}this._intro=!0}function j(n){var c,l,h,u,m;if(e(this,n),this._state=t({},n.data),this._intro=!!n.intro,this._slotted=n.slots||{},this._fragment=(c=this,this._state,m=c._slotted.default,{c:function(){l=a("div"),h=a("div"),this.h()},l:function(t){l=s(t,"DIV",{class:!0},!1);var n=r(l);h=s(n,"DIV",{class:!0},!1),r(h).forEach(o),n.forEach(o),this.h()},h:function(){h.className="marked svelte-1vo2gi6",l.className="marked-container svelte-1vo2gi6"},m:function(t,n){i(t,l,n),f(l,h),m&&f(h,m),u=!0},p:p,i:function(t,n){u||this.m(t,n)},o:g,d:function(t){t&&o(l),m&&_(h,m)}}),n.target){var d=r(n.target);n.hydrate?this._fragment.l(d):this._fragment.c(),d.forEach(o),this._mount(n.target,n.anchor)}this._intro=!0}function S(){return(S=b(I.mark(function t(n){var e;return I.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params,t.abrupt("return",this.fetch("open-source/".concat(e.owner,"/").concat(e.repo,"/info.json")).then(function(t){return t.json()}));case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function C(t,n){var e,u;return{c:function(){e=a("h2"),u=c(n.description),this.h()},l:function(t){e=s(t,"H2",{class:!0},!1);var a=r(e);u=l(a,n.description),a.forEach(o),this.h()},h:function(){e.className="subtitle svelte-1twy1zm"},m:function(t,n){i(t,e,n),f(e,u)},p:function(t,n){t.description&&h(u,n.description)},d:function(t){t&&o(e)}}}function W(t,n){var e,u,m,d,v,p,g,_,w=n.releases.nodes[0].tagName;return{c:function(){e=a("div"),u=a("div"),m=a("div"),d=a("span"),v=c("Current release"),p=c("\n                "),g=a("span"),_=c(w),this.h()},l:function(t){e=s(t,"DIV",{class:!0},!1);var n=r(e);u=s(n,"DIV",{class:!0},!1);var a=r(u);m=s(a,"DIV",{class:!0},!1);var i=r(m);d=s(i,"SPAN",{class:!0},!1);var c=r(d);v=l(c,"Current release"),c.forEach(o),p=l(i,"\n                "),g=s(i,"SPAN",{class:!0},!1);var f=r(g);_=l(f,w),f.forEach(o),i.forEach(o),a.forEach(o),n.forEach(o),this.h()},h:function(){d.className="tag is-dark svelte-1twy1zm",g.className="tag is-info svelte-1twy1zm",m.className="tags has-addons svelte-1twy1zm",u.className="tags svelte-1twy1zm",e.className="control svelte-1twy1zm"},m:function(t,n){i(t,e,n),f(e,u),f(u,m),f(m,d),f(d,v),f(m,p),f(m,g),f(g,_)},p:function(t,n){t.releases&&w!==(w=n.releases.nodes[0].tagName)&&h(_,w)},d:function(t){t&&o(e)}}}function H(t,n){var e,h;return{c:function(){e=a("i"),h=c("No readme")},l:function(t){e=s(t,"I",{},!1);var n=r(e);h=l(n,"No readme"),n.forEach(o)},m:function(t,n){i(t,e,n),f(e,h)},p:p,d:function(t){t&&o(e)}}}function x(t,n){var e,s,r=n.readme.content;return{c:function(){e=a("noscript"),s=a("noscript")},l:function(t){e=a("noscript"),s=a("noscript")},m:function(t,n){i(t,e,n),e.insertAdjacentHTML("afterend",r),i(t,s,n)},p:function(t,n){t.readme&&r!==(r=n.readme.content)&&(E(e,s),e.insertAdjacentHTML("afterend",r))},d:function(t){t&&(E(e,s),o(e),o(s))}}}function L(n){if(e(this,n),this._state=t({},n.data),this._recompute({params:1,readme:1},this._state),this._intro=!!n.intro,this._fragment=function(n,e){var u,d,v,p,g,_,E,b,I,D,k,O,S,L,P,T,B,G,M,q,R,U,F,J,K,Q,X,Y,Z,$,tt,nt=e.stargazers.totalCount,et={title:e.nameWithOwner,description:e.description},at=new z({root:n.root,store:n.store,data:et}),st=e.description&&C(0,e),rt=e.releases.nodes.length&&W(0,e),ot=new V({root:n.root,store:n.store,data:{fixed:!0}});function it(t){return t.readme?x:H}for(var ct=it(e),lt=ct(n,e),ft=new j({root:n.root,store:n.store,slots:{default:y()}}),ht=[e.subNav],ut={},mt=0;mt<ht.length;mt+=1)ut=t(ut,ht[mt]);var dt=new A({root:n.root,store:n.store,data:ut});return{c:function(){at._fragment.c(),u=c("\n\n"),d=a("section"),v=a("div"),p=a("div"),g=a("h1"),_=c(e.nameWithOwner),E=c("\n\n      "),st&&st.c(),b=c("\n\n      "),I=a("div"),D=a("div"),k=a("div"),O=a("div"),S=a("span"),L=c("Stars"),P=c("\n              "),T=a("span"),B=c(nt),G=c("\n\n        "),rt&&rt.c(),M=c("\n\n      "),q=a("a"),R=c("View on GitHub"),U=c("\n\n"),ot._fragment.c(),F=c("\n\n"),J=a("section"),K=a("div"),Q=a("div"),X=a("div"),lt.c(),Y=w(),ft._fragment.c(),Z=c("\n      "),$=a("div"),dt._fragment.c(),this.h()},l:function(t){at._fragment.l(t),u=l(t,"\n\n"),d=s(t,"SECTION",{class:!0},!1);var n=r(d);v=s(n,"DIV",{class:!0},!1);var a=r(v);p=s(a,"DIV",{class:!0},!1);var i=r(p);g=s(i,"H1",{class:!0},!1);var c=r(g);_=l(c,e.nameWithOwner),c.forEach(o),E=l(i,"\n\n      "),st&&st.l(i),b=l(i,"\n\n      "),I=s(i,"DIV",{class:!0},!1);var f=r(I);D=s(f,"DIV",{class:!0},!1);var h=r(D);k=s(h,"DIV",{class:!0},!1);var m=r(k);O=s(m,"DIV",{class:!0},!1);var N=r(O);S=s(N,"SPAN",{class:!0},!1);var y=r(S);L=l(y,"Stars"),y.forEach(o),P=l(N,"\n              "),T=s(N,"SPAN",{class:!0},!1);var z=r(T);B=l(z,nt),z.forEach(o),N.forEach(o),m.forEach(o),h.forEach(o),G=l(f,"\n\n        "),rt&&rt.l(f),f.forEach(o),M=l(i,"\n\n      "),q=s(i,"A",{href:!0,class:!0},!1);var V=r(q);R=l(V,"View on GitHub"),V.forEach(o),i.forEach(o),a.forEach(o),n.forEach(o),U=l(t,"\n\n"),ot._fragment.l(t),F=l(t,"\n\n"),J=s(t,"SECTION",{class:!0},!1);var A=r(J);K=s(A,"DIV",{class:!0},!1);var j=r(K);Q=s(j,"DIV",{class:!0},!1);var C=r(Q);X=s(C,"DIV",{class:!0},!1);var W=r(X);lt.l(t),Y=w(),ft._fragment.l(W),W.forEach(o),Z=l(C,"\n      "),$=s(C,"DIV",{class:!0},!1);var H=r($);dt._fragment.l(H),H.forEach(o),C.forEach(o),j.forEach(o),A.forEach(o),this.h()},h:function(){g.className="title svelte-1twy1zm",S.className="tag is-dark svelte-1twy1zm",T.className="tag is-warning svelte-1twy1zm",O.className="tags has-addons svelte-1twy1zm",k.className="tags svelte-1twy1zm",D.className="control svelte-1twy1zm",I.className="field is-grouped is-grouped-multiline svelte-1twy1zm",q.href=e.url,q.className="button is-dark is-pulled-right svelte-1twy1zm",p.className="container svelte-1twy1zm",v.className="hero-body svelte-1twy1zm",d.className="hero is-medium is-light svelte-1twy1zm",X.className="column svelte-1twy1zm",$.className="column is-2 toc svelte-1twy1zm",Q.className="columns under-tabbar svelte-1twy1zm",K.className="container svelte-1twy1zm",J.className="section has-background-white svelte-1twy1zm"},m:function(t,n){at._mount(t,n),i(t,u,n),i(t,d,n),f(d,v),f(v,p),f(p,g),f(g,_),f(p,E),st&&st.m(p,null),f(p,b),f(p,I),f(I,D),f(D,k),f(k,O),f(O,S),f(S,L),f(O,P),f(O,T),f(T,B),f(I,G),rt&&rt.m(I,null),f(p,M),f(p,q),f(q,R),i(t,U,n),ot._mount(t,n),i(t,F,n),i(t,J,n),f(J,K),f(K,Q),f(Q,X),lt.m(ft._slotted.default,null),f(ft._slotted.default,Y),ft._mount(X,null),f(Q,Z),f(Q,$),dt._mount($,null),tt=!0},p:function(t,e){var a={};t.nameWithOwner&&(a.title=e.nameWithOwner),t.description&&(a.description=e.description),at._set(a),tt&&!t.nameWithOwner||h(_,e.nameWithOwner),e.description?st?st.p(t,e):((st=C(0,e)).c(),st.m(p,b)):st&&(st.d(1),st=null),tt&&!t.stargazers||nt===(nt=e.stargazers.totalCount)||h(B,nt),e.releases.nodes.length?rt?rt.p(t,e):((rt=W(0,e)).c(),rt.m(I,null)):rt&&(rt.d(1),rt=null),tt&&!t.url||(q.href=e.url),ct===(ct=it(e))&&lt?lt.p(t,e):(lt.d(1),(lt=ct(n,e)).c(),lt.m(Y.parentNode,Y));var s=t.subNav?N(ht,[e.subNav]):{};dt._set(s)},i:function(t,n){tt||this.m(t,n)},o:function(t){tt&&(t=m(t,4),at&&at._fragment.o(t),ot&&ot._fragment.o(t),ft&&ft._fragment.o(t),dt&&dt._fragment.o(t),tt=!1)},d:function(t){at.destroy(t),t&&(o(u),o(d)),st&&st.d(),rt&&rt.d(),t&&o(U),ot.destroy(t),t&&(o(F),o(J)),lt.d(),ft.destroy(),dt.destroy()}}}(this,this._state),n.target){var u=r(n.target);n.hydrate?this._fragment.l(u):this._fragment.c(),u.forEach(o),this._mount(n.target,n.anchor),v(this)}this._intro=!0}t(A.prototype,n),t(j.prototype,n),t(L.prototype,n),L.prototype._recompute=function(t,n){var e,a,s;(t.params||t.readme)&&this._differs(n.subNav,n.subNav=(a=(e=n).params,{title:"Readme",children:(s=e.readme)?function t(n){return n.map(function(n){return{title:n.title,href:"open-source/".concat(a.owner,"/").concat(a.repo,"#").concat(n.slug),children:n.children?t(n.children):null}})}(s.sections):[]}))&&(t.subNav=!0)},L.preload=function(t){return S.apply(this,arguments)};export default L;
//# sourceMappingURL=chunk.457f9edc.js.map
