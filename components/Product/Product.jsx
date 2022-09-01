import React, { useState } from 'react'
import CardProduct from './CardProduct'
import CardProductStatis from "./CardProductStatis"
import UnlimitedHost from "./UnlimitedHost"

const button = [
  {
    id:1,
    title:"PromoTerbaik"
  },
  {
    id:2,
    title:"Unlimited Hosting"
  },
  {
    id:3,
    title:"Cloud Hosting"
  },
  {
    id:4,
    title:"VPS KVM"
  },
  {
    id:5,
    title:"Domain"
  },
  {
    id:6,
    title:"Website Instan"
  },
]



const Product = () => {

 const categories = ['promo terbaik','unlimited hosting','cloud hosting','vps kvm','domain','website instan'];

 const [category, setCategory] = useState('promo terbaik')
 




 
 

  


  return (
    <div>
<div className='md:pt-[70px] lg:pt-[130px]'>
        <h1 className='text-lg text-slate-600 pt-[80px] font-semibold text-center'>Layanan Web Hosting Niagahoster</h1>
       <div className='2xl:px-[120px] 3xl:px-[220px] 4xl:px-[280px] '>
       <div className='lg:px-10 xl:bg-[#f6faff] xl:rounded-full xl:mx-10  '>
        <ul className=' mt-[50px] md:grid md:grid-cols-3 md:gap-5 lg:gap-8 px-10 text-center xl:grid-cols-6 xl:px-0 lg:items-center py-4  '>
       
        {categories.map((category) => (
          
           <div className='pt-5 px-5 xl:px-0 xl:pt-0'>
            {(category === "vps kvm" && <button key={category} onClick={() => setCategory(category) } className=' focus:bg-[#ff9800] active:bg-[#ff9800] text-slate-600 font-semibold bg-[#f6faff]  py-4 rounded-full hover:bg-slate-200 w-full cursor-pointer cs3:px-4 cs3:py-4 '>{(category === 'vps kvm' && <span>VPS KVM</span> )} <span className='bg-[#f43636] text-white py-1 px-2 rounded-md text-sm'>Baru</span>
           </button>)  || (category ?  <button key={category} onClick={() => setCategory(category)} className='focus:bg-[#ff9800] active:bg-[#ff9800] active:text-white focus:text-white transition-all ease-in duration-300 text-slate-600 font-semibold py-4 rounded-full bg-[#f6faff] hover:bg-slate-200 w-full cursor-pointer cs3:px-4 cs3:py-4'>
           {(category === 'promo terbaik' && <h1>Promo Terbaik</h1>) || (category === 'unlimited hosting' && <h1>Unlimited Hosting</h1>) || (category === 'cloud hosting' && <h1>Cloud Hosting</h1>) ||  (category === 'domain' && <h1>Domain</h1>) || (category === 'website instan' && <h1>Website Instan</h1>)}
           </button> : "") }

           </div>
           
           
        ))}
        
        
        </ul>

        </div>
       </div>
        </div>
       
    

       {(category === 'promo terbaik' && <div className='transition-opacity ease-in duration-300'><div className='  lg:mr-0 '><h1 className='text-center text-3xl font-semibold px-5 mt-[85px] md:text-[#3A4166]  md:mt-[50px] lg:text-[37px]'>Lebih Hemat dengan Promo dari Niagahoster!</h1></div>
        <div className=' lg:mr-0' >
        <p className='text-center text-md text-slate-500 px-8 mt-10 md:mt-5 lg:mx-[70px] md:px-[120px] '>Nikmati berbagai penawaran terbaik dari layanan-layanan Niagahoster yang sesuai dengan kebutuhan kamu</p>
        </div>
    <CardProduct /> </div>) || (category === 'unlimited hosting' && <div><div>
    <div className=' lg:mr-0 '><h1 className='text-center text-3xl font-semibold px-5 mt-[85px] md:text-[#3A4166]  md:mt-[50px] lg:text-[37px]'>Unlimited Web Hosting Indonesia</h1></div>
        <div className=' lg:mr-0' >
        <p className='text-center text-md text-slate-500 px-10 mt-10 md:mt-5 lg:mx-[70px] md:px-[120px] 2xl:px-[250px] 3xl:px-[400px] 4xl:px-[480px]'>Layanan web hosting Indonesia terbaik dengan fitur hosting terlengkap dan dukungan support 24 jam untuk kemudahan Anda meraih kesuksesan online!</p>
        </div>
        <h1 className='text-center text-[#0062cc] font-semibold pt-8'>Klik disini untuk pelajari produk lebih lanjut</h1>
    </div>

    <UnlimitedHost/></div>)}

      
        
    {/* <CardProductStatis/>

    {/* Unlimited */}
    

    </div>
  )
}

export default Product