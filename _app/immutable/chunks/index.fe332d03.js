function b(){}const _t=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function U(){return Object.create(null)}function S(t){t.forEach(tt)}function B(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Gt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Jt(t,e,n,i){if(t){const r=et(t,e,n,i);return t[0](r)}}function et(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let a=0;a<s;a+=1)c[a]=e.dirty[a]|r[a];return c}return e.dirty|r}return e.dirty}function Qt(t,e,n,i,r,c){if(r){const s=et(e,n,i,c);t.p(s,r)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Vt(t){return t&&B(t.destroy)?t.destroy:b}function Xt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const nt=typeof window<"u";let yt=nt?()=>window.performance.now():()=>Date.now(),J=nt?t=>requestAnimationFrame(t):b;const N=new Set;function it(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&J(it)}function gt(t){let e;return N.size===0&&J(it),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let F=!1;function $t(){F=!0}function xt(){F=!1}function wt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:wt(1,r,d=>e[n[d]].claim_order,l))-1;i[o]=n[f]+1;const u=f+1;n[u]=o,r=Math.max(u,r)}const c=[],s=[];let a=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);a>=o;a--)s.push(e[a]);a--}for(;a>=0;a--)s.push(e[a]);c.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<c.length&&s[o].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(s[o],f)}}function vt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=ct("style");return kt(rt(t),e),e.sheet}function kt(t,e){return vt(t.head||t,e),e.sheet}function Nt(t,e){if(F){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){F&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode&&t.parentNode.removeChild(t)}function ct(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function Zt(){return K(" ")}function te(){return K("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,r=!1){St(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const a=t[s];if(e(a)){const o=n(a);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),a}}for(let s=t.claim_info.last_index-1;s>=0;s--){const a=t[s];if(e(a)){const o=n(a);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,a}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Ct(t,e,n,i){return ot(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const a=r.attributes[s];n[a.name]||c.push(a.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ie(t,e,n){return Ct(t,e,n,ct)}function Dt(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function re(t){return Dt(t," ")}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function ce(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function oe(t,e,n){t.classList[n?"add":"remove"](e)}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function le(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ae(t,e){return new t(e)}const q=new Map;let L=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:Et(e),rules:{}};return q.set(t,n),n}function Ot(t,e,n,i,r,c,s,a=0){const o=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=o){const g=e+(n-e)*c(p);l+=p*100+`%{${s(g,1-g)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,u=`__svelte_${Mt(f)}_${a}`,d=rt(t),{stylesheet:h,rules:m}=q.get(d)||jt(d,t);m[u]||(m[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${u} ${i}ms linear ${r}ms 1 both`,L+=1,u}function V(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),L-=r,L||Pt())}function Pt(){J(()=>{L||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&st(e)}),q.clear())})}let O;function j(t){O=t}function H(){if(!O)throw new Error("Function called outside component initialization");return O}function ue(t){H().$$.on_mount.push(t)}function fe(t){H().$$.after_update.push(t)}function de(t){H().$$.on_destroy.push(t)}function _e(){const t=H();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=lt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}function he(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const k=[],X=[];let A=[];const Y=[],at=Promise.resolve();let I=!1;function ut(){I||(I=!0,at.then(ft))}function me(){return ut(),at}function z(t){A.push(t)}const G=new Set;let E=0;function ft(){if(E!==0)return;const t=O;do{try{for(;E<k.length;){const e=k[E];E++,j(e),Tt(e.$$)}}catch(e){throw k.length=0,E=0,e}for(j(null),k.length=0,E=0;X.length;)X.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];G.has(n)||(G.add(n),n())}A.length=0}while(k.length);for(;Y.length;)Y.pop()();I=!1,G.clear(),j(t)}function Tt(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function Rt(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let M;function qt(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function Z(t,e,n){t.dispatchEvent(lt(`${e?"intro":"outro"}${n}`))}const R=new Set;let w;function pe(){w={r:0,c:[],p:w}}function ye(){w.r||S(w.c),w=w.p}function dt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),w.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const zt={duration:0};function ge(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,a,o=0;function l(){s&&V(t,s)}function f(){const{delay:d=0,duration:h=300,easing:m=_t,tick:y=b,css:p}=r||zt;p&&(s=Ot(t,0,1,h,d,m,p,o++)),y(0,1);const g=yt()+d,C=g+h;a&&a.abort(),c=!0,z(()=>Z(t,!0,"start")),a=gt(v=>{if(c){if(v>=C)return y(1,0),Z(t,!0,"end"),l(),c=!1;if(v>=g){const D=m((v-g)/h);y(D,1-D)}}return c})}let u=!1;return{start(){u||(u=!0,V(t),B(r)?(r=r(i),qt().then(f)):f())},invalidate(){u=!1},end(){c&&(l(),c=!1)}}}function $e(t,e){t.d(1),e.delete(t.key)}function xe(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function we(t,e,n,i,r,c,s,a,o,l,f,u){let d=t.length,h=c.length,m=d;const y={};for(;m--;)y[t[m].key]=m;const p=[],g=new Map,C=new Map,v=[];for(m=h;m--;){const _=u(r,c,m),$=n(_);let x=s.get($);x?i&&v.push(()=>x.p(_,e)):(x=l($,_),x.c()),g.set($,p[m]=x),$ in y&&C.set($,Math.abs(m-y[$]))}const D=new Set,Q=new Set;function W(_){dt(_,1),_.m(a,f),s.set(_.key,_),f=_.first,h--}for(;d&&h;){const _=p[h-1],$=t[d-1],x=_.key,P=$.key;_===$?(f=_.first,d--,h--):g.has(P)?!s.has(x)||D.has(x)?W(_):Q.has(P)?d--:C.get(x)>C.get(P)?(Q.add(x),W(_)):(D.add(P),d--):(o($,s),d--)}for(;d--;){const _=t[d];g.has(_.key)||o(_,s)}for(;h;)W(p[h-1]);return S(v),p}function be(t){t&&t.c()}function ve(t,e){t&&t.l(e)}function Bt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||z(()=>{const s=t.$$.on_mount.map(tt).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...s):S(s),t.$$.on_mount=[]}),c.forEach(z)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(Rt(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(k.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,i,r,c,s,a=[-1]){const o=O;j(t);const l=t.$$={fragment:null,ctx:[],props:c,update:b,not_equal:r,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:U(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,d,...h)=>{const m=h.length?h[0]:d;return l.ctx&&r(l.ctx[u],l.ctx[u]=m)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](m),f&&Ht(t,u)),d}):[],l.update(),f=!0,S(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){$t();const u=At(e.target);l.fragment&&l.fragment.l(u),u.forEach(st)}else l.fragment&&l.fragment.c();e.intro&&dt(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),xt(),ft()}j(o)}class ke{$destroy(){Ft(this,1),this.$destroy=b}$on(e,n){if(!B(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Bt as A,Ft as B,Gt as C,Nt as D,b as E,It as F,Jt as G,le as H,Qt as I,Ut as J,Kt as K,oe as L,ee as M,he as N,we as O,xe as P,_e as Q,Vt as R,ke as S,B as T,S as U,de as V,Xt as W,z as X,ge as Y,$e as Z,Zt as a,Yt as b,re as c,Lt as d,te as e,ye as f,dt as g,st as h,Ee as i,fe as j,ct as k,ie as l,At as m,ne as n,ue as o,ce as p,K as q,Dt as r,Wt as s,me as t,se as u,pe as v,X as w,ae as x,be as y,ve as z};