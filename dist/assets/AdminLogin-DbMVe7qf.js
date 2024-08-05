import{u as d,e as c,b as o,A as l,P as m,S as u,m as p,j as s}from"./index-CPcYxd-k.js";import{u as x}from"./formik.esm-CycV9Q1f.js";import{c as h,a as n}from"./index.esm-DhO-h40l.js";import"./index-8JwjhRSi.js";const y=()=>{const a=d(),i=c(),e=x({initialValues:{email:"",password:""},validationSchema:h().shape({email:n().email("Invalid email format").required("Required"),password:n().required("Required")}),onSubmit:async t=>{console.log(t);try{await o.post("/auth/admin/login",t),l.success("Admin Logged In Successfully"),a(m()),a(u()),a(p()),i("/admin/dashboard")}catch(r){o.isAxiosError(r)&&r.response&&l.error(r.response.data.message||"Something Went To Wrong")}}});return s.jsx("div",{className:"mt-10",children:s.jsxs("div",{className:"flex w-96 flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto",children:[s.jsxs("div",{className:"mx-auto mb-2 space-y-3",children:[s.jsx("h1",{className:"text-3xl font-bold text-gray-700",children:"Please Login"}),s.jsx("p",{className:"text-gray-500",children:"Login to access your account"})]}),s.jsxs("form",{onSubmit:e.handleSubmit,children:[s.jsx("div",{children:s.jsxs("div",{className:"relative mt-2 w-full",children:[s.jsx("input",{type:"text",name:"email",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur,className:`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 ${e.touched.email&&e.errors.email?"border-red-500":""}`}),s.jsx("label",{htmlFor:"email",className:`absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 ${e.values.email?"-translate-y-4 scale-75":""}`,children:"Enter Your Email"}),e.touched.email&&e.errors.email&&s.jsx("div",{className:"text-red-500 text-sm",children:e.errors.email})]})}),s.jsx("div",{children:s.jsxs("div",{className:"relative mt-2 w-full",children:[s.jsx("input",{type:"password",id:"password",name:"password",value:e.values.password,onChange:e.handleChange,onBlur:e.handleBlur,className:`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 ${e.touched.password&&e.errors.password?"border-red-500":""}`,placeholder:" "}),s.jsx("label",{htmlFor:"password",className:`absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 ${e.values.password?"-translate-y-4 scale-75":""}`,children:"Enter Your Password"}),e.touched.password&&e.errors.password&&s.jsx("div",{className:"text-red-500 text-sm",children:e.errors.password})]})}),s.jsx("button",{type:"submit",className:"rounded-lg bg-blue-600 py-3 mt-3 w-full font-bold text-white",children:"Login"})]})]})})};export{y as default};
