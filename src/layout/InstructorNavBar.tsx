
import { MainNav } from '@/components/dashboard/main-nav'
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