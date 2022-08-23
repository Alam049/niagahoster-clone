import React from 'react'

const CardProductStatis = () => {
  return (
    <div>
        <div className='md:grid md:grid-cols-2 mt-[60px] md:justify-items-center sm:pr-[120px]  md:gap-2  md:px-[85px] lg:grid-cols-3 lg:gap-8 lg:px-[60px] h-full'>
                {/* card1 */}
                <div className='px-8 '>
                <div className=" mt-10 border  w-full shadow-2xl rounded-2xl overflow-hidden pb-5 ">
                    <h1 className='bg-[#01c0a6] text-white font-semibold text-xl text-center p-3 ' >All-Time Best Seller Product</h1>
                    <div className='flex items-center gap-6 ml-8'>
                        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-promo-hosting-1654235588.webp" className=" w-[57.3px] h-[60px] mt-[55px] md:mt-8 "  />
                       <div className='pr-[70px] md:pr-10 '>
                       <h1 className='text-xl
                         font-[640] font-hoster text-slate-600 mt-10 md:mt-5 '>Unlimited Hosting Paket Personal</h1>
                       </div>
                    </div>
                    <div className='lg:flex lg:items-center lg:gap-2'>
                    <div className='pr-[200px]'>
                    <div className='flex items-center gap-3 ml-8 bg-[#FFE082] mr-[192px] px-3 mt-10 rounded-[4px] py-2 md:mt-8 lg:mr-0 w-full'>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-2-bar-1654245883.webp" className="object-cover w-3"  />
                        <p className='text-[#C77700] text-xs font-medium'>Intermediate</p>
                    </div>
                    </div>
                    
                    <div className='pr-[190px]'>
                    <div className='flex items-center gap-3 ml-8 bg-[#e0efff]  px-3 mt-2 rounded-[4px] w-full py-2 lg:mr-0 lg:mt-8 lg:ml-0 '>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-price-tag-1654247027.webp"  className="object-cover w-3" />
                        <p className='text-xs font-semibold text-[#0057B2] '>Diskon S.D 75%</p>
                    </div>
                    </div>
                    </div>
                    <p className='ml-8 mt-5 leading-7 text-[#7F8895] text-sm pr-[80px] md:pr-[60px] '>Layanan hosting terpopuler dengan jaminan uptime hingga 99.9%. Performa website aman, dan selalu aktif.</p>

                    <h3 className='ml-8 mt-8 text-xs text-slate-500 font-medium'>Mulai dari</h3>
                    <h1 className='ml-8 mt-2 font-semibold text-lg'><span className='text-[#ff9800] text-2xl font-semibold'>Rp 24.900</span>/bulan</h1>
                    <div className='px-8'>
                    <button className='bg-[#ff9800] rounded-full text-white w-full py-3  mt-8 shadow-md  shadow-yellow-100 font-medium hover:bg-yellow-600 ease-in duration-[400ms] '>
                        Beli Sekarang
                    </button>
                    </div>
                </div>
                </div>
                {/* card2 */}
                
                <div className='px-8'>
                <div className="  mt-10 border md:mx-0 w-full shadow-2xl rounded-2xl md:mr-1 overflow-hidden pb-5 ">
                    <h1 className='bg-[#01c0a6] text-white font-semibold text-xl text-center p-3' >Favorite Dedicated Resource</h1>
                    <div className='flex items-center ml-7 md:mt-5 gap-5'>
                        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-cloud-hosting-1654237451.webp" className=" w-[57.3px] h-[60px] mt-[40px] md:mt-2"  />
                        <div className='pr-[70px]'>
                        <h1 className='text-xl
                         font-[645] font-hoster text-slate-600 mt-6 md:mt-2'>Cloud Hosting Paket Premium</h1>
                        </div>
                    </div>
                    <div className='lg:flex lg:items-center lg:gap-2' >
                    <div className='pr-[200px]'>
                    <div className='flex items-center gap-3 ml-8 bg-[#FFE082] w-full px-3 mt-8 rounded-[4px] py-2 lg:mr-0'>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-2-bar-1654245883.webp"className="object-cover w-3"  />
                        <p className='text-[#C77700] text-xs font-medium'>Intermediate</p>
                    </div>
                    </div>
                    <div className='pr-[190px]'>
                    <div className='flex items-center gap-3 ml-8 bg-[#e0efff] w-full px-3 mt-2 rounded-[4px] py-2 lg:mr-0 lg:ml-0 lg:mt-8  '>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-price-tag-1654247027.webp" className="object-cover w-3" />
                        <p className='text-xs font-semibold text-[#0057B2]'>Diskon S.D 58%</p>
                    </div>
                    </div>
                    </div>
                    <p className='ml-8 mt-5 leading-7 text-[#7F8895] text-sm pr-[59px]  md:pr-4 '>Layanan hosting dengan dedicated resource terbaik. Paling sesuai untuk website skala besar Anda.</p>

                    <h3 className=' md:mt-[38px] ml-8 mt-8 text-xs text-[#7F8895] font-medium'>Mulai dari</h3>
                    <h1 className='ml-8 mt-2 font-semibold text-lg'><span className='text-[#ff9800] text-2xl font-semibold'>Rp 249.900</span> /bulan</h1>
                    <div className='px-8 '>
                    <button className='bg-[#ff9800] rounded-full text-white w-full py-3  mt-7 shadow-md  shadow-yellow-100 font-medium hover:bg-yellow-600 ease-in duration-[400ms] '>
                        Beli Sekarang
                    </button>
                    </div>
                </div>
                </div>
                {/* card3 */}
                <div className='px-8'>
                <div className=" mt-10 border w-full shadow-2xl rounded-2xl overflow-hidden pb-5 md:mr-1 lg:h-[510px] ">
                    <h1 className='bg-[#01c0a6] text-white font-semibold text-xl text-center p-3' >Best Trial Package</h1>
                    <div className='flex items-center ml-7  gap-6'>
                        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-promo-hosting-1654235588.webp" className=" w-[57.3px] h-[60px] mt-[50px] md:mt-8"  />
                        <h1 className='text-xl
                         font-[640] font-hoster text-slate-600 mr-[70px]  mt-8 '>Unlimited Hosting Paket Bayi</h1>
                    </div>
                    <div className='lg:flex lg:items-center lg:gap-2'>
                    <div className='pr-[200px]'>
                    <div className='flex items-center gap-3 ml-8 bg-[#FFE082] w-full px-3 mt-10 rounded-[4px] py-2 md:mt-8 md:mr-[205px] lg:mr-0'>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-2-bar-1654245883.webp" className="object-cover w-3"  />
                        <p className='text-[#C77700] text-xs font-medium'>Intermediate</p>
                    </div>
                    </div>
                    <div className='pr-[190px]'>
                    <div className='flex items-center gap-3 ml-8 bg-[#ADEBE3] w-full px-3 mt-2 rounded-[4px] py-2 md:mr-[185px] lg:mr-0 lg:ml-0 lg:mt-8 '>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-money-cash-1654247073.webp"  className="object-cover w-3" />
                        <p className='text-xs font-medium text-[#00897B]'>Paket Termurah</p>
                    </div>
                    </div>
                    </div>
                    <p className='ml-8 mt-5 leading-7 text-[#7F8895] text-sm pr-[59px]   md:pr-10   '>Layanan hosting termurah dari Niagahoster. Mudah digunakan oleh semua orang bahkan untuk pemula.</p>

                    <h3 className='ml-8 mt-8 text-xs text-[#7F8895] font-medium'>Mulai dari</h3>
                    <h1 className='ml-8 mt-2 font-semibold text-lg'><span className='text-[#ff9800] text-2xl font-semibold'>Rp 9.900</span> /bulan</h1>
                    <div className='px-8'>
                    <button className='bg-[#ff9800] rounded-full text-white py-3 w-full mt-5 shadow-md  shadow-yellow-100 font-medium hover:bg-yellow-600 ease-in duration-[400ms] '>
                        Beli Sekarang
                    </button>
                    </div>
                </div>
                </div>
                
                {/* card4 */}
                <div className='px-8'>
                <div className=" md:mx-0 mt-10 border w-full shadow-2xl rounded-2xl overflow-hidden  pb-5">
                    <h1 className='bg-[#01c0a6] text-white font-semibold text-xl text-center p-3' >Best VPS Product</h1>
                    <div className='flex items-center ml-7  gap-5'>
                        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-cloud-vps-1654237629.webp" className="w-[57.3px] h-[60px] mt-9 md:mt-7"  />
                        <h1 className='text-xl
                         font-[640] font-hoster text-slate-600 mt-4 pr-[60px]'>Cloud VPS Hosting</h1>
                    </div>
                    <div className='lg:flex lg:items-center lg:gap-2'>
                    <div className='pr-[200px]'>
                    <div className='flex items-center gap-3 ml-8 bg-[#FBB2B2] px-3 mt-10 rounded-[4PX] py-2 md:mt-6 md:mr-[240px] lg:mr-0'>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-3-bar-1654246995.webp" className="object-cover w-3"  />
                        <p className='text-[#A83232] text-xs font-medium'>Expert</p>
                    </div>
                    </div>
                    <div className='pr-[180px]'>
                    <div className='flex items-center gap-3 ml-8 bg-[#e0efff] w-full px-3 mt-2 rounded-[4px] py-2 md:mr-[175px] lg:mr-0 lg:ml-0 lg:mt-6'>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-price-tag-1654247027.webp"  className="object-cover w-3" />
                        <p className='text-xs font-semibold text-[#0057B2]'>Diskon S.D 28.6%</p>
                    </div>
                    </div>
                    </div>
                    <p className='ml-8 mt-5 leading-7 text-[#7F8895] text-sm pr-[30px]'>Kelola server kini jauh lebih fleksibel sesuai kebutuhan Anda. Dukungan fitur terlengkap dan termurah hanya di Niagahoster.</p>

                    <h3 className='ml-8 mt-8 text-xs text-slate-500 md:mt-6 font-medium'>Mulai dari</h3>
                    <h1 className='ml-8 mt-2 font-semibold text-lg'><span className='text-[#ff9800] text-2xl font-semibold'>Rp 99.900</span> /bulan</h1>
                    <div className='px-8'>
                    <button className='bg-[#ff9800] rounded-full text-white w-full py-3 mt-7 shadow-md  shadow-yellow-100 font-medium hover:bg-yellow-600 ease-in duration-[400ms] '>
                        Beli Sekarang
                    </button>
                    </div>
                </div>
                </div>
                {/* card5 */}
                <div className='px-8'>
                <div className=" mt-10 border mr-[110px] shadow-2xl rounded-2xl overflow-hidden pb-5 w-full ">
                    <h1 className='bg-[#01c0a6] text-white font-semibold text-xl text-center p-3' >Best Instant Websites</h1>
                    <div className='flex items-center ml-7 gap-6'>
                        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-website-instan-1654237680.webp" className="w-[57.3px] h-[60px] mt-8"  />
                        <h1 className='text-2xl
                         font-semibold  text-slate-600 mt-3'>Website Instan</h1>
                    </div>
                    <div className='lg:flex lg:items-center lg:gap-2'>
                    <div className='pr-[200px]'>
                    <div className='flex items-center gap-3 ml-8 bg-[#ADEBE3] px-3 mt-6 rounded-[4px] py-2 md:mr-[230px] lg:mr-0 '>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-1-bar-1654246976.webp" className="object-cover w-3"  />
                        <p className='text-[#00897B] text-xs font-medium'>Beginner</p>
                    </div>
                    </div>
                    <div className='pr-[190px]'>
                    <div className='flex items-center gap-3 ml-8 bg-[#e0efff] w-full px-3 mt-2 rounded-[4px] py-2 md:mr-[197px] lg:mr-0 lg:ml-0 lg:mt-6 '>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-price-tag-1654247027.webp"  className="object-cover w-3" />
                        <p className='text-xs font-medium text-[#0057B2]'>Instan Product</p>
                    </div>
                    </div>
                    </div>
                    <p className='ml-8 mt-5 leading-7 text-[#7F8895] text-sm pr-8'>Dapatkan website yang siap online dengan variasi tema website yang beragam sesuai dengan kebutuhanmu.</p>

                    <h3 className='ml-8 mt-8 text-xs text-[#7F8895] font-medium lg:mt-4 '>Mulai dari</h3>
                    <h1 className='ml-8 mt-2 font-semibold text-lg'><span className='text-[#ff9800] text-2xl font-semibold'>Rp 29.175</span> /bulan</h1>
                    <div className='px-8'>
                    <button className='bg-[#ff9800] rounded-full text-white py-3 mt-8 w-full shadow-md  shadow-yellow-100 font-medium hover:bg-yellow-600 ease-in duration-[400ms] '>
                        Beli Sekarang
                    </button>
                    </div>
                </div>
                </div>
                {/* card6 */}
                <div className='px-8'>
                <div className=" mt-10 border w-full shadow-2xl rounded-2xl overflow-hidden pb-5 md:mr-[0.1px] md:mx-0  ">
                    <h1 className='bg-[#01c0a6] text-white font-semibold text-xl text-center p-3' >Best WordPress Product</h1>
                    <div className='flex items-center ml-7  gap-6'>
                        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-simple-wordpress-1654237709.webp" className="w-[57.3px] h-[60px] mt-10 md:mt-8"  />
                        <h1 className='text-2xl
                         font-semibold  text-slate-600  mr-10 mt-5 '>Simple WordPress</h1>
                    </div>
                    <div className='lg:flex lg:items-center lg:gap-2'>
                   <div className='pr-[220px]'>
                   <div className='flex items-center gap-3 ml-8 bg-[#ADEBE3] w-full px-3 mt-8 rounded-[4px] py-2 md:mt-[25px] md:mr-[230px] lg:mr-0 '>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-signal-1-bar-1654246976.webp" className="object-cover w-3"  />
                        <p className='text-[#00897B] text-xs font-medium'>Beginner</p>
                    </div>
                   </div>
                   <div className='pr-[210px]'>
                   <div className='flex items-center gap-3 ml-8 bg-[#e0efff] w-full px-3 mt-2 rounded-[4px] py-2 md:mr-[220px] lg:mr-0 lg:ml-0 lg:mt-6 '>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-star-1654247009.webp"  className="object-cover w-3" />
                        <p className='text-xs font-medium text-blue-600'>WordPress</p>
                    </div>
                   </div>
                    </div>
                    <p className='ml-8 mt-5 leading-7 text-slate-400 text-sm pr-8'>Mengelola hosting makin mudah tanpa perlu pengetahuan teknis tentang layanan WordPress.</p>

                    <h3 className='ml-8 mt-8 text-xs text-slate-500 font-medium lg:mt-3 '>Mulai dari</h3>
                    <h1 className='ml-8 mt-2 font-semibold text-lg'><span className='text-[#ff9800] text-2xl font-semibold'>Rp 29.425</span> /bulan</h1>
                    <div className='px-8'>
                    <button className='bg-[#ff9800] rounded-full text-white w-full py-3 mt-8 shadow-md  shadow-yellow-100 font-medium hover:bg-yellow-600 ease-in duration-[400ms] '>
                        Beli Sekarang
                    </button>
                    </div>
                </div>
                </div>
                {/* card7 */}
               <div className='px-8'>
               <div className=" mt-10 border w-full shadow-2xl rounded-2xl overflow-hidden pb-5 md:mr-[0.1px] md:mx-0 ">
                    <h1 className='bg-[#01c0a6] text-white font-semibold text-xl text-center p-3' >Favorite Domain</h1>
                    <div className='flex items-center ml-7  gap-5'>
                        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-domain-com-squared.webp" className="w-[57.3px] h-[60px] mt-10"  />
                        <h1 className='text-2xl
                         font-semibold  text-slate-600 mt-5 '>Domain .COM</h1>
                    </div>
                    <div className='pr-[230px]'>
                    <div className='flex items-center gap-3 ml-8 bg-[#E0EFFF] w-full px-3 mt-5 rounded-[4px] py-2 lg:mr-[230px]'>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-star-1654247009.webp" className="object-cover w-3"  />
                        <p className='text-[#0057B2] text-xs font-medium'>Domain</p>
                    </div>
                    </div>
                    
                    <p className='ml-8 mt-5 leading-7 text-slate-400 text-sm pr-8'>Miliki ekstensi domain paling terpopuler di dunia dengan tawaran harga termurah di Indonesia!</p>

                    <h3 className='ml-8 mt-8 text-xs text-slate-500 font-medium'>Mulai dari</h3>
                    <h1 className='ml-8 mt-2 font-semibold text-lg'><span className='text-[#ff9800] text-2xl font-semibold'>Rp 115.000</span> /tahun</h1>
                    <div className='px-8'>
                    <button className='bg-[#ff9800] rounded-full text-white w-full py-3 mt-7 shadow-md  shadow-yellow-100 font-medium hover:bg-yellow-600 ease-in duration-[400ms] '>
                        Beli Sekarang
                    </button>
                    </div>
                </div>
               </div>
                {/* card8 */}
               <div className='px-8'>
               <div className=" mt-10 border w-full shadow-2xl rounded-2xl overflow-hidden pb-5 md:mr-[0.1px] md:mx-0 ">
                    <h1 className='bg-[#01c0a6] text-white font-semibold text-xl text-center p-3' >Favorite Domain</h1>
                    <div className='flex items-center ml-7  gap-5'>
                        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-domain-id-1654237752.webp" className="w-[57.3px] h-[60px] mt-10"  />
                        <h1 className='text-2xl
                         font-semibold  text-slate-600 mt-5 '>Domain .ID</h1>
                    </div>
                   <div className='pr-[230px]'>
                   <div className='flex items-center gap-3 ml-8 bg-[#E0EFFF] w-full px-3 mt-5 rounded-[4px] py-2 lg:mr-[230px] '>
                    <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-star-1654247009.webp" className="object-cover w-3"  />
                        <p className='text-[#0057B2] text-xs font-medium'>Domain</p>
                    </div>
                   </div>
                    
                    <p className='ml-8 mt-5 leading-7 text-slate-400 text-sm pr-8'>Miliki ekstensi domain Indonesia, dengan persyaratan mudah dan gratis proteksi privasi WHOis</p>

                    <h3 className='ml-8 mt-8 text-xs text-slate-500 font-medium'>Mulai dari</h3>
                    <h1 className='ml-8 mt-2 font-semibold text-lg'><span className='text-[#ff9800] text-2xl font-semibold'>Rp 230.000</span> /tahun</h1>
                    <div className='px-8'>
                    <button className='bg-[#ff9800] rounded-full text-white w-full py-3 mt-7 shadow-md  shadow-yellow-100 font-medium hover:bg-yellow-600 ease-in duration-[400ms] '>
                        Beli Sekarang
                    </button>
                    </div>
                </div>
               </div>
                {/* promo */}
                <div className='px-8'>
                <div className=" hidden md:hidden lg:block bg-[#0087ff] w-full text-white mt-10 border  shadow-2xl rounded-2xl overflow-hidden pb-5 text-center  ">
                <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/2022/arunika/icon-more-promo-1654237782.webp" className='mr-auto ml-auto w-[75px] h-[75px]  object-contain mt-6 '/>
        <h1 className='text-xl font-semibold mt-[70px] '>Lihat Semua Promo</h1>
        <p className='text-sm mt-4 md:px-8'>Temukan berbagai promo menarik dari Niagahoster di sini!</p>
                    
                    
                    

                    
                    <div className='px-8 mt-[120px]'>
                    <button className='bg-[#ff9800] rounded-full text-white w-full py-3 mt-7 shadow-md  shadow-yellow-100 font-medium hover:bg-yellow-600 ease-in duration-[400ms] '>
                        Beli Sekarang
                    </button>
                    </div>
                </div>
                </div>
          
    </div>
    </div>
  )
}

export default CardProductStatis