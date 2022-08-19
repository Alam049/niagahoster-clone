import React from 'react'

const data = [
  {
    id: 1,
    title:"Cara Pembayaran"
  },
  {
    id: 2,
    title:"Ebook Gratis"
  },
  {
    id: 3,
    title:"Knowledge Base"
  },
  {
    id: 4,
    title:"Niagahoster Blog"
  },
  {
    id: 5,
    title:"Niagahoster Course"
  },
  {
    id: 6,
    title:"Niagahoster Forum"
  }
 
]

const Data6 = () => {
  return (
    <div className='grid gap-5 text-[#a2a4ad] mt-6'>
      {data.map(({ id, title }) => {
        return (
          <div key={id}>
              <h1>{title}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Data6