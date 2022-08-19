
import React from 'react'

const sponsors = [
    {
        id: 1,
       
        image:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/costumer/richeese.svg"
    },
    {
        id: 2,
        
        image:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/costumer/rabbani.svg"
    },
    {
        id: 3,
       
        image:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/costumer/antologi.svg"
    },
    {
        id: 4,
       
        image:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/costumer/hydro-coco.svg"
    },
    {
        id: 5,
       
        image:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/costumer/petrokimia.svg"
    },
]



const Pelanggan = () => {
  return (
    <div className='bg-white '>
        <h1 className=' text-3xl font-semibold mx-5 mt-[70px] md:text-4xl text-[#29384E] md:px-[120px] md:text-start pt-[100px] md:mt-8  md:pt-[200px] lg:text-center lg:text-[38px] leading-[46px]  '>Dipercaya 52.000+ Pelanggan di Seluruh Indonesia</h1>
        <div className='  mt-[60px] flex flex-wrap justify-center md:px-[88px] gap-2  '>
        {sponsors.map(({id, image}) => {
            return (
                
                   <div key={id}  >
                    <img src={image} className="h-[105px]" width="190px" />
                   </div>
                
            )
        })}
        </div>
       
    </div>
  )
}

export default Pelanggan