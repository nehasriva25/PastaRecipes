(this["webpackJsonppasta-recipes"]=this["webpackJsonppasta-recipes"]||[]).push([[0],{27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(19),i=a.n(c),s=(a(27),a(2)),o=a(9),l=a.n(o),r=a(0);var u=function(e){var t=e.className,a=e.title,n=e.onClick,c=e.onMouseEnter,i=e.onMouseLeave;return Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:n,onMouseEnter:c,onMouseLeave:i,className:t,children:a})})},p=a(12),d=[{id:1,name:"Shaped",path:"/shaped"},{id:2,name:"Stuffed",path:"./stuffed"},{id:3,name:"Soup",path:"./soup"},{id:4,name:"Tubular",path:"./tubular"},{id:5,name:"Strand",path:"./strand"},{id:6,name:"Ribbon",path:"./ribbon"}];var j=function(e){var t=e.showMenu,a=Object(n.useState)({showMenu:t}),c=Object(s.a)(a,2);return c[0],c[1],Object(r.jsx)("div",{children:Object(r.jsx)("ul",{className:l.a.dropdownMenu,children:d.map((function(e){return Object(r.jsx)("li",{className:l.a.dropdownLink,children:Object(r.jsxs)(p.b,{to:e.path,children:[" ",Object(r.jsx)(u,{className:l.a.dropdownbtn,title:e.name})]})},e.id)}))})})};var m=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(r.jsx)("div",{className:l.a.main,children:Object(r.jsxs)("nav",{className:l.a.navBar,children:[Object(r.jsx)("div",{className:l.a.home,children:Object(r.jsx)(p.b,{to:"/",children:Object(r.jsx)(u,{className:l.a.btn,title:"Home"})})}),Object(r.jsx)("ul",{className:l.a.bigBoy,children:Object(r.jsxs)("li",{className:l.a.menuItem,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[Object(r.jsx)(u,{className:a?l.a.subMenuBtnWMenu:l.a.subMenuBtn,title:"Explore the Types of Pasta"}),a?Object(r.jsx)(j,{showMenu:a}):""]})})]})})},b=[{id:"",name:"Radiatori",imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Radiatori.jpg/330px-Radiatori.jpg"},{id:"",name:"Conchiglie",imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Conchiglie_rigate.png/375px-Conchiglie_rigate.png"},{id:"",name:"Fusilli",imageURL:"https://www.the-pasta-project.com/wp-content/uploads/2017/10/Fusilli-pasta-4-640x433.jpg"}],f=[{name:"Agnolotti",imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Agnolotti2.jpg/330px-Agnolotti2.jpg"},{name:"Tortellini",imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Tortellini_Bolognesi.jpg/1200px-Tortellini_Bolognesi.jpg"}],g=[{name:"Israeli Couscous",imageURL:"http://abcdsofcooking.com/wp-content/uploads/2013/10/Israeli-couscous.jpg"},{name:"Orzo",imageURL:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2019%2F05%2Fgettyimages-694041856-2000.jpg&q=85"}],h=[{name:"Garganelli",imageURL:"https://chefsmandala.com/wp-content/uploads/2018/02/Garganelli-Pasta-shutterstock_273321221.jpg"},{name:"Macaroni",imageURL:"https://www.simplyrecipes.com/thmb/fBMHARoX5g53ZlptqLt1XfPjvr0=/1800x1229/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__10__quick-mac-cheese-horiz-a-1800-2086266fbc1b48a28a575b793d2926fd.jpg"}],O=[{name:"Vermicelli",imageURL:"https://delightfulplate.com/wp-content/uploads/2017/11/Vietnamese-vermicelli-noodles-Bun-2.jpg"},{name:"Capellini",imageURL:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/18/0/BX1302H_Lemon-Capellini_s4x3.jpg.rend.hgtvcom.616.462.suffix/1495125457563.jpeg"}],x=[{name:"Lasagne",imageURL:"https://sharethepasta.org/wp-content/uploads/2018/08/npa_LASAGNA_H_CORRECTED.jpg"},{name:"Linguine",imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Linguine.jpg/1200px-Linguine.jpg"}];var v=function(){return Object(r.jsx)("div",{className:"home-body",style:{backgroundImage:"url(https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhc3RhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)",backgroundRepeat:"no-repeat",height:"90vh",width:"100vw",backgroundSize:"cover"},children:Object(r.jsx)("h1",{className:"home-text",children:"Discover the Pasta-bilities of Pasta"})})},_=a(5),k=a.n(_),N=a(10),w=a(11),y=a(22);var L=function(e){var t=e.recipeData,a=e.onExitClick,n=t.label,c=t.image,i=t.url;return Object(r.jsxs)("div",{className:"recipe-card",children:[Object(r.jsx)("div",{className:"recipe-img",children:Object(r.jsx)("img",{src:c,alt:n,className:"pastaImg"})}),Object(r.jsx)("div",{className:"card-title",children:Object(r.jsx)("p",{children:n})}),Object(r.jsx)("div",{children:Object(r.jsx)("a",{href:i,children:Object(r.jsx)(u,{className:"recipebtn",title:"Get Recipe"})})}),Object(r.jsx)("div",{className:"exit",children:Object(r.jsx)(y.a,{onClick:a})})]})};var S=function(e){var t=e.pastaName,a=e.pastaIMG,n=e.onClick;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-img",children:Object(r.jsx)("img",{src:a,alt:t,className:"pastaImg"})}),Object(r.jsx)("div",{className:"card-title",children:Object(r.jsx)("p",{children:t})}),Object(r.jsx)("div",{children:Object(r.jsx)(u,{className:"pastabtn",title:"Get Recipe",onClick:n})})]})};var R=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),o=Object(s.a)(i,2),l=o[0],u=o[1],p=Object(n.useState)(!0),d=Object(s.a)(p,2),j=d[0],m=d[1];function f(){return(f=Object(N.a)(k.a.mark((function e(t){var n,i,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"24334bda","169e84653549d1ec134f8146970e2437",n="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(t,"&app_id=").concat("24334bda","&app_key=").concat("169e84653549d1ec134f8146970e2437","&imageSize=LARGE&random=false&field=label&field=image&field=url"),e.next=5,fetch(n);case 5:return i=e.sent,e.next=8,i.json();case 8:s=e.sent,console.log("getting meals for"),console.log(t),m(!0),c(s.hits[0].recipe),console.log(a);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return b.map((function(e,t){return Object(w.a)({id:t},e)})),Object(n.useEffect)((function(){console.log("using useState"),console.log({clickedPasta:l})})),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"page-body",children:[j?a&&Object(r.jsx)("div",{className:"recipe-section",children:Object(r.jsx)(L,{recipeData:a,onExitClick:function(){c(null),m(!j)}})}):"",b.map((function(e){return Object(r.jsx)(S,{pastaName:e.name,pastaIMG:e.imageURL,onClick:function(t){u(e.name),function(e){f.apply(this,arguments)}(e.name)}})}))]})})};var M=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),o=Object(s.a)(i,2),l=o[0],u=o[1],p=Object(n.useState)(!0),d=Object(s.a)(p,2),j=d[0],m=d[1];function b(){return(b=Object(N.a)(k.a.mark((function e(t){var n,i,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"24334bda","169e84653549d1ec134f8146970e2437",n="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(t,"&app_id=").concat("24334bda","&app_key=").concat("169e84653549d1ec134f8146970e2437","&imageSize=LARGE&random=false&field=label&field=image&field=url"),e.next=5,fetch(n);case 5:return i=e.sent,e.next=8,i.json();case 8:s=e.sent,console.log("getting meals for"),console.log(t),m(!0),c(s.hits[0].recipe),console.log(a);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return x.map((function(e,t){return Object(w.a)({id:t},e)})),Object(n.useEffect)((function(){console.log("using useState"),console.log({clickedPasta:l})})),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"page-body",children:[j?a&&Object(r.jsx)("div",{className:"recipe-section",children:Object(r.jsx)(L,{recipeData:a,onExitClick:function(){c(null),m(!j)}})}):"",x.map((function(e){return Object(r.jsx)(S,{pastaName:e.name,pastaIMG:e.imageURL,onClick:function(t){u(e.name),function(e){b.apply(this,arguments)}(e.name)}})}))]})})};var C=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),o=Object(s.a)(i,2),l=o[0],u=o[1],p=Object(n.useState)(!0),d=Object(s.a)(p,2),j=d[0],m=d[1];function b(){return(b=Object(N.a)(k.a.mark((function e(t){var n,i,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"24334bda","169e84653549d1ec134f8146970e2437",n="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(t,"&app_id=").concat("24334bda","&app_key=").concat("169e84653549d1ec134f8146970e2437","&imageSize=LARGE&random=false&field=label&field=image&field=url"),e.next=5,fetch(n);case 5:return i=e.sent,e.next=8,i.json();case 8:s=e.sent,console.log("getting meals for"),console.log(t),m(!0),c(s.hits[0].recipe),console.log(a);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return g.map((function(e,t){return Object(w.a)({id:t},e)})),Object(n.useEffect)((function(){console.log("using useState"),console.log({clickedPasta:l})})),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"page-body",children:[j?a&&Object(r.jsx)("div",{className:"recipe-section",children:Object(r.jsx)(L,{recipeData:a,onExitClick:function(){c(null),m(!j)}})}):"",g.map((function(e){return Object(r.jsx)(S,{pastaName:e.name,pastaIMG:e.imageURL,onClick:function(t){u(e.name),function(e){b.apply(this,arguments)}(e.name)}})}))]})})};var E=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),o=Object(s.a)(i,2),l=o[0],u=o[1],p=Object(n.useState)(!0),d=Object(s.a)(p,2),j=d[0],m=d[1];function b(){return(b=Object(N.a)(k.a.mark((function e(t){var n,i,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"24334bda","169e84653549d1ec134f8146970e2437",n="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(t,"&app_id=").concat("24334bda","&app_key=").concat("169e84653549d1ec134f8146970e2437","&imageSize=LARGE&random=false&field=label&field=image&field=url"),e.next=5,fetch(n);case 5:return i=e.sent,e.next=8,i.json();case 8:s=e.sent,console.log("getting meals for"),console.log(t),m(!0),c(s.hits[0].recipe),console.log(a);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return O.map((function(e,t){return Object(w.a)({id:t},e)})),Object(n.useEffect)((function(){console.log("using useState"),console.log({clickedPasta:l})})),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"page-body",children:[j?a&&Object(r.jsx)("div",{className:"recipe-section",children:Object(r.jsx)(L,{recipeData:a,onExitClick:function(){c(null),m(!j)}})}):"",O.map((function(e){return Object(r.jsx)(S,{pastaName:e.name,pastaIMG:e.imageURL,onClick:function(t){u(e.name),function(e){b.apply(this,arguments)}(e.name)}})}))]})})};var B=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),o=Object(s.a)(i,2),l=o[0],u=o[1],p=Object(n.useState)(!0),d=Object(s.a)(p,2),j=d[0],m=d[1];function b(){return(b=Object(N.a)(k.a.mark((function e(t){var n,i,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"24334bda","169e84653549d1ec134f8146970e2437",n="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(t,"&app_id=").concat("24334bda","&app_key=").concat("169e84653549d1ec134f8146970e2437","&imageSize=LARGE&random=false&field=label&field=image&field=url"),e.next=5,fetch(n);case 5:return i=e.sent,e.next=8,i.json();case 8:s=e.sent,console.log("getting meals for"),console.log(t),m(!0),c(s.hits[0].recipe),console.log(a);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return f.map((function(e,t){return Object(w.a)({id:t},e)})),Object(n.useEffect)((function(){console.log("using useState"),console.log({clickedPasta:l})})),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"page-body",children:[j?a&&Object(r.jsx)("div",{className:"recipe-section",children:Object(r.jsx)(L,{recipeData:a,onExitClick:function(){c(null),m(!j)}})}):"",f.map((function(e){return Object(r.jsx)(S,{pastaName:e.name,pastaIMG:e.imageURL,onClick:function(t){u(e.name),function(e){b.apply(this,arguments)}(e.name)}})}))]})})};var G=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),o=Object(s.a)(i,2),l=o[0],u=o[1],p=Object(n.useState)(!0),d=Object(s.a)(p,2),j=d[0],m=d[1];function b(){return(b=Object(N.a)(k.a.mark((function e(t){var n,i,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"24334bda","169e84653549d1ec134f8146970e2437",n="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(t,"&app_id=").concat("24334bda","&app_key=").concat("169e84653549d1ec134f8146970e2437","&imageSize=LARGE&random=false&field=label&field=image&field=url"),e.next=5,fetch(n);case 5:return i=e.sent,e.next=8,i.json();case 8:s=e.sent,console.log("getting meals for"),console.log(t),m(!0),c(s.hits[0].recipe),console.log(a);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return h.map((function(e,t){return Object(w.a)({id:t},e)})),Object(n.useEffect)((function(){console.log("using useState"),console.log({clickedPasta:l})})),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"page-body",children:[j?a&&Object(r.jsx)("div",{className:"recipe-section",children:Object(r.jsx)(L,{recipeData:a,onExitClick:function(){c(null),m(!j)}})}):"",h.map((function(e){return Object(r.jsx)(S,{pastaName:e.name,pastaIMG:e.imageURL,onClick:function(t){u(e.name),function(e){b.apply(this,arguments)}(e.name)}})}))]})})},U=a(3);var A=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(m,{}),Object(r.jsxs)(U.c,{children:[Object(r.jsx)(U.a,{path:"/",exact:!0,children:Object(r.jsx)(v,{})}),Object(r.jsx)(U.a,{path:"/shaped",children:Object(r.jsx)(R,{})}),Object(r.jsx)(U.a,{path:"/stuffed",children:Object(r.jsx)(B,{})}),Object(r.jsx)(U.a,{path:"/tubular",children:Object(r.jsx)(G,{})}),Object(r.jsx)(U.a,{path:"/ribbon",children:Object(r.jsx)(M,{})}),Object(r.jsx)(U.a,{path:"/soup",children:Object(r.jsx)(C,{})}),Object(r.jsx)(U.a,{path:"/strand",children:Object(r.jsx)(E,{})})]})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};i.a.render(Object(r.jsx)(p.a,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),F()},9:function(e,t,a){e.exports={bigBoy:"Navigation_bigBoy__1Ecfc",navBar:"Navigation_navBar__2aM_u",btn:"Navigation_btn__3TMPu",menuItem:"Navigation_menuItem__iFAzQ",subMenuBtn:"Navigation_subMenuBtn__3vg4G",subMenuBtnWMenu:"Navigation_subMenuBtnWMenu__3wA3_",dropdownMenu:"Navigation_dropdownMenu__16LBo",dropdownLink:"Navigation_dropdownLink__370iF",dropdownbtn:"Navigation_dropdownbtn__2dRsn"}}},[[35,1,2]]]);
//# sourceMappingURL=main.cbdb4559.chunk.js.map