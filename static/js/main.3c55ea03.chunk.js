(this["webpackJsonpceplas-ceplos"]=this["webpackJsonpceplas-ceplos"]||[]).push([[0],{44:function(e,a,t){e.exports=t(67)},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(13),o=t.n(c),r=(t(49),t(28)),l=t(89),m=t(87),i=(t(50),t(88)),p=t(84),u=t(85),d=(t(51),Object(n.forwardRef)((function(e,a){var t=e.message,n=e.username===t.username;return s.a.createElement("div",{ref:a,className:"message ".concat(n&&"message__user")},s.a.createElement(i.a,{className:n?"message__userCard":"message__guestCard"},s.a.createElement(p.a,null,s.a.createElement(u.a,{color:"white",variant:"h5",component:"h2"},!n&&"".concat(t.username||"Unknown User",": ")," ",t.message))))}))),f=t(27),g=t.n(f),h=g.a.initializeApp({apiKey:"AIzaSyC7e1MZHOWs5RidoJi7XQF-IsRAhaLfgY4",authDomain:"ceplas-ceplos.firebaseapp.com",databaseURL:"https://ceplas-ceplos.firebaseio.com",projectId:"ceplas-ceplos",storageBucket:"ceplas-ceplos.appspot.com",messagingSenderId:"1085068887366",appId:"1:1085068887366:web:97b8f04ef7ed8c06ea5147",measurementId:"G-HC26LEMJ0Z"}).firestore(),E=t(41),b=t(40),v=t.n(b),_=t(39),w=t.n(_),j=t(86);var y=function(){var e=Object(n.useState)(""),a=Object(r.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)([]),i=Object(r.a)(o,2),p=i[0],u=i[1],f=Object(n.useState)(""),b=Object(r.a)(f,2),_=b[0],y=b[1];return Object(n.useEffect)((function(){h.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){u(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(n.useEffect)((function(){y(prompt("Please enter your name"))}),[]),s.a.createElement("div",{className:"App"},s.a.createElement(w.a,{className:"topLogo",style:{fontSize:120}}),s.a.createElement("h1",null,"Hello Ceplosers! :)"),s.a.createElement("h2",null,"Hi there, ",_,"!"),s.a.createElement("form",{className:"app__form"},s.a.createElement(l.a,{className:"app__formControl"},s.a.createElement(m.a,{className:"app__input",placeholder:"Enter a message...",value:t,onChange:function(e){return c(e.target.value)}}),s.a.createElement(j.a,{className:"app__iconButton",disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),h.collection("messages").add({message:t,username:_,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),c("")}},s.a.createElement(v.a,null)))),s.a.createElement(E.a,null,p.map((function(e){var a=e.id,t=e.message;return s.a.createElement(d,{key:a,message:t,username:_})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.3c55ea03.chunk.js.map