import React from 'react'
import { useTransition } from 'react-spring'
import { useState } from 'react'
import ChatboxRevisi from './ChatboxRevisi'

const ScroolChatRevisi = () => {
  const [items, setItems] = useState([])
  const transition = useTransition(items, {
    from: {opacity: 0},
    enter: item => (next) => (
      next({ opacity:1, delay: item.delay })
    ),
    leave: {opacity:0}
  })


  return (
    <div className='border border-slate-400 px-10 py-10'>
        <h1>Ari Alamsyah</h1>
        <button className='bg-black' onClick={() => {
          setItems(v => v.length ? [] : [
            {},
            {}

          ])
        }} >Chat Me!</button>
        <div>
        {transition((style, item) => item ?  <animated.div style={style} className="bg-black relative z-10000
         w-10 h-10"/>: "" )}
        </div>
       
    </div>
  )
}

export default ScroolChatRevisi