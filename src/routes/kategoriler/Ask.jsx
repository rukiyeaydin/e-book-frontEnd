import React from 'react'
import Navbar from '../../components/Navbar'
import Kategorilericerik from '../../components/kategori/Kategorilericerik'
import Footer from '../../components/Footer'

const Ask = () => {
  const kategoriAdi = 'Aşk';

  return (
    <div>
      <Navbar />
      <Kategorilericerik categoryName={kategoriAdi}/>
      <Footer />
    </div>
  )
}

export default Ask
