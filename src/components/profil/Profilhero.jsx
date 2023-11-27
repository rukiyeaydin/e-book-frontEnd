import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './profilhero.css'
import blackaurora from '../../images/blackaurora.jpg'
import { MdPersonAddAlt1 } from 'react-icons/md'
import Profilkitaplar from './Profilkitaplar'
import Profiltakipciler from './Profiltakipciler'
import Profiltakipedilenler from './Profiltakipedilenler'


const Profilhero = () => {
  const [activeTab, setActiveTab] = useState('kitaplar');
  const [isFollowing, setIsFollowing] = useState(true)

  const handleTakipButton = () => {
    if(isFollowing){
      setIsFollowing(false)
    } else{
      setIsFollowing(true)
    }
  }

  return (
    <div className='profilhero'>
      <div className="phust">
        <img src={blackaurora} alt="profil resmi" className='phaurora'/>
        <p className='phustisim'>Rukiye Aydın</p>
        <p className='phusername'>@rukiyeaydin</p>
        <div className="phistatistik">
            <div className="phwork">
                <p>Kitap sayısı</p>
                <p>0</p>
            </div>
            <div className="phwork">
                <p>Takipçiler</p>
                <p>0</p>
            </div>
            <div className="phtakipci">
                <p>Takip Edilenler</p>
                <p>0</p>
            </div>
        </div>
        <button className={isFollowing ? "phbuton" : "phbuton active"} onClick={handleTakipButton}><MdPersonAddAlt1 style={{marginRight:'5px'}}/>{isFollowing ? "Takip Et" : "Takip ediliyor"}</button>
      </div>
      <div className="phorta">
        <Link className={activeTab === 'kitaplar' ? 'kitaplarLink active' : 'kitaplarLink'} onClick={() => setActiveTab('kitaplar')}>Kitaplar</Link>
        <Link className={activeTab === 'takipciler' ? 'takipcilerLink active' : 'takipcilerLink'} onClick={() => setActiveTab('takipciler')}>Takipçiler</Link>
        <Link className={activeTab === 'takipEdilenler' ? 'takipedilenlerLink active' : 'takipedilenlerLink'} onClick={() => setActiveTab('takipEdilenler')}>Takip Edilenler</Link>
      </div>

      <div className='phaltfull'>
        {activeTab === "kitaplar" && <Profilkitaplar/>}
        {activeTab === "takipciler" && <Profiltakipciler />}
        {activeTab === "takipEdilenler" && <Profiltakipedilenler />}
      </div>
    </div>
  )
}

export default Profilhero
