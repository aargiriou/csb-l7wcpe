(this["webpackJsonpreact-calendar"]=this["webpackJsonpreact-calendar"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(16),i=n(5),o=n(3),r=n(4),l=n.n(r),s=n(17),d=n(6),u=n.n(d),j=(n(27),["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]),b="YYYY-MM-DD",m="YYYY",f={title:"",place:"",time:"09:00",description:""};function O(){return l()().format(b)}function h(e,t){return l()("".concat(t,"-").concat(e,"-01"),b)}function v(e,t){var n=Array.from(Array(function(e,t){return h(e,t).daysInMonth()}(e,t)),(function(e,t){return t+1}));return n.map((function(n){return{dayOfMonth:n,date:l()("".concat(t,"-").concat(e,"-").concat(n),b).format(b),isCurrentMonth:!0}}))}var p=n(14),x=n(13),y=n(7),M=n(12),N=(n(28),n(29),n(9)),S=n(8);n(32);var w=n(0);function C(e){var t=e.title,n=e.subtitle,c=e.isVisible,i=e.isDisabled,o=e.handleClose,r=e.handleSave,l=e.handleDelete,s=void 0===l?function(){return null}:l,d=e.children,u=Object(a.useRef)();!function(e,t){Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}(u,o);var j=function(e){if("Escape"===e.key)o()};return Object(a.useEffect)((function(){return document.addEventListener("keydown",j),function(){return document.removeEventListener("keydown",j)}})),c&&Object(w.jsx)("div",{className:"modal","aria-modal":"true",children:Object(w.jsxs)("form",{className:"modal-main",onSubmit:r,ref:u,children:[Object(w.jsxs)("header",{className:"modal-header",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{className:"modal-title",children:t}),Object(w.jsx)("p",{className:"modal-subtitle",children:n})]}),Object(w.jsx)("button",{type:"button",className:"modal-close",onClick:o,autoFocus:!0,children:Object(w.jsx)(N.a,{icon:S.e})})]}),Object(w.jsx)("div",{className:"modal-body",children:d}),Object(w.jsxs)("div",{className:"modal-actions",children:[s&&Object(w.jsx)("button",{type:"button",className:"modal-action-delete",onClick:s,children:"Delete"}),Object(w.jsx)("button",{type:"button",className:"modal-action-cancel",onClick:o,children:"Cancel"}),Object(w.jsx)("button",{type:"submit",className:"modal-action-save",disabled:i,children:"Save"})]})]})})}function g(e){var t=e.modalVisible,n=e.handleModalClose,c=e.handleModalSave,r=e.handleModalDelete,s=e.initialModalData,d=e.isEditingEvent,u=e.dateSelected,j=Object(a.useState)(f),b=Object(o.a)(j,2),m=b[0],O=b[1],h=!!m.title&&!!m.time,v=Object(a.useState)(h),p=Object(o.a)(v,2),x=p[0],M=p[1];function N(e){var t=e.target;O((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(y.a)({},t.name,t.value))}))}return Object(a.useEffect)((function(){s&&O(s)}),[s]),Object(a.useEffect)((function(){if(!m.title||!m.time)return M(!1);M(!0)}),[m.title,m.time]),Object(w.jsxs)(C,{title:d?"Edit the event":"Add a new event",subtitle:l()(u).format("ddd, D MMM"),isVisible:t,isDisabled:!x,handleClose:n,handleSave:function(e){e.preventDefault(),c(m)},handleDelete:d&&r.bind(null,m),children:[Object(w.jsxs)("section",{className:"modal-field",children:[Object(w.jsx)("label",{htmlFor:"modal_field_title",children:"Title *"}),Object(w.jsx)("input",{type:"text",name:"title",id:"modal_field_title",value:m.title,onChange:N})]}),Object(w.jsxs)("section",{className:"modal-field",children:[Object(w.jsx)("label",{htmlFor:"modal_field_place",children:"Place"}),Object(w.jsx)("input",{type:"text",name:"place",id:"modal_field_place",value:m.place,onChange:N})]}),Object(w.jsxs)("section",{className:"modal-field",children:[Object(w.jsx)("label",{htmlFor:"modal_field_time",children:"Time *"}),Object(w.jsx)("input",{type:"time",name:"time",id:"modal_field_time",value:m.time,onChange:N,step:900})]}),Object(w.jsxs)("section",{className:"modal-field",children:[Object(w.jsx)("label",{htmlFor:"modal_field_description",children:"Description"}),Object(w.jsx)("textarea",{name:"description",id:"modal_field_description",value:m.description,onChange:N})]}),Object(w.jsx)("div",{className:"modal-info",children:"Mandatory fields (*)"})]})}n(34),n(35);function k(e){var t=e.day,n=e.handleModalOpen,c=Object(a.useState)(!1),i=Object(o.a)(c,2),r=i[0],l=i[1],s=function(){return l(!r)};return Object(w.jsxs)("button",{className:"day-of-month-wrapper",onClick:function(){return n(t)},onMouseEnter:s,onMouseLeave:s,title:"Add a new event",children:[Object(w.jsx)("span",{className:u()("day-of-month day-of-month-text",r?"invisible":"visible"),children:t.dayOfMonth}),Object(w.jsx)("span",{className:u()("day-of-month day-of-month-icon",r?"visible":"invisible"),children:Object(w.jsx)(N.a,{icon:S.b})})]})}function E(e){var t=e.day,n=e.eventData,a=e.handleModalOpen,c=u()("calendar-day",{"is-current":t.isCurrentMonth,"is-today":t.date===O()});return Object(w.jsxs)("div",{className:c,children:[Object(w.jsx)(k,{day:t,handleModalOpen:a}),n&&Object(w.jsx)("ul",{className:"day-events",children:Object.keys(n).sort((function(e,t){return e.localeCompare(t)})).map((function(e){var c=n[e];return Object(w.jsx)("li",{className:"day-event",onClick:function(){return a(t,c)},title:"Edit event",children:Object(w.jsx)("div",{children:c.title})},"".concat(t.date,"_").concat(c.time))}))})]})}function D(e){var t=e.month,n=e.year,c=Object(a.useState)(!1),r=Object(o.a)(c,2),s=r[0],d=r[1],u=Object(a.useState)(""),j=Object(o.a)(u,2),m=j[0],O=j[1],N=function(e,t){var n=Object(a.useState)((function(){if("undefined"===typeof window)return t;try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),c=Object(o.a)(n,2),i=c[0],r=c[1];return[i,function(t){try{var n=t instanceof Function?t(i):t;r(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("Calendar::events",{}),S=Object(o.a)(N,2),C=S[0],k=S[1],D=Object(a.useState)(f),_=Object(o.a)(D,2),Y=_[0],A=_[1],F=h(t,n),L=v(t,n),T=function(e,t){var n=l()(t).weekday(),a=e.subtract(1,"month"),c=n?n-1:6,i=l()(t).subtract(c,"day").date();return Array.from(Array(c),(function(){return i++})).map((function(e){return{date:l()("".concat(a.year(),"-").concat(a.month()+1,"-").concat(e),b).format(b),dayOfMonth:e,isCurrentMonth:!1}}))}(F.clone(),L[0].date),I=function(e,t){var n=l()(t).weekday(),a=e.add(1,"month"),c=n?7-n:n;return Array.from(Array(c),(function(e,t){return t+1})).map((function(e){return{date:l()("".concat(a.year(),"-").concat(a.month()+1,"-").concat(e),b).format(b),dayOfMonth:e,isCurrentMonth:!1}}))}(F.clone(),L.slice(-1)[0].date),J=[].concat(Object(M.a)(T),Object(M.a)(L),Object(M.a)(I)),V=!(!Y||!Y.title);function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;O(e.date),A(t),d(!0)}return Object(a.useEffect)((function(){s||A(f)}),[s]),Object(w.jsxs)(a.Fragment,{children:[Object(w.jsx)("section",{className:"calendar-days",children:J.map((function(e){return Object(w.jsx)(E,{day:e,handleModalOpen:R,eventData:C[e.date]},e.date)}))}),Object(w.jsx)(g,{modalVisible:s,handleModalClose:function(){d(!1)},handleModalSave:function(e){k((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(y.a)({},m,Object(i.a)(Object(i.a)({},t[m]),{},Object(y.a)({},e.time,e))))})),d(!1)},handleModalDelete:function(e){window.confirm("Are you sure you want to delete the event?")&&(k((function(t){var n=t[m],a=e.time,c=(n[a],Object(p.a)(n,[a].map(x.a))),o=Object.keys(c).length?Object(y.a)({},m,Object(i.a)({},c)):null;if(!o){t[m];var r=Object(p.a)(t,[m].map(x.a));return Object(i.a)({},r)}return Object(i.a)(Object(i.a)({},t),o)})),d(!1))},initialModalData:Y,isEditingEvent:V,dateSelected:m})]})}n(36);var _={left:S.c,right:S.d,today:S.a};function Y(e){var t=e.iconName,n=e.callback,a=e.title,c=e.cssClass;return Object(w.jsx)("button",{className:u()("header-action","icon-btn",c),title:a,onClick:function(){return n()},children:Object(w.jsx)(N.a,{icon:_[t]})})}function A(e){var t=e.month,n=void 0===t?l()().format("M"):t,c=e.year,r=void 0===c?l()().format(m):c,d=l()(new Date(r,n-1,1)),b=Object(a.useState)({date:d}),f=Object(o.a)(b,2),h=f[0],v=f[1],p=Object(a.useState)(!1),x=Object(o.a)(p,2),y=x[0],M=x[1],N=Object(s.a)({onSwipedLeft:C,onSwipedRight:S,onSwipeStart:function(){return M(!0)},onSwiped:function(){return M(!1)},onTouchEndOrOnMouseUp:function(){return M(!1)},swipeDuration:500,preventScrollOnSwipe:!0,trackMouse:!0});function S(){v((function(e){return{date:e.date.clone().subtract(1,"month")}}))}function C(){v((function(e){return{date:e.date.clone().add(1,"month")}}))}return Object(w.jsxs)("article",{className:"calendar",children:[Object(w.jsxs)("header",{className:"calendar-header",children:[Object(w.jsx)(Y,{title:"Previous month",iconName:"left",callback:S,cssClass:"action-previous"}),Object(w.jsx)("div",{className:"header-selected-month",children:h.date.format("MMMM YYYY")}),Object(w.jsx)(Y,{title:"Today",iconName:"today",callback:function(){v({date:l()(O())})}}),Object(w.jsx)(Y,{title:"Next month",iconName:"right",callback:C,cssClass:"action-next"})]}),Object(w.jsx)("section",{className:"day-of-week",children:j.map((function(e){return Object(w.jsx)("div",{children:e},e)}))}),Object(w.jsx)("section",Object(i.a)(Object(i.a)({className:u()("calendar-days-wrapper",{"is-swiping":y})},N),{},{children:Object(w.jsx)(D,{month:h.date.format("M"),year:h.date.format(m)})}))]})}n(37),n(38);function F(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(A,{})})}var L=document.getElementById("root");Object(c.createRoot)(L).render(Object(w.jsx)(a.StrictMode,{children:Object(w.jsx)(F,{})}))}},[[39,1,2]]]);
//# sourceMappingURL=main.f5667b82.chunk.js.map