import React, { useState } from 'react'
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai"

 const testimoni = [
    {
        id: 1,
        title: "Apa itu web hosting?",
        desc:"Web hosting adalah layanan penyimpanan data agar suatu website dapat diakses secara online. Data website ini ditampung dalam ruang penyimpanan bernama server web hosting yang selalu aktif 24 jam setiap hari. Kualitas layanan web hosting dapat menentukan kesuksesan bisnis maupun segala aktivitas website Anda. Tanpa layanan web hosting yang berkualitas, suatu website tidak mungkin dapat diakses dengan baik. Oleh karena itu, selalu gunakan layanan web hosting terbaik untuk website Anda"
    },
    {
        id: 2,
        title: "Mengapa saya harus menggunakan web hosting Indonesia",
        desc:"Web hosting Indonesia adalah layanan hosting dengan server yang berlokasi di Indonesia. Lokasi ini sangat berpengaruh terhadap performa suatu website, terutama jika target pengunjung website Anda juga berada di dalam wilayah Indonesia. Saat ini Niagahoster menggunakan Green Data Center Tier-4 DCI Indonesia berstandar internasional. Data center yang kami gunakan merupakan bagian dari Equinix, penyedia data center berkualitas tinggi terbaik di dunia dengan jaminan uptime hingga 99,99%"
    },
    {
        id: 3,
        title: "Apa yang dimaksud dengan Unlimited Hosting di Niagahoster?",
        desc:"Unlimited Hosting Niagahoster tidak menetapkan batasan khusus dalam hal resource atau sumber daya website yang Anda butuhkan. Meskipun demikian, kami menetapkan Fair Usage Policy (FUP) atau kebijakan penggunaan secara adil yang berlaku untuk semua akun yang menggunakan paket Bayi, Pelajar, Personal, serta Bisnis. Penggunaan secara wajar sangat kami rekomendasikan, mengingat penggunaan resource CPU, RAM, serta disk space secara berlebihan dalam sebuah server dapat berdampak pada performa website milik pengguna lain yang tersimpan dalam server yang sama. Cek fitur Hosting Unlimited"
    },
    {
        id: 4,
        title: "Paket web hosting mana yang tepat untuk saya?",
        desc:"Niagahoster menawarkan beragam paket hosting yang bisa Anda pilih sesuai kebutuhan. Oleh karena itu, kami sangat menyarankan Anda untuk mengetahui kebutuhan Anda terlebih dahulu. Apakah itu website company profile, blog pribadi, atau toko online. Tiap jenis website ini memerlukan keperluan resource yang beragam. Sebagai contoh, jika Anda menginginkan website instan sederhana dan langsung online, Anda bisa menggunakan paket Unlimited Hosting. Kemudian, untuk website dengan fitur yang bisa dikustomisasi sendiri, Anda dapat menggunakan Cloud VPS. Apabila Anda membutuhkan web hosting dengan dedicated server yang fully managed, Anda bisa memanfaatkan Cloud Hosting. Soal bantuan, Anda tidak perlu khawatir. Tim support kami siap membantu Anda kapan saja!"
    },
    {
        id: 5,
        title: "Apakah semua pembelian hosting mendapatkan domain gratis?",
        desc:"Hanya di Niagahoster Anda bisa mendapatkan domain gratis dengan membeli web hosting. Gratis domain hanya berlaku untuk pembelian paket Unlimited Hosting (Pelajar, Personal, dan Bisnis) dan semua paket Cloud Hosting. Anda tinggal pilih, arahkan ke akun hosting, dan domain gratis Anda siap digunakan"
    },
    {
        id: 6,
        title: "Jika sudah memiliki website, apakah saya bisa transfer web hosting ke Niagahoster?",
        desc:"Transfer hosting tidaklah rumit. Tim support kami siap membantu memindahkan hosting Anda ke Niagahoster kapan pun Anda inginkan. Caranya, Anda hanya perlu mengisi formulir dan permintaan transfer akan kami proses secepatnya. Transfer hosting Anda ke layanan Niagahoster sekarang dan dapatkan diskon hingga 50%! Silakan hubungi tim support kami untuk mendapatkan informasi lebih lengkap"
    }
    
]



const DataTestimoni = () => {
    const [enabled,setEnabled] = useState(true)


  return (
    <div>
        {testimoni.map(({ id,title,desc }) => {
            return (
                <div  key={id} className='bg-[#f5faff] mx-5'>
         <div className=' relative '>
         <h3 className='font-medium pl-5 mt-[80px] pt-5'>{title}</h3>
         <div onClick={()=> setEnabled(!enabled)}>
          {enabled ?<AiOutlinePlus className='text-blue-600 text-xl absolute top-5 right-10'  /> : <AiOutlineMinus className='text-blue-600 text-xl absolute top-5 right-10' />
          }</div>
         </div>
          <div className='h-[1px] bg-slate-200 mx-5 mt-5 px-5'></div>
         <p className={`pl-5 pr-3 text-slate-600 mt-4 ${!enabled && "hidden"}`}>{desc}</p>
        </div>
            )
        })}
    </div>
  )
}

export default DataTestimoni