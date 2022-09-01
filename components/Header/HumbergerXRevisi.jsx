import React, { useRef, useState } from 'react'
import HumbergerItem from './HumbergerItem'
import IconBar from './IconBar'
import Link from 'next/link'


const data = [
    {
        id:1,
        title:"Hosting",
        image1:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-unlimited-hosting-1658221943.webp",
        product1:"Unlimited Hosting",
        desc1:"Paket hosting terbaik & terlengkap",
        image2:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-cloud-hosting-1658221728.webp",
        product2:"Cloud Hosting",
        desc2:"Performa hebat & stabil untuk traffic tinggi",
        image3:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-wordpress-hosting-1658222020.webp",
        product3:"WordPress Hosting",
        desc3:"Optimal untuk website WordPress",
        image4:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-simple-wordpress-1658221879.webp",
        product4:"Simple WordPress",
        desc4:"Kelola WordPress simple & praktis",
        image5:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-email-hosting-1658221842.webp",
        product5:"Email Hosting",
        desc5:"Solusi kirim email profesional",
        image6:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-transfer-hosting-1658221924.webp",
        product6:"Transfer Hosting",
        desc6:"Pindah hosting ke Niagahoster",

        
    },
    {
        id:2,
        title:"VPS",
        image1:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-unlimited-hosting-1658221943.webp",
        product1:"Cloud VPS KVM",
        desc1:"Performa Stabil & Virtualisasi Kernel",
        image2:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-cloud-hosting-1658221728.webp",
        product2:"Cloud VPS Hosting",
        desc2:"Layanan VPS hemat",
        image3:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-wordpress-hosting-1658222020.webp",
        product3:"CyberPanel VPS Hosting",
        desc3:"Panel Praktis & Teknologi LiteSpeed",
        image4:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-simple-wordpress-1658221879.webp",
        product4:"VPS cPanel",
        desc4:"Teknologi Server & cPanel Terbaik",
        image5: null,
        product5: null,
        desc5: null,
        image6: null,
        product6: null,
        desc6: null,
        


    },
    {
        id:3,
        title:"Domain",
        image1:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-unlimited-hosting-1658221943.webp",
        product1:"Cari Domain",
        desc1:"Temukan domain impian Anda di sini",
        image2:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-cloud-hosting-1658221728.webp",
        product2:"Domain ID",
        desc2:"Pendaftaran nama domain Indonesia",
        image3:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-wordpress-hosting-1658222020.webp",
        product3:"Check WHOIS",
        desc3:"Lihat info WHOIS website Anda",
        image4:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-simple-wordpress-1658221879.webp",
        product4:"Transfer Domain",
        desc4:"Pindah domain ke Niagahoster",
        image5: null,
        product5: null,
        desc5: null,
        image6: null,
        product6: null,
        desc6: null,
        


    },
    {
        id:4,
        title:"Website",
        image1:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-unlimited-hosting-1658221943.webp",
        product1:"Website Instan",
        desc1:"Website kilat siap online",
        image2:"https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/menu-cloud-hosting-1658221728.webp",
        product2:"Jasa Pembuatan Website",
        desc2:"Website idaman sesuai kebutuhan",
        image3: null,
        product3: null,
        desc3: null,
        image4: null,
        product4: null,
        desc4: null,
        image5: null,
        product5: null,
        desc5: null,
        image6: null,
        product6: null,
        desc6: null,
        


    },
    
]

const HumbergerXRevisi = ({enabled}) => {

    const [clicked, setClicked] = useState('0')

    const contentAnimation = useRef()

        const handleToggle = (id) => {
            if (clicked === id) {
                return setClicked('0')
            }
            setClicked(id)
        }



  return (
    <div className={` ${enabled ? 'active' : ""}`}>
        <ul  ref={contentAnimation} className={`answer_wrapper h-0 overflow-hidden ${enabled ? 'open' : ""}  `} style={ enabled ? {height: contentAnimation.current.scrollHeight} : {height: "0px"}} >
            {data.map((humbergerData, id) => (
                <HumbergerItem key={id} humbergerData={humbergerData} onToggle={() => handleToggle(id)} 
                active={clicked === id}
                />
            ))}
            <div className='bg-[#f5faff] xl:bg-[#c52544] pb-5'>
          <Link href="">
          <h3 className='font-bold text-lg text-slate-600 pl-5  pt-5 cursor-pointer '>Promo</h3>
          </Link>
          <IconBar/>
          </div>
        </ul>
    </div>
  )
}

export default HumbergerXRevisi