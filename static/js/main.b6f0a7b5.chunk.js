(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(9),c=n(3),a=n(1),s=n(0),l=Object(a.createContext)(),r=function(e){var t=e.children,n=Object(a.useState)("light"),i=Object(c.a)(n,2),r=i[0],o=i[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://binodcoder.github.io/binodfolio",d="BB.",j="Binod Bhandari",u="Graduate Software Engineer",b="MSc Computer Science graduate with distinction and experience developing mobile and web applications using Flutter, Spring Boot, and MySQL. Skilled in delivering innovative, user-focused solutions, including GDPR-compliant platforms. Seeking to contribute technical expertise to an administrative/IT system role in the UK.",h="https://1drv.ms/b/c/c4e7f71ed159e7bf/EdzGTkMLvL1IkaYFhuqx27sBkwS6loLtk0jJDLeuK8IoVg?e=AUARhX",m={linkedin:"https://www.linkedin.com/in/binodcoder/",github:"https://github.com/binodcoder"},p=[{name:"Project 1",description:"During my postgraduate program, I built web and mobile applications for a job portal, incorporating advanced security measures such as JWT authentication and AES-256 encryption. The platform features job posting, application management, and user role-based access, ensuring a seamless experience for all stakeholders. I also prioritized GDPR compliance and developed a responsive user interface tailored for both web and mobile platforms, delivering a secure and user-friendly solution.",stack:["Flutter","BLoC","Spring Boot"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 2",description:"I developed a mobile app designed for waitstaff in restaurants and hotels to streamline food order management, enhancing efficiency and accuracy in service. The app gained traction quickly, achieving over 100 downloads, reflecting its practicality and user-focused design.",stack:["Flutter","Provider","MVC"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 3",description:" As part of my postgraduate studies, I built an offline blogging platform that empowers users with full control over their posts and media, ensuring privacy and accessibility even without an internet connection. The platform features intuitive navigation and a robust search functionality, enabling users to effortlessly manage and locate their content. This project highlights my ability to design and develop user-centric solutions tailored for seamless offline experiences.",stack:["Flutter","BLoC","SQLite"],sourceCode:"https://github.com",livePreview:"https://github.com"}],f=["HTML","CSS","JavaScript","React","Material UI","Jest","Java","Spring Boot","MySQL","MongoDB","Dart","Flutter","BloC","Mokito","JUnit","RESTful API","Clean Code","Git","CI/CD"],O="binodcoder@mail.com",x=n(16),g=n.n(x),v=n(14),k=n.n(v),N=n(18),_=n.n(N),w=n(17),y=n.n(w),C=(n(28),function(){var e=Object(a.useContext)(l),t=Object(c.a)(e,1)[0],n=t.themeName,i=t.toggleTheme,r=Object(a.useState)(!1),o=Object(c.a)(r,2),d=o[0],j=o[1],u=function(){return j(!d)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:d?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(k.a,{}):Object(s.jsx)(g.a,{})}),Object(s.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:d?Object(s.jsx)(y.a,{}):Object(s.jsx)(_.a,{})})]})}),S=(n(32),function(){var e=o,t=d;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(C,{})]})}),B=n(11),P=n.n(B),I=n(19),L=n.n(I),E=(n(33),function(){var e=j,t=u,n=b,i=h,c=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[i&&Object(s.jsx)("a",{href:i,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(s.jsxs)(s.Fragment,{children:[c.github&&Object(s.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(P.a,{})}),c.linkedin&&Object(s.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(L.a,{})})]})]})]})}),T=n(7),M=n.n(T),J=n(20),D=n.n(J),F=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},M()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(P.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(D.a,{})})]})}),A=(n(36),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(F,{project:e},M()())}))})]}):null}),R=(n(37),function(){return f.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},M()())}))})]}):null}),G=n(21),U=n.n(G),z=(n(38),function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top","aria-label":"top",children:Object(s.jsx)(U.a,{fontSize:"large"})})}):null}),Q=(n(39),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),q=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/binodcoder/binodfolio",className:"link footer__link",children:"Created By Binod Bhandari"})})}),H=(n(41),function(){var e=Object(a.useContext)(l),t=Object(c.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(S,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(E,{}),Object(s.jsx)(A,{}),Object(s.jsx)(R,{}),Object(s.jsx)(Q,{})]}),Object(s.jsx)(z,{}),Object(s.jsx)(q,{})]})});n(42);Object(i.render)(Object(s.jsx)(r,{children:Object(s.jsx)(H,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b6f0a7b5.chunk.js.map