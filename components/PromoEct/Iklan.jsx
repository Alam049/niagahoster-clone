import Image from 'next/image'
import React from 'react'
import People from "../../assets/people.jpg"
import IklanIMG from "../../assets/iklan.png"
import IklanIMG2 from "../../assets/iklan2.png"
import IklanIMG3 from "../../assets/iklan3.png"

const Iklan = () => {
  return (
    <div>
        <div className='bg-[#0087ff] text-white mt-[70px] rounded-xl text-center pt-6 shadow-lg shadow-slate-400 mx-5 md:rounded-3xl md:mt-[135px] md:mx-[100px] lg:mx-[60px] lg:py-8'>
       <div className='lg:flex lg:items-center'>
       <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2022/arunika/banner/product-recommendation.webp"   className='object-cover block ml-auto mr-auto lg:order-2 lg:w-[w-510px] lg:pr-10'/>
       <div className='px-10 text-start'>
       <h1 className='text-2xl font-semibold mt-10 md:mt-0 lg:text-4xl '>Rekomendasi Produk Sesuai Kebutuhan Anda</h1>
        <p className=' mt-4 md:mt-8 md:pr-3'>Masih bingung untuk memilih produk? Niagahoster siap membantu memilih produk yang paling tepat khusus untuk Anda. Cukup dengan menjawab kuisioner saja!</p>
        <div>
        <button className='mt-10 mb-6 font-semibold bg-[#ff9800] px-[50px] py-3 rounded-full hover:bg-yellow-600 ease-in duration-[400ms] shadow-sm shadow-yellow-500 md:px-[250px] lg:px-10'>
            Coba Sekarang
        </button>
        </div>
       </div>

        
       </div>
    </div>
    <div className='lg:flex lg:items-center '>
    <div className='text-center mt-[65px] md:mt-[90px] lg:mt-[140px]'>
    <img  src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/banner/best-price.webp" className="object-cover md:px-[100px] lg:px-0 lg:pl-[100px] lg:w-[1900px] " />
    </div>
    <div className='text-start px-10 mt-3 md:mt-10 lg:mt-[100px]'>
      <h3 className='text-[#535961] font-semibold text-lg md:font-bold '>Harga Terbaik</h3>
      <h1 className='text-2xl font-semibold text-[#3A4166] mt-4 lg:text-4xl '>Biaya Hemat, Kualitas Hebat</h1>
      <p className='text-[#535961] mt-6 md:pr-5'>Anda bisa memiliki website siap pakai hanya dengan sedikit biaya. Fitur yang lengkap akan memudahkan proses pembuatan website, mulai dari Auto-Install WordPress, cPanel, hingga SSL gratis. Jaminan server uptime 99,99% memungkinkan website Anda selalu online setiap saat.</p>
    </div>
    </div>
    <div className='lg:flex lg:items-center lg:mt-[50px] lg:pl-5'>
    <div className='text-center lg:mt-10 mt-[65px] md:mt-[110px] lg:order-2'>
    <img  src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/banner/best-performance.webp"  className="object-contain md:px-10 lg:px-0 lg:w-[1500px] lg:pr-[60px] " />
    </div>
    <div className='text-start px-10 md:mt-8 '>
      <h3 className='text-[#535961] font-semibold text-lg md:text-xl '>Performa Luar Biasa</h3>
      <h1 className='text-2xl font-semibold text-[#3A4166] mt-4 lg:text-[45px] lg:leading-[50px] '>Prioritas Kecepatan dan Keamanan</h1>
      <p className='text-[#535961] mt-6 pr-10 md:pr-[50px]'>Dukungan LiteSpeed Web Server membuat website Anda lebih cepat diakses. Tidak hanya itu saja, teknologi keamanan Imunify360 memungkinkan website Anda terlindung dari serangan hacker, malware, dan virus berbahaya.</p>
    </div>
    </div>
    <div className='lg:flex lg:items-center lg:pl-10 lg:mt-[60px]'>
    <div className='text-center mt-[65px] md:mt-[110px]'>
    <img  src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/banner/customer-service.webp"  className="object-contain md:px-10 lg:w-[1600px] " />
    </div>
    <div className='text-start px-10 md:mt-[40px]'>
      <h3 className='text-[#535961] font-semibold text-lg md:font-bold'>Layanan Pelanggan Istimewa</h3>
      <h1 className='text-2xl font-semibold text-[#3A4166] mt-4 lg:text-4xl '>Dukungan Teknis Nomor 1 di Indonesia</h1>
      <p className='text-[#535961] mt-6 pr-4 md:pr-6'>Hubungi Customer Success Agent Niagahoster kapan saja ketika terjadi permasalahan pada website Anda. Tidak perlu menunggu lama, permasalahan Anda akan diselesaikan secara cepat dan real-time melalui live-chat Intercom.</p>
    </div>
    </div>
    <div className=''>
    <div className='bg-[#0087ff] text-white mt-[70px] rounded-xl text-center pt-6 shadow-lg shadow-slate-400 mx-5 md:mx-[110px] md:mt-[150px] md:rounded-3xl lg:flex lg:items-center '>
        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/arunika/banner/garansi-30-hari.webp"  className='object-cover lg:w-[500px]'/>
       <div className='px-10 text-start md:px-5 mt-[60px] md:mt-7 '>
        <h3 className='text-lg font-semibold md:text-xl '>Jaminan Layanan Terbaik</h3>
       <h1 className='text-2xl font-semibold mt-6 lg:text-4xl lg:pr-5 '>Garansi 30 Hari Uang Kembali</h1>
        <p className=' mt-8 md:mt-7 md:pb-[60px] lg:pr-10 '>Tidak puas dengan layanan hosting Niagahoster? Beritahukan kepada kami dalam kurun 30 hari setelah aktivasi. Uang Anda akan kembali sepenuhnya.</p>
       </div>

       
        </div>
    </div>
    </div>
  )
}

export default Iklan