import logo from "../assets/home/logo.svg"
import { NavLink } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa"
import { RiLinkedinFill } from "react-icons/ri"
import { SiTwitter } from "react-icons/si"
import { AiFillInstagram } from "react-icons/ai"

const Header = () => {
  return (
    <header>
      <div className="flex justify-end mr-16 py-2 text-gray-700">
        <p className="mr-8">Contact Support +234 8124510001</p>
        <p className="flex items-center">Follow us on: 
        <div className="flex text-green-700"> 
        <FaFacebookF className="mx-2"/>
        <RiLinkedinFill className="mr-2"/>
        <SiTwitter className="mr-2"/>
        <AiFillInstagram />
        </div></p>
      </div>
      <div className="flex h-24 bg-green-700 justify-between items-center">
        <div className="w-1/3 ml-16">
      <img src={logo} alt="Transafe logo" className="w-1/6 bg-white opacity-70 rounded-full"/>
      </div>
      <nav className="w-2/3 text-white font-semibold flex justify-end mr-16 items-center">
        <NavLink to="/" className="mr-8">Home</NavLink>
        <NavLink to="/about" className="mr-8">About Us</NavLink>
        <NavLink className="mr-8" to="/timetable">Timetable</NavLink>
        <NavLink to="/faqs" className="mr-8">FAQs</NavLink>
        <NavLink to="/login" className="bg-white text-green-700 py-3 px-8 rounded-md">Sign In/Sign Up</NavLink>
      </nav>
      </div>
    </header>
  )
}

export default Header