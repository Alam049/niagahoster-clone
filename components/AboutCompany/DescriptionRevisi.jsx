import React, { useState } from 'react'


const data = [
  {
    id:1,
    name:"Muhammad Arief Widyananda",
    major:"Managing Director PT Krafhaus Indonesia",
  },
  {
    id:2,
    name:"Habib Hidayat Tullah",
    major:"CTO Uwitan",
  },
  {
    id:3,
    name:"Fabian Budi Seputro",
    major:"Owner Sate Ratu",
  },
]

const DescriptionRevisi = () => {

  const categories = ["muhammad","habib","fabian"]
  const [category, setCategory] = useState('')



  return (
    <div>
      
          
          
      
   

      {(category === 'muhammad arief widyananda' && <div><h1>Muhammad Arief Widyananda</h1></div>) || (category === 'habib hidayat tullah' && <div><h1>Habib Hidayat Tullah</h1></div>) || (category === 'fabian budi seputro' && <div><h1>Fabian Budi Seputro</h1></div>)}





      {categories.map((category) => (
            <button onClick={() => setCategory(category)}>
           {(category === 'muhammad arief widyananda' && <div><h1>Muhammad Arief Widyananda</h1></div>) || (category === 'habib hidayat tullah' && <div><p>Habib Hidayat Tullah</p></div>) || (category === 'fabian budi seputro' && <div><p>Fabian Budi Seputro</p></div>)}

         {(category === 'muhammad arief widyananda' && <div><p>Managing Director PT Krafhaus Indonesia</p></div>) || (category === 'habib hidayat tullah' && <div><p>CTO Uwitan</p></div>) || (category === 'fabian budi seputro' && <div><p>Owner Sate Ratu</p></div>)}
          </button>
          ))}
    </div>
  )
}

export default DescriptionRevisi