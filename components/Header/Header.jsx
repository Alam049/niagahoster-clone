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
import HumbergerXRevisi from './HumbergerXRevisi'


const Header = () => {
    const [enabled,setEnabled] = useState(false)

    const setTimePromo = {hours: 8, minutes: 39, seconds: 40}

  return (
    <div className=''>
        
   <div className='bg-[#c52544] '>
   
  
   {enabled ?<div className='bg-[#f5faff] xl:bg-[#c52544] white lg:pt-5 xl:pt-4'>

<div className='sm:flex  md:pt-3  sm:justify-between md:pr-5 pt-2 sm:pr-5 sm:pb-5 lg:pb-0 xl:pt-0' >
 <div className=' md:pt-4 pl-4 md:pl-3 lg:pl-[170px] xl:flex xl:pl-10 xl:gap-[120px] xl:pb-[60px]'>
     <div className=''>
         <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-blue-1659527664.svg" alt="mainlogo" className="hidden md:block xl:hidden"
          />
         <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-blue-small-1659527703.svg" alt="mainlogo" className=" md:hidden"
          />
          <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-1659527365.svg" alt="mainlogo" className="hidden xl:block "
          />
     </div>
     <div className='hidden md:hidden lg:hidden xl:block '>
        <NavbarLG/>
     </div>
 </div>
 <div>
 <div className='flex items-center gap-3 pl-4 lg:pr-[150px] xl:pr-5  md:pt-1'>
 <MdOutlineShoppingCart  className='text-2xl text-blue-500 xl:text-white  cursor-pointer' />
 <button className='text-blue-500 font-bold rounded-3xl border py-[7px] pb-[9px] xl:border-white xl:text-white px-7 hover:bg-[#ff9800] text-sm ease-in duration-[400ms] md:py-2 md:px-8 border-blue-500 sm:py-[9px] sm:px-8'>
     Login
 </button>
 
     <div className=' xl:hidden' onClick={()=> setEnabled(!enabled)} >
     {enabled ? 
     <BsXLg className='cursor-pointer rounded-full border p-3 text-blue-500 border-blue-500 text-5xl ' />  : 
     <AiOutlineMenu className='cursor-pointer rounded-full border p-4 text-blue-500 border-blue-500 text-5xl ' /> }
     
     </div>
 
 </div>
 

 </div>
 
 </div>
</div>   : <div className=' red'>

<div className='sm:flex md:pt-5 lg:px-[150px] sm:justify-between sm:pr-5 pt-2  xl:px-10 xl:pt-3 ' >
 <div className=' pl-4 md:pl-3 md:pt-4 lg:flex lg:gap-[100px]  '>
     <div className=''>
         <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-1659527365.svg" alt="mainlogo" className="hidden md:block"
          />
         <img src=" https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-small-1659527392.svg" alt="mainlogo" className="md:hidden"
          />
          
         
     </div>
     <div className='hidden md:hidden lg:hidden xl:block '>
        <NavbarLG/>
     </div>
 </div>
 <div>
 <div className='flex items-center gap-4 pl-4 lg:pr-5 md:pt-0 xl:pr-2 xl:pl-0 xl:pt-2'>
 <MdOutlineShoppingCart  className='text-[22px] text-white cursor-pointer mt-2 lg:mt-4 xl:mt-2' />
 <button className='text-white font-bold rounded-3xl border py-[7px] pb-[9px] px-7 hover:bg-[#ff9800] ease-in text-sm duration-[400ms] md:py-2 md:px-8 sm:py-[9px] sm:px-8 '>
     Login
 </button>
 
     <div className='xl:hidden sm:mt-1' onClick={()=> setEnabled(!enabled)} >
     {enabled ? 
     <BsXLg className='cursor-pointer rounded-full border p-4 text-white text-5xl ' />  : 
     <AiOutlineMenu className='cursor-pointer rounded-full border p-2 text-white text-5xl ' /> }
     
     </div>
 
 </div>
 

 </div>
 
 </div>
 
 </div>}
  
   

   


    {/* <Transition
    show={enabled}
    enter="transition-opacity duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    className={` xl:hidden  ${!enabled && "hidden"}`}>
        <HumbergerX/>
    </Transition> */}


    <Transition
    show={enabled}
    enter="transition ease-in-out duration-500 transform"
    enterFrom="-translate-y-full"
    enterTo="translate-y-50"
    leave="transition ease-in-out duration-500 transform"
    leaveFrom="translate-y-0"
    leaveTo="-translate-y-full opacity-0 duration-500 transform"
    className={` xl:hidden`}>
        {/* <HumbergerX/> */}
        <HumbergerXRevisi/>
    </Transition>



    <div className='lg:flex lg:items-center xl:pt-[65px] 2xl:px-[150px] 3xl:px-[280px] 4xl:px-[380px] lg:pt-[120px]'>
    <div className='lg:pl-1 xl:pl-0'>
    <div className='px-4 pt-7 md:pl-10 md:pr-[50px] xl:pl-8'>
        <p className='text-white text-2xl font-semibold md:text-2xl md:pt-5 lg:text-3xl lg:pt-0 lg:mt-[-70px] font-hoster pr-6 sm:pt-8 xl:text-4xl sm:text-3xl xl:leading-[45px] 2xl:pr-10 3xl:pr-[60px]'>Parade Diskon Hosting Murah Hingga 81%</p>

        <p className='text-white text-opacity-[0.8] pt-5 text-md pr-5 '>Kami berikan penawaran terbaik unlimited web hosting. Fitur terlengkap, harga terjangkau, dan dukungan teknis 24/7 telah tersedia untuk Anda. Promo spesial segera berakhir. Order sekarang!</p>
    </div>
    <TimerPromo setTimePromo={setTimePromo} />
        {/* btn */}
        <div className='md:pl-10 ml-4 md:ml-0 lg:ml-0 pt-10 xl:pl-8'>
        <button className='bg-[#ff9800] text-white rounded-3xl py-4 px-9 font-bold text-sm mb-[60px] hover:bg-[#cc7a00] ease-in duration-[400ms] shadow-sm  md:px-9'>
            Lihat Penawaran
        </button>
        </div>
    </div>
        {/* image */}
        <div className=' '>
        <div className='pb-8 px-5  lg:pt-0 lg:mt-[-60px] lg:px-0 lg:mr-[70px] xl:mr-6 '>
        <div className=''>
        <img
        src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/bb-uploads/configs/marketing-tool-hero-parade-diskon-kemerdekaan-niagahoster-1-1659666416.webp"
        alt='promotionimage'
        className=' md:mr-auto md:ml-auto md:w-[703px] md:h-[690px] md:object-contain lg:mr-0 lg:ml-0 lg:w-[1300px] lg:h-[500px]   ' 
        />
        </div>
        </div>
        </div>
    </div>
    
   </div>
   
    {/* <PromoDomain/> */}
    
    </div>
  )
}

export default Header