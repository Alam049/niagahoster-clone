import Head from 'next/head'
import Header1 from "../components/Header/Header"
import Domain from "../components/Domain/Domain"
import Layanan from "../components/Layanan/Layanan"
import Product from "../components/Product/Product"
import Iklan from "../components/PromoEct/Iklan"
import Desc from "../components/AboutCompany/Description"
import Footer from "../components/Footer/Footer"
import ScroolChat from "../components/ScroolChat/ScroolChat"

import HeaderRevisi from "../components/Header/HeaderNavbar"
import {Header} from "../components/HeaderHumberger/Header"




const Home = () => {
  return (
    <div className="">
      <Head>
        <title>NiagaHoster Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* <ExampleIMG/> */}
     <div className='bg-[#c52544] xl:hidden'>
     <Header/>
     </div>
      <Header1 />
      
      <Domain/>
      <Product/>
      <Iklan/>
      <Desc/>
      <Footer/>
      <ScroolChat/>
     
    </div>
  )
}

export default Home
