"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5958],{95958:function(e,n,r){r.d(n,{E:function(){return an}});var i,o,t,l,s=r(50669),d=r(50189),a=r(11026),c=r(56167),u=r(57911),x=r(40901),p=r(69925),v=r(60599),h=r(86149),f=r(89597),m=r(95022),b=r(27007),g=r(91543),j=r(58061),Z=r(3510),w=r(34347),y=r(6123),F=r(30618),k=r(47292),N=k.Z.span(i||(i=(0,s.Z)(["\n  background-color: rgb(255, 245, 245);\n  color: rgb(120, 27, 0);\n  display: block;\n  padding: 0 10px;\n  white-space: pre-line;\n"]))),T=r(6007),I=r(37878),D=function(e){var n;return e<=0&&(n='Pricing can"t be 0, you have to add positive number only'),n},P=function(e){var n=e.profiles,r=e.placement,i=e.currentProfile,o=e.disabled;return(0,I.jsx)(w.gN,{name:"sdl.profiles.placement.".concat(r,".pricing.").concat(i,".amount"),validate:D,id:"amount",children:function(e){var t,l=e.field,s=e.meta;return(0,I.jsxs)(c.Fragment,{children:[(0,I.jsxs)(S,{children:[(0,I.jsx)(z,{children:null===n||void 0===n||null===(t=n.placement[r])||void 0===t?void 0:t.pricing[i].denom}),(0,I.jsx)(C,(0,d.Z)({error:null===s||void 0===s?void 0:s.error,style:{borderStartStartRadius:0,borderEndStartRadius:0},type:"number",disabled:o},l))]}),(null===s||void 0===s?void 0:s.error)&&(0,I.jsx)(N,{children:null===s||void 0===s?void 0:s.error})]})}})},S=(0,k.Z)(T.n2)(o||(o=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n"]))),z=k.Z.div(t||(t=(0,s.Z)(["\n  padding: 10px 16px;\n  border: 1px solid #d7d7d7;\n  border-radius: 6px;\n  border-right: none;\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n  background: #f9fafb;\n"]))),C=(0,k.Z)(T.II)(l||(l=(0,s.Z)(["\n  width: 100%;\n\n  &:disabled {\n    background-color: #d7d7d73d;\n    pointer-events: none;\n  }\n"]))),R=r(53782);var M=r.p+"static/media/icon-top.0e90a7ccd01898d6b7eb780ee92a3521.svg";var V,B,O,A,_,E,G,U,q,H,W,L,X=r.p+"static/media/icon-down.e220b6e5cfae13f946b70692bec9a62e.svg",K=["setFieldValue","disabled"],Y=function(e){var n=e.setFieldValue,r=e.disabled,i=(0,R.Z)(e,K),o={value:"string"===typeof i.value?Number(i.withOutSuffix?i.value:i.value.slice(0,-2)):parseFloat(i.value),suffix:!i.withOutSuffix&&"string"===typeof i.value&&i.value.slice(-2)};return(0,I.jsxs)(J,{children:[(0,I.jsxs)(Q,{children:[(0,I.jsx)(ee,{min:"0",step:"0.1",type:"number",value:o.value,onChange:function(e){var r=e.currentTarget;n(i.name,r.value+((null===o||void 0===o?void 0:o.suffix)||""))}}),(null===o||void 0===o?void 0:o.suffix)&&(0,I.jsx)($,{children:o.suffix})]}),!r&&(0,I.jsxs)(ne,{children:[(0,I.jsx)(re,{onClick:function(){var e=i.withPowerOfTwo,r=i.smallIncrement;if(e){var t=Math.log2(o.value);return n(i.name,Math.pow(2,t+1)+(o.suffix||""))}if(r&&("Gi"===o.suffix||null!==i&&void 0!==i&&i.withOutSuffix))return n(i.name,+(o.value+.1).toFixed(1)+(o.suffix||""));n(i.name,o.value+1+(o.suffix||""))}}),(0,I.jsx)(ie,{onClick:function(){var e=i.withPowerOfTwo,r=i.smallIncrement;if(e){var t=Math.log2(o.value);return n(i.name,Math.pow(2,t-1>=0?t-1:t)+(o.suffix||""))}if(r&&("Gi"===o.suffix||null!==i&&void 0!==i&&i.withOutSuffix))return n(i.name,+(o.value-.1).toFixed(1)+(o.suffix||""));n(i.name,(o.value-1>=0?o.value-1:o.value)+((null===o||void 0===o?void 0:o.suffix)||""))}})]})]})},J=k.Z.div(V||(V=(0,s.Z)(["\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  height: 2.5rem;\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-left: auto;\n"]))),Q=k.Z.div(B||(B=(0,s.Z)(["\n  display: flex;\n  border-right: 1px solid #d1d5db;\n  padding: 0.5rem;\n"]))),$=k.Z.span(O||(O=(0,s.Z)([""]))),ee=k.Z.input(A||(A=(0,s.Z)(["\n  appearance: textfield;\n  font-size: 1rem;\n  font-weight: bold;\n  text-align: center;\n  outline: none;\n  box-sizing: content-box;\n  background: none;\n  display: block;\n  min-width: 0;\n  width: 40px;\n\n  &:after {\n    content: 'Gb';\n    position: relative;\n    width: 20px;\n    height: 20px;\n  }\n\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    appearance: none;\n  }\n"]))),ne=k.Z.div(_||(_=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 0 8px;\n  height: 2.5rem;\n"]))),re=(0,k.Z)((function(e){var n=e.onClick;return(0,I.jsx)("img",{style:{height:8,cursor:"pointer"},onClick:n,src:M,alt:"Icon Up"})}))(E||(E=(0,s.Z)(["\n  width: 1rem;\n  height: 1rem;\n"]))),ie=(0,k.Z)((function(e){var n=e.onClick;return(0,I.jsx)("img",{style:{height:8,cursor:"pointer"},onClick:n,src:X,alt:"Icon Down"})}))(G||(G=(0,s.Z)(["\n  width: 1rem;\n  height: 1rem;\n"]))),oe=["title","subTitle","setFieldValue","disabled","children"],te=function(e){var n=e.title,r=e.subTitle,i=e.setFieldValue,o=e.disabled,t=e.children,l=(0,R.Z)(e,oe);return(0,I.jsxs)(le,{disabled:o,error:null===l||void 0===l?void 0:l.error,children:[(0,I.jsxs)("div",{className:"flex flex-col",children:[(0,I.jsx)(se,{children:n}),(0,I.jsx)(de,{children:r})]}),(0,I.jsx)(Y,(0,d.Z)({setFieldValue:i,disabled:o},l)),t]})},le=k.Z.div(U||(U=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 17px 25px;\n  gap: 8px;\n\n  width: 100%;\n  height: 74px;\n  background-color: ",";\n\n  border: 1px solid ",";\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n"])),(function(e){return e.disabled?"#d7d7d73d":"#FFFFFF"}),(function(e){return null!==e&&void 0!==e&&e.error?"red":"#D1D5DB"})),se=k.Z.p(q||(q=(0,s.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #111827;\n"]))),de=k.Z.p(H||(H=(0,s.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #6b7280;\n"]))),ae=function(e){var n;return e<=0&&(n='CPU can"t be 0 and lower, you have to add positive number only'),n},ce=function(e){var n=e.currentProfile,r=e.disabled;return(0,I.jsx)(T.n2,{children:(0,I.jsx)(w.gN,{name:"sdl.profiles.compute.".concat(n,".resources.cpu.units"),validate:ae,id:"cpu",children:function(e){var n=e.field,i=e.form,o=e.meta;return(0,I.jsxs)(c.Fragment,{children:[(0,I.jsx)(te,(0,d.Z)({error:null===o||void 0===o?void 0:o.error,title:"CPU",subTitle:"CPU Required",setFieldValue:i.setFieldValue,withOutSuffix:!0,smallIncrement:!0,disabled:r},n)),(null===o||void 0===o?void 0:o.error)&&(0,I.jsx)(N,{children:null===o||void 0===o?void 0:o.error})]})}})})},ue=function(e){var n;return e.startsWith("0")&&(n='Memory can"t be 0, you have to add positive number only'),n},xe=function(e){var n=e.currentProfile,r=e.disabled;return(0,I.jsx)(T.n2,{children:(0,I.jsx)(w.gN,{name:"sdl.profiles.compute.".concat(n,".resources.memory.size"),id:"memory",validate:ue,children:function(e){var n=e.field,i=e.form,o=e.meta;return(0,I.jsxs)(c.Fragment,{children:[(0,I.jsx)(te,(0,d.Z)({error:null===o||void 0===o?void 0:o.error,title:"Memory",subTitle:"Memory Required",setFieldValue:i.setFieldValue,withPowerOfTwo:!0,disabled:r},n)),(null===o||void 0===o?void 0:o.error)&&(0,I.jsx)(N,{children:null===o||void 0===o?void 0:o.error})]})}})})},pe=r(7855),ve=r(17081),he=r(99122),fe=r(59099),me=r(82547),be=r(43191),ge=r(23012),je=["children","value","index"],Ze=function(e){var n=e.slice(0,-2),r=parseInt(n,10);if(isNaN(r)||r<=0)return"Storage must be a positive value greater than zero"},we=function(e){if(""===e)return"This value can't be blank"},ye=function(e){var n=e.serviceName,r=e.profiles,i=e.currentProfile,o=e.disabled,t=c.useState(0),l=(0,a.Z)(t,2),s=l[0],u=l[1];return(0,I.jsxs)(T.bi,{children:[(0,I.jsx)(Oe,{children:"Storage Type"}),(0,I.jsxs)(pe.Z,{variant:"fullWidth",value:s,onChange:function(e,n){u(n)},sx:{marginBottom:"16px",borderBottom:"1px solid #D1D5DB"},children:[(0,I.jsx)(ve.Z,(0,d.Z)({sx:{textTransform:"none"},label:"Ephemeral"},ke(0))),(0,I.jsx)(ve.Z,(0,d.Z)({sx:{textTransform:"none"},label:"Persistent"},ke(1)))]}),(0,I.jsx)(Fe,{value:s,index:0,children:(0,I.jsx)(w.F2,{name:"sdl.profiles.compute.".concat(i,".resources.storage"),render:function(e){var n,t=null===(n=r.compute[i])||void 0===n?void 0:n.resources.storage;return(0,I.jsxs)(I.Fragment,{children:[null===t||void 0===t?void 0:t.map((function(n,r){return!(null!==n&&void 0!==n&&n.attributes)&&(0,I.jsxs)(T.n2,{style:{display:"flex",columnGap:"10px",paddingBottom:"10px"},children:[(0,I.jsx)(w.gN,{name:"sdl.profiles.compute.".concat(i,".resources.storage.").concat(r,".size"),validate:Ze,id:"disk",children:function(e){var n=e.field,r=e.form,i=e.meta;return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(te,(0,d.Z)({error:null===i||void 0===i?void 0:i.error,title:"Disk",subTitle:"Disk Required",setFieldValue:r.setFieldValue,disabled:o,smallIncrement:!0},n))})}}),!o&&(0,I.jsx)(he.Z,{title:1===t.length&&0===r&&"This is your only storage, you have to have at least one to be able to deploy the SDL",children:(0,I.jsx)(fe.Z,{sx:{background:"#FFFFFF",border:"1px solid #D1D5DB",boxShadow:"0px 1px 2px rgb(0 0 0 / 5%)",borderRadius:"6px",width:"46px"},onClick:function(){1!==t.length&&e.remove(r)},"aria-label":"Delete storage",children:(0,I.jsx)(T.XH,{})})})]},"".concat(i,"-ephemeral-").concat(r))})),!o&&(0,I.jsx)(T.T2,{children:(0,I.jsx)(T.Ab,{startIcon:(0,I.jsx)(T.js,{}),variant:"outlined",size:"small",onClick:function(){var n,o,t;return e.insert(null!==(n=(null===(o=r.compute[i])||void 0===o||null===(t=o.resources.storage)||void 0===t?void 0:t.length)+1)&&void 0!==n?n:0,{size:"512Mi"})},children:"Add New Ephemeral Storage"})})]})}})}),(0,I.jsxs)(Fe,{value:s,index:1,children:[(0,I.jsxs)(h.Z,{spacing:2,direction:"row",marginBottom:1,children:[(0,I.jsx)(T.lw,{width:163,children:"Name"}),(0,I.jsx)(T.lw,{width:163,children:"Mount"}),(0,I.jsx)(T.lw,{width:163,children:"Size"}),(0,I.jsx)(T.lw,{width:"auto",children:"Type"})]}),(0,I.jsx)(w.F2,{name:"sdl.profiles.compute.".concat(i,".resources.storage"),render:function(e){var t,l;return(0,I.jsxs)(c.Fragment,{children:[null===(t=r.compute[i])||void 0===t||null===(l=t.resources.storage)||void 0===l?void 0:l.map((function(r,t){return(null===r||void 0===r?void 0:r.attributes)&&(0,I.jsxs)(T.n2,{style:{display:"flex",columnGap:"10px",paddingBottom:"10px"},children:[(0,I.jsx)(w.gN,{name:"sdl.profiles.compute.".concat(i,".resources.storage.").concat(t,".name"),validate:we,children:function(e){var n=e.field,r=e.meta;return(0,I.jsx)(Be,(0,d.Z)((0,d.Z)({},n),{},{disabled:o,error:null===r||void 0===r?void 0:r.error}))}}),(0,I.jsx)(w.gN,{name:"sdl.services.".concat(n,".params.storage.").concat(r.name,".mount"),validate:we,children:function(e){var n=e.field,r=e.meta;return(0,I.jsx)(Be,(0,d.Z)((0,d.Z)({},n),{},{disabled:o,error:null===r||void 0===r?void 0:r.error}))}}),(0,I.jsx)(w.gN,{name:"sdl.profiles.compute.".concat(i,".resources.storage.").concat(t,".size"),validate:we,children:function(e){var n=e.field,r=e.meta;return(0,I.jsx)(Be,(0,d.Z)((0,d.Z)({},n),{},{disabled:o,error:null===r||void 0===r?void 0:r.error}))}}),(0,I.jsx)(w.gN,{name:"sdl.profiles.compute.".concat(i,".resources.storage.").concat(t,".attributes.class"),children:function(e){var n=e.field;return(0,I.jsx)(me.Z,{fullWidth:!0,style:(0,d.Z)({background:"white"},o&&{backgroundColor:"#d7d7d73d",pointerEvents:"none"}),children:(0,I.jsxs)(be.Z,(0,d.Z)((0,d.Z)({labelId:"to-id"},n),{},{SelectDisplayProps:{style:{padding:"11.5px 14px"}},children:[(0,I.jsx)(ge.Z,{value:"beta1",children:(0,I.jsx)("span",{children:"HDD"})}),(0,I.jsx)(ge.Z,{value:"beta2",children:(0,I.jsx)("span",{children:"SSD"})}),(0,I.jsx)(ge.Z,{value:"beta3",children:(0,I.jsx)("span",{children:"NVMe"})})]}))})}}),!o&&(0,I.jsx)(fe.Z,{sx:{background:"#FFFFFF",border:"1px solid #D1D5DB",boxShadow:"0px 1px 2px rgb(0 0 0 / 5%)",borderRadius:"6px",width:"46px"},onClick:function(){var i,o,l=e.form.values.sdl,s=null===(i=l.services[n])||void 0===i||null===(o=i.params)||void 0===o?void 0:o.storage;if(s){for(var d=Object.keys(s),a=0,c=Object.keys(s);a<c.length;a++){var u=c[a];if(u===(null===r||void 0===r?void 0:r.name)&&s[u]){delete s[u];break}}d.length-1===0&&delete l.services[n].params}e.form.setFieldValue("sdl",l),e.remove(t)},"aria-label":"Delete storage",children:(0,I.jsx)(T.XH,{})})]},"".concat(i,"-persistent-").concat(t))})),!o&&(0,I.jsx)(T.T2,{children:(0,I.jsx)(T.Ab,{startIcon:(0,I.jsx)(T.js,{}),variant:"outlined",size:"small",onClick:function(){var o,t,l,s,d,a=e.form.values.sdl;void 0===(null===(o=a.services[n])||void 0===o||null===(t=o.params)||void 0===t?void 0:t.storage)&&(a.services[n].params={storage:{}}),e.insert(null!==(l=(null===(s=r.compute[i])||void 0===s||null===(d=s.resources.storage)||void 0===d?void 0:d.length)+1)&&void 0!==l?l:0,{size:"1Gi",name:"",attributes:{persistent:!0,class:"beta1"}})},children:"Add New Persistent Storage"})})]})}})]})]})};function Fe(e){var n=e.children,r=e.value,i=e.index,o=(0,R.Z)(e,je);return(0,I.jsx)("div",(0,d.Z)((0,d.Z)({role:"tabpanel",hidden:r!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i)},o),{},{children:r===i&&n}))}function ke(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Ne,Te,Ie,De,Pe,Se,ze,Ce,Re,Me,Ve,Be=(0,k.Z)(T.II)(W||(W=(0,s.Z)(["\n  width: 100%;\n\n  &:disabled {\n    background-color: #d7d7d73d;\n    pointer-events: none;\n  }\n"]))),Oe=k.Z.p(L||(L=(0,s.Z)(["\n  font-family: 'Satoshi-Regular', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #6b7280;\n"]))),Ae=r(53503),_e=r(16392),Ee=function(){return(0,I.jsx)("img",{src:Ae.Z,alt:"Plus Icon"})},Ge=function(){return(0,I.jsx)("img",{src:_e.Z,alt:"Trash Icon"})},Ue=function(e,n){var r;return e<=0&&(r="".concat(n.toUpperCase(),' can"t be 0, you have to add positive number only')),r},qe=function(e){var n=e.serviceName,r=e.services,i=e.updatePage,o=void 0!==i&&i;return(0,I.jsx)(w.F2,{name:"sdl.services.".concat(n,".expose"),render:function(e){var i,t;return(0,I.jsxs)(T.bi,{children:[(0,I.jsxs)(h.Z,{direction:"row",columnGap:"10px",children:[(0,I.jsx)(T.lw,{width:178,children:"Port"}),(0,I.jsx)(T.lw,{width:178,children:"As"}),(0,I.jsx)(T.lw,{width:178,children:"Host"}),(0,I.jsx)(T.lw,{width:"auto",children:"Accept"})]}),null===(i=r[n])||void 0===i||null===(t=i.expose)||void 0===t?void 0:t.map((function(i,t){var l;return(0,I.jsxs)(T.zB,{updatePage:o,children:[(0,I.jsx)(T.n2,{children:(0,I.jsx)(w.gN,{name:"sdl.services.".concat(n,".expose.").concat(t,".port"),validate:function(e){return Ue(e,"port")},children:function(e){var n=e.field,r=e.meta;return(0,I.jsxs)(c.Fragment,{children:[(0,I.jsx)(T.II,(0,d.Z)((0,d.Z)({type:"number"},n),{},{error:null===r||void 0===r?void 0:r.error})),(null===r||void 0===r?void 0:r.error)&&(0,I.jsx)(N,{children:null===r||void 0===r?void 0:r.error})]})}})}),(0,I.jsx)(T.n2,{children:(0,I.jsx)(w.gN,{name:"sdl.services.".concat(n,".expose.").concat(t,".as"),validate:function(e){return Ue(e,"as")},children:function(e){var n=e.field,r=e.meta;return(0,I.jsxs)(c.Fragment,{children:[(0,I.jsx)(T.II,(0,d.Z)((0,d.Z)({type:"number"},n),{},{error:null===r||void 0===r?void 0:r.error})),(null===r||void 0===r?void 0:r.error)&&(0,I.jsx)(N,{children:null===r||void 0===r?void 0:r.error})]})}})}),(0,I.jsx)(T.n2,{children:(0,I.jsx)(w.gN,{name:"sdl.services.".concat(n,".expose.").concat(t,".accept.[0]"),children:function(e){var n,r=e.field;return(0,I.jsx)(T.II,(0,d.Z)((0,d.Z)({},r),{},{value:null!==(n=r.value)&&void 0!==n?n:""}))}})}),(0,I.jsx)(T.n2,{children:(0,I.jsxs)(He,{children:[null===(l=r[n].expose[t].to)||void 0===l?void 0:l.map((function(e,r){return(null===e||void 0===e?void 0:e.global)&&(0,I.jsx)(T.n2,{children:(0,I.jsx)(w.gN,{name:"sdl.services.".concat(n,".expose.").concat(t,".to.").concat(r,".global"),children:function(e){var n=e.field;return(0,I.jsx)(me.Z,{fullWidth:!0,style:{background:"white"},children:(0,I.jsxs)(be.Z,(0,d.Z)((0,d.Z)({labelId:"to-id"},n),{},{MenuProps:{PaperProps:{sx:{"& .MuiList-root":{padding:"4px"}}}},SelectDisplayProps:{style:{padding:"11.5px 14px"}},children:[(0,I.jsx)(ge.Z,{value:"true",children:(0,I.jsx)("span",{children:"true"})}),(0,I.jsx)(ge.Z,{value:"false",children:(0,I.jsx)("span",{children:"false"})})]}))})}})},"sdl.services.".concat(n))})),(0,I.jsx)(fe.Z,{sx:{background:"#FFFFFF",border:"1px solid #D1D5DB",boxShadow:"0px 1px 2px rgb(0 0 0 / 5%)",borderRadius:"6px",width:"46px",height:"46px"},onClick:function(){return e.remove(t)},"aria-label":"Delete port",children:(0,I.jsx)(Ge,{})})]})})]},t)})),(0,I.jsx)(T.T2,{children:(0,I.jsx)(T.Ab,{startIcon:(0,I.jsx)(Ee,{}),variant:"outlined",size:"small",onClick:function(){var i,o,t;return e.insert(null!==(i=(null===(o=r[n])||void 0===o||null===(t=o.expose)||void 0===t?void 0:t.length)+1)&&void 0!==i?i:0,{port:3e3,as:80,to:[{global:!0}]})},children:"Add New Port"})})]})}})},He=k.Z.div(Ne||(Ne=(0,s.Z)(["\n  display: flex;\n  column-gap: 10px;\n"]))),We=function(){return(0,I.jsx)("img",{src:Ae.Z,alt:"Plus Icon"})},Le=function(){return(0,I.jsx)("img",{src:_e.Z,alt:"Trash Icon"})},Xe=function(e){var n=e.serviceName,r=e.services,i=e.disabled;return(0,I.jsx)(w.F2,{name:"sdl.services.".concat(n,".env"),render:function(e){var o,t;return(0,I.jsxs)(T.bi,{children:[null===(o=r[n])||void 0===o||null===(t=o.env)||void 0===t?void 0:t.map((function(r,o){return(0,I.jsxs)(T.zB,{children:[(0,I.jsx)(w.gN,{name:"sdl.services.".concat(n,".env.").concat(o),children:function(n){var r=n.field;return(0,I.jsx)(c.Fragment,{children:(0,I.jsx)(Ke,{disabled:i,value:r.value.split("=")[0],onChange:function(n){var r=n.currentTarget;return e.replace(o,"".concat(r.value,"="))}})})}}),(0,I.jsx)(w.gN,{name:"sdl.services.".concat(n,".env.").concat(o),children:function(n){var r=n.field;return(0,I.jsx)(Ke,{disabled:i,value:r.value.split("=")[1],onChange:function(n){var i=n.currentTarget,t=r.value.split("=")[0],l=i.value;return e.replace(o,"".concat(t,"=").concat(l))}})}}),!i&&(0,I.jsx)(fe.Z,{sx:{background:"#FFFFFF",border:"1px solid #D1D5DB",boxShadow:"0px 1px 2px rgb(0 0 0 / 5%)",borderRadius:"6px",width:"46px"},onClick:function(){return e.remove(o)},"aria-label":"Delete environment variable",children:(0,I.jsx)(Le,{})})]},o)})),!i&&(0,I.jsx)(T.T2,{children:(0,I.jsx)(T.Ab,{startIcon:(0,I.jsx)(We,{}),variant:"outlined",size:"small",onClick:function(){var i,o,t;return e.insert(null!==(i=(null===(o=r[n])||void 0===o||null===(t=o.env)||void 0===t?void 0:t.length)+1)&&void 0!==i?i:0,"")},children:"Add New Variable"})})]})}})},Ke=(0,k.Z)(T.II)(Te||(Te=(0,s.Z)(["\n  width: 100%;\n  &:disabled {\n    background-color: #d7d7d73d;\n    pointer-events: none;\n  }\n"]))),Ye=r(51663),Je=function(e){var n;return e||(n='Image can"t be empty, you have to add app image to make deployment work'),n},Qe=function(e){var n=e.currentProfile;return(0,I.jsx)(w.gN,{name:"sdl.services.".concat(n,".image"),validate:Je,id:"image",children:function(e){var n=e.field,r=e.meta;return(0,I.jsxs)($e,{children:[(0,I.jsx)(en,(0,d.Z)({error:null===r||void 0===r?void 0:r.error,type:"text"},n)),(null===r||void 0===r?void 0:r.error)&&(0,I.jsx)(N,{children:null===r||void 0===r?void 0:r.error})]})}})},$e=(0,k.Z)(T.n2)(Ie||(Ie=(0,s.Z)(["\n  display: flex;\n  align-items: start;\n  flex-direction: column;\n"]))),en=(0,k.Z)(T.II)(De||(De=(0,s.Z)(["\n  width: 100%;\n\n  &:focus {\n    border-color: red;\n    outline: 0 none;\n  }\n"]))),nn=r(24488),rn=r(98493),on=r(32574),tn=[["max_body_size","Max Body Size","Sets the maximum size of an individual HTTP request body",1048576],["read_timeout","Read Timeout","Duration the proxy will wait for a response from the service",6e4],["send_timeout","Send Timeout","Duration the proxy will wait for the service to accept a request",6e4],["next_tries","Next Tries","Number of attempts the proxy will attempt another replica",3],["next_timeout","Next Timeout","Duration the proxy will wait for a response from the service",0]],ln=function(e){var n=e.serviceName,r=e.disabled;return(0,I.jsx)(w.F2,{name:"sdl.services.".concat(n,".expose"),render:function(){return(0,I.jsx)(T.bi,{children:(0,I.jsx)(h.Z,{gap:"10px",direction:"column",children:tn.map((function(e){var i=(0,a.Z)(e,4),o=i[0],t=i[1],l=i[2],s=i[3];return(0,I.jsxs)(on.ZP,{container:!0,children:[(0,I.jsxs)(on.ZP,{item:!0,xs:6,children:[(0,I.jsx)("label",{htmlFor:o,children:t}),(0,I.jsx)(he.Z,{title:l,placement:"right",sx:{fontSize:"25px",color:"rgb(207, 205, 204)",padding:"4px",borderRadius:"4px"},children:(0,I.jsx)(rn.Z,{})})]}),(0,I.jsx)(on.ZP,{item:!0,xs:6,children:(0,I.jsx)(w.gN,{name:"sdl.services.".concat(n,".expose[0].http_options.").concat(o),id:"sdl.services.".concat(n,".expose[0].http_options.").concat(o),type:"number",placeholder:null===s||void 0===s?void 0:s.toString(),as:sn,disabled:r})})]},o)}))})})}})},sn=(0,k.Z)(T.II)(Pe||(Pe=(0,s.Z)(["\n    width: 100%;\n\n    &:disabled {\n      background - color: #d7d7d73d;\n    pointer-events: none;\n  }"]))),dn=r(55119),an=(r(649),r(62721),r(54379),r(30511),function(e){var n,r=e.actionItems,i=e.sdl,o=e.reviewSdl,t=e.closeReviewModal,l=e.configurationType,s=e.progressVisible,j=e.cardMessage,Z=e.onSave,k=(0,dn.lE)(),N=(0,a.Z)(k,1)[0],D=l===nn.rs.Update,S="testnet"===N().networkType;return(0,I.jsxs)(c.Fragment,{children:[s&&(0,I.jsx)(u.Z,{sx:{minWidth:600},children:(0,I.jsx)(x.Z,{children:(0,I.jsx)(p.Z,{style:{textAlign:"center",marginTop:"100px",marginBottom:"100px"},children:(0,I.jsx)(v.Z,{direction:"up",in:s,unmountOnExit:!0,children:(0,I.jsxs)(h.Z,{sx:{width:"100%",color:"grey.700"},spacing:2,children:[(0,I.jsx)(f.Z,{variant:"h3",children:j}),(0,I.jsx)(m.Z,{})]})})})})}),!s&&(0,I.jsx)(cn,{children:(0,I.jsxs)(u.Z,{display:"flex",flexDirection:"column",gap:2,sx:{"& .MuiTextField-root":{m:1,width:"25ch"},margin:"0 auto",width:"821px"},children:[(0,I.jsx)(un,{children:(0,I.jsxs)(T.n2,{children:[(0,I.jsx)(T.__,{htmlFor:"appName",children:(0,I.jsx)(T.Fm,{children:"Name Your App"})}),(0,I.jsx)(w.gN,{name:"appName",id:"appName",children:function(e){var n=e.field;return(0,I.jsx)(xn,(0,d.Z)((0,d.Z)({},n),{},{className:"mt-2",disabled:D,placeholder:"Optional. We will auto-generate one for you, if you don't provide a name."}))}})]})}),(0,I.jsxs)("div",{children:[(0,I.jsxs)(hn,{children:[(0,I.jsx)(vn,{children:"Configure services"}),(0,I.jsx)(he.Z,{title:"This is where you can specify various parameters (one per service) that make up your SDL file. The number and name of the services will vary depending on the application/ SDL",placement:"right",sx:{fontSize:"25px",color:"rgb(207, 205, 204)",padding:"4px",borderRadius:"4px"},children:(0,I.jsx)(rn.Z,{})})]}),i.deployment&&(null===(n=Object.keys(i.deployment))||void 0===n?void 0:n.map((function(e,n){var r,l=Object.keys(i.deployment[e])[0],s=i.deployment[e][l].profile,d=i.profiles,a=i.services;return S&&void 0===(null===(r=d.compute[s])||void 0===r?void 0:r.resources.gpu)&&(d.compute[s].resources.gpu={units:0}),(0,I.jsxs)(pn,{className:"p-2",children:[(0,I.jsx)(b.Z,{expandIcon:(0,I.jsx)(y.Z,{}),children:(0,I.jsx)(f.Z,{children:(0,F.capitalize)(e)})}),(0,I.jsxs)(g.Z,{children:[(0,I.jsxs)("div",{style:{gap:"10px",display:"flex",flexDirection:"column"},children:[(0,I.jsx)("h1",{className:"font-medium ",children:"Image"}),(0,I.jsx)(Qe,{currentProfile:e}),(0,I.jsxs)(hn,{children:[(0,I.jsx)(vn,{children:"Pricing"}),(0,I.jsx)(he.Z,{title:"The value you specify here is the maximum you would like to pay for the compute resources you are requesting for this service. uakt allows you to specify an amount that is a fraction of 1AKT",placement:"right",sx:{fontSize:"25px",color:"rgb(207, 205, 204)",padding:"4px",borderRadius:"4px"},children:(0,I.jsx)(rn.Z,{})})]}),(0,I.jsx)(P,{profiles:d,currentProfile:s,placement:l,disabled:D}),(0,I.jsxs)(hn,{children:[(0,I.jsx)(vn,{children:"Resources"}),(0,I.jsx)(he.Z,{title:"This is where you specify how much CPU, memory and storage you would like to lease from the provider, to host your application.",placement:"right",sx:{fontSize:"25px",color:"rgb(207, 205, 204)",padding:"4px",borderRadius:"4px"},children:(0,I.jsx)(rn.Z,{})})]}),(0,I.jsx)(ce,{currentProfile:s,disabled:D}),(0,I.jsx)(xe,{currentProfile:s,disabled:D}),(0,I.jsx)(ye,{serviceName:e,profiles:d,currentProfile:s,disabled:D}),S&&false,(0,I.jsx)("h1",{className:"font-medium",children:"Ports"}),(0,I.jsx)(qe,{serviceName:e,services:a}),(0,I.jsx)("h1",{className:"font-medium",children:"Environment Variables"}),(0,I.jsx)(Xe,{serviceName:e,services:a,disabled:D}),(0,I.jsx)("h1",{className:"font-medium",children:"HTTP Options"}),(0,I.jsx)(ln,{serviceName:e,services:a,disabled:D})]}),(0,I.jsx)(Ye.G,{reviewSdl:o,closeReviewModal:t,disabled:D,onSave:Z})]})]},e)})))]}),r&&r()]})})]})}),cn=k.Z.div(Se||(Se=(0,s.Z)(["\n  gap: 20px;\n  display: flex;\n  flex-direction: column;\n"]))),un=k.Z.div(ze||(ze=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 24px;\n  gap: 20px;\n\n  background: #ffffff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);\n  border-radius: 8px;\n"]))),xn=(0,k.Z)(T.II)(Ce||(Ce=(0,s.Z)(["\n  border: 1px solid #d7d7d7;\n  width: 100%;\n\n  &:disabled {\n    background-color: #d7d7d73d;\n    pointer-events: none;\n  }\n"]))),pn=(0,k.Z)(j.Z)(Re||(Re=(0,s.Z)(["\n  box-shadow: none;\n\n  & ."," {\n    border-bottom: none;\n    background: #f9fafb;\n  }\n\n  & ."," {\n    background: #f9fafb;\n  }\n\n  &:last-of-type {\n    border-radius: 0 0 8px 8px;\n  }\n\n  &:before {\n    background-color: initial;\n  }\n"])),Z.Z.expanded,Z.Z.region),vn=k.Z.h1(Me||(Me=(0,s.Z)(["\n  font-size: 17px;\n  font-weight: bold;\n  border-radius: 8px 8px 0 0;\n"]))),hn=k.Z.div(Ve||(Ve=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  background: white;\n  font-weight: bold;\n  border-radius: 8px 8px 0 0;\n"])))}}]);
//# sourceMappingURL=5958.fc66f651.chunk.js.map