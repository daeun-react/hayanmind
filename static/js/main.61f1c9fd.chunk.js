(this["webpackJsonppreonboarding-week1-hayanmind"]=this["webpackJsonppreonboarding-week1-hayanmind"]||[]).push([[0],{58:function(n,e,t){"use strict";t.r(e);var c,r,a=t(0),i=t(10),o=t.n(i),l=t(5),s=t(8),d=t(23),p=t(24),u=t(6),b=t(25),j=t(3),f=Object(j.b)(c||(c=Object(u.a)(["\n  ",";\n  * {\n    box-sizing: border-box;\n  }\n"])),b.a),m=Object(j.a)(r||(r=Object(u.a)(["\n    ",";\n"])),f),O=t(4),h=t(12),x=t.n(h),g=t(29),v=t(30),y=t.n(v).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),w=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return y.get("/comments",{params:{_page:n,_limit:e}})},E="page/SET_COMMNET",k="page/SET_COMMENT_SUCCESS",T="page/SET_COMMNET_FAILURE",C=function(){return{type:E}},M=function(n){return{type:k,payload:n}},S=function(n){return{type:T,payload:n}},_=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var e=Object(g.a)(x.a.mark((function e(t){var c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C()),e.prev=1,e.next=4,w(n);case 4:c=e.sent,r=c.data,t(M(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(S(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}()},L={page:1,loading:!1,error:null,comments:[]};var z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return Object(O.a)(Object(O.a)({},n),{},{loading:!0});case k:return Object(O.a)(Object(O.a)({},n),{},{page:n.page+1,loading:!1,error:null,comments:n.comments.concat(e.payload)});case T:return Object(O.a)(Object(O.a)({},n),{},{loading:!1,error:e.payload,comments:[]});default:return n}},I=t(1);var N,R=function(n){var e=n.children,t=Object(l.b)(),c=Object(l.c)((function(n){return n.page})),r=c.page,i=c.loading,o=function(n,e){var t=null;return function(){for(var c=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];t||(t=setTimeout((function(){n.call.apply(n,[c].concat(a)),t=null}),e))}}((function(){var n=document.documentElement||document.body,e=n.scrollHeight,c=n.scrollTop;n.clientHeight+c===e&&t(_(r))}),1e3),s=Object(a.useCallback)(o,[o]);return Object(a.useEffect)((function(){if(!i)return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[s,i]),Object(I.jsx)("div",{children:e})};var U,A=j.c.article(N||(N=Object(u.a)(["\n  width: 500px;\n  min-height: 193px;\n\n  background: #f8f9fa;\n  border: 0.5px solid #ced4da;\n  border-radius: 20px;\n  color: #212529;\n  font-size: 18px;\n  line-height: 21px;\n\n  margin-bottom: 14px;\n  padding: 20px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  div {\n    display: flex;\n    justify-content: flex-start;\n    margin-bottom: 12px;\n\n    font-size: 18px;\n    line-height: 21px;\n    color: #212529;\n\n    p {\n      font-weight: 600;\n      margin-right: 12px;\n    }\n\n    span {\n      word-break: keep-all;\n    }\n\n    &:last-child {\n      display: flex;\n      flex-direction: column;\n      margin-bottom: 0;\n\n      span {\n        padding-top: 2px;\n      }\n    }\n  }\n"]))),F=function(n){var e=n.id,t=n.email,c=n.body;return Object(I.jsxs)(A,{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("p",{children:"Comment Id"})," ",Object(I.jsx)("span",{children:e})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("p",{children:"Email"}),Object(I.jsxs)("span",{children:[" ",t]})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("p",{children:"Comment"})," ",Object(I.jsx)("span",{children:c})]})]})};var H=j.c.div(U||(U=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),J=function(){var n=Object(l.b)(),e=Object(l.c)((function(n){return n.page})).comments;return Object(a.useEffect)((function(){n(_())}),[n]),Object(I.jsx)(H,{children:e.map((function(n,e){return Object(I.jsx)(F,Object(O.a)({},n),"commnet".concat(e))}))})};var B=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(m,{}),Object(I.jsx)(R,{children:Object(I.jsx)(J,{})})]})},D=Object(s.combineReducers)({page:z}),W=Object(s.createStore)(D,Object(d.composeWithDevTools)(Object(s.applyMiddleware)(p.a)));o.a.render(Object(I.jsx)(l.a,{store:W,children:Object(I.jsx)(B,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.61f1c9fd.chunk.js.map