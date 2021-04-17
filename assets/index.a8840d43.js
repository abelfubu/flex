var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,n=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&n(e,s,r[s]);if(a)for(var s of a(r))l.call(r,s)&&n(e,s,r[s]);return e};import{r as s,L as c,B as o,S as m,R as i,a as u}from"./vendor.3961f9a4.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const l=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const s=new URL(e,l);if(self[t].moduleMap[s])return a(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),n(o)},onload(){a(self[t].moduleMap[s]),n(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("https:/abelfubu.github.io/flex/assets/");var p="_header_1a1lp_111";const f=()=>s.createElement("header",{className:p},s.createElement(c,{to:""},s.createElement("img",{src:"https://abelfubu.github.io/flex/assets/favicon.52d2e622.svg",alt:"Logo"}),"belfubu"),s.createElement("nav",null,s.createElement("ul",null,s.createElement("li",null,s.createElement(c,{to:""},"Flexbox")),s.createElement("li",null,s.createElement(c,{to:"/grid"},"Grid")))));var d="_social_1jcgb_111",v="_span_1jcgb_129";const E=()=>s.createElement(s.Fragment,null,s.createElement("ul",{className:d},s.createElement("li",null,s.createElement("a",{href:"https://www.linkedin.com/in/abelfubu/",target:"_blank"},s.createElement("i",{className:"fab fa-linkedin"}))),s.createElement("li",null,s.createElement("a",{href:"https://twitter.com/abelfubu",target:"_blank"},s.createElement("i",{className:"fab fa-twitter-square"}))),s.createElement("li",null,s.createElement("a",{href:"https://github.com/abelfubu",target:"_blank"},s.createElement("i",{className:"fab fa-github-square"})))),s.createElement("span",{className:v},"With ♥ for my students | abelfubu@gmail.com"));var _="_input_1885k_111",b="_radio_1885k_120",g="_checked_1885k_134",h="_in_1885k_111",x="_out_1885k_147";const y=({value:e,name:t,label:a,onChange:l,checked:n})=>s.createElement("div",{className:_},s.createElement("div",{className:b,onClick:()=>l({name:t,value:e})},s.createElement("div",{className:`${n?h:x} ${g}`})),s.createElement("span",null,a));var k="_select_1a9b2_111",w="_dropdown_1a9b2_133",N="_selected_1a9b2_151";const C=({options:e,value:t,name:a,onChange:l})=>{const[n,r]=s.useState(!1);s.useEffect((()=>(window.addEventListener("click",o),()=>window.removeEventListener("click",o))),[]);const c=s.useRef(null),o=e=>{var t;(null==(t=c.current)?void 0:t.contains(e.target))||r(!1)};return s.createElement("div",{className:k,onClick:()=>r(!0),ref:c},s.createElement("span",null,t),s.createElement("svg",{id:"i-chevron-bottom",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"},s.createElement("path",{d:"M30 12 L16 24 2 12"})),n&&s.createElement("div",{className:w},e.map(((e,n)=>s.createElement("p",{key:n,onClick:t=>((e,t)=>{e.stopPropagation(),r(!1),l({name:a,value:t})})(t,e),className:e.toString()===t?N:""},e)))))};var j="_form_10jpk_111",L="_title_10jpk_121",B="_range_10jpk_126";const O=({onValueChange:e,values:t})=>{const a=[...new Array(10)],l=s.useCallback((e=>e.split("-").map((e=>e[0].toUpperCase()+e.substring(1))).join(" ")),[]);return s.createElement("form",{className:j},s.createElement("div",null,s.createElement("p",{className:L},"Items"),s.createElement(C,{value:t.items.toString(),options:a.map(((e,t)=>t+1)),name:"items",onChange:e})),[{property:"flexDirection",values:["row","row-reverse","column","column-reverse"]},{property:"justifyContent",values:["flex-start","center","flex-end","space-between","space-around","space-evenly"]},{property:"alignItems",values:["flex-start","center","flex-end","space-between","space-around","space-evenly"]},{property:"alignContent",values:["flex-start","center","flex-end","space-between","space-around","space-evenly"]}].map(((a,n)=>s.createElement("div",{key:n},s.createElement("p",{className:L},l(a.property)),s.createElement(C,{key:n,name:a.property,value:t[a.property],onChange:e,options:a.values})))),[{property:"display",values:["flex","block"]},{property:"flexWrap",values:["wrap","nowrap"]}].map(((a,n)=>s.createElement("div",{key:n},s.createElement("p",{className:L},l(a.property)),a.values.map(((n,r)=>s.createElement(y,{key:r,name:a.property,value:n,label:l(n),onChange:e,checked:n===t[a.property]})))))),s.createElement("div",null,s.createElement("p",{className:L},"Flex Basis"),s.createElement("input",{className:B,type:"range",name:"flexBasis",value:t.flexBasis,min:"0",max:"100",onChange:t=>e({name:t.target.name,value:t.target.value})})))},R=["#beef9e","#b8e493","#b2d987","#a6c36f","#94a860","#828c51","#5b6f4b","#335145","#29433a","#1e352f"];var $="_main_17ep4_1",F="_flex-item_17ep4_10";const M=e=>{var{formValues:n}=e,{flexBasis:r}=n,c=((e,n)=>{var r={};for(var s in e)t.call(e,s)&&n.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&a)for(var s of a(e))n.indexOf(s)<0&&l.call(e,s)&&(r[s]=e[s]);return r})(n,["flexBasis"]);return s.createElement("div",{className:$,style:c},R.map(((e,t)=>t<c.items&&s.createElement("div",{key:t,className:F,style:{backgroundColor:e,color:t<4?"#232323":"#ffffffaa",flexBasis:`${r}%`}},s.createElement("span",null,t+1),s.createElement("p",null,"Flex Basis ",`${r}%`)))))};var S="_title_si54l_1";const U=({text:e})=>s.createElement("h1",{className:S},e);var I="_main_1hj7h_1";const P=()=>{const[e,t]=s.useState({display:"flex",justifyContent:"flex-start",alignItems:"flex-start",alignContent:"flex-start",flexDirection:"row",flexWrap:"nowrap",flexBasis:"0",items:3});return s.createElement("div",{className:I},s.createElement(U,{text:"Flexbox"}),s.createElement(O,{onValueChange:e=>{t((t=>r(r({},t),{[e.name]:e.value})))},values:e}),s.createElement(M,{formValues:e}))};var V="_main_14z77_1";const W=()=>s.createElement("div",{className:V},s.createElement("h1",null,"Coming soon..."));var q="_dark-mode_molx2_1";const D=()=>s.createElement("div",{className:q},s.createElement(o,{basename:"/flex"},s.createElement(f,null),s.createElement(m,null,s.createElement(i,{exact:!0,path:"/",component:P}),s.createElement(i,{path:"/grid",component:W})),s.createElement(E,null)));u.render(s.createElement(s.StrictMode,null,s.createElement(D,null)),document.getElementById("root"));
