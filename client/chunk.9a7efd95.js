import{a as t,b as e,c as a,d as s,f as r,g as n,h as o,m as i,e as l,i as c,n as h,x as m,q as d,r as f,y as u,s as v,t as g,u as p,z as _,v as N,w,A as y,B as E}from"./chunk.59e5df27.js";import{a as z}from"./chunk.f928a952.js";function I(t,e,a){const s=Object.create(t);return s.item=e[a],s}function b(t,e){var a,s={children:e.item.children,_root:!1},r=new D({root:t.root,store:t.store,data:s});return{c(){r._fragment.c()},l(t){r._fragment.l(t)},m(t,e){r._mount(t,e),a=!0},p(t,e){var a={};t.children&&(a.children=e.item.children),r._set(a)},i(t,e){a||this.m(t,e)},o(t){a&&(r&&r._fragment.o(t),a=!1)},d(t){r.destroy(t)}}}function V(t,e){var a,f,u,v,g,p,_,N=e.item.title,w=e.item.children&&b(t,e);return{c(){a=s("li"),f=s("a"),u=l(N),g=l("\n      "),w&&w.c(),p=l("\n    "),this.h()},l(t){a=r(t,"LI",{},!1);var e=n(a);f=r(e,"A",{href:!0,class:!0},!1);var s=n(f);u=c(s,N),s.forEach(o),g=c(e,"\n      "),w&&w.l(e),p=c(e,"\n    "),e.forEach(o),this.h()},h(){f.href=v=e.item.href,f.className="svelte-9yxbi5"},m(t,e){i(t,a,e),h(a,f),h(f,u),h(a,g),w&&w.m(a,null),h(a,p),_=!0},p(e,s){_&&!e.children||N===(N=s.item.title)||m(u,N),_&&!e.children||v===(v=s.item.href)||(f.href=v),s.item.children?(w?w.p(e,s):(w=b(t,s))&&w.c(),w.i(a,p)):w&&(d(),w.o(function(){w.d(1),w=null}))},i(t,e){_||this.m(t,e)},o(t){_&&(w?w.o(t):t(),_=!1)},d(t){t&&o(a),w&&w.d()}}}function D(e){if(a(this,e),this._state=t({_root:!0},e.data),this._intro=!!e.intro,this._fragment=function(t,e){for(var a,l,c=e.children,h=[],m=0;m<c.length;m+=1)h[m]=V(t,I(e,c,m));function v(t,e,a){h[t]&&h[t].o(()=>{e&&(h[t].d(e),h[t]=null),a&&a()})}return{c(){a=s("ul");for(var t=0;t<h.length;t+=1)h[t].c();this.h()},l(t){a=r(t,"UL",{class:!0},!1);for(var e=n(a),s=0;s<h.length;s+=1)h[s].l(e);e.forEach(o),this.h()},h(){a.className="list"},m(t,e){i(t,a,e);for(var s=0;s<h.length;s+=1)h[s].i(a,null);l=!0},p(e,s){if(e.children){c=s.children;for(var r=0;r<c.length;r+=1){const n=I(s,c,r);h[r]?h[r].p(e,n):(h[r]=V(t,n),h[r].c()),h[r].i(a,null)}for(d();r<h.length;r+=1)v(r,1)}},i(t,e){l||this.m(t,e)},o(t){if(!l)return;h=h.filter(Boolean);const e=f(t,h.length);for(let t=0;t<h.length;t+=1)v(t,0,e);l=!1},d(t){t&&o(a),u(h,t)}}}(this,this._state),e.target){var l=n(e.target);e.hydrate?this._fragment.l(l):this._fragment.c(),l.forEach(o),this._mount(e.target,e.anchor),v(this)}this._intro=!0}function A(e){var l,c,m,d,f;if(a(this,e),this._state=t({},e.data),this._intro=!!e.intro,this._slotted=e.slots||{},this._fragment=(l=this,this._state,f=l._slotted.default,{c(){c=s("div"),m=s("div"),this.h()},l(t){c=r(t,"DIV",{class:!0},!1);var e=n(c);m=r(e,"DIV",{class:!0},!1),n(m).forEach(o),e.forEach(o),this.h()},h(){m.className="marked svelte-1vo2gi6",c.className="marked-container svelte-1vo2gi6"},m(t,e){i(t,c,e),h(c,m),f&&h(m,f),d=!0},p:g,i(t,e){d||this.m(t,e)},o:p,d(t){t&&o(c),f&&_(m,f)}}),e.target){var u=n(e.target);e.hydrate?this._fragment.l(u):this._fragment.c(),u.forEach(o),this._mount(e.target,e.anchor)}this._intro=!0}function k(t,e){var a,d;return{c(){a=s("h2"),d=l(e.description),this.h()},l(t){a=r(t,"H2",{class:!0},!1);var s=n(a);d=c(s,e.description),s.forEach(o),this.h()},h(){a.className="subtitle svelte-1twy1zm"},m(t,e){i(t,a,e),h(a,d)},p(t,e){t.description&&m(d,e.description)},d(t){t&&o(a)}}}function S(t,e){var a,d,f,u,v,g,p,_,N=e.releases.nodes[0].tagName;return{c(){a=s("div"),d=s("div"),f=s("div"),u=s("span"),v=l("Current release"),g=l("\n                "),p=s("span"),_=l(N),this.h()},l(t){a=r(t,"DIV",{class:!0},!1);var e=n(a);d=r(e,"DIV",{class:!0},!1);var s=n(d);f=r(s,"DIV",{class:!0},!1);var i=n(f);u=r(i,"SPAN",{class:!0},!1);var l=n(u);v=c(l,"Current release"),l.forEach(o),g=c(i,"\n                "),p=r(i,"SPAN",{class:!0},!1);var h=n(p);_=c(h,N),h.forEach(o),i.forEach(o),s.forEach(o),e.forEach(o),this.h()},h(){u.className="tag is-dark svelte-1twy1zm",p.className="tag is-info svelte-1twy1zm",f.className="tags has-addons svelte-1twy1zm",d.className="tags svelte-1twy1zm",a.className="control svelte-1twy1zm"},m(t,e){i(t,a,e),h(a,d),h(d,f),h(f,u),h(u,v),h(f,g),h(f,p),h(p,_)},p(t,e){t.releases&&N!==(N=e.releases.nodes[0].tagName)&&m(_,N)},d(t){t&&o(a)}}}function j(t,e){var a,m;return{c(){a=s("i"),m=l("No readme")},l(t){a=r(t,"I",{},!1);var e=n(a);m=c(e,"No readme"),e.forEach(o)},m(t,e){i(t,a,e),h(a,m)},p:g,d(t){t&&o(a)}}}function O(t,e){var a,r,n=e.readme.content;return{c(){a=s("noscript"),r=s("noscript")},l(t){a=s("noscript"),r=s("noscript")},m(t,e){i(t,a,e),a.insertAdjacentHTML("afterend",n),i(t,r,e)},p(t,e){t.readme&&n!==(n=e.readme.content)&&(E(a,r),a.insertAdjacentHTML("afterend",n))},d(t){t&&(E(a,r),o(a),o(r))}}}function C(e){if(a(this,e),this._state=t({},e.data),this._recompute({params:1,readme:1},this._state),this._intro=!!e.intro,this._fragment=function(e,a){var d,u,v,g,p,_,E,I,b,V,C,H,$,x,L,P,T,W,B,G,M,q,R,U,F,J,K,Q,X,Y,Z=a.stargazers.totalCount,tt=a.description&&k(0,a),et=a.releases.nodes.length&&S(0,a),at=new z({root:e.root,store:e.store,data:{fixed:!0}});function st(t){return t.readme?O:j}for(var rt=st(a),nt=rt(e,a),ot=new A({root:e.root,store:e.store,slots:{default:y()}}),it=[a.subNav],lt={},ct=0;ct<it.length;ct+=1)lt=t(lt,it[ct]);var ht=new D({root:e.root,store:e.store,data:lt});return{c(){d=s("section"),u=s("div"),v=s("div"),g=s("h1"),p=l(a.nameWithOwner),_=l("\n\n      "),tt&&tt.c(),E=l("\n\n      "),I=s("div"),b=s("div"),V=s("div"),C=s("div"),H=s("span"),$=l("Stars"),x=l("\n              "),L=s("span"),P=l(Z),T=l("\n\n        "),et&&et.c(),W=l("\n\n      "),B=s("a"),G=l("View on GitHub"),M=l("\n\n"),at._fragment.c(),q=l("\n\n"),R=s("section"),U=s("div"),F=s("div"),J=s("div"),nt.c(),K=N(),ot._fragment.c(),Q=l("\n      "),X=s("div"),ht._fragment.c(),this.h()},l(t){d=r(t,"SECTION",{class:!0},!1);var e=n(d);u=r(e,"DIV",{class:!0},!1);var s=n(u);v=r(s,"DIV",{class:!0},!1);var i=n(v);g=r(i,"H1",{class:!0},!1);var l=n(g);p=c(l,a.nameWithOwner),l.forEach(o),_=c(i,"\n\n      "),tt&&tt.l(i),E=c(i,"\n\n      "),I=r(i,"DIV",{class:!0},!1);var h=n(I);b=r(h,"DIV",{class:!0},!1);var m=n(b);V=r(m,"DIV",{class:!0},!1);var f=n(V);C=r(f,"DIV",{class:!0},!1);var w=n(C);H=r(w,"SPAN",{class:!0},!1);var y=n(H);$=c(y,"Stars"),y.forEach(o),x=c(w,"\n              "),L=r(w,"SPAN",{class:!0},!1);var z=n(L);P=c(z,Z),z.forEach(o),w.forEach(o),f.forEach(o),m.forEach(o),T=c(h,"\n\n        "),et&&et.l(h),h.forEach(o),W=c(i,"\n\n      "),B=r(i,"A",{href:!0,class:!0},!1);var D=n(B);G=c(D,"View on GitHub"),D.forEach(o),i.forEach(o),s.forEach(o),e.forEach(o),M=c(t,"\n\n"),at._fragment.l(t),q=c(t,"\n\n"),R=r(t,"SECTION",{class:!0},!1);var A=n(R);U=r(A,"DIV",{class:!0},!1);var k=n(U);F=r(k,"DIV",{class:!0},!1);var S=n(F);J=r(S,"DIV",{class:!0},!1);var j=n(J);nt.l(t),K=N(),ot._fragment.l(j),j.forEach(o),Q=c(S,"\n      "),X=r(S,"DIV",{class:!0},!1);var O=n(X);ht._fragment.l(O),O.forEach(o),S.forEach(o),k.forEach(o),A.forEach(o),this.h()},h(){g.className="title svelte-1twy1zm",H.className="tag is-dark svelte-1twy1zm",L.className="tag is-warning svelte-1twy1zm",C.className="tags has-addons svelte-1twy1zm",V.className="tags svelte-1twy1zm",b.className="control svelte-1twy1zm",I.className="field is-grouped is-grouped-multiline svelte-1twy1zm",B.href=a.url,B.className="button is-dark is-pulled-right svelte-1twy1zm",v.className="container svelte-1twy1zm",u.className="hero-body svelte-1twy1zm",d.className="hero is-medium is-light svelte-1twy1zm",J.className="column svelte-1twy1zm",X.className="column is-2 toc svelte-1twy1zm",F.className="columns under-tabbar svelte-1twy1zm",U.className="container svelte-1twy1zm",R.className="section has-background-white svelte-1twy1zm"},m(t,e){i(t,d,e),h(d,u),h(u,v),h(v,g),h(g,p),h(v,_),tt&&tt.m(v,null),h(v,E),h(v,I),h(I,b),h(b,V),h(V,C),h(C,H),h(H,$),h(C,x),h(C,L),h(L,P),h(I,T),et&&et.m(I,null),h(v,W),h(v,B),h(B,G),i(t,M,e),at._mount(t,e),i(t,q,e),i(t,R,e),h(R,U),h(U,F),h(F,J),nt.m(ot._slotted.default,null),h(ot._slotted.default,K),ot._mount(J,null),h(F,Q),h(F,X),ht._mount(X,null),Y=!0},p(t,a){Y&&!t.nameWithOwner||m(p,a.nameWithOwner),a.description?tt?tt.p(t,a):((tt=k(0,a)).c(),tt.m(v,E)):tt&&(tt.d(1),tt=null),Y&&!t.stargazers||Z===(Z=a.stargazers.totalCount)||m(P,Z),a.releases.nodes.length?et?et.p(t,a):((et=S(0,a)).c(),et.m(I,null)):et&&(et.d(1),et=null),Y&&!t.url||(B.href=a.url),rt===(rt=st(a))&&nt?nt.p(t,a):(nt.d(1),(nt=rt(e,a)).c(),nt.m(K.parentNode,K));var s=t.subNav?w(it,[a.subNav]):{};ht._set(s)},i(t,e){Y||this.m(t,e)},o(t){Y&&(t=f(t,3),at&&at._fragment.o(t),ot&&ot._fragment.o(t),ht&&ht._fragment.o(t),Y=!1)},d(t){t&&o(d),tt&&tt.d(),et&&et.d(),t&&o(M),at.destroy(t),t&&(o(q),o(R)),nt.d(),ot.destroy(),ht.destroy()}}}(this,this._state),e.target){var d=n(e.target);e.hydrate?this._fragment.l(d):this._fragment.c(),d.forEach(o),this._mount(e.target,e.anchor),v(this)}this._intro=!0}t(D.prototype,e),t(A.prototype,e),t(C.prototype,e),C.prototype._recompute=function(t,e){(t.params||t.readme)&&this._differs(e.subNav,e.subNav=function({params:t,readme:e}){return{title:"Readme",children:e?function e(a){return a.map(a=>({title:a.title,href:`open-source/${t.owner}/${t.repo}#${a.slug}`,children:a.children?e(a.children):null}))}(e.sections):[]}}(e))&&(t.subNav=!0)},C.preload=async function({params:t}){return this.fetch(`open-source/${t.owner}/${t.repo}/info.json`).then(t=>t.json())};export default C;
//# sourceMappingURL=chunk.9a7efd95.js.map
