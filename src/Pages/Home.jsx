import news1 from "../assets/home/train1.svg"
import news2 from "../assets/home/Train2.svg"
import news3 from "../assets/home/Train3.svg"
import coverImg1 from "../assets/home/Bgtwo.svg"
import coverImg2 from "../assets/home/Bgthree.svg"
import coverImg3 from "../assets/home/Bgfour.svg"
import { FiClock } from "react-icons/fi"
import { CiMoneyBill } from "react-icons/ci"
import { FaRecycle } from "react-icons/fa"
import heroImg from "../assets/home/Bgone.svg"
import bottomBg from "../assets/home/Bgnine.svg"

const Home = () => {
  return (
        <main>
          <section className="flex">
            <div className="text-white w-2/3 bg-cover bg-center h-96 p-8"
            style={{backgroundImage: `url(${heroImg})`}}>
            <h1 className="text-6xl font-bold my-4 capitalize">Buy tickets With No Hassles</h1>
              <p className="text-xl">Transafe prioritizes your experience in acquiring your train tickets. Thank you for always trusting us.</p>
            </div>
          </section>
          <section>
          <h2 className="font-bold text-4xl text-gray-700 my-12 text-center capitalize">Why choose us</h2>
          <div className="flex w-10/12 mx-auto">
            <div className="w-1/3 mr-12 flex flex-col items-center bg-blue-100 p-4 rounded-md text-gray-700">
              <FiClock className="w-12 h-12"/>
              <h3 className="font-semibold text-xl my-4 capitalize">Fast & easy booking</h3>
              <p className="text-xs text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut odio vero praesentium earum ut enim natus error, dolore repudiandae quo beatae dolor magni voluptatem ratione quis incidunt! Laborum, in?</p>
            </div>
            <div className="w-1/3 mr-12 flex flex-col items-center bg-blue-100 p-4 rounded-md text-gray-700">
              <FaRecycle className="w-12 h-12"/>
              <h3 className="font-semibold text-xl my-4 capitalize">Reuse Missed Train Ticket</h3>
              <p className="text-xs text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut odio vero praesentium earum ut enim natus error, dolore repudiandae quo beatae dolor magni voluptatem ratione quis incidunt! Laborum, in?</p>
            </div>
            <div className="w-1/3 flex flex-col items-center bg-blue-100 p-4 rounded-md text-gray-700">
              <CiMoneyBill className="w-12 h-12"/>
              <h3 className="font-semibold text-xl my-4 capitalize">instant refund</h3>
              <p className="text-xs text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut odio vero praesentium earum ut enim natus error, dolore repudiandae quo beatae dolor magni voluptatem ratione quis incidunt! Laborum, in?</p>
            </div>
          </div>
          </section>
          <section>
          <h2 className="font-bold text-4xl text-gray-700 my-12 text-center capitalize">what our users say</h2>
          </section>
          <section>
            <h2 className="font-bold text-4xl text-gray-700 my-12 text-center capitalize">Where we go</h2>
            <div className="bg-cover bg-center h-96 flex items-center" 
            style={{backgroundImage: `url(${coverImg1})`}}>
              <p className="bg-black bg-opacity-80 text-white p-3 mt-auto rounded-md underline ml-8 mb-8 font-normal">Lagos</p>
            </div>
            <div className="w-11/12 mx-auto flex justify-between mt-12 mb-24">
            <div className="h-96 w-1/2 flex items-center mr-14" 
            style={{backgroundImage: `url(${coverImg3})`}}>
              <p className="bg-black bg-opacity-80 text-white p-3 mt-auto rounded-md underline ml-8 mb-8">Abeokuta</p>
            </div>
            <div className="bg-cover bg-center h-96 w-1/2 flex items-center" 
            style={{backgroundImage: `url(${coverImg2})`}}>
              <p className="bg-black bg-opacity-80 text-white p-3 mt-auto rounded-md underline ml-8 mb-8">Ibadan</p>
            </div>
            </div>
          </section>
          <section className="bg-cover bg-center bg-gray-700 bg-blend-overlay h-80 flex"
          style={{backgroundImage: `url(${news2})`}}>
            <div className="flex w-10/12 m-auto justify-between">
              <div className="text-white w-2/3 mr-20">
              <h3 className="text-4xl font-bold my-4 capitalize">Our train journey</h3>
              <p className="text-xl">Book your train tickets for journeys in the 3 train zones in which the train is divided into.</p>
            </div>
            <div className="bg-white rounded-md w-1/3 p-4">
              <h4 className="font-bold">Zone 1 - 4</h4>
              <progress max="100" value="50" className="w-full h-1"></progress>
              <ul className="list-square list-inside marker:text-green-700">
                <li className="font-bold">Lagos - Ibadan</li>
              </ul>
              <h4 className="font-bold">Zone 1</h4>
              <progress max="100" value="50" className="w-full h-1"></progress>
              <ul className="list-square list-inside marker:text-green-700">
                <li className="font-bold">Lagos - Abeokuta</li>
              </ul>
              <h4 className="font-bold">Zone 2</h4>
              <progress max="100" value="50" className="w-full h-1"></progress>
              <ul className="list-square list-inside marker:text-green-700">
                <li className="font-bold">Abeokuta - Ibadan</li>
              </ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-center text-4xl my-12 font-bold text-gray-700 capitalize">News & updates</h2>
            <div className="w-11/12 mx-auto flex my-12 text-green-700 text-sm">
              <div className="1/3 mr-8">
                <img src={news2} alt="" className="h-64 w-full object-cover object-center mb-2"/>
                <a href="#">Things you need to know about the new Lagos - Ibadan train</a>
                <p>Jan 2023</p>
              </div>
              <div className="1/3 mr-8">
              <img src={news1} alt="" className="h-64 w-full object-cover object-center mb-2" />
              <a href="#">Buhari flags off full commercial operation at Ebuta Metta station</a>
              <p>Dec 2022</p>
              </div>
              <div className="1/3 mr-8">
              <img src={news3} alt="" className="h-64 w-full object-cover object-center mb-2" />
              <a href="#">FG begins test bookings on railway e-ticketing platform</a>
              <p>Dec 2022</p>
              </div>
            </div>
          </section>
          <section className="bg-cover bg-center h-72 my-24 flex items-center justify-between"
          style={{backgroundImage: `url(${bottomBg})`}}>
            <div className="flex items-center justify-between mx-20">
            <div className="text-white w-6/12 mr-20">
              <h3 className="text-4xl font-bold my-4 capitalize">stay in the loop</h3>
              <p className="text-md">Subscribe to receive the latest news and updates about Transafe. We promise not to spam you!</p>
            </div>
            <div className="w-6/12">
              <input type="text" placeholder="enter your email address" className=" rounded-md px-8 py-2  w-4/6"/>
              <button className="bg-green-700 text-white rounded-md px-8 py-2 w-2/6">Subscribe</button>
              </div>
            </div>
          </section>
        </main>
  )
}

export default Home