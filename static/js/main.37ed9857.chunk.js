(this["webpackJsonpwebsite-ver-2"]=this["webpackJsonpwebsite-ver-2"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),o=c(8),i=c.n(o);var r=function(){var e=document.getElementById("header"),t=document.getElementById("showcase"),c=document.getElementById("header-img"),s=document.getElementById("header-text"),n=document.getElementById("dropdown-open");if(null!==t){var o=(document.documentElement.scrollTop||document.body.scrollTop)/(window.innerHeight/3);t.style.backgroundColor="rgba(26, 26, 26, "+o+")",s.style.color="rgb("+255*o+","+255*o+","+255*o+")",n.style.color="rgb("+255*o+","+255*o+","+255*o+")",o>=1?(c.classList.remove("hidden"),s.classList.remove("hidden"),e.style.backgroundColor="rgba(26, 26, 26, 1)"):(c.classList.add("hidden"),s.classList.add("hidden"),e.style.backgroundColor="rgba(26, 26, 26, 0)")}};var a=function(){var e=document.getElementById("header-text"),t=document.getElementById("dropdown-open"),c=window.location.hash,s=document.documentElement.scrollTop||document.body.scrollTop,n=window.innerHeight/3,o=s/n;"#/"!==c&&""!==c?(e.style.color="rgb(255, 255, 255)",t.style.color="rgb(255, 255, 255)"):s<n?(e.style.color="rgb("+255*o+","+255*o+","+255*o+")",t.style.color="rgb("+255*o+","+255*o+","+255*o+")"):(e.style.color="rgb(255, 255, 255)",t.style.color="rgb(255, 255, 255)")},d=c(4),j=c(2),l=c(5),h=c.p+"static/media/profile-picture-header.a822eefd.jpg",b=c(0);var m=function(e){return Object(s.useEffect)((function(){"/"!==e.location.pathname?e.setHome(!1):e.setHome(!0),window.scrollTo(0,0)})),Object(b.jsx)("div",{id:"header",className:"header",onClick:function(){return a()},style:e.home?{}:{backgroundColor:"#1A1A1A"},children:Object(b.jsxs)(l.b,{to:"/",children:[Object(b.jsx)("img",{id:"header-img",className:e.home?"header-img hidden":"header-img",src:h,alt:"profile"}),Object(b.jsxs)("h1",{id:"header-text",className:e.home?"header-text hidden":"header-text",children:["Joe Owen",Object(b.jsx)("span",{children:".ca"})]})]})})};var u=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(b.jsxs)(b.Fragment,{children:[c?Object(b.jsxs)("div",{onClick:function(){return a()},className:"nav-menu",children:[Object(b.jsx)("div",{className:"dropdown-menu",id:"dropdown-close",onClick:function(){return n(!c)}}),Object(b.jsxs)("div",{className:"nav-options",onClick:function(){return n(!c)},children:[Object(b.jsx)("h2",{children:Object(b.jsx)(l.b,{to:"/",children:"Home"})}),Object(b.jsx)("h2",{children:Object(b.jsx)(l.b,{to:"/photography",children:"Photography"})}),Object(b.jsx)("h2",{children:Object(b.jsx)(l.b,{to:"/videos",children:"Videos"})}),Object(b.jsx)("h2",{children:Object(b.jsx)(l.b,{to:"/music",children:"Music"})}),Object(b.jsx)("h2",{children:Object(b.jsx)(l.b,{to:"/projects",children:"Projects"})}),Object(b.jsxs)("div",{className:"social-links",children:[Object(b.jsx)("div",{className:"instagram"}),Object(b.jsx)("div",{className:"youtube"}),Object(b.jsx)("div",{className:"soundcloud"}),Object(b.jsx)("div",{className:"linkedin"})]})]})]}):"",Object(b.jsx)("div",{className:c?"dropdown-menu hidden":"dropdown-menu",id:"dropdown-open",onClick:function(){return n(!c)}})]})};var x=function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("p",{className:"contact",children:"Email: joe.a.owen@gmail.com"})})},O=c.p+"static/media/landscape-showcase.fc52b89d.jpg",p=c.p+"static/media/portrait-showcase.7d8d14c9.jpg",g=c.p+"static/media/automotive-showcase.9d4005d4.jpg",v=c.p+"static/media/mtb-showcase.dbe29097.jpg",w=c.p+"static/media/ski-showcase.ebbf570f.jpg";var f=function(){return Object(b.jsxs)("div",{id:"showcase",className:"showcase",children:[Object(b.jsx)("h1",{children:"Photography"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"photography-showcase",children:[Object(b.jsx)("img",{className:"img-showcase landscapes",src:O}),Object(b.jsx)("h2",{children:"Landscapes"}),Object(b.jsx)("p",{children:"Usually out for nature walks and bring my camera with me. Snap some pics along the way."}),Object(b.jsx)("br",{}),Object(b.jsx)("img",{className:"img-showcase portraits",src:p}),Object(b.jsx)("h2",{children:"Potraits"}),Object(b.jsx)("p",{children:"Hanging out with friends, randomly take pictures of them. Turns out for some real candid lookin pics."}),Object(b.jsx)("br",{}),Object(b.jsx)("img",{className:"img-showcase automotive",src:g}),Object(b.jsx)("h2",{children:"Automotive"}),Object(b.jsx)("p",{children:"Many of my friends are into cars, so naturally I began taking pictures of their cars and got really into it. Met lots of people in the car community through photography and have been able to share my pictures with lots of other drivers."})]}),Object(b.jsx)("h1",{children:"Videos"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"videos-showcase",children:[Object(b.jsx)("img",{className:"mtb-showcase-img",src:v}),Object(b.jsx)("h2",{children:"Mountain biking"}),Object(b.jsx)("p",{children:"Mountain biking videos"}),Object(b.jsx)("br",{}),Object(b.jsx)("img",{className:"ski-showcase-img",src:w}),Object(b.jsx)("h2",{children:"Skiing"}),Object(b.jsx)("p",{children:"Skiing videos"}),Object(b.jsx)("br",{})]})]})};var y=function(){return Object(b.jsxs)("div",{id:"intro",className:"intro",children:[Object(b.jsx)("img",{className:"intro-home-img",src:h,alt:"intro"}),Object(b.jsx)("h1",{children:"Joe Owen"}),Object(b.jsx)("p",{className:"intro-text",children:"Welcome! This website is a place where I store all my creative work. I take pictures, make videos, and do lots of other things. Feel free to take a look around and hopefully you'll like what you see."}),Object(b.jsx)("p",{className:"intro-text",children:"Always happy to work with people, so if you're interested in partering or have any questions, you can find my email at the bottom of this page."}),Object(b.jsx)("p",{className:"scroll-to-view",children:"Scroll to view more"})]})};var N=function(){return Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h1",{children:"Photography"}),Object(b.jsx)("hr",{})]})};var k=function(){return Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h1",{children:"Videos"}),Object(b.jsx)("hr",{})]})};var E=function(){return Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h1",{children:"Music"}),Object(b.jsx)("hr",{})]})};var I=function(){return Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h1",{children:"Projects"}),Object(b.jsx)("hr",{})]})};var C=function(){var e=Object(j.e)(),t=Object(s.useState)(!1),c=Object(d.a)(t,2),n=c[0],o=c[1];return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(m,{location:e,home:n,setHome:o}),Object(b.jsx)(u,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",element:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{}),Object(b.jsx)(y,{})]})}),Object(b.jsx)(j.a,{path:"/photography",element:Object(b.jsx)(N,{})}),Object(b.jsx)(j.a,{path:"/videos",element:Object(b.jsx)(k,{})}),Object(b.jsx)(j.a,{path:"/music",element:Object(b.jsx)(E,{})}),Object(b.jsx)(j.a,{path:"/projects",element:Object(b.jsx)(I,{})})]}),Object(b.jsx)(x,{})]})};c(14),c(15),c(16),c(17),c(18),c(19);window.onload=function(){a()},document.body.onscroll=function(){r()},i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(C,{})})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.37ed9857.chunk.js.map