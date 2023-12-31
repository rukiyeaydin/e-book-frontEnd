import React from 'react'
import './kategorihero.css'
import { Link } from 'react-router-dom'

const Kategorihero = () => {

  return (
    
    <div className="kategoriicerikall">
      <div className="kategorilertrio">
        <Link className='kategorilnk' to='/kategoriler/aksiyon' target='_top' id='aksiyon'>#Aksiyon</Link>
        <Link className='kategorilnk' to='/kategoriler/aksiyon' target='_top' id='ask'>#Aşk</Link>
        <Link className='kategorilnk' to='/kategoriler/aksiyon' target='_top' id='bilimkurgu'>#Bilim Kurgu</Link>
      </div>
      <div className="kategorilertrio">
        <Link className='kategorilnk' to='/kategoriler/aksiyon' target='_top' id='fantastik'>#Fantastik</Link>
        <Link className='kategorilnk' to='/kategoriler/aksiyon' target='_top' id='korku'>#Korku</Link>
        <Link className='kategorilnk' to='/kategoriler/aksiyon' target='_top' id='macera'>#Macera</Link>
      </div>
      <div className="kategorilertrio">
      </div>
      <div className="kategorilertrio">
        <Link className='kategorilnk' to='/kategoriler/aksiyon' target='_top' id='mizah'>#Mizah</Link>
        <Link className='kategorilnk' to='/kategoriler/aksiyon' target='_top' id='tarih'>#Tarih</Link>
        <Link className='kategorilnk' to='/kategoriler/aksiyon' target='_top' id='siir'>#Şiir</Link>
      </div>
    </div>
  )
}

export default Kategorihero
