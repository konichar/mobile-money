(this["webpackJsonpmobile-money"]=this["webpackJsonpmobile-money"]||[]).push([[0],{20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(6),s=n.n(c),i=n(13),o=n.n(i),r=(n(20),n(9)),u=n(14).a.initializeApp({apiKey:"AIzaSyD5CdtPsVHQWbLg53DTYatZPtn9V5hbqII",authDomain:"mobile-money-ddb7a.firebaseapp.com",databaseURL:"https://mobile-money-ddb7a.firebaseio.com",projectId:"mobile-money-ddb7a",storageBucket:"mobile-money-ddb7a.appspot.com",messagingSenderId:"564905005929",appId:"1:564905005929:web:b1e083aa8c99776b43a3f8",measurementId:"G-QQXQT5NM0T"}),d=function(e){var t=e.email,n=e.setEmail,c=e.password,s=e.setPassword,i=e.handleLogin,o=e.handleSignUp,r=e.hasAccount,u=e.setHasAccount,d=e.emailError,l=e.passwordError;return Object(a.jsx)("section",{className:"login",children:Object(a.jsxs)("div",{className:"loginContainer",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(a.jsx)("p",{className:"errorMsg",children:d}),Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{type:"password",required:!0,value:c,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("p",{className:"errorMsg",children:l}),Object(a.jsx)("div",{className:"btnContainer",children:r?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:i,children:"Sign in"}),Object(a.jsxs)("p",{children:["Don't have an account ?",Object(a.jsx)("span",{onClick:function(){return u(!r)},children:"Sign up"})]})]}):Object(a.jsxs)("p",{children:[Object(a.jsx)("button",{onClick:o,children:"Sign up"}),"Have an account ?",Object(a.jsx)("span",{onClick:function(){return u(!r)},children:"Sign in"})]})})]})})},l=function(e){return Object(a.jsx)("section",{children:Object(a.jsxs)("nav",{children:[Object(a.jsx)("h2",{children:"Welcome"}),Object(a.jsx)("button",{onClick:e,children:"Logout"})]})})},b=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),o=Object(r.a)(i,2),b=o[0],j=o[1],h=Object(c.useState)(""),m=Object(r.a)(h,2),p=m[0],O=m[1],g=Object(c.useState)(""),f=Object(r.a)(g,2),x=f[0],w=f[1],S=Object(c.useState)(""),v=Object(r.a)(S,2),C=v[0],y=v[1],k=Object(c.useState)(!1),E=Object(r.a)(k,2),A=E[0],I=E[1],P=function(){w("")};return Object(c.useEffect)((function(){u.auth().onAuthStateChanged((function(e){e?(j(""),O(""),s(e)):s("")}))}),[]),Object(a.jsx)("div",{className:"App",children:n?Object(a.jsx)(l,{handleLogout:function(){u.auth().signOut()}}):Object(a.jsx)(d,{email:b,setEmail:j,password:p,setPassword:O,handleLogin:function(){P(),u.auth().signInWithEmailAndPassword(b,p).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":w(e.message);break;case"auth/wrong-password":y(e.message)}}))},handleSignUp:function(){P(),u.auth().createUserWithEmailAndPassword(b,p).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":w(e.message);break;case"auth/weak-password":y(e.message)}}))},hasAccount:A,setHasAccount:I,emailError:x,passwordError:C})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),j()}},[[25,1,2]]]);
//# sourceMappingURL=main.3c69ce9c.chunk.js.map