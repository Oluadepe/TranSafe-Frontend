import React from "react"
import BgImg from "../assets/home/Bgnine.svg"
import Schedule from "./Schedule";

const Timetable = () => {

  return (
    <main className="bg-cover bg-center h-auto mb-12 p-8"
    style={{backgroundImage: `url(${BgImg})`}}>
      <Schedule />   
    </main>
  )
}

export default Timetable