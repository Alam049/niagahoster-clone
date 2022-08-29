import React from 'react'
import { useState } from 'react'
import MuhammadA from "./MuhammadA"
import Fabian from "./Fabian"
import Habib from "./Habib"

const DescriptionRevisi = () => {

    const reviews = ["muhammad","fabian","habib"]
    const [dataReviews, setDataReviews] = useState("")


  return (
    <div>


        {/* button */}
        <div className='mt-[150px] ml-5 bg-[#f5faff] md:grid md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center pb-[80px] 3xl:px-[200px] 4xl:px-[350px]'>
            {reviews.map(review => (
                <button type='button' 
                onClick={() => setDataReviews(review)}
                className='cursor-pointer' >
               {(review === 'muhammad' && <h1 className='text-2xl font-semibold' >Muhammad Arief Widyananda</h1>) || (review === 'fabian' && <h1 className='text-2xl font-semibold text-[#535961]  mt-10 md:mt-0 hover:text-slate-700 ease-in duration-100 '>Fabian Budi Seputro</h1>) || (review === 'habib' && <h1 className='text-2xl font-semibold text-[#535961] mt-8 md:mt-0  hover:text-slate-700 ease-in duration-100'>Habib Hidayat Tullah</h1>)}
               {(review === 'muhammad' && <a href='' className='text-slate-600' >Managing Director PT Krafthaus Indonesia</a>) || (review === 'fabian' && <a href="" className='text-[#535961]' >Owner Sate Ratu</a>) || (review === "habib" && <a href='' className='text-[#535961]' >CTO Uwitan</a>)}
               <div className={`pt-5 `} ></div>
               <div className={`border-10 bg-slate-700 w-[335px] h-[2px] mt-4 md:mt-6 `}></div>
               </button>
            ))}
           
           <div>
                {(dataReviews === "muhammad" && (
                    <MuhammadA/>
                )) || (dataReviews === "fabian" && (
                    <Fabian/>
                )) || (dataReviews === "habib" && (
                    <Habib/>
                ))}
           </div>
        

      </div>
    </div>
  )
}

export default DescriptionRevisi