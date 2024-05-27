import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { lazy,Suspense, useEffect, useState,startTransition, ReactNode  } from "react"



const  Home= lazy(()=>(import('./Pages/User/Home')))
import Login from "./Pages/User/Login";
import SignUp from "./Pages/User/SignUp";

import { ThemeProvider } from "./components/ui/theme-provider";
import { Otp } from "./Pages/User/Otp";
import { ForgotPassword } from "./Pages/User/ForgotPassword";
import ResetPassword from "./Pages/User/ResetPassword";
import "./App.css";
import { Toaster } from "@/components/ui/sonner";

import SignIn from "./Pages/Instructor/SignIn";
import Register from "./Pages/Instructor/Register";
import { EmailConfirm } from "./Pages/Instructor/EmailConfirm";
import Reset from "./Pages/Instructor/Reset";

import { Page404 } from "./Pages/404";
const DashboardPage = lazy(()=>(import("./Pages/Instructor/DashBoard"))) 
import NavBarLayout from "./layout/NavBarLayout";
import { UserAuthLayout } from "./layout/UserAuthLayout";
import UserVerifiedLayout from "./layout/UserVerifiedLayout";
import InstructorAuthLayout from "./layout/InstructorAuthLayout";
import InstructorVerifiedLayout from "./layout/InstructorVerifiedLayout";
const AboutCourse = lazy(()=>(import("./Pages/User/AboutCourse")))
const MyCourses = lazy(() => import('./Pages/Instructor/MyCourses'));
import InstructorNavBar from "./layout/InstructorNavBar";

const  AddCourse  = lazy(()=>(import("./Pages/Instructor/AddCourse")))
import Layout from "./components/Admin/Layout";
import DashBoard from "./components/Admin/Main";
const  UserList = lazy(()=>(import("./Pages/Admin/UserList"))) 
const TutorList = lazy(()=>(import("./Pages/Admin/TutorList"))) 
const  Catagory = lazy(()=>(import("./Pages/Admin/Catagory"))) 
const  DetailsAbout = lazy(()=>(import("./Pages/Instructor/DetailsAbout"))) 
const  ViewCourse = lazy(()=>(import("./Pages/User/ViewCourse")))
const Payment = lazy(()=>(import("./Pages/User/Payment"))) 
import Profile from "./Pages/User/Profile";

import PaymentSuccess from "./Pages/User/PaymentSuccess";
import AdminLogin from "./Pages/Admin/AdminLogin";
import { AdminLayout } from "./layout/AdminLayout";
const  CoursesList = lazy(()=>(import("./Pages/Admin/CoursesList")))
const CourseApprovals = lazy(()=>(import("./Pages/Admin/CourseApprovals"))) 
const  Subscription =lazy(()=>(import("./Pages/Admin/Subscription"))) 
const  SubscriptionPlan = lazy(()=>(import("./Pages/Instructor/SubscriptionPlan"))) 
import SubscriptionSuccess from "./Pages/Instructor/SubscriptionSuccess";
 const Courses = lazy(()=>(import('./Pages/User/Courses')))
import Test from "./components/Test";
import ChangePassword from "./Pages/User/ChangePassword";
import ChatList from "./Pages/Instructor/ChatList"; 

type SuspenseFnProps = {
  Element: ReactNode;
};
const SuspenseFn: React.FC<SuspenseFnProps> = ({ Element }) => {
  const [element, setElement] = useState<ReactNode>(null);

  useEffect(() => {
    startTransition(() => {
      setElement(Element);
    })
  }, [Element]);

  return (
    <Suspense fallback={<Test />}>
      {element}
    </Suspense>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Toaster
          richColors
          expand={true}
          position="top-right"
          className="mt-8"
        />


        <Routes>
          <Route path="/" Component={NavBarLayout}>
            <Route index element={<SuspenseFn Element={<Home />} />} />

    
            <Route path="course-Details/:id" element={<SuspenseFn Element={<AboutCourse />} />} />
            <Route path= "courses" element = {<SuspenseFn Element={<Courses/>}/>} />
           
            <Route Component={UserAuthLayout}>
              <Route path="/payment/:id" element={<SuspenseFn Element={<Payment/>}/>}/>
              <Route path="/profile"   element={<Profile/>}/>
              <Route path = "/change-password" element={<SuspenseFn Element={<ChangePassword/>}/>}/>
              <Route path="/success/:id" element={<PaymentSuccess />} />
              <Route path="/viewcourse/:id" element={<SuspenseFn Element= {<ViewCourse />}/>}/>
            </Route>
          </Route>
          <Route Component={UserVerifiedLayout}>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/verify-email/:id/:token"
              element={<ResetPassword />}
            />
          </Route>
          <Route Component={InstructorVerifiedLayout}>
            <Route path="/instructor/signup" element={<Register />} />
            <Route path="/instructor/signin" element={<SignIn />} />
            <Route
              path="/instructor/forgot-password"
              element={<EmailConfirm />}
            />
            <Route
              path="/instructor/verify-email/:id/:token"
              element={<Reset />}
            />
          </Route>
          <Route Component={InstructorAuthLayout}>
            <Route Component={InstructorNavBar}>
              <Route path="/instructor/dashboard" element={<SuspenseFn Element={<DashboardPage />}/>} />
              <Route path="/instructor/courses" element={ <SuspenseFn Element={<MyCourses />}/>} />
              <Route path="/instructor/addcourse" element={<SuspenseFn Element={<AddCourse />}/>} />
              <Route path="/instructor/chat"   element={<ChatList/>}/>
           
              <Route path="/instructor/subscription" element={<SuspenseFn Element={<SubscriptionPlan/>}/>}/>
              <Route path = "/instructor/subscription-success" element = {<SubscriptionSuccess/>}/>
              <Route
                path="/instructor/mycourse/:id"
                element={<SuspenseFn Element={<DetailsAbout />}/>}/>
            </Route>
          </Route>

          <Route path="/*" element={<Page404 />} />

          <Route path="admin/login" element={<AdminLogin />} />
          <Route Component={AdminLayout}>
            <Route path="/admin/*" element={<Layout />}>
              <Route path="dashboard" element={<DashBoard />} />
              <Route path="client" element={<SuspenseFn Element={<UserList />}/>} />
              <Route path="tutor" element={<SuspenseFn Element={<TutorList />}/>} />
              <Route path="catagory" element={<SuspenseFn Element={<Catagory />}/>} />
              <Route path="courses" element={<SuspenseFn Element={<CoursesList />}/>} />
              <Route path="course/:id" element={<SuspenseFn Element={<CourseApprovals />}/>} />
              <Route path="subscription" element={<SuspenseFn Element={<Subscription />}/>} />

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
