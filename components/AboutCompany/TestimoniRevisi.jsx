import React, { useState } from 'react'
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai"
import { Transition } from "@headlessui/react"


 const testimoni = [
    {
        id:1,
        name: 'Apa itu web hosting?',
        desc: 'Web hosting adalah layanan penyimpanan data agar suatu website dapat diakses secara online. Data website ini ditampung dalam ruang penyimpanan bernama server web hosting yang selalu aktif 24 jam setiap hari. Kualitas layanan web hosting dapat menentukan kesuksesan bisnis maupun segala aktivitas website Anda. Tanpa layanan web hosting yang berkualitas, suatu website tidak mungkin dapat diakses dengan baik. Oleh karena itu, selalu gunakan layanan web hosting terbaik untuk website Anda',
    },
    {
        id:2,
        name: 'Mengapa saya harus menggunakan web hosting Indonesia?',
        desc: 'Web hosting Indonesia adalah layanan hosting dengan server yang berlokasi di Indonesia. Lokasi ini sangat berpengaruh terhadap performa suatu website, terutama jika target pengunjung website Anda juga berada di dalam wilayah Indonesia. Saat ini Niagahoster menggunakan Green Data Center Tier-4 DCI Indonesia berstandar internasional. Data center yang kami gunakan merupakan bagian dari Equinix, penyedia data center berkualitas tinggi terbaik di dunia dengan jaminan uptime hingga 99,99%',
    },
    {
        id:3,
        name: 'Apa yang dimaksud dengan Unlimited Hosting di Niagahoster?',
        desc: 'Unlimited Hosting Niagahoster tidak menetapkan batasan khusus dalam hal resource atau sumber daya website yang Anda butuhkan. Meskipun demikian, kami menetapkan Fair Usage Policy (FUP) atau kebijakan penggunaan secara adil yang berlaku untuk semua akun yang menggunakan paket Bayi, Pelajar, Personal, serta Bisnis. Penggunaan secara wajar sangat kami rekomendasikan, mengingat penggunaan resource CPU, RAM, serta disk space secara berlebihan dalam sebuah server dapat berdampak pada performa website milik pengguna lain yang tersimpan dalam server yang sama. Cek fitur Hosting Unlimited',
    },
    {
        id:4,
        name: 'Paket web hosting mana yang tepat untuk saya?',
        desc: 'Niagahoster menawarkan beragam paket hosting yang bisa Anda pilih sesuai kebutuhan. Oleh karena itu, kami sangat menyarankan Anda untuk mengetahui kebutuhan Anda terlebih dahulu. Apakah itu website company profile, blog pribadi, atau toko online. Tiap jenis website ini memerlukan keperluan resource yang beragam. Sebagai contoh, jika Anda menginginkan website instan sederhana dan langsung online, Anda bisa menggunakan paket Unlimited Hosting. Kemudian, untuk website dengan fitur yang bisa dikustomisasi sendiri, Anda dapat menggunakan Cloud VPS. Apabila Anda membutuhkan web hosting dengan dedicated server yang fully managed, Anda bisa memanfaatkan Cloud Hosting. Soal bantuan, Anda tidak perlu khawatir. Tim support kami siap membantu Anda kapan saja!',
    },
    {
        id:5,
        name: 'Apakah semua pembelian hosting mendapatkan domain gratis?',
        desc: 'Hanya di Niagahoster Anda bisa mendapatkan domain gratis dengan membeli web hosting. Gratis domain hanya berlaku untuk pembelian paket Unlimited Hosting (Pelajar, Personal, dan Bisnis) dan semua paket Cloud Hosting. Anda tinggal pilih, arahkan ke akun hosting, dan domain gratis Anda siap digunakan',
    },
    {
        id:6,
        name: 'Jika sudah memiliki website, apakah saya bisa transfer web hosting ke Niagahoster?',
        desc: 'Transfer hosting tidaklah rumit. Tim support kami siap membantu memindahkan hosting Anda ke Niagahoster kapan pun Anda inginkan. Caranya, Anda hanya perlu mengisi formulir dan permintaan transfer akan kami proses secepatnya. Transfer hosting Anda ke layanan Niagahoster sekarang dan dapatkan diskon hingga 50%! Silakan hubungi tim support kami untuk mendapatkan informasi lebih lengkap',
    },
    
 ]

