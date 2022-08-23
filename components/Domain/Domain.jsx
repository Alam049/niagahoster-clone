import React from 'react'

const Domain = () => {
  return (
    <div className='bg-[#f6faff] pt-8  '>
        <h3 className='text-[#29384E] font-medium md:mt-10 text-lg md:text-center pl-5 '>Pilih Domain</h3>
        <h1 className='text-3xl font-semibold pt-5 md:text-center sm:text-[28px] pl-5  md:text-4xl md:px-[150px] md:mt-2 xl:text-[40px]
         '>Temukan Nama Domain Impian Anda</h1>
        <h4 className='text-slate-500 text-lg pt-6 md:text-center md:px-[190px] pl-5 lg:text-base sm:text-base'>Tersedia beragama nama domain untuk segala keperluan Anda.</h4>
        <div className='pt-[60px]  '>
           <div className='sm:flex sm:justify-center sm:gap-5 '>
           <div className='px-10 sm:px-0'>
            <input type="email" placeholder='Temukan nama domain Anda disini' className='placeholder:text-center pl-5 sm:w-[235px] rounded-full py-3  w-full border placeholder:text-sm placeholder:text-slate-500 md:w-[350px] md:px-[60px]  lg:placeholder:text-center lg:px-8 lg:w-[300px] xl:placeholder:text-start xl:w-[480px] '/>
            </div>
            <div className='px-10 sm:px-0 pt-3 sm:pt-0'>
            <button className='bg-[#ff9800] text-white font-medium py-3 rounded-full  drop-shadow-lg w-full sm:w-[160px]  hover:bg-yellow-500 ease-in duration-[400ms]'>
                Cari
            </button>
            </div>
           </div>
        </div>
        <div className='grid grid-cols-2 text-center mx-10 mt-8 md:grid-cols-4 gap-1 pb-[80px] lg:mx-[180px] xl:mx-[250px] 2xl:mx-[400px] 3xl:mx-[530px] 4xl:mx-[600px] '>
            <p className='font-medium text-slate-600 '><span className=' text-slate-600 lg:px-0 text-2xl md:px-5 font-semibold'>.com</span> Rp. 115.000</p>
            <p className='font-medium text-slate-600  '><span className='text-slate-600 lg:px-0 text-2xl md:px-5 font-semibold'>.co.id</span> Rp. 275.000</p>
            <p  className='font-medium text-slate-600  '><span className='text-slate-600  lg:px-0 text-2xl md:px-5 font-semibold'>.online</span> Rp. 15.000</p>
            <p className='font-medium text-slate-600  '><span className='text-slate-600 text-2xl lg:px-0  md:px-6 font-semibold'>.biz</span> Rp. 175.000</p>
        </div>
    </div>
  )
}

export default Domain