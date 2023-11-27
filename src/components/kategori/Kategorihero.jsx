import React from 'react'
import './kategorihero.css'
import { Link } from 'react-router-dom'
import aksiyon from '../../images/kategoriler/aksiyon.png'
import ask from '../../images/kategoriler/ask.png'
import bilimkurgu from '../../images/kategoriler/bilimkurgu.png'
import fantastik from '../../images/kategoriler/fantastik.png'
import korku from '../../images/kategoriler/korku.png'
import macera from '../../images/kategoriler/macera.png'
import mizah from '../../images/kategoriler/mizah.png'
import tarih from '../../images/kategoriler/tarih.png'
import siir from '../../images/kategoriler/siir.png'

const Kategorihero = () => {
  return (
    <div className="kategorilerall">
      <div className='kategoriler'>
        <Link to='/kategoriler/aksiyon' target='_top' className="kategori">
          <img src={aksiyon} alt="aksiyon" />
          <div className="overlay">
            <p className='text'>Aksiyon</p>
          </div>
        </Link>
        <Link to='/kategoriler/ask' target='_top' className="kategori">
          <img src={ask} alt="ask" />
          <div className="overlay">
            <p className='text'>Aşk</p>
          </div>
        </Link>
        <Link to='/kategoriler/bilimkurgu' target='_top' className="kategori">
          <img src={bilimkurgu} alt="bilim kurgu" />
          <div className="overlay">
            <p className='text' style={{width:'200px'}}>Bilim Kurgu</p>
          </div>
        </Link>
      </div>
      <div className='kategoriler'>
        <Link to='/kategoriler/fantastik' target='_top' className="kategori">
          <img src={fantastik} alt="fantastik" />
          <div className="overlay">
            <p className='text'>Fantastik</p>
          </div>
        </Link>
        <Link to='/kategoriler/korku' target='_top' className="kategori">
          <img src={korku} alt="korku" />
          <div className="overlay">
            <p className='text'>Korku</p>
          </div>
        </Link>
        <Link to='/kategoriler/macera' target='_top' className="kategori">
          <img src={macera} alt="macera" />
          <div className="overlay">
            <p className='text'>Macera</p>
          </div>
        </Link>
      </div>
      <div className='kategoriler'>
        <Link to='/kategoriler/mizah' target='_top' className="kategori">
          <img src={mizah} alt="mizah" />
          <div className="overlay">
            <p className='text'>Mizah</p>
          </div>
        </Link>
        <Link to='/kategoriler/siir' target='_top' className="kategori">
          <img src={siir} alt="siir" />
          <div className="overlay">
            <p className='text'>Şiir</p>
          </div>
        </Link>
        <Link to='/kategoriler/tarih' target='_top' className="kategori">
          <img src={tarih} alt="tarih" />
          <div className="overlay">
            <p className='text'>Tarih</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Kategorihero
