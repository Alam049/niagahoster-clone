import React from 'react'
import { BsChevronRight } from "react-icons/bs" 
import { BiTimeFive } from "react-icons/bi"
import { IoMdSend } from "react-icons/io"
import { Transition } from '@headlessui/react'


const ChatBox = ({enabled}) => {
  return (
    <div
    show={enabled}
    className='mb-5 w-[400px]'>

        <div 
        className='bg-[#5931d3] overflow-y-scroll lg:h-[450px] rounded-t-lg   md:h-[420px] h-[430px] '>
        
            <div className='pl-4'>
            <h1 className='text-white text-start font-medium text-4xl pl-7 pt-7'>Hai di sana 👋</h1>
            <div className=''>
            <h5 className='text-slate-200 mt-2 px-7 text-start '>Silakan bertanya kepada kami. Kami siap membantu Anda.</h5>
            </div>
            <div className='bg-white mr-5 shadow-md shadow-slate-400 h-[190px] rounded-sm   '>
                <h1 className='pl-6 font-bold mt-7 pt-4'>Lanjutkan percakapan</h1>
                <div className='flex items-center gap-2  cursor-pointer hover:bg-slate-200 pl-5 px-2 pb-2'>
                <img className='w-[50px] h-[50px] object-cover rounded-full mt-5 ' src="https://res.cloudinary.com/ramram27/image/upload/v1660805529/niagahosterclone/people1_vpt0kd.jpg" />
                <div>
                    <h5 className='text-sm'>Selamat datang kembali! Anda...</h5>
                    <h5 className='text-sm text-slate-500'>Agus. 1h lalu</h5>
                </div>
                <div>
                    <BsChevronRight className='text-blue-500 font-semibold' />
                </div>
              
                </div>
                <div className='w-full mt-4  bg-slate-300 h-[0.5px]'></div>
                <h1 className='text-sm mt-4 text-[#673DE6] pl-6 cursor-pointer'>Lihat semua percakapan Anda</h1>

            </div>
            <div className='bg-white mr-5 shadow-md shadow-slate-400 h-[190px] rounded-sm  '>
                <h1 className='pl-6 font-bold mt-4 pt-4'>Mulai percakapan lain</h1>
                <div className='flex items-center gap-2  cursor-pointer hover:bg-slate-200 pl-5 px-2 pb-2'>
                <img className='w-[50px] h-[50px] object-cover rounded-full mt-5 ' src="https://res.cloudinary.com/ramram27/image/upload/v1660805529/niagahosterclone/people1_vpt0kd.jpg" />
                <div>
                    <h5 className='text-sm text-slate-500'>Waktu balasan kami biasanya</h5>
                    <div className='flex items-center gap-1 '>
                        <BiTimeFive className='text-[#673DE6] mt-[3px]'/>
                    <h5 className='text-sm font-semibold'>
                        Beberapa menit
                    </h5>
                    </div>
                </div>
                
              
                </div>
                <div className='flex items-center text-[#673DE6] border border-[#673DE6] px-5 mx-10 gap-3 mr-[120px] rounded-full hover:text-blue-300'>
                    <IoMdSend/>
               <div>
               <button className='text-sm py-3  cursor-pointer font-medium p'>Kirimi kami pesan</button>
               </div>
                </div>
                

            </div>
           
            <div className='flex items-center gap-3 rounded-sm px-7 py-4 bg-white shadow-sm shadow-slate-300 mt-5 mr-5 mb-5'>
                <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/intercom-check-icon.svg" />
                <div>
                    <h1 className='text-sm text-[#673DE6]'>Status: All systems are operational</h1>
                    <h1 className='text-sm text-slate-500'>Updated on Aug 18, 06:47</h1>
                </div>
            </div>
            

            

            </div>
            
        </div>
        

    </div>
  )
}

export default ChatBox