import React from 'react'

const Domain = () => {
  return (
    <div className='bg-[#f6faff] pt-8 pl-6'>
        <h3 className='text-[#29384E] font-medium md:mt-10 text-lg md:text-center '>Pilih Domain</h3>
        <h1 className='text-3xl font-semibold pt-5 md:text-center  md:text-4xl md:px-[120px] md:mt-2
         '>Temukan Nama Domain Impian Anda</h1>
        <h4 className='text-slate-500 text-lg pt-6 md:text-center md:px-[190px] lg:text-sm'>Tersedia beragama nama domain untuk segala keperluan Anda.</h4>
        <div className='pt-[60px] md:pl-[150px] lg:pt-6 lg:pl-[300px] '>
            <input type="email" placeholder='Temukan nama domain Anda disini' className='placeholder:text-center rounded-full py-3 px-2  w-[200px] border placeholder:text-sm placeholder:text-slate-500 md:w-[430px] md:px-[60px] lg:placeholder:text-start lg:px-8 lg:w-[470px]'  />
            <button className='bg-[#ff9800] text-white font-medium px-[65px] py-3 rounded-full ml-5 drop-shadow-lg hover:bg-yellow-500 ease-in duration-[400ms]'>
                Cari
            </button>
        </div>
        <div className='grid grid-cols-2 text-center mx-10 mt-8 md:grid-cols-4 pb-[80px] lg:mx-[280px] '>
            <p className='font-medium text-slate-600 '><span className=' text-slate-600  text-2xl  font-semibold'>.com</span> Rp. 115.000</p>
            <p className='font-medium text-slate-600  '><span className='text-slate-600  text-2xl  font-semibold'>.co.id</span> Rp. 275.000</p>
            <p  className='font-medium text-slate-600  '><span className='text-slate-600  text-2xl  font-semibold'>.online</span> Rp. 15.000</p>
            <p className='font-medium text-slate-600  '><span className='text-slate-600  text-2xl  font-semibold'>.biz</span> Rp. 175.000</p>
        </div>
    </div>
  )
}

export default Domain