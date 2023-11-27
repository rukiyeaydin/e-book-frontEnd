import React from 'react'
import './signup.css'

const Signuphero = () => {
  return (
    <div className='signuphero'>
        <div className="lginputs">
            <h2 className='aramizakatil'>Aramıza Katıl</h2>
            <input type="text" placeholder='Ad - Soyad' className='lhi1'/>
            <input type="text" placeholder='Kullanıcı adı' className='lhi1'/>
            <input type="text" placeholder='Email' className='lhi1'/>
            <input type="text" placeholder='Şifre' className='lhi1'/>
        </div>
        <div className="shfile">
          <p className='shfilep'>Profil resmi</p>
          <input type="file" onChange={(e) => setProfilResmi(e.target.value)}/>
        </div>
        <button className='lhbuton'>Kaydol</button>
        <p className='lhhy'>Hesabın var mı? <a href="/login">Giriş yap</a></p>
    </div>
  )
}

export default Signuphero
