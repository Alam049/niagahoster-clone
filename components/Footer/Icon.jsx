import React from 'react'
import { FiFacebook,FiInstagram,FiTwitter } from "react-icons/fi"
import { AiOutlineLinkedin,AiOutlineYoutube } from "react-icons/ai"
import { SiTiktok } from "react-icons/si"
import Link from 'next/link'


const Icon = () => {
  return (
    <div className='text-white grid grid-cols-3 items-center ml-5 mt-8 gap-6 justify-items-center px-[140px] md:px-[240px] md:mr-[120px] lg:px-0 lg:mr-[65px] lg:ml-0 ' >
      
     
      <FiFacebook  className=' p-3 rounded-full bg-slate-600 text-5xl hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer '/>
     
      
        
        <FiInstagram className=' hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer p-3 rounded-full bg-slate-600 text-5xl' />
       
      
      <AiOutlineLinkedin className=' hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer p-3 rounded-full bg-slate-600 text-5xl' />
     
       
        <FiTwitter className='  hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer p-3 rounded-full bg-slate-600 text-5xl' />
       
       
       <SiTiktok className=' hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer p-3 rounded-full bg-slate-600 text-5xl' />
      
     
     <AiOutlineYoutube className='hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer  p-3 rounded-full bg-slate-600 text-5xl' />
    
    </div>
  )
}

export default Icon