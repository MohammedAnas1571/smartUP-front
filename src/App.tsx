
import { BrowserRouter,Routes,Route, } from "react-router-dom"
import Home from "./Pages/User/Home"
import Login from "./Pages/User/Login"
import SignUp from "./Pages/User/SignUp"

import { ThemeProvider } from "./components/ui/theme-provider"
import {Otp} from "./Pages/User/Otp"
import {ForgotPassword} from "./Pages/User/ForgotPassword"
import  ResetPassword from './Pages/User/ResetPassword'
import "./App.css"
import { Toaster } from "@/components/ui/sonner"

import SignIn from "./Pages/Instructor/SignIn"
import Register from "./Pages/Instructor/Register"
import { EmailConfirm } from "./Pages/Instructor/EmailConfirm"
import Reset from "./Pages/Instructor/Reset"


import { Page404 } from "./Pages/404"
import DashboardPage from "./Pages/Instructor/DashBoard"
import NavBarLayout from "./layout/NavBarLayout"
import { UserAuthLayout } from "./layout/UserAuthLayout"
import UserVerifiedLayout from "./layout/UserVerifiedLayout"
import InstructorAuthLayout from "./layout/InstructorAuthLayout"
import InstructorVerifiedLayout from "./layout/InstructorVerifiedLayout"
import AboutCourse from "./Pages/User/AboutCourse"
import MyCourses from "./Pages/Instructor/MyCourses"
import InstructorNavBar from "./layout/InstructorNavBar"

import AddCourse from "./Pages/Instructor/AddCourse"
import Layout from "./components/Admin/Layout"
import DashBoard from "./components/Admin/Main"
import UserList from "./Pages/Admin/UserList"
import TutorList from "./Pages/Admin/TutorList"
import Catagory from "./Pages/Admin/Catagory"
import DetailsAbout from "./Pages/Instructor/DetailsAbout"
import ViewCourse from "./Pages/User/ViewCourse"
import Payment from "./Pages/User/Payment"

 


function App() {
  
  return (
       
       <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
      <Toaster richColors expand={true} position="top-right" className="mt-8" />
      <Routes>
        <Route path="/" Component={NavBarLayout}>
        <Route index element={<Home/>}/>
        <Route path="course-Details/:id" element={<AboutCourse/>}/>
        <Route Component={UserAuthLayout}>
        <Route path="/payment/:id" element={<Payment/>}/>
       <Route  path="/success/:id" element={<ViewCourse/>}/>
        </Route>
        </Route>
        <Route Component={UserVerifiedLayout}>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/verify-email/:id/:token" element={<ResetPassword/>}/>
        </Route>
          <Route Component={InstructorVerifiedLayout}>
         <Route path="/instructor/signup" element={<Register/>} />
        <Route path="/instructor/signin" element={<SignIn/>} />
        <Route path="/instructor/forgot-password" element={<EmailConfirm/>}/>
        <Route path="/instructor/verify-email/:id/:token" element={<Reset/>}/>
        </Route>
        <Route Component={InstructorAuthLayout}>
          <Route  Component={InstructorNavBar}>
        <Route path="/instructor/dashboard"  element={<DashboardPage />}/>
        
        <Route path="/instructor/courses" element={<MyCourses/>} />
        <Route path="/instructor/addcourse" element={<AddCourse/>} />
        <Route path="/instructor/mycourse/:id"element={<DetailsAbout/>} />
        </Route>
        </Route>

        <Route path="/*" element={<Page404 />}/>


        <Route path="/admin/*" element={<Layout/>}>
             <Route path="dashboard" element={<DashBoard/>}/>
             <Route path="client" element={<UserList/>}/>
             <Route path="tutor" element={<TutorList/>}/>
             <Route path="catagory" element={<Catagory/>}/>
        </Route> 
      </Routes>
     
     
      </BrowserRouter>
      </ThemeProvider> 
  )
}

export default App

