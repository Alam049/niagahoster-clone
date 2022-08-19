import React from 'react'
import { FiFacebook,FiInstagram,FiTwitter } from "react-icons/fi"
import { AiOutlineLinkedin } from "react-icons/ai"
import Link from 'next/link'



const IconBar = () => {
  return (
    <div className='lg:hidden'>
        <h5 className='text-center text-xs text-slate-600 mt-10 '>Copyright ©2022 Niagahoster</h5>
        <div className='flex items-center justify-center gap-3 mt-10 pb-5'>
            
                <FiFacebook className='bg-[#22273c] cursor-pointer text-white text-5xl p-3 rounded-full'/>
           
          
                <FiInstagram className='bg-[#22273c] cursor-pointer text-white text-5xl p-3 rounded-full'/>
           
            
                <AiOutlineLinkedin className='bg-[#22273c] text-white text-5xl p-3 rounded-full cursor-pointer '/>
           
            
                <FiTwitter className='bg-[#22273c] text-white text-5xl p-3 rounded-full cursor-pointer '/>
            
        </div>
    </div>
  )
}

export default IconBar