import { NavLink, Outlet } from "react-router-dom"
import ProfileHeader from "../ProfileHeader"
import { MdDashboard } from "react-icons/md"
import { GrTransaction } from "react-icons/gr"
import { FaUserCircle } from "react-icons/fa"
import { BsFillBookmarkPlusFill } from "react-icons/bs"

const Layout = () => {
  return (
      <main>
       <ProfileHeader />
        <div className="flex">
      <div className="w-1/6 flex flex-col bg-green-200 h-screen pt-10 px-8 text-gray-700 font-semibold">
        <NavLink to="/dashboard" className="mt-12 mb-4 flex items-center"><MdDashboard className="mr-3"/> Dashboard</NavLink>
        <NavLink to="profile" className="mb-4 flex items-center"><FaUserCircle className="mr-3"/> Profile</NavLink>
        <NavLink className="mb-4 flex items-center"><GrTransaction className="mr-3"/>Transaction History</NavLink>
        <NavLink to="booktrain" className="flex items-center"><BsFillBookmarkPlusFill className="mr-3"/> Book a train</NavLink>
      </div>
    <div className="w-5/6">  
      <div>
      </div>
      <Outlet />
      </div>
      </div>
    </main>
  )
}

export default Layout