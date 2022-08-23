import Image from 'next/image'
import React from 'react'
import MainLogo from "../../assets/MainLogo.png"
import Icon from "./Icon"



const Profile = () => {
  return (
    <div className='lg:mr-[60px]'>
        <div className='flex gap-3 items-center lg:mt-0 lg:ml-0  mt-8 '>
        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/www/assets/images/2021/logo/nh-logo-white.svg" />
        
        </div>
        <div className='grid gap-6 mt-5  mr-7 text-white text-sm md:mr-[120px] md:mt-6 lg:mr-0 lg:leading-6 lg:ml-0'>
        <p  >Misi Kami adalah membantu jutaan orang memanfaatkan potensi yang ada di internet untuk membangun kesuksesan online.</p>
        <p>Jl. Palagan Tentara Pelajar No. 81 Jongkang, Sariharjo, Ngaglik, Sleman, Daerah Istimewa Yogyakarta, 55581</p>
        <div>
        <h3>Telepon: 021-50861682</h3>
        <h3>WhatsApp: 0895395186038</h3>
        <h3>Telegram: @niagahost_bot</h3>
        </div>
        </div>
      <Icon/>
    </div>
  )
}

export default Profile