import React from 'react'

const data = [
  {
    id: 1,
    title:"VPS KVM Indonesia"
  },
  {
    id: 2,
    title:"Cloud VPS Hosting"
  },
  {
    id: 3,
    title:"CyberPanel VPS Hosting"
  },
  {
    id: 4,
    title:"VPS cPanel"
  }
]

const Data3 = () => {
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

export default Data3