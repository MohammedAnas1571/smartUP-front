import{r as e,b as s,A as S}from"./index-BX51NH_z.js";const A=r=>{const[o,c]=e.useState(),[n,u]=e.useState(),[d,i]=e.useState(),[p,h]=e.useState(),[g,a]=e.useState([]),m=async()=>{try{const t=await s.get(`/auth/getDetails/${r}`),w=new Date(t.data.course.updatedAt).toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"});c({...t.data.course,updatedAt:w}),a(t.data.chapters),u(t.data.isPurchased),i(t.data.reviews),h(t.data.averageRating)}catch(t){s.isAxiosError(t)&&t.response&&S(t.response.data.message||"Sorry, something went wrong!")}};return e.useEffect(()=>{m()},[]),{course:o,chapters:g,setChapters:a,purchased:n,value:p,reviews:d}};export{A as u};