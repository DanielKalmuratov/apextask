(this["webpackJsonppython-react"]=this["webpackJsonppython-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(16),r=n.n(a),i=(n(21),n(3)),j=(n(22),n(5)),l=n.n(j),d=n(0);var o=function(){var e=Object(c.useState)(Boolean),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/admin"}).then((function(e){s(e[0].isLogin)}))}),[]),Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("span",{children:"Apex Group"})}),Object(d.jsxs)("ul",{className:"nav-list",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{href:"#",className:"active",children:"Form"})}),Object(d.jsx)("li",{className:"nav-item",children:n?Object(d.jsx)("a",{href:"#",className:"",children:"All Users"}):Object(d.jsx)("a",{href:"#",className:"",children:"Sigin"})})]})]})})};n(14);var b=function(){return Object(d.jsx)("div",{className:"form-wrap",children:Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"\u0424\u0418\u041e"}),Object(d.jsx)("input",{type:"number",name:"phone",id:"phone",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(d.jsx)("input",{type:"text",name:"adress",id:"adress",placeholder:"\u0410\u0434\u0440\u0435\u0441"}),Object(d.jsx)("input",{type:"number",name:"id_num",id:"id_num",placeholder:"\u0418\u041d\u041d"}),Object(d.jsx)("button",{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})};var u=function(){return Object(d.jsx)("div",{className:"form-wrap",children:Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("input",{type:"text",name:"login",id:"login",placeholder:"\u041b\u043e\u0433\u0438\u043d"}),Object(d.jsx)("input",{type:"number",name:"password",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})};n(15);var h=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2);return t[0],t[1],Object(d.jsx)("div",{className:"users-list",children:Object(d.jsxs)("div",{className:"user-item",children:[Object(d.jsx)("h3",{children:"Kalmuratov Daniel"}),Object(d.jsx)("p",{children:"+996702343121"}),Object(d.jsx)("p",{children:"Kyrgyzstan Bishkek"}),Object(d.jsx)("p",{children:"78946513465"})]})})};var m=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0];return t[1],n?Object(d.jsx)(h,{}):Object(d.jsx)(u,{})};n(42);var p=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(o,{}),Object(d.jsx)(b,{}),Object(d.jsx)(m,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.6656620a.chunk.js.map