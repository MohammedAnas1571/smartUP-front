import{G as y,r as n,e as N,j as e,F as C,b as o,A as m}from"./index-BX51NH_z.js";import{M as P}from"./index-suMsu4gB.js";import{P as w,a as k,b as x,c as A}from"./pagination-B6vEXH4V.js";function M(r){return y({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM7 12.414l-3.707-3.707 1.414-1.414 2.293 2.293 4.793-4.793 1.414 1.414-6.207 6.207z"},child:[]}]})(r)}const I=()=>{const[r,g]=n.useState([]),[a,c]=n.useState(1),[l,h]=n.useState(1),u=N(),p=async()=>{try{const s=await o.get(`/auth/tutor/myCourses/?page=${a}`),t=s.data.courses.map(i=>({...i,updatedAt:new Date(i.updatedAt).toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"})}));g(t),h(s.data.pagination.pageCount)}catch(s){o.isAxiosError(s)&&s.response&&m.error(s.response.data.message||"Sorry, something went wrong!")}};n.useEffect(()=>{p()},[a]);const f=s=>{u(`/instructor/mycourse/${s}`)},j=async s=>{try{const{data:t}=await o.put("/auth/tutor/publishCourse/",{id:s}),i=r.map(d=>d._id===s?{...d,isPublish:!0}:d);g(i),m.success(t.message)}catch(t){o.isAxiosError(t)&&t.response&&m.error(t.response.data.message||"Something Went To Wrong")}},b=()=>{c(s=>Math.max(s-1))},v=()=>{c(s=>Math.min(s+1))};return e.jsxs("div",{children:[e.jsx("div",{className:"   px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ",children:r.map(s=>e.jsxs("div",{className:"mt-7 flex  max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md",children:[e.jsx("div",{className:"mx-3 mt-3 flex h-60 overflow-hidden rounded-xl",children:e.jsx("img",{className:"object-cover cursor-pointer w-full",src:s.image,onClick:()=>f(s._id),alt:s.title})}),e.jsxs("div",{className:"mt-4 px-5 pb-5",children:[e.jsx("div",{children:e.jsx("h5",{className:"text-lg font-medium tracking-tight  text-slate-900",children:s.title})}),e.jsxs("div",{className:"mt-2 mb-5 flex items-center justify-between",children:[e.jsx("p",{children:e.jsxs("span",{className:"text-2xl font-bold text-slate-900",children:["₹",s.price]})}),e.jsxs("div",{className:"flex ",children:[e.jsx(C,{className:"mr-1 mt-1"}),e.jsxs("p",{className:"",children:[" ",s.updatedAt]})]})]}),s.isPublish?e.jsxs("div",{className:"flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-center text-sm  text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300",children:[e.jsx(M,{className:"mr-1 mt-1"}),"Listed"]}):e.jsxs("div",{className:"flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 cursor-pointer text-center text-sm  text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300",onClick:()=>j(s._id),children:[e.jsx(P,{className:"mr-2 mt-1"}),"Publish"]})]})]},s._id))}),e.jsx("div",{className:"flex justify-center mt-10",children:e.jsx(w,{children:e.jsxs(k,{children:[e.jsx(x,{children:e.jsx("button",{className:`p-2 rounded-md ${a===1?"bg-gray-50":"bg-gray-300"}`,disabled:a===1,onClick:b,children:"Previous"})}),[...Array(l)].map((s,t)=>e.jsx(x,{children:e.jsx(A,{className:"cursor-pointer",onClick:()=>c(t+1),children:t+1})},t)),e.jsx(x,{children:e.jsx("button",{className:`p-2 rounded-md ${a===l?"bg-gray-50":"bg-gray-300"}`,disabled:a===l,onClick:v,children:"Next"})})]})})})]})};export{I as default};