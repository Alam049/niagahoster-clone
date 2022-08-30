import React from 'react'
import { FcOk } from "react-icons/fc"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const paket = [
  {
    id:1,
    title:"Bayi",
    standart:"Sesuai untuk pemula",
    paket:"Termurah",
    price:"Rp 9.900",
    discount: null,
    bonus:"Bonus 262 - 356 Poin",
    desc1:"Hingga 15.000 Pengunjung/Bulan",
    desc2:"500 MB SSD Disk Space",
    desc3:"Unlimited Bandwidth",
    desc4:"Unlimited Database",
    desc5:"1 Email Account",
  },
  {
    id:2,
    title:"Pelajar",
    standart:"Sesuai untuk personal branding dan blog pribadi",
    paket:"Diskon 58%",
    price:"Rp 24.900",
    discount:"Rp 59.900",
    bonus:"Bonus 418 - 896 Poin",
    desc1:"Hingga 60.000 Pengunjung/Bulan",
    desc2:"Unlimited SSD Disk Space",
    desc3:"Unlimited Bandwidth",
    desc4:"Unlimited Database",
    desc5:"Unlimited Email Account",
  },
  {
    id:3,
    title:"Personal",
    standart:"Sesuai untuk profil perusahaan, organisasi, dan komunitas",
    paket:"Diskon 75%",
    price:"Rp 24.900",
    discount:"Rp 99.900",
    bonus:"Bonus 418 - 896 Poin",
    desc1:"Hingga 135.000 Pengunjung/Bulan",
    desc2:"Unlimited SSD Disk Space",
    desc3:"Unlimited Bandwidth",
    desc4:"Unlimited Database",
    desc5:"Unlimited Email Account",
  },
  {
    id:4,
    title:"Bisnis",
    standart:"Sesuai untuk website bisnis, portal berita, dan toko online",
    paket:"Diskon 67%",
    price:"Rp 49.900",
    discount:"Rp 149.900",
    bonus:"Bonus 778 - 1.796 Poin",
    desc1:"Hingga 180.000 Pengunjung/Bulan",
    desc2:"Unlimited SSD Disk Space",
    desc3:"Unlimited Bandwidth",
    desc4:"Unlimited Database",
    desc5:"Unlimited Email Account",
  },
]


