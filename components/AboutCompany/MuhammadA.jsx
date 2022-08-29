import Image from 'next/image'
import React, { useState } from 'react'
import Simbol from "../../assets/simbol.png"
import { BsFillPlayFill } from "react-icons/bs"


const Muhammad = () => {
  


  return (
   <div>
     <div className='bg-[#f5faff]'>
        <div className='lg:flex lg:items-center lg:mt-[80px] xl:pr-10 2xl:px-[150px] 3xl:px-[250px] 4xl:px-[350px] '>
        <div className='lg:pl-5 xl:pl-2 '>
        <div className='mt-[150px] md:mt-[190px] md:pt-[55px]  '>
        <Image src={Simbol}  width="100px" height="100px" className='object-contain' />
        </div>
        <div className=' '>
        <h1 className='pl-5 pr-[60px] text-2xl font-md text-[#717B8A] md:text-3xl md:leading-[48px] md:mt-3 3xl:pr-[180px] '>“Krafthaus menggunakan website untuk memberikan informasi kepada talent-talent muda khususnya di Yogyakarta untuk dapat bergabung bersama krafthaus”</h1>
        </div>
        <button className='mt-10 mb-6 ml-5 font-semibold bg-[#ff9800] pl-[45px] pr-[50px] py-3 rounded-full text-white hover:bg-yellow-600 ease-in duration-[400ms] shadow-sm shadow-yellow-500 flex items-center gap-2 md:mt-[60px] md:mb-0 md:py-[10px]'>
            LIHAT VIDEO <span className='text-3xl'><BsFillPlayFill/></span>
        </button>
        </div>
        <div className='lg:mt-[320px] md:mt-[80px]  '>
        <div className=''>
            <div className='text-center px-5  '>
            <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/testimony/krafthaus.webp" className="object-contain  rounded-2xl block mr-auto ml-auto lg:w-[1500px] xl:w-[1200px] "  />
            </div>
            <h1 className='text-center text-xl px-[50px] mt-8 font-semibold md:mt-8 md:px-10 lg:px-[120px] lg:mt-0 xl:mt-5 xl:px-10 text-[#29384E] '>Muhammad Arief Widyananda - Managing Director PT Krafthaus Indonesia</h1>
        </div>
        </div>
        
        </div>
       
        
      
        
        
    </div>
   </div>
  )
}

export default Muhammad;