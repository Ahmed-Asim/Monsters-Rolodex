(this["webpackJsonpmonsters-book"]=this["webpackJsonpmonsters-book"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),a=n.n(r),i=(n(10),n(5)),o=n(2),u=(n(11),n(12),n(0)),l=function(e){var t=e.placeholder,n=e.handler,s=Object(c.useState)(""),r=Object(o.a)(s,2),a=r[0],i=r[1];return Object(u.jsxs)("div",{className:"clearable-input-wrapper",children:[Object(u.jsx)("input",{type:"text",placeholder:t,onChange:function(e){i(e.target.value),n&&n(e)},value:a}),Object(u.jsx)("div",{className:"cross"+(a.trim()&&" active"),onClick:function(){i("")}})]})},j=(n(14),function(e){var t=e.image,n=e.email,c=e.name;return Object(u.jsxs)("div",{className:"monster-card",children:[Object(u.jsx)("img",{src:t,alt:""}),Object(u.jsx)("h2",{children:c}),Object(u.jsx)("p",{children:n})]})});var d=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(o.a)(r,2),d=a[0],h=a[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){s(e.map((function(e){var t=e.name,n=e.email,c=e.id;return{name:t,email:n,image:"https://robohash.org/".concat(c,"?set=set2"),key:c}})))}))}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monsters Rolodex"}),Object(u.jsx)(l,{placeholder:"search monsters",handler:function(e){h(e.target.value.trim())}}),Object(u.jsx)("div",{className:"monster-card-list",children:n.filter((function(e){return e.name.toLowerCase().includes(d)})).map((function(e){return Object(u.jsx)(j,Object(i.a)({},e),e.key)}))})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),h()}],[[15,1,2]]]);
//# sourceMappingURL=main.f02285e6.chunk.js.map