const UnlimitedHost = () => {
  return (
    <div className='px-10 pt-10 md:px-[120px] lg:grid lg:grid-cols-2 gap-6 xl:grid-cols-4 xl:px-[60px]'>
      {paket.map(({id,title,standart,paket,price,bonus,desc1,desc2,desc3,desc4,desc5,discount}) => {
        return (
          <div key={id}>
            {(id === 3 && <div  className='border-[2px] border-[#FF9800] shadow-md shadow-slate-200  mt-8 md:mt-0 rounded-xl '>
              <h1 className='bg-[#FF9800] text-white rounded-t-lg text-center py-3.5 text-2xl font-semibold xl:text-lg '>Penawaran Terbaik!</h1>
           
           <div className='px-5 pt-5'>
           <h1 className='font-semibold text-lg text-[#3A4166]'>{title}</h1>
           <h5 className='text-[#535961] text-sm pt-5'>{standart}</h5>
             
             {(paket === 'Diskon 75%' && <div className=' pt-8  flex items-center gap-8 '><h1 className='bg-[#f43636] rounded-l-md text-white pl-2 py-2 text-xs font-semibold pr-4   '>{paket}</h1><div className='absolute left-[150.5px] segitiga-kiri'></div><p className='text-sm text-[#3a4166] font-semibold line-through'>{discount}</p></div> ) || (paket ? <div className=' pt-8'><h1 className='rounded-l-md text-white pl-2 py-2 text-xs font-semibold  '>{paket}</h1></div> : '' )}
             
   
             <h1 className='pt-8 '><span className='text-[#FF9800]  text-2xl font-semibold'>{price} </span><span className='font-semibold text-lg'>/bulan</span></h1>
   
             <div className='pt-8 px-4 md:px-10 xl:px-2'>
             <button className='text-white bg-[#FF9800] font-semibold py-3 text-sm border border-[#FF9800] w-full rounded-full  hover:shadow-sm hover:shadow-[#ff9800]'>Pilih Paket</button>
             </div>
   
             <h5 className='text-sm text-[#535961] pt-8 text-center'>{bonus}</h5>
             <div className='text-sm text-[#29384e] pt-8'>
               <div className='flex items-center gap-2.5'>
               <FcOk className='text-base'/>
               <h1>{desc1}</h1>
               </div>
               <div className='flex items-center gap-2.5 pt-5'>
               <FcOk className='text-base'/>
               <h1>{desc2}</h1>
               </div>
               <div className='flex items-center gap-2.5 pt-5'>
               <FcOk className='text-base'/>
               <h1>{desc3}</h1>
               </div>
               <div className='flex items-center gap-2.5 pt-5'>
               <FcOk className='text-base'/>
               <h1>{desc4}</h1>
               </div>
               <div className='flex items-center gap-2.5 pt-5 pb-6'>
               <FcOk className='text-base'/>
               <h1>{desc5}</h1>
               </div>
             </div>
             <div className='h-[1px] bg-slate-200  '></div>
             <div className='pt-4 pb-10
             '>
               <h1 className='text-[#0062cc] text-base font-bold text-center '>Lihat Fitur Lengkap</h1>
             </div>
           </div>
               </div> ) || (id ? <div  className='border shadow-md shadow-slate-200 px-5 pt-5 rounded-xl mt-10'>
           
           <h1 className='font-semibold text-lg text-[#3A4166]'>{title}</h1>
           <h5 className='text-[#535961] text-sm pt-5'>{standart}</h5>
             <div className=' pt-8 '>
             {(paket === 'Diskon 75%' && <h1 className='bg-[#f43636] rounded-l-md text-white pl-2 py-2 text-xs font-semibold '>{paket}</h1> ) || (paket ? <div className='flex items-center gap-8
             '>
              <h1 className='bg-[#00bfa6] rounded-l-md text-white pl-2 py-2 text-xs font-semibold px-5'>{paket}</h1>{
                (paket === 'Termurah' && <div className='absolute left-[140px] segitiga-kiri-2'></div>) || (paket ? <div className='absolute left-[154px] segitiga-kiri-2'></div> : '')
              }
              <p className='text-sm text-[#3a4166] font-semibold line-through'>{discount}</p>
             </div> : '' )}
             </div>
   
             <h1 className='pt-8 '><span className='text-[#FF9800]  text-2xl font-semibold'>{price} </span><span className='font-semibold text-lg'>/bulan</span></h1>
   
             <div className='pt-8 px-4 md:px-10 xl:px-2'>
             <button className='text-[#FF9800] font-semibold py-3 text-sm border border-[#FF9800] w-full rounded-full hover:shadow-sm hover:shadow-[#ff9800]'>Pilih Paket</button>
             </div>
   
             <h5 className='text-sm text-[#535961] pt-8 text-center'>{bonus}</h5>
             <div className='text-sm text-[#29384e] pt-8'>
               <div className='flex items-center gap-2.5'>
               <FcOk className='text-base'/>
               <h1>{desc1}</h1>
               </div>
               <div className='flex items-center gap-2.5 pt-5'>
               <FcOk className='text-base'/>
               <h1>{desc2}</h1>
               </div>
               <div className='flex items-center gap-2.5 pt-5'>
               <FcOk className='text-base'/>
               <h1>{desc3}</h1>
               </div>
               <div className='flex items-center gap-2.5 pt-5'>
               <FcOk className='text-base'/>
               <h1>{desc4}</h1>
               </div>
               <div className='flex items-center gap-2.5 pt-5 pb-6'>
               <FcOk className='text-base'/>
               <h1>{desc5}</h1>
               </div>
             </div>
             <div className='h-[1px] bg-slate-200  '></div>
             <div className='pt-4 pb-10
             '>
               <h1 className='text-[#0062cc] text-base font-bold text-center '>Lihat Fitur Lengkap</h1>
             </div>
               </div> : "")}
            
          </div>
        )
      } )}
      
    </div>
  )
}

export default UnlimitedHost