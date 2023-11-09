(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{319:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(14),r=n.n(i),s=n(16),o=n(12),l=n(17),d=n(162),j=n(19),b=n(376),h=n(156),p=n.n(h).a.create({baseURL:"/"});const u="CREATE_EVENT",m="FETCH_EVENTS",O="FETCH_EVENT",x="DELETE_EVENT",g="EDIT_EVENT",v="CREATE_GROUP",y="EDIT_GROUP",S="DELETE_GROUP",f="CREATE_GROUP_START",E="SIGN_IN",w="SIGN_OUT",C="FETCH_MAX_GROUP_SIZE",G="FETCH_CHURCH_SETTINGS",N=()=>async e=>{const t=await p.get("/event");e({type:m,payload:t.data})},I=e=>async t=>{const n=await p.get("/event/".concat(e));t({type:O,payload:n.data})},_=e=>async t=>{await p.delete("event/".concat(e));t({type:x,payload:e})},T=()=>({type:f});var A=n(360),D=n(363),z=n(356),L=n(157),k=n.n(L),P=n(1);class R extends c.a.Component{constructor(){super(...arguments),this.onAuthChange=e=>{if(e){const e=this.auth.currentUser.get().getId(),t=this.auth.currentUser.get().getBasicProfile().getName(),n=this.auth.currentUser.get().getBasicProfile().getGivenName(),a=this.auth.currentUser.get().getBasicProfile().getFamilyName(),c=this.auth.currentUser.get().getBasicProfile().getImageUrl(),i=this.auth.currentUser.get().getBasicProfile().getEmail();this.props.signIn({id:e,fullName:t,givenName:n,familyName:a,imageUrl:c,email:i})}else this.props.signOut()},this.onSignInClick=()=>{this.auth.signIn()},this.onSignOutClick=()=>{this.auth.signOut()},this.adminRedirect=this.props.isAdmin?Object(P.jsx)(j.a,{to:"/admin"}):null}componentDidMount(){window.gapi.load("client:auth2",(()=>{window.gapi.client.init({clientId:"666797596660-g0ss4568pfnjesar12r2n0irheeg92n1.apps.googleusercontent.com",scope:"email"}).then((()=>{this.auth=window.gapi.auth2.getAuthInstance(),this.onAuthChange(this.auth.isSignedIn.get()),this.auth.isSignedIn.listen(this.onAuthChange)}))}))}renderAuthButton(){return null===this.props.isSignedIn?null:this.props.isSignedIn?Object(P.jsxs)("div",{style:{display:"flex"},children:[Object(P.jsx)(z.a,{component:s.b,to:"/event-create",color:"inherit",children:"Create Event"}),Object(P.jsx)(z.a,{color:"inherit",component:s.b,to:"/settings",children:Object(P.jsx)(k.a,{})}),Object(P.jsx)("div",{onClick:this.onSignOutClick,children:Object(P.jsx)(z.a,{color:"inherit",children:"Sign Out"})})]}):Object(P.jsx)("div",{onClick:this.onSignInClick,children:Object(P.jsx)(z.a,{color:"inherit",children:"Admin"})})}render(){return Object(P.jsxs)("div",{children:[this.adminRedirect,this.renderAuthButton()]})}}var M=Object(o.b)((e=>({isSignedIn:e.auth.isSignedIn})),{signIn:e=>async t=>{const n=await p.post("/user",e);n.data.email?t({type:E,payload:n.data}):(console.log("RES REAL: ",n.data.errorMessage),alert(n.data.errorMessage),t({type:w,payload:n.data}))},signOut:()=>({type:w})})(R),U=n(164),F=n(362),V=n(364),B=n(361);const H=Object(A.a)((e=>({root:{flexGrow:1,marginBottom:"2rem"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})));var Z=e=>{const t=H();let n=Object(P.jsx)("div",{className:t.root,children:Object(P.jsx)(B.a,{style:{margin:0},position:"static",children:Object(P.jsxs)(F.a,{children:[Object(P.jsx)(U.a,{variant:"h6",className:t.title,children:Object(P.jsxs)(D.a,{component:s.b,style:{color:"#fff",textDecoration:"none"},to:"/",children:[Object(P.jsx)("strong",{children:"SeatSave"})," | San Pedro Presbyterian Church"]})}),Object(P.jsx)(M,{})]})})});return window.location.pathname.startsWith("/embed")&&(n=Object(P.jsx)("div",{})),Object(P.jsxs)(P.Fragment,{children:[n,Object(P.jsx)(V.a,{maxWidth:"md",children:Object(P.jsx)("main",{children:e.children})})]})},W=n(380),X=n(366),q=n(370),J=n(369),$=n(365),Q=n(367),Y=n(368),K=n(321),ee=n(94),te=n.n(ee),ne=n(95),ae=n.n(ne);const ce=Object(A.a)((e=>({paper:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})));var ie=e=>{const t=ce(),[n,c]=Object(a.useState)(!1),[i,r]=Object(a.useState)(""),[o,l]=Object(a.useState)(""),[d,j]=Object(a.useState)("");let b=Object(P.jsxs)("div",{className:t.paper,children:[Object(P.jsx)("h2",{children:i}),Object(P.jsx)("p",{children:o}),Object(P.jsx)("div",{children:d})]});const h=(t,n,a)=>{"del"===t&&(r("Delete Event"),l("Are you sure you want to delete this event named: ".concat(a)),j(Object(P.jsxs)("div",{children:[Object(P.jsx)(z.a,{variant:"contained",color:"secondary",onClick:()=>(t=>{e.delete(t),p()})(n),children:"Delete"}),Object(P.jsx)(z.a,{style:{marginLeft:"1rem"},variant:"contained",onClick:p,children:"Cancel"})]}))),c(!0)},p=()=>{c(!1)};return Object(P.jsxs)($.a,{component:K.a,children:[Object(P.jsx)(W.a,{open:n,onClose:p,"aria-labelledby":"delete-event-confirmation","aria-describedby":"delete-event-confirm",children:b}),Object(P.jsxs)(X.a,{"aria-label":"event table",children:[Object(P.jsx)(Q.a,{children:Object(P.jsxs)(Y.a,{children:[Object(P.jsx)(J.a,{}),Object(P.jsx)(J.a,{children:"Event"}),Object(P.jsx)(J.a,{align:"right",children:"Day"}),Object(P.jsx)(J.a,{align:"right",children:"Date"}),Object(P.jsx)(J.a,{align:"right",children:"Time"}),Object(P.jsx)(J.a,{align:"right",children:"Open Spots"}),e.isAuth?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(J.a,{align:"right",children:"Admin"}),Object(P.jsx)(J.a,{align:"right",children:"Groups"})]}):null]})}),Object(P.jsx)(q.a,{children:e.events.map((t=>Object(P.jsxs)(Y.a,{children:[Object(P.jsx)(J.a,{component:"th",scope:"row",children:Object(P.jsx)(D.a,{component:s.b,to:"/reserve/".concat(t._id),children:Object(P.jsx)(z.a,{variant:"contained",color:"primary",children:"Reserve"})})}),Object(P.jsx)(J.a,{children:t.eventName}),Object(P.jsx)(J.a,{align:"right",children:new Date(t.date).toLocaleDateString("us-en",{weekday:"short"})}),Object(P.jsx)(J.a,{align:"right",children:new Date(t.date).toLocaleDateString()}),Object(P.jsx)(J.a,{align:"right",children:new Date(t.date).toLocaleTimeString([],{timeStyle:"short"})}),Object(P.jsx)(J.a,{align:"right",children:t.openSpots}),e.isAuth?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(J.a,{align:"right",children:[" ",Object(P.jsx)(D.a,{component:s.b,to:"/events/edit/".concat(t._id),color:"textPrimary",children:Object(P.jsx)(te.a,{fontSize:"small"})}),Object(P.jsx)(D.a,{component:s.b,to:"#",color:"textPrimary",children:Object(P.jsx)(ae.a,{style:{marginLeft:5},fontSize:"small",onClick:()=>h("del",t._id,t.eventName)})})]}),Object(P.jsx)(J.a,{align:"right",children:Object(P.jsx)(D.a,{component:s.b,to:"/reservations/".concat(t._id),children:"View"})})]}):null]},t._id)))})]})]})};var re=Object(o.b)((e=>({events:e.event})),{fetchUpcomingEvents:N,deleteEvent:_})((e=>{Object(a.useEffect)((()=>{e.fetchUpcomingEvents()}),[e.fetchUpcomingEvents]);let t=Object(P.jsx)("div",{children:"Loading..."});return e.events.events.length&&(t=Object(P.jsx)(ie,{events:e.events.events,isAuth:e.isAuth,delete:e.deleteEvent})),Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Event List"}),t,Object(P.jsx)("br",{}),Object(P.jsx)("br",{})]})})),se=n(379),oe=n(378),le=n(377);const de=e=>{let{label:t,input:n,meta:{touched:a,invalid:c,error:i},...r}=e;return Object(P.jsx)(le.a,{label:t,placeholder:t,error:a&&c,helperText:a&&i,...n,...r})},je=e=>{let{label:t,input:n,meta:{touched:a,invalid:c,error:i},...r}=e;return Object(P.jsx)(le.a,{id:"datetime-local",label:t,type:"datetime-local",InputLabelProps:{shrink:!0},...n,...r})};var be=Object(oe.a)({form:"event"})((e=>{const{handleSubmit:t,pristine:n,reset:a,submitting:c,classes:i}=e;return Object(P.jsxs)("form",{onSubmit:t,children:[Object(P.jsx)("div",{children:Object(P.jsx)(se.a,{name:"eventName",component:de,label:"Event Name"})}),Object(P.jsx)("br",{}),Object(P.jsx)("div",{children:Object(P.jsx)(se.a,{name:"date",component:je,label:"Event Date & Time"})}),Object(P.jsx)("br",{}),Object(P.jsx)("div",{children:Object(P.jsx)(se.a,{name:"openSpots",component:de,type:"number",label:"Open Spots",inputProps:{min:0}})}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)(z.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]})}));var he=Object(o.b)((e=>({created:e.event.created})),{createEvent:e=>async t=>{const n=await p.post("/event",e);t({type:u,payload:n.data})},startCreateGroup:T})((e=>{Object(a.useEffect)((()=>{e.startCreateGroup()}),[e.startCreateGroup]);const t=e.created?Object(P.jsx)(j.a,{to:"/"}):null;return Object(P.jsxs)(c.a.Fragment,{children:[t,Object(P.jsx)("h2",{children:"Create An Event:"}),Object(P.jsx)(be,{onSubmit:t=>{e.createEvent(t)}}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{})]})})),pe=n(372),ue=n(381),me=n(371),Oe=n(375),xe=n(374),ge=n(373);const ve=e=>{let{label:t,input:n,meta:{touched:a,invalid:c,error:i},...r}=e;return Object(P.jsx)(le.a,{label:t,placeholder:t,error:a&&c,helperText:a&&i,...n,...r})},ye=e=>{let{label:t,input:n,meta:{touched:a,invalid:c,error:i},...r}=e;return Object(P.jsxs)(me.a,{error:a&&c,component:"fieldset",children:[console.log("ERR: ",i),Object(P.jsx)(xe.a,{children:Object(P.jsx)(Oe.a,{control:Object(P.jsx)(ue.a,{checked:!!n.value,onChange:n.onChange,...r,...n}),label:t})}),Object(P.jsx)(ge.a,{children:a&&i})]})};let Se=e=>{const{handleSubmit:t}=e;return Object(P.jsxs)("form",{onSubmit:t,children:[Object(P.jsx)("div",{children:Object(P.jsx)(se.a,{name:"groupName",component:ve,label:"Group Name"})}),Object(P.jsx)("div",{children:Object(P.jsx)(se.a,{name:"email",component:ve,type:"email",label:"Email",style:{width:"300px"}})}),Object(P.jsx)("div",{children:Object(P.jsx)(se.a,{name:"groupSize",component:ve,type:"number",label:"How Many People in Your Group?",inputProps:{min:1,max:e.maxGroupSize},style:{width:"300px"}})}),e.auth?Object(P.jsx)("div",{children:Object(P.jsx)(se.a,{name:"note",component:ve,label:"Note"})}):null,Object(P.jsx)("br",{}),Object(P.jsxs)("div",{style:{marginTop:"1rem"},children:[Object(P.jsx)(pe.a,{children:"Please read and check the following"}),Object(P.jsx)("br",{}),Object(P.jsx)(se.a,{name:"willAbide",component:ye,label:"I will abide by San Pedro best safety practices"})]}),Object(P.jsx)("p",{children:e.signupMessage}),Object(P.jsx)(z.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"}),e.auth&&!window.location.pathname.startsWith("/embed")?Object(P.jsxs)("div",{style:{marginTop:"2rem",width:"80%",padding:8},children:[Object(P.jsx)("div",{children:Object(P.jsx)("strong",{children:"Form Embed Code:"})}),Object(P.jsxs)("div",{style:{backgroundColor:"#eee",padding:8},children:['<iframe src="',window.location.origin,"/embed/reserve/",e.event._id,'" title="Event Registration Form" width="100%" height="700px" style="padding:30px; border:none;"></iframe>']})]}):null]})};Se=Object(oe.a)({form:"reserve",validate:e=>{console.log("VALUES ",e);const t={};return["groupName","email","groupSize","willAbide"].forEach((n=>{e[n]||(t[n]="Required")})),e.email&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)&&(t.email="Invalid email address"),t}})(Se);var fe=Se,Ee=n(160),we=n.n(Ee);var Ce=e=>Object(P.jsxs)("div",{children:[Object(P.jsx)("h3",{children:"Reservation Confirmation"}),console.log("GROUP: ",e.group),console.log("EVENT: ",e.event[0]),Object(P.jsxs)("div",{children:[Object(P.jsx)("strong",{children:"Group Name: "}),e.group.groupName," ",Object(P.jsx)("br",{}),Object(P.jsx)("strong",{children:"Group Size: "}),e.group.groupSize," ",Object(P.jsx)("br",{}),Object(P.jsx)("strong",{children:"Email: "}),e.group.email," ",Object(P.jsx)("br",{}),Object(P.jsx)("strong",{children:"Event Name: "}),e.event[0].eventName," ",Object(P.jsx)("br",{}),Object(P.jsx)("strong",{children:"Event Date: "}),new Date(e.event[0].date).toLocaleDateString("en-us")," ",Object(P.jsx)("br",{}),Object(P.jsx)("strong",{children:"Event Time: "}),new Date(e.event[0].date).toLocaleTimeString("en-us",{timeStyle:"short"})," ",Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsxs)("strong",{children:["Time Reservation Made:"," ",(new Date).toLocaleString("en-us",{dateStyle:"short",timeStyle:"short"})]}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)("hr",{}),Object(P.jsx)("br",{}),Object(P.jsx)("div",{children:"The above details have been sent to you."}),Object(P.jsx)("br",{}),Object(P.jsxs)(z.a,{variant:"contained",color:"primary",onClick:()=>window.print(),children:[Object(P.jsx)(we.a,{}),"Print"]})]})]});var Ge=Object(o.b)(((e,t)=>({event:e.event.events.filter((e=>e._id===t.match.params.id)),created:e.group.created,group:e.group.group,isSignedIn:e.auth.isSignedIn,maxGroupSize:e.church.maxGroupSize,signupMessage:e.church.signupMessage})),{fetchEvent:I,createGroup:(e,t)=>async n=>{const a=await p.post("/group/".concat(e),t);n({type:v,payload:a.data})},startCreateGroup:T})((e=>{Object(a.useEffect)((()=>(e.fetchEvent(e.match.params.id),()=>e.startCreateGroup())),[e.fetchEvent]);const t=t=>{e.createGroup(e.match.params.id,t)};let n=Object(P.jsx)("div",{children:"Loading ..."});return e.event.length>0&&(n=Object(P.jsxs)("div",{style:{paddingBottom:"1rem"},children:[Object(P.jsx)("h2",{children:"RSVP"}),Object(P.jsxs)("h4",{children:[e.event[0].eventName," -"," ",new Date(e.event[0].date).toLocaleDateString("us-en",{weekday:"short"}),", ",new Date(e.event[0].date).toLocaleString("en-us",{dateStyle:"short",timeStyle:"short"})]}),Object(P.jsx)(fe,{onSubmit:t,event:e.event[0],auth:e.isSignedIn,maxGroupSize:Math.min(e.maxGroupSize,e.event[0].openSpots),signupMessage:e.signupMessage})]})),Object(P.jsx)("div",{children:e.created?Object(P.jsx)(Ce,{group:e.group.dbGroup,event:e.event}):n})}));n(314);function Ne(){return Math.round(20*Math.random())-10}function Ie(){const e=50+Ne(),t=50+Ne();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}const _e=Object(A.a)((e=>({paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})));function Te(){const e=_e(),[t]=c.a.useState(Ie),[n,a]=c.a.useState(!1),i=Object(P.jsxs)("div",{style:t,className:e.paper,children:[Object(P.jsx)("h2",{id:"simple-modal-title",children:"Text in a modal"}),Object(P.jsx)("p",{id:"simple-modal-description",children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}),Object(P.jsx)(Te,{})]});return Object(P.jsxs)("div",{children:[Object(P.jsx)("button",{type:"button",onClick:()=>{a(!0)},children:"Open Modal"}),Object(P.jsx)(W.a,{open:n,onClose:()=>{a(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:i})]})}var Ae=Object(o.b)(((e,t)=>({event:e.event.events})),{fetchEvent:I,deleteEvent:_})((e=>{Object(a.useEffect)((()=>{e.fetchEvent(e.match.params.id)}),[]);return Object(P.jsx)(Te,{title:"Delete ".concat(e.event.eventName),content:"Are you sure you want to delete this event?"})}));n(315);var De=Object(o.b)(((e,t)=>({event:e.event.events.filter((e=>e._id===t.match.params.id)),created:e.event.created})),{fetchEvent:I,editEvent:(e,t)=>async n=>{const a=await p.put("event/".concat(e),t);n({type:g,payload:a.data})}})((e=>{Object(a.useEffect)((()=>{e.fetchEvent(e.match.params.id)}),[e.fetchEvent]);const t=t=>{e.editEvent(e.match.params.id,t)},n=e.created?Object(P.jsx)(j.a,{to:"/"}):null;let c=Object(P.jsx)("p",{children:"Hello"});if(e.event.length=1){let n=e.event[0];n&&(n.date=new Date(new Date(n.date).toString().split("GMT")[0]+" UTC").toISOString().split(".")[0]),c=Object(P.jsx)(be,{initialValues:e.event[0],onSubmit:t})}return Object(P.jsxs)("div",{children:[n,Object(P.jsx)("h2",{children:"Event Edit"}),c]})}));var ze=Object(o.b)((e=>({events:e.event.events})),{fetchUpcomingEvents:N})((e=>{Object(a.useEffect)((()=>{e.fetchUpcomingEvents()}),[e.fetchUpcomingEvents]);let t=Object(P.jsx)("div",{children:"Loading..."});return e.events.length>0&&(t=Object(P.jsx)(ie,{events:e.events,admin:!0})),Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Reservation List"}),t]})})),Le=n(161);const ke=Object(A.a)((e=>({paper:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})));var Pe=e=>{const t=ke(),[n,c]=Object(a.useState)(!1),[i,r]=Object(a.useState)(""),[o,l]=Object(a.useState)(""),[d,j]=Object(a.useState)("");let b=Object(P.jsxs)("div",{className:t.paper,children:[Object(P.jsx)("h2",{children:i}),Object(P.jsx)("p",{children:o}),Object(P.jsx)("div",{children:d})]});const h=(t,n,a,i)=>{"del"===t&&(r("Delete Group"),l("Are you sure you want to delete this group named: ".concat(a)),j(Object(P.jsxs)("div",{children:[Object(P.jsx)(z.a,{variant:"contained",color:"secondary",onClick:()=>((t,n)=>{e.delete(t,n,e.event[0]._id),p()})(n,i),children:"Delete"}),Object(P.jsx)(z.a,{style:{marginLeft:"1rem"},variant:"contained",onClick:p,children:"Cancel"})]}))),c(!0)},p=()=>{c(!1)};return Object(P.jsxs)("div",{children:[Object(P.jsx)(W.a,{open:n,onClose:p,"aria-labelledby":"delete-group-confirmation","aria-describedby":"delete-group-confirm",children:b}),Object(P.jsxs)("h3",{children:["Groups for: ",e.event[0].eventName," -"," ",new Date(e.event[0].date).toLocaleString()]}),Object(P.jsxs)("h4",{children:[e.event[0].groups.length>0?e.event[0].groups.map((e=>e.groupSize)).reduce(((e,t)=>e+t))+" Reservations":null," "]}),Object(P.jsx)($.a,{component:K.a,children:Object(P.jsxs)(X.a,{"aria-label":"group table",children:[Object(P.jsx)(Q.a,{children:Object(P.jsxs)(Y.a,{children:[Object(P.jsx)(J.a,{children:"Group"}),Object(P.jsx)(J.a,{align:"right",children:"Quantity"}),Object(P.jsx)(J.a,{align:"right",children:"Email"}),Object(P.jsx)(J.a,{align:"right",children:"Note"}),Object(P.jsx)(J.a,{align:"right",children:"Edit"})]})}),Object(P.jsx)(q.a,{children:e.event[0].groups.map((e=>Object(P.jsxs)(Y.a,{children:[Object(P.jsx)(J.a,{component:"th",scope:"row",children:e.groupName}),Object(P.jsx)(J.a,{align:"right",children:e.groupSize}),Object(P.jsx)(J.a,{align:"right",children:e.email}),Object(P.jsx)(J.a,{align:"right",children:e.note}),Object(P.jsxs)(J.a,{align:"right",children:[Object(P.jsx)(D.a,{component:s.b,to:"/reservations/edit/".concat(e._id),color:"textPrimary",children:Object(P.jsx)(te.a,{fontSize:"small"})}),Object(P.jsx)(D.a,{component:s.b,to:"#",color:"textPrimary",children:Object(P.jsx)(ae.a,{style:{marginLeft:5},fontSize:"small",onClick:()=>h("del",e._id,e.groupName,e.groupSize)})})]})]},e._id)))})]})})]})};var Re=Object(o.b)((e=>({event:e.event.events})),{fetchPopulatedEvent:e=>async t=>{const n=await p.get("event/admin/".concat(e));t({type:m,payload:n.data})},deleteGroup:(e,t,n)=>async a=>{const c=await p.delete("/group/".concat(e,"/").concat(t,"/").concat(n));a({type:S,payload:c.data})}})((e=>{Object(a.useEffect)((()=>{e.fetchPopulatedEvent(e.match.params.id)}),[e.fetchEvent]);let t=Object(P.jsx)("div",{children:"Loading..."});if(e.event[0]&&e.event[0].groups){const n=e.event[0].groups.map((e=>(e=>{let{groupName:t,email:n,groupSize:a}=e;return{groupName:t,email:n,groupSize:a}})(e)));t=Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Pe,{event:e.event,delete:e.deleteGroup}),Object(P.jsx)("br",{}),Object(P.jsx)(Le.CSVLink,{style:{marginTop:"1rem",marginBottom:"20px"},data:n,children:"Export As CSV"}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{})]})}return Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Reservations"}),t]})}));var Me=Object(o.b)(((e,t)=>({group:e.event.events[0].groups.filter((e=>e._id===t.match.params.id)),isSignedIn:e.auth.isSignedIn,eventId:e.event.events[0]._id,created:e.group.created,event:e.event.events[0]})),{startCreateGroup:T,editGroup:(e,t)=>async n=>{const a=await p.put("/group/".concat(e),t);n({type:y,payload:a.data})}})((e=>{Object(a.useEffect)((()=>()=>e.startCreateGroup()),[]);const t=e.created?Object(P.jsx)(j.a,{to:"/"}):null;return Object(P.jsxs)("div",{children:[t,Object(P.jsx)("h2",{children:"Reservation Edit"}),Object(P.jsx)(fe,{initialValues:e.group[0],auth:e.isSignedIn,onSubmit:t=>{const n=e.group[0].groupSize-t.groupSize;t.eventId=e.eventId,t.sizeDifference=n,e.editGroup(e.match.params.id,t)},event:e.event})]})})),Ue=n(382),Fe=n(384);const Ve=e=>{let{label:t,input:n,meta:{touched:a,invalid:c,error:i},...r}=e;return Object(P.jsx)(le.a,{label:t,placeholder:t,error:a&&c,helperText:a&&i,...n,...r})},Be=e=>{let{fields:t,meta:{touched:n,error:a,submitFailed:c},input:i}=e;return Object(P.jsxs)(Fe.a,{style:{maxWidth:360,marginTop:"27px",marginBottom:"27px"},children:[t.map(((e,n)=>Object(P.jsxs)("li",{style:{display:"flex",alignItems:"flex-end"},children:[Object(P.jsx)(se.a,{style:{width:"80%",marginBottom:".5rem"},name:"".concat(e,".adminEmail"),type:"email",component:Ve,label:"Admin Email",...i}),Object(P.jsx)(z.a,{style:{width:"5%",padding:0,minWidth:25,marginBottom:".5rem"},variant:"contained",color:"secondary",onClick:()=>t.remove(n),children:"X"})]},n))),Object(P.jsx)(z.a,{variant:"contained",onClick:()=>t.push({}),children:"Add Admin Email"}),(n||c)&&a&&Object(P.jsx)("span",{children:a})]})};let He=e=>{const{handleSubmit:t}=e;return Object(P.jsxs)("form",{onSubmit:t,children:[Object(P.jsx)("div",{children:Object(P.jsx)(se.a,{name:"maxGroupSize",component:Ve,label:"Max. Group Size",type:"number",inputProps:{min:1}})}),Object(P.jsx)("div",{children:Object(P.jsx)(Ue.a,{name:"adminEmail",component:Be})}),Object(P.jsx)("div",{children:Object(P.jsx)(se.a,{name:"signupMessage",component:Ve,label:"Signup Message",style:{width:"100%"},multiline:!0,rows:13})}),Object(P.jsx)("br",{}),Object(P.jsx)(z.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]})};He=Object(oe.a)({form:"settings",validate:e=>{const t={};return["groupName","email","groupSize"].forEach((n=>{e[n]||(t[n]="Required")})),e.email&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)&&(t.email="Invalid email address"),t}})(He);var Ze=He;var We=Object(o.b)((e=>({church:e.church})),{fetchChurchSettings:()=>async e=>{const t=await p.get("church/admin");e({type:G,payload:t.data[0]})},updateChurchSettings:e=>async t=>{await p.put("church/admin",e)}})((e=>{c.a.useEffect((()=>{e.fetchChurchSettings()}),[]);const t=t=>{e.updateChurchSettings(t)};let n=Object(P.jsx)("div",{children:"Loading..."});return e.church.adminEmail.length>0&&(n=Object(P.jsx)(Ze,{initialValues:e.church,onSubmit:t})),Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Church Settings"}),n]})}));var Xe=Object(j.g)(Object(o.b)((e=>({isAuthenticated:e.auth.isSignedIn,maxGroupSize:e.church.maxGroupSize})),{fetchMaxGroupSize:()=>async e=>{const t=await p.get("/church");e({type:C,payload:t.data})}})((e=>{Object(a.useEffect)((()=>{e.fetchMaxGroupSize()}),[]);let t=Object(P.jsxs)(j.d,{children:[Object(P.jsx)(j.b,{path:"/",exact:!0,component:re}),Object(P.jsx)(j.b,{path:"/reserve/:id",exact:!0,component:Ge}),Object(P.jsx)(j.b,{path:"/embed/reserve/:id",exact:!0,component:Ge})]});return e.isAuthenticated&&(t=Object(P.jsxs)(j.d,{children:[Object(P.jsx)(j.b,{path:"/",exact:!0,render:e=>Object(P.jsx)(re,{isAuth:!0})}),Object(P.jsx)(j.b,{path:"/event-create",component:he}),Object(P.jsx)(j.b,{path:"/events/edit/:id",component:De}),Object(P.jsx)(j.b,{path:"/events/delete/:id",component:Ae}),Object(P.jsx)(j.b,{path:"/reservations",exact:!0,component:ze}),Object(P.jsx)(j.b,{path:"/reservations/:id",exact:!0,component:Re}),Object(P.jsx)(j.b,{path:"/reservations/edit/:id",exact:!0,component:Me}),Object(P.jsx)(j.b,{path:"/reserve/:id",exact:!0,component:Ge}),Object(P.jsx)(j.b,{path:"/embed/reserve/:id",exact:!0,component:Ge}),Object(P.jsx)(j.b,{path:"/settings",exact:!0,component:We})]})),Object(P.jsxs)("div",{children:[Object(P.jsx)(b.a,{}),Object(P.jsx)(Z,{children:t})]})}))),qe=n(383);const Je={maxGroupSize:null,adminEmail:[],adminFirstName:"",adminLastName:"",signupMessage:""};const $e={events:[],created:!1};var Qe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{...e,events:t.payload,created:!1};case O:return e.events.length?{...e,events:e.events.map((e=>e._id===t.payload._id?e=t.payload:e))}:{...e,events:e.events.concat(t.payload)};case u:return{...e,events:[...e.events,t.payload],created:!0};case"FETCH_POPULATED_EVENT":return{...e,events:t.payload};case x:return{...e,events:e.events.filter((e=>e._id!==t.payload))};case g:return{...e,created:!0,events:e.events.filter((e=>e._id!==t.payload))};case S:return{...e,events:[t.payload.dbEvent]};default:return e}};const Ye={created:!1};var Ke=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{...e,created:!1};case v:return{...e,group:t.payload,created:!0};case y:return{...e,created:!0};case S:return{...e};default:return e}};const et={isSignedIn:!0,userId:{adminOf:[]}};var tt=Object(l.c)({auth:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{...e,isSignedIn:!0,userId:t.payload};case w:return{...e,isSignedIn:!0,userId:et.userId};default:return e}},church:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{...e,maxGroupSize:t.payload[0].maxGroupSize,signupMessage:t.payload[0].signupMessage};case G:return{...e,adminEmail:t.payload.adminEmail,adminFirstName:t.payload.adminFirstName,adminLastName:t.payload.adminLastName,maxGroupSize:t.payload.maxGroupSize,signupMessage:t.payload.signupMessage};default:return e}},event:Qe,group:Ke,form:qe.a});const nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,at=Object(l.e)(tt,nt(Object(l.a)(d.a)));r.a.render(Object(P.jsx)(o.a,{store:at,children:Object(P.jsx)(s.a,{children:Object(P.jsx)(Xe,{})})}),document.querySelector("#root"))}},[[319,1,2]]]);
//# sourceMappingURL=main.1f5432aa.chunk.js.map