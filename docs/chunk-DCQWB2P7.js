import{$ as Z,Aa as ne,C as n,D as c,E as s,F as N,G as V,H as o,I as d,J as u,K as v,L as B,Q as A,R as j,S as G,T as J,U as T,V as L,W as R,X as z,Y as K,Z as $,_ as H,aa as q,ba as Q,c as O,ca as W,d as w,da as X,g as I,i as S,j as M,ja as k,k as y,la as Y,ma as F,n as l,r as C,s as f,u as t,ua as E,v as i,va as _,w as D,wa as ee,xa as te,ya as ie,z as b}from"./chunk-KHI5SVD6.js";var re=(()=>{let e=class e{constructor(){this.nameLower="javier",this.nameUpper="JAVIER",this.fullName="kAmInArI DenJI",this.customDate=new Date}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=S({type:e,selectors:[["products-basics-page"]],decls:85,vars:62,consts:[["header","Pipes B\xE1sicos",1,"p-2"],[1,"grid"],[1,"col","12","md:col-6","lg:col-4"],["header","uppercase"],["header","lowercase"],["header","titlecase"],["header","Plantilla de fechas | Pipe usada"],["header","Efecto de la Pipe"]],template:function(p,r){p&1&&(t(0,"p-panel",0)(1,"p"),n(2," Pipes incluidos en Angular - Usualmente incluidos en el Common Module "),i()(),t(3,"div",1)(4,"div",2)(5,"p-card",3),n(6),o(7,"uppercase"),i()(),t(8,"div",2)(9,"p-card",4),n(10),o(11,"lowercase"),i()(),t(12,"div",2)(13,"p-card",5),n(14),o(15,"titlecase"),i()(),t(16,"div",2)(17,"p-card",6)(18,"ol")(19,"li"),n(20," fecha "),i(),t(21,"li"),n(22," fecha | date "),i(),t(23,"li"),n(24," fecha | date: 'short' "),i(),t(25,"li"),n(26," fecha | date: 'long' "),i(),t(27,"li"),n(28," fecha | date: 'MMMM' "),i(),t(29,"li"),n(30," fecha | date: 'MMMM dd, yyyy' "),i()(),D(31,"hr"),t(32,"ol")(33,"li"),n(34,"fecha | date:'long':'GMT-6'"),i(),t(35,"li"),n(36,"fecha | date:'long':'GMT-4'"),i(),t(37,"li"),n(38,"fecha | date:'long':'GMT+2'"),i(),t(39,"li"),n(40,"fecha | date:'long':'':'es-PA'"),i(),t(41,"li"),n(42,"fecha | date:'long':'':'en-US'"),i(),t(43,"li"),n(44,"fecha | date:'long':'':'ja'"),i()()()(),t(45,"div",2)(46,"p-card",7)(47,"ol")(48,"li"),n(49),i(),t(50,"li"),n(51),o(52,"date"),i(),t(53,"li"),n(54),o(55,"date"),i(),t(56,"li"),n(57),o(58,"date"),i(),t(59,"li"),n(60),o(61,"date"),i(),t(62,"li"),n(63),o(64,"date"),i()(),D(65,"hr"),t(66,"ol")(67,"li"),n(68),o(69,"date"),i(),t(70,"li"),n(71),o(72,"date"),i(),t(73,"li"),n(74),o(75,"date"),i(),t(76,"li"),n(77),o(78,"date"),i(),t(79,"li"),n(80),o(81,"date"),i(),t(82,"li"),n(83),o(84,"date"),i()()()()()),p&2&&(l(6),s(" ",d(7,15,r.nameLower)," "),l(4),s(" ",d(11,17,r.nameUpper)," "),l(4),s(" ",d(15,19,r.fullName)," "),l(35),s(" ",r.customDate," "),l(2),s(" ",d(52,21,r.customDate)," "),l(3),s(" ",u(55,23,r.customDate,"short")," "),l(3),s(" ",u(58,26,r.customDate,"long")," "),l(3),s(" ",u(61,29,r.customDate,"MMMM")," "),l(3),s(" ",u(64,32,r.customDate,"MMMM dd, yyyy")," "),l(5),s(" ",v(69,35,r.customDate,"long","GMT-6")," "),l(3),s(" ",v(72,39,r.customDate,"long","GMT-4")," "),l(3),s(" ",v(75,43,r.customDate,"long","GMT+2")," "),l(3),s(" ",B(78,47,r.customDate,"long","","es-PA")," "),l(3),s(" ",B(81,52,r.customDate,"long","","en-US")," "),l(3),s(" ",B(84,57,r.customDate,"long","","ja")," "))},dependencies:[F,E,L,J,T,R]});let a=e;return a})();function ve(a,e){if(a&1&&(t(0,"li")(1,"b"),n(2),o(3,"titlecase"),i(),n(4),i()),a&2){let P=e.$implicit;l(2),s("",d(3,2,P.key),": "),l(2),s("",P.value," ")}}function he(a,e){a&1&&(t(0,"pre"),n(1,"Resolviendo observable"),i())}function Se(a,e){a&1&&(t(0,"pre"),n(1,"Resolviendo promesa"),i())}var le=(()=>{let e=class e{constructor(){this.name="Javi",this.gender="male",this.invitationMap={male:"invitarlo",female:"invitarla"},this.clients=["Maria","Javi","Pedro","Nina","Laura","Vera","Edurne","Oscar"],this.clientsMap={"=0":"no tenemos ningun cliente esperando.","=1":"tenemos 1 cliente esperando.","=2":"tenemos # personas esperando",other:"tenemos # clientes esperando."},this.person={name:"Javi",age:28,address:"Zaragoza, Espa\xF1a"},this.myObservableTimer=O(2e3).pipe(w(m=>console.log("tap",m))),this.promiseValue=new Promise((m,p)=>{setTimeout(()=>{m("Tenemos data en la promesa"),console.log("Tenemos data en la promesa")},3500)})}changeClient(){this.name="Melissa",this.gender="female"}clientLeft(){this.clients.pop()}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=S({type:e,selectors:[["products-uncommon-page"]],decls:74,vars:64,consts:[["header","Pipes no tan comunes",1,"p-2"],[1,"grid"],[1,"col","12","md:col-6"],["legend","i18nSelect Pipe",3,"toggleable"],["label","Cambiar persona",3,"click"],["legend","i18nPlural Pipe",3,"toggleable"],["label","Cliente atendido",3,"click"],["legend","Slice Pipe",3,"toggleable"],["legend","JSON Pipe",3,"toggleable"],["legend","KeyValue Pipe",3,"toggleable"],[4,"ngFor","ngForOf"],["legend","Async Pipe",3,"toggleable"],[4,"ngIf"]],template:function(p,r){p&1&&(t(0,"p-panel",0)(1,"p"),n(2," Pipes incluidos en Angular - Usualmente incluidos en el Common Module "),i()(),t(3,"div",1)(4,"div",2)(5,"p-fieldset",3)(6,"p"),n(7),o(8,"i18nSelect"),i(),t(9,"p-button",4),b("click",function(){return r.changeClient()}),i()()(),t(10,"div",2)(11,"p-fieldset",5)(12,"p"),n(13),o(14,"i18nPlural"),i(),t(15,"p-button",6),b("click",function(){return r.clientLeft()}),i()()(),t(16,"div",2)(17,"p-fieldset",7)(18,"b"),n(19,"Original"),i(),t(20,"pre"),n(21),i(),t(22,"b"),n(23,"Slice:0:2"),i(),t(24,"pre"),n(25),o(26,"slice"),i(),t(27,"b"),n(28,"Slice:1:2"),i(),t(29,"pre"),n(30),o(31,"slice"),i(),t(32,"b"),n(33,"Slice:1:3"),i(),t(34,"pre"),n(35),o(36,"slice"),i(),t(37,"b"),n(38,"Slice:3:4"),i(),t(39,"pre"),n(40),o(41,"slice"),i(),t(42,"b"),n(43,"Slice:0:-1"),i(),t(44,"pre"),n(45),o(46,"slice"),i(),t(47,"b"),n(48,"Slice:0:-1"),i(),t(49,"pre"),n(50),o(51,"slice"),i()()(),t(52,"div",2)(53,"p-fieldset",8)(54,"pre"),n(55),o(56,"json"),i()()(),t(57,"div",2)(58,"p-fieldset",9)(59,"ul"),C(60,ve,5,4,"li",10),o(61,"keyvalue"),i()()(),t(62,"div",2)(63,"p-fieldset",11),C(64,he,2,0,"pre",12),o(65,"async"),t(66,"pre"),n(67),o(68,"async"),i(),C(69,Se,2,0,"pre",12),o(70,"async"),t(71,"pre"),n(72),o(73,"async"),i()()()()),p&2&&(l(5),f("toggleable",!0),l(2),N(" Saludos ",r.name,", es un placer ",u(8,22,r.gender,r.invitationMap)," a nuestro evento "),l(4),f("toggleable",!0),l(2),s(" Actualmente ",u(14,25,r.clients.length,r.clientsMap)," "),l(4),f("toggleable",!0),l(4),c(r.clients),l(4),c(v(26,28,r.clients,0,2)),l(5),c(v(31,32,r.clients,1,2)),l(5),c(v(36,36,r.clients,1,3)),l(5),c(v(41,40,r.clients,3,4)),l(5),c(v(46,44,r.clients,0,-1)),l(5),c(v(51,48,r.clients,0,-2)),l(3),f("toggleable",!0),l(2),c(d(56,52,r.person)),l(3),f("toggleable",!0),l(2),f("ngForOf",d(61,54,r.person)),l(3),f("toggleable",!0),l(),f("ngIf",!d(65,56,r.myObservableTimer)),l(3),c(d(68,58,r.myObservableTimer)),l(2),f("ngIf",!d(70,60,r.promiseValue)),l(3),c(d(73,62,r.promiseValue)))},dependencies:[A,j,_,ee,E,G,$,W,T,z,K,H]});let a=e;return a})();var oe=(()=>{let e=class e{constructor(){this.totalSells=54382546543e-4,this.percent=.4843}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=S({type:e,selectors:[["products-number-page"]],decls:16,vars:14,consts:[["header","Pipes num\xE9ricos",1,"p-2"],[1,"grid"],[1,"col","12","md:col-6","lg:col-4"],["header","Ventas Netas","subheader","del presente a\xF1o (number pipe)"],["header","Ventas Brutas","subheader","del presente a\xF1o (currency pipe)"],["header","Ganancia porcentual","subheader","del presente a\xF1o (percent pipe)"]],template:function(p,r){p&1&&(t(0,"p-panel",0)(1,"p"),n(2," Pipes incluidos en Angular - Usualmente incluidos en el Common Module "),i()(),t(3,"div",1)(4,"div",2)(5,"p-card",3),n(6),o(7,"number"),i()(),t(8,"div",2)(9,"p-card",4),n(10),o(11,"currency"),i()(),t(12,"div",2)(13,"p-card",5),n(14),o(15,"percent"),i()()()),p&2&&(l(6),s(" ",u(7,3,r.totalSells+1235,"1.2-2")," "),l(4),s(" ",B(11,6,r.totalSells,"EUR","symbol-narrow","1.4-4")," "),l(4),s(" ",u(15,11,r.percent,"1.2-2")," "))},dependencies:[F,E,Z,q,Q]});let a=e;return a})();var x=function(a){return a[a.red=0]="red",a[a.black=1]="black",a[a.blue=2]="blue",a[a.green=3]="green",a}(x||{});var pe=(()=>{let e=class e{transform(m,p=!1){return p?m.toUpperCase():m.toLowerCase()}};e.\u0275fac=function(p){return new(p||e)},e.\u0275pipe=y({name:"toggleCase",type:e,pure:!0});let a=e;return a})();var me=(()=>{let e=class e{transform(m){return m?"Vuela":"No Vuela"}};e.\u0275fac=function(p){return new(p||e)},e.\u0275pipe=y({name:"canFly",type:e,pure:!0});let a=e;return a})();var se=(()=>{let e=class e{transform(m,p){switch(p){case"name":return m.sort((r,g)=>r.name>g.name?1:-1);case"canFly":return m.sort((r,g)=>r.canFly>g.canFly?1:-1);case"color":return m.sort((r,g)=>r.color>g.color?1:-1);default:return m}}};e.\u0275fac=function(p){return new(p||e)},e.\u0275pipe=y({name:"sortBy",type:e,pure:!0});let a=e;return a})();var de=(()=>{let e=class e{transform(m){return m===0?"Red":m===1?"Black":m===2?"Blue":"Green"}};e.\u0275fac=function(p){return new(p||e)},e.\u0275pipe=y({name:"color",type:e,pure:!0});let a=e;return a})();var Pe=()=>({"min-width":"50rem"});function Ce(a,e){a&1&&(t(0,"tr")(1,"th"),n(2,"Nombre"),i(),t(3,"th"),n(4,"Vuela"),i(),t(5,"th"),n(6,"Color"),i()())}function Be(a,e){if(a&1&&(t(0,"tr")(1,"td"),n(2),i(),t(3,"td"),n(4),o(5,"canFly"),i(),t(6,"td"),n(7),o(8,"color"),i()()),a&2){let P=e.$implicit;l(2),c(P.name),l(2),c(d(5,3,P.canFly)),l(3),c(d(8,5,P.color))}}var ce=(()=>{let e=class e{constructor(){this.isUpperCase=!1,this.heroes=[{name:"Superman",canFly:!0,color:x.blue},{name:"Batman",canFly:!1,color:x.black},{name:"Flash",canFly:!1,color:x.red},{name:"Daredevil",canFly:!1,color:x.red},{name:"Robin",canFly:!1,color:x.green},{name:"Shazam",canFly:!0,color:x.red}]}toggleUpperCase(){this.isUpperCase=!this.isUpperCase}changeOrder(m){this.orderBy=m}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=S({type:e,selectors:[["products-order"]],decls:18,vars:10,consts:[["header","Pipes Personalizados",1,"p-2"],[1,"p-toolbar-group-start"],["label","ToogleCase","icon","pi pi-search",1,"mr-2",3,"click"],[1,"p-toolbar-group-end"],["label","Por nombre","icon","pi pi-sort","styleClass","p-button-success",1,"mr-2",3,"click"],["label","Por volar","icon","pi pi-sort","styleClass","p-button-danger",1,"mr-2",3,"click"],["label","Por color","icon","pi pi-upload","styleClass","p-button-help",1,"mr-2",3,"click"],[1,"grid"],[1,"col","mt-2"],["header","Heroes"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"]],template:function(p,r){p&1&&(t(0,"p-panel",0)(1,"p"),n(2),o(3,"toggleCase"),i()(),t(4,"p-toolbar")(5,"div",1)(6,"p-button",2),b("click",function(){return r.toggleUpperCase()}),i()(),t(7,"div",3)(8,"p-button",4),b("click",function(){return r.changeOrder("name")}),i(),t(9,"p-button",5),b("click",function(){return r.changeOrder("canFly")}),i(),t(10,"p-button",6),b("click",function(){return r.changeOrder("color")}),i()()(),t(11,"div",7)(12,"div",8)(13,"p-panel",9)(14,"p-table",10),o(15,"sortBy"),C(16,Ce,7,0,"ng-template",11)(17,Be,9,7,"ng-template",12),i()()()()),p&2&&(l(2),s("Pipes personalizados - Creados por ",u(3,3,"NoSoTrOs",r.isUpperCase),""),l(12),f("value",u(15,6,r.heroes,r.orderBy))("tableStyle",V(9,Pe)))},dependencies:[_,Y,E,te,ie,pe,me,se,de]});let a=e;return a})();var Ie=[{path:"",component:re},{path:"numbers",component:oe},{path:"uncommon",component:le},{path:"custom",component:ce},{path:"**",redirectTo:""}],ue=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=M({type:e}),e.\u0275inj=I({imports:[k.forChild(Ie),k]});let a=e;return a})();var mt=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=M({type:e}),e.\u0275inj=I({imports:[X,ue,ne]});let a=e;return a})();export{mt as ProductsModule};
