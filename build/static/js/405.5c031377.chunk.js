"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[405],{594:function(e,r,n){n.d(r,{Z:function(){return c}});var t=n.p+"static/media/error.42292aa12b6bc303ce99.gif",a=n(184),c=function(){return(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:t,alt:"Error"})}},1427:function(e,r,n){n.r(r),n.d(r,{default:function(){return I}});var t=n(9439),a=n(2791),c=n(4270),s=n(4203),i=n(4798),o=n.p+"static/media/mjolnir.61f31e1809f12183a524.png",l=n(184),u=function(e){var r=e.data,n=r.name,t=r.description,a=r.thumbnail,c=r.homepage,s=r.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:n}),(0,l.jsx)("p",{className:"randomchar__descr",children:t}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:s,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=(0,a.useState)({}),r=(0,t.Z)(e,2),n=r[0],c=r[1],h=(0,s.Z)(),d=h.getCharacter,m=h.clearError,f=h.proc,p=h.setProcess;(0,a.useEffect)((function(){x();var e=setInterval(x,6e4);return function(){clearInterval(e)}}),[]);var v=function(e){c(e)},x=function(){m();var e=Math.floor(400*Math.random())+1011e3;d(e).then(v).then((function(){return p("confirmed")}))};return(0,l.jsxs)("div",{className:"randomchar",children:[(0,i.Z)(f,u,n),(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{onClick:x,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},d=n(4165),m=n(3433),f=n(5861),p=n(6983),v=n(5660),x=n(594),_=n(681),j=function(e){var r=(0,a.useState)([]),n=(0,t.Z)(r,2),c=n[0],i=n[1],o=(0,a.useState)(!1),u=(0,t.Z)(o,2),h=u[0],j=u[1],b=(0,a.useState)(304),g=(0,t.Z)(b,2),N=g[0],Z=g[1],k=(0,a.useState)(!1),w=(0,t.Z)(k,2),y=w[0],C=w[1],E=(0,s.Z)(),S=E.getAllCharacters,F=E.proc,P=E.setProcess;(0,a.useEffect)((function(){T(N,!0)}),[]);var T=function(e,r){j(!r),S(e).then(I).then((function(){return P("confirmed")}))},I=function(){var e=(0,f.Z)((0,d.Z)().mark((function e(r){var n;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!1,r.length<9&&(n=!0),i([].concat((0,m.Z)(c),(0,m.Z)(r))),j(!1),Z(N+9),C(n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),q=(0,a.useRef)([]),M=function(e){q.current.forEach((function(e){return e.classList.remove("char__item_selected")})),q.current[e].classList.add("char__item_selected"),q.current[e].focus()};var A=(0,a.useMemo)((function(){return function(e,r,n){switch(e){case"waiting":return(0,l.jsx)(_.Z,{});case"loading":return n?(0,l.jsx)(r,{}):(0,l.jsx)(_.Z,{});case"confirmed":return(0,l.jsx)(r,{});case"error":return(0,l.jsx)(x.Z,{});default:throw new Error("Unexpected process state")}}(F,(function(){return function(r){var n=r.map((function(r,n){var t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r.thumbnail&&(t={objectFit:"unset"}),(0,l.jsx)(p.Z,{timeout:500,classNames:"char__item",children:(0,l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return q.current[n]=e},onClick:function(){e.onCharSelected(r.id),M(n)},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||(e.onCharSelected(r.id),M(n))},children:[(0,l.jsx)("img",{src:r.thumbnail,alt:r.name,style:t}),(0,l.jsx)("div",{className:"char__name",children:r.name})]})},r.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:(0,l.jsx)(v.Z,{component:null,children:n})})}(c)}),h)}),[F]);return(0,l.jsxs)("div",{className:"char__list",children:[A,(0,l.jsx)("button",{disabled:h,style:{display:y?"none":"block"},className:"button button__main button__long",onClick:function(){return T(N)},children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},b=function(e){var r=e.data,n=r.name,t=r.description,a=r.thumbnail,c=r.homepage,s=r.wiki,i=r.comics,o=i.length>9?i.slice(0,10):i;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:a,alt:n,style:{objectFit:a.includes("image_not_available")?"contain":"cover"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:n}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:s,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:t}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[0===i.length?"There is no comics with this character":null,o.map((function(e,r){return(0,l.jsx)("li",{className:"char__comics-item",children:e.name},r)}))]})]})},g=function(e){var r=(0,a.useState)(null),n=(0,t.Z)(r,2),c=n[0],o=n[1],u=(0,s.Z)(),h=u.getCharacter,d=u.proc,m=u.setProcess;(0,a.useEffect)((function(){return f()}),[e.charId]);var f=function(){var r=e.charId;r&&h(r).then(p).then((function(){return m("confirmed")}))},p=function(e){return o(e)};return(0,l.jsx)("div",{className:"char__info",children:(0,i.Z)(d,b,c)})},N=n(5671),Z=n(3144),k=n(136),w=n(7277),y=function(e){(0,k.Z)(n,e);var r=(0,w.Z)(n);function n(){var e;(0,N.Z)(this,n);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(e=r.call.apply(r,[this].concat(a))).state={error:!1},e}return(0,Z.Z)(n,[{key:"componentDidCatch",value:function(e,r){console.log(e,r),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,l.jsx)("h2",{children:"Something went wrong"}):this.props.children}}]),n}(a.Component),C=y,E=n(5705),S=n(7670),F=n(1087),P=function(){var e=(0,a.useState)(null),r=(0,t.Z)(e,2),n=r[0],c=r[1],i=(0,s.Z)(),o=i.proc,u=i.setProcess,h=i.getCharacterByName,d=i.clearError,m=function(e){return c(e)},f="error"===o?(0,l.jsx)("div",{className:"char__search-critical-error",children:(0,l.jsx)(E.Bc,{})}):null,p=n?n.length>0?(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",n[0].name," page?"]}),(0,l.jsx)(F.rU,{to:"/characters/".concat(n[0].id),className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"To page"})})]}):(0,l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,l.jsxs)("div",{className:"char__search-form",children:[(0,l.jsx)(E.J9,{initialValues:{charName:""},validationSchema:S.Ry({charName:S.Z_().required("This field is required")}),onSubmit:function(e){var r,n=e.charName;r=n,d(),h(r).then(m).then((function(){return u("confirmed")}))},children:(0,l.jsxs)(E.l0,{children:[(0,l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsx)(E.gN,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,l.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===o,children:(0,l.jsx)("div",{className:"inner",children:"find"})})]}),(0,l.jsx)(E.Bc,{component:"div",className:"char__search-error",name:"charName"})]})}),p,f]})},T=n.p+"static/media/spiderman.cc60f789b1e497ebceec.png",I=function(){var e=(0,a.useState)(null),r=(0,t.Z)(e,2),n=r[0],s=r[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(c.q,{children:[(0,l.jsx)("meta",{name:"description",content:"Marvel information portal"}),(0,l.jsx)("title",{children:"Marvel information"})]}),(0,l.jsxs)(C,{children:[" ",(0,l.jsx)(h,{})]}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(j,{onCharSelected:function(e){return s(e)}}),(0,l.jsxs)("div",{children:[(0,l.jsx)(C,{children:(0,l.jsx)(g,{charId:n})}),(0,l.jsx)(C,{children:(0,l.jsx)(P,{})})]})]}),(0,l.jsx)("div",{className:"box-decoration",children:(0,l.jsx)("img",{className:"bg-decoration",src:T,alt:"vision"})})]})}},4203:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(4165),a=n(5861),c=n(9439),s=n(2791),i=function(){var e=function(){var e=(0,s.useState)("waiting"),r=(0,c.Z)(e,2),n=r[0],i=r[1],o=(0,s.useCallback)(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a,c,s,o,l=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"aplication/json"},i("loading"),e.prev=4,e.next=7,fetch(r,{method:n,body:a,headers:c});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),i("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(r){return e.apply(this,arguments)}}(),[]);return{request:o,clearError:(0,s.useCallback)((function(){i("loading")}),[]),proc:n,setProcess:i}}(),r=e.request,n=e.clearError,i=e.proc,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=".concat("67d450180c995215a562c25bafa39221"),h=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(l,"characters?name=").concat(n,"&").concat(u));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(v));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,a,c=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:210,e.next=3,r("".concat(l,"characters?limit=9&offset=").concat(n,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(v));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(l,"characters/").concat(n,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",v(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(l,"comics/").concat(n,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",x(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,a,c=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:210,e.next=3,r("".concat(l,"comics?limit=8&offset=").concat(n,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},x=function(e){var r;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(r=e.textObjects[0])||void 0===r?void 0:r.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available",url:e.urls[0].url}};return{proc:i,setProcess:o,getAllCharacters:d,getCharacter:m,clearError:n,getAllComics:p,getComic:f,getCharacterByName:h}}},4798:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(594),a=n(681),c=n(184),s=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,c.jsxs)("div",{className:"skeleton",children:[(0,c.jsxs)("div",{className:"pulse skeleton__header",children:[(0,c.jsx)("div",{className:"pulse skeleton__circle"}),(0,c.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"})]})]})},i=function(e,r,n){switch(e){case"waiting":return(0,c.jsx)(s,{});case"loading":return(0,c.jsx)(a.Z,{});case"confirmed":return(0,c.jsx)(r,{data:n});case"error":return(0,c.jsx)(t.Z,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=405.5c031377.chunk.js.map