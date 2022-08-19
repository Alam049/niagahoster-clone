import React from 'react'
import Image from 'next/image'


const data =[
    {
        id: 1,
        image: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-promo-hosting-1654235588.webp',
        title: 'All-Time Best Seller Product',
        name:'Unlimited Hosting Paket Personal',
        desc:'Layanan hosting terpopuler dengan jaminan uptime hingga 99.9%. Performa website aman, dan selalu aktif.',
        price:'Rp24.900',
        logoFirst:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-2-bar-1654245883.webp',
        logoSecond:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-price-tag-1654247027.webp',
        classs:'Intermediate',
        paket:'Diskon S.D 75%',
        time:"/bulan"
    },
    {
        id: 2,
        image: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-cloud-hosting-1654237451.webp',
        title: 'Favorite Dedicated Resource',
        name:'Cloud Hosting Paket Premium',
        desc:'Layanan hosting dengan dedicated resource terbaik. Paling sesuai untuk website skala besar Anda.',
        price:'Rp249.900',
        logoFirst:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-2-bar-1654245883.webp',
        logoSecond:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-price-tag-1654247027.webp',
        classs:'Intermediate',
        paket:'Diskon S.D 58%',
        time:"/bulan"
    },
    {
        id: 3,
        image: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-promo-hosting-1654235588.webp',
        title: 'Best Trial Package',
        name:'Unlimited Hosting Paket Bayi',
        desc:'Layanan hosting dengan dedicated resource terbaik. Paling sesuai untuk website skala besar Anda.',
        price:'Rp 9.900',
        logoFirst:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-2-bar-1654245883.webp',
        logoSecond:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-money-cash-1654247073.webp',
        classs:'Intermediate',
        paket:'Paket Termurah',
        time: "/bulan"
    },
    {
        id: 4,
        image: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-cloud-vps-1654237629.webp',
        title: 'Best VPS Product',
        name:'Cloud VPS Hosting',
        desc:'Kelola server kini jauh lebih fleksibel sesuai kebutuhan Anda. Dukungan fitur terlengkap dan termurah hanya di Niagahoster.',
        price:'Rp 99.900',
        logoFirst:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-3-bar-1654246995.webp',
        logoSecond:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-price-tag-1654247027.webp',
        classs:'Expert',
        paket:'Diskon S.D 28.6%',
        time: "/bulan"

    },
    {
        id: 5,
        image: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-website-instan-1654237680.webp',
        title: 'Best Instant Websites',
        name:'Website Instan',
        desc:'Dapatkan website yang siap online dengan variasi tema website yang beragam sesuai dengan kebutuhanmu.',
        price:'Rp 29.175',
        logoFirst:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-1-bar-1654246976.webp',
        logoSecond:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-price-tag-1654247027.webp',
        classs:'Beginner',
        paket:'Instan Product',
        time:"/bulan",
    },
    {
        id: 6,
        image: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-simple-wordpress-1654237709.webp',
        title: 'Best WordPress Product',
        name:'Simple WordPress',
        desc:'Mengelola hosting makin mudah tanpa perlu pengetahuan teknis tentang layanan WordPress.',
        price:'Rp 29.425',
        logoFirst:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-1-bar-1654246976.webp',
        logoSecond:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-star-1654247009.webp',
        classs:'Beginner',
        paket:'WordPress',
        time:'/bulan'
    },
    {
        id: 7,
        image: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-domain-com-squared.webp',
        title: 'Favorite Domain',
        name:'Domain .COM',
        desc:'Miliki ekstensi domain paling terpopuler di dunia dengan tawaran harga termurah di Indonesia!',
        price:'Rp 115.000',
        logoFirst:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-star-1654247009.webp',
        classs:'Domain',
        time:'/tahun'
        
    },
    {
        id: 8,
        image: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-domain-id-1654237752.webp',
        title: 'Favorite Domain',
        name:'Domain .ID',
        desc:'Miliki ekstensi domain Indonesia, dengan persyaratan mudah dan gratis proteksi privasi WHOis',
        price:'Rp 230.000',
        logoFirst:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-star-1654247009.webp',
        classs:'Domain',
        time:"/tahun"
    },
]


const CardProduct = () => {
  return (
    <div className='md:grid md:grid-cols-2'>
        {data.map(({ id, title, image, name, desc, price, logoFirst, logoSecond, paket,classs ,time }) => {
            return (
                <div key={id} className=" mx-10 mt-10 border mr-[110px] shadow-2xl rounded-2xl overflow-hidden h-[605px] md:mr-[0.1px] md:mx-5 ">
                    <h1 className='bg-[#01c0a6] text-white font-semibold text-xl text-center p-3' >{title}</h1>
                    <div className='flex items-center ml-7 mt-10 gap-3'>
                        <img src={image} className="object-cover w-[65px]"  />
                        <h1 className='text-xl
                         font-bold  text-slate-600 px-10'>{name}</h1>
                    </div>
                    <div className='flex items-center gap-3 ml-8 bg-[#FFE082] mr-[140px] px-3 mt-10 rounded-md py-1.5'>
                    <img src={logoFirst} className="object-cover w-3"  />
                        <p className='text-[#C77700] text-sm'>{classs}</p>
                    </div>
                    <div className='flex items-center gap-3 ml-8 bg-[#e0efff] mr-[120px] px-3 mt-2 rounded-md py-1.5  '>
                    <img src={logoSecond}  className="object-cover w-3" />
                        <p className='text-sm font-medium text-blue-600'>{paket}</p>
                    </div>
                    <p className='ml-8 mt-5 leading-7 text-slate-400 text-sm pr-[59px]'>{desc}</p>

                    <h3 className='ml-8 mt-8 text-sm text-slate-500 font-medium'>Mulai dari</h3>
                    <h1 className='ml-8 mt-2 font-semibold text-lg'><span className='text-[#ff9800] text-2xl font-semibold'>{price}</span> {time}</h1>
                    <button className='bg-[#ff9800] rounded-full text-white px-[75px] py-3 ml-[34px] mt-5 shadow-md  shadow-yellow-100 font-medium hover:bg-yellow-600 ease-in duration-[400ms] '>
                        Beli Sekarang
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default CardProduct