(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},114:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(65),i=n.n(a),r=(n(75),n(24)),j=n(2),o=n(70),l=n(13),u=n(66),m=n.n(u),d=n(67),b=n.n(d),O=(n(111),n.p+"static/media/close.85f9f2a1.svg"),h=n.p+"static/media/online.d8dcfa5b.svg",x=(n(112),n(1));var f,v=function(e){var t=e.room;return Object(x.jsxs)("div",{className:"infoBar",children:[Object(x.jsxs)("div",{className:"leftInnerContainer",children:[Object(x.jsx)("img",{src:h,className:"onlineIcon",alt:"Online"}),Object(x.jsxs)("h3",{children:[" Room: ",t," "]})]}),Object(x.jsx)("div",{className:"rightInnerContaine",children:Object(x.jsx)("a",{href:"/",children:Object(x.jsx)("img",{src:O,alt:"Close Icon"})})})]})},p=n.p+"static/media/send.26e6412b.svg",g=(n(114),function(e){var t=e.message,n=e.setMessage,s=e.sendMessage;return Object(x.jsxs)("form",{className:"form",children:[Object(x.jsx)("input",{type:"text",className:"input",placeholder:"Type a message to Send...",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?s(e):null}}),Object(x.jsx)("button",{className:"sendButton",onClick:function(e){return s(e)},children:Object(x.jsx)("img",{src:p,alt:"Send"})})]})}),N=n(68),C=n.n(N),y=n(37),S=n.n(y),I=(n(138),function(e){var t=e.message,n=t.user,s=t.text,c=e.name;console.log(n,c);var a=!1,i=c.trim().toLowerCase();return n===i&&(a=!0),a?Object(x.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(x.jsx)("p",{className:"sentText pr-10",children:i}),Object(x.jsx)("div",{className:"messageBox backgroundBlue",children:Object(x.jsxs)("p",{className:"messageText",children:[" ",S.a.emojify(s)," "]})})]}):Object(x.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(x.jsx)("div",{className:"messageBox",children:Object(x.jsxs)("p",{className:"messageText colorDark",children:[" ",S.a.emojify(s)," "]})}),Object(x.jsx)("p",{className:"sentText pl-10",children:n})]})}),k=(n(139),function(e){var t=e.messages,n=e.name;return Object(x.jsx)(C.a,{className:"messages",children:t.map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsx)(I,{message:e,name:n})},t)}))})}),B=(n(140),function(e){var t=e.users;return Object(x.jsxs)("div",{className:"textContainer",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Realtime Chat Application"}),Object(x.jsx)("h2",{children:"Created with \u2764\ufe0f"})]}),t?Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"People currently chatting"}),Object(x.jsx)("div",{className:"activeContainer",children:Object(x.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(x.jsxs)("div",{className:"activeItem",children:[t,Object(x.jsx)("img",{alt:"Online Icon",src:h})]},t)}))})})]}):null]})}),M=function(e){var t=e.location,n=Object(s.useState)(""),c=Object(l.a)(n,2),a=c[0],i=c[1],r=Object(s.useState)(""),j=Object(l.a)(r,2),u=j[0],d=j[1],O=Object(s.useState)([]),h=Object(l.a)(O,2),p=h[0],N=h[1],C=Object(s.useState)(""),y=Object(l.a)(C,2),S=y[0],I=y[1],M=Object(s.useState)([]),E=Object(l.a)(M,2),T=E[0],w=E[1],D="https://react-node-chat-server.herokuapp.com/";Object(s.useEffect)((function(){var e=m.a.parse(t.search),n=e.name,s=e.room;return f=b()(D),i(n),d(s),f.emit("join",{name:n,room:s},(function(e){console.log(e)})),function(){f.emit("disconnect"),f.off()}}),[t,D]),Object(s.useEffect)((function(){f.on("message",(function(e){w([].concat(Object(o.a)(T),[e]))})),f.on("roomData",(function(e){var t=e.users;return N(t)}))}),[T,p]);return Object(x.jsxs)("div",{className:"outerContainer",children:[Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(v,{room:u}),Object(x.jsx)(k,{messages:T,name:a}),Object(x.jsx)(g,{message:S,setMessage:I,sendMessage:function(e){e.preventDefault(),S&&f.emit("sendMessage",S,(function(){return I("")}))}})]}),Object(x.jsx)(B,{users:p})]})},E=(n(141),function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(l.a)(a,2),j=i[0],o=i[1];return Object(x.jsx)("div",{className:"joinOuterContainer",children:Object(x.jsxs)("div",{className:"joinInnerContainer",children:[Object(x.jsx)("h1",{className:"heading",children:"Join"}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return c(e.target.value)}})}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return o(e.target.value)}})}),Object(x.jsx)(r.b,{to:"/chat?name=".concat(n,"&room=").concat(j),onClick:function(e){return n&&j?null:e.preventDefault()},children:Object(x.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})});var T=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(r.a,{children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/chat",component:M}),Object(x.jsx)(j.a,{path:"/",component:E})]})})})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root"))},75:function(e,t,n){}},[[147,1,2]]]);
//# sourceMappingURL=main.c5bd9d1b.chunk.js.map