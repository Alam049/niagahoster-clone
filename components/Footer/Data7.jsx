import React from 'react'

const data = [
  {
    id: 1,
    title:"Niagahoster Poin"
  },
  {
    id: 2,
    title:"Niagahoster Partner"
  },
  {
    id: 3,
    title:"Program Afiliasi Niagahoster"
  },
  {
    id: 4,
    title:"Partnership Tema"
  }
 
]

const Data7 = () => {
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

export default Data7