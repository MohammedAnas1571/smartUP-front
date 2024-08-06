import{d as u,u as j,r as c,b as x,l as v,A as h,j as e,I as N,B as b,L as w}from"./index-BX51NH_z.js";import{D as y,a as C,b as P,c as k}from"./dialog-BJU-ez73.js";import{L as m}from"./label-RxH0x7be.js";import{u as S}from"./validation-C2CMpWpB.js";import{u as D}from"./formik.esm-Z1YNfWFY.js";import{T as B}from"./textarea-DKH-6Qoy.js";import"./index-sbGFPfT_.js";import"./index.esm-DXk0ftU0.js";import"./index-8JwjhRSi.js";const L=({select:a,setSelect:r})=>{const{currentUser:s}=u(t=>t.user),n=j(),d=c.useRef(null),[p,f]=c.useState(`/auth/${s==null?void 0:s.profilePhoto}`),l=D({initialValues:{username:(s==null?void 0:s.username)||"",about:(s==null?void 0:s.about)||"",image:`/auth/${s==null?void 0:s.profilePhoto}`||""},validationSchema:S,onSubmit:async t=>{try{const i=new FormData;i.append("username",t.username),i.append("image",t.image),i.append("about",t.about);const{data:o}=await x.put("/auth/profile",i,{headers:{"Content-Type":"multipart/form-data"}});console.log(o),n(v(o)),r(!1),h.success("Profile Updated Successfully")}catch(i){x.isAxiosError(i)&&i.response&&h.error(i.response.data.message||"Something Went To Wrong")}}}),g=t=>{const i=t.currentTarget.files&&t.currentTarget.files[0];if(i){l.setFieldValue("image",i);const o=new FileReader;o.onloadend=()=>{f(o.result)},o.readAsDataURL(i)}};return e.jsx("div",{children:e.jsx(y,{open:a,onOpenChange:r,children:e.jsxs(C,{className:"sm:max-w-[500px]  shadow-lg ",children:[e.jsx(P,{}),e.jsxs("form",{onSubmit:l.handleSubmit,children:[e.jsxs("div",{className:"grid gap-4 ",children:[e.jsxs("div",{className:"flex flex-col items-center ",children:[e.jsx("input",{type:"file",ref:d,hidden:!0,name:"image",accept:"image/*",onChange:g}),e.jsx("img",{src:p,alt:"Profile Picture",className:"h-36 w-36 self-center cursor-pointer rounded-full object-cover  ",onClick:()=>d.current&&d.current.click()}),l.errors.image&&e.jsx("p",{className:"text-red-500",children:l.errors.image})]}),e.jsxs("div",{children:[e.jsx(m,{className:"text-right",children:"Username"}),e.jsx(N,{name:"username",defaultValue:l.values.username,onBlur:l.handleBlur,onChange:l.handleChange}),l.errors.username&&l.touched.username&&e.jsx("p",{className:"text-red-500",children:l.errors.username})]}),e.jsxs("div",{children:[e.jsx(m,{className:"text-right ",children:"email"}),e.jsx("p",{children:s==null?void 0:s.email})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"about",className:"text-right ",children:"my bio"}),e.jsx(B,{defaultValue:l.values.about,name:"about",onBlur:l.handleBlur,onChange:l.handleChange,placeholder:"Type about yourself"}),l.errors.about&&l.touched.about&&e.jsx("p",{className:"text-red-500",children:l.errors.about})]})]}),e.jsx(k,{children:e.jsx(b,{className:"mt-4",type:"submit",children:"Save changes"})})]})]})})})},z=()=>{const{currentUser:a}=u(n=>n.user),[r,s]=c.useState(!1);return e.jsx("div",{children:e.jsx("div",{className:"container mx-auto my-5 p-5",children:e.jsxs("div",{className:"md:flex no-wrap md:-mx-2 ",children:[e.jsx("div",{className:"w-full md:w-3/12 md:mx-2",children:e.jsxs("div",{className:"flex flex-col items-center gap-5",children:[e.jsx("div",{className:"  overflow-hidden ",children:e.jsx("img",{className:"object-cover w-52 h-52 rounded-full",src:`/auth/${a==null?void 0:a.profilePhoto}`,alt:""})}),e.jsx("h1",{className:"text-gray-900 font-bold text-xl flex justify-center py-3 my-1",children:a==null?void 0:a.username}),r&&e.jsx(L,{select:r,setSelect:s}),e.jsx("button",{onClick:()=>s(!0),className:" text-gray-600 font-semibold w-full hover:bg-transparent hover:text-gray-700 hover:shadow py-2 px-3 mt-3 rounded shadow-sm",children:"Edit Profile"})]})}),e.jsx("div",{className:"w-full md:w-9/12 mx-2 h-64 flex",children:e.jsxs("div",{className:"bg-white p-3 shadow-md rounded-sm w-full",children:[e.jsxs("div",{className:"flex items-center space-x-2 font-semibold text-gray-900 leading-8",children:[e.jsx("span",{className:"text-green-500",children:e.jsx("svg",{className:"h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),e.jsx("span",{className:"tracking-wide",children:"About"})]}),e.jsxs("div",{className:"text-gray-700",children:[e.jsxs("div",{className:"grid md:grid-cols-2 text-sm",children:[e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsx("div",{className:"px-4 py-2 font-semibold",children:" Name"}),e.jsx("div",{className:"px-4 py-2",children:a==null?void 0:a.username}),e.jsx("div",{className:"px-4 py-2 text-sm font-semibold ",children:"About me "})]}),e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsx("div",{className:"px-4 py-2 font-semibold",children:"Email"}),e.jsx("div",{className:"px-4 py-2",children:e.jsx("p",{className:"text-blue-800",children:a==null?void 0:a.email})}),e.jsx("div",{className:"px-4 py-2 text-sm font-semibold text-blue-800",children:e.jsx(w,{to:"/change-password",children:"Change Password"})})]})]}),e.jsx("div",{className:"w-full px-4 py-2 text-sm font-semibold",children:a==null?void 0:a.about})]})]})})]})})})};export{z as default};