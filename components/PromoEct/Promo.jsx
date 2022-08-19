import Image from 'next/image'
import React from 'react'
import MainLogo from "../../assets/cloud.png"
import Iklan from "./Iklan"



const Promo = () => {
  return (
    <div>
    <div className='bg-[#0087ff] text-white mt-[70px] ml-8 mr-[140px] rounded-xl text-center pt-6 shadow-lg shadow-slate-400 md:mx-[260px] lg:hidden  '>
        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-more-promo-1654237782.webp" className='mr-auto ml-auto w-[75px] h-[75px]  object-contain'/>
        <h1 className='text-xl font-bold mt-10 '>Lihat Semua Promo</h1>
        <p className='text-sm mt-4 md:px-8'>Temukan berbagai promo menarik dari Niagahoster di sini!</p>

        <button className='mt-[150px] mb-10 font-semibold bg-[#ff9800] px-[50px] py-3 rounded-full hover:bg-yellow-600 ease-in duration-[400ms] shadow-sm shadow-yellow-500 md:px-[70px]'>
            Lihat Promo Lainnya
        </button>
       
    </div>
    <Iklan/>
    </div>
    
  )
}

export default Promo