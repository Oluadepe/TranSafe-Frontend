import logo from "../assets/home/logo.svg"
import { FaFacebookF } from "react-icons/fa"
import { RiLinkedinFill } from "react-icons/ri"
import { SiTwitter } from "react-icons/si"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
const presentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-200 pt-12">
      <div className="flex w-11/12 mx-auto justify-between py-8">
        <div className="w-4/12">
          <img src={logo} alt="" />
          <p>Transafe is an E-Ticketing web application to streamline the ticket booking process, enhance the passenger experience, and to improve the efficiency of train companies.</p>
        </div>
        <ul className="w-2/12">
          <li><a href="">About Us</a></li>
          <li><a href="">Privacy and policy</a></li>
          <li><a href="">Terms & conditions</a></li>
          <li><a href="">News & Updates</a></li>
        </ul>
        <ul className="w-2/12">
          <li><a href="">Quick Links</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">FAQs</a></li>
          <li><a href="">Train Timetable</a></li>
          <li><a href="">My Bookings</a></li>
          <li><a href="">Find a train</a></li>
          <li><a href="">Lagos - Ibadan</a></li>
          <li><a href="">Lagos - Abeokuta</a></li>
          <li><a href="">Abeokuta - Ibadan</a></li>
        </ul>
       <div className="w-3/12">
        <h3>Contact Us</h3>
        <p>5900 Balcones Drive STE 100 Austin, TX 78731, Austin, Texas, United States of America</p>
        <p>&#9742; +234 8124510001</p>
        <p>&#x2709; companyemail@here.com</p>
        <div className="flex"> 
        <FaFacebookF />
        <RiLinkedinFill />
        <SiTwitter />
        <AiFillInstagram />
        </div>
       </div>
      </div>
      <p className="h-16 flex items-center justify-center text-white bg-green-700">Copyright &copy; {presentYear} TranSafe. All rights reserved.</p>
    </footer>
  )
}

export default Footer