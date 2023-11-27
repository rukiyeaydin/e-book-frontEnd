import React from 'react'
import Navbar from '../../components/Navbar'
import Kategorilericerik from '../../components/kategori/Kategorilericerik'
import Footer from '../../components/Footer'

const Mizah = () => {
  const kategoriAdi= 'Mizah';

  return (
    <div>
      <Navbar />
      <Kategorilericerik categoryName={kategoriAdi}/>
      <Footer />
    </div>
  )
}

export default Mizah
