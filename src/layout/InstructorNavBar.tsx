
import { MainNav } from '@/components/Instructor/main-nav'
import { Outlet } from 'react-router-dom'

const InstructorNavBar = () => {
  return (
    <div>
        <MainNav/>
        <Outlet/>
    </div>
  )
}

export default InstructorNavBar