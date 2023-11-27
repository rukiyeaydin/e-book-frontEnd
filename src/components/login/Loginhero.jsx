import React from 'react'
import './login.css'
import authorclub from './authorclub.png'

const Loginhero = () => {
  return (
    <div className='loginhero'>
      <img src={authorclub} alt="authorclub img" className='lhimg'/>
      <div className="lginputs">
      <h3 style={{marginBottom:"10px"}}>Giriş Yap</h3>
        <input type="text" placeholder='Email' className='lhi1'/>
        <input type="text" placeholder='Şifre' className='lhi2'/>
        <button className='lhbuton'>Giriş yap</button>
        <div className="">
          <p className='lhhy'>Hesabın yok mu? <a href="/signup">Kaydol</a></p>
        </div>
      </div>
    </div>
  )
}

export default Loginhero
