import React from 'react'
import CardProduct from './CardProduct'
import CardProductStatis from "./CardProductStatis"

const Product = () => {
  return (
    <div>
        <div className=' lg:mr-0 '><h1 className='text-center text-3xl font-semibold px-5 mt-[85px] md:text-[#3A4166]  md:mt-[50px] lg:text-[37px]'>Lebih Hemat dengan Promo dari Niagahoster!</h1></div>
        <div className=' lg:mr-0' >
        <p className='text-center text-md text-slate-500 px-8 mt-10 md:mt-5 lg:mx-[70px] md:px-[120px] '>Nikmati berbagai penawaran terbaik dari layanan-layanan Niagahoster yang sesuai dengan kebutuhan kamu</p>
        </div>
    <CardProduct />
    {/* <CardProductStatis/> */}
    </div>
  )
}

export default Product