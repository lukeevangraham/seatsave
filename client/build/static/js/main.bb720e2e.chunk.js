(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{150:function(e,t){},295:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),i=n(13),s=n.n(i),j=n(24),o=n(21),b=n(14),l=n(144),u=n(17),d=n(334),O=n(335),h=n(341),p=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:Object(r.jsx)(h.a,{component:j.b,to:"/",children:"RB Community Church | Seat Save"})}),Object(r.jsx)("main",{children:e.children})]})},v=n(29),x=n.n(v),m=n(53),f=n(145),g=n.n(f).a.create({baseURL:"/"}),E="CREATE_EVENT",y="FETCH_EVENTS",S="FETCH_EVENT",w="FETCH_POPULATED_EVENT",T="CREATE_GROUP",N="CREATE_GROUP_START",D=function(){return function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/event");case 2:n=e.sent,t({type:y,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return{type:N}},C=n(329),_=n(333),G=n(332),R=n(327),P=n(330),k=n(331),U=n(328),A=function(e){return Object(r.jsx)(R.a,{component:U.a,children:Object(r.jsxs)(C.a,{"aria-label":"event table",children:[Object(r.jsx)(P.a,{children:Object(r.jsxs)(k.a,{children:[Object(r.jsx)(G.a,{children:"Event"}),Object(r.jsx)(G.a,{align:"right",children:"Day"}),Object(r.jsx)(G.a,{align:"right",children:"Date"}),Object(r.jsx)(G.a,{align:"right",children:"Time"}),Object(r.jsx)(G.a,{align:"right",children:"Open Spots"})]})}),Object(r.jsx)(_.a,{children:e.events.map((function(t){return Object(r.jsxs)(k.a,{children:[Object(r.jsx)(G.a,{component:"th",scope:"row",children:Object(r.jsx)(h.a,{component:j.b,to:e.admin?"/reservations/".concat(t._id):"/reserve/".concat(t._id),children:t.eventName})}),Object(r.jsx)(G.a,{align:"right",children:new Date(t.date).toLocaleDateString("us-en",{weekday:"short"})}),Object(r.jsx)(G.a,{align:"right",children:new Date(t.date).toLocaleDateString()}),Object(r.jsx)(G.a,{align:"right",children:new Date(t.date).toLocaleTimeString([],{timeStyle:"short"})}),Object(r.jsx)(G.a,{align:"right",children:t.openSpots})]},t.eventName)}))})]})})},V=Object(o.b)((function(e){return{events:e.event}}),{fetchUpcomingEvents:D})((function(e){Object(c.useEffect)((function(){e.fetchUpcomingEvents()}),[e.fetchUpcomingEvents]);var t=Object(r.jsx)("div",{children:"Loading..."});return e.events.events.length&&(t=Object(r.jsx)(A,{events:e.events.events})),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Event List"}),t,Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(h.a,{component:j.b,to:"/admin",children:"Admin"})]})})),z=n(16),F=n(62),H=n(338),M=n(337),I=n(336),J=n(339),X=function(e){var t=e.label,n=e.input,c=e.meta,a=c.touched,i=c.invalid,s=c.error,j=Object(F.a)(e,["label","input","meta"]);return Object(r.jsx)(I.a,Object(z.a)(Object(z.a)({label:t,placeholder:t,error:a&&i,helperText:a&&s},n),j))},q=function(e){var t=e.label,n=e.input,c=e.meta,a=(c.touched,c.invalid,c.error,Object(F.a)(e,["label","input","meta"]));return Object(r.jsx)(I.a,Object(z.a)(Object(z.a)({id:"datetime-local",label:t,type:"datetime-local",InputLabelProps:{shrink:!0}},n),a))},B=Object(M.a)({form:"event"})((function(e){var t=e.handleSubmit;e.pristine,e.reset,e.submitting,e.classes;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{name:"eventName",component:X,label:"Event Name"})}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{name:"date",component:q,label:"Event Date & Time"})}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{name:"openSpots",component:X,type:"number",label:"Open Spots",inputProps:{min:0}})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(J.a,{type:"submit",variant:"contained",color:"secondary",children:"Submit"})]})})),Q=Object(o.b)((function(e){return{created:e.event.created}}),{createEvent:function(e){return function(){var t=Object(m.a)(x.a.mark((function t(n){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("/event",e);case 2:r=t.sent,n({type:E,payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},startCreateGroup:L})((function(e){Object(c.useEffect)((function(){e.startCreateGroup()}),[e.startCreateGroup]);var t=e.created?Object(r.jsx)(u.a,{to:"/"}):null;return Object(r.jsxs)(a.a.Fragment,{children:[t,Object(r.jsx)("h2",{children:"Create An Event:"}),Object(r.jsx)(B,{onSubmit:function(t){e.createEvent(t)}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(j.b,{to:"/reservations",children:"View Reservations"})]})})),W=function(e){var t=e.label,n=e.input,c=e.meta,a=c.touched,i=c.invalid,s=c.error,j=Object(F.a)(e,["label","input","meta"]);return Object(r.jsx)(I.a,Object(z.a)(Object(z.a)({label:t,placeholder:t,error:a&&i,helperText:a&&s},n),j))},Y=function(e){var t=e.handleSubmit;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{name:"groupName",component:W,label:"Group Name"})}),Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{name:"email",component:W,type:"email",label:"Email"})}),Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{name:"groupSize",component:W,type:"number",label:"How Many People in Your Group?",inputProps:{min:1}})}),Object(r.jsx)("br",{}),Object(r.jsx)(J.a,{type:"submit",variant:"contained",color:"secondary",children:"Submit"})]})},K=Y=Object(M.a)({form:"reserve"})(Y),Z=n(148),$=n.n(Z),ee=n(149),te=n.n(ee),ne=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Reservation Confirmation"}),console.log("GROUP: ",e.group,e.event),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Group Name: "}),e.group.groupName," ",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Group Size: "}),e.group.groupSize," ",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Email: "}),e.group.email," ",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Event Name: "}),e.event.eventName," ",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Event Date: "}),new Date(e.event.date).toLocaleDateString("en-us")," ",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Event Time: "}),new Date(e.event.date).toLocaleTimeString("en-us",{timeStyle:"short"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("strong",{children:["Time Reservation Made:"," ",(new Date).toLocaleString("en-us",{dateStyle:"short",timeStyle:"short"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{children:"The above details have been sent to you."}),Object(r.jsx)("br",{}),Object(r.jsxs)(J.a,{variant:"contained",color:"primary",onClick:function(){return window.print()},children:[Object(r.jsx)($.a,{}),"Print"]}),"  ",Object(r.jsx)(j.b,{to:"/",children:Object(r.jsxs)(J.a,{variant:"contained",color:"primary",children:[Object(r.jsx)(te.a,{}),"Close"]})})]})]})},re=Object(o.b)((function(e){return{event:e.event.events,created:e.group.created,group:e.group.group}}),{fetchEvent:function(e){return function(){var t=Object(m.a)(x.a.mark((function t(n){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/event/".concat(e));case 2:r=t.sent,n({type:S,payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createGroup:function(e,t){return function(){var n=Object(m.a)(x.a.mark((function n(r){var c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.post("/group/".concat(e),t);case 2:c=n.sent,r({type:T,payload:c.data});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},startCreateGroup:L})((function(e){Object(c.useEffect)((function(){return e.fetchEvent(e.match.params.id),function(){return e.startCreateGroup()}}),[e.fetchEvent]);var t=Object(r.jsx)("div",{children:"Loading ..."});return e.event&&(t=Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Make Reservation"}),Object(r.jsxs)("h4",{children:[e.event.eventName," -"," ",new Date(e.event.date).toLocaleDateString("us-en",{weekday:"short"}),", ",new Date(e.event.date).toLocaleString("en-us",{dateStyle:"short",timeStyle:"short"})]}),Object(r.jsx)(K,{onSubmit:function(t){e.createGroup(e.match.params.id,t)},event:e.event})]})),Object(r.jsx)("div",{children:e.created?Object(r.jsx)(ne,{group:e.group.dbGroup,event:e.event}):t})})),ce=Object(o.b)((function(e){return{events:e.event.events}}),{fetchUpcomingEvents:D})((function(e){Object(c.useEffect)((function(){e.fetchUpcomingEvents()}),[e.fetchUpcomingEvents]);var t=Object(r.jsx)("div",{children:"Loading..."});return e.events.length>0&&(t=Object(r.jsx)(A,{events:e.events,admin:!0})),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Reservation List"}),t]})})),ae=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h3",{children:["Groups for: ",e.event[0].eventName," - ",new Date(e.event[0].date).toLocaleString()]}),Object(r.jsx)(R.a,{component:U.a,children:Object(r.jsxs)(C.a,{"aria-label":"group table",children:[Object(r.jsx)(P.a,{children:Object(r.jsxs)(k.a,{children:[Object(r.jsx)(G.a,{children:"Group"}),Object(r.jsx)(G.a,{align:"right",children:"Quantity"}),Object(r.jsx)(G.a,{align:"right",children:"Email"}),Object(r.jsx)(G.a,{align:"right",children:"Note"}),Object(r.jsx)(G.a,{align:"right",children:"Edit"})]})}),Object(r.jsx)(_.a,{children:e.event[0].groups.map((function(e){return Object(r.jsxs)(k.a,{children:[Object(r.jsx)(G.a,{component:"th",scope:"row",children:e.groupName}),Object(r.jsx)(G.a,{align:"right",children:e.groupSize}),Object(r.jsx)(G.a,{align:"right",children:e.email})]},e._id)}))})]})})]})},ie=Object(o.b)((function(e){return{event:e.event.events}}),{fetchPopulatedEvent:function(e){return function(){var t=Object(m.a)(x.a.mark((function t(n){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("event/admin/".concat(e));case 2:r=t.sent,n({type:y,payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){Object(c.useEffect)((function(){e.fetchPopulatedEvent(e.match.params.id)}),[e.fetchEvent]);var t=Object(r.jsx)("div",{children:"Loading..."});return console.log("EVENT: ",e.event),e.event[0]&&e.event[0].groups&&(t=Object(r.jsx)(ae,{event:e.event})),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Reservations"}),t]})})),se=Object(u.g)((function(e){var t=Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/",exact:!0,component:V}),Object(r.jsx)(u.b,{path:"/admin",component:Q}),Object(r.jsx)(u.b,{path:"/reserve/:id",exact:!0,component:re}),Object(r.jsx)(u.b,{path:"/reservations",exact:!0,component:ce}),Object(r.jsx)(u.b,{path:"/reservations/:id",exact:!0,component:ie})]});return Object(r.jsxs)("div",{children:[Object(r.jsx)(d.a,{}),Object(r.jsx)(O.a,{maxWidth:"md",children:Object(r.jsx)(p,{children:t})})]})})),je=n(340),oe=n(150),be=n.n(oe),le={events:[],created:!1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(z.a)(Object(z.a)({},e),{},{events:t.payload,created:!1});case S:return Object(z.a)(Object(z.a)({},e),{},{events:t.payload});case E:return Object(z.a)(Object(z.a)({},e),{},{events:t.payload,created:!0});case w:return Object(z.a)(Object(z.a)({},e),{},{events:t.payload});default:return e}},de={created:!1},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(z.a)(Object(z.a)({},e),{},{group:t.payload,created:!0});case N:return Object(z.a)(Object(z.a)({},e),{},{created:!1});default:return e}},he=Object(b.c)({church:be.a,event:ue,group:Oe,form:je.a}),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,ve=Object(b.e)(he,pe(Object(b.a)(l.a)));s.a.render(Object(r.jsx)(o.a,{store:ve,children:Object(r.jsx)(j.a,{children:Object(r.jsx)(se,{})})}),document.querySelector("#root"))}},[[295,1,2]]]);
//# sourceMappingURL=main.bb720e2e.chunk.js.map