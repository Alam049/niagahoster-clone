import React from 'react'



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
        logoSecond:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-star-1654247009.webp',
        logoFirst:'',
        paket:'Domain',
        classs: '',
        time:'/tahun'
        
    },
    {
        id: 8,
        image: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-domain-id-1654237752.webp',
        title: 'Favorite Domain',
        name:'Domain .ID',
        desc:'Miliki ekstensi domain Indonesia, dengan persyaratan mudah dan gratis proteksi privasi WHOis',
        price:'Rp 230.000',
        logoSecond:'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-star-1654247009.webp',
        logoFirst:'',
        paket:'Domain',
        classs:'',
        time:"/tahun"
    },

]


const CardProduct = () => {
  return (
    <div className='md:grid md:grid-cols-2 md:gap-5 md:px-10  lg:pr-[50px] lg:mt-[100px] xl:grid-cols-3 xl:gap-10 2xl:px-[180px] 3xl:px-[280px] 4xl:px-[340px] md:place-content-center '>
        {data.map(({ id, title, image, name, desc, price, logoFirst, logoSecond, paket,classs ,time }) => {
            return (
                <div key={id} className='lg:pr-[100px] xl:pr-0'>
                    <div  className=" mx-10 lg:mt-5 mt-10 border pb-5 shadow-2xl rounded-2xl overflow-hidden sm:mr-[150px] md:mr-0 md:mx-0  ">
                        <h1 className='bg-[#01c0a6] text-white font-semibold text-xl text-center p-3' >{title}</h1>
                    <div className='flex items-center ml-7 mt-10 gap-3'>
                        <img src={image} className="object-cover w-[65px]"  />
                        <h1 className='text-xl
                         font-bold  text-slate-600 px-5'>{name}</h1>
                    </div>
                    <div className='xl:flex xl:flex-wrap xl:items-center'>
                        {(classs === 'Expert' && <div className='flex items-center gap-3 ml-8 bg-[#fbb2b2] xl:mr-0 mr-[140px] px-3 mt-10 rounded-md py-2 '>
                    <img src={logoFirst}  className="object-cover w-3" />
                    <p className='text-[#A83232] text-xs font-semibold' >{classs}</p>
                    </div> ) || (classs === 'Beginner' && <div className='flex items-center gap-3 ml-8 bg-[#ADEBE3] xl:mr-0 mr-[140px] px-3 mt-10 rounded-md py-2 '>
                    <img src={logoFirst}  className="object-cover w-3" />
                    <p className='text-[#00897B] text-xs font-semibold' >{classs}</p>
                    </div>) || (classs && logoFirst ?  <div className='flex items-center gap-3 ml-8 bg-[#FFE082] xl:mr-0 mr-[140px] px-3 mt-10 rounded-md py-2'>
                    <img src={logoFirst} className="object-cover w-3"  />
                        <p className='text-[#C77700] text-xs font-semibold'>{classs}</p>
                    </div> : null ) }

                   



                    <div className='pr-[130px] xl:mt-8 xl:pr-0'>
                 { (paket === 'Paket Termurah' && <div className='flex items-center gap-3 ml-8 bg-[#adebe3] xl:ml-2 px-3 mt-2 rounded-md py-2 '>
                    <img src={logoSecond}  className="object-cover w-3" />
                    <p className='text-xs font-semibold text-[#00897B]' >{paket}</p>
                    </div> ) || (paket && logoSecond ?  <div className='flex items-center gap-3 ml-8 bg-[#e0efff] xl:ml-2 px-3 mt-2 rounded-md py-2 '>
                    <img src={logoSecond}  className="object-cover w-3" />
                    <p className='text-xs font-semibold text-blue-600' >{paket}</p>
                    </div> :  null) }
                    
                    </div>
                    </div>
                    <p className='ml-8 mt-5 leading-7 text-slate-400 text-sm pr-[59px]'>{desc}</p>

                    <h3 className='ml-8 mt-8 text-xs text-slate-500 font-medium'>Mulai dari</h3>
                    <h1 className='ml-8 mt-2 font-semibold text-lg'><span className='text-[#ff9800] text-2xl font-semibold'>{price}</span> {time}</h1>
                    <div className='px-6 '>
                    <button className='bg-[#ff9800] rounded-full text-white px-[75px] py-3 w-full mt-5 shadow-md  shadow-yellow-100 font-medium hover:bg-yellow-600 ease-in duration-[400ms] '>
                        Beli Sekarang
                    </button>
                    </div>
                </div>
                </div>
            )
        })}
       <div className='px-8 md:px-0 sm:mr-[120px] md:mr-0 xl:px-0 lg:pr-[100px] xl:pr-0'>
    <div className='bg-[#0087ff]  text-white xl:mt-5 mt-[70px]  rounded-xl text-center pt-6 shadow-lg w-full  shadow-slate-400  '>
        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-more-promo-1654237782.webp" className='mr-auto ml-auto w-[75px] h-[75px]  object-contain'/>
        <h1 className='text-xl font-bold mt-10 '>Lihat Semua Promo</h1>
        <p className='text-sm mt-4 px-5'>Temukan berbagai promo menarik dari Niagahoster di sini!</p>

        <div className='px-5'>
        <button className='mt-[150px] mb-10 font-semibold bg-[#ff9800] w-full py-3 rounded-full hover:bg-yellow-600 ease-in duration-[400ms] shadow-sm shadow-yellow-500 '>
            Lihat Promo Lainnya
        </button>
        </div>
       
    </div>
    </div>
    </div>
  )
}

export default CardProduct