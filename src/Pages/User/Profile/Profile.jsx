import React from 'react'
import profileBg from "../../../assets/profile/profilebg.jpg"

const Profile = () => {
  return (
    <main className='p-12'>
      <div className="bg-cover bg-center h-48 my-24 flex items-center justify-between"
          style={{backgroundImage: `url(${profileBg})`}}>
      </div>
      <section>
        <img src="" alt="" />
        <h3>Emmanuel Israel</h3>
        <p>Technician</p>
      </section>
      <section>
        
      </section>
    </main>
  )
}

export default Profile