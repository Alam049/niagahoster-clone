import React from 'react'
import { useRef } from "react"
import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri"

const HumbergerItem = ({humbergerData, active, onToggle}) => {
  
  const contentAnimation = useRef()



  const { title, image1,product1, desc1, image2, product2, desc2, image3, product3, desc3, image4, product4, desc4, image5, product5, desc5, image6, product6, desc6 } = humbergerData
  
    return (
    <div className=''>
        <li className={` bg-[#F5FAFF] pt-8 px-5 ${active ? 'active' : ""}`} >
            <div className='cursor-pointer flex items-center justify-between ' onClick={onToggle}>
                <h1 className='font-semibold text-lg'>{title}</h1>
                <button>{active ? <RiArrowDropUpLine className='text-3xl'/> :  <RiArrowDropDownLine className='text-3xl'/> }</button>

            </div>
            <div ref={contentAnimation} className={`answer_wrapper h-0 overflow-hidden pt-4 ${active ? "open" : ""}`} style={
                active ? {height: contentAnimation.current.scrollHeight} : {height: "0px"}
            } >
                <div className='pt-10 bg-white rounded-md px-5'>
                    <div className='flex cursor-pointer'>
                        <img src={image1} className="w-10 h-10 object-contain" />
                       <div className='pl-4'>
                       <h1 className='font-semibold text-[#29384E]'>{product1}</h1>
                        <p className='text-[#546071] text-sm'>{desc1}</p>
                       </div>
                    </div>
                    <div className='flex cursor-pointer pt-5 '>
                        <img src={image2}  className="w-10 h-10 object-contain"/>
                       <div className='pl-4'>
                       <h1 className='font-semibold text-[#29384E]'>{product2}</h1>
                        <p className='text-[#546071] text-sm'>{desc2}</p>
                       </div>
                    </div>
                    <div className='flex cursor-pointer pt-5 '>
                       {image3 ?  <img src={image3} className="w-10 h-10 object-contain" /> : null}
                       <div className='pl-4'>
                       <h1 className='font-semibold text-[#29384E]'>{product3}</h1>
                        <p className='text-[#546071] text-sm'>{desc3}</p>
                       </div>
                    </div>
                    <div className='flex cursor-pointer pt-5'>
                        {image4 ? <img src={image4} className="w-10 h-10 object-contain" /> : null}
                       <div className='pl-4'>
                       <h1 className='font-semibold text-[#29384E]' >{product4}</h1>
                        <p className='text-[#546071] text-sm'>{desc4}</p>
                       </div>
                    </div>
                    <div className='flex cursor-pointer pt-5 '>
                        {image5 ? <img src={image5} className="w-10 h-10 object-contain" /> : null}
                       <div className='pl-4'>
                       <h1 className='font-semibold text-[#29384E]'>{product5}</h1>
                        <p className='text-[#546071] text-sm'>{desc5}</p>
                       </div>
                    </div>
                    <div className='flex cursor-pointer pt-5 '>
                        {image6 ? <img src={image6} className="w-10 h-10 object-contain" />: null}
                       <div className='pl-4'>
                       <h1 className='font-semibold text-[#29384E]'>{product6}</h1>
                        <p className='text-[#546071] text-sm'>{desc6}</p>
                       </div>
                    </div>
                </div>

            </div>

        </li>
    </div>
  )
}

export default HumbergerItem