import{r as d,u as x,d as h,j as e,I as p,B as f,i as j,b as o,n as g,A as l,h as n}from"./index-CPcYxd-k.js";import{u as b}from"./formik.esm-CycV9Q1f.js";import{v}from"./validation-6ymd3LOM.js";import{A as S}from"./Alert-D-f9D6W4.js";import"./index-8JwjhRSi.js";import"./index.esm-DhO-h40l.js";import"./index-nRS7f88W.js";const k=()=>{const[m,c]=d.useState(!1),a=x(),{loading:u,currentUser:i}=h(t=>t.user),s=b({initialValues:{email:""},validationSchema:v,onSubmit:async t=>{try{a(j()),await o.post("/auth/verification",t),a(g()),c(!0)}catch(r){o.isAxiosError(r)&&r.response?(l(r.response.data.message),a(n())):(l("Something Went To Wrong"),a(n()))}}});return e.jsx("div",{className:"flex justify-center items-center h-screen",children:e.jsx("div",{className:"border-2 rounded-2xl p-12",children:e.jsxs("form",{onSubmit:s.handleSubmit,className:"text-center space-y-6",children:[e.jsx("div",{className:"flex justify-center ",children:e.jsx("img",{src:"/icons8-verification-100.png",alt:"email icon"})}),e.jsx("h1",{className:"text-4xl flex justify-center font-mono font-semibold mb-3",children:"Verification"}),e.jsx("p",{className:"mb-5 font-medium font-serif",children:"Please enter your email"}),e.jsx(p,{className:"bg-slate-100",type:"email",placeholder:" Enter your email",name:"email",onBlur:s.handleBlur,value:s.values.email,onChange:s.handleChange}),s.errors.email&&s.touched.email&&e.jsx("div",{className:"text-red-600 text-sm  ",children:s.errors.email}),m&&(i!=null&&i.email)?e.jsx(S,{email:i.email}):e.jsx(f,{type:"submit",className:"p-6 w-80 text-lg",children:u?e.jsx("span",{className:"loader "}):"Submit"})]})})})};export{k as default};
