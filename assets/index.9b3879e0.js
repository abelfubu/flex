var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,n=(e,n)=>{for(var o in n||(n={}))t.call(n,o)&&r(e,o,n[o]);if(a)for(var o of a(n))l.call(n,o)&&r(e,o,n[o]);return e};import{r as o,H as c,R as m,a as s}from"./vendor.3479cfc8.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const l=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,n)=>{const o=new URL(e,l);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const c=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){n(new Error(`Failed to import: ${e}`)),r(m)},onload(){a(self[t].moduleMap[o]),r(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("https:/abelfubu.github.io/flex/assets/");const p=()=>o.createElement("header",{className:"App-header"},o.createElement("a",{href:""},"LOGO"),o.createElement("nav",null,o.createElement("ul",null,o.createElement("li",null,o.createElement("a",{href:""},"Home")),o.createElement("li",null,o.createElement("a",{href:""},"About")),o.createElement("li",null,o.createElement("a",{href:""},"Contact")))));var u="_form_19ojh_1",i="_input-field_19ojh_17";const f=({onValueChange:e,values:t})=>{const a=[...new Array(50)],l=e=>e.split("-").map((e=>e[0].toUpperCase()+e.substring(1))).join(" ");return o.createElement("form",{className:u},[{property:"display",values:["flex","block"]},{property:"justifyContent",values:["flex-start","center","flex-end","space-between","space-around","space-evenly"]},{property:"alignItems",values:["flex-start","center","flex-end","space-between","space-around","space-evenly"]},{property:"flexDirection",values:["row","column"]},{property:"flexWrap",values:["wrap","nowrap"]}].map(((a,r)=>o.createElement("div",{key:r},o.createElement("p",null,l(a.property)),a.values.map(((r,n)=>o.createElement("div",{key:n,className:i},o.createElement("input",{type:"radio",name:a.property,value:r,onChange:e,checked:r===t[a.property]}),o.createElement("span",null,l(r)))))))),o.createElement("div",null,o.createElement("p",null,"Items"),o.createElement("select",{name:"items",onChange:e,value:t.items},a.map(((e,t)=>o.createElement("option",{key:t,value:t+1},t+1))))))};var d="_main_6ggls_1",E="_flex-item_6ggls_8";const v=({formValues:e})=>{const t={maxHeight:"800px",minHeight:"column"===e.flexDirection?175*e.items+"px":"200px"};return o.createElement("div",{className:d,style:n(n({},e),t)},["#beef9e","#b8e493","#b2d987","#a6c36f","#94a860","#828c51","#5b6f4b","#335145","#29433a","#1e352f"].map(((t,a)=>a<e.items&&o.createElement("div",{key:a,className:E,style:{backgroundColor:t,color:a<4?"#232323":"#ffffffaa"}},"Child ",a+1))))};var y="_main_aodqp_1";const b=()=>{const[e,t]=o.useState({display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"row",flexWrap:"nowrap",items:3});return o.createElement("div",{className:y},o.createElement("h1",null,"FlexBox"),o.createElement(f,{onValueChange:e=>{t((t=>n(n({},t),{[e.target.name]:e.target.value})))},values:e}),o.createElement(v,{formValues:e}))};function h(){return o.createElement("div",{className:"App"},o.createElement(c,null,o.createElement(p,null),o.createElement(m,{exact:!0,path:"/",component:b})))}s.render(o.createElement(o.StrictMode,null,o.createElement(h,null)),document.getElementById("root"));