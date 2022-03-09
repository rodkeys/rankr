"use strict";(self.webpackChunkrankr=self.webpackChunkrankr||[]).push([[4831],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3873:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),o=n(6010),i="tableOfContentsInline_3fWc";function a(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(a,{isChild:!0,toc:e.children}))}))):null}var l=function(e){var t=e.toc;return r.createElement("div",{className:(0,o.Z)(i)},r.createElement(a,{toc:t}))}},2539:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(3873),l=["components"],c={sidebar_position:1},s="Config",u={unversionedId:"api-reference/config",id:"version-0.3.0/api-reference/config",isDocsHomePage:!1,title:"Config",description:"The config object is completely optional and currently only provides a property to control sorting.",source:"@site/versioned_docs/version-0.3.0/api-reference/config.md",sourceDirName:"api-reference",slug:"/api-reference/config",permalink:"/rankr/docs/api-reference/config",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-0.3.0/api-reference/config.md",tags:[],version:"0.3.0",lastUpdatedBy:"Westin Schepper",lastUpdatedAt:1646800245,formattedLastUpdatedAt:"3/8/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.3.0/tutorialSidebar",previous:{title:"Supported Types",permalink:"/rankr/docs/introduction/supported-types"},next:{title:"Criteria",permalink:"/rankr/docs/api-reference/criteria"}},p=[{value:"Options",id:"options",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Defaults",id:"defaults",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>sort</code> [string | null]",id:"sort-string--null",children:[]}]}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"config"},"Config"),(0,i.kt)("p",null,"The config object is completely optional and currently only provides a property to control sorting."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)(a.Z,{toc:p[p.length-1].children,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const config = {\n  sort: 'desc' // 'asc' | 'desc' | null, default: 'desc'\n}\n")),(0,i.kt)("h2",{id:"defaults"},"Defaults"),(0,i.kt)("p",null,"This is an example of the default config options if no config object is provided."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const defaultConfig = {\n  sort: 'desc'\n}\n")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"sort-string--null"},(0,i.kt)("inlineCode",{parentName:"h3"},"sort")," ","[","string | null]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'desc'")),(0,i.kt)("p",null,"The sort option allows you to specify the order your records are returned in. If want to handle this yourself outside of Rankr, pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"values"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'desc'")),(0,i.kt)("td",{parentName:"tr",align:null},"returns records in descending order (highest score to lowest score)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'asc'")),(0,i.kt)("td",{parentName:"tr",align:null},"returns records in ascending order (lowest score to highest score)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"returns records in the same order they were provided.")))))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);