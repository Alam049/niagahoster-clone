import React from 'react'
import { FiFacebook,FiInstagram,FiTwitter } from "react-icons/fi"
import { AiOutlineLinkedin,AiOutlineYoutube } from "react-icons/ai"
import { SiTiktok } from "react-icons/si"
import Link from 'next/link'


const Icon = () => {
  return (
    <div className='md:pr-[350px] md:pl-[200px] lg:pr-0 lg:pl-0'>
      <div className='text-white grid grid-cols-3 items-center pr-[120px] mt-8 gap-6 justify-items-center px-[90px]  md:px-0  ' >
      
     
      <FiFacebook  className=' p-3 rounded-full bg-slate-600 text-5xl hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer '/>
     
      
        
        <FiInstagram className=' hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer p-3 rounded-full bg-slate-600 text-5xl' />
       
      
      <AiOutlineLinkedin className=' hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer p-3 rounded-full bg-slate-600 text-5xl' />
     
       
        <FiTwitter className='  hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer p-3 rounded-full bg-slate-600 text-5xl' />
       
       
       <SiTiktok className=' hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer p-3 rounded-full bg-slate-600 text-5xl' />
      
     
     <AiOutlineYoutube className='hover:bg-yellow-600 ease-in duration-[400ms] cursor-pointer  p-3 rounded-full bg-slate-600 text-5xl' />
    
    </div>
    </div>
  )
}

export default Icon