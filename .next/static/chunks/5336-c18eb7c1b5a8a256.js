"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5336],{5336:function(e,n,t){t.r(n);var r=t(4051),i=t.n(r),s=t(5893),l=t(9669),a=t.n(l),o=t(7294),c=t(7479);function d(e,n,t,r,i,s,l){try{var a=e[s](l),o=a.value}catch(c){return void t(c)}a.done?n(o):Promise.resolve(o).then(r,i)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function l(e){d(s,r,i,l,a,"next",e)}function a(e){d(s,r,i,l,a,"throw",e)}l(void 0)}))}}n.default=function(e){var n=e.info,t=(0,o.useState)(""),r=t[0],l=t[1],d=(0,o.useState)(""),p=d[0],h=d[1],x=(0,o.useState)(""),f=x[0],m=x[1],g=(0,o.useState)(""),v=g[0],j=g[1],y=(0,o.useState)(""),w=y[0],b=y[1],k=(0,o.useState)(!1),C=k[0],S=k[1],T=(0,o.useState)(""),A=T[0],N=T[1],_=(0,o.useState)(!1),D=_[0],E=_[1],F=(0,o.useContext)(c.Z).Api,M=function(){var e=u(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t={username:p,roll:v,email:f,password:w},S(!0),e.prev=3,e.next=6,a().post("".concat(F,"/auth/signup"),t,{withCredentials:!0}).then((function(e){e.data.errMessage&&(N(e.data.errMessage),S(!1)),e.data.message&&(alert(e.data.message),S(!1),l(""))}));case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(n){return e.apply(this,arguments)}}(),z=function(){var e=u(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={username:p,id:n.find[0]._id,password:w},S(!0),e.prev=3,e.next=6,a().put("".concat(F,"/auth/editAdmin"),r,{withCredentials:!0}).then((function(e){e.data.errMessage&&(N(e.data.errMessage),S(!1)),e.data.message&&(alert(e.data.message),S(!1),l(""))}));case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{style:{zIndex:"12"},children:n&&(0,s.jsxs)("div",{style:{width:"100%",display:"flex",marginTop:"100px",flexFlow:"column",alignItems:"center",justifyContent:"space-evenly"},children:[r&&(0,s.jsx)("div",{onClick:function(){return l("")},id:"backDrop",children:"hello"}),D&&(0,s.jsx)("div",{onClick:function(){return E("")},id:"backDrop",children:"hello"}),"newAdmin"===r&&(0,s.jsxs)("div",{className:"change-profile",children:[(0,s.jsxs)("h1",{style:{height:"10%",pointerEvents:"all"},children:["\u0627\u062f\u0645\u06cc\u0646 \u062c\u062f\u06cc\u062f",(0,s.jsx)("img",{onClick:function(){return l("")},style:{width:"20px",opacity:"0.7",position:"absolute",left:"-10px",top:"0px",cursor:"pointer"},src:"/images/cancel.png",alt:"cancel"})]}),(0,s.jsxs)("form",{style:{height:"90%"},children:[(0,s.jsx)("div",{style:{width:"70%",marginTop:"20px"},children:(0,s.jsx)("input",{style:{direction:"rtl"},placeholder:"\u0646\u0627\u0645",onChange:function(e){return h(e.target.value)}})}),(0,s.jsx)("div",{style:{width:"70%",marginTop:"20px"},children:(0,s.jsx)("input",{style:{direction:"rtl"},placeholder:"\u0627\u06cc\u0645\u06cc\u0644",onChange:function(e){return m(e.target.value)}})}),(0,s.jsx)("div",{style:{width:"70%",marginTop:"20px"},children:(0,s.jsxs)("select",{style:{padding:"10px 20px",cursor:"pointer",border:"1px solid grey",borderRadius:"20px"},onChange:function(e){return j(e.target.value)},children:[(0,s.jsx)("option",{value:"",children:"roll"}),(0,s.jsx)("option",{value:"master",children:"master"}),(0,s.jsx)("option",{value:"poster",children:"poster"}),(0,s.jsx)("option",{value:"ceo",children:"Ceo"}),(0,s.jsx)("option",{value:"support",children:"support"})]})}),(0,s.jsx)("div",{style:{width:"70%",height:"80px",marginTop:"20px"},children:(0,s.jsx)("input",{style:{direction:"rtl"},placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",onChange:function(e){return b(e.target.value)}})}),A&&(0,s.jsx)("p",{style:{color:"red",fontSize:"12px",marginBottom:"-15px",marginTop:"-20px"},children:A}),(0,s.jsx)("button",{style:{background:"#03a9f4"},onClick:M,disabled:C,children:"\u062b\u0628\u062a"})]})]}),!0===D&&(0,s.jsxs)("div",{className:"change-profile",children:[(0,s.jsxs)("h1",{style:{height:"10%",pointerEvents:"all"},children:[" \u0648\u06cc\u0631\u0627\u06cc\u0634 \u067e\u0631\u0648\u0641\u0627\u06cc\u0644",(0,s.jsx)("img",{onClick:function(){return E(!1)},style:{width:"20px",opacity:"0.7",position:"absolute",left:"-10px",top:"0px",cursor:"pointer"},src:"/images/cancel.png",alt:"cancel"})]}),(0,s.jsxs)("form",{style:{height:"90%"},children:[(0,s.jsx)("div",{style:{width:"70%",marginTop:"20px"},children:(0,s.jsx)("input",{style:{direction:"rtl"},placeholder:"\u0646\u0627\u0645 \u062c\u062f\u06cc\u062f",onChange:function(e){return h(e.target.value)}})}),(0,s.jsx)("div",{style:{width:"70%",height:"80px",marginTop:"20px"},children:(0,s.jsx)("input",{style:{direction:"rtl"},placeholder:" \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f",onChange:function(e){return b(e.target.value)}})}),A&&(0,s.jsx)("p",{style:{color:"red",fontSize:"12px",marginBottom:"-15px",marginTop:"-20px"},children:A}),(0,s.jsx)("button",{style:{background:"#03a9f4"},onClick:z,disabled:C,children:"\u062b\u0628\u062a \u0648\u06cc\u0631\u0627\u06cc\u0634"})]})]}),(0,s.jsxs)("div",{className:"admin-profile",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:"/uploads/users.png",alt:""}),(0,s.jsxs)("label",{style:{display:"flex",flexFlow:"column"},children:[(0,s.jsxs)("h1",{children:[n&&n.find[0].username," \u062e\u0648\u0634 \u0622\u0645\u062f\u06cc\u062f !"]}),(0,s.jsxs)("p",{style:{opacity:"0.8"},children:[" \u0627\u06cc\u0645\u06cc\u0644 :",n.email," "]})]})]}),(0,s.jsxs)("div",{style:{width:"30%",flexFlow:"column",alignItems:"center"},children:[(0,s.jsx)("button",{style:{background:"#4caf50"},onClick:function(){E(!0)},children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u067e\u0631\u0648\u0641\u0627\u06cc\u0644"}),n&&"master"===n.find[0].roll&&(0,s.jsx)("button",{onClick:function(){return l("newAdmin")},children:"\u0627\u062f\u0645\u06cc\u0646 \u062c\u062f\u06cc\u062f"})]})]}),n&&"master"===n.find[0].roll&&(0,s.jsx)("div",{className:"allAdmin",children:n&&n.allAdmin&&n.allAdmin.map((function(e){return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:"/uploads/users.png",alt:""}),(0,s.jsxs)("label",{style:{boxShadow:"none",flexFlow:"column"},children:[(0,s.jsxs)("h1",{children:["\u0646\u0627\u0645 :",e.username||""]}),(0,s.jsxs)("p",{children:["\u0627\u06cc\u0645\u06cc\u0644 :",e.email||""]}),(0,s.jsxs)("p",{children:["roll:",e.roll||""]})]}),"master"!==e.roll&&(0,s.jsx)("button",{children:"\u0648\u06cc\u0631\u0627\u06cc\u0634"})]})},e._id)}))})]})})}}}]);