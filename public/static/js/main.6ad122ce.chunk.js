(this["webpackJsonpsalmonel-react-app"]=this["webpackJsonpsalmonel-react-app"]||[]).push([[0],{104:function(e,n,t){"use strict";t.r(n);var i=t(3),r=t(0),a=t.n(r),c=t(9),s=t.n(c),l=(t(82),t(154)),o=(t(83),t(41)),u=t.n(o),d=t(55),h=t(40),f=t(142),j=t(145),g=t(148),b=t(152),O=t(151),p=t(147),x=t(149),A=t(156),m=t(150),F=t(16),y=t(50),v=function(e){try{var n=localStorage.getItem(e);if(null===n)return;return JSON.parse(n)}catch(t){return}}("reducer"),H=v?v.state.search:{data:["first-load"],oAntigenVariants:[],h1AntigenVariants:[],h2AntigenVariants:[],queryFilter:{find:{OAntigen:[],H1Antigen:[],H2Antigen:[]},exclude:{OAntigen:[],H1Antigen:[],H2Antigen:[]}}},w=Object(y.b)({name:"search",initialState:H,reducers:{setNewData:function(e,n){e.data=n.payload,n.payload.forEach((function(n){var t=n.o_antigen,i=n.h_antigen1,r=n.h_antigen2,a=function(e,n){var t=function(e){return"["===e[0]||"{"===e[0]||"("===e[0]?"]"===e[e.length-1]||"}"===e[e.length-1]||")"===e[e.length-1]?e.slice(1,-1):e.slice(1):"]"===e[e.length-1]||"}"===e[e.length-1]||")"===e[e.length-1]?e.slice(0,-1):e}(e);t.includes(",")?t.split(",").forEach((function(e){n.find((function(n){return n[0]===e}))||n.push([e,"white"])})):n.find((function(e){return e[0]===t}))||n.push([t,"white"])};t.forEach((function(n){a(n,e.oAntigenVariants)})),i.forEach((function(n){a(n,e.h1AntigenVariants)})),r.forEach((function(n){a(n,e.h2AntigenVariants)}))})),e.oAntigenVariants=e.oAntigenVariants.sort(),e.h1AntigenVariants=e.h1AntigenVariants.sort(),e.h2AntigenVariants=e.h2AntigenVariants.sort()},updateNewData:function(e,n){e.data=n.payload,console.log(e.data)},updateOAntigenVariants:function(e,n){var t=e.oAntigenVariants[n.payload];if("white"===t[1])t[1]="#AAFFB3",e.queryFilter.find.OAntigen.push(t[0]);else if("#AAFFB3"===t[1]){t[1]="#FFAFAA",e.queryFilter.exclude.OAntigen.push(t[0]);var i=e.queryFilter.find.OAntigen.indexOf(t[0]);e.queryFilter.find.OAntigen.splice(i,1)}else if("#FFAFAA"===t[1]){t[1]="white";var r=e.queryFilter.exclude.OAntigen.indexOf(t[0]);e.queryFilter.exclude.OAntigen.splice(r,1)}},updateH1AntigenVariants:function(e,n){var t=e.h1AntigenVariants[n.payload];if("white"===t[1])t[1]="#AAFFB3",e.queryFilter.find.H1Antigen.push(t[0]);else if("#AAFFB3"===t[1]){t[1]="#FFAFAA",e.queryFilter.exclude.H1Antigen.push(t[0]);var i=e.queryFilter.find.H1Antigen.indexOf(t[0]);e.queryFilter.find.H1Antigen.splice(i,1)}else if("#FFAFAA"===t[1]){t[1]="white";var r=e.queryFilter.exclude.H1Antigen.indexOf(t[0]);e.queryFilter.exclude.H1Antigen.splice(r,1)}},updateH2AntigenVariants:function(e,n){var t=e.h2AntigenVariants[n.payload];if("white"===t[1])t[1]="#AAFFB3",e.queryFilter.find.H2Antigen.push(t[0]);else if("#AAFFB3"===t[1]){t[1]="#FFAFAA",e.queryFilter.exclude.H2Antigen.push(t[0]);var i=e.queryFilter.find.H2Antigen.indexOf(t[0]);e.queryFilter.find.H2Antigen.splice(i,1)}else if("#FFAFAA"===t[1]){t[1]="white";var r=e.queryFilter.exclude.H2Antigen.indexOf(t[0]);e.queryFilter.exclude.H2Antigen.splice(r,1)}},clearQueryFilter:function(e){e.oAntigenVariants.forEach((function(e){e[1]="white"})),e.h1AntigenVariants.forEach((function(e){e[1]="white"})),e.h2AntigenVariants.forEach((function(e){e[1]="white"})),e.queryFilter={find:{OAntigen:[],H1Antigen:[],H2Antigen:[]},exclude:{OAntigen:[],H1Antigen:[],H2Antigen:[]}}}}}),V=w.actions,k=V.clearQueryFilter,q=V.updateH1AntigenVariants,N=V.updateH2AntigenVariants,S=V.setNewData,C=V.updateOAntigenVariants,E=V.updateNewData,W=function(e){return e.search.data},P=function(e){return e.search.oAntigenVariants},B=function(e){return e.search.h1AntigenVariants},I=function(e){return e.search.h2AntigenVariants},_=function(e){return e.search.queryFilter},D=w.reducer,J=(w.reducer,w.actions,[{id:"allgroups",label:"\u0413\u0440\u0443\u043f\u043f\u0430",minWidth:60},{id:"serovar",label:"\u0421\u0435\u0440\u043e\u0432\u0430\u0440",minWidth:60},{id:"o_antigen",label:"\u0421\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u041e \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b",minWidth:40},{id:"h_antigen1",label:"\u0421\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 H \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b (\u0424\u0430\u0437\u0430 1)",minWidth:40},{id:"h_antigen2",label:"\u0421\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 H \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b (\u0424\u0430\u0437\u0430 2)",minWidth:40}]),L=Object(f.a)({root:{maxWidth:690,marginLeft:"auto",marginRight:"auto"},container:{maxHeight:500}});function R(){var e=Object(F.b)(),n=Object(F.c)(W),t=L(),c=a.a.useState(0),s=Object(h.a)(c,2),l=s[0],o=s[1],f=a.a.useState(15),y=Object(h.a)(f,2),v=y[0],H=y[1],w=Object(F.c)(_);Object(r.useEffect)((function(){"first-load"===n[0]&&V().then((function(n){e(S(n))}))}),[]),Object(r.useEffect)(Object(d.a)(u.a.mark((function n(){var t,i,r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URL("https://salmonel-heroku.herokuapp.com/filter"),i=[["filter",JSON.stringify(w)]],t.search=new URLSearchParams(i).toString(),n.next=5,fetch(t);case 5:return r=n.sent,n.next=8,r.json();case 8:a=n.sent,e(E(a)),o(0);case 11:case"end":return n.stop()}}),n)}))),[w]);var V=function(){var e=Object(d.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://salmonel-heroku.herokuapp.com/test",e.next=3,fetch("https://salmonel-heroku.herokuapp.com/test");case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.next=9,t;case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)(j.a,{className:t.root,children:[Object(i.jsx)(p.a,{className:t.container,children:Object(i.jsxs)(g.a,{size:"small",stickyHeader:!0,"aria-label":"sticky table",children:[Object(i.jsx)(x.a,{children:Object(i.jsx)(m.a,{style:{height:33},children:J.map((function(e){return Object(i.jsx)(O.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(i.jsx)(b.a,{children:n.slice(l*v,l*v+v).map((function(e){return Object(i.jsx)(m.a,{hover:!0,role:"checkbox",tabIndex:-1,children:J.map((function(n){var t=e[n.id];return Array.isArray(t)&&(t=t.join(", ")),Object(i.jsx)(O.a,{align:n.align,children:n.format&&"number"===typeof t?n.format(t):t},n.id)}))},e.code)}))})]})}),Object(i.jsx)(A.a,{rowsPerPageOptions:[15,50,100,500],component:"div",count:n.length,rowsPerPage:v,page:l,onChangePage:function(e,n){o(n)},onChangeRowsPerPage:function(e){H(+e.target.value),o(0)}})]})}var T=t(5),z=t(155),Q=Object(f.a)((function(e){return{root:{},dropdown:{position:"absolute",float:"bottom",left:"1vw",width:"95vw",zIndex:5,border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}})),U=Object(T.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 0px",border:"1px solid",lineHeight:1.5,borderColor:"#3f51b5",fontFamily:"sans-serif"}})(l.a);function M(e){var n=e.data,t=e.name,c=Object(F.b)(),s=Q(),o=a.a.useState(!1),u=Object(h.a)(o,2),d=u[0],f=u[1];Object(r.useEffect)((function(){}),[]);return Object(i.jsx)(z.a,{onClickAway:function(){f(!1)},children:Object(i.jsxs)("div",{className:s.root,children:[Object(i.jsx)(l.a,{style:{textTransform:"none"},variant:"contained",color:"primary",onClick:function(){f((function(e){return!e}))},children:t}),d?Object(i.jsx)("div",{className:s.dropdown,children:n.map((function(e,n){return Object(i.jsx)(U,{onClick:function(){return function(e){"\u041e \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"===t?c(C(e)):"H1 \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"===t?c(q(e)):"H2 \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"===t&&c(N(e))}(n)},color:"primary",style:{backgroundColor:e[1]},children:e[0]},e[0])}))}):null]})})}var G=t(42),K=t(14),X=t(153),Y=t(66),Z=t.n(Y);t(89);function $(){var e=Object(F.c)(_);return Object(i.jsx)("div",{children:Object(i.jsxs)("fieldset",{children:[Object(i.jsx)("legend",{align:"left",children:"\u041f\u043e\u0438\u0441\u043a"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{style:{fontWeight:"bold"},children:"O:"}),Object(i.jsx)("span",{style:{color:"green"},children:e.find.OAntigen.map((function(e,n){return n>0?","+e:e}))}),Object(i.jsx)("span",{style:{color:"red"},children:e.exclude.OAntigen.map((function(n,t){return t>0||e.find.OAntigen.length>0?","+n:n}))}),Object(i.jsx)("span",{style:{fontWeight:"bold"},children:"    H1:"}),Object(i.jsx)("span",{style:{color:"green"},children:e.find.H1Antigen.map((function(e,n){return n>0?","+e:e}))}),Object(i.jsx)("span",{style:{color:"red"},children:e.exclude.H1Antigen.map((function(n,t){return t>0||e.find.H1Antigen.length>0?","+n:n}))}),Object(i.jsx)("span",{style:{fontWeight:"bold"},children:"    H2:"}),Object(i.jsx)("span",{style:{color:"green"},children:e.find.H2Antigen.map((function(e,n){return n>0?","+e:e}))}),Object(i.jsx)("span",{style:{color:"red"},children:e.exclude.H2Antigen.map((function(n,t){return t>0||e.find.H2Antigen.length>0?","+n:n}))})]})]})})}var ee=function(){var e=Object(F.b)(),n=Object(F.c)(P),t=Object(F.c)(B),r=Object(F.c)(I);return Object(i.jsx)(G.a,{basename:"/",children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)(G.b,{className:"link",to:"/search",children:Object(i.jsx)(l.a,{variant:"contained",color:"link",children:"\u041e\u041f\u0420\u0415\u0414\u0415\u041b\u0418\u0422\u042c \u0411\u0410\u041a\u0422\u0415\u0420\u0418\u0418"})}),Object(i.jsx)(G.b,{className:"link",to:"/info",children:Object(i.jsx)(l.a,{variant:"contained",color:"link",children:"\u041b\u0415\u0413\u0415\u041d\u0414\u0410"})}),Object(i.jsx)(G.b,{className:"link",to:"/contacts",children:Object(i.jsx)(l.a,{variant:"contained",color:"link",children:"\u041e\u0411\u0420\u0410\u0422\u041d\u0410\u042f \u0421\u0412\u042f\u0417\u042c"})})]}),Object(i.jsxs)(K.c,{children:[Object(i.jsx)(K.a,{path:"/search",children:Object(i.jsxs)("div",{className:"search",children:[Object(i.jsxs)("div",{className:"filter",children:[Object(i.jsxs)("div",{className:"filterResults",children:[Object(i.jsx)($,{}),Object(i.jsx)(X.a,{onClick:function(n){e(k())},"aria-label":"delete",children:Object(i.jsx)(Z.a,{})})]}),Object(i.jsxs)("div",{className:"filterButtons",children:[Object(i.jsx)(M,{data:n,name:"\u041e \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"}),Object(i.jsx)(M,{data:t,name:"H1 \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"}),Object(i.jsx)(M,{data:r,name:"H2 \u0430\u043d\u0442\u0438\u0433\u0435\u043d\u044b"})]})]}),Object(i.jsx)(R,{})]})}),Object(i.jsx)(K.a,{path:"/admin",children:Object(i.jsx)("p",{children:"admin"})}),Object(i.jsx)(K.a,{path:"/info",children:Object(i.jsx)("p",{children:"info"})}),Object(i.jsx)(K.a,{path:"/contacts",children:Object(i.jsx)("p",{children:"contacts"})}),Object(i.jsx)(K.a,{path:"/",children:Object(i.jsx)("p",{children:"main window"})})]})]})})},ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,158)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))},te=Object(y.a)({reducer:{search:D}}),ie=t(67),re=t.n(ie);te.subscribe(re()((function(){!function(e,n){try{var t=JSON.stringify(e);localStorage.setItem(n,t)}catch(i){throw new Error("Can't save changes in local storage")}}({state:te.getState()},"reducer")}),1e3)),s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(F.a,{store:te,children:Object(i.jsx)(ee,{})})}),document.getElementById("root")),ne()},82:function(e,n,t){},83:function(e,n,t){},89:function(e,n,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.6ad122ce.chunk.js.map