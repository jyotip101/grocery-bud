(this["webpackJsonpgrocery-bud"]=this["webpackJsonpgrocery-bud"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(7),r=c.n(i),a=(c(13),c(8)),l=c(4),o=c(2),d=c(0),j=function(e){var t=e.items,c=e.deleteList,n=e.editItemOfList;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){var t=e.text,s=e.id;return Object(d.jsxs)("div",{className:"list-contant",children:[Object(d.jsx)("p",{className:"items",children:t}),Object(d.jsxs)("div",{className:"list-btn",children:[Object(d.jsx)("button",{onClick:function(){return n(s)},className:"btn",type:"submit",children:Object(d.jsx)("span",{className:"material-icons",children:"edit"})}),Object(d.jsx)("button",{onClick:function(){return c(s)},className:"btn",type:"submit",children:Object(d.jsx)("span",{className:"material-icons",children:"delete"})})]})]},s)}))})},u=function(e){var t=e.color,c=e.bgColor,s=e.mesg,i=e.showAlert,r=e.list;return Object(n.useEffect)((function(){var e=setTimeout((function(){i()}),3e3);return function(){return clearTimeout(e)}}),[r]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("p",{className:"Alert",style:{color:"".concat(t),backgroundColor:"".concat(c)},children:s})})},b=function(){var e=Object(n.useState)({show:!1,color:"",bgColor:"",mesg:""}),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),r=Object(o.a)(i,2),b=r[0],m=r[1],f=Object(n.useState)(!1),O=Object(o.a)(f,2),h=O[0],g=O[1],x=Object(n.useState)(null),v=Object(o.a)(x,2),p=v[0],N=v[1],S=Object(n.useState)(""),y=Object(o.a)(S,2),C=y[0],w=y[1],I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";s({show:e,color:t,bgColor:c,mesg:n})};return Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(b))}),[b]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"containers  ",children:Object(d.jsxs)("div",{className:"contant ",children:[c.show&&Object(d.jsx)(u,Object(l.a)(Object(l.a)({},c),{},{showAlert:I})),Object(d.jsx)("h1",{className:"",children:"Grocery Bud"}),Object(d.jsxs)("form",{className:" form-contant",onSubmit:function(e){if(e.preventDefault(),C)if(C&&h)m(b.map((function(e){return e.id===p?Object(l.a)(Object(l.a)({},e),{},{text:C}):e}))),w(""),N(null),g(!1),I(!0,"#008000d0","#00800028","item change");else{var t={text:C,id:(new Date).getTime().toString()};m([].concat(Object(a.a)(b),[t])),I(!0,"#008000d0","#00800028","one item added"),w("")}else I(!0,"#ff0000d0","#ff000028","Please Enter Value")},children:[Object(d.jsx)("div",{className:"input-fields  ",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"eg:- Orange",value:C,onChange:function(e){return w(e.target.value)}})}),Object(d.jsx)("button",{className:"col btn btn-light ",type:"submit",children:h?"Edit":"Add"})]}),b.length>0&&Object(d.jsxs)("div",{className:"lists-contaner",children:[Object(d.jsx)(j,{items:b,editItemOfList:function(e){var t=b.find((function(t){return t.id===e}));g(!0),N(e),w(t.text)},deleteList:function(e){var t=b.filter((function(t){return t.id!==e}));m(t),I(!0,"#ff0000d0","#ff000028","one item is deleted")},list:b}),Object(d.jsx)("button",{onClick:function(){return m([]),void I(!0,"#ff0000d0","#ff000028","all items is deleted")},className:"btn btn-clear",children:"Clear All Items"})]})]})})})};var m=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6efdff07.chunk.js.map