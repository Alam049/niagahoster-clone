import Image from 'next/image'
import React, { useState } from 'react'
import Simbol from "../../assets/simbol.png"
import VideoIMG from "../../assets/video.png"
import { BsFillPlayFill } from "react-icons/bs"
import Bagan from "./Bagan"
import Pelanggan from "./Pelanggan"
import Testimoni from "./Testimoni"
import IMG1 from "../../assets/img1.png"

const Description = () => {
  const [enabled,setEnabled] = useState('muhammad')


  return (
   <div>
     <div className='bg-[#f5faff]'>
        <div className='lg:flex lg:items-center lg:mt-[80px]'>
        <div className='lg:pl-8'>
        <div className='mt-[150px] md:mt-[190px] md:pt-[55px] lg:hidden '>
        <Image src={Simbol}  width="100px" height="100px" className='object-contain' />
        </div>
        <div className='relative'>
        <div className=' hidden md:hidden lg:block absolute top-[-50px] left-3'>
        <Image src={IMG1}  width="400px" height="400px" className='object-contain' />
        </div>
        </div>
        <div className='lg:pr-[100px] lg:mt-[200px]'>
        <h1 className='pl-5 pr-[60px] text-2xl font-md text-[#717B8A] md:text-3xl md:leading-[48px] md:mt-3  '>“Krafthaus menggunakan website untuk memberikan informasi kepada talent-talent muda khususnya di Yogyakarta untuk dapat bergabung bersama krafthaus”</h1>
        </div>
        <button className='mt-10 mb-6 ml-5 font-semibold bg-[#ff9800] pl-[45px] pr-[50px] py-3 rounded-full text-white hover:bg-yellow-600 ease-in duration-[400ms] shadow-sm shadow-yellow-500 flex items-center gap-2 md:mt-[60px] md:mb-0 md:py-[10px]'>
            LIHAT VIDEO <span className='text-3xl'><BsFillPlayFill/></span>
        </button>
        </div>
        <div className='lg:mt-[180px]'>
        {(enabled === 'muhammad' && <div className=''>
            <div className='text-center'>
            <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/testimony/krafthaus.webp" className="object-contain  rounded-2xl block mr-auto ml-auto lg:w-[1350px] lg:pr-[90px] "  />
            </div>
            <h1 className='text-center text-xl font-semibold md:mt-8 md:px-10 lg:mr-[70px] text-[#29384E]'>Muhammad Arief Widyananda - Managing Director PT Krafthaus Indonesia</h1>
        </div>) || (enabled === 'fabian' &&  <div className=''>
            <div className='text-center'>
            <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/testimony/sate-ratu.webp" className="object-contain  rounded-2xl block mr-auto ml-auto lg:w-[1350px] lg:pr-[90px]"  />
            </div>
            <h1 className='text-center text-xl font-semibold md:mt-8 md:px-10 lg:mr-[80px] text-[#29384E]'>Fabian Budi Seputro - Owner Sate Ratu</h1>
        </div>) || (enabled === "habib" && <div className=''>
            <div className='text-center'>
            <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/testimony/uwitan.webp" className="object-contain  rounded-2xl block mr-auto ml-auto lg:w-[1350px] lg:pr-[90px]"  />
            </div>
            <h1 className='text-center text-xl font-semibold md:mt-8 md:px-10 lg:mr-[80px]  text-[#29384E]'>Habib Hidayat Tullah - CTO Uwitan</h1>
        </div> )}
        </div>
        
        </div>
       
        
      <div className='mt-[150px] ml-5 bg-[#f5faff] md:grid md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center'>
        <div onClick={() => setEnabled('muhammad')} className='cursor-pointer' >
        <h1 className='text-2xl font-semibold' >Muhammad Arief Widyananda</h1>
        <a href='' className='text-slate-600' >Managing Director PT Krafthaus Indonesia</a>
        <div className={`pt-5 ${enabled !== "fabian" && "hidden"}`} ></div>
        <div className={`border-10 bg-slate-700 w-[335px] h-[2px] mt-4 md:mt-6 ${enabled !== "muhammad" && "hidden"}`}></div>
        </div>
        
        <div onClick={() => setEnabled('habib')}  className='cursor-pointer' >
        <h1 className='text-2xl font-semibold text-[#535961] mt-8 md:mt-0  hover:text-slate-700 ease-in duration-100'>Habib Hidayat Tullah</h1>
        <a href='' className='text-[#535961]' >CTO Uwitan</a>
        <div className={`border-10 bg-slate-700 w-[335px] h-[2px] mt-4 md:mt-6 md:w-[225px] lg:w-[270px] ${enabled !== "habib" && "hidden"}`}></div>
        </div>
        <div onClick={() => setEnabled('fabian')} className='cursor-pointer' >
        <h1 className='text-2xl font-semibold text-[#535961]  mt-10 md:mt-0 hover:text-slate-700 ease-in duration-100 '>Fabian Budi Seputro</h1>
        <a href="" className='text-[#535961]' >Owner Sate Ratu</a>
        <div className={`border-10 bg-slate-700 w-[335px] h-[2px] mt-4 md:mt-6 md:w-[525px] lg:w-[290px] ${enabled !== "fabian" && "hidden"}`}></div>
        </div>
    </div>
        
        
    </div>
    <Pelanggan/>
        <Testimoni/>
   </div>
  )
}

export default Description