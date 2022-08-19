import React, { useState } from 'react'
import { BsChatRight,BsChevronDown } from "react-icons/bs"
import ChatBox from "./ChatBox"
import { Transition } from '@headlessui/react'


const ScroolChat = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div>
      <Transition
        show={enabled}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      className={` fixed z-20 bottom-[110px] right-5 `}>
      <ChatBox enabled={enabled}/>
      </Transition>
      
      <div className='fixed z-20 bottom-[60px]  right-5'>



        

        <div className='bg-[#5931d3] p-3  rounded-full ' onClick={() => setEnabled(!enabled)}>
        {enabled ? <BsChevronDown className='text-4xl cursor-pointer text-white' /> :<BsChatRight  className='text-4xl cursor-pointer text-white  '/> }
        
       
        </div>
    </div>
    </div>
  )
}

export default ScroolChat