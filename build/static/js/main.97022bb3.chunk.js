(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{65:function(e,a,t){e.exports=t(95)},70:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),c=t.n(r),s=(t(70),t(10)),o=t(16),m=t(17),i=t(18),u=t(21),d=t(19),p=t(20),E={json:[{email:"dhanushmech1995@gmail.com",password:"12345",role:1,posistion:"Manager",id:900,name:"Dhanush"},{email:"dhanush@gmail.com",password:"12345",role:2,posistion:"Developer",id:345,name:"Kumar",leaves:12,holidays:[{id:1,date:"July 12,2019",reason:"personal commitment",status:[{Applied:!0,cancelled:!1}]},{id:2,date:"July 19,2019",reason:"Vacation",status:[{Applied:!0,Approved:!1}]},{id:3,date:"August 15,2019",reason:"Hangout Day",status:[{Applied:!1}]}]}]},h=t(24),v=t(13),b=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")))},f=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(o.a)({},e.target.name,e.target.value))},t.redirectUser=function(){return t.state.redirectToReferer?b().user&&1===b().user.role?l.a.createElement(s.a,{to:"/admin"}):l.a.createElement(s.a,{to:"/user"}):b()?l.a.createElement(s.a,{to:"/"}):void 0},t.submit=function(e){e.preventDefault(),E.json.map(function(e){e.email===t.state.email&&e.password===t.state.password&&(localStorage.setItem("user",JSON.stringify(e)),t.setState({redirectToReferer:!0}))})},t.state={email:"dhanushmech1995@gmail.com",password:"12345",redirectToReferer:!1},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return l.a.createElement("div",{className:"col-md-5 container"},l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{onChange:this.handleChange,type:"email",value:a,className:"form-control",placeholder:"Enter email",name:"email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{onChange:this.handleChange,type:"password",value:t,className:"form-control",placeholder:"Password",name:"password"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")),this.redirectUser)}}]),a}(n.Component),g=(Object(h.c)(null,function(e){return Object(v.bindActionCreators)({},e)})(f),t(30)),N=t(64),y=function(){var e=Object(n.useState)({email:"dhanushmech1995@gmail.com",password:"12345",redirectToReferrer:!1}),a=Object(N.a)(e,2),t=a[0],r=a[1],c=t.email,m=t.password,i=t.redirectToReferrer,u=(b().user,function(e){return function(a){r(Object(g.a)({},t,Object(o.a)({},e,a.target.value)))}}),d=function(e){e.preventDefault(),E.json.map(function(e){e.email===c&&e.password===m&&(localStorage.setItem("user",JSON.stringify(e)),r(Object(g.a)({},t,{redirectToReferrer:!0})))})};return l.a.createElement("div",{className:"col-md-5 container",style:{marginTop:"100px"}},l.a.createElement("form",{onSubmit:d},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{onChange:u("email"),type:"email",value:c,className:"form-control",placeholder:"Enter email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{onChange:u("password"),type:"password",value:m,className:"form-control",placeholder:"Password"})),l.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Submit")),function(){if(i)return b()&&1===b().role?l.a.createElement(s.a,{to:"/admin"}):l.a.createElement(s.a,{to:"/user"})}())},O=t(15);var j=Object(s.f)(function(e){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-primary"},l.a.createElement("div",{className:"container"},l.a.createElement(O.a,{className:"navbar-brand",to:"/"},"LMS"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},!b()&&l.a.createElement("li",{className:"nav-item"},l.a.createElement(O.a,{className:"nav-link",to:"/"},"SignIn")),b()&&l.a.createElement(n.Fragment,null,l.a.createElement("li",{className:"nav-item",style:{color:"white",marginTop:"7px",marginRight:"5px",marginLeft:"3px"}},l.a.createElement("i",{className:"fas fa-user-circle",style:{marginRight:"5px"}}," "),b().name),l.a.createElement("li",{className:"nav-item"},l.a.createElement("span",{className:"nav-link",onClick:function(){"undefined"!==typeof window&&localStorage.removeItem("user"),e.history.push("/")},style:{cursor:"pointer"}},"SignOut")))))))))}),S=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(y,null),l.a.createElement("div",null))}}]),a}(n.Component),w=t(23),A=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).approve=function(){t.state.leaves.map(function(e){e.status.map(function(e){e.Applied=!1})}),localStorage.setItem("leaves",JSON.stringify(t.state.leaves)),t.setState({showBtns:!1})},t.reject=function(){t.setState({showBtns:!1})},t.state={leaves:[],showBtns:!0},t.approve=t.approve.bind(Object(w.a)(t)),t.reject=t.reject.bind(Object(w.a)(t)),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.leaves&&this.setState({leaves:JSON.parse(localStorage.leaves)})}},{key:"render",value:function(){var e=this,a=this.state.leaves;return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement("div",{className:"container",style:{marginTop:"50px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("div",{className:"card"},l.a.createElement("h4",{className:"card-header",style:{textAlign:"center"}},"Admin"))),l.a.createElement("div",{className:"col-9"},l.a.createElement("div",{className:"card mb-5"},l.a.createElement("h3",{className:"card-header"},"User Information"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},b().name),l.a.createElement("li",{className:"list-group-item"},b().email),l.a.createElement("li",{className:"list-group-item"},b().posistion)))))),l.a.createElement("div",{className:"container col-9"},l.a.createElement("h4",null,"Leave Application List"),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body",style:{textAlign:"center"}},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Date"),l.a.createElement("th",{scope:"col"},"Reason"),l.a.createElement("th",{scope:"col"},"Status"),l.a.createElement("th",{scope:"col"},"Action"))),a.map(function(a){return l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},a.name),l.a.createElement("td",null,a.date),l.a.createElement("td",null,a.reason),a.status&&a.status.map(function(e){return l.a.createElement("td",null,e.Applied?"Applied":"Approved")}),a.status&&a.status.map(function(a){return l.a.createElement("td",null,a.Applied&&e.state.showBtns?l.a.createElement("button",{className:"btn btn-success",onClick:e.approve},"Approve"):null,a.Applied&&e.state.showBtns?l.a.createElement("button",{className:"btn btn-danger",onClick:e.reject,style:{marginLeft:"5px"}},"Reject"):null)})))}))))),console.log(this.state))}}]),a}(n.Component),C=t(63),k=t(98),x=t(57),D=t.n(x),T=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).handleClose=function(){t.setState({show:!1})},t.handleShow=function(){t.setState({show:!0})},t.handleChange=function(e){t.setState(Object(o.a)({},e.target.name,e.target.value))},t.submit=function(e){e.preventDefault();var a={name:b().name,id:D()(),date:t.state.inputDate,reason:t.state.reason,status:[{Applied:!0}]};t.setState({holidays:[].concat(Object(C.a)(t.state.holidays),[a])});var n=[];n.push(a),console.log(n),localStorage.setItem("leaves",JSON.stringify(n))},t.filter=function(e,a){t.setState({holidays:t.state.holidays.filter(function(a){return a.id!==e})}),JSON.parse(localStorage.leaves).map(function(a){a.id===e&&localStorage.removeItem("leaves")})},t.state={show:!1,holidays:[],reason:"reason",inputDate:""},t.filter=t.filter.bind(Object(w.a)(t)),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.leaves&&this.setState({holidays:JSON.parse(localStorage.leaves)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement("div",{className:"container",style:{marginTop:"50px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("div",{className:"card"},l.a.createElement("h4",{className:"card-header",style:{textAlign:"center"}},"User"),l.a.createElement("button",{type:"button",className:"btn btn-dark btn-sm",onClick:this.handleShow},"Apply leave"))),l.a.createElement("div",{className:"col-9"},l.a.createElement("div",{className:"card mb-5"},l.a.createElement("h3",{className:"card-header"},"User Information"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},b().name),l.a.createElement("li",{className:"list-group-item"},b().email),l.a.createElement("li",{className:"list-group-item"},b().posistion),l.a.createElement("li",{className:"list-group-item"},"Total number of leaves left :"," ",l.a.createElement("span",{style:{color:"red"}},b().leaves))))))),l.a.createElement("div",{className:"container col-9"},l.a.createElement("h4",null,"Leave Application List"),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body",style:{textAlign:"center"}},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Date"),l.a.createElement("th",{scope:"col"},"Reason"),l.a.createElement("th",{scope:"col"},"Status"),l.a.createElement("th",{scope:"col"},"Action"))),this.state.holidays&&this.state.holidays.map(function(a){return l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},a.date),l.a.createElement("td",null,a.reason),a.status.map(function(e){return l.a.createElement("td",null,e.Applied?"Applied":"Approved")}),a.status.map(function(t){return l.a.createElement("td",null,t.Applied?l.a.createElement("button",{className:"btn btn-danger",onClick:e.filter.bind(e,a.id)},"Cancel"):null)})))})),l.a.createElement(k.a,{show:this.state.show,onHide:this.handleClose},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,null,"Apply Leave")),l.a.createElement(k.a.Body,null,l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("div",{class:"form-row align-items-center"},l.a.createElement("div",{class:"col-auto my-1"},l.a.createElement("div",{class:"custom-control custom-checkbox mr-sm-2"},l.a.createElement("input",{type:"text",class:"form-control",placeholder:"Date",value:this.state.inputDate,onChange:this.handleChange,name:"inputDate"}))),l.a.createElement("div",{class:"col-auto my-1"},l.a.createElement("label",{class:"mr-sm-2 sr-only",for:"inlineFormCustomSelect"},"Preference"),l.a.createElement("select",{class:"custom-select mr-sm-2",id:"inlineFormCustomSelect",onChange:this.handleChange,value:this.state.reason,name:"reason"},l.a.createElement("option",{value:"reason"},"Reason"),l.a.createElement("option",{value:"personal"},"Personal"),l.a.createElement("option",{value:"vacation"},"Vacation"),l.a.createElement("option",{value:"sick"},"Sick"))),l.a.createElement("div",{class:"col-auto my-1"},l.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Submit"))))))))))}}]),a}(n.Component),R=t(31),I=function(e){var a=e.component,t=Object(R.a)(e,["component"]);return l.a.createElement(s.b,Object.assign({},t,{render:function(e){return b()&&1===b().role?l.a.createElement(a,null):l.a.createElement(s.a,{to:{pathname:"/",state:{from:e.location}}})}}))},J=function(e){var a=e.component,t=Object(R.a)(e,["component"]);return l.a.createElement(s.b,Object.assign({},t,{render:function(e){return b()?l.a.createElement(a,null):l.a.createElement(s.a,{to:{pathname:"/",state:{from:e.location}}})}}))},B=function(){return l.a.createElement("div",null,l.a.createElement("main",null,l.a.createElement(s.b,{exact:!0,path:"/",component:S}),l.a.createElement(J,{exact:!0,path:"/user",component:T}),l.a.createElement(I,{exact:!0,path:"/admin",component:A})))};var L=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(B,null))},P=t(32),H=t(54),M=t(61),U={items:[],item:{}},F=t(62),V=(0,t(9).createBrowserHistory)(),K=Object(H.a)(V),W=Object(v.combineReducers)({datas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_POSTS":return Object(g.a)({},e,{items:a.payload});default:return e}},router:Object(P.b)(V)}),_=Object(v.createStore)(W,Object(F.composeWithDevTools)(Object(v.applyMiddleware)(K,M.a)));c.a.render(l.a.createElement(h.a,{store:_},l.a.createElement(P.a,{history:V},l.a.createElement("div",null,l.a.createElement(L,null)))),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.97022bb3.chunk.js.map