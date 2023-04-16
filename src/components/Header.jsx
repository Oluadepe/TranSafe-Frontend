import logo from "../assets/home/logo.svg"
import { NavLink } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa"
import { RiLinkedinFill } from "react-icons/ri"
import { SiTwitter } from "react-icons/si"
import { AiFillInstagram } from "react-icons/ai"

const Header = () => {
  return (
    <header>
      <div className="flex">
        <p>Contact Support +234 8124510001</p>
        <p className="flex items-center">Follow us on: 
        <div className="flex"> 
        <FaFacebookF />
        <RiLinkedinFill />
        <SiTwitter />
        <AiFillInstagram />
        </div></p>
      </div>
      <div className="flex h-24 bg-green-700"> 
      <img src={logo} alt="Transafe logo" className=""/>
      <nav>
        <NavLink to=".">Home</NavLink>
        <NavLink to="about">About Us</NavLink>
        <NavLink>Timetable</NavLink>
        <NavLink>My Bookings</NavLink>
        <NavLink to="faqs">FAQs</NavLink>
        <NavLink>Sign In/Sign Up</NavLink>
      </nav>
      </div>
    </header>
  )
}

export default Header