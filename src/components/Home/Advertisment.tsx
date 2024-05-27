
const Advertisment = () => {
  
  const addvertisment = ["Intensive practical experience through real-life projects and applications","Create tailored learning paths for team and organization goals and even host ","Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces","Career support through mock interviews, profile building, and referral networks","Aspirational network of peers, across batches and backgrounds.","Regular 1:1 mentorship from product industry veterans"]

 
  return (
<>
  <div className="px-2 py-8 text-4xl flex justify-center   items-center text-slate-800 ">
    Key highlights of Smart Up programs
    <svg className="w-10 h-10 ml-2" xmlns="http://www.w3.org/2000/svg" id="flame" x="0" y="0" version="1.1" viewBox="0 0 52 52">
      <path fill="#fc0000" d="M38.433 43.792c-3.53 3.94-8.43 6.21-13.45 6.21-1.33 0-2.66-.17-3.95-.49-3.56-.88-6.6-2.82-9.05-5.77-.08-.1-6.86-8.8-.57-19.18.34-.55.72-1.05 1.02-1.43 2.74-3.45 5.42-8.22 3.96-10.33a.994.994 0 0 1 .01-1.13c.23-.35.66-.51 1.06-.4.39.09 3.41 1.04 4.06 7.02.66-1.4 1.24-3.27 1.1-5.4-.21-3.23-1.98-6.3-5.27-9.14a.992.992 0 0 1-.22-1.23c.22-.41.71-.62 1.15-.48.23.06 21.6 6.54 18.36 28.69 1.25-1.34 2.64-3.94 2.3-8.7-.03-.47.26-.89.7-1.03.45-.14.93.05 1.16.45.07.12 6.82 12.07-2.37 22.34z"></path>
    </svg>
  </div >
  <div className="grid grid-cols-3 gap-3  ">
   {addvertisment.map((ad,index)=>(

  <div key={index} className="max-w-sm   ">
  <div className=" text-centre h-56 rounded-lg  border-2 bg-gray-200" >
    <h2 className="mx-4 text-centre mt-4 mb-10 font-serif text-2xl  ">{ad}</h2>
    
  </div>
</div>
   ))}
</div>

  </>

  )
}

export default Advertisment