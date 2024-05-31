import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState, startTransition, ReactNode } from "react";
import { ThemeProvider } from "./components/ui/theme-provider";
import "./App.css";
import { Toaster } from "@/components/ui/sonner";

// Lazy-loaded components
const Home = lazy(() => import('./Pages/User/Home'));
const Login = lazy(() => import("./Pages/User/Login"));
const SignUp = lazy(() => import("./Pages/User/SignUp"));
const Otp = lazy(() => import("./Pages/User/Otp"));
const ForgotPassword = lazy(() => import("./Pages/User/ForgotPassword"));
const ResetPassword = lazy(() => import("./Pages/User/ResetPassword"));
const DashboardPage = lazy(() => import("./Pages/Instructor/DashBoard"));
const AboutCourse = lazy(() => import("./Pages/User/AboutCourse"));
const MyCourses = lazy(() => import('./Pages/Instructor/MyCourses'));
const AddCourse = lazy(() => import("./Pages/Instructor/AddCourse"));
const UserList = lazy(() => import("./Pages/Admin/UserList"));
const TutorList = lazy(() => import("./Pages/Admin/TutorList"));
const Catagory = lazy(() => import("./Pages/Admin/Catagory"));
const DetailsAbout = lazy(() => import("./Pages/Instructor/DetailsAbout"));
const ViewCourse = lazy(() => import("./Pages/User/ViewCourse"));
const Payment = lazy(() => import("./Pages/User/Payment"));
const Profile = lazy(() => import("./Pages/User/Profile"));
const PaymentSuccess = lazy(() => import("./Pages/User/PaymentSuccess"));
const AdminLogin = lazy(() => import("./Pages/Admin/AdminLogin"));
const CoursesList = lazy(() => import("./Pages/Admin/CoursesList"));
const CourseApprovals = lazy(() => import("./Pages/Admin/CourseApprovals"));
const Subscription = lazy(() => import("./Pages/Admin/Subscription"));
const SubscriptionPlan = lazy(() => import("./Pages/Instructor/SubscriptionPlan"));
const Courses = lazy(() => import('./Pages/User/Courses'));
const ChangePassword = lazy(() => import("./Pages/User/ChangePassword"));
const ChatList = lazy(() => import("./Pages/Instructor/ChatList"));
const Page404 = lazy(() => import("./Pages/404"));
const Layout = lazy(() => import("./components/Admin/Layout"));
const DashBoard = lazy(() => import("./components/Admin/Main"));
import  NavBarLayout from "./layout/NavBarLayout"
import UserAuthLayout from "./layout/UserAuthLayout"
import UserVerifiedLayout from"./layout/UserVerifiedLayout"
import  InstructorAuthLayout  from "./layout/InstructorAuthLayout"
import InstructorVerifiedLayout from "./layout/InstructorVerifiedLayout"
import  InstructorNavBar from "./layout/InstructorNavBar"
import  AdminLayout from "./layout/AdminLayout"
import ChatWindow from "./components/Instructor/ChatWindow";
const Test = lazy(() => import("./components/Test"))
const Register = lazy(() => import("./Pages/Instructor/Register"));
const SignIn = lazy(() => import("./Pages/Instructor/SignIn"));
const EmailConfirm = lazy(() => import("./Pages/Instructor/EmailConfirm"));
const SubscriptionSuccess = lazy(() => import("./Pages/Instructor/SubscriptionSuccess"));
const Reset = lazy(() => import("./Pages/Instructor/Reset"));

// Suspense wrapper component
type SuspenseFnProps = {
  Element: ReactNode;
};
const SuspenseFn: React.FC<SuspenseFnProps> = ({ Element }) => {
  const [element, setElement] = useState<ReactNode>(null);

  useEffect(() => {
    startTransition(() => {
      setElement(Element);
    });
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
            <Route path="courses" element={<SuspenseFn Element={<Courses />} />} />
            <Route Component={UserAuthLayout}>
              <Route path="/payment/:id" element={<SuspenseFn Element={<Payment />} />} />
              <Route path="/profile" element={<SuspenseFn Element={<Profile />} />} />
              <Route path="/change-password" element={<SuspenseFn Element={<ChangePassword />} />} />
              <Route path="/success/:id" element={<SuspenseFn Element={<PaymentSuccess />} />} />
              <Route path="/viewcourse/:id" element={<SuspenseFn Element={<ViewCourse />} />} />
            </Route>
          </Route>
          <Route Component={UserVerifiedLayout}>
            <Route path="/signin" element={<SuspenseFn Element={<Login />} />} />
            <Route path="/signup" element={<SuspenseFn Element={<SignUp />} />} />
            <Route path="/otp" element={<SuspenseFn Element={<Otp />} />} />
            <Route path="/forgot-password" element={<SuspenseFn Element={<ForgotPassword />} />} />
            <Route path="/verify-email/:id/:token" element={<SuspenseFn Element={<ResetPassword />} />} />
          </Route>
          <Route Component={InstructorVerifiedLayout}>
            <Route path="/instructor/signup" element={<SuspenseFn Element={<Register />} />} />
            <Route path="/instructor/signin" element={<SuspenseFn Element={<SignIn />} />} />
            <Route path="/instructor/forgot-password" element={<SuspenseFn Element={<EmailConfirm />} />} />
            <Route path="/instructor/verify-email/:id/:token" element={<SuspenseFn Element={<Reset />} />} />
          </Route>
          <Route Component={InstructorAuthLayout}>
            <Route Component={InstructorNavBar}>
              <Route path="/instructor/dashboard" element={<SuspenseFn Element={<DashboardPage />} />} />
              <Route path="/instructor/courses" element={<SuspenseFn Element={<MyCourses />} />} />
              <Route path="/instructor/addcourse" element={<SuspenseFn Element={<AddCourse />} />} />
              <Route path="/instructor/chat" element={<SuspenseFn Element={<ChatList />} />}>
                <Route path=":userID" Component={ChatWindow} />
              </Route>
              <Route path="/instructor/subscription" element={<SuspenseFn Element={<SubscriptionPlan />} />} />
              <Route path="/instructor/subscription-success" element={<SuspenseFn Element={<SubscriptionSuccess />} />} />
              <Route path="/instructor/mycourse/:id" element={<SuspenseFn Element={<DetailsAbout />} />} />
            </Route>
          </Route>
          <Route path="/*" element={<SuspenseFn Element={<Page404 />} />} />
          <Route path="admin/login" element={<SuspenseFn Element={<AdminLogin />} />} />
          <Route Component={AdminLayout}>
            <Route path="/admin/*" element={<SuspenseFn Element={<Layout />} />}>
              <Route path="dashboard" element={<SuspenseFn Element={<DashBoard />} />} />
              <Route path="client" element={<SuspenseFn Element={<UserList />} />} />
              <Route path="tutor" element={<SuspenseFn Element={<TutorList />} />} />
              <Route path="catagory" element={<SuspenseFn Element={<Catagory />} />} />
              <Route path="courses" element={<SuspenseFn Element={<CoursesList />} />} />
              <Route path="course/:id" element={<SuspenseFn Element={<CourseApprovals />} />} />
              <Route path="subscription" element={<SuspenseFn Element={<Subscription />} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
