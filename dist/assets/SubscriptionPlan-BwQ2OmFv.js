import{r,j as s,b as i,A as c}from"./index-BX51NH_z.js";const m=()=>{const[x,n]=r.useState([]),[a,p]=r.useState(),d=async()=>{try{const e=await i.get("/auth/tutor/subscription");n(e.data.subscriptions),p(e.data.subscribed)}catch(e){i.isAxiosError(e)&&e.response&&c(e.response.data.message||"Sorry, something went wrong!")}};r.useEffect(()=>{d()},[]);const o=async e=>{try{const{data:t}=await i.post("/auth/tutor/payment",{subscription:e});t.url&&(window.location.href=t.url)}catch{console.log("error in payment gateway")}};return s.jsx("div",{className:"flex min-h-screen pt-[30px] px-[40px]",children:s.jsx("div",{className:"min-w-full",children:s.jsx("div",{className:"mt-[20px] grid grid-cols-3 gap-[20px]",children:x.map((e,t)=>s.jsxs("div",{className:"w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y",children:[s.jsxs("div",{className:"pt-[15px] px-[25px] pb-[25px]",children:[s.jsxs("div",{className:"break-words",children:[s.jsx("p",{className:"text-[#00153B] text-[19px] font-bold",children:e.planName}),s.jsxs("p",{className:"text-[#00153B] text-[50px] leading-[63px] font-bold",children:["₹",e.price]})]}),s.jsx("div",{children:s.jsx("p",{className:"text-[#717F87] text-[18px] leading-[28px] font-medium",children:e.billingPeriod})})]}),s.jsxs("div",{className:"pt-[25px] px-[25px] pb-[35px]",children:[s.jsx("div",{children:e.description}),e._id===(a==null?void 0:a.subscriptionId)?s.jsx("button",{className:"bg-[#006EF5] mt-5 rounded-[5px] py-[15px] px-[25px] cursor-default text-[#fff] text-[14px] leading-[17px] font-semibold",children:"Active Plan"}):a?"":s.jsx("button",{onClick:()=>o(e),className:"bg-[#006EF5] mt-5 rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold",children:"Subscribe"})]})]},t))})})})};export{m as default};