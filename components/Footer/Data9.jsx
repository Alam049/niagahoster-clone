import React from 'react'

const data = [
  {
    id: 1,
    title:"EazyLink"
  }
]

const Data9 = () => {
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

export default Data9