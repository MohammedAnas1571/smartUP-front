import{r as c,j as s}from"./index-CPcYxd-k.js";import{P as d,a as g,b as r,c as m}from"./pagination-DGf8UtJW.js";const h=()=>{const[a,n]=c.useState(1),[e,i]=c.useState(1);return{currentPage:a,setCurrentPage:n,totalPages:e,setTotalPages:i}},u=({currentPage:a,setCurrentPage:n,totalPages:e})=>{const i=()=>{n(t=>t-1)},l=()=>{n(t=>t+1)};return s.jsx("div",{className:"flex justify-center mt-10",children:s.jsx(d,{children:s.jsxs(g,{children:[s.jsx(r,{children:s.jsx("button",{className:`p-2 rounded-md ${a===1?"bg-gray-50":"bg-gray-300"}`,disabled:a===1,onClick:i,children:"Previous"})}),[...Array(e)].map((t,o)=>s.jsx(r,{children:s.jsx(m,{className:"cursor-pointer",onClick:()=>n(o+1),children:o+1})},o)),s.jsx(r,{children:s.jsx("button",{className:`p-2 rounded-md ${a===e?"bg-gray-50":"bg-gray-300"}`,disabled:a===e,onClick:l,children:"Next"})})]})})})};export{u as P,h as u};
