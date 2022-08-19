import React from 'react'

const Layanan = () => {
  return (
    <div className='md:pt-[70px] lg:pt-[130px]'>
        <h1 className='text-lg text-slate-600 font-medium text-center'>Layanan Web Hosting Niagahoster</h1>
        
        <div className='grid grid-cols-1 gap-[45px] mt-[50px]  justify-items-center md:grid-cols-2 md:items-center md:mt-[60px] md:gap-1 md:bg-[#f5faff]  md:mx-[210px]  md:py-6 md:rounded-full  lg:mx-[430px]'>
        <div>
            <a className='bg-[#ff9800] text-white py-4 px-9 rounded-full font-semibold shadow-md shadow-yellow-100 cursor-pointer md:py-3 lg:py-[13px] lg:px-8'>Promo Terbaik</a>
        </div>
       <div >
            <a className='text-slate-600 font-medium bg-[#f6faff] px-7 py-4 rounded-full hover:bg-slate-200  cursor-pointer md:py-3 lg:py-[13px] lg:px-5'>Unlimited Hosting</a>
       </div>
        
        
        </div>
       
    </div>
  )
}

export default Layanan