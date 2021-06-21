import{a as e,b as t,c as a,d as r,e as s,f as o,g as n,i as c,h as i,m as l,n as f,x as h,u as m,q as u,r as g,y as p,s as v}from"./chunk.59e5df27.js";import{a as d}from"./chunk.78602a54.js";import{a as _}from"./chunk.a874a800.js";function N(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function E(e,t){return e(t={exports:{}},t.exports),t.exports}var x=E(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.nextInterval=t.diffSec=t.formatDiff=t.toDate=t.toInt=void 0;var a=[60,60,24,7,365/7/12,12],r=function(e){return parseInt(e)};t.toInt=r;var s=function(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(r(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e))};t.toDate=s;t.formatDiff=function(e,t){for(var s=0,o=e<0?1:0,n=e=Math.abs(e);e>=a[s]&&s<a.length;s++)e/=a[s];return(e=r(e))>(0==(s*=2)?9:1)&&(s+=1),t(e,s,n)[o].replace("%s",e)};t.diffSec=function(e,t){return((t=t?s(t):new Date)-s(e))/1e3};t.nextInterval=function(e){for(var t=1,r=0,s=Math.abs(e);e>=a[r]&&r<a.length;r++)e/=a[r],t*=a[r];return s=(s%=t)?t-s:t,Math.ceil(s)}});N(x);x.nextInterval,x.diffSec,x.formatDiff,x.toDate,x.toInt;var I=E(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getLocale=t.register=void 0;var a="second_minute_hour_day_week_month_year".split("_"),r="秒_分钟_小时_天_周_个月_年".split("_"),s=function(e,t){if(0===t)return["just now","right now"];var r=a[parseInt(t/2)];return e>1&&(r+="s"),["".concat(e," ").concat(r," ago"),"in ".concat(e," ").concat(r)]},o={en_US:s,zh_CN:function(e,t){if(0===t)return["刚刚","片刻后"];var a=r[parseInt(t/2)];return["".concat(e," ").concat(a,"前"),"".concat(e," ").concat(a,"后")]}};t.register=function(e,t){o[e]=t};t.getLocale=function(e){return o[e]||s}});N(I);I.getLocale,I.register;var w=E(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.format=void 0;t.format=function(e,t,a){var r=(0,x.diffSec)(e,a);return(0,x.formatDiff)(r,(0,I.getLocale)(t))}});N(w);var y=w.format;function D(t){var u,g,p,v,d;if(a(this,t),this.refs={},this._state=e({},t.data),this._recompute({value:1},this._state),this._intro=!!t.intro,this._fragment=(u=this,g=this._state,{c(){p=r("span"),v=s(g.formatted)},l(e){p=o(e,"SPAN",{},!1);var t=n(p);v=c(t,g.formatted),t.forEach(i)},m(e,t){l(e,p,t),f(p,v),u.refs.label=p,d=!0},p(e,t){e.formatted&&h(v,t.formatted)},i(e,t){d||this.m(e,t)},o:m,d(e){e&&i(p),u.refs.label===p&&(u.refs.label=null)}}),t.target){var _=n(t.target);t.hydrate?this._fragment.l(_):this._fragment.c(),_.forEach(i),this._mount(t.target,t.anchor)}this._intro=!0}function b(e,t,a){const r=Object.create(e);return r.repo=t[a],r}function S(e,t){var a,m,u,g,p=t.repo.primaryLanguage.name;return{c(){a=r("div"),m=r("div"),u=r("span"),g=s(p),this.h()},l(e){a=o(e,"DIV",{class:!0},!1);var t=n(a);m=o(t,"DIV",{class:!0},!1);var r=n(m);u=o(r,"SPAN",{class:!0},!1);var s=n(u);g=c(s,p),s.forEach(i),r.forEach(i),t.forEach(i),this.h()},h(){u.className="tag svelte-1oxmg7g",m.className="tags has-addons svelte-1oxmg7g",a.className="control"},m(e,t){l(e,a,t),f(a,m),f(m,u),f(u,g)},p(e,t){e.repositories&&p!==(p=t.repo.primaryLanguage.name)&&h(g,p)},d(e){e&&i(a)}}}function V(e,t){var a,m,u,g,p,v,d,_,N,E,x,I,w,y,b,V,O,j,P,A,L,C,M,H,$,k,T,W,z,G=t.repo.nameWithOwner,U=t.repo.description||"",q=t.repo.stargazers.totalCount,B={value:t.repo.pushedAt},Z=new D({root:e.root,store:e.store,data:B}),F=t.repo.primaryLanguage&&S(0,t);return{c(){a=r("div"),m=r("a"),u=r("h3"),g=s(G),p=s("\n\n            "),v=r("p"),d=s(U),_=s("\n\n            "),N=r("div"),E=s("\n\n            "),x=r("div"),I=r("div"),w=r("div"),y=r("span"),b=s("Last pushed"),V=s("\n                  "),O=r("span"),Z._fragment.c(),j=s("\n\n              "),P=r("div"),A=r("div"),L=r("span"),C=s("Stars"),M=s("\n                  "),H=r("span"),$=s(q),k=s("\n\n              "),F&&F.c(),W=s("\n        "),this.h()},l(e){a=o(e,"DIV",{class:!0},!1);var t=n(a);m=o(t,"A",{class:!0,href:!0,rel:!0},!1);var r=n(m);u=o(r,"H3",{class:!0},!1);var s=n(u);g=c(s,G),s.forEach(i),p=c(r,"\n\n            "),v=o(r,"P",{class:!0},!1);var l=n(v);d=c(l,U),l.forEach(i),_=c(r,"\n\n            "),N=o(r,"DIV",{class:!0},!1),n(N).forEach(i),E=c(r,"\n\n            "),x=o(r,"DIV",{class:!0},!1);var f=n(x);I=o(f,"DIV",{class:!0},!1);var h=n(I);w=o(h,"DIV",{class:!0},!1);var D=n(w);y=o(D,"SPAN",{class:!0},!1);var S=n(y);b=c(S,"Last pushed"),S.forEach(i),V=c(D,"\n                  "),O=o(D,"SPAN",{class:!0},!1);var T=n(O);Z._fragment.l(T),T.forEach(i),D.forEach(i),h.forEach(i),j=c(f,"\n\n              "),P=o(f,"DIV",{class:!0},!1);var z=n(P);A=o(z,"DIV",{class:!0},!1);var B=n(A);L=o(B,"SPAN",{class:!0},!1);var J=n(L);C=c(J,"Stars"),J.forEach(i),M=c(B,"\n                  "),H=o(B,"SPAN",{class:!0},!1);var K=n(H);$=c(K,q),K.forEach(i),B.forEach(i),z.forEach(i),k=c(f,"\n\n              "),F&&F.l(f),f.forEach(i),r.forEach(i),W=c(t,"\n        "),t.forEach(i),this.h()},h(){u.className="title is-4 svelte-1oxmg7g",v.className="svelte-1oxmg7g",N.className="space svelte-1oxmg7g",y.className="tag svelte-1oxmg7g",O.className="tag is-info svelte-1oxmg7g",w.className="tags has-addons svelte-1oxmg7g",I.className="control",L.className="tag svelte-1oxmg7g",H.className="tag is-warning svelte-1oxmg7g",A.className="tags has-addons svelte-1oxmg7g",P.className="control",x.className="field is-grouped is-grouped-multiline",m.className="box svelte-1oxmg7g",m.href=T="open-source/"+t.repo.nameWithOwner,m.rel="prefetch",a.className="repo svelte-1oxmg7g"},m(e,t){l(e,a,t),f(a,m),f(m,u),f(u,g),f(m,p),f(m,v),f(v,d),f(m,_),f(m,N),f(m,E),f(m,x),f(x,I),f(I,w),f(w,y),f(y,b),f(w,V),f(w,O),Z._mount(O,null),f(x,j),f(x,P),f(P,A),f(A,L),f(L,C),f(A,M),f(A,H),f(H,$),f(x,k),F&&F.m(x,null),f(a,W),z=!0},p(e,t){z&&!e.repositories||G===(G=t.repo.nameWithOwner)||h(g,G),z&&!e.repositories||U===(U=t.repo.description||"")||h(d,U);var a={};e.repositories&&(a.value=t.repo.pushedAt),Z._set(a),z&&!e.repositories||q===(q=t.repo.stargazers.totalCount)||h($,q),t.repo.primaryLanguage?F?F.p(e,t):((F=S(0,t)).c(),F.m(x,null)):F&&(F.d(1),F=null),z&&!e.repositories||T===(T="open-source/"+t.repo.nameWithOwner)||(m.href=T)},i(e,t){z||this.m(e,t)},o(e){z&&(Z&&Z._fragment.o(e),z=!1)},d(e){e&&i(a),Z.destroy(),F&&F.d()}}}function O(t){if(a(this,t),this._state=e({},t.data),this._intro=!!t.intro,this._fragment=function(e,t){for(var a,m,v,N,E,x,I,w,y,D,S,O,j,P,A,L,C,M,H,$,k,T=t.repositories.totalCount,W=new d({root:e.root,store:e.store,data:{title:"Open Source",description:"My open source projects"}}),z=new _({root:e.root,store:e.store}),G=t.repositories.nodes,U=[],q=0;q<G.length;q+=1)U[q]=V(e,b(t,G,q));function B(e,t,a){U[e]&&U[e].o(()=>{t&&(U[e].d(t),U[e]=null),a&&a()})}return{c(){W._fragment.c(),a=s("\n\n"),m=r("section"),v=r("div"),N=r("div"),E=r("h1"),x=s("Open source"),I=s("\n      "),w=r("h2"),y=s("I use a lot of open source software - in return I open source most of my own software."),D=s("\n\n      "),S=r("div"),O=r("a"),j=s("View all "),P=s(T),A=s(" repositories on GitHub"),L=s("\n\n"),z._fragment.c(),C=s("\n\n"),M=r("section"),H=r("div"),$=r("div");for(var e=0;e<U.length;e+=1)U[e].c();this.h()},l(e){W._fragment.l(e),a=c(e,"\n\n"),m=o(e,"SECTION",{class:!0},!1);var t=n(m);v=o(t,"DIV",{class:!0},!1);var r=n(v);N=o(r,"DIV",{class:!0},!1);var s=n(N);E=o(s,"H1",{class:!0},!1);var l=n(E);x=c(l,"Open source"),l.forEach(i),I=c(s,"\n      "),w=o(s,"H2",{class:!0},!1);var f=n(w);y=c(f,"I use a lot of open source software - in return I open source most of my own software."),f.forEach(i),D=c(s,"\n\n      "),S=o(s,"DIV",{},!1);var h=n(S);O=o(h,"A",{href:!0,class:!0},!1);var u=n(O);j=c(u,"View all "),P=c(u,T),A=c(u," repositories on GitHub"),u.forEach(i),h.forEach(i),s.forEach(i),r.forEach(i),t.forEach(i),L=c(e,"\n\n"),z._fragment.l(e),C=c(e,"\n\n"),M=o(e,"SECTION",{class:!0},!1);var g=n(M);H=o(g,"DIV",{class:!0},!1);var p=n(H);$=o(p,"DIV",{class:!0},!1);for(var d=n($),_=0;_<U.length;_+=1)U[_].l(d);d.forEach(i),p.forEach(i),g.forEach(i),this.h()},h(){E.className="title svelte-1oxmg7g",w.className="subtitle svelte-1oxmg7g",O.href="https://github.com/ls-age",O.className="button is-info svelte-1oxmg7g",N.className="container svelte-1oxmg7g",v.className="hero-body svelte-1oxmg7g",m.className="hero is-white is-medium svelte-1oxmg7g",$.className="repo-container svelte-1oxmg7g",H.className="container svelte-1oxmg7g",M.className="section svelte-1oxmg7g"},m(e,t){W._mount(e,t),l(e,a,t),l(e,m,t),f(m,v),f(v,N),f(N,E),f(E,x),f(N,I),f(N,w),f(w,y),f(N,D),f(N,S),f(S,O),f(O,j),f(O,P),f(O,A),l(e,L,t),z._mount(e,t),l(e,C,t),l(e,M,t),f(M,H),f(H,$);for(var r=0;r<U.length;r+=1)U[r].i($,null);k=!0},p(t,a){if(k&&!t.repositories||T===(T=a.repositories.totalCount)||h(P,T),t.repositories){G=a.repositories.nodes;for(var r=0;r<G.length;r+=1){const s=b(a,G,r);U[r]?U[r].p(t,s):(U[r]=V(e,s),U[r].c()),U[r].i($,null)}for(u();r<U.length;r+=1)B(r,1)}},i(e,t){k||this.m(e,t)},o(e){if(!k)return;e=g(e,3),W&&W._fragment.o(e),z&&z._fragment.o(e),U=U.filter(Boolean);const t=g(e,U.length);for(let e=0;e<U.length;e+=1)B(e,0,t);k=!1},d(e){W.destroy(e),e&&(i(a),i(m),i(L)),z.destroy(e),e&&(i(C),i(M)),p(U,e)}}}(this,this._state),t.target){var m=n(t.target);t.hydrate?this._fragment.l(m):this._fragment.c(),m.forEach(i),this._mount(t.target,t.anchor),v(this)}this._intro=!0}e(D.prototype,t),D.prototype._recompute=function(e,t){e.value&&this._differs(t.formatted,t.formatted=function({value:e}){return y(e)}(t))&&(e.formatted=!0)},e(O.prototype,t),O.preload=async function(){const e=await this.fetch("/open-source/repos.json");return await e.json()};export default O;
//# sourceMappingURL=chunk.25c45aa0.js.map