const TestimoniRevisi = () => {

    
    const [enabled, setEnabled] = useState(false)

  return (
    <div className='mb-[90px]'>
        <h1 className='text-2xl font-bold text-slate-600 pl-5 mt-[70px] md:mt-[120px] md:text-start md:text-4xl  md:ml-[60px] lg:text-center'>Pertanyaan yang sering diajukan</h1>

        {testimoni.map(({id,name,desc}) => {
            return (
                <div key={id} className='bg-[#f5faff] mx-5 md:mx-[90px] mt-[65px]   rounded-xl py-2  lg:mr-[220px] lg:ml-[270px]'>
         <div className='flex items-center justify-between pb-5 '>
         <h3 className='font-medium pl-5 mt-[20px] font-nunito '>{name}</h3>
         
         <div className='pt-5 pr-6' onClick={()=> setEnabled(!enabled ) && setEnabled(enabled)}>
          {enabled  ?  <div><AiOutlineMinus className='text-[#007aff] text-xl cursor-pointer ' /></div> :<div> <AiOutlinePlus className='text-[#007aff] text-xl cursor-pointer '  /></div>  
          }</div>
         </div>
          <Transition
            show={enabled}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
          <div className='h-[1px] bg-slate-200 mx-5 mt-5 px-5'></div>
         <div className={`pl-5 pr-3 text-slate-600 mt-4 `}>{desc}</div>
          </Transition>
        </div>
            )
        })}
        <div className='bg-[#f5faff] mx-5 rounded-xl md:mx-[90px] lg:mr-[220px] lg:ml-[270px]'>
         <div className=' flex items-center justify-between pb-6 mt-8 '>
         <h3 className='font-medium pl-5 mt-[10px] pt-5'>Apa saja layanan web hosting Niagahoster?</h3>
         <div className='pt-5 pr-6' onClick={()=> setEnabled(!enabled)}>
          {enabled ?<AiOutlineMinus className='text-blue-600 text-xl  cursor-pointer' /> : <AiOutlinePlus className='text-blue-600 text-xl  cursor-pointer'  />
          }</div>
         </div>
          <Transition
          show={enabled}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >
          <div className='h-[1px] bg-slate-200 mx-5 mt-5 px-5 '></div>
         <div className={`pl-5 pr-3 text-slate-600 mt-4 `}>
          <div className='mt-10 '>
          <h1 className='text-black font-medium'>Unlimited Hosting</h1>
          <p className='mt-1 text-slate-500 pr-[70px]'>Unlimited hosting merupakan layanan hosting Niagahoster yang paling laris. Niagahoster menawarkan harga yang sangat terjangkau untuk paket ini, mulai dari Rp 9.900,- per bulan.</p>
          <h1 className='text-black font-medium mt-6'>Cloud VPS</h1>
          <p className='mt-1 text-slate-500 pr-[70px] '>Selain hosting murah unlimited, Niagahoster juga memiliki paket Virtual Private Server (VPS). Di sini Anda memiliki keleluasaan membangun website sendiri hingga level konfigurasi teknis servernya. Paket Cloud VPS Niagahoster ini bisa Anda dapatkan mulai Rp 99.900,- per bulan</p>
          <h1 className='text-black font-medium mt-6'>Cloud Hosting</h1>
          <p className='mt-1 text-slate-500 pr-[70px] pb-10 '>Nikmati performa dedicated server yang bisa menampung trafik tinggi dengan pengelolaan mudah seperti shared hosting. Didukung LiteSpeed, WordPress Accelerator, dan domain gratis, website Anda bisa memberikan performa terbaik dari kecepatan dan daya tampung.</p>
          </div>
         </div>
          </Transition>
        </div>
        
    </div>
  )
}

export default TestimoniRevisi