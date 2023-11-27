import React from 'react'
import './dropdown.css'
import { Link } from 'react-router-dom'

const Dropdown = () => {
  return (
    <div className="dropdown">
      <ul>
        <Link className='dlink' to="/profil"><li>Profilim</li></Link>
        <hr />
        <Link className='dlink' to="/ayarlar"><li>Ayarlar</li></Link>
        <hr />
        <Link className='dlink'><li>Çıkış yap</li></Link>
      </ul>
    </div>
  )
}

export default Dropdown
