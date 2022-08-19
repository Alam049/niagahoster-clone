import React from 'react'

const data = [
  {
    id: 1,
    title:"Tentang Niagahoster"
  },
  {
    id: 2,
    title:"Kontak"
  },
  {
    id: 3,
    title:"Karir"
  },
  {
    id: 4,
    title:"Event"
  }
  ,
  {
    id: 5,
    title:"Status Layanan"
  },
  {
    id: 6,
    title:"Review Pelanggan"
  },
  {
    id: 7,
    title:"Penawaran & Promo Spesial"
  },
  {
    id: 8,
    title:"Niagahoster Virtual Summit"
  },
]

const Data8 = () => {
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

export default Data8