(this["webpackJsonpreact-level-2"]=this["webpackJsonpreact-level-2"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),s=n.n(a),i=n(2),u=(n(11),n(0));function o(e){var t=e.getInputValue,n=e.searchIcon,r=Object(c.useState)(""),a=Object(i.a)(r,2),s=a[0],o=a[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){t(s)}),1e3);return function(){return clearTimeout(e)}}),[s]),Object(u.jsxs)("div",{className:"search-input",children:[Object(u.jsx)("p",{className:"search-input__icon ".concat(s?"search-input__icon--text":""," material-icons-outlined"),children:n}),Object(u.jsx)("input",{type:"text",value:s,onChange:function(e){return o(e.target.value)},placeholder:"Search a user"})]})}n(13);function l(e){var t=e.dataItem,n=t.login,c=t.avatar_url,r=t.html_url,a=t.score;return Object(u.jsxs)("div",{className:"github-element",children:[Object(u.jsx)("img",{src:c,alt:"user avatar"}),Object(u.jsxs)("div",{className:"github-element__info",children:[Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:n})}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"".concat(r,"?tab=repositories"),target:"_blank",rel:"noreferrer",children:"See user's repositeries"})}),Object(u.jsxs)("p",{children:["".concat(a).concat(a%1===0?".0":""),Object(u.jsx)("span",{className:"github-element__score-icon material-icons-round",children:"star"})]})]})]})}n(14);function j(e){var t,n=e.dataArray,c=e.Component,r=e.userMessage;return t=r?Object(u.jsx)("div",{children:r}):function(e,t){return e.map((function(e){return Object(u.jsx)(t,{dataItem:e},e.id)}))}(n,c),Object(u.jsx)("div",{children:t})}n(15);function h(e){var t=e.totalPages,n=e.currentPage,c=e.changeOnePage,r=e.changeToPage;if(t<2)return null;var a=function(){for(var e=[],a=t,s=1;s<=a;s++)1===s||s===a||s>=n-1&&s<=n+1?e.push(s):s!==n-2&&s!==n+2||e.push("...");var i=e.map((function(e,t){return"..."===e?Object(u.jsx)("div",{className:"pages__more",children:Object(u.jsx)("p",{children:e})},t+1):Object(u.jsx)("div",{className:"pages__number ".concat(e===n?"pages__number--current":""),onClick:function(){return r(e)},children:Object(u.jsx)("p",{children:e})},t+1)})),o=Object(u.jsx)("div",{className:"pages__arrow".concat(1===n?"--disabled":""),onClick:function(){return c(-1)},children:Object(u.jsx)("p",{className:"material-icons",children:"chevron_left"})},0),l=Object(u.jsx)("div",{className:"pages__arrow".concat(n===a?"--disabled":""),onClick:function(){return c(1)},children:Object(u.jsx)("p",{className:"material-icons",children:"chevron_right"})},i.length+1);return i.unshift(o),i.push(l),i}();return Object(u.jsx)("div",{className:"pages",children:a})}var b=n(4),d=n.n(b),f=n(6),p="https://api.github.com/",g="It looks like you have reached the API rate limit, you might want to try again in a minute !";function O(){return(O=Object(f.a)(d.a.mark((function e(t,n){var c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(p,"search/users?q=").concat(t).concat(n>1?"&page=".concat(n):""),e.next=3,fetch(c);case 3:if("Forbidden"!==(r=e.sent).statusText){e.next=6;break}return e.abrupt("return",Promise.reject({message:g}));case 6:return e.next=8,r.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(17);var m=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(i.a)(a,2),b=s[0],d=s[1],f=Object(c.useState)(0),p=Object(i.a)(f,2),g=p[0],m=p[1],x=Object(c.useState)(""),v=Object(i.a)(x,2),_=v[0],y=v[1],N=Object(c.useState)(1),k=Object(i.a)(N,2),P=k[0],S=k[1],w=function(e,t){e?function(e,t){return O.apply(this,arguments)}(e,t).then((function(e){t||S(1),d(e.items),m(e.total_count),e.total_count?y(""):y("Sorry, we were unable to find any user with this username, try again ;)")})).catch((function(e){console.error(e.message),y(e.message)})):(d([]),y("Enter the user's name you are looking for in the field above."),m(0))};return Object(c.useEffect)((function(){w(n)}),[n]),Object(c.useEffect)((function(){w(n,P)}),[P]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(o,{getInputValue:r,searchIcon:"search",n:g}),Object(u.jsx)(j,{dataArray:b,Component:l,userMessage:_}),Object(u.jsx)(h,{totalPages:Math.ceil(g/30)>34?34:Math.ceil(g/30)||1,currentPage:P,changeOnePage:function(e){S(P+e)},changeToPage:function(e){S(e)}})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),x()}],[[18,1,2]]]);
//# sourceMappingURL=main.f8178f13.chunk.js.map