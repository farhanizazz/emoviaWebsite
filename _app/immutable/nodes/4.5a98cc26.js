import{S as R,i as j,s as H,k as m,q as I,a as E,l as p,m as v,r as S,h as o,c as w,n as x,b as y,M as c,H as V,a8 as q}from"../chunks/index.8a859f89.js";function B(g,e,l){const r=g.slice();return r[1]=e[l],r}function L(g){let e,l,r,d,h,f,_=g[1].textAtas+"",i,u;return{c(){e=m("div"),l=m("div"),r=E(),d=m("div"),h=E(),f=m("h1"),i=I(_),u=E(),this.h()},l(s){e=p(s,"DIV",{class:!0});var t=v(e);l=p(t,"DIV",{class:!0}),v(l).forEach(o),r=w(t),d=p(t,"DIV",{class:!0}),v(d).forEach(o),h=w(t),f=p(t,"H1",{class:!0});var n=v(f);i=S(n,_),n.forEach(o),u=w(t),t.forEach(o),this.h()},h(){x(l,"class","absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-bgMini group-hover:scale-150 bg-no-repeat bg-cover"),x(d,"class","absolute w-full h-full bg-[#fff]/50"),x(f,"class","absolute text-4xl font-black transition-all duration-500 ease-in-out transform text-gray-50 opacity-60 group-hover:scale-125"),x(e,"class","relative flex items-center justify-center overflow-hidden shadow-xl aspect-square group")},m(s,t){y(s,e,t),c(e,l),c(e,r),c(e,d),c(e,h),c(e,f),c(f,i),c(e,u)},p:V,d(s){s&&o(e)}}}function C(g){let e,l,r,d,h,f,_,i,u=g[0],s=[];for(let t=0;t<u.length;t+=1)s[t]=L(B(g,u,t));return{c(){e=m("header"),l=m("div"),r=m("h1"),d=I("OUR "),h=m("span"),f=I("SERVICES."),_=E(),i=m("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=p(t,"HEADER",{class:!0});var n=v(e);l=p(n,"DIV",{class:!0});var a=v(l);r=p(a,"H1",{class:!0});var b=v(r);d=S(b,"OUR "),h=p(b,"SPAN",{class:!0});var D=v(h);f=S(D,"SERVICES."),D.forEach(o),b.forEach(o),a.forEach(o),n.forEach(o),_=w(t),i=p(t,"DIV",{class:!0});var k=v(i);for(let A=0;A<s.length;A+=1)s[A].l(k);k.forEach(o),this.h()},h(){x(h,"class","text-secondary"),x(r,"class","text-6xl font-bold font-content text-main"),x(l,"class","w-full h-full bg-[#fff]/90 backdrop-brightness-100 flex items-center justify-center"),x(e,"class","relative flex items-center justify-center h-96 bg-auto bg-no-repeat overflow-hidden bg-bgMini"),x(i,"class","bg-main grid items-center justify-center py-16 px-10 sm:grid-cols-1 md:grid-cols-3 gap-5")},m(t,n){y(t,e,n),c(e,l),c(l,r),c(r,d),c(r,h),c(h,f),y(t,_,n),y(t,i,n);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(i,null)},p(t,[n]){if(n&1){u=t[0];let a;for(a=0;a<u.length;a+=1){const b=B(t,u,a);s[a]?s[a].p(b,n):(s[a]=L(b),s[a].c(),s[a].m(i,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=u.length}},i:V,o:V,d(t){t&&o(e),t&&o(_),t&&o(i),q(s,t)}}}function M(g){return[[{textAtas:"Lorem ipsum",textBawah:"dolor sit amet"},{textAtas:"Lorem ipsum",textBawah:"dolor sit amet"},{textAtas:"Lorem ipsum",textBawah:"dolor sit amet"},{textAtas:"Lorem ipsum",textBawah:"dolor sit amet"},{textAtas:"Lorem ipsum",textBawah:"dolor sit amet"}]]}class P extends R{constructor(e){super(),j(this,e,M,C,H,{})}}export{P as component};