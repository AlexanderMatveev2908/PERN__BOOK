import{R as I}from"./react-DOKUib4L.js";var fe=e=>e.type==="checkbox",te=e=>e instanceof Date,R=e=>e==null;const tt=e=>typeof e=="object";var D=e=>!R(e)&&!Array.isArray(e)&&tt(e)&&!te(e),Ft=e=>D(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,Vt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,At=(e,s)=>e.has(Vt(s)),xt=e=>{const s=e.constructor&&e.constructor.prototype;return D(s)&&s.hasOwnProperty("isPrototypeOf")},Se=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function L(e){let s;const r=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Se&&(e instanceof Blob||a))&&(r||D(e)))if(s=r?[]:{},!r&&!xt(e))s=e;else for(const u in e)e.hasOwnProperty(u)&&(s[u]=L(e[u]));else return e;return s}var be=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,h=(e,s,r)=>{if(!s||!D(e))return r;const a=be(s.split(/[,[\].]+?/)).reduce((u,n)=>R(u)?u:u[n],e);return S(a)||a===e?S(e[s])?r:e[s]:a},$=e=>typeof e=="boolean",Ee=e=>/^\w*$/.test(e),rt=e=>be(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,r)=>{let a=-1;const u=Ee(s)?[s]:rt(s),n=u.length,y=n-1;for(;++a<n;){const g=u[a];let U=r;if(a!==y){const W=e[g];U=D(W)||Array.isArray(W)?W:isNaN(+u[a+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;e[g]=U,e=e[g]}};const He={BLUR:"blur",FOCUS_OUT:"focusout"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Q={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};I.createContext(null);var wt=(e,s,r,a=!0)=>{const u={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(u,n,{get:()=>{const y=n;return s._proxyFormState[y]!==P.all&&(s._proxyFormState[y]=!a||P.all),e[y]}});return u},K=e=>typeof e=="string",Dt=(e,s,r,a,u)=>K(e)?(a&&s.watch.add(e),h(r,e,u)):Array.isArray(e)?e.map(n=>(a&&s.watch.add(n),h(r,n))):(a&&(s.watchAll=!0),r),mt=(e,s,r,a,u)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:u||!0}}:{},ue=e=>Array.isArray(e)?e:[e],$e=()=>{let e=[];return{get observers(){return e},next:u=>{for(const n of e)n.next&&n.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(n=>n!==u)}}),unsubscribe:()=>{e=[]}}},ke=e=>R(e)||!tt(e);function G(e,s){if(ke(e)||ke(s))return e===s;if(te(e)&&te(s))return e.getTime()===s.getTime();const r=Object.keys(e),a=Object.keys(s);if(r.length!==a.length)return!1;for(const u of r){const n=e[u];if(!a.includes(u))return!1;if(u!=="ref"){const y=s[u];if(te(n)&&te(y)||D(n)&&D(y)||Array.isArray(n)&&Array.isArray(y)?!G(n,y):n!==y)return!1}}return!0}var C=e=>D(e)&&!Object.keys(e).length,Te=e=>e.type==="file",q=e=>typeof e=="function",he=e=>{if(!Se)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},st=e=>e.type==="select-multiple",Oe=e=>e.type==="radio",kt=e=>Oe(e)||fe(e),me=e=>he(e)&&e.isConnected;function St(e,s){const r=s.slice(0,-1).length;let a=0;for(;a<r;)e=S(e)?a++:e[s[a++]];return e}function Et(e){for(const s in e)if(e.hasOwnProperty(s)&&!S(e[s]))return!1;return!0}function E(e,s){const r=Array.isArray(s)?s:Ee(s)?[s]:rt(s),a=r.length===1?e:St(e,r),u=r.length-1,n=r[u];return a&&delete a[n],u!==0&&(D(a)&&C(a)||Array.isArray(a)&&Et(a))&&E(e,r.slice(0,-1)),e}var it=e=>{for(const s in e)if(q(e[s]))return!0;return!1};function ge(e,s={}){const r=Array.isArray(e);if(D(e)||r)for(const a in e)Array.isArray(e[a])||D(e[a])&&!it(e[a])?(s[a]=Array.isArray(e[a])?[]:{},ge(e[a],s[a])):R(e[a])||(s[a]=!0);return s}function at(e,s,r){const a=Array.isArray(e);if(D(e)||a)for(const u in e)Array.isArray(e[u])||D(e[u])&&!it(e[u])?S(s)||ke(r[u])?r[u]=Array.isArray(e[u])?ge(e[u],[]):{...ge(e[u])}:at(e[u],R(s)?{}:s[u],r[u]):r[u]=!G(e[u],s[u]);return r}var le=(e,s)=>at(e,s,ge(s));const Ke={value:!1,isValid:!1},ze={value:!0,isValid:!0};var lt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?ze:{value:e[0].value,isValid:!0}:ze:Ke}return Ke},nt=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:a})=>S(e)?e:s?e===""?NaN:e&&+e:r&&K(e)?new Date(e):a?a(e):e;const Ye={isValid:!1,value:null};var ut=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Ye):Ye;function je(e){const s=e.ref;return Te(s)?s.files:Oe(s)?ut(e.refs).value:st(s)?[...s.selectedOptions].map(({value:r})=>r):fe(s)?lt(e.refs).value:nt(S(s.value)?e.ref.value:s.value,e)}var Tt=(e,s,r,a)=>{const u={};for(const n of e){const y=h(s,n);y&&A(u,n,y._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:a}},ve=e=>e instanceof RegExp,ne=e=>S(e)?e:ve(e)?e.source:D(e)?ve(e.value)?e.value.source:e.value:e,Je=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched});const Qe="AsyncFunction";var Ot=e=>!!e&&!!e.validate&&!!(q(e.validate)&&e.validate.constructor.name===Qe||D(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===Qe)),Lt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Xe=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const oe=(e,s,r,a)=>{for(const u of r||Object.keys(e)){const n=h(e,u);if(n){const{_f:y,...g}=n;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],u)&&!a)return!0;if(y.ref&&s(y.ref,y.name)&&!a)return!0;if(oe(g,s))break}else if(D(g)&&oe(g,s))break}}};function Ze(e,s,r){const a=h(e,r);if(a||Ee(r))return{error:a,name:r};const u=r.split(".");for(;u.length;){const n=u.join("."),y=h(s,n),g=h(e,n);if(y&&!Array.isArray(y)&&r!==n)return{name:r};if(g&&g.type)return{name:n,error:g};u.pop()}return{name:r}}var Ct=(e,s,r,a)=>{r(e);const{name:u,...n}=e;return C(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(y=>s[y]===(!a||P.all))},Rt=(e,s,r)=>!e||!s||e===s||ue(e).some(a=>a&&(r?a===s:a.startsWith(s)||s.startsWith(a))),Ut=(e,s,r,a,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(s||e):(r?a.isOnBlur:u.isOnBlur)?!e:(r?a.isOnChange:u.isOnChange)?e:!0,Mt=(e,s)=>!be(h(e,s)).length&&E(e,s),Nt=(e,s,r)=>{const a=ue(h(e,r));return A(a,"root",s[r]),A(e,r,a),e},ye=e=>K(e);function Ge(e,s,r="validate"){if(ye(e)||Array.isArray(e)&&e.every(ye)||$(e)&&!e)return{type:r,message:ye(e)?e:"",ref:s}}var re=e=>D(e)&&!ve(e)?e:{value:e,message:""},et=async(e,s,r,a,u,n)=>{const{ref:y,refs:g,required:U,maxLength:W,minLength:x,min:m,max:b,pattern:de,validate:X,name:M,valueAsNumber:_e,mount:z}=e._f,v=h(r,M);if(!z||s.has(M))return{};const Y=g?g[0]:y,j=V=>{u&&Y.reportValidity&&(Y.setCustomValidity($(V)?"":V||""),Y.reportValidity())},T={},se=Oe(y),ie=fe(y),Fe=se||ie,p=(_e||Te(y))&&S(y.value)&&S(v)||he(y)&&y.value===""||v===""||Array.isArray(v)&&!v.length,ee=mt.bind(null,M,a,T),J=(V,_,w,N=Q.maxLength,B=Q.minLength)=>{const H=V?_:w;T[M]={type:V?N:B,message:H,ref:y,...ee(V?N:B,H)}};if(n?!Array.isArray(v)||!v.length:U&&(!Fe&&(p||R(v))||$(v)&&!v||ie&&!lt(g).isValid||se&&!ut(g).isValid)){const{value:V,message:_}=ye(U)?{value:!!U,message:U}:re(U);if(V&&(T[M]={type:Q.required,message:_,ref:Y,...ee(Q.required,_)},!a))return j(_),T}if(!p&&(!R(m)||!R(b))){let V,_;const w=re(b),N=re(m);if(!R(v)&&!isNaN(v)){const B=y.valueAsNumber||v&&+v;R(w.value)||(V=B>w.value),R(N.value)||(_=B<N.value)}else{const B=y.valueAsDate||new Date(v),H=ce=>new Date(new Date().toDateString()+" "+ce),Z=y.type=="time",ae=y.type=="week";K(w.value)&&v&&(V=Z?H(v)>H(w.value):ae?v>w.value:B>new Date(w.value)),K(N.value)&&v&&(_=Z?H(v)<H(N.value):ae?v<N.value:B<new Date(N.value))}if((V||_)&&(J(!!V,w.message,N.message,Q.max,Q.min),!a))return j(T[M].message),T}if((W||x)&&!p&&(K(v)||n&&Array.isArray(v))){const V=re(W),_=re(x),w=!R(V.value)&&v.length>+V.value,N=!R(_.value)&&v.length<+_.value;if((w||N)&&(J(w,V.message,_.message),!a))return j(T[M].message),T}if(de&&!p&&K(v)){const{value:V,message:_}=re(de);if(ve(V)&&!v.match(V)&&(T[M]={type:Q.pattern,message:_,ref:y,...ee(Q.pattern,_)},!a))return j(_),T}if(X){if(q(X)){const V=await X(v,r),_=Ge(V,Y);if(_&&(T[M]={..._,...ee(Q.validate,_.message)},!a))return j(_.message),T}else if(D(X)){let V={};for(const _ in X){if(!C(V)&&!a)break;const w=Ge(await X[_](v,r),Y,_);w&&(V={...w,...ee(_,w.message)},j(w.message),a&&(T[M]=V))}if(!C(V)&&(T[M]={ref:Y,...V},!a))return T}}return j(!0),T};const Bt={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function It(e={}){let s={...Bt,...e},r={submitCount:0,isDirty:!1,isLoading:q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1};const a={};let u=D(s.defaultValues)||D(s.values)?L(s.values||s.defaultValues)||{}:{},n=s.shouldUnregister?{}:L(u),y={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},U,W=0;const x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let m={...x};const b={array:$e(),state:$e()},de=Je(s.mode),X=Je(s.reValidateMode),M=s.criteriaMode===P.all,_e=t=>i=>{clearTimeout(W),W=setTimeout(t,i)},z=async t=>{if(!s.disabled&&(x.isValid||m.isValid||t)){const i=s.resolver?C((await p()).errors):await J(a,!0);i!==r.isValid&&b.state.next({isValid:i})}},v=(t,i)=>{!s.disabled&&(x.isValidating||x.validatingFields||m.isValidating||m.validatingFields)&&((t||Array.from(g.mount)).forEach(l=>{l&&(i?A(r.validatingFields,l,i):E(r.validatingFields,l))}),b.state.next({validatingFields:r.validatingFields,isValidating:!C(r.validatingFields)}))},Y=(t,i=[],l,d,f=!0,o=!0)=>{if(d&&l&&!s.disabled){if(y.action=!0,o&&Array.isArray(h(a,t))){const c=l(h(a,t),d.argA,d.argB);f&&A(a,t,c)}if(o&&Array.isArray(h(r.errors,t))){const c=l(h(r.errors,t),d.argA,d.argB);f&&A(r.errors,t,c),Mt(r.errors,t)}if((x.touchedFields||m.touchedFields)&&o&&Array.isArray(h(r.touchedFields,t))){const c=l(h(r.touchedFields,t),d.argA,d.argB);f&&A(r.touchedFields,t,c)}(x.dirtyFields||m.dirtyFields)&&(r.dirtyFields=le(u,n)),b.state.next({name:t,isDirty:_(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else A(n,t,i)},j=(t,i)=>{A(r.errors,t,i),b.state.next({errors:r.errors})},T=t=>{r.errors=t,b.state.next({errors:r.errors,isValid:!1})},se=(t,i,l,d)=>{const f=h(a,t);if(f){const o=h(n,t,S(l)?h(u,t):l);S(o)||d&&d.defaultChecked||i?A(n,t,i?o:je(f._f)):B(t,o),y.mount&&z()}},ie=(t,i,l,d,f)=>{let o=!1,c=!1;const F={name:t};if(!s.disabled){if(!l||d){(x.isDirty||m.isDirty)&&(c=r.isDirty,r.isDirty=F.isDirty=_(),o=c!==F.isDirty);const k=G(h(u,t),i);c=!!h(r.dirtyFields,t),k?E(r.dirtyFields,t):A(r.dirtyFields,t,!0),F.dirtyFields=r.dirtyFields,o=o||(x.dirtyFields||m.dirtyFields)&&c!==!k}if(l){const k=h(r.touchedFields,t);k||(A(r.touchedFields,t,l),F.touchedFields=r.touchedFields,o=o||(x.touchedFields||m.touchedFields)&&k!==l)}o&&f&&b.state.next(F)}return o?F:{}},Fe=(t,i,l,d)=>{const f=h(r.errors,t),o=(x.isValid||m.isValid)&&$(i)&&r.isValid!==i;if(s.delayError&&l?(U=_e(()=>j(t,l)),U(s.delayError)):(clearTimeout(W),U=null,l?A(r.errors,t,l):E(r.errors,t)),(l?!G(f,l):f)||!C(d)||o){const c={...d,...o&&$(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...c},b.state.next(c)}},p=async t=>{v(t,!0);const i=await s.resolver(n,s.context,Tt(t||g.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return v(t),i},ee=async t=>{const{errors:i}=await p(t);if(t)for(const l of t){const d=h(i,l);d?A(r.errors,l,d):E(r.errors,l)}else r.errors=i;return i},J=async(t,i,l={valid:!0})=>{for(const d in t){const f=t[d];if(f){const{_f:o,...c}=f;if(o){const F=g.array.has(o.name),k=f._f&&Ot(f._f);k&&x.validatingFields&&v([d],!0);const O=await et(f,g.disabled,n,M,s.shouldUseNativeValidation&&!i,F);if(k&&x.validatingFields&&v([d]),O[o.name]&&(l.valid=!1,i))break;!i&&(h(O,o.name)?F?Nt(r.errors,O,o.name):A(r.errors,o.name,O[o.name]):E(r.errors,o.name))}!C(c)&&await J(c,i,l)}}return l.valid},V=()=>{for(const t of g.unMount){const i=h(a,t);i&&(i._f.refs?i._f.refs.every(l=>!me(l)):!me(i._f.ref))&&Ae(t)}g.unMount=new Set},_=(t,i)=>!s.disabled&&(t&&i&&A(n,t,i),!G(Le(),u)),w=(t,i,l)=>Dt(t,g,{...y.mount?n:S(i)?u:K(t)?{[t]:i}:i},l,i),N=t=>be(h(y.mount?n:u,t,s.shouldUnregister?h(u,t,[]):[])),B=(t,i,l={})=>{const d=h(a,t);let f=i;if(d){const o=d._f;o&&(!o.disabled&&A(n,t,nt(i,o)),f=he(o.ref)&&R(i)?"":i,st(o.ref)?[...o.ref.options].forEach(c=>c.selected=f.includes(c.value)):o.refs?fe(o.ref)?o.refs.length>1?o.refs.forEach(c=>(!c.defaultChecked||!c.disabled)&&(c.checked=Array.isArray(f)?!!f.find(F=>F===c.value):f===c.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(c=>c.checked=c.value===f):Te(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||b.state.next({name:t,values:L(n)})))}(l.shouldDirty||l.shouldTouch)&&ie(t,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&Ve(t)},H=(t,i,l)=>{for(const d in i){const f=i[d],o=`${t}.${d}`,c=h(a,o);(g.array.has(t)||D(f)||c&&!c._f)&&!te(f)?H(o,f,l):B(o,f,l)}},Z=(t,i,l={})=>{const d=h(a,t),f=g.array.has(t),o=L(i);A(n,t,o),f?(b.array.next({name:t,values:L(n)}),(x.isDirty||x.dirtyFields||m.isDirty||m.dirtyFields)&&l.shouldDirty&&b.state.next({name:t,dirtyFields:le(u,n),isDirty:_(t,o)})):d&&!d._f&&!R(o)?H(t,o,l):B(t,o,l),Xe(t,g)&&b.state.next({...r}),b.state.next({name:y.mount?t:void 0,values:L(n)})},ae=async t=>{y.mount=!0;const i=t.target;let l=i.name,d=!0;const f=h(a,l),o=c=>{d=Number.isNaN(c)||te(c)&&isNaN(c.getTime())||G(c,h(n,l,c))};if(f){let c,F;const k=i.type?je(f._f):Ft(t),O=t.type===He.BLUR||t.type===He.FOCUS_OUT,vt=!Lt(f._f)&&!s.resolver&&!h(r.errors,l)&&!f._f.deps||Ut(O,h(r.touchedFields,l),r.isSubmitted,X,de),we=Xe(l,g,O);A(n,l,k),O?(f._f.onBlur&&f._f.onBlur(t),U&&U(0)):f._f.onChange&&f._f.onChange(t);const De=ie(l,k,O),bt=!C(De)||we;if(!O&&b.state.next({name:l,type:t.type,values:L(n)}),vt)return(x.isValid||m.isValid)&&(s.mode==="onBlur"?O&&z():O||z()),bt&&b.state.next({name:l,...we?{}:De});if(!O&&we&&b.state.next({...r}),s.resolver){const{errors:We}=await p([l]);if(o(k),d){const _t=Ze(r.errors,a,l),pe=Ze(We,a,_t.name||l);c=pe.error,l=pe.name,F=C(We)}}else v([l],!0),c=(await et(f,g.disabled,n,M,s.shouldUseNativeValidation))[l],v([l]),o(k),d&&(c?F=!1:(x.isValid||m.isValid)&&(F=await J(a,!0)));d&&(f._f.deps&&Ve(f._f.deps),Fe(l,F,c,De))}},ce=(t,i)=>{if(h(r.errors,i)&&t.focus)return t.focus(),1},Ve=async(t,i={})=>{let l,d;const f=ue(t);if(s.resolver){const o=await ee(S(t)?t:f);l=C(o),d=t?!f.some(c=>h(o,c)):l}else t?(d=(await Promise.all(f.map(async o=>{const c=h(a,o);return await J(c&&c._f?{[o]:c}:c)}))).every(Boolean),!(!d&&!r.isValid)&&z()):d=l=await J(a);return b.state.next({...!K(t)||(x.isValid||m.isValid)&&l!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:l}:{},errors:r.errors}),i.shouldFocus&&!d&&oe(a,ce,t?f:g.mount),d},Le=t=>{const i={...y.mount?n:u};return S(t)?i:K(t)?h(i,t):t.map(l=>h(i,l))},Ce=(t,i)=>({invalid:!!h((i||r).errors,t),isDirty:!!h((i||r).dirtyFields,t),error:h((i||r).errors,t),isValidating:!!h(r.validatingFields,t),isTouched:!!h((i||r).touchedFields,t)}),ot=t=>{t&&ue(t).forEach(i=>E(r.errors,i)),b.state.next({errors:t?r.errors:{}})},Re=(t,i,l)=>{const d=(h(a,t,{_f:{}})._f||{}).ref,f=h(r.errors,t)||{},{ref:o,message:c,type:F,...k}=f;A(r.errors,t,{...k,...i,ref:d}),b.state.next({name:t,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&d&&d.focus&&d.focus()},ft=(t,i)=>q(t)?b.state.subscribe({next:l=>t(w(void 0,i),l)}):w(t,i,!0),Ue=t=>b.state.subscribe({next:i=>{Rt(t.name,i.name,t.exact)&&Ct(i,t.formState||x,gt,t.reRenderRoot)&&t.callback({values:{...n},...r,...i})}}).unsubscribe,dt=t=>(y.mount=!0,m={...m,...t.formState},Ue({...t,formState:m})),Ae=(t,i={})=>{for(const l of t?ue(t):g.mount)g.mount.delete(l),g.array.delete(l),i.keepValue||(E(a,l),E(n,l)),!i.keepError&&E(r.errors,l),!i.keepDirty&&E(r.dirtyFields,l),!i.keepTouched&&E(r.touchedFields,l),!i.keepIsValidating&&E(r.validatingFields,l),!s.shouldUnregister&&!i.keepDefaultValue&&E(u,l);b.state.next({values:L(n)}),b.state.next({...r,...i.keepDirty?{isDirty:_()}:{}}),!i.keepIsValid&&z()},Me=({disabled:t,name:i})=>{($(t)&&y.mount||t||g.disabled.has(i))&&(t?g.disabled.add(i):g.disabled.delete(i))},xe=(t,i={})=>{let l=h(a,t);const d=$(i.disabled)||$(s.disabled);return A(a,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...i}}),g.mount.add(t),l?Me({disabled:$(i.disabled)?i.disabled:s.disabled,name:t}):se(t,!0,i.value),{...d?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:ne(i.min),max:ne(i.max),minLength:ne(i.minLength),maxLength:ne(i.maxLength),pattern:ne(i.pattern)}:{},name:t,onChange:ae,onBlur:ae,ref:f=>{if(f){xe(t,i),l=h(a,t);const o=S(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,c=kt(o),F=l._f.refs||[];if(c?F.find(k=>k===o):o===l._f.ref)return;A(a,t,{_f:{...l._f,...c?{refs:[...F.filter(me),o,...Array.isArray(h(u,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),se(t,!1,void 0,o)}else l=h(a,t,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(At(g.array,t)&&y.action)&&g.unMount.add(t)}}},Ne=()=>s.shouldFocusError&&oe(a,ce,g.mount),ct=t=>{$(t)&&(b.state.next({disabled:t}),oe(a,(i,l)=>{const d=h(a,l);d&&(i.disabled=d._f.disabled||t,Array.isArray(d._f.refs)&&d._f.refs.forEach(f=>{f.disabled=d._f.disabled||t}))},0,!1))},Be=(t,i)=>async l=>{let d;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let f=L(n);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:c}=await p();r.errors=o,f=c}else await J(a);if(g.disabled.size)for(const o of g.disabled)A(f,o,void 0);if(E(r.errors,"root"),C(r.errors)){b.state.next({errors:{}});try{await t(f,l)}catch(o){d=o}}else i&&await i({...r.errors},l),Ne(),setTimeout(Ne);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:C(r.errors)&&!d,submitCount:r.submitCount+1,errors:r.errors}),d)throw d},yt=(t,i={})=>{h(a,t)&&(S(i.defaultValue)?Z(t,L(h(u,t))):(Z(t,i.defaultValue),A(u,t,L(i.defaultValue))),i.keepTouched||E(r.touchedFields,t),i.keepDirty||(E(r.dirtyFields,t),r.isDirty=i.defaultValue?_(t,L(h(u,t))):_()),i.keepError||(E(r.errors,t),x.isValid&&z()),b.state.next({...r}))},Ie=(t,i={})=>{const l=t?L(t):u,d=L(l),f=C(t),o=f?u:d;if(i.keepDefaultValues||(u=l),!i.keepValues){if(i.keepDirtyValues){const c=new Set([...g.mount,...Object.keys(le(u,n))]);for(const F of Array.from(c))h(r.dirtyFields,F)?A(o,F,h(n,F)):Z(F,h(o,F))}else{if(Se&&S(t))for(const c of g.mount){const F=h(a,c);if(F&&F._f){const k=Array.isArray(F._f.refs)?F._f.refs[0]:F._f.ref;if(he(k)){const O=k.closest("form");if(O){O.reset();break}}}}for(const c of g.mount)Z(c,h(o,c))}n=L(o),b.array.next({values:{...o}}),b.state.next({values:{...o}})}g={mount:i.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!x.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!s.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:f?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!G(t,u)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:f?{}:i.keepDirtyValues?i.keepDefaultValues&&n?le(u,n):r.dirtyFields:i.keepDefaultValues&&t?le(u,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Pe=(t,i)=>Ie(q(t)?t(n):t,i),ht=(t,i={})=>{const l=h(a,t),d=l&&l._f;if(d){const f=d.refs?d.refs[0]:d.ref;f.focus&&(f.focus(),i.shouldSelect&&q(f.select)&&f.select())}},gt=t=>{r={...r,...t}},qe={control:{register:xe,unregister:Ae,getFieldState:Ce,handleSubmit:Be,setError:Re,_subscribe:Ue,_runSchema:p,_getWatch:w,_getDirty:_,_setValid:z,_setFieldArray:Y,_setDisabledField:Me,_setErrors:T,_getFieldArray:N,_reset:Ie,_resetDefaultValues:()=>q(s.defaultValues)&&s.defaultValues().then(t=>{Pe(t,s.resetOptions),b.state.next({isLoading:!1})}),_removeUnmounted:V,_disableForm:ct,_subjects:b,_proxyFormState:x,get _fields(){return a},get _formValues(){return n},get _state(){return y},set _state(t){y=t},get _defaultValues(){return u},get _names(){return g},set _names(t){g=t},get _formState(){return r},get _options(){return s},set _options(t){s={...s,...t}}},subscribe:dt,trigger:Ve,register:xe,handleSubmit:Be,watch:ft,setValue:Z,getValues:Le,reset:Pe,resetField:yt,clearErrors:ot,unregister:Ae,setError:Re,setFocus:ht,getFieldState:Ce};return{...qe,formControl:qe}}function Wt(e={}){const s=I.useRef(void 0),r=I.useRef(void 0),[a,u]=I.useState({isDirty:!1,isValidating:!1,isLoading:q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...e.formControl?e.formControl:It(e),formState:a},e.formControl&&e.defaultValues&&!q(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const n=s.current.control;return n._options=e,I.useLayoutEffect(()=>n._subscribe({formState:n._proxyFormState,callback:()=>u({...n._formState}),reRenderRoot:!0}),[n]),I.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),I.useEffect(()=>{if(n._proxyFormState.isDirty){const y=n._getDirty();y!==a.isDirty&&n._subjects.state.next({isDirty:y})}},[n,a.isDirty]),I.useEffect(()=>{e.values&&!G(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values,u(y=>({...y}))):n._resetDefaultValues()},[e.values,n]),I.useEffect(()=>{e.errors&&!C(e.errors)&&n._setErrors(e.errors)},[e.errors,n]),I.useEffect(()=>{n._state.mount||(n._setValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),I.useEffect(()=>{e.shouldUnregister&&n._subjects.state.next({values:n._getWatch()})},[e.shouldUnregister,n]),s.current.formState=wt(a,n),s.current}export{mt as a,h as g,A as s,Wt as u};
