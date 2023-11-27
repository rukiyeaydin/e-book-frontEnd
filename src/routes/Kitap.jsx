import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Kitapicerik from '../components/kitapIcerik/Kitapicerik'

const Kitap = () => {
  return (
    <div>
      <Navbar />
      <Kitapicerik />
      <Footer />
    </div>
  )
}

export default Kitap
