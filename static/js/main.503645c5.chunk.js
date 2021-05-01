(this["webpackJsonpreact-blog-github"]=this["webpackJsonpreact-blog-github"]||[]).push([[0],{135:function(n,e,t){n.exports=t(488)},487:function(n,e,t){},488:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(119),i=t.n(a),c=t(13),u=t(12),l=t(120),s=t(5),d="Z2hwXzhXOG1KVTJOUlpEcDZ5b2lrQTJWZU1PcENoTXF5QTB6U0x1VA==",f="vinhqngo5",m="react-blog-github",p=!1,b="Iv1.d0bb6880a06e4576",g="cc3db76ffe9848c92d83172807eececa79f0eb22",h="vinhqngo5",v="Content Write - Software Developer",x={backgroundColor:"#f1f6f8",backgroundColorDark:"#4C566A",titleColor:"#ff5252",titleColorDark:"#16a085",subtitleColor:"#37474f",subtitleColorDark:"#D8DEE9"},w=t(25),E=new w.a({uri:"https://api.github.com/graphql",request:function(n){n.setContext({headers:{authorization:"Bearer ".concat(atob(d))}})}}),k=function(n){return new w.a({uri:"https://api.github.com/graphql",request:function(e){e.setContext({headers:{authorization:"Bearer ".concat(n)}})}})},j=t(78),y=t(26),O=t(4),S=t(34);function C(){var n=Object(O.a)(["\n  position: relative;\n  padding: 5em;\n  text-align: center;\n  background: ",";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n\n  @media only screen and (max-width: 768px) {\n    padding: 3em;\n  }\n"]);return C=function(){return n},n}var A=x,T=A.backgroundColor,z=A.backgroundColorDark,M=s.c.div(C(),(function(n){return"light"===n.theme.mode?T:z}));function U(){var n=Object(O.a)(["\n  margin: 0 auto;\n  padding: 0 1em;\n  max-width: 1140px;\n  text-align: center;\n"]);return U=function(){return n},n}var B=s.c.div(U());function F(){var n=Object(O.a)(["\n  font-weight: 700;\n  line-height: 1.15;\n  margin: 1.25rem 0;\n  font-size: 4.5em;\n  text-align: center;\n  color: ",";\n\n  @media only screen and (max-width: 768px) {\n    font-size: 3em;\n  }\n"]);return F=function(){return n},n}var L=x,D=L.titleColor,I=L.titleColorDark,R=s.c.h1(F(),(function(n){return"light"===n.theme.mode?D:I}));function H(){var n=Object(O.a)(["\n  font-weight: 400;\n  color: ",";\n  line-height: 1.15;\n  margin: 1.25rem 0;\n  font-size: 2.5em;\n  text-align: center;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 2em;\n  }\n"]);return H=function(){return n},n}var W=x,_=W.subtitleColor,Y=W.subtitleColorDark,P=s.c.h1(H(),(function(n){return"light"===n.theme.mode?_:Y})),N=function(){return o.a.createElement(M,null,o.a.createElement(rn,{isAbsolute:!0}),o.a.createElement(B,null,o.a.createElement(R,null,h),o.a.createElement(P,null,v)))},q=t(14),G=t.n(q),J=t(127),Q=t(128);function V(){var n=Object(O.a)(["\n  color: #FFF;\n  font-size: 18px;\n"]);return V=function(){return n},n}function X(){var n=Object(O.a)(["\n  -webkit-appearance: none;\n  background: linear-gradient(180deg, rgb(136, 220, 109) 0%, rgb(92, 168, 65) 100%);\n  color: #FFF;\n  border: none;\n  padding: 8px 16px;\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.2s;\n  outline: 0;\n\n  :hover {\n    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.10);\n  }\n"]);return X=function(){return n},n}function Z(){var n=Object(O.a)(["\n  display: ",";\n  position: ",";\n  top: 10px;\n  right: 10px;\n"]);return Z=function(){return n},n}var K=p,$=b,nn=s.c.div(Z(),K?"block":"none",(function(n){return n.absolute?"absolute":"initial"})),en=s.c.button(X()),tn=s.c.span(V()),rn=function(n){var e=n.isAbsolute,t=localStorage.getItem("githubToken")||!1;return o.a.createElement(nn,{absolute:e},t?o.a.createElement(tn,null,"Logged in as ",localStorage.getItem("githubUsername")):o.a.createElement(en,{onClick:function(){return G.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:window.location.href="https://github.com/login/oauth/authorize?client_id="+$;case 1:case"end":return n.stop()}}))}},o.a.createElement(J.a,{icon:Q.a})," Log in"))};function on(n){var e=n.fill;return o.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:e},o.a.createElement("g",{fill:"none","fill-rule":"evenodd"},o.a.createElement("g",{transform:"translate(1 1)","stroke-width":"2"},o.a.createElement("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),o.a.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},o.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}function an(){var n=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"]);return an=function(){return n},n}var cn=s.c.span(an()),un=function(){return o.a.createElement(cn,null,o.a.createElement(on,{fill:"#2ecc71"}))};function ln(){var n=Object(O.a)(["\n  margin: 2rem auto 0;\n  width: 90%;\n  max-width: 700px;\n  padding: 20px 10px;\n"]);return ln=function(){return n},n}var sn=s.c.div(ln());function dn(){var n=Object(O.a)(["\n  cursor: pointer;\n  margin-bottom: 6rem;\n  border-radius: 10px;\n  padding: 10px;\n  transition: 0.2s;\n  position: relative;\n\n  :hover {\n    background-color: ",";\n  }\n"]);return dn=function(){return n},n}var fn=s.c.div(dn(),(function(n){return"light"===n.theme.mode?"#F5F5F5":"#3B4252"}));function mn(){var n=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return mn=function(){return n},n}var pn=s.c.div(mn());function bn(){var n=Object(O.a)(["\n  display: inline-block;\n  background: #009bbb;\n  border-radius: 3px;\n  padding: 3px 15px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: ",';\n  font-weight: 300;\n  line-height: 28px;\n  font-family: "Quicksand";\n  margin-right: 10px;\n']);return bn=function(){return n},n}var gn=s.c.div(bn(),(function(n){return n.theme.body})),hn=function(n){var e=n.value;return o.a.createElement(gn,{key:e.id,style:{backgroundColor:"#".concat(e.color)}},e.name)};function vn(){var n=Object(O.a)(["\n  font-size: 34px;\n"]);return vn=function(){return n},n}var xn=s.c.h2(vn());function wn(){var n=Object(O.a)(["\n  font-size: 18px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n"]);return wn=function(){return n},n}var En=s.c.p(wn());function kn(){var n=Object(O.a)(["\n  color: #b5b5b5;\n  font-size: 15px;\n  position: absolute;\n  top: -10px;\n  right: 10px;\n"]);return kn=function(){return n},n}var jn=s.c.p(kn()),yn=function(n){var e=n.time;return o.a.createElement(jn,null,e," Min Read")},On=t(54),Sn=t.n(On),Cn=function(n){var e=n.blog,t=Object(r.useState)([]),a=Object(c.a)(t,2),i=a[0],u=a[1],l=Object(y.f)();return Object(r.useEffect)((function(){var n=e.labels.nodes.filter((function(n){return"blog"!==n.name}));u(n)}),[e.labels.nodes]),o.a.createElement(fn,null,o.a.createElement(pn,null,o.a.createElement(o.a.Fragment,null,i.map((function(n,e){return o.a.createElement(hn,{value:n,key:e})}))),o.a.createElement(yn,{time:Sn()(e.body).minutes})),o.a.createElement("div",{onClick:function(){return n=e.title,t=e.number,void l.push("/blog/".concat(n,"/").concat(t));var n,t}},o.a.createElement(xn,null,e.title),o.a.createElement(En,null,e.bodyText)))};function An(){var n=Object(O.a)(['\n{\n  repository(owner: "','", name: "','") {\n    issues(first: 100, states: OPEN, filterBy: { labels: "blog" }, orderBy: { direction: DESC, field: CREATED_AT }) {\n      nodes {\n        title\n        body\n        bodyHTML\n        bodyText\n        number\n        labels(first: 100) {\n          nodes {\n            color\n            name\n            id\n          }\n        }\n        author {\n          url\n          avatarUrl\n          login\n        }\n        updatedAt\n        id\n      }\n    }\n  }\n}\n']);return An=function(){return n},n}var Tn=Object(w.b)(An(),f,m),zn=function(){var n=Object(r.useState)([]),e=Object(c.a)(n,2),t=e[0],a=e[1],i=Object(S.a)(Tn),u=i.loading,l=i.error,s=i.data;return Object(r.useEffect)((function(){var n,e;u||(l&&console.error(l),s&&a(null===s||void 0===s?void 0:null===(n=s.repository)||void 0===n?void 0:null===(e=n.issues)||void 0===e?void 0:e.nodes))}),[u,l,s]),o.a.createElement(o.a.Fragment,null,o.a.createElement(N,null),o.a.createElement(sn,null,u?o.a.createElement(un,null):t.map((function(n,e){return o.a.createElement(Cn,{blog:n,key:e})}))))},Mn=t(55),Un=t.n(Mn),Bn=t(56),Fn=t(82),Ln={THUMBS_UP:"\ud83d\udc4d",THUMBS_DOWN:"\ud83d\udc4e",LAUGH:"\ud83d\ude04",HOORAY:"\ud83c\udf89",CONFUSED:"\ud83d\ude15",HEART:"\u2764\ufe0f",ROCKET:"\ud83d\ude80",EYES:"\ud83d\udc40"},Dn=function(n){return function(n){var e={};return Object.keys(n).forEach((function(t){e[n[t]]=t})),e}(Ln)[n]||""},In=function(){var n,e,t;return G.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(n=localStorage.getItem("githubToken"))){r.next=10;break}return r.next=4,G.a.awrap(fetch("https://api.github.com/user",{headers:new Headers({authorization:"Bearer ".concat(n)})}));case 4:return e=r.sent,r.next=7,G.a.awrap(e.json());case 7:return(t=r.sent).token=n,r.abrupt("return",t);case 10:case"end":return r.stop()}}))};function Rn(){var n=Object(O.a)(["\n  margin: 2rem auto 0;\n  width: 90%;\n  max-width: 700px;\n  padding: 20px 10px;\n  position: relative;\n"]);return Rn=function(){return n},n}var Hn=s.c.div(Rn());function Wn(){var n=Object(O.a)(["\n  @media only screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);return Wn=function(){return n},n}var _n=s.c.h1(Wn());function Yn(){var n=Object(O.a)(["\n  color: ",";\n  font-weight: 400;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n"]);return Yn=function(){return n},n}var Pn=s.c.p(Yn(),(function(n){return n.theme.toggleBorder}));function Nn(){var n=Object(O.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  transition-duration: 0.15s, 0.15s, 0.15s;\n  transition-timing-function: ease-in, ease-in, ease-in;\n  transition-delay: 0s, 0s, 0s;\n  color: ",";\n  \n  :hover {\n    color: ",";\n  }\n"]);return Nn=function(){return n},n}var qn=s.c.a(Nn(),(function(n){return n.theme.toggleBorder}),(function(n){return n.theme.text}));function Gn(){var n=Object(O.a)(["\n  position: static;\n  bottom: 60px;\n  animation-name: scale-in;\n  animation-duration: 0.15s;\n  animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);\n"]);return Gn=function(){return n},n}var Jn=s.c.span(Gn());function Qn(){var n=Object(O.a)(['\n  outline: none;\n  border: 1px solid;\n  font-size: 22px;\n  font-family: "Shadows Into Light", serif;\n  border-radius: 5px;\n  padding: 0px 20px 0 30px;\n  cursor: pointer;\n  position: relative;\n  background-color: ',";\n  color: ",";\n\n  :hover {\n    background-color: ",';\n    color: white;\n  }\n\n  :before {\n    content: "\\27A4";\n    position: absolute;\n    transform: translateY(-50%) rotate(180deg);\n    left: 10px;\n    font-size: 16px;\n    top: 54%;\n  }\n'],['\n  outline: none;\n  border: 1px solid;\n  font-size: 22px;\n  font-family: "Shadows Into Light", serif;\n  border-radius: 5px;\n  padding: 0px 20px 0 30px;\n  cursor: pointer;\n  position: relative;\n  background-color: ',";\n  color: ",";\n\n  :hover {\n    background-color: ",';\n    color: white;\n  }\n\n  :before {\n    content: "\\\\27A4";\n    position: absolute;\n    transform: translateY(-50%) rotate(180deg);\n    left: 10px;\n    font-size: 16px;\n    top: 54%;\n  }\n']);return Qn=function(){return n},n}var Vn=s.c.button(Qn(),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return"light"===n.theme.mode?"#373737":"#6B8096"}));function Xn(){var n=Object(O.a)(["\n  display: flex;\n  align-items: center;\n"]);return Xn=function(){return n},n}var Zn=s.c.div(Xn());function Kn(){var n=Object(O.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 40px;\n  margin: 10px;\n  margin-left: 0px;\n"]);return Kn=function(){return n},n}var $n=s.c.img(Kn());function ne(){var n=Object(O.a)(["\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 16px;\n  color: ",";\n"]);return ne=function(){return n},n}var ee=s.c.p(ne(),(function(n){return n.theme.text})),te=t(131),re=t(493),oe=t(492),ae=function(n){var e=n.children,t=Object(te.a)(n,["children"]);return o.a.createElement("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"blog-post-anchor"},e,o.a.createElement("style",{jsx:"true"},"\n        a {\n          color: #484848;\n          font-weight: 400;\n        }\n      "))},ie=function(n){var e=n.children;return o.a.createElement(re.a,{language:"javascript",style:oe.a},e.props.children)},ce=function(n){var e=n.comment;return o.a.createElement(le,null,o.a.createElement(Zn,null,o.a.createElement($n,{src:e.author.avatarUrl,alt:e.author.login}),o.a.createElement("div",null,o.a.createElement(ee,null,e.author.login),o.a.createElement(Pn,null,Un()(e.updatedAt).format("DD MMM YYYY")))),o.a.createElement(Bn.a,{options:{overrides:{a:{component:ae},pre:{component:ie}}}},e.body))};function ue(){var n=Object(O.a)(["\n  margin-top: 3rem;\n  border-radius: 10px;\n  padding: 10px 30px;\n  position: relative;\n  color: ",";\n  border: "," solid 1px;\n  font-size: 16px;\n"]);return ue=function(){return n},n}var le=s.c.div(ue(),(function(n){return n.theme.text}),(function(n){return n.theme.text}));function se(){var n=Object(O.a)(['\n  outline: none;\n  border: 1px solid;\n  font-size: 22px;\n  font-family: "Shadows Into Light", serif;\n  border-radius: 5px;\n  padding: 0px 20px 0 20px;\n  cursor: pointer;\n  position: relative;\n  background-color: ',";\n  color: ",";\n  text-decoration: none;\n  margin: auto;\n\n  :hover {\n    background-color: ",";\n    color: white;\n  }\n"]);return se=function(){return n},n}var de=s.c.a(se(),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return"light"===n.theme.mode?"#373737":"#6B8096"}));function fe(){var n=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 3rem;\n"]);return fe=function(){return n},n}var me=s.c.div(fe()),pe=function(n){var e=n.postUrl,t=n.comments;return o.a.createElement(o.a.Fragment,null,o.a.createElement(me,null,o.a.createElement(de,{href:e+"#issue-comment-box",target:"_blank"},"Post a comment")),t.map((function(n,e){return o.a.createElement(ce,{comment:n,key:e})})))};function be(){var n=Object(O.a)(['\n          mutation RemoveReaction {\n            removeReaction(input:{subjectId:"','",content:',',clientMutationId:"','"}) {\n              reaction {\n                id\n              }\n            }\n          }\n        ']);return be=function(){return n},n}function ge(){var n=Object(O.a)(['\n          mutation AddReaction {\n            addReaction(input:{subjectId:"','",content:',',clientMutationId:"','"}) {\n              reaction {\n                id\n              }\n            }\n          }\n        ']);return ge=function(){return n},n}function he(){var n=Object(O.a)(['{\n    repository(owner: "','", name: "','") {\n      issue(number: ',") {\n        title\n        body\n        bodyHTML\n        url\n        bodyText\n        number\n        bodyHTML\n        author {\n          url\n          avatarUrl\n          login\n        }\n        reactions(first:100){\n          nodes{\n            content\n            user{\n              id\n              login\n            }\n          }\n        }\n        updatedAt\n        id\n        comments(first:100) {\n          nodes {\n            author {\n              ... on User {\n                avatarUrl\n                name\n                login\n              }\n            }\n            body\n            bodyHTML\n            bodyText\n            publishedAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n  "]);return he=function(){return n},n}function ve(){var n=parseInt(window.location.href.split("/").pop()),e=Object(w.b)(he(),f,m,n),t=Object(r.useState)([]),a=Object(c.a)(t,2),i=a[0],u=a[1],l=Object(r.useState)(""),s=Object(c.a)(l,2),d=s[0],p=s[1],b=Object(r.useState)(!1),g=Object(c.a)(b,2),h=g[0],v=g[1],x=Object(r.useState)([]),E=Object(c.a)(x,2),j=E[0],y=E[1],O=Object(r.useState)([]),C=Object(c.a)(O,2),A=C[0],T=C[1],z=Object(S.a)(e),M=z.loading,U=z.error,B=z.data,F=Object(r.useRef)(null),L=localStorage.getItem("githubToken"),D=Object(r.useCallback)((function(n){var e=[];n.forEach((function(n){var t,r={by:n.user.login,emoji:(t=n.content,Ln[t]||"")};e.push(r)})),y(e)}),[]),I=function(n){var e,t,r;return G.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=j,o.next=3,G.a.awrap(In());case 3:if(t=o.sent,0!==e.filter((function(e){return e.emoji===n&&e.by===t.login})).length){o.next=12;break}return r={by:t.login,emoji:n},o.next=9,G.a.awrap(k(L).mutate({mutation:Object(w.b)(ge(),d,Dn(n),t.node_id)}));case 9:e.push(r),o.next=15;break;case 12:return o.next=14,G.a.awrap(k(L).mutate({mutation:Object(w.b)(be(),d,Dn(n),t.node_id)}));case 14:e=e.filter((function(e){return!(e.by===t.login&&e.emoji===n)}));case 15:y(e),F.current.forceUpdate(),v(!1);case 18:case"end":return o.stop()}}))};if(Object(r.useEffect)((function(){if(!M&&B){var n=B.repository.issue;p(n.id),u(n),D(n.reactions.nodes),T(n.comments.nodes)}}),[M,U,B,D]),M)return o.a.createElement(un,null);return o.a.createElement(o.a.Fragment,null,i.title&&o.a.createElement(Hn,null,o.a.createElement(Vn,{onClick:function(){return window.history.go(),void window.history.back()}},"Back"),o.a.createElement(_n,null,i.title),o.a.createElement("div",null,o.a.createElement(Zn,null,o.a.createElement($n,{src:i.author.avatarUrl,alt:i.author.login}),o.a.createElement("div",null,o.a.createElement(ee,null,i.author.login),o.a.createElement(Pn,null,Un()(i.updatedAt).format("DD MMM YYYY")," .",Sn()(i.body).minutes," Min Read .",o.a.createElement(qn,{href:i.url,target:"_black"},"View On Github"))))),o.a.createElement(Bn.a,{options:{overrides:{a:{component:ae},pre:{component:ie}}}},i.body),h&&o.a.createElement(Jn,null,L?o.a.createElement(Fn.GithubSelector,{onSelect:function(n){return I(n)}}):o.a.createElement(rn,{isAbsolute:!1})),o.a.createElement(Fn.GithubCounter,{ref:F,counters:j,onSelect:function(n){return I(n)},onAdd:function(){return v(!h)}}),o.a.createElement(pe,{postUrl:i.url,comments:A})))}var xe=(0,t(17).createBrowserHistory)(),we=function(){return o.a.createElement(j.a,{history:xe},o.a.createElement(y.c,null,o.a.createElement(y.a,{exact:!0,path:"/",component:zn}),o.a.createElement(y.a,{exact:!0,path:"/blog/:title/:issueNumber",component:ve})))},Ee=p,ke=b,je=g,ye=function(){var n=Object(r.useState)(!0),e=Object(c.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){(function(n){var e;return G.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.awrap(fetch("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",{method:"POST",body:new URLSearchParams({client_id:ke,client_secret:je,code:n}),headers:new Headers({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"})}));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}))})(new URLSearchParams(window.location.search).get("code")).then((function(n){n&&(localStorage.setItem("githubToken",n.access_token),function(){var n,e;return G.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.awrap(In());case 2:n=t.sent,e=n.login,localStorage.setItem("githubUsername",e);case 5:case"end":return t.stop()}}))}().then((function(){return a(!1)})))}))}),[]),Ee&&t?o.a.createElement(un,null):window.location.replace(window.location.origin+window.location.pathname)};function Oe(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("circle",{cx:"12",cy:"12",r:"5"}),o.a.createElement("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"}))}function Se(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))}function Ce(){var n=Object(O.a)(["\n  background-color: ",";\n  border: 2px solid ",";\n  color: ",";\n  width: 70px;\n  height: 70px;\n  outline: none;\n  border-radius: 50%;\n  transition: all 0.1s ease-in-out;\n  color: white;\n  text-align: center;\n  position: fixed;\n  cursor: pointer;\n  right: 30px;\n  bottom: 30px;\n  box-shadow:\n  0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n  0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n  0 12.5px 10px rgba(0, 0, 0, 0.06),\n  0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n  0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n  0 100px 80px rgba(0, 0, 0, 0.12);\n  }"]);return Ce=function(){return n},n}var Ae=s.c.button(Ce(),(function(n){return n.theme.background}),(function(n){return n.theme.background}),(function(n){return n.theme.text})),Te=function(n){var e=n.theme,t=n.toggleTheme;return o.a.createElement(Ae,{onClick:t},"light"===e?o.a.createElement(Se,null):o.a.createElement(Oe,null))};function ze(){var n=Object(O.a)(["\n  body {\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n  }\n  "]);return ze=function(){return n},n}var Me=Object(s.b)(ze(),(function(n){return n.theme.body}),(function(n){return n.theme.text})),Ue={mode:"light",body:"#fff",text:"#363537",toggleBorder:"#070707",background:"#363537"},Be={mode:"dark",body:"#2E3440",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"},Fe=function(){var n=new URLSearchParams(window.location.search),e=function(){var n=Object(r.useState)("light"),e=Object(c.a)(n,2),t=e[0],o=e[1],a=function(n){window.localStorage.setItem("theme",n),o(n)};return Object(r.useEffect)((function(){var n=window.localStorage.getItem("theme");n&&o(n)}),[]),[t,function(){a("light"===t?"dark":"light")}]}(),t=Object(c.a)(e,2),a=t[0],i=t[1],d="light"===a?Ue:Be;return n.get("code")?o.a.createElement(ye,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(l.Helmet,null,o.a.createElement("title",null,h),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("meta",{name:"description",content:v}),o.a.createElement("meta",{name:"theme-color",content:x.backgroundColor})),o.a.createElement(u.a,{client:E},o.a.createElement(s.a,{theme:d,toggleTheme:i},o.a.createElement(Me,null),o.a.createElement(we,null),o.a.createElement(Te,{theme:a,toggleTheme:i}))))},Le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}t(487);i.a.render(o.a.createElement(Fe,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/react-blog-github",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-blog-github","/service-worker.js");Le?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):De(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):De(e,n)}))}}()}},[[135,1,2]]]);
//# sourceMappingURL=main.503645c5.chunk.js.map