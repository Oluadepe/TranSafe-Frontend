import Header from "../components/Header"
import Footer from "../components/Footer"
import bottomBg from "../assets/home/Bgnine.svg"
import iconOne from "../assets/faq/Questions.svg"
import iconTwo from "../assets/faq/questionicon.svg"
import Questions from "../components/Questions"

const Faqs = () => {
  return (
        <main>
            <section className="bg-green-100">
                <div className="w-11/12 flex mx-auto items-center justify-between">
                <div className="w-1/6">
                    <img src={iconTwo} alt="question mark icon" />
                </div>
                <div className="w-4/6 mx-10 text-center flex items-center flex-col text-gray-700 ">
                    <h2 className="text-gray-700 font-bold text-3xl">Do you have any questions?</h2>
                    <p className="mb-4 mt-2 text-md">Search here to get answers to your questions.</p>
                    <div className="w-6/12">
                    <input type="text" placeholder="Type your question here" className=" rounded-md px-8 py-2  w-4/6"/>
                    <button className="bg-green-700 text-white rounded-md px-8 py-2 w-2/6">Search</button>
                    </div>
                </div>
                <div className="w-1/6">
                    <img src={iconOne} alt="" />
                </div>
                </div>
            </section>
            <div>
              <Questions />
            </div>
            <section className="text-center p-4 my-8">
                <h4 className="font-semibold text-xl">Still have any question?</h4>
                <p className="mb-4">Contact us and we will reply you within 24 hours</p>
                <a href="#" className="bg-green-700 text-white rounded-md px-8 py-2">Contact Us</a>
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

export default Faqs;