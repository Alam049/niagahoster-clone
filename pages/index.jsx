import Head from 'next/head'
import Header from "../components/Header/Header"
import Domain from "../components/Domain/Domain"
import Layanan from "../components/Layanan/Layanan"
import Product from "../components/Product/Product"
import Iklan from "../components/PromoEct/Iklan"
import Desc from "../components/AboutCompany/Description"
import Footer from "../components/Footer/Footer"
import ScroolChat from "../components/ScroolChat/ScroolChat"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>NiagaHoster Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Domain/>
      <Layanan/>
      <Product/>
      <Iklan/>
      <Desc/>
      <Footer/>
      <ScroolChat/>
     
    </div>
  )
}

export default Home
