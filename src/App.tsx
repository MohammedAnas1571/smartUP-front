

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Career from "./Pages/Career"

import { ThemeProvider } from "./components/ui/theme-provider"
import {Otp} from "./Pages/Otp"
import ForgotPassword from "./Pages/ForgotPassword"
import  ResetPassword from './Pages/ResetPassword'

import { Toaster } from "@/components/ui/sonner"
import Profile from "./Pages/Profile"



  

function App() {
  

  return (
    <div >
       <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
     
      
      <Toaster  />
     
     
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/verify-email/:id/:token" element={<ResetPassword/>}/>
        <Route path="/profile" element ={<Profile/>} />
      </Routes>
     
     
      </BrowserRouter>
      </ThemeProvider>
     

    </div>
  )
}

export default App






//     onSubmit: async (value: z.infer<typeof FormSchema>) => {
          
     
//     },
//   });
//   return (
//    
//       
//         <form  onSubmit={form.handleSubmit}>
//          

//          
//         
//        
//             <InputOTP
//             value={formik.values.otp}
//             onBlur={formik.handleBlur}
//             onChange={formik.handleChange}
//             name='otp'
//               maxLength={4}
//               render={({ slots }) => (
//                 <InputOTPGroup className="gap-5">
//                   {slots.map((slot) => (
//                     <InputOTPSlot
//                       className="rounded-lg border  w-16 h-16 font-semibold text-xl bg-slate-200"
//                       {...slot}
//                     />
//                   ))}
//                 </InputOTPGroup>
//               )}
//             />
//           </div>
//           <Button className="mt-8 p-6 w-80 text-lg">Submit</Button>
//         </form>
//       </div>
//     </div>
//   );
// }
