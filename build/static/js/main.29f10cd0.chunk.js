(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,c){},,function(e,a,c){},,function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){"use strict";c.r(a);var s=c(2),t=c.n(s),r=c(6),i=c.n(r),n=(c(14),c(0)),l=function(){return Object(n.jsxs)("header",{className:"app__header",children:[Object(n.jsx)("h1",{className:"app__title",children:Object(n.jsxs)("a",{href:"#",children:[Object(n.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(n.jsx)("nav",{className:"app__menu",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Comics"})})]})})]})},h=c(3),j=c(7),o=c(9),m=c(8),d=(c(16),c.p+"static/media/mjolnir.61f31e18.png"),b=c(1),_=c.n(b),u=c(4),O=function e(){var a=this;Object(h.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=67d450180c995215a562c25bafa39221",this.getResourse=function(){var e=Object(u.a)(_.a.mark((function e(a){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a,", status: ").concat(c.status));case 5:return e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(u.a)(_.a.mark((function e(){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getResourse("".concat(a._apiBase,"/characters?").concat(a._apiKey));case 2:return c=e.sent,e.abrupt("return",c.data.results.map(a._transformCharacter));case 4:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(u.a)(_.a.mark((function e(c){var s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getResourse("".concat(a._apiBase,"/characters/").concat(c,"?").concat(a._apiKey));case 2:return s=e.sent,e.abrupt("return",a._transformCharacter(s.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),homepage:e.urls[0].url,wiki:e.urls[1].url}}},x=function(e){Object(o.a)(c,e);var a=Object(m.a)(c);function c(e){var s;return Object(h.a)(this,c),(s=a.call(this,e)).state={char:{}},s.marvelService=new O,s.onCharLoaded=function(e){s.setState({char:e})},s.updateChar=function(){var e=Math.floor(400*Math.random()+1011e3);s.marvelService.getCharacter(e).then(s.onCharLoaded)},s.updateChar(),s}return Object(j.a)(c,[{key:"render",value:function(){var e=this.state.char,a=e.name,c=e.description,s=e.thumbnail,t=e.homepage,r=e.wiki;return Object(n.jsxs)("div",{className:"randomchar",children:[Object(n.jsxs)("div",{className:"randomchar__block",children:[Object(n.jsx)("img",{src:s,alt:"Random character",className:"randomchar__img"}),Object(n.jsxs)("div",{className:"randomchar__info",children:[Object(n.jsx)("p",{className:"randomchar__name",children:a}),Object(n.jsx)("p",{className:"randomchar__descr",children:c}),Object(n.jsxs)("div",{className:"randomchar__btns",children:[Object(n.jsx)("a",{href:t,className:"button button__main",children:Object(n.jsx)("div",{className:"inner",children:"homepage"})}),Object(n.jsx)("a",{href:r,className:"button button__secondary",children:Object(n.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(n.jsxs)("div",{className:"randomchar__static",children:[Object(n.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(n.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(n.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(n.jsx)("button",{className:"button button__main",children:Object(n.jsx)("div",{className:"inner",children:"try it"})}),Object(n.jsx)("img",{src:d,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),c}(s.Component),p=(c(18),c.p+"static/media/abyss.93d211d3.jpg"),f=function(){return Object(n.jsxs)("div",{className:"char__list",children:[Object(n.jsxs)("ul",{className:"char__grid",children:[Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:p,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item char__item_selected",children:[Object(n.jsx)("img",{src:p,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:p,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:p,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:p,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:p,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:p,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:p,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]}),Object(n.jsxs)("li",{className:"char__item",children:[Object(n.jsx)("img",{src:p,alt:"abyss"}),Object(n.jsx)("div",{className:"char__name",children:"Abyss"})]})]}),Object(n.jsx)("button",{className:"button button__main button__long",children:Object(n.jsx)("div",{className:"inner",children:"load more"})})]})},N=(c(19),c.p+"static/media/thor.533e3a5e.jpeg"),v=function(){return Object(n.jsxs)("div",{className:"char__info",children:[Object(n.jsxs)("div",{className:"char__basics",children:[Object(n.jsx)("img",{src:N,alt:"abyss"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"char__info-name",children:"thor"}),Object(n.jsxs)("div",{className:"char__btns",children:[Object(n.jsx)("a",{href:"#",className:"button button__main",children:Object(n.jsx)("div",{className:"inner",children:"homepage"})}),Object(n.jsx)("a",{href:"#",className:"button button__secondary",children:Object(n.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(n.jsx)("div",{className:"char__descr",children:"In Norse mythology, Loki is a god or j\xf6tunn (or both). Loki is the son of F\xe1rbauti and Laufey, and the brother of Helblindi and B\xfdleistr. By the j\xf6tunn Angrbo\xf0a, Loki is the father of Hel, the wolf Fenrir, and the world serpent J\xf6rmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Sva\xf0ilfari as the father, Loki gave birth\u2014in the form of a mare\u2014to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of V\xe1li in the Prose Edda."}),Object(n.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(n.jsxs)("ul",{className:"char__comics-list",children:[Object(n.jsx)("li",{className:"char__comics-item",children:"All-Winners Squad: Band of Heroes (2011) #3"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Alpha Flight (1983) #50"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Amazing Spider-Man (1999) #503"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Amazing Spider-Man (1999) #504"}),Object(n.jsx)("li",{className:"char__comics-item",children:"AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Vengeance (2011) #4"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Avengers (1963) #1"}),Object(n.jsx)("li",{className:"char__comics-item",children:"Avengers (1996) #1"})]})]})},g=c.p+"static/media/vision.067d4ae1.png",y=function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(l,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(x,{}),Object(n.jsxs)("div",{className:"char__content",children:[Object(n.jsx)(f,{}),Object(n.jsx)(v,{})]}),Object(n.jsx)("img",{className:"bg-decoration",src:g,alt:"vision"})]})]})};c(20);i.a.render(Object(n.jsx)(t.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.29f10cd0.chunk.js.map