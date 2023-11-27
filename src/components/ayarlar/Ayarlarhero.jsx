import React, { useState } from 'react'
import './ayarlar.css'
import { BiSolidEdit } from 'react-icons/bi'

const Ayarlarhero = () => {
  const [kullaniciAdi, setKullaniciAdi] = useState('rukiyeaydin');
  const [isKullaniciAdiClicked, setIsKullaniciAdiClicked] = useState(false);
  const [mail, setMail] = useState('rukiyeaydinlive@gmail.com');
  const [isMailClicked, setIsMailClicked] = useState(false);

  const handleKullaniciAdiEdit = () => {
    if (isKullaniciAdiClicked) {
      setIsKullaniciAdiClicked(false);
    } else {
      setIsKullaniciAdiClicked(true);
    }
  }

  const handleMailEdit = () =>{
    if(isMailClicked){
      setIsMailClicked(false);
    } else{
      setIsMailClicked(true);
    }
  }

  return (
    <div className='ayarlarhero'>
      <p className='ahbaslik'>Ayarlar</p>
      <div className="ahblock">
        <div className="ahun">
          <p className='ahleft'>Kullanıcı adı</p>
          <div className="ahalt">
            {/* <p className='ahright'>{kullaniciAdi}</p> */}
            <div className="ahright">
              {isKullaniciAdiClicked ? 
              <input type="text" className='ahrightinput' value={kullaniciAdi}  onChange={e => setKullaniciAdi(e.target.value)} /> : 
              <input type="text" className='ahrightinputsec' value={kullaniciAdi} readOnly/>}
            </div>
              {isKullaniciAdiClicked ? <button onClick={handleKullaniciAdiEdit} className='ahkaydetedit'>kaydet</button> : 
              <BiSolidEdit className='ahicon' onClick={handleKullaniciAdiEdit}/>}
          </div>
        </div>
        <div className="ahmail">
          <p className='ahleft'>Email</p>
          <div className="ahalt">
            {/* <p className='ahright'>rukiyeaydinliverukiyeaydinliverukiyeaydinlive@gmail.com</p> */}
            <div className="ahright">
              {isMailClicked ? 
              <input type="text" className='ahrightinput' value={mail}  onChange={e => setMail(e.target.value)} /> : 
              <input type="text" className='ahrightinputsec' value={mail}  readOnly /> }
            </div>
            {isMailClicked ? <button onClick={handleMailEdit} className='ahkaydetedit'>kaydet</button> : 
            <BiSolidEdit className='ahicon' onClick={handleMailEdit}/>}
          </div>
        </div>
        <div className="ahbd">
          <p className='ahleft'>Profil resmi</p>
          <div className="ahalt">
            <div className='ahright'><input type="file" className='ahfile'></input></div>
            <BiSolidEdit className='ahicondif'/>
          </div>
        </div>
        <button className='ahkaydet'>Kaydet</button>
      </div>

    </div>
  )
}

export default Ayarlarhero
