(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(98)),o={id:"contributing",title:"Contributing",sidebar_label:"Contributing"},l={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"Style Guidelines",source:"@site/docs/contributing.md",slug:"/contributing",permalink:"/contributing",editUrl:"https://github.com/iansannar/remedy/edit/main/docs/contributing.md",version:"current",sidebar_label:"Contributing",sidebar:"docs",next:{title:"License",permalink:"/license"}},c=[{value:"Style Guidelines",id:"style-guidelines",children:[]},{value:"Git Guidelines",id:"git-guidelines",children:[{value:"Commit Messages",id:"commit-messages",children:[]}]}],b={toc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"style-guidelines"},"Style Guidelines"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Tabs over spaces")),Object(a.b)("h2",{id:"git-guidelines"},"Git Guidelines"),Object(a.b)("h3",{id:"commit-messages"},"Commit Messages"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Use the present tense ("Add feature" not "Added feature")'),Object(a.b)("li",{parentName:"ul"},'Use the imperative mood ("Increase bonus to..." not "Increases bonus to...")'),Object(a.b)("li",{parentName:"ul"},"Reference issues and pull requests in the extended description"),Object(a.b)("li",{parentName:"ul"},"Start the commit message with an applicable emoji:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u2728 ",Object(a.b)("inlineCode",{parentName:"li"},":sparkles:")," when adding new content or features"),Object(a.b)("li",{parentName:"ul"},"\u267b\ufe0f ",Object(a.b)("inlineCode",{parentName:"li"},":recycle:")," when reworking or moving a feature"),Object(a.b)("li",{parentName:"ul"},"\ud83d\udc94 ",Object(a.b)("inlineCode",{parentName:"li"},":broken_heart:")," when removing a feature"),Object(a.b)("li",{parentName:"ul"},"\ud83d\udcdd ",Object(a.b)("inlineCode",{parentName:"li"},":pencil:")," when adding new files"),Object(a.b)("li",{parentName:"ul"},"\ud83d\ude9a ",Object(a.b)("inlineCode",{parentName:"li"},":truck:")," when moving or renaming or files"),Object(a.b)("li",{parentName:"ul"},"\ud83d\udd25 ",Object(a.b)("inlineCode",{parentName:"li"},":fire:")," when removing files"),Object(a.b)("li",{parentName:"ul"},"\ud83c\udfa8 ",Object(a.b)("inlineCode",{parentName:"li"},":art:")," when improving the format/structure of a document"),Object(a.b)("li",{parentName:"ul"},"\u270f\ufe0f ",Object(a.b)("inlineCode",{parentName:"li"},":pencil2:")," when fixing typos or phrasing"),Object(a.b)("li",{parentName:"ul"},"\u264e ",Object(a.b)("inlineCode",{parentName:"li"},":libra:")," when fixing game balance"),Object(a.b)("li",{parentName:"ul"},"\ud83d\udc1b ",Object(a.b)("inlineCode",{parentName:"li"},":bug:")," when fixing a bug or error"),Object(a.b)("li",{parentName:"ul"},"\ud83d\udd00 ",Object(a.b)("inlineCode",{parentName:"li"},":twisted_rightwards_arrows:")," when merging branches"),Object(a.b)("li",{parentName:"ul"},"\ud83d\udd16 ",Object(a.b)("inlineCode",{parentName:"li"},":bookmark:")," when creating a release or tagging a version")))))}u.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),u=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,d=s["".concat(o,".").concat(m)]||s[m]||p[m]||a;return t?i.a.createElement(d,l(l({ref:n},b),{},{components:t})):i.a.createElement(d,l({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);