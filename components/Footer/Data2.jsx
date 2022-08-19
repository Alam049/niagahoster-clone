import React from 'react'

const data = [
  {
    id: 1,
    title:"Domain"
  },
  {
    id: 2,
    title:"Domain .ID"
  },
  {
    id: 3,
    title:"Domain Gratis"
  },
  {
    id: 4,
    title:"Promo Domain .COM"
  },
  {
    id: 5,
    title:"Harga Domain"
  },
  {
    id: 6,
    title:"WHOIS"
  },
  {
    id: 7,
    title:"Transfer Domain"
  }
 
]

const Data2 = () => {
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

export default Data2