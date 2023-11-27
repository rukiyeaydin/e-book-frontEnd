import React, { useState } from 'react'
import './yaz.css'
import { Link } from 'react-router-dom'
import { BsFillImageFill } from 'react-icons/bs'

const Yazhero = () => {
  const [data, setData] = useState('Aksiyon');

  const handleInputChange = (event) => {
    setData(event.target.value);
  }

  return (
    <div className='yazhero'>
      <div className="yhimg">
        <img src="" alt="" className='yhimage'/>
        <div className="yhimgicerik">
          <BsFillImageFill className='yhicon'/>
          <p>Kapak resmi yükle</p>
        </div>
      </div>
      <div className="yhcontext">
        <p className='yhdetaylar'>Detaylar</p>
        <div className="yhcontextbaslik">
          <p className='yhbaslik'>Başlık</p>
          <input type="text" placeholder='Kitap başlığı' className='yhinput'/>
        </div>
        <div className="yhdesc">
          <p className='yhbaslik'>Kitabın kısa açıklaması</p>
          <textarea type="text" placeholder='Açıklama' className='yhinput2'/>
        </div>
        <div className="yhcategory">
          <p className='yhbaslik'>Kitabın kategorisi</p>
          <form className='yhform'>
            <select value={data} onChange={handleInputChange}>
              <option value="Aksiyon">Aksiyon</option>
              <option value="Aşk">Aşk</option>
              <option value="Bilim kurgu">Bilim kurgu</option>
              <option value="Fantastik">Fantastik</option>
              <option value="Korku">Korku</option>
              <option value="Macera">Macera</option>
              <option value="Mizah">Mizah</option>
              <option value="Şiir">Şiir</option>
              <option value="Tarih">Tarih</option>
            </select>
          </form>
        </div>
        <Link to="/kitapno"><button className='yhbuton'>Sonraki Adım</button></Link>
      </div>
    </div>
  )
}

export default Yazhero
