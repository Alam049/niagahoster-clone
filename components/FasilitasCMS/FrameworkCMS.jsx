import Image from 'next/image'
import React from 'react'
import Wordpress from "../../assets/wordpress.png"
import Python from "../../assets/python.png"


const FrameworkCMS = () => {
  return (
    <div className='p-10'>
        <h1 className='text-[#3a4166] text-4xl font-semibold'>Telah dioptimasi untuk berbagai CMS dan framework</h1>
        <div className='grid grid-cols-2 pt-12 gap-x-10 gap-y-2'>
            <Image src={Wordpress}  />
            <Image src={Python} />
            <Image src={Wordpress} />
            <Image src={Python} />
        </div>
    </div>
  )
}

export default FrameworkCMS