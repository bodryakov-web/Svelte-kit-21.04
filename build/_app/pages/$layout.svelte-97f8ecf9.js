import{D as s,S as a,i as e,s as t,e as r,k as c,E as l,t as v,c as i,a as o,d as h,n as f,g as n,b as d,F as p,f as u,G as g,C as E,H as b,I as $,j as k,m,o as A,J as w,v as I,r as L,w as x}from"../chunks/index-5ad3f4d4.js";const _={subscribe:a=>(()=>{const a=s("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}})().page.subscribe(a)};function B(s){let a,e,t,b,$,k,m,A,w,I,L,x,_,B,D,H,M,S,z,C,K,T,V,j,F,G,N,O,R,Z,J;return{c(){a=r("header"),e=r("div"),t=r("a"),b=r("img"),k=c(),m=r("nav"),A=l("svg"),w=l("path"),I=c(),L=r("ul"),x=r("li"),_=r("a"),B=v("Home"),D=c(),H=r("li"),M=r("a"),S=v("About"),z=c(),C=r("li"),K=r("a"),T=v("Todos"),V=c(),j=r("li"),F=r("a"),G=v("Вторая"),N=c(),O=l("svg"),R=l("path"),Z=c(),J=r("div"),this.h()},l(s){a=i(s,"HEADER",{class:!0});var r=o(a);e=i(r,"DIV",{class:!0});var c=o(e);t=i(c,"A",{href:!0,class:!0});var l=o(t);b=i(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(h),c.forEach(h),k=f(r),m=i(r,"NAV",{class:!0});var v=o(m);A=i(v,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var d=o(A);w=i(d,"path",{d:!0,class:!0},1),o(w).forEach(h),d.forEach(h),I=f(v),L=i(v,"UL",{class:!0});var p=o(L);x=i(p,"LI",{class:!0});var u=o(x);_=i(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var g=o(_);B=n(g,"Home"),g.forEach(h),u.forEach(h),D=f(p),H=i(p,"LI",{class:!0});var E=o(H);M=i(E,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var $=o(M);S=n($,"About"),$.forEach(h),E.forEach(h),z=f(p),C=i(p,"LI",{class:!0});var P=o(C);K=i(P,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var U=o(K);T=n(U,"Todos"),U.forEach(h),P.forEach(h),V=f(p),j=i(p,"LI",{class:!0});var q=o(j);F=i(q,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var y=o(F);G=n(y,"Вторая"),y.forEach(h),q.forEach(h),p.forEach(h),N=f(v),O=i(v,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var Q=o(O);R=i(Q,"path",{d:!0,class:!0},1),o(R).forEach(h),Q.forEach(h),v.forEach(h),Z=f(r),J=i(r,"DIV",{class:!0}),o(J).forEach(h),r.forEach(h),this.h()},h(){b.src!==($="/_app/assets/svelte-logo.87df40b8.svg")&&d(b,"src","/_app/assets/svelte-logo.87df40b8.svg"),d(b,"alt","SvelteKit"),d(b,"class","svelte-a57vis"),d(t,"href","https://kit.svelte.dev"),d(t,"class","svelte-a57vis"),d(e,"class","corner svelte-a57vis"),d(w,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),d(w,"class","svelte-a57vis"),d(A,"viewBox","0 0 2 3"),d(A,"aria-hidden","true"),d(A,"class","svelte-a57vis"),d(_,"sveltekit:prefetch",""),d(_,"href","/"),d(_,"class","svelte-a57vis"),d(x,"class","svelte-a57vis"),p(x,"active","/"===s[0].path),d(M,"sveltekit:prefetch",""),d(M,"href","/about"),d(M,"class","svelte-a57vis"),d(H,"class","svelte-a57vis"),p(H,"active","/about"===s[0].path),d(K,"sveltekit:prefetch",""),d(K,"href","/todos"),d(K,"class","svelte-a57vis"),d(C,"class","svelte-a57vis"),p(C,"active","/todos"===s[0].path),d(F,"sveltekit:prefetch",""),d(F,"href","/two"),d(F,"class","svelte-a57vis"),d(j,"class","svelte-a57vis"),p(j,"active","/two"===s[0].path),d(L,"class","svelte-a57vis"),d(R,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),d(R,"class","svelte-a57vis"),d(O,"viewBox","0 0 2 3"),d(O,"aria-hidden","true"),d(O,"class","svelte-a57vis"),d(m,"class","svelte-a57vis"),d(J,"class","corner svelte-a57vis"),d(a,"class","svelte-a57vis")},m(s,r){u(s,a,r),g(a,e),g(e,t),g(t,b),g(a,k),g(a,m),g(m,A),g(A,w),g(m,I),g(m,L),g(L,x),g(x,_),g(_,B),g(L,D),g(L,H),g(H,M),g(M,S),g(L,z),g(L,C),g(C,K),g(K,T),g(L,V),g(L,j),g(j,F),g(F,G),g(m,N),g(m,O),g(O,R),g(a,Z),g(a,J)},p(s,[a]){1&a&&p(x,"active","/"===s[0].path),1&a&&p(H,"active","/about"===s[0].path),1&a&&p(C,"active","/todos"===s[0].path),1&a&&p(j,"active","/two"===s[0].path)},i:E,o:E,d(s){s&&h(a)}}}function D(s,a,e){let t;return b(s,_,(s=>e(0,t=s))),[t]}class H extends a{constructor(s){super(),e(this,s,D,B,t,{})}}function M(s){let a,e,t,l,p,E,b,_,B,D,M;a=new H({});const S=s[1].default,z=$(S,s,s[0],null);return{c(){k(a.$$.fragment),e=c(),t=r("main"),z&&z.c(),l=c(),p=r("footer"),E=r("p"),b=v("visit "),_=r("a"),B=v("kit.svelte.dev"),D=v(" to learn SvelteKit"),this.h()},l(s){m(a.$$.fragment,s),e=f(s),t=i(s,"MAIN",{class:!0});var r=o(t);z&&z.l(r),r.forEach(h),l=f(s),p=i(s,"FOOTER",{class:!0});var c=o(p);E=i(c,"P",{});var v=o(E);b=n(v,"visit "),_=i(v,"A",{href:!0,class:!0});var d=o(_);B=n(d,"kit.svelte.dev"),d.forEach(h),D=n(v," to learn SvelteKit"),v.forEach(h),c.forEach(h),this.h()},h(){d(t,"class","svelte-1izrdc8"),d(_,"href","https://kit.svelte.dev"),d(_,"class","svelte-1izrdc8"),d(p,"class","svelte-1izrdc8")},m(s,r){A(a,s,r),u(s,e,r),u(s,t,r),z&&z.m(t,null),u(s,l,r),u(s,p,r),g(p,E),g(E,b),g(E,_),g(_,B),g(E,D),M=!0},p(s,[a]){z&&z.p&&1&a&&w(z,S,s,s[0],a,null,null)},i(s){M||(I(a.$$.fragment,s),I(z,s),M=!0)},o(s){L(a.$$.fragment,s),L(z,s),M=!1},d(s){x(a,s),s&&h(e),s&&h(t),z&&z.d(s),s&&h(l),s&&h(p)}}}function S(s,a,e){let{$$slots:t={},$$scope:r}=a;return s.$$set=s=>{"$$scope"in s&&e(0,r=s.$$scope)},[r,t]}export default class extends a{constructor(s){super(),e(this,s,S,M,t,{})}}
