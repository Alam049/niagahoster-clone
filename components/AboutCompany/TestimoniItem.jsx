import React, { useState } from 'react'
import { useRef } from 'react'

const TestimoniItem = ({testimoniData, active, onToggle}) => {


  const contentAnimation = useRef()
 
  

  const { name, desc } = testimoniData

  
  
  return (     
        //  <div className='pt-8 px-5 '>
        //    <li className={` bg-[#F5FAFF] py-7 px-5 rounded-lg
        //     ${clicked ? 'active' : ""}`} >
        //       <div className='flex justify-between cursor-pointer' onClick={handleToggle}>
        //             <h1 className='text-[#29384E] font-semibold'>{name}</h1>
        //            <button className='text-[#007AFF] text-3xl'>{ clicked ? "-" : "+"}</button>
        //       </div> 
          
        //   <div ref={contentAnimation}  className={`answer_wrapper h-0 overflow-hidden `} style={clicked ? {height: contentAnimation.current.scrollHeight} : {height: "0px"}} >
        //   <div className='pt-2'>
        //   <div className='h-[1px] bg-slate-200  px-5'></div>
        //   </div>
        //       <p className='text-[#546071] pt-5'>{desc}</p>
        //   </div>
        //   </li>
        //   </div>
        
         <div className='pt-8 px-5 md:px-[90px] lg:px-[180px] xl:px-[220px] 2xl:px-[250px] 3xl:px-[310px] 4xl:px-[330px]'>
           <li className={` bg-[#F5FAFF] py-7 px-5 rounded-lg sm:py-5 
            ${active ? 'active' : ""}`} >
             <div className='flex justify-between cursor-pointer' onClick={onToggle}>
     
     
                     <h1 className='text-[#29384E] font-semibold'>{name}</h1>
                    <button className='text-[#007AFF] text-3xl'>{ active ? "-" : "+"}</button>
               </div> 
          
           <div ref={contentAnimation} className={`answer_wrapper h-0 overflow-hidden ${active ? "open" : ""} `} style={
    active
      ? { height: contentAnimation.current.scrollHeight }
      : { height: "0px" }
  }>
           <div className='pt-2'>
           <div className='h-[1px] bg-slate-200  px-5'></div>
           </div>
               <p className='text-[#546071] pt-5 '>{desc}</p>
           </div>
           </li>
           </div>
        
    
  )
}

export default TestimoniItem