import React from 'react'
import Data1 from "./Data1"
import Data2 from "./Data2"
import Data3 from "./Data3"
import Data4 from "./Data4"
import Data5 from "./Data5"
import Data6 from "./Data6"
import Data7 from "./Data7"
import Data8 from "./Data8"
import Data9 from "./Data9"
import Profile from "./Profile"
import CopyRight from "./Copyright"

const Footer = () => {
  return (
    <div className='bg-[#22273c] md:pl-10 mt-5 2xl:px-[180px] 3xl:px-[320px] 4xl:px-[390px]'>
        
        <div className='parent ml-6 md:ml-0 pt-[70px] md:grid md:grid-cols-2 lg:grid-cols-4 '>
            <div className='part1'>
            <div className='web_Hosting'>
            <h1 className='text-white font-semibold'>Web Hosting</h1>
            <Data1/>
            </div>
            <div className='mt-10 domain'>
            <h1 className='text-white font-semibold '>Domain</h1>
            <Data2/>
            </div>
            </div>
            <div className='part2'>
            <div className='  vps'>
            <h1 className='text-white font-semibold '>Virtual Private Server</h1>
            <Data3/>
            </div>
            <div className='mt-10  wordpress'>
            <h1 className='text-white font-semibold '>WordPress Hosting</h1>
            <Data4/>
            </div>
            <div className='mt-10 website'>
            <h1 className='text-white font-semibold '>Website</h1>
            <Data5/>
            </div>
            <div className='mt-10 bantuan'>
            <h1 className='text-white font-semibold '>Bantuan</h1>
            <Data6/>
            </div>
            </div>
            
            <div className='part3'>
            <div className='mt-10 lg:mt-0 kemitraan'>
            <h1 className='text-white font-semibold '>Kemitraan</h1>
            <Data7/>
            </div>
            <div className='mt-10 perusahaan'>
            <h1 className='text-white font-semibold '>Perusahaan</h1>
            <Data8/>
            </div>
            <div className='mt-10 eazy'>
            <h1 className='text-white font-semibold '>EazyLink</h1>
            <Data9/>
            </div>
            
            </div>
            <div className='hidden lg:block'>
            <Profile  />
            </div>
        </div>
        
        <div className='lg:hidden'>
            <Profile  />
            </div>
        <div className='px-5 mt-7 sm:mt-[60px] lg:ml-[480px] lg:mt-0 xl:pl-[90px]'>
          <div className='lg:mt-[-130px] lg:mb-[100px] '>
          <h1 className='text-white hidden lg:block font-medium text-lg lg:pb-3'>Newsletter</h1>
          <form className='sm:flex sm:items-center sm:flex-wrap sm:gap-8 md:gap-0 xl:gap-4'>
            <div className=''>
            <input type="email" placeholder='Ketik alamat email disini' className='placeholder:text-center rounded-full py-3 w-full sm:px-10 placeholder:text-slate-600  md:px-[140px] lg:px-[60px]  lg:placeholder:text-start xl:px-[80px] '  />
            </div>
            <div className=' lg:pt-1'>
            <button type='submit' className='bg-[#ff9800] rounded-full text-white px-[35px] py-3 w-full mt-5 sm:mt-0 shadow-md font-medium md:px-[20px]  hover:bg-yellow-700 ease-in duration-[400ms] md:ml-[30px] lg:px-10 lg:ml-0' >  
              Berlangganan
            </button>
            </div>
          </form>
          </div>
        </div>
        <CopyRight/>
    </div>
  )
}

export default Footer