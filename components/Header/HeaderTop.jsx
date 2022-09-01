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
import IMG1 from "../../assets/cloud.png"
import IMG2 from "../../assets/signal.png"


const HeaderTop = () => {
    const [enabled,setEnabled] = useState(false)

    // const [isImage, setIsImage] = useState({IMG2})

   


  return (
    <div>
          <div className={`${!enabled ? 'bg-[#c52544] duration-700 delay-[700ms] ' : 'bg-[#f5faff] duration-100'} transition  ease-in-out   xl:bg-[#c52544] white lg:pt-5 xl:pt-4`}
    
    >
        
    <div className='sm:flex  md:pt-3  sm:justify-between md:pr-5 pt-2 sm:pr-5 sm:pb-5 lg:pb-0 xl:pt-0' >
        <div className=' md:pt-4 pl-4 md:pl-3 lg:pl-[170px] xl:flex xl:pl-10 xl:gap-[120px] xl:pb-[60px]'>
    <div className=''>
     <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-blue-1659527664.svg" alt="mainlogo" className="hidden md:block xl:hidden"
      />
{/*     
         {!enabled ? <Image  src={IMG1} width={50} height={50}/> :  <Image src={IMG2} 
         width={50} height={50}
      />} */}
      {/* {setTimeout(function(){
        return !enabled ? (<img  src=" https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-small-1659527392.svg" alt="mainlogo" className="md:hidden transition duration-75  ease-in-out "/>) :  (<img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-blue-small-1659527703.svg" alt="mainlogo" className=" md:hidden transition duration-700 delay-1000 ease-in-out"
        />)
      }, 700)} */}

{!enabled ? <img  src=" https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-small-1659527392.svg" alt="mainlogo" className="md:hidden transition duration-75  ease-in-out "/> :  <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-blue-small-1659527703.svg" alt="mainlogo" className=" md:hidden transition duration-700 delay-1000 ease-in-out"
        />}
  
    
    
      <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-1659527365.svg" alt="mainlogo" className="hidden xl:block "
      />
 </div>
 <div className='hidden md:hidden lg:hidden xl:block '>
    <NavbarLG/>
 </div>
</div>
 <div>
             <div className='flex items-center gap-4 pl-4 lg:pr-5 md:pt-0 xl:pr-2 xl:pl-0 xl:pt-2'>
             <MdOutlineShoppingCart  className={` ${enabled ? 'text-blue-500' : 'text-white delay-1000'} text-[22px] cursor-pointer mt-2 lg:mt-4 xl:mt-2`} />
             <button className={`${enabled ? 'text-blue-500 border-blue-500' : 'text-white delay-1000'}  font-bold rounded-3xl border py-[7px] pb-[9px] px-7 hover:bg-[#ff9800] ease-in text-sm  md:py-2 md:px-8 sm:py-[9px] sm:px-8 `}>
                 Login
             </button>
             
                 <div className='xl:hidden sm:mt-1' onClick={()=>   
                   setEnabled(!enabled)
                  } >
                 {enabled ? 
                 <BsXLg className={` ${enabled ? 'text-blue-500 border-blue-500 delay-1000' : 'text-white '} cursor-pointer rounded-full border p-4  text-5xl `}/>  : 
                 <AiOutlineMenu className={` ${enabled ? 'text-blue-500 border-blue-500 ' : 'text-white '} cursor-pointer rounded-full border p-2  text-5xl `} /> }
                 
                 </div>
             
             </div>
             
            
             </div> 


             {/* <div>
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


            </div>  */}


            </div>

        </div> 
        <HumbergerXRevisi enabled={enabled}  />
    </div>
  )
}

export default HeaderTop