import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri"
import Cloud from "../../assets/cloud.png"
import IconBar from "./IconBar"
import { Transition } from "@headlessui/react"

const HumbergerX = () => {
    const [enabled,setEnabled] = useState(false)
    const [enabled2,setEnabled2] = useState(false)
    const [enabled3,setEnabled3] = useState(false)
    const [enabled4,setEnabled4] = useState(false)

  return (
    <div className=' '>
        <div className='bg-[#f5faff] lg:bg-[#c52544] w-full'>
         <div className='flex items-center justify-between pr-5 pb-1'>
         <h3 className='font-bold text-lg text-slate-600 pl-5 '>Hosting</h3>
         <button className='cursor-pointer pt-5' onClick={()=> setEnabled(!enabled)}>
          {enabled ?<RiArrowDropUpLine className='text-slate-600 text-3xl'  /> : <RiArrowDropDownLine className='text-slate-600 text-3xl' />
          }</button>
         </div>
         <Transition
         show={enabled}
         enter="transition-opacity duration-500"
         enterFrom="opacity-0"
         enterTo="opacity-100"
         leave="transition-opacity duration-150"
         leaveFrom="opacity-100"
         leaveTo="opacity-0"
         className={` bg-white mx-5 rounded-xl  ${!enabled && "hidden"}`}>
         
         <div className={`pl-4 pr-3 text-slate-600 pt-7  `}>
          <div className='  '>
          <div className='flex cursor-pointer items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E]   font-medium'>Unlimited Hosting</h1>
          <p className=' text-[#546071] text-sm pr-[70px]'>
            Paket hosting terbaik & terlengkap
          </p>
            </div>
          </div>
          <div/>
          
          <div className='mt-3.5 '>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E]  font-medium'>Cloud Hosting</h1>
          <p className='mt-1 text-[#546071] text-sm pr-[70px]'>
            Performa hebat & stabil untuk traffic tinggi
          </p>
            </div>
            </div>
          </div>
          <div className='mt-3.5  '>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E]  font-medium'>WordPress Hosting</h1>
          <p className='mt-1 text-[#546071] text-sm pr-[70px]'>
            Optimal untuk website WordPress
          </p>
            </div>
            </div>
          </div>
          <div className='mt-3.5 '>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E]  font-medium'>Simple WordPress</h1>
          <p className='mt-1 text-[#546071] text-sm pr-[70px]'>
            Kelola WordPress simple & praktis
          </p>
            </div>
            </div>
          </div>
          <div className='mt-3.5 '>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E]  font-medium'>Email Hosting</h1>
          <p className='mt-1 text-[#546071] text-sm pr-[70px]'>
            Solusi kirim email profesional
          </p>
            </div>
            </div>
          </div>
          <div className='mt-3.5 pb-8 '>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E] font-medium'>Transfer Hosting</h1>
          <p className='mt-1 text-[#546071] text-sm pr-[70px]'>
            Pindah hosting ke Niagahoster
          </p>
            </div>
            </div>
          </div>
          </div>
          </div>
         </Transition>
          </div>

          {/* VPS */}
        <div className='bg-[#f5faff] lg:bg-[#c52544] w-full'>
         <div className='flex items-center justify-between'>
         <h3 className='font-bold text-lg text-slate-600 pl-5 pb-2  pt-3'>VPS</h3>
         <button className='cursor-pointer pr-5 pt-2 ' onClick={()=> setEnabled2(!enabled2)}>
          {enabled2 ?<RiArrowDropUpLine className='text-slate-600 text-3xl '  /> : <RiArrowDropDownLine className='text-slate-600 text-3xl ' />
          }</button>
         </div>
          <Transition
          show={enabled2}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={` bg-white mx-5 rounded-xl  ${!enabled2 && "hidden"}`} >
          
         <div className={`pl-5 pr-3 text-slate-600 pt-1 mt-2 `}>
          <div className='mt-8 '>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="50px" height="50px"  />
            </div>
            <div>
            <h1 className='text-black text-lg  font-medium'>Cloud VPS KVM</h1>
          <p className='mt-1 text-slate-500 pr-[70px]'>
            Performa Stabil & Virtualisasi Kernel
          </p>
            </div>
          </div>
          <div className='mt-3.5 '>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E] font-medium'>Cloud VPS Hosting</h1>
          <p className='mt-1 text-[#546071] text-sm pr-[70px]'>
            Layanan VPS hemat
          </p>
            </div>
            </div>
          </div>
          <div className='mt-3.5  '>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E] font-medium'>CyberPanel VPS Hosting</h1>
          <p className='mt-1 text-[#546071] text-sm pr-[70px]'>
            Panel Praktis & Teknologi LiteSpeed
          </p>
            </div>
            </div>
          </div>
          <div className='mt-3.5 pb-8'>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E]  font-medium'>VPS cPanel</h1>
          <p className='mt-1 text-[#546071] text-sm pr-[70px]'>
            Teknologi Server & cPanel Terbaik
          </p>
            </div>
            </div>
          </div>
          </div>
          </div>
          </Transition>
          </div>

          {/* Domain */}
        <div className='bg-[#f5faff] lg:bg-[#c52544] w-full '>
         <div className='flex items-center justify-between'>
         <h3 className='font-bold text-lg text-slate-600 pl-5  pt-5 pb-2'>Domain</h3>
         <button className='cursor-pointer pr-5 pt-5'  onClick={()=> setEnabled3(!enabled3)}>
          {enabled3 ?<RiArrowDropUpLine className='text-slate-600 text-3xl '  /> : <RiArrowDropDownLine className='text-slate-600 text-3xl ' />
          }</button>
         </div>
          <Transition
          show={enabled3}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={` bg-white mx-5 rounded-xl ${!enabled3 && "hidden"}`}>
          
         <div className={`pl-5 pr-3 text-slate-600 pt-1 mt-3 `}>
          <div className='mt-8 cursor-pointer '>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E] font-medium'>Cari Domain</h1>
          <p className=' text-[#546071] text-sm pr-[70px]'>
            Temukan domain impian Anda di sini
          </p>
            </div>
          </div>
          <div className='mt-3.5 cursor-pointer '>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E]  font-medium'>Domain ID</h1>
          <p className=' text-[#546071] text-sm pr-[70px]'>
            Pendaftaran nama domain Indonesia
          </p>
            </div>
            </div>
          </div>
          <div className='mt-3.5  cursor-pointer'>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E] font-medium'>Check WHOIS</h1>
          <p className='mt-1 text-[#546071] text-sm pr-[70px]'>
            Lihat info WHOIS website Anda
          </p>
            </div>
            </div>
          </div>
          <div className='mt-3.5 pb-8 cursor-pointer'>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E] font-medium'>Transfer Domain</h1>
          <p className='mt-1 text-[#546071] text-sm pr-[70px]'>
            Pindah domain ke Niagahoster
          </p>
            </div>
            </div>
          </div>
          </div>
          </div>
          </Transition>
          </div>


          {/* Website */}
        <div className='bg-[#f5faff] w-full lg:bg-[#c52544]  '>
         <div className='flex items-center justify-between '>
         <h3 className='font-bold text-lg text-slate-600 pl-5  pt-6 pb-2`'>Website</h3>
         <button className='cursor-pointer pt-6 pr-5'  onClick={()=> setEnabled4(!enabled4)}>
          {enabled4 ?<RiArrowDropUpLine className='text-slate-600 text-3xl '  /> : <RiArrowDropDownLine className='text-slate-600 text-3xl ' />
          }</button>
         </div>
          <Transition
          show={enabled4}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={` bg-white mx-5 rounded-xl ${!enabled4 && "hidden"}`}>
          
         <div className={`pl-5 pr-3 text-slate-600 mt-4 pt-1 `}>
          <div className='mt-8 '>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E] font-medium'>Website Instan</h1>
          <p className=' text-[#546071] text-sm pr-[70px]'>
            Website kilat siap online
          </p>
            </div>
          </div>
          <div className='mt-3.5 pb-8'>
          <div className='flex items-center gap-4'>
            <div>
                <Image src={Cloud} width="45px" height="45px"  />
            </div>
            <div>
            <h1 className='text-[#29384E] font-medium'>Jasa Pembuatan Website</h1>
          <p className=' text-[#546071] text-sm pr-[70px]'>
            Website idaman sesuai kebutuhan
          </p>
            </div>
            </div>
          </div>
          
          </div>
          </div>
          </Transition>
          </div>
          <div className='bg-[#f5faff] lg:bg-[#c52544] pb-5'>
          <Link href="">
          <h3 className='font-bold text-lg text-slate-600 pl-5  pt-5 cursor-pointer '>Promo</h3>
          </Link>
          <IconBar/>
          </div>
         
    </div>
  )
}

export default HumbergerX