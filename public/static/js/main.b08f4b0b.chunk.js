(this["webpackJsonpsalmonel-react-app"]=this["webpackJsonpsalmonel-react-app"]||[]).push([[0],{105:function(e,n,t){"use strict";t.r(n);var i=t(3),r=t(0),a=t.n(r),c=t(9),s=t.n(c),o=(t(83),t(27)),l=t.n(o),u=t(39),d=t(154),h=(t(85),t(42)),f=t(142),j=t(145),g=t(148),b=t(152),p=t(151),O=t(147),x=t(149),A=t(156),m=t(150),v=t(16),y=t(51),F=function(e){try{var n=localStorage.getItem(e);if(null===n)return;return JSON.parse(n)}catch(t){return}}("reducer"),H=F?F.state.search:{serovar:"Nitra",serovars:["Nitra"],data:["first-load"],oAntigenVariants:[],h1AntigenVariants:[],h2AntigenVariants:[],queryFilter:{find:{OAntigen:[],H1Antigen:[],H2Antigen:[]},exclude:{OAntigen:[],H1Antigen:[],H2Antigen:[]}}},w=Object(y.b)({name:"search",initialState:H,reducers:{pushNewSerovar:function(e,n){e.serovars.includes(e.town)||e.serovars.push(e.town)},deleteSerovar:function(e,n){var t=e.serovars.indexOf(n.payload);e.serovars.splice(t,1)},setNewSerovar:function(e,n){e.serovar=n.payload},setNewData:function(e,n){e.data=n.payload,n.payload.forEach((function(n){var t=n.o_antigen,i=n.h_antigen1,r=n.h_antigen2;t.forEach((function(n){var t=function(e){return"["===e[0]||"{"===e[0]||"("===e[0]?"]"===e[e.length-1]||"}"===e[e.length-1]||")"===e[e.length-1]?e.slice(1,-1):e.slice(1):"]"===e[e.length-1]||"}"===e[e.length-1]||")"===e[e.length-1]?e.slice(0,-1):e}(n);e.oAntigenVariants.find((function(e){return e[0]===t}))||e.oAntigenVariants.push([t,"white"])})),i.forEach((function(n){e.h1AntigenVariants.find((function(e){return e[0]===n}))||e.h1AntigenVariants.push([n,"white"])})),r.forEach((function(n){e.h2AntigenVariants.find((function(e){return e[0]===n}))||e.h2AntigenVariants.push([n,"white"])}))}))},updateNewData:function(e,n){e.data=n.payload,console.log(e.data)},updateOAntigenVariants:function(e,n){var t=e.oAntigenVariants[n.payload];if("white"===t[1])t[1]="#AAFFB3",e.queryFilter.find.OAntigen.push(t[0]);else if("#AAFFB3"===t[1]){t[1]="#FFAFAA",e.queryFilter.exclude.OAntigen.push(t[0]);var i=e.queryFilter.find.OAntigen.indexOf(t[0]);e.queryFilter.find.OAntigen.splice(i,1)}else if("#FFAFAA"===t[1]){t[1]="white";var r=e.queryFilter.exclude.OAntigen.indexOf(t[0]);e.queryFilter.exclude.OAntigen.splice(r,1)}},updateH1AntigenVariants:function(e,n){var t=e.h1AntigenVariants[n.payload];if("white"===t[1])t[1]="#AAFFB3",e.queryFilter.find.H1Antigen.push(t[0]);else if("#AAFFB3"===t[1]){t[1]="#FFAFAA",e.queryFilter.exclude.H1Antigen.push(t[0]);var i=e.queryFilter.find.H1Antigen.indexOf(t[0]);e.queryFilter.find.H1Antigen.splice(i,1)}else if("#FFAFAA"===t[1]){t[1]="white";var r=e.queryFilter.exclude.H1Antigen.indexOf(t[0]);e.queryFilter.exclude.H1Antigen.splice(r,1)}},updateH2AntigenVariants:function(e,n){var t=e.h2AntigenVariants[n.payload];if("white"===t[1])t[1]="#AAFFB3",e.queryFilter.find.H2Antigen.push(t[0]);else if("#AAFFB3"===t[1]){t[1]="#FFAFAA",e.queryFilter.exclude.H2Antigen.push(t[0]);var i=e.queryFilter.find.H2Antigen.indexOf(t[0]);e.queryFilter.find.H2Antigen.splice(i,1)}else if("#FFAFAA"===t[1]){t[1]="white";var r=e.queryFilter.exclude.H2Antigen.indexOf(t[0]);e.queryFilter.exclude.H2Antigen.splice(r,1)}},clearQueryFilter:function(e){e.oAntigenVariants.forEach((function(e){e[1]="white"})),e.h1AntigenVariants.forEach((function(e){e[1]="white"})),e.h2AntigenVariants.forEach((function(e){e[1]="white"})),e.queryFilter={find:{OAntigen:[],H1Antigen:[],H2Antigen:[]},exclude:{OAntigen:[],H1Antigen:[],H2Antigen:[]}}}}}),k=w.actions,N=k.clearQueryFilter,V=k.updateH1AntigenVariants,q=k.updateH2AntigenVariants,S=(k.setNewSerovar,k.setNewData),C=k.updateOAntigenVariants,E=k.updateNewData,W=function(e){return e.search.serovar},P=function(e){return e.search.data},B=function(e){return e.search.oAntigenVariants},I=function(e){return e.search.h1AntigenVariants},_=function(e){return e.search.h2AntigenVariants},D=function(e){return e.search.queryFilter},J=w.reducer,L=(w.reducer,w.actions,[{id:"allgroups",label:"\u0413\u0440\u0443\u043f\u043f\u0430",minWidth:60},{id:"serovar",label:"\u0421\u0435\u0440\u043e\u0432\u0430\u0440",minWidth:60},{id:"o_antigen",label:"\u0421\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u041e \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b",minWidth:40},{id:"h_antigen1",label:"\u0421\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 H \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b (\u0424\u0430\u0437\u0430 1)",minWidth:40},{id:"h_antigen2",label:"\u0421\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 H \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b (\u0424\u0430\u0437\u0430 2)",minWidth:40}]),R=Object(f.a)({root:{maxWidth:690,marginLeft:"auto",marginRight:"auto"},container:{maxHeight:500}});function T(){var e=Object(v.b)(),n=Object(v.c)(P),t=R(),c=a.a.useState(0),s=Object(h.a)(c,2),o=s[0],d=s[1],f=a.a.useState(15),y=Object(h.a)(f,2),F=y[0],H=y[1],w=Object(v.c)(D);Object(r.useEffect)((function(){"first-load"===n[0]&&k().then((function(n){e(S(n))}))}),[]),Object(r.useEffect)(Object(u.a)(l.a.mark((function n(){var t,i,r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URL("https://salmonel-heroku.herokuapp.com/filter"),i=[["filter",JSON.stringify(w)]],t.search=new URLSearchParams(i).toString(),n.next=5,fetch(t);case 5:return r=n.sent,n.next=8,r.json();case 8:a=n.sent,e(E(a));case 10:case"end":return n.stop()}}),n)}))),[w]);var k=function(){var e=Object(u.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://salmonel-heroku.herokuapp.com/test",e.next=3,fetch("https://salmonel-heroku.herokuapp.com/test");case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.next=9,t;case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)(j.a,{className:t.root,children:[Object(i.jsx)(O.a,{className:t.container,children:Object(i.jsxs)(g.a,{size:"small",stickyHeader:!0,"aria-label":"sticky table",children:[Object(i.jsx)(x.a,{children:Object(i.jsx)(m.a,{style:{height:33},children:L.map((function(e){return Object(i.jsx)(p.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(i.jsx)(b.a,{children:n.slice(o*F,o*F+F).map((function(e){return Object(i.jsx)(m.a,{hover:!0,role:"checkbox",tabIndex:-1,children:L.map((function(n){var t=e[n.id];return Array.isArray(t)&&(t=t.join(", ")),Object(i.jsx)(p.a,{align:n.align,children:n.format&&"number"===typeof t?n.format(t):t},n.id)}))},e.code)}))})]})}),Object(i.jsx)(A.a,{rowsPerPageOptions:[15,50,100,500],component:"div",count:n.length,rowsPerPage:F,page:o,onChangePage:function(e,n){d(n)},onChangeRowsPerPage:function(e){H(+e.target.value),d(0)}})]})}var z=t(5),Q=t(155),U=Object(f.a)((function(e){return{root:{},dropdown:{position:"absolute",float:"bottom",right:0,left:0,zIndex:5,border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}})),M=Object(z.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 0px",border:"1px solid",lineHeight:1.5,borderColor:"#3f51b5",fontFamily:"sans-serif"}})(d.a);function G(e){var n=e.data,t=e.name,c=Object(v.b)(),s=U(),o=a.a.useState(!1),l=Object(h.a)(o,2),u=l[0],f=l[1];Object(r.useEffect)((function(){}),[]);return Object(i.jsx)(Q.a,{onClickAway:function(){f(!1)},children:Object(i.jsxs)("div",{className:s.root,children:[Object(i.jsx)(d.a,{style:{textTransform:"none"},variant:"contained",color:"primary",onClick:function(){f((function(e){return!e}))},children:t}),u?Object(i.jsx)("div",{className:s.dropdown,children:n.map((function(e,n){return Object(i.jsx)(M,{onClick:function(){return function(e){"\u041e \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"===t?c(C(e)):"H1 \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"===t?c(V(e)):"H2 \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"===t&&c(q(e))}(n)},color:"primary",style:{backgroundColor:e[1]},children:e[0]},e[0])}))}):null]})})}var K=t(43),X=t(14),Y=t(153),Z=t(66),$=t.n(Z);t(90);function ee(){Object(v.b)();var e=Object(v.c)(D);return Object(i.jsx)("div",{children:Object(i.jsxs)("fieldset",{children:[Object(i.jsx)("legend",{align:"left",children:"\u041f\u043e\u0438\u0441\u043a"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{style:{fontWeight:"bold"},children:"O:"}),Object(i.jsx)("span",{style:{color:"green"},children:e.find.OAntigen.map((function(e,n){return n>0?","+e:e}))}),Object(i.jsx)("span",{style:{color:"red"},children:e.exclude.OAntigen.map((function(n,t){return t>0||e.find.OAntigen.length>0?","+n:n}))}),Object(i.jsx)("span",{style:{fontWeight:"bold"},children:"    H1:"}),Object(i.jsx)("span",{style:{color:"green"},children:e.find.H1Antigen.map((function(e,n){return n>0?","+e:e}))}),Object(i.jsx)("span",{style:{color:"red"},children:e.exclude.H1Antigen.map((function(n,t){return t>0||e.find.H1Antigen.length>0?","+n:n}))}),Object(i.jsx)("span",{style:{fontWeight:"bold"},children:"    H2:"}),Object(i.jsx)("span",{style:{color:"green"},children:e.find.H2Antigen.map((function(e,n){return n>0?","+e:e}))}),Object(i.jsx)("span",{style:{color:"red"},children:e.exclude.H2Antigen.map((function(n,t){return t>0||e.find.H2Antigen.length>0?","+n:n}))})]})]})})}var ne=function(){var e=Object(v.b)(),n=(Object(v.c)(W),Object(v.c)(B)),t=Object(v.c)(I),r=Object(v.c)(_);return Object(v.c)(D),Object(i.jsx)(K.a,{basename:"/",children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)(K.b,{className:"link",to:"/search",children:Object(i.jsx)(d.a,{variant:"contained",color:"link",children:"\u041e\u041f\u0420\u0415\u0414\u0415\u041b\u0418\u0422\u042c \u0411\u0410\u041a\u0422\u0415\u0420\u0418\u0418"})}),Object(i.jsx)(K.b,{className:"link",to:"/info",children:Object(i.jsx)(d.a,{variant:"contained",color:"link",children:"\u041b\u0415\u0413\u0415\u041d\u0414\u0410"})}),Object(i.jsx)(K.b,{className:"link",to:"/contacts",children:Object(i.jsx)(d.a,{variant:"contained",color:"link",children:"\u041e\u0411\u0420\u0410\u0422\u041d\u0410\u042f \u0421\u0412\u042f\u0417\u042c"})})]}),Object(i.jsxs)(X.c,{children:[Object(i.jsx)(X.a,{path:"/search",children:Object(i.jsxs)("div",{className:"search",children:[Object(i.jsxs)("div",{className:"filter",children:[Object(i.jsxs)("div",{className:"filterResults",children:[Object(i.jsx)(ee,{}),Object(i.jsx)(Y.a,{onClick:function(n){e(N())},"aria-label":"delete",children:Object(i.jsx)($.a,{})})]}),Object(i.jsxs)("div",{className:"filterButtons",children:[Object(i.jsx)(G,{data:n,name:"\u041e \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"}),Object(i.jsx)(G,{data:t,name:"H1 \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"}),Object(i.jsx)(G,{data:r,name:"H2 \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"})]})]}),Object(i.jsx)(T,{})]})}),Object(i.jsx)(X.a,{path:"/admin",children:Object(i.jsx)("p",{children:"admin"})}),Object(i.jsx)(X.a,{path:"/info",children:Object(i.jsx)("p",{children:"info"})}),Object(i.jsx)(X.a,{path:"/contacts",children:Object(i.jsx)("p",{children:"contacts"})}),Object(i.jsx)(X.a,{path:"/",children:Object(i.jsx)("p",{children:"main window"})})]})]})})},te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,158)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))},ie=Object(y.a)({reducer:{search:J}}),re=t(67),ae=t.n(re);ie.subscribe(ae()((function(){!function(e,n){try{var t=JSON.stringify(e);localStorage.setItem(n,t)}catch(i){throw new Error("Can't save changes in local storage")}}({state:ie.getState()},"reducer")}),1e3)),s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(v.a,{store:ie,children:Object(i.jsx)(ne,{})})}),document.getElementById("root")),te()},83:function(e,n,t){},85:function(e,n,t){},90:function(e,n,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.b08f4b0b.chunk.js.map