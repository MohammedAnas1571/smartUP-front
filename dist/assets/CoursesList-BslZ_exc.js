import{r as t,e as l,j as s,B as d,b as a,A as u}from"./index-CPcYxd-k.js";import{C as m,c as x}from"./card-CiLoeUdg.js";const f=()=>{const[r,n]=t.useState([]),o=l(),i=async()=>{try{const{data:e}=await a.get("/auth/admin/getCourses");n(e)}catch(e){a.isAxiosError(e)&&e.response&&u.error(e.response.data.message||"Something Went Wrong")}};t.useEffect(()=>{i()},[]);const c=e=>{o(`/admin/course/${e}`)};return s.jsx("div",{children:s.jsx("div",{className:"grid grid-cols-1  md:grid-cols-3 gap-2 mt-5 px-4",children:r.map(e=>s.jsxs(m,{onClick:()=>c(e._id),className:"w-full h-48 shadow-xl relative cursor-pointer ",style:{backgroundImage:`url(${e.image})`,backgroundSize:"cover",backgroundPosition:"center"},children:[s.jsx(x,{className:"flex justify-center items-center w-full h-full",children:s.jsxs("h1",{className:"text-2xl text-white font-bold",children:[" ",e.title]})}),s.jsx(d,{className:`absolute bottom-4 right-4 ${e.status==="Pending"?" text-red-500 ":"text-green-500"} `,variant:"outline",children:e.status})]}))})})};export{f as default};
