import React from 'react'

const data = [
  {
    id: 1,
    title:"Hosting Indonesia"
  },
  {
    id: 2,
    title:"Cloud Hosting"
  },
  {
    id: 3,
    title:"Email Hosting"
  },
  {
    id: 4,
    title:"Web Hosting Unlimited"
  },
  {
    id: 5,
    title:"Hosting Terbaik"
  },
  {
    id: 6,
    title:"Hosting Murah"
  },
  {
    id: 7,
    title:"Hosting Singapore SG"
  },
  {
    id: 8,
    title:"Keamanan SSL/HTTPS"
  },
  {
    id: 9,
    title:"Data Center Hosting Terbaik"
  },
  {
    id: 10,
    title:"Hosting Gratis"
  },
  {
    id: 11,
    title:"Transfer Hosting"
  },
  {
    id: 12,
    title:"VPS Gratis"
  },
]

const Data = () => {
  return (
    <div className='grid gap-5 text-[#a2a4ad] mt-7'>
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

export default Data