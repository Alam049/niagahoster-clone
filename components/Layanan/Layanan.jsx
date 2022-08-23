import React from 'react'

const Layanan = () => {
  return (
    <div className='md:pt-[70px] lg:pt-[130px]'>
        <h1 className='text-lg text-slate-600 pt-[80px] font-medium text-center'>Layanan Web Hosting Niagahoster</h1>
        
        <div className=' mt-[50px] cs:flex cs:flex-wrap cs:justify-center md:mt-[60px] md:gap-1 md:bg-[#f5faff] cs:gap-4  md:rounded-full cs2:mx-8 '>
        <div className='px-[50px] cs:px-0 '>
            <button className='bg-[#ff9800] text-white py-4 rounded-full font-semibold shadow-md w-full shadow-yellow-100 cursor-pointer cs:py-3 cs:px-[60px] cs1:px-5 '>Promo Terbaik</button>
        </div>
       <div className='px-[50px] cs:px-0'>
            <button className='text-slate-600 font-medium bg-[#f6faff] mt-5 py-4 rounded-full hover:bg-slate-200 w-full cursor-pointer md:py-3 lg:py-[13px] md:px-5 lg:px-5 cs:mt-0 cs:px-[60px] cs1:px-5 '>Unlimited Hosting</button>
       </div>
       <div className='px-[50px] cs:px-0'>
            <button className='text-slate-600 font-medium bg-[#f6faff] mt-5 cs:mt-0 py-4 rounded-full hover:bg-slate-200 w-full cursor-pointer md:py-3 lg:py-[13px] cs1:px-5 lg:px-5 cs:px-5 cs:py-3 '>Cloud Hosting</button>
       </div>
       <div className='px-[50px] cs:px-0'>
            <button className='text-slate-600 font-medium bg-[#f6faff] mt-5 cs:mt-0 py-4 rounded-full hover:bg-slate-200 cs:px-5 w-full cursor-pointer cs1:px-5 md:py-3 lg:py-[13px] lg:px-5 
            '>VPS KVM <span className='bg-red-500 text-white rounded-sm px-1 py-[0.5px] text-sm '>Baru</span></button>
       </div>
       <div className='px-[50px] cs1:px-0 md1:px-0'>
            <button className='text-slate-600 font-medium bg-[#f6faff] cs1:px-[100px] mt-5  cs:mt-0 py-4 rounded-full hover:bg-slate-200 md1:px-5 w-full cursor-pointer md:py-3 lg:py-[13px] lg:px-5 cs2:px-5'>Domain</button>
       </div>
       <div className='px-[50px] cs1:px-0 '>
            <button className='text-slate-600 font-medium bg-[#f6faff] mt-5 cs:mt-0 md1:mt-0  cs:px-[180px] cs1:px-[100px]  py-4 rounded-full hover:bg-slate-200 w-full cursor-pointer   cs2:px-5'>Website Instan</button>
       </div>
        
        
        </div>
       
    </div>
  )
}

export default Layanan