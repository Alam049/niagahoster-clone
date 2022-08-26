import React from 'react'

const Layanan = () => {
  return (
    <div className='md:pt-[70px] lg:pt-[130px]'>
        <h1 className='text-lg text-slate-600 pt-[80px] font-medium text-center'>Layanan Web Hosting Niagahoster</h1>
        
        <div className='cs7:px-[475px] cs6:px-[415px] cs5:px-[265px] cs4:px-[115px] cs:px-10 cs3:px-6'>
        <div className=' mt-[50px] cs:grid cs:grid-cols-6 cs:place-content-center cs2:grid-cols-10   lg:bg-[#f5faff] cs:gap-4 cs3:flex  lg:rounded-full cs2:mx-8 sm:pt-2 cs3:pb-2 '>
        <div className='px-[50px] cs:px-0 cs:col-span-3 cs1:col-span-2 cs2:col-span-2  '>
            <button className='bg-[#ff9800] text-white py-4 rounded-full font-semibold shadow-md w-full shadow-yellow-100 cs3:px-4 cs3:py-3 lg: cursor-pointer   '>Promo Terbaik</button>
        </div>
       <div className='px-[50px] cs:px-0 cs:col-span-3 cs1:col-span-2 cs2:col-span-2  '>
            <button className='text-slate-600 font-medium bg-[#f6faff] mt-5 cs:mt-0 py-4 rounded-full hover:bg-slate-200 w-full cursor-pointer     cs3:px-4 cs3:py-3  '>Unlimited Hosting</button>
       </div>
       <div className='px-[50px] cs:px-0  cs:col-span-2 cs1:col-span-2 cs2:col-span-2  '>
            <button className='text-slate-600 font-medium bg-[#f6faff] mt-5 cs:mt-0 py-4 rounded-full hover:bg-slate-200 w-full cursor-pointer cs3:px-4 cs3:py-3 '>Cloud Hosting</button>
       </div>
       <div className='px-[50px] cs:px-0 cs:col-span-2 cs1:col-span-2 cs2:col-span-2  '>
            <button className='text-slate-600 font-medium bg-[#f6faff] mt-5 cs:mt-0 py-4 rounded-full hover:bg-slate-200 cs:px-5 w-full cursor-pointer cs3:px-4 cs3:py-3
            '>VPS KVM <span className='bg-red-500 text-white rounded-sm px-1 py-[0.5px] text-sm '>Baru</span></button>
       </div>
       <div className='px-[50px] cs:px-0 md1:px-0 cs:col-span-2 cs2:col-span-2  '>
            <button className='text-slate-600 font-medium bg-[#f6faff]  mt-5  cs:mt-0 py-4 rounded-full hover:bg-slate-200 w-full cursor-pointer cs3:px-4 cs3:py-3'>Domain</button>
       </div>
       <div className='px-[50px] cs:px-0 cs:col-span-6 cs1:col-span-2 cs2:col-span-10  '>
            <button className='text-slate-600 font-medium bg-[#f6faff] mt-5 cs:mt-0  py-4 rounded-full hover:bg-slate-200 w-full cs3:px-3 cs3:py-3 cursor-pointer'>Website Instan</button>
       </div>
        
        
        </div>
        </div>
       
    </div>
  )
}

export default Layanan