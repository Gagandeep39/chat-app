(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);var c,a=n(0),o=n.n(a),i=n(45),r=n.n(i),s=(n(53),n(20)),j=n(2),u=n(15),l=n(46),O=n.n(l),b=n(47),d=n.n(b),h=(n(90),n(1)),p=function(t){var e=t.location,n=Object(a.useState)(""),o=Object(u.a)(n,2),i=(o[0],o[1]),r=Object(a.useState)(""),s=Object(u.a)(r,2),j=(s[0],s[1]),l=Object({NODE_ENV:"production",PUBLIC_URL:"/chat-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_URL||"localhost:5000";return Object(a.useEffect)((function(){var t=O.a.parse(e.search),n=t.name,a=t.room;return c=d()(l),i(n),j(a),c.emit("join",{name:n,room:a},(function(t){console.log(t)})),function(){c.emit("disconnect"),c.off()}}),[e,l]),Object(h.jsx)("div",{children:"Chat Component"})},m=(n(92),function(){var t=Object(a.useState)(""),e=Object(u.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),r=i[0],j=i[1];return Object(h.jsx)("div",{className:"joinOuterContainer",children:Object(h.jsxs)("div",{className:"joinInnerContainer",children:[Object(h.jsx)("h1",{className:"heading",children:"Join"}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(t){return c(t.target.value)}})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(t){return j(t.target.value)}})}),Object(h.jsx)(s.b,{to:"chat?name=".concat(n,"&room=").concat(r),onClick:function(t){return n&&r?null:t.preventDefault()},children:Object(h.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})});var x=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(j.a,{path:"/",component:m}),Object(h.jsx)(j.a,{path:"/chat",exact:!0,component:p})]})})};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))},53:function(t,e,n){},90:function(t,e,n){},92:function(t,e,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.fcd6521f.chunk.js.map