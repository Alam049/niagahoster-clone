import React, { useState } from 'react'
import Image from 'next/image'
import MainLogo from "../../assets/MainLogo.png"
import PromotionImage from "../../assets/promotionImage.jpg"
import { MdOutlineShoppingCart } from "react-icons/md"
import { AiOutlineMenu } from "react-icons/ai"
import { BsXLg } from "react-icons/bs"
import HumbergerX from "./HumbergerX"
import BannerIMG from "../../assets/banner.png"
import PromoDomain from "./PromoDomain"
import NavbarLG from "./NavbarLG"
import TimerPromo from "./TimerPromo"
import { Transition } from "@headlessui/react"


const Header = () => {
    const [enabled,setEnabled] = useState(false)

    const setTimePromo = {hours: 8, minutes: 39, seconds: 40}

  return (
    <div>
        
   <div className='bg-[#c52544]'>
   
    {enabled ?<div className='bg-[#f5faff] lg:bg-[#c52544] white'>

<div className='md:flex md:pt-3  md:justify-between md:pr-5 pt-2' >
 <div className=' md:pt-4  pl-5 md:pl-3'>
     <div className=''>
         <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-blue-1659527664.svg" alt="mainlogo" className=""
          />
     </div>
     <div className='hidden md:hidden lg:block'>
        <NavbarLG/>
     </div>
 </div>
 <div>
 <div className='flex items-center gap-3 pl-5 pt-1 md:pt-1'>
 <MdOutlineShoppingCart  className='text-2xl text-blue-500  cursor-pointer' />
 <button className='text-blue-500 font-semibold rounded-3xl border py-2 px-7 hover:bg-[#ff9800] ease-in duration-[400ms] md:py-2 md:px-8 border-blue-500'>
     Login
 </button>
 
     <div className=' lg:hidden' onClick={()=> setEnabled(!enabled)} >
     {enabled ? 
     <BsXLg className='cursor-pointer rounded-full border p-4 text-blue-500 border-blue-500 text-5xl ' />  : 
     <AiOutlineMenu className='cursor-pointer rounded-full border p-4 text-blue-500 border-blue-500 text-5xl ' /> }
     
     </div>
 
 </div>
 

 </div>
 
 </div>
</div>   : <div className=' red'>

<div className='md:flex md:pt-5  md:justify-between md:pr-5 pt-2' >
 <div className='  pl-5 md:pl-3 md:pt-4 lg:flex lg:gap-[100px]'>
     <div className='lg:pl-10'>
         <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-1659527365.svg" alt="mainlogo" className=""
          />
         
     </div>
     <div className='hidden md:hidden lg:block '>
        <NavbarLG/>
     </div>
 </div>
 <div>
 <div className='flex items-center gap-3 pl-5 pt-1 md:pt-0'>
 <MdOutlineShoppingCart  className='text-2xl text-white cursor-pointer' />
 <button className='text-white font-semibold rounded-3xl border py-2 px-7 hover:bg-[#ff9800] ease-in duration-[400ms] md:py-2 md:px-8'>
     Login
 </button>
 
     <div className='lg:hidden' onClick={()=> setEnabled(!enabled)} >
     {enabled ? 
     <BsXLg className='cursor-pointer rounded-full border p-4 text-white text-5xl ' />  : 
     <AiOutlineMenu className='cursor-pointer rounded-full border p-4 text-white text-5xl ' /> }
     
     </div>
 
 </div>
 

 </div>
 
 </div>
</div> }
   

   


    <Transition
    show={enabled}
    enter="transition-opacity duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    className={` lg:hidden ${!enabled && "hidden"}`}>
        <HumbergerX/>
    </Transition>



    <div className='lg:flex lg:items-center'>
    <div>
    <div className='px-5 pt-6 md:pl-[70px] md:pr-[50px]'>
        <p className='text-white text-3xl font-semibold md:text-2xl md:pt-5 lg:text-4xl lg:pr-[50px] lg:pt-[70px] '>Parade Diskon Hosting Murah Hingga 81%</p>

        <p className='text-slate-200 pt-7 text-md  '>Kami berikan penawaran terbaik unlimited web hosting. Fitur terlengkap, harga terjangkau, dan dukungan teknis 24/7 telah tersedia untuk Anda. Promo spesial segera berakhir. Order sekarang!</p>
    </div>
    <TimerPromo setTimePromo={setTimePromo} />
        {/* btn */}
        <div className='md:pl-[70px] ml-8 md:ml-0 lg:ml-0 pt-10'>
        <button className='bg-[#ff9800] text-white rounded-3xl py-4 px-8 font-bold text-sm mb-[100px] hover:bg-orange-500 ease-in duration-[400ms] shadow-sm shadow- md:px-9'>
            Lihat Penawaran
        </button>
        </div>
    </div>
        {/* image */}
        <div className='pb-8 px-5 pt-10 lg:pt-0 lg:px-0 lg:mr-[70px]'>
        <img
        src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/bb-uploads/configs/marketing-tool-hero-parade-diskon-kemerdekaan-niagahoster-1-1659666416.webp"
        alt='promotionimage'
        className=' md:mr-auto md:ml-auto md:w-[703px] md:h-[690px] md:object-contain lg:mr-0 lg:ml-0 lg:w-[1300px]'
        />
        </div>
    </div>
    
   </div>
   
    <PromoDomain/>
    
    </div>
  )
}

export default Header