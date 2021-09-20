(this["webpackJsonpfso-phonebook"]=this["webpackJsonpfso-phonebook"]||[]).push([[0],{22:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(17),r=t.n(a),o=(t(22),t(6)),u=t(3),s=t(5),i=t(0),d=function(e){var n=e.search,t=e.handleSearch,c=e.persons;return Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:t,name:"name"}),Object(i.jsx)("p",{children:!!c.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}))&&function(){var e=c.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}));return Object(i.jsxs)("span",{children:[e.name," ",e.number]})}()})]})},j=function(e){var n=e.handleSubmit,t=e.handleChange,c=e.state;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name:"," ",Object(i.jsx)("input",{required:!0,value:c.name,onChange:t,name:"name"})]}),Object(i.jsxs)("div",{children:["number:"," ",Object(i.jsx)("input",{required:!0,value:c.number,onChange:t,name:"number"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},b=function(e){var n=e.persons,t=e.handleDelete;return Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsxs)("p",{children:[e.name," ",e.number," ",Object(i.jsx)("button",{onClick:function(){window.confirm("Are you sure")&&t(e.id)},children:"Delete"})]},e.name)}))})},m=t(4),h=t.n(m),l="/api/persons",f=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)({name:"",number:""}),m=Object(s.a)(r,2),f=m[0],O=m[1],x=Object(c.useState)(""),p=Object(s.a)(x,2),v=p[0],w=p[1],g=Object(c.useState)({text:"",className:""}),C=Object(s.a)(g,2),S=C[0],N=C[1];Object(c.useEffect)((function(){h.a.get(l).then((function(e){return e.data})).then((function(e){a(e),N({text:"Fetched data from server",className:"green"}),setTimeout((function(){N("")}),5e3)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)("h2",{children:Object(i.jsx)("em",{className:S.className,children:S.text})}),Object(i.jsx)("h2",{children:"Search"}),Object(i.jsx)(d,{search:v,handleSearch:function(e){w(e.target.value)},persons:t}),Object(i.jsx)("h2",{children:"Add a new"}),Object(i.jsx)(j,{handleSubmit:function(e){e.preventDefault();var n=t.some((function(e){return e.name===f.name}));if(n){if(window.confirm("".concat(f.name," is already exists in phonebook ,replace old number with new number ?"))){var c=t.find((function(e){return e.name===f.name})),r=Object(u.a)({},f);(function(e,n){return h.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))})(c.id,r).then((function(e){a(t.map((function(n){return n.name===f.name?e:n}))),O({name:"",number:""}),N({text:"".concat(e.name," entry updated"),className:"blue"}),setTimeout((function(){N("")}),5e3)}))}}else console.log(n),function(e){return h.a.post(l,e).then((function(e){return e.data}))}(Object(u.a)({},f)).then((function(e){console.log(e),a(t.concat(e)),O({name:"",number:""}),N({text:"".concat(e.name," entry created"),className:"green"}),setTimeout((function(){N("")}),5e3)}))},handleChange:function(e){var n=e.target,t=n.name,c=n.value;O(Object(u.a)(Object(u.a)({},f),{},Object(o.a)({},t,c)))},state:f}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(b,{persons:t,handleDelete:function(e){(function(e){return h.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))})(e).then((function(n){var c=t.filter((function(n){return n.id!==e}));a(c),N({text:"entry with id ".concat(e," deleted"),className:"red"}),setTimeout((function(){N("")}),5e3)}))}})]})};r.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b2aebbb1.chunk.js.map