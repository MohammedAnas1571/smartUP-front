
import { BrowserRouter,Routes,Route, } from "react-router-dom"
import Home from "./components/Home"
import Login from "./Pages/User/Login"
import SignUp from "./Pages/User/SignUp"
import Career from "./Pages/Career"
import { ThemeProvider } from "./components/ui/theme-provider"
import {Otp} from "./Pages/User/Otp"
import {ForgotPassword} from "./Pages/User/ForgotPassword"
import  ResetPassword from './Pages/User/ResetPassword'
import "./App.css"
import { Toaster } from "@/components/ui/sonner"
import Course from "./Pages/Courses"
import SignIn from "./Pages/Instructor/SignIn"

import Register from "./Pages/Instructor/Register"
import { EmailConfirm } from "./Pages/Instructor/EmailConfirm"
import Reset from "./Pages/Instructor/Reset"
import UserList from "./Pages/Admin/UserList"
import SideBar from "./components/Navbar/SideBar"
import { ProtectedRoute } from "./route/ProtectedRoute"



  

function App() {
  

  return (
    <div >
       <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
     
      
      <Toaster  />
{/*      
     <NavBar/> */}
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/verify-email/:id/:token" element={<ResetPassword/>}/>
        <Route path="/instructor/register" element={<Register/>} />
        <Route path="/instructor/signIn" element={<SignIn/>} />
        <Route element={<ProtectedRoute />}>

        <Route path="/instructor/forgotPassword" element={<EmailConfirm/>}/>
        <Route path="/instructor/verify-email/:id/:token" element={<Reset/>}/>
        </Route>
    
        
        <Route path="/admin" element={<SideBar/>}>
        <Route index element={<p>foisfhs</p>}/>
             <Route path="dashboard" element={<UserList/>}/>
        </Route>
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
