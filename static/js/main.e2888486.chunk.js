(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},44:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(17),l=c.n(i),a=(c(35),c(36),c(7)),j=c(5),r=c(61),b=c(60),o=(c(37),c(0));var d=function(){return Object(o.jsx)("div",{className:"goback",children:Object(o.jsx)(a.b,{to:"/",children:Object(o.jsx)("i",{class:"bi bi-arrow-return-left"})})})};var u=function(){return Object(o.jsxs)("div",{className:"datainput",children:[Object(o.jsx)("h3",{children:"Carga de datos"}),Object(o.jsxs)("div",{className:"row options",children:[Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)(a.b,{to:"/departments",children:Object(o.jsx)("div",{className:"input-button",children:Object(o.jsx)("h6",{children:"Departamentos"})})})}),Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)(a.b,{to:"/services",children:Object(o.jsx)("div",{className:"input-button",children:Object(o.jsx)("h6",{children:"Servicios"})})})})]}),Object(o.jsxs)("div",{className:"row options",children:[Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)(a.b,{to:"/guard",children:Object(o.jsx)("div",{className:"input-button",children:Object(o.jsx)("h6",{children:"Guardias, Turnos..."})})})}),Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)(a.b,{to:"/personal",children:Object(o.jsx)("div",{className:"input-button",children:Object(o.jsx)("h6",{children:"Personal"})})})})]}),Object(o.jsxs)("div",{className:"row options",children:[Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)(a.b,{to:"/licences",children:Object(o.jsx)("div",{className:"input-button",children:Object(o.jsx)("h6",{children:"Licencias"})})})}),Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)(a.b,{to:"/notworking",children:Object(o.jsx)("div",{className:"input-button",children:Object(o.jsx)("h6",{children:"Feriados"})})})})]}),Object(o.jsx)(d,{})]})};var x=function(){return Object(o.jsxs)("div",{style:{marginTop:"30px"},children:[Object(o.jsx)("h2",{children:"Pagina no encontrada"}),Object(o.jsx)("p",{children:"La pagina a la que intentas acceder no existe"})]})},O=c(4),h=c(58),m=c(59),p=(c(44),c.p+"static/media/logo.1501c205.svg");var N=function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)(h.a,{bg:"light",expand:"lg",expanded:c,children:[Object(o.jsx)(h.a.Brand,{children:Object(o.jsx)("img",{src:p,className:"logo",alt:"logo"})}),Object(o.jsx)(h.a.Toggle,{onClick:function(){return n(!c&&"expanded")}}),Object(o.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(o.jsxs)(m.a,{className:"mr-auto",children:[Object(o.jsxs)(a.b,{to:"/",onClick:function(){return n(!1)},children:[Object(o.jsx)("i",{className:"bi bi-house"}),"Inicio"]}),Object(o.jsxs)(a.b,{to:"/",onClick:function(){return n(!1)},children:[Object(o.jsx)("i",{className:"bi bi-calendar3"}),"Planificaci\xf3n"]}),Object(o.jsxs)(a.b,{to:"/",onClick:function(){return n(!1)},children:[Object(o.jsx)("i",{className:"bi bi-file-earmark-bar-graph"}),"Informes"]}),Object(o.jsxs)(a.b,{to:"/",onClick:function(){return n(!1)},children:[Object(o.jsx)("i",{className:"bi bi-people"}),"Personal"]}),Object(o.jsxs)(a.b,{to:"/inputs",onClick:function(){return n(!1)},children:[Object(o.jsx)("i",{className:"bi bi-archive"}),"Carga de datos"]})]})})]})};var v=function(){var e=window.CSRF_TOKEN;return Object(o.jsx)("div",{className:"department-form",children:Object(o.jsxs)("form",{method:"post",className:"form-input",children:[Object(o.jsx)("input",{name:"csrfmiddlewaretoken",value:e,hidden:!0}),Object(o.jsx)("input",{className:"Inputext",type:"text",name:"username",placeHolder:"Nombre de departamento",required:!0}),Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-check-lg"})})]})})};c(48);var f=function(){return Object(o.jsx)("div",{className:"goback",children:Object(o.jsx)(a.b,{to:"/inputs",children:Object(o.jsx)("i",{class:"bi bi-arrow-return-left"})})})};function g(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(s.useState)(e),c=Object(O.a)(t,2),n=c[0],i=c[1],l=Object(s.useCallback)((function(){i((function(e){return!e}))}),[]);return[n,l]}c(49);var k=function(){var e=g(),t=Object(O.a)(e,2),c=t[0],s=t[1];return Object(o.jsxs)("div",{className:"departments",children:[Object(o.jsx)(f,{}),c?Object(o.jsx)(v,{}):null,Object(o.jsx)("button",{className:"btn btn-outline-success new-entry",onClick:function(){return s()},children:c?Object(o.jsx)("i",{class:"bi bi-x"}):Object(o.jsx)("i",{class:"bi bi-plus"})}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"th-name",scope:"col",children:"Departamento"}),Object(o.jsx)("th",{className:"th-option",scope:"col",children:"Opciones"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Dto M\xe9dico"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return s()},children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Enfermer\xeda"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return s()},children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Servicios Generales"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return s()},children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]})]})]})]})};var C=function(e){var t=window.CSRF_TOKEN,c=e.value;return Object(s.useEffect)((function(){document.getElementById("service-name").value=e.value}),[c]),Object(o.jsx)("div",{className:"services-form",children:Object(o.jsxs)("form",{method:"post",className:"form-input",children:[Object(o.jsx)("input",{name:"csrfmiddlewaretoken",value:t,hidden:!0}),e.value?Object(o.jsx)("p",{children:Object(o.jsx)("i",{children:"Modificar"})}):null,Object(o.jsx)("input",{className:"Inputext",type:"text",id:"service-name",name:"username",placeholder:"Nombre de servicio",required:!0}),Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-check-lg"})})]})})};c(50);var w=function(){var e=g(),t=Object(O.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(""),l=Object(O.a)(i,2),a=l[0],j=l[1],r=Object(s.useState)(null),b=Object(O.a)(r,2),d=(b[0],b[1]),u="";function x(e){var t=e.target.name;d(t),u=t,n(),console.log(u)}return Object(o.jsxs)("div",{className:"services",children:[Object(o.jsx)(f,{}),Object(o.jsxs)("select",{onChange:function(e){return j(e.target.value)},required:!0,children:[Object(o.jsx)("option",{value:"",disabled:!0,hidden:!0,selected:!0,children:"Selecione departamento"}),Object(o.jsx)("option",{value:"Dto Medico",children:"Dto Medico"}),Object(o.jsx)("option",{value:"Enfermer\xeda",children:"Enfermer\xeda"}),Object(o.jsx)("option",{value:"Servicios Generales",children:"Servicios Generales"})]}),a.length>1&&c?Object(o.jsx)(C,{value:u}):null,Object(o.jsx)("button",{className:"btn btn-outline-success new-entry",onClick:a.length>1?function(){d(""),n()}:null,children:a.length>0&&c?Object(o.jsx)("i",{class:"bi bi-x"}):Object(o.jsx)("i",{class:"bi bi-plus"})}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"th-name",scope:"col",children:"Servicios"}),Object(o.jsx)("th",{className:"th-option",scope:"col",children:"Opciones"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Medicina general"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",name:"Medicina General",onClick:a.length>1?x:null,children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})}),Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Pediatr\xeda"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",name:"Pediatr\xeda",onClick:a.length>1?x:null,children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})}),Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Cirug\xeda"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",name:"Cirug\xeda",onClick:a.length>1?x:null,children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})}),Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]})]})]})]})};var q=function(){var e=window.CSRF_TOKEN;return Object(o.jsx)("div",{className:"guard-form",children:Object(o.jsxs)("form",{method:"post",className:"form-input",children:[Object(o.jsx)("input",{name:"csrfmiddlewaretoken",value:e,hidden:!0}),Object(o.jsx)("input",{className:"Inputext",type:"text",name:"username",placeHolder:"Nombre de servicio",required:!0}),Object(o.jsxs)("select",{required:!0,children:[Object(o.jsx)("option",{value:"",disabled:!0,hidden:!0,selected:!0,children:"Selecione tipo"}),Object(o.jsx)("option",{value:"Dto Medico",children:"Guardia"}),Object(o.jsx)("option",{value:"Enfermer\xeda",children:"Turno"}),Object(o.jsx)("option",{value:"Servicios Generales",children:"Consultorio"})]}),Object(o.jsxs)("select",{required:!0,children:[Object(o.jsx)("option",{value:"",disabled:!0,hidden:!0,selected:!0,children:"Selecione duraci\xf3n"}),Object(o.jsx)("option",{value:"Dto Medico",children:"24hs"}),Object(o.jsx)("option",{value:"Enfermer\xeda",children:"12hs"}),Object(o.jsx)("option",{value:"Servicios Generales",children:"8hs"})]}),Object(o.jsxs)("div",{className:"form-check",children:[Object(o.jsx)("input",{className:"form-check-input checkbox",type:"checkbox",value:"",id:"flexCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"Activa"})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-check-lg"})})]})})};c(51);var y=function(){var e=g(),t=Object(O.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(""),l=Object(O.a)(i,2),a=(l[0],l[1]),j=Object(s.useState)(""),r=Object(O.a)(j,2),b=r[0],d=r[1];return Object(o.jsxs)("div",{className:"guard",children:[Object(o.jsx)(f,{}),Object(o.jsxs)("select",{onChange:function(e){return a(e.target.value)},required:!0,children:[Object(o.jsx)("option",{value:"",disabled:!0,hidden:!0,selected:!0,children:"Selecione departamento"}),Object(o.jsx)("option",{value:"Dto Medico",children:"Dto Medico"}),Object(o.jsx)("option",{value:"Enfermer\xeda",children:"Enfermer\xeda"}),Object(o.jsx)("option",{value:"Servicios Generales",children:"Servicios Generales"})]}),Object(o.jsxs)("select",{onChange:function(e){return d(e.target.value)},required:!0,children:[Object(o.jsx)("option",{value:"",disabled:!0,hidden:!0,selected:!0,children:"Selecione servicio"}),Object(o.jsx)("option",{value:"Medicina General",children:"Medicina General"}),Object(o.jsx)("option",{value:"Pediatr\xeda",children:"Pediatr\xeda"}),Object(o.jsx)("option",{value:"Cirug\xeda",children:"Cirug\xeda"})]}),b.length>0&&c?Object(o.jsx)(q,{}):null,Object(o.jsx)("button",{className:"btn btn-outline-success new-entry",onClick:b.length>0?function(){return n()}:null,children:b.length>0&&c?Object(o.jsx)("i",{class:"bi bi-x"}):Object(o.jsx)("i",{class:"bi bi-plus"})}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"th-name",scope:"col",children:"Guardia"}),Object(o.jsx)("th",{className:"th-option",scope:"col",children:"Opciones"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Guardia medicina General"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:b.length>0?function(){return n()}:null,children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Derivaci\xf3n"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:b.length>0?function(){return n()}:null,children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Constataci\xf3n \xf3bito"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:b.length>0?function(){return n()}:null,children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]})]})]})]})};var S=function(){var e=window.CSRF_TOKEN;return Object(o.jsx)("div",{className:"personal-form",children:Object(o.jsxs)("form",{method:"post",className:"form-input",children:[Object(o.jsx)("input",{name:"csrfmiddlewaretoken",value:e,hidden:!0}),Object(o.jsx)("input",{className:"Inputext",type:"text",name:"username",placeHolder:"Nombre",required:!0}),Object(o.jsx)("input",{className:"Inputext",type:"text",name:"username",placeHolder:"Apellido",required:!0}),Object(o.jsx)("input",{className:"Inputext",type:"text",name:"username",placeHolder:"Legajo",required:!0}),Object(o.jsx)("input",{className:"Inputext",type:"text",name:"username",placeHolder:"Funci\xf3n",required:!0}),Object(o.jsx)("input",{className:"Inputext",type:"text",name:"username",placeHolder:"Tel\xe9fono",required:!0}),Object(o.jsxs)("select",{required:!0,children:[Object(o.jsx)("option",{value:"",disabled:!0,hidden:!0,selected:!0,children:"Ley"}),Object(o.jsx)("option",{value:"Dto Medico",children:"N\xb0 1904"}),Object(o.jsx)("option",{value:"Enfermer\xeda",children:"N\xb0 1844"})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-check-lg"})})]})})};c(52);var G=function(){var e=g(),t=Object(O.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(""),l=Object(O.a)(i,2),a=(l[0],l[1]),j=Object(s.useState)(""),r=Object(O.a)(j,2),b=r[0],d=r[1];return Object(o.jsxs)("div",{className:"personal",children:[Object(o.jsx)(f,{}),Object(o.jsxs)("select",{onChange:function(e){return a(e.target.value)},required:!0,children:[Object(o.jsx)("option",{value:"",disabled:!0,hidden:!0,selected:!0,children:"Selecione departamento"}),Object(o.jsx)("option",{value:"Dto Medico",children:"Dto Medico"}),Object(o.jsx)("option",{value:"Enfermer\xeda",children:"Enfermer\xeda"}),Object(o.jsx)("option",{value:"Servicios Generales",children:"Servicios Generales"})]}),Object(o.jsxs)("select",{onChange:function(e){return d(e.target.value)},required:!0,children:[Object(o.jsx)("option",{value:"",disabled:!0,hidden:!0,selected:!0,children:"Selecione servicio"}),Object(o.jsx)("option",{value:"Medicina General",children:"Medicina General"}),Object(o.jsx)("option",{value:"Pediatr\xeda",children:"Pediatr\xeda"}),Object(o.jsx)("option",{value:"Cirug\xeda",children:"Cirug\xeda"})]}),b.length>0&&c?Object(o.jsx)(S,{}):null,Object(o.jsx)("button",{className:"btn btn-outline-success new-entry",onClick:b.length>0?function(){return n()}:null,children:b.length>0&&c?Object(o.jsx)("i",{class:"bi bi-x"}):Object(o.jsx)("i",{class:"bi bi-plus"})}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"th-name",scope:"col",children:"Nombre"}),Object(o.jsx)("th",{className:"th-option",scope:"col",children:"Funci\xf3n"}),Object(o.jsx)("th",{className:"th-option",scope:"col",children:"Opciones"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Andr\xe9s Gomez"}),Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Generalista"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:b.length>0?function(){return n()}:null,children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Andr\xe9s Gomez"}),Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Generalista"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:b.length>0?function(){return n()}:null,children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Andr\xe9s Gomez"}),Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Generalista"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:b.length>0?function(){return n()}:null,children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]})]})]})]})};var E=function(){var e=window.CSRF_TOKEN;return Object(o.jsx)("div",{className:"notworking-form",children:Object(o.jsxs)("form",{method:"post",className:"form-input",children:[Object(o.jsx)("input",{name:"csrfmiddlewaretoken",value:e,hidden:!0}),Object(o.jsx)("input",{className:"inputext",type:"text",name:"username",placeHolder:"Feriado",required:!0}),Object(o.jsx)("input",{className:"inputdate",type:"date",name:"username",required:!0}),Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-check-lg"})})]})})};c(53);var M=function(){var e=g(),t=Object(O.a)(e,2),c=t[0],s=t[1];return Object(o.jsxs)("div",{className:"notworking",children:[Object(o.jsx)(f,{}),c?Object(o.jsx)(E,{}):null,Object(o.jsx)("button",{className:"btn btn-outline-success new-entry",onClick:function(){return s()},children:c?Object(o.jsx)("i",{class:"bi bi-x"}):Object(o.jsx)("i",{class:"bi bi-plus"})}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"th-name",scope:"col",children:"Feriados"}),Object(o.jsx)("th",{className:"th-option",scope:"col",children:"Opciones"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"25 de Mayo"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return s()},children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"20 de Junio"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return s()},children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"9 de Julio"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return s()},children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]})]})]})]})};var D=function(){var e=window.CSRF_TOKEN;return Object(o.jsx)("div",{className:"licences-form",children:Object(o.jsxs)("form",{method:"post",className:"form-input",children:[Object(o.jsx)("input",{name:"csrfmiddlewaretoken",value:e,hidden:!0}),Object(o.jsx)("input",{className:"Inputext",type:"text",name:"username",placeHolder:"Nombre de la licencia",required:!0}),Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-check-lg"})})]})})};c(54);var F=function(){var e=g(),t=Object(O.a)(e,2),c=t[0],s=t[1];return Object(o.jsxs)("div",{className:"licences",children:[Object(o.jsx)(f,{}),c?Object(o.jsx)(D,{}):null,Object(o.jsx)("button",{className:"btn btn-outline-success new-entry",onClick:function(){return s()},children:c?Object(o.jsx)("i",{class:"bi bi-x"}):Object(o.jsx)("i",{class:"bi bi-plus"})}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"th-name",scope:"col",children:"Licencias"}),Object(o.jsx)("th",{className:"th-option",scope:"col",children:"Opciones"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Art\xedculo 42"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return s()},children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Art\xedculo 32"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return s()},children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"td-name",scope:"row",children:"Art\xedculo 43"}),Object(o.jsxs)("td",{className:"td-option",children:[Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return s()},children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})})," ",Object(o.jsx)("button",{className:"btn btn-outline-success",children:Object(o.jsx)("i",{class:"bi bi-trash"})})]})]})]})]})]})};var I=function(){return Object(o.jsx)("div",{})};var T=function(){return Object(o.jsxs)(a.a,{children:[Object(o.jsx)(N,{}),Object(o.jsx)(j.a,{render:function(e){var t=e.location;return Object(o.jsx)(r.a,{children:Object(o.jsx)(b.a,{timeout:450,classNames:"fade",children:Object(o.jsxs)(j.c,{location:t,children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:I}),Object(o.jsx)(j.a,{exact:!0,path:"/inputs",component:u}),Object(o.jsx)(j.a,{exact:!0,path:"/departments",component:k}),Object(o.jsx)(j.a,{exact:!0,path:"/licences",component:F}),Object(o.jsx)(j.a,{exact:!0,path:"/notworking",component:M}),Object(o.jsx)(j.a,{exact:!0,path:"/services",component:w}),Object(o.jsx)(j.a,{exact:!0,path:"/guard",component:y}),Object(o.jsx)(j.a,{exact:!0,path:"/personal",component:G}),Object(o.jsx)(j.a,{exact:!0,component:x})]})},t.key)})}})]})};var P=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(T,{})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),i(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root")),A()}},[[55,1,2]]]);
//# sourceMappingURL=main.e2888486.chunk.js.map