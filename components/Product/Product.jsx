import React from 'react'
// import CardProduct from './CardProduct'
import CardProductStatis from "./CardProductStatis"

const Product = () => {
  return (
    <div>
        <div className='md:mr-[200px] lg:mr-0 '><h1 className='text-center text-2xl font-semibold px-5 mt-[85px] md:text-[#3a4166]  md:pr-[150px] md:pl-[150px]  md:mt-[50px] lg:text-[37px]'>Lebih Hemat dengan Promo dari Niagahoster!</h1></div>
        <div className='md:mr-[200px] lg:mr-0' >
        <p className='text-center text-md text-slate-500 px-[50px] mt-10 md:mt-5 md:px-[120px] '>Nikmati berbagai penawaran terbaik dari layanan-layanan Niagahoster yang sesuai dengan kebutuhan kamu</p>
        </div>
    {/* <CardProduct /> */}
    <CardProductStatis/>
    </div>
  )
}

export default Product