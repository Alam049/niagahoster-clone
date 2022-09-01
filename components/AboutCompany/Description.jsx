import Image from 'next/image'
import React, { useState } from 'react'
import Simbol from "../../assets/simbol.png"
import VideoIMG from "../../assets/video.png"
import { BsFillPlayFill } from "react-icons/bs"

import Pelanggan from "./Pelanggan"

import TestimoniR2 from "./TestimoniR2"

const Description = () => {
  const [enabled,setEnabled] = useState('muhammad')


  return (
   <div>
     <div className='bg-[#f5faff]'>
        <div className='lg:flex lg:items-center lg:mt-[80px] xl:pr-10 2xl:px-[150px] 3xl:px-[250px] 4xl:px-[350px] '>
        <div className='lg:pl-5 xl:pl-2 '>
        <div className='mt-[150px] md:mt-[190px] md:pt-[55px]  '>
        <Image src={Simbol}  width="100px" height="100px" className='object-contain' />
        </div>
        {(enabled === 'muhammad' && <div className=' '>
        <h1 className='pl-5 pr-[60px] text-2xl font-md text-[#717B8A] md:text-3xl md:leading-[48px] md:mt-3 3xl:pr-[180px] '>“Krafthaus menggunakan website untuk memberikan informasi kepada talent-talent muda khususnya di Yogyakarta untuk dapat bergabung bersama krafthaus”</h1>
        </div>) || (enabled === 'habib' && <div className=' '>
        <h1 className='pl-5 pr-[60px] text-2xl font-md text-[#717B8A] md:text-3xl md:leading-[48px] md:mt-3 3xl:pr-[180px] '>“Dengan website kita bisa lebih banyak menjangkau customer, selain itu juga trust atau kepercayaan dari customer juga akan meningkat”</h1>
        </div> ) || (enabled === "fabian" &&  <div className=' '>
        <h1 className='pl-5 pr-[60px] text-2xl font-md text-[#717B8A] md:text-3xl md:leading-[48px] md:mt-3 3xl:pr-[180px] '>“Solusi yang diberikan tim support Niagahoster sangat mudah dimengerti buat saya yang tidak paham teknis”</h1>
        </div>)}
        
       
        <button className='mt-10 mb-6 ml-5 font-semibold bg-[#ff9800] pl-[45px] pr-[50px] py-3 rounded-full text-white hover:bg-yellow-600 ease-in duration-[400ms] shadow-sm shadow-yellow-500 flex items-center gap-2 md:mt-[60px] md:mb-0 md:py-[10px]'>
            LIHAT VIDEO <span className='text-3xl'><BsFillPlayFill/></span>
        </button>
        </div>
        <div className='lg:mt-[320px] md:mt-[80px]  '>
        {(enabled === 'muhammad' && <div className=''>
            <div className='text-center px-5  '>
            <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/testimony/krafthaus.webp" className="object-contain  rounded-2xl block mr-auto ml-auto lg:w-[1500px] xl:w-[1200px] "  />
            </div>
            <h1 className='text-center text-xl px-[50px] mt-8 font-semibold md:mt-8 md:px-10 lg:px-[120px] lg:mt-0 xl:mt-5 xl:px-10 text-[#29384E] '>Muhammad Arief Widyananda - Managing Director PT Krafthaus Indonesia</h1>
        </div>) || (enabled === 'fabian' &&  <div className=''>
            <div className='text-center px-5'>
            <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/testimony/sate-ratu.webp" className="object-contain  rounded-2xl block mr-auto ml-auto lg:w-[1150px] "  />
            </div>
            <h1 className='text-center text-xl px-[50px] mt-8 font-semibold md:mt-8 md:px-10 lg:mr-[80px] text-[#29384E]'>Fabian Budi Seputro - Owner Sate Ratu</h1>
        </div>) || (enabled === "habib" && <div className=''>
            <div className='text-center px-5'>
            <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/testimony/uwitan.webp" className="object-contain  rounded-2xl block mr-auto ml-auto lg:w-[1350px] "  />
            </div>
            <h1 className='text-center text-xl px-[50px] mt-8 font-semibold md:mt-8 md:px-10 lg:mr-[80px]  text-[#29384E]'>Habib Hidayat Tullah - CTO Uwitan</h1>
        </div> )}
        </div>
        
        </div>
       
        
      <div className='mt-[150px] ml-5 bg-[#f5faff] md:grid md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center pb-[60px] md:pb-0  3xl:px-[200px] 4xl:px-[350px]'>
        <div onClick={() => setEnabled('muhammad')} className='cursor-pointer md:pb-10 lg:pb-0' >
        <h1 className='text-2xl font-semibold' >Muhammad Arief Widyananda</h1>
        <p href='' className='text-slate-600' >Managing Director PT Krafthaus Indonesia</p>
        <div className={`pt-5 ${enabled !== "fabian" && "hidden"}`} ></div>
        <div className={`border-10 bg-slate-700 w-[335px] h-[2px] mt-4 md:mt-6 ${enabled !== "muhammad" && "hidden"}`}></div>
        </div>
        
        <div onClick={() => setEnabled('habib')}  className='cursor-pointer' >
        <h1 className='text-2xl font-semibold text-[#535961] mt-8 md:mt-0  hover:text-slate-700 ease-in duration-100'>Habib Hidayat Tullah</h1>
        <p href='' className='text-[#535961]' >CTO Uwitan</p>
        <div className={`border-10 bg-slate-700 w-[335px] h-[2px] mt-4 md:mt-6 md:w-[225px] lg:w-[270px] ${enabled !== "habib" && "hidden"}`}></div>
        </div>
        <div onClick={() => setEnabled('fabian')} className='cursor-pointer' >
        <h1 className='text-2xl font-semibold text-[#535961]  mt-10 md:mt-0 hover:text-slate-700 ease-in duration-100 '>Fabian Budi Seputro</h1>
        <p href="" className='text-[#535961]' >Owner Sate Ratu</p>
        <div className={`border-10 bg-slate-700 w-[335px] h-[2px] mt-4 md:mt-6 md:w-[525px] lg:w-[290px] ${enabled !== "fabian" && "hidden"}`}></div>
        </div>
      </div>
        
        
    </div>
    <Pelanggan/>
        {/* <Testimoni/> */}
        {/* <TestimoniRevisi/> */}
        <TestimoniR2/>
   </div>
  )
}

export default Description